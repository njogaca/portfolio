import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jfgc1394@gmail.com",
      subject: `Portfolio: New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: monospace; background: #0c1610; color: #d4e4d8; padding: 24px; border-radius: 8px;">
          <h2 style="color: #3d8b5e; margin-top: 0;">New Contact Message</h2>
          <p><strong style="color: #4ade80;">From:</strong> ${name}</p>
          <p><strong style="color: #4ade80;">Email:</strong> ${email}</p>
          <hr style="border-color: #1a2e1f;" />
          <p><strong style="color: #4ade80;">Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
