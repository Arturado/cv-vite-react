import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "shadow-lg" : ""
      } bg-[#0f172a]`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 text-white">
        <h1 className="text-2xl font-bold text-primary">Arturo.dev</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm sm:text-base">
          <li><a href="#hero" className="hover:text-indigo-400 transition-colors">Inicio</a></li>
          <li><a href="#about" className="hover:text-indigo-400 transition-colors">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-[#0f172a] text-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li><a href="#hero" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#about" onClick={toggleMenu}>Sobre mí</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Proyectos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
