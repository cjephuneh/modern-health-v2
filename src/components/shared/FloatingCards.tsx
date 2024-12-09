import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingCard = ({ children, delay = 0, className = '' }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={`bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;