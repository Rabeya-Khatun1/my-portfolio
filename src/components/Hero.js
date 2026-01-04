import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 flex items-center justify-center section-padding">
      <div className="container-max">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://via.placeholder.com/200x200/0ea5e9/ffffff?text=RK" 
                alt="Rabeya Khatun" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary-600">Rabeya Khatun</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Full-Stack MERN Developer crafting digital experiences with passion and precision
          </motion.p>

          <motion.p 
            className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transforming ideas into scalable web applications using MongoDB, Express.js, React.js, and Node.js
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Get In Touch
            </button>
          </motion.div>

          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 mx-auto text-primary-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;