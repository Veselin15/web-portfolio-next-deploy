"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CERTIFICATES } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { MouseEvent } from "react";

// --- 1. ICON HELPER ---
const getCertificateIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("django")) return "devicon-django-plain text-[#092E20] group-hover:text-emerald-400";
  if (t.includes("python")) return "devicon-python-plain text-[#3776AB] group-hover:text-cyan-400";
  if (t.includes("postgresql") || t.includes("sql")) return "devicon-postgresql-plain text-[#336791] group-hover:text-blue-400";
  if (t.includes("german") || t.includes("language")) return "fas fa-language text-yellow-500 group-hover:text-yellow-300";
  return "fas fa-certificate text-slate-400 group-hover:text-cyan-400";
};

// --- 2. 3D + SPOTLIGHT CARD COMPONENT ---
const CertificateCard = ({ cert, index }: { cert: typeof CERTIFICATES[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 400, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 400, damping: 20 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const iconClass = getCertificateIcon(cert.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.a
        href={cert.url}
        target="_blank"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        // GLASSMORPHISM UPGRADE
        className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        {/* --- SPOTLIGHT EFFECT --- */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(34, 211, 238, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* --- CONTENT --- */}
        <div className="relative z-20 p-8 flex flex-col h-full items-center text-center">

          {/* Floating Icon Container */}
          <div
            className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:shadow-cyan-500/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            style={{ transform: "translateZ(30px)" }}
          >
             <i className={`${iconClass} text-4xl transition-colors duration-300 drop-shadow-lg`}></i>
          </div>

          <h3
            className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            {cert.title}
          </h3>

          <p
            className="text-sm text-purple-400 uppercase tracking-wider mb-6 font-semibold"
            style={{ transform: "translateZ(10px)" }}
          >
            {cert.issuer}
          </p>

          <div
            className="mt-auto pt-4 w-full border-t border-white/5 flex justify-between items-center"
            style={{ transform: "translateZ(10px)" }}
          >
             <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-md border border-white/10">
               {cert.year}
             </span>

             <span className="flex items-center gap-2 text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
               Verify <ExternalLink size={14} />
             </span>
          </div>
        </div>

        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: "translateZ(1px)" }} />

      </motion.a>
    </motion.div>
  );
};

export default function Certificates() {
  return (
    // Removed bg-slate-950 to allow global gradient
    <section id="certificates" className="py-24 relative overflow-hidden">

      {/* Dynamic Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">03.</span> Certificates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Validating my expertise in <span className="text-cyan-400 font-bold">Python</span>, <span className="text-purple-400 font-bold">Databases</span>, and <span className="text-emerald-400 font-bold">Backend</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {CERTIFICATES.map((cert, index) => (
              <CertificateCard key={index} cert={cert} index={index} />
           ))}
        </div>

      </div>
    </section>
  );
}