import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, address, service } = await req.json();

    // 1. Setup the Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 2. Define the Email Content (The "Alert")
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `🚨 NEW DEPLOYMENT REQUEST: ${name}`,
      html: `
        <div style="font-family: sans-serif; background: #0a0a0a; color: white; padding: 20px; border-left: 5px solid #DFFF00;">
          <h2 style="color: #DFFF00; text-transform: uppercase;">New Lead Captured</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Requested Service:</strong> ${service}</p>
          <hr style="border: 0; border-top: 1px solid #333;" />
          <p style="font-size: 10px; color: #666;">// Sent via Davis Lawn Service Hub // Version 2.0.26</p>
        </div>
      `,
    };

    // 3. Send it
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Mission Dispatched Successfully" }, { status: 200 });

  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ message: "Signal Lost. Try Again." }, { status: 500 });
  }
}