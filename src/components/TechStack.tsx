import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'Kubernetes', icon: '☸️', color: 'from-blue-500 to-purple-600' },
    { name: 'Jenkins', icon: '🔧', color: 'from-orange-400 to-red-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'AI/ML', icon: '🤖', color: 'from-purple-400 to-pink-500' },
    { name: 'Linux', icon: '🐧', color: 'from-gray-600 to-black' },
  ];

  return (
    <div className="my-12">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white mb-8 text-center"
      >
        Tech Stack
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`bg-gradient-to-r ${tech.color} p-4 rounded-2xl shadow-lg text-white font-semibold text-center min-w-[100px] cursor-pointer`}
          >
            <div className="text-2xl mb-2">{tech.icon}</div>
            <div className="text-sm">{tech.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;