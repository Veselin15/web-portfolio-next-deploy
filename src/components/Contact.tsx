'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Copy, Check, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Components ---

// Fiverr Icon (Same as before)
const FiverrIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 508.02 508.02"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="315.97" cy="162.19" r="26.87"/>
    <path
      d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
      transform="translate(-1.83 -0.98)"
    />
  </svg>
);

type ContactOption = {
  id: string;
  name: string;
  icon: LucideIcon | React.FC<{ className?: string }>;
  color: string; // Hex color for hover glow
  href?: string;
  action?: () => void;
  isExternal?: boolean;
  description: string;
};

// --- Main Component ---

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // 1. Bot-Proofing & Logic
  const emailUser = 'veselinveselinov06';
  const emailDomain = 'gmail.com';
  const fullEmail = `${emailUser}@${emailDomain}`;

  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${fullEmail}`;
    window.open(gmailUrl, '_blank');
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the main click
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks: ContactOption[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: '#0077b5',
      description: 'Connect professionally',
      href: 'https://www.linkedin.com/in/veselin-veselinov-06b2082a6/',
      isExternal: true,
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      color: '#333', // Dark for light mode, White for dark mode handled in CSS
      description: 'Check my repositories',
      href: 'https://github.com/veselin15',
      isExternal: true,
    },
    {
      id: 'fiverr',
      name: 'Fiverr',
      icon: FiverrIcon,
      color: '#1DBF73',
      description: 'Hire me for freelance',
      href: 'https://www.fiverr.com/s/0bLY8lx',
      isExternal: true,
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: '#EA4335',
      description: 'Send me a message',
      action: handleEmailClick,
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-[#0B1120]">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and open to new opportunities.
            Have a project in mind? Let's discuss it.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <ContactCard
              key={link.id}
              {...link}
              index={index}
              onCopy={link.id === 'email' ? handleCopyEmail : undefined}
              copied={link.id === 'email' ? copied : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Card Component ---

interface ContactCardProps extends ContactOption {
  index: number;
  onCopy?: (e: React.MouseEvent) => void;
  copied?: boolean;
}

function ContactCard({ name, icon: Icon, color, href, action, isExternal, description, index, onCopy, copied }: ContactCardProps) {
  const isEmail = name === 'Email';

  // Base wrapper content
  const CardContent = () => (
    <div className="flex items-center gap-5 p-6 h-full">
      {/* Icon Container with Glow */}
      <div
        className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 transition-transform group-hover:scale-110 duration-300"
        style={{ color: isEmail ? color : undefined }}
      >
        {/* Hover Glow Effect behind icon */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
          style={{ backgroundColor: color }}
        />
        <Icon className={`w-7 h-7 z-10 transition-colors duration-300 ${!isEmail ? 'text-gray-700 dark:text-white group-hover:text-[var(--hover-color)]' : ''}`}
              style={{ '--hover-color': color } as React.CSSProperties}
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-left">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[var(--hover-color)] transition-colors duration-300"
            style={{ '--hover-color': color } as React.CSSProperties}>
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>

      {/* Action Icons */}
      <div className="flex flex-col items-end gap-2 text-gray-400">
        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />

        {/* Copy Button for Email */}
        {isEmail && onCopy && (
          <button
            onClick={onCopy}
            className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 group/copy"
            title="Copy email to clipboard"
          >
            <AnimatePresence mode='wait' initial={false}>
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="w-4 h-4 text-green-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Copy className="w-4 h-4 group-hover/copy:text-gray-900 dark:group-hover/copy:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </div>
    </div>
  );

  // Common styles for the glassmorphic card
  const containerStyles = `
    group relative w-full overflow-hidden
    bg-white/60 dark:bg-gray-900/40 
    backdrop-blur-md 
    border border-gray-200/50 dark:border-gray-700/50
    rounded-3xl
    hover:border-[var(--hover-color)] dark:hover:border-[var(--hover-color)]
    hover:shadow-lg hover:shadow-[var(--shadow-color)]/10
    transition-all duration-300
  `;

  // Render as Button or Anchor
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
      style={{ '--hover-color': color, '--shadow-color': color } as React.CSSProperties}
    >
      {action ? (
        <button onClick={action} className={`${containerStyles} w-full text-left`}>
          <CardContent />
        </button>
      ) : (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={`${containerStyles} block`}
        >
          <CardContent />
        </a>
      )}
    </motion.div>
  );
}
