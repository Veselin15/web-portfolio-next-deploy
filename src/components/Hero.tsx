"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import Image from "next/image";

const ROLES = ["Python Developer", "Django Specialist", "Hardware Enthusiast", "Problem Solver"];

// Fiverr Icon (Solid Fill)
const FiverrIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
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

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-15 text-center px-6 relative overflow-hidden selection:bg-cyan-500/30">

      {/* Brighter, More Colorful Aurora Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-75" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-150" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl space-y-8 flex flex-col items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
        >
           {/* Enhanced Glow */}
           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-[50px] opacity-60 animate-pulse" />

           <div className="relative w-full h-full rounded-full border-[4px] border-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl ring-2 ring-white/10">
              <Image
                src="/images/hero/profile.jpg"
                alt="Profile Picture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
           </div>
        </motion.div>

        {/* Title with Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-xl"
        >
          {PROFILE.name.split(" ")[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.Dev</span>
        </motion.h1>

        {/* Typewriter Subtitle - Brighter Text */}
        <div className="h-8 text-xl md:text-2xl font-mono text-slate-300 font-medium">
           I am a <span className="text-cyan-400 font-bold">{displayText}</span>
           <span className="animate-pulse text-cyan-400">|</span>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Github, link: PROFILE.socials.github },
            { icon: Linkedin, link: PROFILE.socials.linkedin },
            { icon: FiverrIcon, link: "https://www.fiverr.com/veselin_06/" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className={`p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 ${
                  i === 2 
                  ? "hover:border-[#1DBF73] hover:text-[#1DBF73] hover:shadow-[0_0_20px_rgba(29,191,115,0.4)]" 
                  : "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              }`}
            >
              <item.icon size={24} />
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
        >
          {/* Brighter 'Magic' Button */}
          <a
            href="#projects"
            className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/80 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900/60">
              Explore Projects
            </span>
          </a>

          <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-white/20 transition font-medium backdrop-blur-sm">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}