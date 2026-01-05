import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import myPhoto from '../assets/my-photo.jpg'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Smooth mouse following
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({
        x: (clientX / innerWidth) * 100,
        y: (clientY / innerHeight) * 100,
      });
      
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Letter-by-letter animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Floating wave animation for letters
  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Morphing blob animation
  const blobVariants = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "50% 40% 60% 30% / 70% 50% 40% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%"
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(37, 99, 235, 0.15) 0%, 
              rgba(124, 58, 237, 0.1) 35%, 
              rgba(13, 148, 136, 0.08) 70%, 
              transparent 100%
            )
          `
        }}
      />

      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/40 via-purple-200/30 to-teal-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-200/40 via-blue-200/30 to-purple-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -5
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              width: `${20 + (i % 3) * 15}px`,
              height: `${20 + (i % 3) * 15}px`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            <div 
              className="w-full h-full"
              style={{
                background: i % 3 === 0 
                  ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(147, 197, 253, 0.2))'
                  : i % 3 === 1
                  ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(196, 181, 253, 0.2))'
                  : 'linear-gradient(135deg, rgba(13, 148, 136, 0.4), rgba(167, 243, 208, 0.2))',
                borderRadius: i % 4 === 0 ? '50%' 
                  : i % 4 === 1 ? '30% 70% 70% 30% / 30% 30% 70% 70%' 
                  : i % 4 === 2 ? '25% 75% 25% 75% / 75% 25% 75% 25%'
                  : '40% 60% 60% 40% / 60% 30% 70% 40%'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            style={{ y, opacity }}
          >
            
            {/* Greeting Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-large text-gradient font-semibold tracking-wide"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Hi, I am Rabeya Khatun, a MERN Stack Developer
              </motion.p>
            </motion.div>

            {/* Main Title with Letter Animation */}
            <motion.div
              className="relative"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap justify-center lg:justify-start leading-none">
                {"Crafting Digital".split('').map((letter, index) => (
                  <motion.span
                    key={`word1-${index}`}
                    className="heading-primary inline-block"
                    variants={letterVariants}
                    animate={{
                      ...floatingVariants.animate,
                      transition: {
                        ...floatingVariants.animate.transition,
                        delay: index * 0.1
                      }
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      color: ["#2563eb", "#7c3aed", "#0d9488", "#2563eb"],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start leading-none mt-2">
                {"Experiences".split('').map((letter, index) => (
                  <motion.span
                    key={`word2-${index}`}
                    className="heading-primary inline-block"
                    variants={letterVariants}
                    animate={{
                      ...floatingVariants.animate,
                      transition: {
                        ...floatingVariants.animate.transition,
                        delay: (index + 15) * 0.1
                      }
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 10, -10, 0],
                      color: ["#7c3aed", "#0d9488", "#2563eb", "#7c3aed"],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Animated Underline */}
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full mx-auto lg:mx-0 mt-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-large max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Passionate about creating modern web applications with clean code, 
                innovative solutions, and exceptional user experiences that make a difference.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Resume Download and Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* View My Work Button */}
              <motion.button
                className="group relative btn btn-primary overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#featured-projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {/* Button Background Wave Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button Text */}
                <span className="relative z-10 flex items-center">
                  View My Work
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Resume Download Button */}
              <motion.button
                className="group relative btn btn-secondary overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Placeholder for resume download - replace with actual resume URL
                  window.open('/resume.pdf', '_blank');
                }}
              >
                {/* Button Background Wave Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button Text */}
                <span className="relative z-10 flex items-center">
                  Download Resume
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </span>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <span className="text-sm text-secondary font-medium">Connect with me:</span>
                
                {/* GitHub */}
                <motion.a
                  href="https://github.com/Rabeya-Khatun1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/rabeya-khatun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                {/* Twitter */}
                <motion.a
                  href="https://twitter.com/rabeya_khatun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="https://facebook.com/rabeya.khatun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="hidden lg:flex items-center space-x-3 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              <motion.div
                className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2"
                  animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <span className="text-sm text-secondary">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              
              {/* Main Profile Container with Morphing Shape */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
                style={{ x: mouseX, y: mouseY }}
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Morphing Blob Background */}
                <motion.div
                  className="absolute inset-4 bg-gradient-to-br from-blue-100/80 via-purple-100/60 to-teal-100/80 backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden"
                  variants={blobVariants}
                  animate="animate"
                >
                  {/* Profile Image */}
                  <img 
                    src={myPhoto}
                    alt="Rabeya Khatun" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20" />
                </motion.div>

                {/* Floating Glow Effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 rounded-full blur-2xl opacity-60"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Orbiting Tech Elements */}
              {[
                { tech: 'React', color: 'from-blue-500 to-cyan-500', angle: 0 },
                { tech: 'Node', color: 'from-green-500 to-emerald-500', angle: 90 },
                { tech: 'MongoDB', color: 'from-emerald-500 to-teal-500', angle: 180 },
                { tech: 'Express', color: 'from-purple-500 to-indigo-500', angle: 270 }
              ].map((item, index) => (
                <motion.div
                  key={item.tech}
                  className={`absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-sm backdrop-blur-sm border border-white/20`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0'
                  }}
                  animate={{
                    rotate: [item.angle, item.angle + 360],
                    x: [
                      Math.cos((item.angle * Math.PI) / 180) * 180 - 32,
                      Math.cos(((item.angle + 360) * Math.PI) / 180) * 180 - 32
                    ],
                    y: [
                      Math.sin((item.angle * Math.PI) / 180) * 180 - 32,
                      Math.sin(((item.angle + 360) * Math.PI) / 180) * 180 - 32
                    ],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {item.tech}
                </motion.div>
              ))}

              {/* Decorative Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    top: `${20 + (i % 4) * 20}%`,
                    left: `${15 + (i % 2) * 70}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;