import React from "react";
import { Github, Twitter, Linkedin, Phone } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-center px-6 py-20"
    >
      {/* Texto principal */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <p className="text-yellow-400 text-lg">Hello, I’m</p>
        <h1 className="text-5xl font-bold leading-tight">Arturo Dev</h1>
        <p className="text-gray-400 text-xl">Full Stack Developer</p>

        <a
          href="#contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Hire Me
        </a>

        {/* Redes sociales */}
        <div className="flex gap-4 justify-center md:justify-start mt-6">
          <a href="https://github.com/Arturado" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <Github />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <Twitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <Linkedin />
          </a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <Phone />
          </a>
        </div>
      </div>

      {/* Imagen de perfil */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src="/perfil.jpg"
          alt="Foto de perfil"
          className="rounded-lg object-cover w-[300px] md:w-[400px] shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
