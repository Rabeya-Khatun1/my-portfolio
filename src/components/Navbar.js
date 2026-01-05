import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = useMemo(() => [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#featured-projects', id: 'featured-projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Wave Background Animation */}
      <div className="fixed top-0 left-0 right-0 z-40 h-24 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Wave Gradients */}
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.12)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0.15)" />
            </linearGradient>
            
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.08)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.10)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.08)" />
            </linearGradient>

            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(14, 165, 233, 0.06)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.08)" />
            </linearGradient>
          </defs>
          
          {/* Wave Layers */}
          <motion.path
            d="M0,80 C300,40 600,120 900,80 C1050,60 1150,100 1200,80 L1200,0 L0,0 Z"
            fill="url(#wave1)"
            animate={{
              d: [
                "M0,80 C300,40 600,120 900,80 C1050,60 1150,100 1200,80 L1200,0 L0,0 Z",
                "M0,100 C300,60 600,100 900,60 C1050,80 1150,80 1200,100 L1200,0 L0,0 Z",
                "M0,70 C300,110 600,50 900,90 C1050,40 1150,110 1200,70 L1200,0 L0,0 Z",
                "M0,80 C300,40 600,120 900,80 C1050,60 1150,100 1200,80 L1200,0 L0,0 Z"
              ]
            }}
            transition={{
              duration: scrolled ? 18 : 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M0,60 C400,100 800,40 1200,70 L1200,0 L0,0 Z"
            fill="url(#wave2)"
            animate={{
              d: [
                "M0,60 C400,100 800,40 1200,70 L1200,0 L0,0 Z",
                "M0,40 C400,80 800,60 1200,50 L1200,0 L0,0 Z",
                "M0,90 C400,50 800,90 1200,80 L1200,0 L0,0 Z",
                "M0,60 C400,100 800,40 1200,70 L1200,0 L0,0 Z"
              ]
            }}
            transition={{
              duration: scrolled ? 22 : 17,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -4
            }}
          />

          <motion.path
            d="M0,50 C600,90 600,20 1200,60 L1200,0 L0,0 Z"
            fill="url(#wave3)"
            animate={{
              d: [
                "M0,50 C600,90 600,20 1200,60 L1200,0 L0,0 Z",
                "M0,70 C600,20 600,80 1200,40 L1200,0 L0,0 Z",
                "M0,40 C600,70 600,40 1200,70 L1200,0 L0,0 Z",
                "M0,50 C600,90 600,20 1200,60 L1200,0 L0,0 Z"
              ]
            }}
            transition={{
              duration: scrolled ? 26 : 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -8
            }}
          />
        </svg>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/30 backdrop-blur-2xl shadow-2xl border-b border-white/40' 
            : 'bg-white/20 backdrop-blur-xl'
        }`}
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
                background: i % 3 === 0 
                  ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                  : i % 3 === 1
                  ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                  : 'linear-gradient(135deg, #0ea5e9, #0284c7)'
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('#home', 'home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [-1, 1, -1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{
                  rotate: [0, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">R</span>
              </motion.div>
              
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
                  Rabeya Khatun
                </h1>
                <p className="text-sm text-gray-600">MERN Stack Developer</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                >
                  <motion.button
                    className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 overflow-hidden group ${
                      activeSection === item.id
                        ? 'text-white shadow-2xl'
                        : 'text-gray-700 hover:text-white'
                    }`}
                    onClick={() => handleNavClick(item.href, item.id)}
                    whileHover={{ 
                      scale: 1.08,
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 rounded-xl transition-all duration-300 ${
                        activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-90'
                      }`}
                      whileHover={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Wave Underline */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-sky-300 rounded-full"
                        layoutId="activeWave"
                        animate={{
                          scaleX: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with Wave Border */}
            <div className="hidden lg:block">
              <motion.button
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg"
                onClick={() => handleNavClick('#contact', 'contact')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center">
                  Hire Me
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="block h-0.5 w-6 bg-gray-700 rounded-full"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-gray-700 rounded-full mt-1.5"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    scale: isOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-gray-700 rounded-full mt-1.5"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-white/40 shadow-2xl"
              initial={{ opacity: 0, height: 0, y: -30 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Mobile Wave Background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-8 left-0 right-0 h-16 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-sky-100/50 rounded-b-[50%]"
                  animate={{
                    scaleY: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <div className="flex flex-col space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className={`text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500'
                          : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-sky-400'
                      }`}
                      onClick={() => handleNavClick(item.href, item.id)}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    className="mt-4 px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 text-white font-semibold rounded-xl shadow-lg"
                    onClick={() => handleNavClick('#contact', 'contact')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Hire Me
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;