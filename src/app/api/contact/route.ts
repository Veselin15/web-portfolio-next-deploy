import { NextResponse } from 'next/server';

// 1. Mandatory for Cloudflare Pages
export const runtime = 'edge';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Server Error: Missing Config" }, { status: 500 });
  }

  try {
    const body = await request.json() as ContactFormData;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Use standard fetch instead of the Resend SDK
    // This bypasses the "Stream" error completely.
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['veselinveselinov06@gmail.com'],
        reply_to: email, // Note: Resend API uses snake_case 'reply_to'
        subject: `New Message from ${name} (Portfolio)`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Resend API Error:", errorData);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}