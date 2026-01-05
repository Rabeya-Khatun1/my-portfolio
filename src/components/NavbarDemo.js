import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const NavbarDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Demo Content */}
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Animated Navbar
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the fluid wave animations, floating particles, and smooth interactions
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Wave Animation</h3>
              <p className="text-gray-300">Continuous flowing wave motion across the navbar background</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Interactive Elements</h3>
              <p className="text-gray-300">Hover effects with ripple animations and smooth transitions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Floating Particles</h3>
              <p className="text-gray-300">Subtle animated particles that create depth and movement</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Sections for navigation testing */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Home Section</h2>
          <p className="text-xl">Scroll to test the navbar animations</p>
        </div>
      </section>
      
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">About Section</h2>
          <p className="text-xl">Notice how the navbar adapts on scroll</p>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Projects Section</h2>
          <p className="text-xl">Interactive navigation with smooth scrolling</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Contact Section</h2>
          <p className="text-xl">Experience the complete navigation flow</p>
        </div>
      </section>
    </div>
  );
};

export default NavbarDemo;