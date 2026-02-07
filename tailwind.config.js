/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'brand': {
          'teal': '#0f766e',
          'blue': '#0891b2', 
          'royal': '#3b82f6',
          'purple': '#8b5cf6',
        },
        // Secondary Accent Colors
        'accent': {
          'coral': '#f97316',
          'rose': '#ec4899',
          'emerald': '#10b981',
          'amber': '#f59e0b',
        },
        // Neutral Palette
        'neutral': {
          'charcoal': '#1f2937',
          'slate': '#64748b',
          'light': '#f1f5f9',
          'soft-black': '#0f172a',
        },
        // Existing primary/colors...
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        // Coral, Teal, Gray enhanced palettes (as before)
        coral: { /*...*/ },
        teal: { /*...*/ },
        gray: { /*...*/ },
      },

      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0f766e, #3b82f6, #8b5cf6)',
        // ... all other gradients
      },

      fontFamily: {
         sans: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        'glow-teal': '0 0 30px rgba(20, 184, 166, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-orange': '0 0 30px rgba(249, 115, 22, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.15)',
        'strong': '0 15px 40px rgba(0, 0, 0, 0.2)',
      },

      keyframes: {
        // Existing animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // ---------- MARQUEE ANIMATIONS ----------
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'gradient-flow': 'gradientFlow 5s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        // ---------- MARQUEE ANIMATIONS ----------
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
    },
  },
  plugins: [],
};
