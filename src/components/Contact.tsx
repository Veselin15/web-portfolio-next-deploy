'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  // 1. Bot-Proofing: The email is broken into parts so simple scrapers can't read it
  const handleEmailClick = () => {
    const user = 'veselinveselinov06';
    const domain = 'gmail.com';
    // 2. This opens the Gmail Compose window directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${user}@${domain}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Let's Connect
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
          I'm currently available for freelance work and open to new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/veselin-veselinov-06b2082a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-gray-100 dark:border-gray-600 group"
          >
            <Linkedin className="w-6 h-6 text-[#0077b5]" />
            <span className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/veselin15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-gray-100 dark:border-gray-600 group"
          >
            <Github className="w-6 h-6 text-gray-900 dark:text-white" />
            <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto" />
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/veselin_v06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-gray-100 dark:border-gray-600 group"
          >
            {/* Simple SVG for Fiverr since Lucide doesn't have it */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1DBF73]">
              <path d="M22.0003 16.5963C21.9829 17.5878 21.6148 18.5358 20.9492 19.2974C20.2835 20.059 19.3557 20.5937 18.303 20.8228C17.2503 21.052 16.1281 20.9636 15.1017 20.5707C14.0754 20.1778 13.1989 19.5008 12.6003 18.6392L12.0003 17.7766L11.4003 18.6392C10.8016 19.5008 9.9252 20.1778 8.89883 20.5707C7.87246 20.9636 6.75026 21.052 5.69757 20.8228C4.64488 20.5937 3.71701 20.059 3.05139 19.2974C2.38577 18.5358 2.01768 17.5878 2.0003 16.5963V7.0003H5.0003V16.5003C5.0003 17.3287 5.67187 18.0003 6.5003 18.0003C7.32872 18.0003 8.0003 17.3287 8.0003 16.5003V7.0003H11.0003V16.5003C11.0003 17.3287 11.6719 18.0003 12.5003 18.0003C13.3287 18.0003 14.0003 17.3287 14.0003 16.5003V7.0003H17.0003V16.5963H22.0003Z" />
              <circle cx="19.5" cy="4.5" r="2.5" />
            </svg>
            <span className="font-medium text-gray-800 dark:text-gray-200">Fiverr</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto" />
          </a>

          {/* Email (Bot Proof) */}
          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-gray-100 dark:border-gray-600 group w-full"
          >
            <Mail className="w-6 h-6 text-red-500" />
            <span className="font-medium text-gray-800 dark:text-gray-200 select-none">
              Send me an Email
            </span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto" />
          </button>

        </div>
      </div>
    </section>
  );
}