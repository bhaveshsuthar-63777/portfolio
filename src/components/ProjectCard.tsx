import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        ${featured 
          ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-2 border-purple-400/50 p-8' 
          : 'bg-white/80 backdrop-blur-lg border border-white/30 p-6'
        }
        rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project icon */}
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
          featured 
            ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
            : 'bg-gradient-to-br from-gray-600 to-gray-700'
        }`}>
          <Code size={24} className="text-white" />
        </div>
        
        <h3 className={`font-bold mb-3 ${featured ? 'text-2xl text-purple-800' : 'text-xl text-gray-800'}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200/50"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <Github size={16} />
            <span>View Code</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-300 border border-gray-200"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;