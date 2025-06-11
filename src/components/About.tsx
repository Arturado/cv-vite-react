import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase text-yellow-400 font-semibold tracking-wide mb-2">About Me</h2>
        <h3 className="text-4xl font-bold mb-12 text-white/10 relative inline-block">
          <span className="absolute top-0 left-0 text-white text-lg font-bold tracking-wide underline decoration-yellow-400 decoration-4">
            ABOUT ME
          </span>
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Imagen del perfil */}
          <div className="flex justify-center">
            <img
              src="/perfil.jpg" // reemplaza este archivo por el tuyo real en /public
              alt="Arturo"
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>

          {/* Información personal */}
          <div>
            <h4 className="text-2xl font-bold mb-2">Hi There! I'm Arturo</h4>
            <p className="text-yellow-400 font-semibold mb-4">Full Stack Developer</p>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              I am a Full Stack Developer with a strong focus on clean code, elegant architecture and scalable frontend/backend solutions. I love building efficient, accessible web experiences that perform beautifully across devices.
            </p>

            <div className="text-sm text-gray-400 space-y-2 mb-8">
              <p><span className="text-white">Birthday</span>: May 07, 1990</p>
              <p><span className="text-white">Phone</span>: +56 9 1234 5678</p>
              <p><span className="text-white">Email</span>: arturo.dev@email.com</p>
              <p><span className="text-white">From</span>: Santiago, Chile</p>
              <p><span className="text-white">Language</span>: Spanish, English</p>
              <p><span className="text-white">Freelance</span>: Available</p>
            </div>

            <a
              href="/cv-arturo.pdf"
              download
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
