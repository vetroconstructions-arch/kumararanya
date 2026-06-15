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

    // Send the email
    await transporter.sendMail(mailOptions);

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
