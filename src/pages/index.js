import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Reviews  from "@/components/Reviews";
export default function Home() {
  useEffect(() => {
    document.title = "Zarlish Abbasi | content Creator";
  }, []);

  return (
    <main className="scroll-smooth bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Reviews />
    </main>
  );
}
