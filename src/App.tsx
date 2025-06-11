import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>
      
    <main className="pt-20">
      <Hero />
      <About />
      <Service />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
    </>
  );
};

export default App;
