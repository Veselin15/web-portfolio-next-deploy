"use client";
import { motion } from "framer-motion";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  return (
    // Removed bg-slate-950 to allow global gradient
    <section id="education" className="py-24 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20 text-white"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Education</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line - Enhanced Gradient */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 1. The Dot (Timeline Node) */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.4)] z-20">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
                </div>

                {/* 2. The Content Card - Glassmorphism */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group relative overflow-hidden">

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                            <span className="text-xs font-mono font-bold py-1.5 px-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {edu.year}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                                <i className={`fas fa-${edu.icon} text-slate-400 group-hover:text-cyan-400 transition-colors`}></i>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                        </h3>

                        <h4 className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <i className="fas fa-university text-xs"></i> {edu.school}
                        </h4>

                        <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {edu.description}
                        </p>
                    </div>
                  </div>
                </div>

                {/* 3. Empty spacer for the other side (Desktop only) */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}