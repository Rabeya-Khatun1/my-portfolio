import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.25) 0%, transparent 50%),
            linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.25) 0%, transparent 50%),
             linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)`,
            `radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.4) 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 60% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
             linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)`,
            `radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.25) 0%, transparent 50%),
             linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)`
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interactive Mouse Gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(20, 184, 166, 0.15) 0%, 
            rgba(6, 182, 212, 0.1) 25%, 
            transparent 50%)`
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Floating Circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(6, 182, 212, 0.1))',
            top: '10%',
            left: '70%',
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-15"
          style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(234, 88, 12, 0.1))',
            top: '60%',
            left: '10%',
          }}
          animate={{
            y: [20, -20, 20],
            x: [15, -15, 15],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${40 + (i % 3) * 20}px`,
              height: `${40 + (i % 3) * 20}px`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              background: i % 3 === 0 
                ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.4), rgba(6, 182, 212, 0.2))'
                : i % 3 === 1
                ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(234, 88, 12, 0.2))'
                : 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(8, 145, 178, 0.2))'
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Small Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'rgba(20, 184, 166, 0.6)' 
                : 'rgba(249, 115, 22, 0.6)'
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Wave Patterns */}
      <svg className="absolute bottom-0 left-0 w-full h-40 opacity-30" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
          fill="url(#heroWaveGradient1)"
          animate={{
            d: [
              "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
              "M0,80 C300,140 900,20 1200,80 L1200,120 L0,120 Z",
              "M0,40 C300,100 900,-20 1200,40 L1200,120 L0,120 Z",
              "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,40 C400,100 800,20 1200,40 L1200,120 L0,120 Z"
          fill="url(#heroWaveGradient2)"
          animate={{
            d: [
              "M0,40 C400,100 800,20 1200,40 L1200,120 L0,120 Z",
              "M0,60 C400,120 800,40 1200,60 L1200,120 L0,120 Z",
              "M0,20 C400,80 800,0 1200,20 L1200,120 L0,120 Z",
              "M0,40 C400,100 800,20 1200,40 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <defs>
          <linearGradient id="heroWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="heroWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c2410c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default HeroBackground;