import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Cotizador ERP",
    description: "Plugin personalizado para WooCommerce con lógica de cotización, generación de Excel y automatización de emails.",
    link: "#",
  },
  {
    title: "Landing Freelance",
    description: "Página de presentación para un cliente, rápida, responsive y optimizada para SEO.",
    link: "#",
  },
  {
    title: "Portafolio Personal",
    description: "Este portafolio está hecho con Vite + React + Tailwind + TypeScript, ¡y sigue creciendo!",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background text-secondary">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <ProjectCard
          title="ERP Woo + React"
          description="Plugin ERP integrado con WooCommerce para gestión de stock, clientes y cotizaciones."
        />
        <ProjectCard
          title="CV Portafolio"
          description="Proyecto personal en Vite + TS + Tailwind con animaciones y diseño responsive."
        />
        <ProjectCard
          title="Otro Proyecto Cool"
          description="Acá podrías poner cualquier cosa impresionante que hayas hecho 😉"
        />
      </div>
    </section>
  );
};

export default Projects;