"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Linkedin, Github } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

// Reusing the Fiverr Icon for consistency
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

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    // Removed bg-slate-950 to allow global gradient
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Dynamic Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">05.</span> Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Introduction & Socials */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-white leading-tight">
                        Let's build something <br />
                        <span className="text-cyan-400">amazing together.</span>
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                        Have a project in mind or just want to discuss the latest tech? Fill out the form, and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="flex gap-4 pt-4">
                    <a href={PROFILE.socials.linkedin} target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all group duration-300" aria-label="LinkedIn">
                        <Linkedin size={24} className="group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href={PROFILE.socials.github} target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all group duration-300" aria-label="GitHub">
                        <Github size={24} className="group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="https://www.fiverr.com/veselin_06/" target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-[#1DBF73] hover:border-[#1DBF73] hover:shadow-[0_0_20px_rgba(29,191,115,0.3)] transition-all group duration-300" aria-label="Fiverr">
                        <FiverrIcon size={24} className="group-hover:scale-110 transition-transform"/>
                    </a>
                </div>
            </motion.div>

            {/* Right: The Form - Glassmorphism Upgrade */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 relative z-10"
                    >
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 border border-green-500/20 mb-4 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                            <Send size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                        <p className="text-slate-300">Thanks for reaching out. I'll check my inbox and get back to you shortly.</p>
                        <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2 bg-white/10 border border-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                            Send another
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition placeholder-slate-600 backdrop-blur-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition placeholder-slate-600 backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                placeholder="What's on your mind?"
                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition placeholder-slate-600 backdrop-blur-sm resize-none"
                            ></textarea>
                        </div>

                        <button
                            disabled={status === "submitting"}
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-white/10"
                        >
                            {status === "submitting" ? (
                                <> <Loader2 className="animate-spin" size={20} /> Sending... </>
                            ) : (
                                <> Send Message <Send size={18} /> </>
                            )}
                        </button>

                        {status === "error" && (
                            <p className="text-red-300 text-sm text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                )}
            </motion.div>
        </div>

      </div>
    </section>
  );
}