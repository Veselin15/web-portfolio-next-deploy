// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar"; // <--- Import

export default function Home() {
  return (
    <main className="relative" id="top"> {/* <--- Added ID "top" */}
      <Navbar /> {/* <--- Added Navbar */}

      <Hero />
      <About />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}