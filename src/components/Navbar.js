import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeController from './ThemeController';

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

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = menuItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150;
      
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

const handleDownloadCV = () => {

  const resumeUrl = "/resume.pdf"; 
  
  const link = document.createElement("a");
  link.href = resumeUrl;
  
  link.setAttribute("download", "Rabeya_Khatun_Resume.pdf"); 
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/70 backdrop-blur-lg shadow-lg border-b border-white/20' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className=" mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('#home', 'home')}
    
            >
              <motion.div
                className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg"
              
              >
                <span className="text-white font-bold text-xl">
                  <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/source-code.png" alt="source-code"/>
                </span>
              </motion.div>
              
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-blue-500 bg-clip-text text-transparent">
                  Rabeya Khatun
                </h1>
                <p className="text-sm text-gray-600">MERN Stack Developer</p>
              </div>
            </motion.div>


          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center bg-gray-100/50 p-1.5 rounded-2xl border border-white/50 shadow-inner">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

   {/* Hire Me Button & Theme Controller */}
<div className="hidden lg:flex items-center gap-4"> 
 
  
  <ThemeController></ThemeController>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={ handleDownloadCV}
    className="px-7 py-3 text-white text-sm font-bold rounded-2xl shadow-xl bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap"
  >
    Download CV
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
  </motion.button>
</div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-700 bg-white/50 rounded-xl border border-gray-200 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 lg:hidden"
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-white/40 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all ${
                    activeSection === item.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && <span>→</span>}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact', 'contact')}
                className="w-full mt-2 py-4 bg-gray-900 text-white font-bold rounded-2xl"
              >
                Download CV
              </button>
              <ThemeController />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;