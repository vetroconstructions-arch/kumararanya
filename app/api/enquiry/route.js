import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, email, projectInterest } = await req.json();

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'Name and Phone are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
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
