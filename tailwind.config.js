/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        
        // Enhanced Primary Colors (keeping existing for compatibility)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        
        // Enhanced Coral Colors
        coral: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fdd5b8',
          300: '#fcb88a',
          400: '#fa8f5c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        
        // Enhanced Teal Colors
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        
        // Enhanced Gray Colors
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      
      backgroundImage: {
        // Brand Gradients
        'brand-gradient': 'linear-gradient(135deg, #0f766e, #3b82f6, #8b5cf6)',
        'hero-gradient': 'linear-gradient(135deg, #0f172a, #0f766e, #10b981)',
        'warm-gradient': 'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)',
        'cool-gradient': 'linear-gradient(135deg, #14b8a6, #06b6d4, #3b82f6)',
        
        // Section Backgrounds
        'light-section': 'linear-gradient(135deg, #f8fafc, #e0f2fe, #ecfdf5)',
        'dark-section': 'linear-gradient(135deg, #0f172a, #1e293b, #0f766e)',
        'neutral-section': 'linear-gradient(135deg, #ffffff, #f0f9ff, #f0fdfa)',
        
        // Navbar Gradients
        'navbar-gradient': 'linear-gradient(90deg, rgba(15, 118, 110, 0.9), rgba(8, 145, 178, 0.8), rgba(59, 130, 246, 0.9))',
        
        // Button Gradients
        'btn-primary': 'linear-gradient(135deg, #0f766e, #14b8a6)',
        'btn-secondary': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        'btn-accent': 'linear-gradient(135deg, #f97316, #ec4899)',
        
        // Tech Stack Gradients
        'tech-mongodb': 'linear-gradient(135deg, #10b981, #059669)',
        'tech-express': 'linear-gradient(135deg, #f59e0b, #d97706)',
        'tech-react': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        'tech-node': 'linear-gradient(135deg, #10b981, #14b8a6)',
        'tech-git': 'linear-gradient(135deg, #f97316, #ea580c)',
        'tech-js': 'linear-gradient(135deg, #eab308, #ca8a04)',
        
        // Stats Gradients
        'stat-teal': 'linear-gradient(135deg, #14b8a6, #06b6d4)',
        'stat-blue': 'linear-gradient(135deg, #3b82f6, #6366f1)',
        'stat-purple': 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        'stat-orange': 'linear-gradient(135deg, #f97316, #ef4444)',
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'gradient-flow': 'gradientFlow 5s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      
      keyframes: {
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
    },
  },
  plugins: [],
}