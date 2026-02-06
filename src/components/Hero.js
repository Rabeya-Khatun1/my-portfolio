import React, { useEffect, useRef } from 'react';
import { motion,useSpring } from 'framer-motion';
import myPhoto from '../assets/my-photo.jpg';
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {

  const heroRef = useRef(null);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const blobVariants = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%"
      ],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    // Ekhane bg-white add kora hoyeche
    <section 
      ref={heroRef}
      id="home" 
      className="pt-32 relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh]">
          
          {/* Left Column - Content */}
          <motion.div className="space-y-8 text-center lg:text-left">
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <motion.p className="text-xl font-semibold text-blue-600 mb-2">
    Hello, I'm
  </motion.p>

  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-blue-600 bg-clip-text text-transparent">
    <Typewriter
      words={['Rabeya Khatun']}
      cursor
      cursorStyle="|"
      typeSpeed={80}
    />
  </h1>

  <motion.p className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-200 mt-2">
    <Typewriter
      words={['MERN Stack Developer', "Junior Frontend Developer"]}
      loop={false}
      cursor
      cursorStyle="_"
      typeSpeed={60}
      delaySpeed={1000}
    />
  </motion.p>
</motion.div>

            <motion.div
              className="relative"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap justify-center lg:justify-start">
                {"Crafting Digital".split('').map((letter, index) => (
                  <motion.span
                    key={`word1-${index}`}
                    className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white inline-block"
                    variants={letterVariants}
                    animate={{
                      ...floatingVariants.animate,
                      transition: {
                        ...floatingVariants.animate.transition,
                        delay: index * 0.1
                      }
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start mt-2">
                {"Experiences".split('').map((letter, index) => (
                  <motion.span
                    key={`word2-${index}`}
                    className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white inline-block"
                    variants={letterVariants}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              I build modern, responsive web applications with cutting-edge technologies. 
              Passionate about creating exceptional user experiences and solving complex problems.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="group relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Projects
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
              </motion.button>
            </motion.div>

            {/* Social Links Section (Slightly adjusted for white bg) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-start gap-4 my-8"
            >
              <motion.span 
                variants={itemVariants}
                className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 ml-1"
              >
                Connect with me
              </motion.span>
              
              <motion.div className="flex items-center gap-4 py-2" variants={itemVariants}>
                {[
                  { name: 'GitHub', href: 'https://github.com/Rabeya-Khatun1', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', color: 'hover:bg-[#24292e]' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rabeya123/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'hover:bg-[#0077b5]' },
                  { name: 'Twitter', href: 'https://x.com/prorabeya2008', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: 'hover:bg-[#1DA1F2]' },
                  { name: 'Facebook', href: 'https://www.facebook.com/rabeya17/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'hover:bg-[#1877F2]' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    rel="noreferrer"
                  
                    className={`group relative w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-500 shadow-sm ${social.color} hover:text-white hover:-translate-y-1.5`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-gray-900 text-white text-[10px] py-1 px-2 rounded-lg font-bold">
                      {social.name}
                    </span>
                    <svg className="w-5 h-5 z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div className="flex justify-center">
            <div className="relative">
              <motion.div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 bg-blue-50/50 dark:bg-gray-800 backdrop-blur-xl border border-blue-100 dark:border-gray-700 shadow-2xl overflow-hidden"
                  variants={blobVariants}
                  animate="animate"
                >
                  <img src={myPhoto} alt="Profile" className="w-full h-full object-cover" />
                </motion.div>

                {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="absolute bg-white/90 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-lg px-3 py-1.5 shadow-lg"
                    style={{
                      top: `${20 + index * 20}%`,
                      left: index % 2 === 0 ? '-20%' : '100%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, scale: 1,
                      x: [0, index % 2 === 0 ? -5 : 5, 0]
                    }}
                    transition={{ 
                      delay: 1 + index * 0.2, duration: 0.6,
                      x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="text-sm text-gray-400 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll down
          </motion.div>
          <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-blue-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;