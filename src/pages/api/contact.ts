import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// 1. Pages Router Edge Runtime (Standard & Stable)
export const runtime = 'edge';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: NextRequest) {
  // 2. Handle only POST requests
  if (req.method !== 'POST') {
    return new NextResponse(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return new NextResponse(
      JSON.stringify({ error: "Configuration Error", details: "RESEND_API_KEY is missing." }),
      { status: 500 }
    );
  }

  try {
    const body = await req.json() as ContactFormData;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Validation Error", details: "Missing required fields." }),
        { status: 400 }
      );
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
      return new NextResponse(
        JSON.stringify({ error: "Resend API Error", details: errorData }),
        { status: 500 }
      );
    }

    const data = await res.json();
    return new NextResponse(JSON.stringify({ success: true, data }), { status: 200 });

  } catch (error: unknown) {
    console.error("Server Exception:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Exception", details: errorMessage }),
      { status: 500 }
    );
  }
}