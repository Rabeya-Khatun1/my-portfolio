import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Wave */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z"
          fill="url(#primaryWave)"
          animate={{
            d: [
              "M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z",
              "M0,40 C300,80 900,20 1200,40 L1200,0 L0,0 Z",
              "M0,80 C300,140 900,40 1200,80 L1200,0 L0,0 Z",
              "M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary Wave */}
        <motion.path
          d="M0,40 C400,100 800,20 1200,40 L1200,0 L0,0 Z"
          fill="url(#secondaryWave)"
          animate={{
            d: [
              "M0,40 C400,100 800,20 1200,40 L1200,0 L0,0 Z",
              "M0,60 C400,120 800,40 1200,60 L1200,0 L0,0 Z",
              "M0,20 C400,80 800,0 1200,20 L1200,0 L0,0 Z",
              "M0,40 C400,100 800,20 1200,40 L1200,0 L0,0 Z"
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
          <linearGradient id="primaryWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="secondaryWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c2410c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              width: `${8 + (i % 3) * 4}px`,
              height: `${8 + (i % 3) * 4}px`,
              background: i % 2 === 0 
                ? 'linear-gradient(45deg, rgba(20, 184, 166, 0.4), rgba(6, 182, 212, 0.6))'
                : 'linear-gradient(45deg, rgba(249, 115, 22, 0.4), rgba(234, 88, 12, 0.6))'
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default WaveBackground;