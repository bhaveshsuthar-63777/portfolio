import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: 25, suffix: '+' },
    { label: 'Technologies Mastered', value: 17, suffix: '+' },
    { label: 'Years of Learning', value: 3, suffix: '+' },
    { label: 'Lines of Code', value: 10000, suffix: '+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg"
        >
          <div className="text-3xl font-bold text-white mb-2">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-white/80 text-sm font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;