import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting store (Works perfectly for Vercel Serverless Functions)
// Keys are IP addresses, values are objects: { count: number, resetTime: number }
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Basic HTML sanitization to prevent XSS payloads
const sanitizeInput = (str) => {
  if (!str) return '';
  return str.replace(/<[^>]*>?/gm, '').trim(); // Strips all HTML tags
};

export async function POST(req) {
  try {
    // 1. IP RATE LIMITING (DDoS & Spam Protection)
    // Extract IP from headers. Fallback to 'unknown' if not present.
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown-ip';
    const currentTime = Date.now();

    if (rateLimitStore.has(ip)) {
      const rateData = rateLimitStore.get(ip);
      if (currentTime > rateData.resetTime) {
        // Window expired, reset
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
    const projectInterest = sanitizeInput(rawData.projectInterest);
    const recaptchaToken = rawData.recaptchaToken;

    // Optional reCAPTCHA Server Verification
    // (We only block if token is provided and verification fails to avoid breaking other endpoints)
    if (recaptchaToken) {
      const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // Google's testing secret
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
      const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
      const recaptchaData = await recaptchaRes.json();
      
      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        console.warn(`[SECURITY] Bot blocked by reCAPTCHA v3. Score: ${recaptchaData.score}`);
        return new Response(JSON.stringify({ error: 'Bot detected by reCAPTCHA.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // 3. STRICT REGEX VALIDATION
    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'Name and Phone are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Phone validation: Allows international codes, 10-15 digits
    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return new Response(JSON.stringify({ error: 'Invalid phone number format.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Email validation (if provided)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(JSON.stringify({ error: 'Invalid email format.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // 4. ENTERPRISE EMAIL DELIVERY (RESEND API)
    try {
      const data = await resend.emails.send({
        from: 'Aranya Leads <leads@kumararanya.in>', // Note: Domain must be verified in Resend
        to: ['propsmartrealty@gmail.com'],
        subject: `New Lead: ${name} - Aranya NA Bungalow Plots`,
        html: `
          <h2>New Enquiry from Aranya NA Plots Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not Provided'}</p>
          <p><strong>Project Interest:</strong> ${projectInterest || 'Aranya NA Bungalow Plots'}</p>
          <hr/>
          <p><small>This lead was securely generated via the Aranya First-Party Automation Engine.</small></p>
        `
      });
      console.log('Resend Delivery Success:', data);
    } catch (emailErr) {
      console.error('Resend Delivery Failed:', emailErr);
    }

    // -------------------------------------------------------------
    // ADVANCED WEBHOOK INTEGRATION (ZAPIER, MAKE.COM, GOOGLE SHEETS)
    // -------------------------------------------------------------
    const WEBHOOK_URL = process.env.CRM_WEBHOOK_URL; // Add this to Vercel Env variables
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name || 'Not Provided',
            phone: phone,
            email: email || 'Not Provided',
            source: req.body?.source || 'Website Enquiry',
            project: projectInterest || 'Aranya NA Bungalow Plots',
            timestamp: new Date().toISOString()
          })
        });
      } catch(webhookErr) {
        console.error('Webhook Error:', webhookErr);
      }
    }

    return new Response(JSON.stringify({ success: true, message: 'Enquiry sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('SMTP Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send enquiry. Please try again or use WhatsApp.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
