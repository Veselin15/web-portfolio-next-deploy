import { NextResponse } from 'next/server';

// ❌ DELETE THIS LINE: export const runtime = 'edge';

// 1. Define the shape of the data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      error: "Configuration Error",
      details: "RESEND_API_KEY is missing from Cloudflare environment variables."
    }, { status: 500 });
  }

  try {
    const body = await request.json() as ContactFormData;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Validation Error", details: "Missing name, email, or message." }, { status: 400 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['veselinveselinov06@gmail.com'],
        reply_to: email,
        subject: `New Message from ${name} (Portfolio)`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Resend API Error:", errorData);
      return NextResponse.json({
        error: "Resend API Error",
        details: errorData
      }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data });

  } catch (error: unknown) {
    console.error("Server Exception:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({
      error: "Internal Server Exception",
      details: errorMessage
    }, { status: 500 });
  }
}