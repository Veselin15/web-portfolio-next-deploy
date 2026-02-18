import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  // Structured Data for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Veselin Veselinov',
    url: 'https://www.veselin-veselinov.com',
    jobTitle: 'Junior Python Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dobrich',
      addressCountry: 'Bulgaria'
    },
    knowsAbout: ['Python', 'Django', 'FastAPI', 'C++', 'React', 'Docker', 'PostgreSQL', 'Hardware'],
    sameAs: [
      'https://github.com/Veselin15',
      'https://www.linkedin.com/in/veselin-veselinov-a7bb9930a',
      'https://www.fiverr.com/veselin_06/'
    ]
  };

  return (
    <main className="relative" id="top">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <Hero />
      <About />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}