import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './JourneyAnimations.css';

const Journey = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Journey data organized by categories
  const journeyData = [
    {
      id: 1,
      category: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology',
      department: 'Computer Science & Engineering',
      duration: '2019 - 2023',
      description: 'Comprehensive study of computer science fundamentals, software engineering principles, and modern web technologies with focus on full-stack development.',
      skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development'],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      shadowColor: 'shadow-blue-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: 2,
      category: 'experience',
      title: 'Frontend Developer Intern',
      organization: 'TechStart Solutions',
      department: 'Web Development Team',
      duration: '2022 - 2023',
      description: 'Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with senior developers on client projects and gained hands-on experience in agile development.',
      skills: ['React.js', 'JavaScript', 'CSS3', 'Git', 'Agile Development'],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      shadowColor: 'shadow-emerald-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      )
    },
    {
      id: 3,
      category: 'certification',
      title: 'Full Stack Web Development',
      organization: 'FreeCodeCamp',
      department: 'Online Certification',
      duration: '2023',
      description: 'Comprehensive certification covering modern web development technologies including React, Node.js, Express, and MongoDB with hands-on projects.',
      skills: ['MERN Stack', 'RESTful APIs', 'Authentication', 'Database Design'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 4,
      category: 'experience',
      title: 'Freelance Web Developer',
      organization: 'Self-Employed',
      department: 'Independent Projects',
      duration: '2023 - Present',
      description: 'Building custom web applications for small businesses and startups. Specializing in responsive design, e-commerce solutions, and modern web technologies.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Client Relations'],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      shadowColor: 'shadow-orange-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 5,
      category: 'certification',
      title: 'JavaScript Algorithms and Data Structures',
      organization: 'FreeCodeCamp',
      department: 'Online Certification',
      duration: '2022',
      description: 'Advanced JavaScript programming concepts, ES6+ features, functional programming, and algorithmic thinking with practical problem-solving exercises.',
      skills: ['JavaScript ES6+', 'Algorithms', 'Data Structures', 'Problem Solving'],
      gradient: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      shadowColor: 'shadow-yellow-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 6,
      category: 'education',
      title: 'Higher Secondary Certificate',
      organization: 'Science College',
      department: 'Science Group',
      duration: '2017 - 2019',
      description: 'Strong foundation in mathematics, physics, and computer science. Developed analytical thinking and problem-solving skills essential for programming.',
      skills: ['Mathematics', 'Physics', 'Computer Science', 'Analytical Thinking'],
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      shadowColor: 'shadow-indigo-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'education':
        return 'text-blue-600';
      case 'experience':
        return 'text-emerald-600';
      case 'certification':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'education':
        return 'Education';
      case 'experience':
        return 'Experience';
      case 'certification':
        return 'Certification';
      default:
        return 'Journey';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="section section-alt"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-full blur-3xl opacity-40" />
        </div>

        {/* Floating Timeline Decorations */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
                width: `${30 + (i % 3) * 15}px`,
                height: `${30 + (i % 3) * 15}px`,
              }}
              animate={{
                y: [-15, 25, -15],
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
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
                    ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(253, 230, 138, 0.2))'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.4), rgba(252, 165, 165, 0.2))',
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
              {"My Journey".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="heading-primary inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -3, 3, 0],
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
            From academic foundations to professional growth - explore the milestones that shaped my development journey
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"
            style={{ height: `${journeyData.length * 400}px`, transformOrigin: 'top' }}
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          {/* Journey Cards */}
          <div className="space-y-24">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.id}
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                  variants={isEven ? cardVariants : cardVariantsRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white`}>
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Journey Card */}
                  <motion.div
                    className={`w-full max-w-lg ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      rotateY: isEven ? 2 : -2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="card overflow-hidden">
                      
                      {/* Card Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Decorative Corner Shape */}
                      <motion.div
                        className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full opacity-20 blur-xl`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Category Badge */}
                        <motion.div
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-bold rounded-full mb-4 shadow-lg`}
                          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          {getCategoryBadge(item.category)}
                        </motion.div>
                        
                        {/* Duration */}
                        <div className="text-right mb-3">
                          <span className={`text-sm font-semibold px-3 py-1 bg-white/70 rounded-full ${getCategoryColor(item.category)}`}>
                            {item.duration}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.title}
                        </h3>
                        
                        {/* Organization & Department */}
                        <div className="mb-4">
                          <p className="text-lg font-semibold text-gray-800">{item.organization}</p>
                          <p className="text-sm text-gray-600">{item.department}</p>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                          {item.description}
                        </p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span 
                              key={skill}
                              className={`px-3 py-1 bg-gradient-to-r ${item.gradient} bg-opacity-10 text-gray-700 text-xs font-medium rounded-full border border-gray-200`}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.2 + skillIndex * 0.1 + 0.5 
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)'
                              }}
                              viewport={{ once: true }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}
                      />
                      
                      {/* Floating Particles on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full"
                            style={{
                              left: `${20 + i * 25}%`,
                              top: `${15 + i * 20}%`,
                            }}
                            animate={{
                              y: [-8, -16, -8],
                              opacity: [0, 1, 0],
                              scale: [0, 1.2, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.4,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Ready to start the next chapter together?
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;