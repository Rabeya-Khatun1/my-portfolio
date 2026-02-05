import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeController = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      className="z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative w-14 h-7 rounded-full p-1 transition-colors duration-500 shadow-sm border
          ${isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-blue-100 border-gray-200'
          }
        `}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {/* Toggle Circle */}
        <motion.div
          className={`
            w-5 h-5 rounded-full shadow-sm flex items-center justify-center z-10 relative
            ${isDarkMode ? 'bg-blue-500' : 'bg-white'}
          `}
          animate={{
            x: isDarkMode ? 28 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          <AnimatePresence mode="wait">
            {isDarkMode ? (
              // Moon Icon (Compact & Clean)
              <motion.svg 
                key="moon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                className="w-3 h-3 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </motion.svg>
            ) : (
              // Sun Icon (Compact & Clean)
              <motion.svg 
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                className="w-3.5 h-3.5 text-orange-500" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Background Glow */}
        <div className={`
          absolute inset-0 rounded-full transition-opacity duration-500 blur-md
          ${isDarkMode ? 'bg-blue-500/10 opacity-100' : 'bg-orange-500/5 opacity-0'}
        `} />
      </motion.button>
    </motion.div>
  );
};

export default ThemeController;