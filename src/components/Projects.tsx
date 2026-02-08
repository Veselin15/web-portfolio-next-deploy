"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, ProjectCategory } from "@/data/portfolio";
import { Github, ArrowRight, Cpu, Terminal, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Software");
  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    // Removed bg-slate-950 to allow global gradient
    <section id="projects" className="py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            <span className={activeTab === "Software" ? "text-cyan-400 transition-colors" : "text-amber-400 transition-colors"}>04.</span> Featured Projects
          </motion.h2>

          {/* Glassy Tab Switcher */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex relative">
              {/* The Sliding Background */}
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-y-1.5 rounded-full shadow-lg ${
                  activeTab === "Software" ? "left-1.5 w-[calc(50%-6px)] bg-slate-800" : "left-[50%] w-[calc(50%-6px)] bg-slate-800"
                }`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />

              <button
                onClick={() => setActiveTab("Software")}
                className={`relative z-10 px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${
                  activeTab === "Software" ? "text-cyan-400" : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal size={16} /> Software
              </button>

              <button
                onClick={() => setActiveTab("Hardware")}
                className={`relative z-10 px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${
                  activeTab === "Hardware" ? "text-amber-400" : "text-slate-400 hover:text-white"
                }`}
              >
                <Cpu size={16} /> Hardware
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "Software" ? (
                  // --- SOFTWARE CARD DESIGN (Glassmorphism) ---
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                  >
                    <div className="h-full bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">

                        {/* Decorative Gradient Blob */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

                        {/* Header */}
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-cyan-400 shadow-inner group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                                <FolderGit2 size={28} strokeWidth={1.5} />
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono group-hover:text-cyan-400 transition-colors">
                                <Github size={14} />
                                <span>SOURCE</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                            {project.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="space-y-3 relative z-10">
                            <div className="h-px w-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors" />
                            <div className="flex flex-wrap gap-2 pt-1">
                                {project.tech?.slice(0, 4).map((t) => (
                                    <span key={t} className="text-[11px] font-mono font-medium text-cyan-300/70 bg-cyan-500/5 px-2.5 py-1 rounded-md border border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                                        {t}
                                    </span>
                                ))}
                                {project.tech && project.tech.length > 4 && (
                                    <span className="text-[11px] font-mono text-slate-500 py-1 px-1">+{project.tech.length - 4}</span>
                                )}
                            </div>
                        </div>
                    </div>
                  </a>
                ) : (
                  // --- HARDWARE CARD DESIGN (Image Focus + Glass) ---
                  <Link href={`/project/${project.id}`} className="block h-full group">
                    <div className="h-full bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-3xl relative overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10">

                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-90" />
                        {project.image ? (
                           <Image
                             src={project.image}
                             alt={project.title}
                             fill
                             className="object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        ) : (
                           <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                             <Cpu size={48} className="text-slate-700" />
                           </div>
                        )}
                        <div className="absolute top-4 right-4 z-20 bg-amber-400/10 backdrop-blur-md border border-amber-400/20 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Hardware
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7 relative z-20 -mt-16">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors leading-tight">
                            {project.title}
                            </h3>
                            <div className="w-12 h-1 bg-amber-500/50 rounded-full group-hover:w-20 transition-all duration-300" />
                        </div>

                        <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex items-center text-amber-400 text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                          View Case Study <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}