import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-3 flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {skill.charAt(0)}
          </span>
        </div>
        <h3 className="font-semibold text-gray-800 text-sm">{skill}</h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;