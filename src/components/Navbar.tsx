import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Arturo Dev</h1>
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#sobremi" className="hover:text-blue-600">Sobre mí</a></li>
          <li><a href="#proyectos" className="hover:text-blue-600">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
