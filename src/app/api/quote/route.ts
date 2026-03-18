import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, address, service } = body;

    // 1. Setup the Transport (Using Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
      user: process.env.EMAIL_USER, // Check for typos here
      pass: process.env.EMAIL_PASS, // Check for typos here
    },
    });

    // 2. The Intel Package (Email Content)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to yourself
      subject: `[DISPATCH] New Quote Request: ${name}`,
      text: `
        MISSION INTEL:
        Name: ${name}
        Email: ${email}
        Address: ${address}
        Tier: ${service}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "TRANSMISSION_SUCCESS" }, { status: 200 });
  } catch (error) {
    console.error("SIGNAL_FAILURE:", error);
    return NextResponse.json({ error: "OFFLINE" }, { status: 500 });
  }
}