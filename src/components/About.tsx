"use client";
import { motion, useMotionTemplate, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// --- 1. ANIMATED COUNTER COMPONENT ---
const Counter = ({ to, text }: { to: number; text: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [isInView, to]);

  return (
    <div className="flex flex-col items-center sm:items-start">
      <h4 className="text-4xl font-bold text-white flex items-center gap-1 drop-shadow-lg">
        <span ref={nodeRef}>0</span>
        <span className="text-cyan-400">+</span>
      </h4>
      <span className="text-xs text-slate-400 uppercase tracking-widest font-mono mt-1">{text}</span>
    </div>
  );
};

// --- 2. INTERACTIVE HIGHLIGHT COMPONENT ---
const Highlight = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span className={`${color} font-bold relative inline-block cursor-pointer group`}>
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current opacity-50 transition-all duration-300 group-hover:w-full" />
  </span>
);

// --- 3. SPOTLIGHT TECH CARD COMPONENT ---
const TechCard = ({ title, icon, color, children }: { title: string; icon: string; color: string; children: React.ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-cyan-500/10"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-6 h-full flex flex-col justify-between">
        <h4 className="font-bold text-slate-200 mb-6 flex items-center gap-3 text-sm uppercase tracking-wider">
          <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
             <i className={`fas ${icon} ${color}`}></i>
          </div>
          {title}
        </h4>
        <div className="flex gap-5 text-4xl text-slate-500 group-hover:text-slate-200 transition-colors">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    // Removed bg-slate-950 to allow global gradient
    <section id="about" className="py-32 relative overflow-hidden">

      {/* Dynamic Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT COLUMN: BIO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="space-y-4">
             <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">01. About Me</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Veselin</span>.
             </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I am a passionate Junior Developer who loves building software that solves real-world problems.
              My curiosity doesn't stop at the screen; I have a deep love for <Highlight color="text-cyan-400">electronics and DIY projects</Highlight>,
              often grabbing the soldering iron to bring ideas to life. I am fascinated by the bridge between <Highlight color="text-purple-400">hardware and software</Highlight>.
            </p>

            <p>
              When I'm not coding or building circuits, I am exploring the world. I love <span className="text-white font-bold">traveling and sports</span>.
              Since last year, I have discovered a passion for <Highlight color="text-cyan-400">reading books</Highlight>,
              and I've been training <Highlight color="text-rose-400">boxing</Highlight> to keep my mind and body sharp.
              I push my limits by conquering <Highlight color="text-emerald-400">mountain peaks</Highlight>.
            </p>
          </div>

          {/* Interactive Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
             <Counter to={2} text="Years Coding" />
             <Counter to={15} text="Projects" />
             <Counter to={100} text="Passion" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-2"
          >
             <a href="https://www.goodreads.com/user/show/112454127-ves-bg" target="_blank"
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md text-slate-200 font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all shadow-lg group">
                <i className="fab fa-goodreads text-2xl text-[#e8e4d9] group-hover:rotate-12 transition-transform"></i>
                <span>My Goodreads Profile</span>
             </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: TECH STACK GRID */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           {/* The 2x2 Grid Layout with Spotlight Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* 1. BACKEND */}
              <TechCard title="Backend" icon="fa-server" color="text-cyan-400">
                <i className="devicon-python-plain hover:text-[#3776AB] transition-colors" title="Python"></i>
                <i className="devicon-django-plain hover:text-[#092E20] transition-colors" title="Django"></i>
                <i className="devicon-fastapi-plain hover:text-[#009688] transition-colors" title="FastAPI"></i>
              </TechCard>

              {/* 2. DATA & OPS */}
              <TechCard title="Data & Ops" icon="fa-database" color="text-purple-400">
                <i className="devicon-postgresql-plain hover:text-[#336791] transition-colors" title="PostgreSQL"></i>
                <i className="devicon-redis-plain hover:text-[#DC382D] transition-colors" title="Redis"></i>
                <i className="devicon-docker-plain hover:text-[#2496ED] transition-colors" title="Docker"></i>
              </TechCard>

              {/* 3. EMBEDDED */}
              <TechCard title="Embedded" icon="fa-microchip" color="text-amber-400">
                <i className="devicon-cplusplus-plain hover:text-[#00599C] transition-colors" title="C++"></i>
                <i className="devicon-arduino-plain hover:text-[#00979D] transition-colors" title="Arduino"></i>
                <i className="devicon-embeddedc-plain hover:text-white transition-colors" title="Embedded C"></i>
              </TechCard>

              {/* 4. FRONTEND */}
              <TechCard title="Frontend" icon="fa-laptop-code" color="text-pink-400">
                <i className="devicon-html5-plain hover:text-[#E34F26] transition-colors" title="HTML5"></i>
                <i className="devicon-tailwindcss-original hover:text-[#38B2AC] transition-colors" title="Tailwind"></i>
                <i className="devicon-javascript-plain hover:text-[#F7DF1E] transition-colors" title="JavaScript"></i>
              </TechCard>

           </div>
        </motion.div>
      </div>
    </section>
  );
}