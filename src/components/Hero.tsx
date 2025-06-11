import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
    id="inicio"
    className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-primary to-secondary text-white"
>
      <h1 className="text-5xl font-bold mb-4">¡Hola! Soy Arturo 👋</h1>
      <h2 className="text-2xl font-semibold mb-4">Desarrollador Web Full Stack</h2>
      <p className="max-w-xl text-lg mb-6">
        Tengo experiencia construyendo soluciones modernas y escalables usando React, TypeScript, WordPress y Laravel. Este sitio es mi CV interactivo y portafolio digital.
      </p>
      <a href="/cv-arturo.pdf" download className="bg-accent text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"> Descargar CV </a>
    </section>
  );
};

export default Hero;
