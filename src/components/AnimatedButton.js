import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 1.5],
      opacity: [0.8, 0.4, 0],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.button
      className={`relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden group ${className}`}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10 text-lg">{children}</span>
      
      {/* Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-coral-500 to-orange-500 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Wave Effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? [0, 0.1, 0] : 0,
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Ripple Effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-30 blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      {isHovered && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              variants={rippleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      )}
      
      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        animate={{
          borderColor: isHovered 
            ? ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)']
            : 'rgba(255,255,255,0.2)'
        }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;