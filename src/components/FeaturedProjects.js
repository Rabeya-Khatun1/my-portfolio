import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './FeaturedProjectsAnimations.css';

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);

  // Featured projects data organized by pages
  const projectsData = [
    // Page 1 - Real Projects
    [
      {
        id: 1,
        title: "E-Tuition-BD",
        description: "A full-stack e-learning platform that allows students to access online courses, pay online, and track their progress.",
        features: ["User authentication (login/signup)", "Admin dashboard for course management", "Payment integration using Stripe", "Video lectures and progress tracking"],
        technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API"],
        role: "Built the frontend using React, integrated backend API, handled authentication and payment integration",
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
        techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API"],
        demoUrl: "https://e-tuition-bd-3d12f.web.app/",
        githubUrl: "https://github.com/Rabeya-Khatun1/e-tuition-bd-client",
        gradient: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        shadowColor: 'shadow-blue-200',
        featured: true
      },
      {
        id: 2,
        title: "MovieMaster Pro",
        description: "A comprehensive movie management system allowing users to browse, add, edit, delete, and filter movies with advanced options.",
        features: ["CRUD operations for movies", "Advanced filtering and search", "User authentication with Firebase", "Movie ratings and reviews"],
        technologies: ["React.js", "Node.js", "Express", "MongoDB", "Firebase"],
        role: "Developed frontend components, integrated Firebase for authentication, implemented movie CRUD operations",
        image: 'https://images.unsplash.com/photo-1489599735734-79b4169c2a78?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
        techStack: ["React.js", "Node.js", "Express", "MongoDB", "Firebase"],
        demoUrl: "https://movie-master-auth.web.app/",
        githubUrl: "https://github.com/Rabeya-Khatun1/movie-master-pro-client",
        gradient: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
        shadowColor: 'shadow-emerald-200',
        featured: true
      },
      {
        id: 3,
        title: "English Janala",
        description: "A vocabulary learning web app where users can explore English words level-wise, hear pronunciation, and save words for practice.",
        features: ["Level-wise vocabulary exploration", "Audio pronunciation for words", "Save words for practice", "Responsive design with Tailwind CSS"],
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "REST API"],
        role: "Built the frontend UI, integrated REST API for words data, implemented save-for-practice feature",
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
        techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "REST API"],
        demoUrl: "https://jolly-dolphin-cb85c8.netlify.app/",
        githubUrl: "https://github.com/Rabeya-Khatun1/english-janala",
        gradient: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50',
        shadowColor: 'shadow-purple-200',
        featured: false
      },
      {
        id: 4,
        title: "Emergency Hotline Service Website",
        description: "A simple and responsive web application to quickly access emergency service numbers, copy them, and simulate calls. Built with vanilla JavaScript, HTML, CSS, Tailwind CSS, and DaisyUI.",
        features: ["Responsive navbar with logo, coin count, and copy count", "Gradient hero section with title, slogan, and logo", "Emergency service cards with service name (Bangla & English), hotline number, category badge, heart, copy, and call buttons", "Dynamic call history section with clear history option", "Fully responsive for mobile devices"],
        technologies: ["HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "JavaScript"],
        role: "Implemented the entire frontend logic using JavaScript DOM manipulation and event handling, integrated responsive design with Tailwind CSS, and implemented dynamic UI features for calls, copy, and history management.",
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
        techStack: ["HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "JavaScript"],
        demoUrl: "https://jolly-dolphin-cb85c8.netlify.app/",
        githubUrl: "https://github.com/Rabeya-Khatun1/emergency-hotline",
        gradient: 'from-red-500 to-orange-500',
        bgColor: 'bg-red-50',
        shadowColor: 'shadow-red-200',
        featured: false
      }
    ]
  ];

  const totalPages = projectsData.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -60,
      scale: 0.9,
      rotateY: 15,
      transition: {
        duration: 0.5,
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
        duration: 0.6,
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
      id="featured-projects" 
      className="section section-alt"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-25">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -8
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -15
            }}
          />
        </div>

        {/* Floating Project Decorations */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${8 + i * 10}%`,
                top: `${12 + (i % 3) * 25}%`,
                width: `${35 + (i % 4) * 15}px`,
                height: `${35 + (i % 4) * 15}px`,
              }}
              animate={{
                y: [-20, 30, -20],
                x: [-15, 20, -15],
                rotate: [0, 180, 360],
                scale: [0.7, 1.4, 0.7],
              }}
              transition={{
                duration: 18 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              <div 
                className="w-full h-full"
                style={{
                  background: i % 5 === 0 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 197, 253, 0.2))'
                    : i % 5 === 1
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(167, 243, 208, 0.2))'
                    : i % 5 === 2
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(196, 181, 253, 0.2))'
                    : i % 5 === 3
                    ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(254, 215, 170, 0.2))'
                    : 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(251, 207, 232, 0.2))',
                  borderRadius: i % 4 === 0 ? '50%' 
                    : i % 4 === 1 ? '30% 70% 70% 30% / 30% 30% 70% 70%' 
                    : i % 4 === 2 ? '25% 75% 25% 75% / 75% 25% 75% 25%'
                    : '40% 60% 60% 40% / 60% 30% 70% 40%'
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
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center leading-none">
              {"Featured Projects".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="heading-primary inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          
          <motion.p
            className="text-large max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Showcasing innovative web applications and digital solutions built with modern technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid with Pagination */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16"
              variants={pageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {projectsData[currentPage].map((project, index) => (
                <motion.div
                  key={`${currentPage}-${project.id}`}
                  className="card overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -12,
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-6 left-6 z-20 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
                  
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action Buttons Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.demoUrl}
                          className="px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Title */}
                    <h3 className="heading-tertiary text-primary mb-4">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-body mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-700 text-xs font-medium rounded-full border border-gray-200`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + techIndex * 0.05 + 0.5 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex items-center justify-between">
                      <motion.a
                        href={project.demoUrl}
                        className="inline-flex items-center text-sm font-semibold text-gradient transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        className="text-muted hover:text-secondary transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}
                  />
                  
                  {/* Floating Particles on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + i * 12}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 3,
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
            className="flex items-center justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevPage}
              className="group flex items-center justify-center w-14 h-14 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Page Dots */}
            <div className="flex space-x-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-10' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: index === currentPage ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    scale: index === currentPage 
                      ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.2 }
                  }}
                >
                  {index === currentPage && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.7)",
                          "0 0 0 10px rgba(59, 130, 246, 0)",
                          "0 0 0 0 rgba(59, 130, 246, 0.7)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextPage}
              className="group flex items-center justify-center w-14 h-14 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
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
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <span className="text-sm text-gray-500 font-medium">
              Page {currentPage + 1} of {totalPages}
            </span>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;