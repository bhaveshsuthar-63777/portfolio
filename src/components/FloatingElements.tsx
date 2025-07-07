import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { id: 1, x: 10, y: 20, size: 40, delay: 0, symbol: '⚡' },
    { id: 2, x: 85, y: 15, size: 30, delay: 1, symbol: '🚀' },
    { id: 3, x: 15, y: 70, size: 35, delay: 2, symbol: '💻' },
    { id: 4, x: 80, y: 75, size: 25, delay: 3, symbol: '🔧' },
    { id: 5, x: 50, y: 10, size: 20, delay: 4, symbol: '⭐' },
    { id: 6, x: 20, y: 45, size: 15, delay: 5, symbol: '✨' },
    { id: 7, x: 75, y: 40, size: 18, delay: 6, symbol: '🎯' },
    { id: 8, x: 45, y: 80, size: 22, delay: 7, symbol: '🌟' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute flex items-center justify-center text-white/20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            fontSize: `${element.size * 0.6}px`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + element.delay,
            delay: element.delay * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;