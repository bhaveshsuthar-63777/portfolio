import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Multiple animated waves */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-500/20 to-transparent"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 60%, 75% 40%, 50% 60%, 25% 40%, 0% 60%)"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-pink-500/15 to-transparent"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 70%, 80% 50%, 60% 70%, 40% 50%, 20% 70%, 0% 50%)"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 80%, 85% 60%, 70% 80%, 55% 60%, 40% 80%, 25% 60%, 10% 80%, 0% 60%)"
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default WaveBackground; 