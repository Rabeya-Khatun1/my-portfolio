import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: delay + (i * 0.05)
      }
    })
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      className="overflow-hidden"
      variants={wordVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap">
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className={className}
            variants={letterVariants}
            custom={index}
            style={{
              display: 'inline-block',
              textShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedText;