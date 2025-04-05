import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

import Hero from "./components/Hero";

import About from "./components/About";

import Skills from "./components/Skills";

import Projects from "./components/Projects";

import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,

      once: true,

      offset: 100,

      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full scroll-smooth font-sans">
      <section data-aos="fade-up">
        <Hero />
      </section>
      <section data-aos="fade-up">
        <About />
      </section>
      <section data-aos="fade-up">
        <Skills />
      </section>
      <section data-aos="fade-up">
        <Projects />
      </section>
      <section data-aos="fade-up">
        <Contact />
      </section>

      <footer
        data-aos="fade-up"
        className="text-center py-6 text-sm text-gray-500 bg-gray-100"
      >
        © 2025 Kratik Modh. Built with 💙 using React + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
