import React from 'react';
import { motion } from 'framer-motion';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick, index }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg
        ${isActive 
          ? 'bg-white text-purple-700 border-2 border-purple-300 shadow-xl' 
          : 'bg-white/70 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white/90'
        }
      `}
    >
      {label}
    </motion.button>
  );
};

export default TabButton;