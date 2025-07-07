import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        ${featured 
          ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 p-6' 
          : 'bg-white/70 backdrop-blur-sm border border-gray-200 p-4'
        }
        rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
      `}
    >
      <h3 className={`font-semibold mb-2 ${featured ? 'text-xl text-purple-800' : 'text-lg text-gray-800'}`}>
        {title}
      </h3>
      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;