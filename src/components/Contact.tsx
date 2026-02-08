'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components & Types ---

// Custom Fiverr Icon Component
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
  name: string;
  icon: LucideIcon | React.FC<{ className?: string }>;
  colorClass: string; // Tailwind class for text color on hover/default
  href?: string;
  action?: () => void;
  isExternal?: boolean;
};

// --- Main Component ---

export default function Contact() {
  // 1. Bot-Proofing: The email is broken into parts
  const handleEmailClick = () => {
    const user = 'veselinveselinov06';
    const domain = 'gmail.com';
    // 2. This opens the Gmail Compose window directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${user}@${domain}`;
    window.open(gmailUrl, '_blank');
  };

  const socialLinks: ContactOption[] = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      colorClass: 'text-[#0077b5]', // Official LinkedIn Blue
      href: 'https://www.linkedin.com/in/veselin-veselinov-06b2082a6/',
      isExternal: true,
    },
    {
      name: 'GitHub',
      icon: Github,
      colorClass: 'text-gray-900 dark:text-white',
      href: 'https://github.com/veselin15',
      isExternal: true,
    },
    {
      name: 'Fiverr',
      icon: FiverrIcon,
      colorClass: 'text-[#1DBF73]', // Official Fiverr Green
      href: 'https://www.fiverr.com/veselin_v06',
      isExternal: true,
    },
    {
      name: 'Email',
      icon: Mail,
      colorClass: 'text-red-500',
      action: handleEmailClick,
      isExternal: false,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities.
            Feel free to reach out via your preferred platform.
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {socialLinks.map((link) => (
            <ContactCard key={link.name} {...link} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Sub-Component for Individual Cards ---

function ContactCard({ name, icon: Icon, colorClass, href, action, isExternal }: ContactOption) {
  const content = (
    <>
      <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {name === 'Email' ? 'Send me an Email' : name}
      </span>
      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300 ml-auto transition-colors" />
    </>
  );

  const baseClasses = "flex items-center gap-4 p-4 bg-white dark:bg-gray-900/50 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 group transition-all hover:scale-[1.02] active:scale-[0.98]";

  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
      {action ? (
        <button onClick={action} className={`${baseClasses} w-full`}>
          {content}
        </button>
      ) : (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={baseClasses}
        >
          {content}
        </a>
      )}
    </motion.div>
  );
}