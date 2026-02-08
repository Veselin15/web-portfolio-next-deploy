import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// 1. Force Edge Runtime for Cloudflare
export const runtime = 'edge';

// 2. Define the shape of the data we expect
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  // Safety check for API Key
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return NextResponse.json({ error: "Server Error: Missing Config" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 3. FIX: Cast the JSON to our interface using 'as'
    const body = await request.json() as ContactFormData;
    const { name, email, message } = body;

    // Validate fields exist
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['veselinveselinov06@gmail.com'],
      replyTo: email,
      subject: `New Message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}