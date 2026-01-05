import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Tuition-BD",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      description: "A full-stack e-learning platform that allows students to access online courses, pay online, and track their progress.",
      briefDescription: "Modern e-learning platform with comprehensive course management and payment integration.",
      mainTechStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe API"],
      liveUrl: "https://e-tuition-bd-3d12f.web.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/e-tuition-bd-client",
      challenges: [
        "Implementing secure payment gateway integration with Stripe",
        "Managing complex state for course progress tracking",
        "Optimizing video streaming performance for different network speeds",
        "Creating responsive admin dashboard with real-time data updates"
      ],
      improvements: [
        "Add offline course download functionality",
        "Implement AI-powered course recommendations",
        "Add live video conferencing for interactive classes",
        "Integrate advanced analytics for student performance tracking"
      ]
    },
    {
      id: 2,
      title: "MovieMaster Pro",
      image: "https://images.unsplash.com/photo-1489599735734-79b4169c2a78?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      description: "A comprehensive movie management system allowing users to browse, add, edit, delete, and filter movies with advanced options.",
      briefDescription: "Full-featured movie database with CRUD operations and advanced filtering capabilities.",
      mainTechStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Authentication"],
      liveUrl: "https://movie-master-auth.web.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/movie-master-pro-client",
      challenges: [
        "Implementing complex search and filtering logic with multiple parameters",
        "Managing large datasets efficiently with pagination",
        "Integrating Firebase authentication with custom user roles",
        "Creating responsive grid layouts for movie cards across devices"
      ],
      improvements: [
        "Add movie trailer integration with YouTube API",
        "Implement social features like user profiles and friend lists",
        "Add advanced recommendation engine based on user preferences",
        "Integrate with external movie APIs for automatic data population"
      ]
    },
    {
      id: 3,
      title: "English Janala",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      description: "A vocabulary learning web app where users can explore English words level-wise, hear pronunciation, and save words for practice.",
      briefDescription: "Interactive vocabulary learning platform with pronunciation features and progress tracking.",
      mainTechStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "REST API"],
      liveUrl: "https://jolly-dolphin-cb85c8.netlify.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/english-janala",
      challenges: [
        "Integrating audio pronunciation API with consistent playback",
        "Managing local storage for saved words across browser sessions",
        "Creating smooth level progression system",
        "Optimizing performance for large vocabulary datasets"
      ],
      improvements: [
        "Add spaced repetition algorithm for better learning retention",
        "Implement user accounts with cloud sync for saved words",
        "Add gamification elements like streaks and achievements",
        "Include visual learning aids and example sentences"
      ]
    },
    {
      id: 4,
      title: "Emergency Hotline Service Website",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      description: "A simple and responsive web application to quickly access emergency service numbers, copy them, and simulate calls.",
      briefDescription: "Emergency services directory with quick access to hotline numbers and call simulation.",
      mainTechStack: ["HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "JavaScript"],
      liveUrl: "https://jolly-dolphin-cb85c8.netlify.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/emergency-hotline",
      challenges: [
        "Creating intuitive UI for emergency situations with clear visual hierarchy",
        "Implementing coin-based system for call simulation",
        "Managing dynamic call history with local storage",
        "Ensuring accessibility for users in stress situations"
      ],
      improvements: [
        "Add GPS location integration for location-based emergency services",
        "Implement real calling functionality with WebRTC",
        "Add emergency contact management for personal contacts",
        "Include first aid guides and emergency procedures"
      ]
    }
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Handle Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && selectedProject) {
        closeProjectDetails();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedProject]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="heading-secondary mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Showcasing my best work with detailed insights into development challenges and future improvements
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="btn btn-primary"
                    onClick={() => openProjectDetails(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                {/* Project Name */}
                <h3 className="heading-tertiary mb-4 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Brief Description */}
                <p className="text-body mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.mainTechStack.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.mainTechStack.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                      +{project.mainTechStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* View More Button */}
                <motion.button
                  className="w-full btn btn-secondary group-hover:btn-primary transition-all duration-300"
                  onClick={() => openProjectDetails(project)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View More Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                
                {/* Close Button */}
                <motion.button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Project Title */}
                <h2 id="modal-title" className="heading-secondary mb-6">{selectedProject.title}</h2>

                {/* Main Technology Stack */}
                <div className="mb-8">
                  <h3 className="heading-tertiary mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.mainTechStack.map((tech) => (
                      <motion.span 
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-8">
                  <h3 className="heading-tertiary mb-4">Project Description</h3>
                  <p id="modal-description" className="text-body leading-relaxed mb-4">{selectedProject.briefDescription}</p>
                  <p className="text-body leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Action Links */}
                <div className="mb-8">
                  <h3 className="heading-tertiary mb-4">Project Links</h3>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo / View Live Project
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Repository
                    </motion.a>
                  </div>
                </div>

                {/* Challenges Faced */}
                <div className="mb-8">
                  <h3 className="heading-tertiary mb-4">Key Challenges Faced</h3>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="text-body">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div className="mb-8">
                  <h3 className="heading-tertiary mb-4">Potential Improvements & Future Plans</h3>
                  <ul className="space-y-3">
                    {selectedProject.improvements.map((improvement, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-body">{improvement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Close Button */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <motion.button
                    onClick={closeProjectDetails}
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
