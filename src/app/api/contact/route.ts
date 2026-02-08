import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['veselinveselinov06@gmail.com'],
      replyTo: email,
      subject: `New Message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Check if Resend actually returned an error in the data object
    if (data.error) {
      console.error("Resend Error:", data.error);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // LOG THE ERROR HERE so you can see it in your terminal
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}