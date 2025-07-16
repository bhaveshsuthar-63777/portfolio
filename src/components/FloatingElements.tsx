import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { id: 1, x: 10, y: 20, size: 40, delay: 0, type: 'circle' },
    { id: 2, x: 85, y: 15, size: 30, delay: 1, type: 'square' },
    { id: 3, x: 15, y: 70, size: 35, delay: 2, type: 'triangle' },
    { id: 4, x: 80, y: 75, size: 25, delay: 3, type: 'circle' },
    { id: 5, x: 50, y: 10, size: 20, delay: 4, type: 'square' },
    { id: 6, x: 20, y: 45, size: 15, delay: 5, type: 'triangle' },
    { id: 7, x: 75, y: 40, size: 18, delay: 6, type: 'circle' },
    { id: 8, x: 45, y: 80, size: 22, delay: 7, type: 'square' },
  ];

  const renderShape = (type: string, size: number) => {
    switch (type) {
      case 'circle':
        return (
          <div 
            className="bg-white/5 border border-white/10 rounded-full"
            style={{ width: size, height: size }}
          />
        );
      case 'square':
        return (
          <div 
            className="bg-white/5 border border-white/10 rotate-45"
            style={{ width: size * 0.7, height: size * 0.7 }}
          />
        );
      case 'triangle':
        return (
          <div 
            className="bg-white/5 border border-white/10"
            style={{ 
              width: 0, 
              height: 0, 
              borderLeft: `${size * 0.4}px solid transparent`,
              borderRight: `${size * 0.4}px solid transparent`,
              borderBottom: `${size * 0.7}px solid rgba(255, 255, 255, 0.05)`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute flex items-center justify-center"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            x: [-3, 3, -3],
            rotate: [0, 180, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12 + element.delay,
            delay: element.delay * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderShape(element.type, element.size)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;