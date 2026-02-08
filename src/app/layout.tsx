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

// 2. Enhanced Metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Veselin.Dev",
    default: "Veselin.Dev | Python Developer & Hardware Enthusiast",
  },
  description: "Portfolio of a Junior Python Developer specializing in Django and Hardware projects.",
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon in /public
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
        {/* External Icon Sets (Optional if you are migrating to Lucide completely) */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>

      {/* REMOVED: 'bg-slate-950' and 'text-slate-200'
         REASON: These are now handled by globals.css to support the gradient background.
      */}
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased relative`}>

        {/* --- Global Background Layers --- */}

        {/* Layer 1: The Tech Grid (Fixed so it doesn't scroll away) */}
        <div className="fixed inset-0 z-0 bg-grid-pattern opacity-60 pointer-events-none" />

        {/* Layer 2: Vignette Overlay (Focuses attention on center) */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        {/* --- Main Content --- */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}

          {/* Simple Footer (Optional) */}
          <footer className="py-8 text-center text-slate-500 text-sm font-mono border-t border-white/5 mt-auto">
            <p>© {new Date().getFullYear()} Veselin.Dev. Built with Next.js & Tailwind.</p>
          </footer>
        </div>

      </body>
    </html>
  );
}