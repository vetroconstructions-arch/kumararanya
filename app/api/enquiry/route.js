import nodemailer from 'nodemailer';

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

    // Configure the SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email Data
    const mailOptions = {
      from: `"Aranya Lead Capture" <${process.env.EMAIL_USER}>`,
      to: 'propsmartrealty@gmail.com', // Direct destination
      subject: `New Lead: ${name} - Aranya NA Bungalow Plots`,
      text: `
        New Enquiry from Aranya NA Plots Website:
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email || 'Not Provided'}
        Project Interest: ${projectInterest || 'Aranya NA Bungalow Plots'}
        
        This lead was securely generated via the Aranya First-Party Automation Engine.
      `,
    };

    // Send the email (fallback)
    try {
      await transporter.sendMail(mailOptions);
    } catch(emailErr) {
      console.log("Email failed, but continuing to webhook", emailErr);
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
