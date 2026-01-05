import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './SkillsAnimations.css';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);

  // Skills data organized by categories
  const skillsData = [
    // Page 1 - Core MERN Stack
    [
      {
        name: "MongoDB",
        level: "Advanced",
        description: "NoSQL database design, aggregation pipelines, and performance optimization",
        gradient: "from-emerald-400 to-green-500",
        bgColor: "bg-emerald-50",
        shadowColor: "shadow-emerald-200"
      },
      {
        name: "Express.js",
        level: "Advanced", 
        description: "RESTful APIs, middleware development, and server-side architecture",
        gradient: "from-yellow-400 to-orange-500",
        bgColor: "bg-yellow-50",
        shadowColor: "shadow-yellow-200"
      },
      {
        name: "React.js",
        level: "Expert",
        description: "Component architecture, hooks, state management, and performance optimization",
        gradient: "from-blue-400 to-cyan-500",
        bgColor: "bg-blue-50",
        shadowColor: "shadow-blue-200"
      },
      {
        name: "Node.js",
        level: "Advanced",
        description: "Server-side JavaScript, async programming, and scalable backend solutions",
        gradient: "from-green-400 to-teal-500",
        bgColor: "bg-green-50",
        shadowColor: "shadow-green-200"
      },
      {
        name: "JavaScript ES6+",
        level: "Expert",
        description: "Modern JavaScript features, async/await, destructuring, and modules",
        gradient: "from-yellow-300 to-amber-500",
        bgColor: "bg-yellow-50",
        shadowColor: "shadow-yellow-200"
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        description: "Type-safe development, interfaces, generics, and enhanced code quality",
        gradient: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
        shadowColor: "shadow-blue-200"
      }
    ],
    // Page 2 - Frontend & Styling
    [
      {
        name: "HTML5 & CSS3",
        level: "Expert",
        description: "Semantic markup, modern CSS features, animations, and responsive design",
        gradient: "from-orange-400 to-red-500",
        bgColor: "bg-orange-50",
        shadowColor: "shadow-orange-200"
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Utility-first CSS framework, custom components, and responsive design",
        gradient: "from-cyan-400 to-blue-500",
        bgColor: "bg-cyan-50",
        shadowColor: "shadow-cyan-200"
      },
      {
        name: "Sass/SCSS",
        level: "Advanced",
        description: "CSS preprocessing, mixins, variables, and modular stylesheets",
        gradient: "from-pink-400 to-rose-500",
        bgColor: "bg-pink-50",
        shadowColor: "shadow-pink-200"
      },
      {
        name: "Framer Motion",
        level: "Intermediate",
        description: "Advanced animations, gestures, and interactive user experiences",
        gradient: "from-purple-400 to-violet-500",
        bgColor: "bg-purple-50",
        shadowColor: "shadow-purple-200"
      },
      {
        name: "Responsive Design",
        level: "Expert",
        description: "Mobile-first approach, flexible layouts, and cross-device compatibility",
        gradient: "from-teal-400 to-cyan-500",
        bgColor: "bg-teal-50",
        shadowColor: "shadow-teal-200"
      },
      {
        name: "UI/UX Principles",
        level: "Intermediate",
        description: "User-centered design, accessibility, and intuitive interface creation",
        gradient: "from-indigo-400 to-purple-500",
        bgColor: "bg-indigo-50",
        shadowColor: "shadow-indigo-200"
      }
    ],
    // Page 3 - Tools & Technologies
    [
      {
        name: "Git & GitHub",
        level: "Advanced",
        description: "Version control, branching strategies, collaboration, and CI/CD workflows",
        gradient: "from-gray-600 to-slate-700",
        bgColor: "bg-gray-50",
        shadowColor: "shadow-gray-200"
      },
      {
        name: "Webpack & Vite",
        level: "Intermediate",
        description: "Module bundling, build optimization, and development tooling",
        gradient: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        shadowColor: "shadow-blue-200"
      },
      {
        name: "REST APIs",
        level: "Advanced",
        description: "API design, integration, authentication, and data management",
        gradient: "from-green-500 to-emerald-600",
        bgColor: "bg-green-50",
        shadowColor: "shadow-green-200"
      },
      {
        name: "JSON & AJAX",
        level: "Expert",
        description: "Data exchange formats, asynchronous requests, and API communication",
        gradient: "from-amber-400 to-orange-500",
        bgColor: "bg-amber-50",
        shadowColor: "shadow-amber-200"
      },
      {
        name: "NPM & Yarn",
        level: "Advanced",
        description: "Package management, dependency handling, and project configuration",
        gradient: "from-red-400 to-pink-500",
        bgColor: "bg-red-50",
        shadowColor: "shadow-red-200"
      },
      {
        name: "Testing & Debugging",
        level: "Intermediate",
        description: "Unit testing, integration testing, and performance debugging",
        gradient: "from-violet-400 to-purple-500",
        bgColor: "bg-violet-50",
        shadowColor: "shadow-violet-200"
      }
    ]
  ];

  const totalPages = skillsData.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Gradient Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-full blur-3xl opacity-30" />
        </div>

        {/* Floating Decorative Shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${40 + (i % 3) * 20}px`,
                height: `${40 + (i % 3) * 20}px`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-15, 15, -15],
                rotate: [0, 180, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <div 
                className="w-full h-full"
                style={{
                  background: i % 4 === 0 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 197, 253, 0.15))'
                    : i % 4 === 1
                    ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(196, 181, 253, 0.15))'
                    : i % 4 === 2
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(251, 207, 232, 0.15))'
                    : 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(153, 246, 228, 0.15))',
                  borderRadius: i % 3 === 0 ? '50%' 
                    : i % 3 === 1 ? '30% 70% 70% 30% / 30% 30% 70% 70%' 
                    : '25% 75% 25% 75% / 75% 25% 75% 25%'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        
        {/* Animated Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-6"
          >
            <div className="flex flex-wrap justify-center leading-none">
              {"Skills & Expertise".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="heading-primary inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 1 }}
          />
          
          <motion.p
            className="text-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Explore my technical expertise across modern web development technologies and tools
          </motion.p>
        </motion.div>

        {/* Skills Grid with Pagination */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              variants={pageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {skillsData[currentPage].map((skill, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  className="card overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Decorative Shape */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-full opacity-20 blur-lg`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Skill Level Badge */}
                    <motion.div
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${skill.gradient} text-white text-xs font-semibold rounded-full mb-4`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}
                    </motion.div>
                    
                    {/* Skill Name */}
                    <h3 className={`heading-tertiary text-gradient mb-3`}>
                      {skill.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-body">
                      {skill.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
                  />
                  
                  {/* Floating Particles on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevPage}
              className="group flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Page Dots */}
            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: index === currentPage ? [1, 1.1, 1] : 1
                  }}
                  transition={{
                    scale: index === currentPage 
                      ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.2 }
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextPage}
              className="group flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Page Indicator */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <span className="text-sm text-gray-500 font-medium">
              Page {currentPage + 1} of {totalPages}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;