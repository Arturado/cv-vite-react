import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 max-w-sm w-full text-secondary border border-zinc-200 dark:border-zinc-700"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-md mb-4 w-full h-40 object-cover"
        />
      )}
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
