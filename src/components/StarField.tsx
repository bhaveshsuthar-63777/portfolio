import React from 'react';
import { motion } from 'framer-motion';

const StarField: React.FC = () => {
  const gridPoints = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: (i % 10) * 10,
    y: Math.floor(i / 10) * 10,
    size: Math.random() * 1 + 0.5,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {gridPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute bg-white/10 rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            delay: point.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarField;