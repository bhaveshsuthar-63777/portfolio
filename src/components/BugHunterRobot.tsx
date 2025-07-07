import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple anime-style robot SVG (can be replaced with a more detailed SVG later)
const RobotSVG = ({ action }: { action: 'idle' | 'hammer' }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <rect x="18" y="20" width="24" height="24" rx="8" fill="#A3BFFA" stroke="#4C51BF" strokeWidth="2"/>
    {/* Head */}
    <rect x="20" y="8" width="20" height="16" rx="6" fill="#F7FAFC" stroke="#4C51BF" strokeWidth="2"/>
    {/* Eyes */}
    <ellipse cx="26" cy="16" rx="2" ry="2" fill="#4C51BF"/>
    <ellipse cx="34" cy="16" rx="2" ry="2" fill="#4C51BF"/>
    {/* Antenna */}
    <rect x="28" y="2" width="4" height="8" rx="2" fill="#4C51BF"/>
    {/* Arms */}
    <rect x="10" y="28" width="8" height="4" rx="2" fill="#A3BFFA" stroke="#4C51BF" strokeWidth="2"/>
    <rect x="42" y="28" width="8" height="4" rx="2" fill="#A3BFFA" stroke="#4C51BF" strokeWidth="2"/>
    {/* Legs */}
    <rect x="24" y="44" width="4" height="10" rx="2" fill="#4C51BF"/>
    <rect x="32" y="44" width="4" height="10" rx="2" fill="#4C51BF"/>
    {/* Hammer (only when action is hammer) */}
    {action === 'hammer' && (
      <g>
        <rect x="44" y="12" width="12" height="4" rx="2" fill="#F6E05E" stroke="#B7791F" strokeWidth="1"/>
        <rect x="54" y="13" width="2" height="10" rx="1" fill="#B7791F"/>
      </g>
    )}
    {/* Cute mouth */}
    <path d="M27 20 Q30 23 33 20" stroke="#4C51BF" strokeWidth="1.5" fill="none"/>
  </svg>
);

const BugSVG = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="15" cy="20" rx="8" ry="6" fill="#222"/>
    <ellipse cx="15" cy="14" rx="6" ry="7" fill="#4FD1C5"/>
    <line x1="15" y1="7" x2="15" y2="2" stroke="#222" strokeWidth="2"/>
    <line x1="9" y1="14" x2="2" y2="10" stroke="#222" strokeWidth="2"/>
    <line x1="21" y1="14" x2="28" y2="10" stroke="#222" strokeWidth="2"/>
  </svg>
);

const BugHunterRobot: React.FC = () => {
  const [position, setPosition] = useState({ x: 100, y: 300 });
  const [action, setAction] = useState<'idle' | 'hammer'>('idle');
  const [showBug, setShowBug] = useState(false);
  const [bugPos, setBugPos] = useState({ x: 200, y: 320 });
  const [moving, setMoving] = useState(true);

  // Move robot randomly
  useEffect(() => {
    if (!moving) return;
    const moveInterval = setInterval(() => {
      // 10% chance to "find a bug"
      if (Math.random() < 0.1) {
        // Place bug near robot
        setBugPos({
          x: position.x + 40 + Math.random() * 40,
          y: position.y + Math.random() * 20 - 10,
        });
        setShowBug(true);
        setMoving(false);
        setTimeout(() => {
          setAction('hammer');
          setTimeout(() => {
            setShowBug(false);
            setAction('idle');
            setMoving(true);
          }, 900);
        }, 700);
      } else {
        // Move to a new random position
        setPosition(pos => ({
          x: Math.max(20, Math.min(window.innerWidth - 100, pos.x + (Math.random() - 0.5) * 200)),
          y: Math.max(80, Math.min(window.innerHeight - 120, pos.y + (Math.random() - 0.5) * 120)),
        }));
      }
    }, 1800);
    return () => clearInterval(moveInterval);
  }, [position, moving]);

  return (
    <div style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 30 }}>
      <AnimatePresence>
        {showBug && (
          <motion.div
            key="bug"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ position: 'absolute', left: bugPos.x, top: bugPos.y }}
          >
            <BugSVG />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
        style={{ position: 'absolute', width: 60, height: 60 }}
      >
        <RobotSVG action={action} />
      </motion.div>
    </div>
  );
};

export default BugHunterRobot; 