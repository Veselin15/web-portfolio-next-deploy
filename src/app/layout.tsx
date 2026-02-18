import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Configure Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// 2. Enhanced Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.veselin-veselinov.com'),
  title: {
    template: "%s | Veselin Veselinov",
    default: "Veselin Veselinov | Junior Python Developer & Hardware Enthusiast",
  },
  description: "Portfolio of Veselin Veselinov, a Junior Python Developer specializing in Django, C++, and Hardware/Embedded projects.",
  keywords: ["Python Developer", "Django", "Hardware", "IoT", "Next.js Portfolio", "Veselin Veselinov", "Embedded Systems", "React", "Bulgaria"],
  authors: [{ name: "Veselin Veselinov" }],
  creator: "Veselin Veselinov",

  // Open Graph for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Veselin Veselinov | Python & Hardware Portfolio",
    description: "Explore my projects in Python, Django, and Embedded Systems.",
    url: 'https://www.veselin-veselinov.com',
    siteName: 'Veselin Veselinov Portfolio',
    images: [
      {
        url: '/images/hero/profile.jpg', // Using your profile image as the preview
        width: 1200,
        height: 630,
        alt: 'Veselin Veselinov Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Veselin Veselinov | Junior Python Developer",
    description: "Specializing in Django and Hardware projects.",
    images: ['/images/hero/profile.jpg'],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* External Icon Sets */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>

      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased relative`}>

        {/* --- Global Background Layers --- */}
        {/* Layer 1: The Tech Grid */}
        <div className="fixed inset-0 z-0 bg-grid-pattern opacity-60 pointer-events-none" />

        {/* Layer 2: Vignette Overlay */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        {/* --- Main Content --- */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}

          {/* Simple Footer */}
          <footer className="py-8 text-center text-slate-500 text-sm font-mono border-t border-white/5 mt-auto">
            <p>© {new Date().getFullYear()} Veselin.Dev. Built with Next.js & Tailwind.</p>
          </footer>
        </div>

      </body>
    </html>
  );
}