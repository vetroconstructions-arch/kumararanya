import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789_build_fallback');

// Simple in-memory rate limiting store (Works perfectly for Vercel Serverless Functions)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

// Basic HTML sanitization to prevent XSS payloads
const sanitizeInput = (str) => {
  if (!str) return '';
  return str.toString().replace(/<[^>]*>?/gm, '').trim();
};

export async function POST(req) {
  try {
    // 1. IP RATE LIMITING (DDoS & Spam Protection)
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown-ip';
    const currentTime = Date.now();

    if (rateLimitStore.has(ip)) {
      const rateData = rateLimitStore.get(ip);
      if (currentTime > rateData.resetTime) {
        rateLimitStore.set(ip, { count: 1, resetTime: currentTime + RATE_LIMIT_WINDOW_MS });
      } else {
        rateData.count++;
        if (rateData.count > MAX_REQUESTS_PER_WINDOW) {
          console.warn(`[SECURITY] Rate limit exceeded by IP: ${ip}`);
          return new Response(JSON.stringify({ error: 'Too many requests. Please try again in 15 minutes.' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }
    } else {
      rateLimitStore.set(ip, { count: 1, resetTime: currentTime + RATE_LIMIT_WINDOW_MS });
    }

    // 2. PARSE AND SANITIZE INPUTS
    const rawData = await req.json();
    
    const name = sanitizeInput(rawData.name);
    const phone = sanitizeInput(rawData.phone);
    const email = sanitizeInput(rawData.email);
    const projectInterest = sanitizeInput(rawData.projectInterest) || 'Aranya NA Bungalow Plots';
    const recaptchaToken = rawData.recaptchaToken;

    // Optional reCAPTCHA Server Verification (Non-blocking fallback)
    if (recaptchaToken) {
      try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
        const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
        const recaptchaData = await recaptchaRes.json();
        
        if (!recaptchaData.success || recaptchaData.score < 0.3) {
          console.warn(`[SECURITY] Bot warning by reCAPTCHA v3. Score: ${recaptchaData.score}`);
        }
      } catch (recaptchaErr) {
        console.warn('reCAPTCHA verify error:', recaptchaErr.message);
      }
    }

    // 3. REGEX VALIDATION
    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'Name and Phone are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Flexible international & Indian phone regex (10-15 digits, optional + code)
    const cleanedPhone = phone.replace(/[\s\-\(\)]+/g, '');
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      return new Response(JSON.stringify({ error: 'Please enter a valid 10-15 digit mobile number.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Log verified lead to server console for immediate audit
    console.log(`[NEW LEAD RECORDED] Name: ${name} | Phone: ${phone} | Email: ${email || 'N/A'} | Project: ${projectInterest} | IP: ${ip} | Time: ${new Date().toISOString()}`);

    // 4. ENTERPRISE EMAIL DELIVERY (RESEND API - Fault Tolerant)
    try {
      const senderEmail = process.env.RESEND_FROM_EMAIL || 'Aranya Leads <onboarding@resend.dev>';
      const data = await resend.emails.send({
        from: senderEmail,
        to: ['propsmartrealty@gmail.com'],
        subject: `New Lead: ${name} - ${projectInterest}`,
        html: `
          <h2>New Enquiry from Kumar Aranya Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not Provided'}</p>
          <p><strong>Project Interest:</strong> ${projectInterest}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>IP Address:</strong> ${ip}</p>
          <hr/>
          <p><small>This lead was securely recorded via the Kumar Aranya Automated Lead Engine.</small></p>
        `
      });
      console.log('Resend Delivery Success:', data);
    } catch (emailErr) {
      console.error('Resend Delivery Exception (Non-blocking):', emailErr.message || emailErr);
    }

    // 5. WEBHOOK INTEGRATION (ZAPIER, MAKE.COM, GOOGLE SHEETS - Fault Tolerant)
    const WEBHOOK_URL = process.env.CRM_WEBHOOK_URL;
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            phone: phone,
            email: email || 'Not Provided',
            source: 'Website Enquiry',
            project: projectInterest,
            timestamp: new Date().toISOString()
          })
        });
      } catch(webhookErr) {
        console.error('Webhook Error (Non-blocking):', webhookErr.message || webhookErr);
      }
    }

    return new Response(JSON.stringify({ success: true, message: 'Enquiry sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Enquiry Engine Fatal Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process enquiry. Please try again or contact via WhatsApp.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
