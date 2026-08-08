import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <div id="top" />

      <Navbar />

      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}