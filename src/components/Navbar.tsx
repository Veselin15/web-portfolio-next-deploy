"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Home, User, Code, FileText, Mail, Award } from "lucide-react";

const navItems = [
  { name: "Home", href: "#top", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: FileText },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Timer to track inactivity
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. INACTIVITY LOGIC (Hide when stopped)
  useMotionValueEvent(scrollY, "change", (latest) => {
    // A. User is scrolling: Show navbar immediately
    setHidden(false);

    // B. Clear any existing timer so it doesn't hide while we are moving
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // C. Set a new timer. If the user stops scrolling for 2 seconds, hide the nav.
    // We strictly check > 100 so the nav never hides if we are at the very top of the page.
    if (latest > 100) {
      inactivityTimerRef.current = setTimeout(() => {
        setHidden(true);
      }, 2000); // 2000ms = 2 seconds of inactivity
    }
  });

  // 2. ACTIVE SECTION DETECTION (Unchanged)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100) {
        setActiveTab("Home");
        return;
      }
      const sections = [...navItems].reverse();
      for (const item of sections) {
        if (item.href === "#top") continue;
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.4) {
            setActiveTab(item.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Hover Zone: Reveals nav on mouse enter even if hidden
    <div
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 hover:pt-6 transition-all h-20 pointer-events-none hover:pointer-events-auto"
      onMouseEnter={() => {
        // Stop the inactivity timer if the user hovers the area
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
        setHidden(false);
      }}
      onMouseLeave={() => {
        // Optional: Restart timer when mouse leaves?
        // Or just let the next scroll event handle it.
      }}
    >
      <AnimatePresence>
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="pointer-events-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl shadow-cyan-500/5 flex items-center gap-1"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1);
                  const elem = document.getElementById(targetId);
                  if (elem) {
                    window.scrollTo({
                      top: elem.offsetTop,
                      behavior: "smooth",
                    });
                  }
                  setActiveTab(item.name);
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  <item.icon size={18} />
                </span>
                <span className="relative z-10 hidden sm:block">{item.name}</span>
              </a>
            );
          })}
        </motion.nav>
      </AnimatePresence>
    </div>
  );
}