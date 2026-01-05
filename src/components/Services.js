import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './ServicesAnimations.css';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState(null);

  // Services data with detailed information
  const servicesData = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      shortDescription: 'Complete web applications using MERN stack with modern design and functionality.',
      fullDescription: 'I create comprehensive web applications from concept to deployment using the MERN stack (MongoDB, Express.js, React.js, Node.js). My development process includes responsive design, user authentication, database integration, API development, and deployment optimization.',
      features: [
        'Responsive React.js applications',
        'RESTful API development with Node.js & Express',
        'MongoDB database design and optimization',
        'User authentication and authorization',
        'Payment gateway integration',
        'Performance optimization and SEO',
        'Deployment and hosting setup',
        'Ongoing maintenance and support'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5', 'CSS3'],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      shadowColor: 'shadow-blue-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      deliveryTime: '2-4 weeks',
      startingPrice: '$1,500'
    },
    {
      id: 2,
      title: 'Frontend Development',
      shortDescription: 'Modern, responsive user interfaces with smooth animations and optimal user experience.',
      fullDescription: 'Specializing in creating beautiful, interactive frontend experiences using modern frameworks and libraries. I focus on performance, accessibility, and user experience while ensuring cross-browser compatibility and mobile responsiveness.',
      features: [
        'Modern React.js component development',
        'Responsive design with Tailwind CSS',
        'Interactive animations with Framer Motion',
        'Cross-browser compatibility testing',
        'Performance optimization techniques',
        'Accessibility compliance (WCAG 2.1)',
        'Progressive Web App (PWA) features',
        'Integration with backend APIs'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript ES6+', 'Sass/SCSS', 'Webpack'],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      shadowColor: 'shadow-emerald-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      deliveryTime: '1-3 weeks',
      startingPrice: '$800'
    },
    {
      id: 3,
      title: 'UI/UX Design & Prototyping',
      shortDescription: 'User-centered design solutions with interactive prototypes and modern aesthetics.',
      fullDescription: 'I create intuitive and visually appealing user interfaces backed by solid UX research and design principles. My design process includes user research, wireframing, prototyping, and usability testing to ensure optimal user experiences.',
      features: [
        'User research and persona development',
        'Wireframing and information architecture',
        'High-fidelity UI design mockups',
        'Interactive prototypes and animations',
        'Design system creation and documentation',
        'Usability testing and iteration',
        'Responsive design for all devices',
        'Handoff documentation for developers'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      deliveryTime: '1-2 weeks',
      startingPrice: '$600'
    },
    {
      id: 4,
      title: 'E-Commerce Solutions',
      shortDescription: 'Complete online store development with payment integration and inventory management.',
      fullDescription: 'I build comprehensive e-commerce platforms that drive sales and provide excellent shopping experiences. From product catalogs to secure checkout processes, I handle all aspects of online retail development.',
      features: [
        'Custom e-commerce platform development',
        'Product catalog and inventory management',
        'Secure payment gateway integration',
        'User account and order management',
        'Admin dashboard for store management',
        'Shopping cart and wishlist functionality',
        'Email notifications and marketing tools',
        'SEO optimization for product pages'
      ],
      technologies: ['React.js', 'Node.js', 'Stripe/PayPal', 'MongoDB', 'Express.js', 'JWT'],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      shadowColor: 'shadow-orange-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      deliveryTime: '3-6 weeks',
      startingPrice: '$2,500'
    },
    {
      id: 5,
      title: 'API Development & Integration',
      shortDescription: 'RESTful APIs, third-party integrations, and backend services for web applications.',
      fullDescription: 'I develop robust backend services and APIs that power modern web applications. My expertise includes creating scalable server architectures, database design, and seamless third-party service integrations.',
      features: [
        'RESTful API design and development',
        'Database schema design and optimization',
        'Authentication and authorization systems',
        'Third-party service integrations',
        'API documentation and testing',
        'Performance monitoring and optimization',
        'Security implementation and best practices',
        'Scalable server architecture design'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'Postman', 'Docker'],
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      shadowColor: 'shadow-indigo-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      deliveryTime: '2-4 weeks',
      startingPrice: '$1,200'
    },
    {
      id: 6,
      title: 'Website Maintenance & Support',
      shortDescription: 'Ongoing website maintenance, updates, performance optimization, and technical support.',
      fullDescription: 'I provide comprehensive maintenance and support services to keep your website running smoothly, secure, and up-to-date. This includes regular updates, performance monitoring, security patches, and feature enhancements.',
      features: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Content updates and modifications',
        'Bug fixes and troubleshooting',
        'Backup and disaster recovery',
        'SEO monitoring and improvements',
        'Analytics setup and reporting',
        '24/7 technical support availability'
      ],
      technologies: ['Various', 'Google Analytics', 'Security Tools', 'Performance Monitors', 'Backup Solutions'],
      gradient: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      shadowColor: 'shadow-teal-200',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      deliveryTime: 'Ongoing',
      startingPrice: '$300/month'
    }
  ];

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
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section 
        ref={sectionRef}
        id="services" 
        className="section section-alt"
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Elegant Gradient Mesh */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 rounded-full blur-3xl opacity-40" />
          </div>

          {/* Floating Service Decorations */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-15"
                style={{
                  left: `${8 + i * 6}%`,
                  top: `${10 + (i % 5) * 18}%`,
                  width: `${25 + (i % 4) * 12}px`,
                  height: `${25 + (i % 4) * 12}px`,
                }}
                animate={{
                  y: [-12, 20, -12],
                  x: [-8, 12, -8],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 12 + i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    background: i % 6 === 0 
                      ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(165, 243, 252, 0.2))'
                      : i % 6 === 1
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 197, 253, 0.2))'
                      : i % 6 === 2
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(167, 243, 208, 0.2))'
                      : i % 6 === 3
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(196, 181, 253, 0.2))'
                      : i % 6 === 4
                      ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(254, 215, 170, 0.2))'
                      : 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(251, 207, 232, 0.2))',
                    borderRadius: i % 5 === 0 ? '50%' 
                      : i % 5 === 1 ? '30% 70% 70% 30% / 30% 30% 70% 70%' 
                      : i % 5 === 2 ? '25% 75% 25% 75% / 75% 25% 75% 25%'
                      : i % 5 === 3 ? '40% 60% 60% 40% / 60% 30% 70% 40%'
                      : '60% 40% 30% 70% / 40% 70% 60% 30%'
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
                {"My Services".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="heading-primary inline-block"
                    variants={letterVariants}
                    whileHover={{
                      scale: 1.1,
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
              Professional web development services tailored to bring your digital vision to life
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className="card cursor-pointer overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -12,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(service)}
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
                
                {/* Decorative Corner Shape */}
                <motion.div
                  className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-xl`}
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
                  {/* Service Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} text-white rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Service Title */}
                  <h3 className="heading-tertiary text-gradient mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-body mb-6">
                    {service.shortDescription}
                  </p>
                  
                  {/* Pricing & Delivery */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-secondary">
                      From {service.startingPrice}
                    </span>
                    <span className="text-sm text-muted">
                      {service.deliveryTime}
                    </span>
                  </div>
                  
                  {/* Learn More Button */}
                  <motion.div
                    className="inline-flex items-center text-sm font-semibold text-gradient transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}
                />
                
                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full"
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        y: [-6, -12, -6],
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
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
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute opacity-20"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + (i % 3) * 25}%`,
                    width: `${40 + (i % 3) * 20}px`,
                    height: `${40 + (i % 3) * 20}px`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-15, 15, -15],
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${selectedService.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'}, rgba(255, 255, 255, 0.1))`
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Modal Content */}
            <motion.div
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto ${selectedService.bgColor} backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Header */}
              <div className={`relative p-8 bg-gradient-to-r ${selectedService.gradient} text-white rounded-t-3xl`}>
                <motion.button
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
                    <div className="flex items-center space-x-4 text-white/80">
                      <span>From {selectedService.startingPrice}</span>
                      <span>•</span>
                      <span>{selectedService.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Service Overview</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-6 h-6 bg-gradient-to-r ${selectedService.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className={`px-4 py-2 bg-gradient-to-r ${selectedService.gradient} bg-opacity-10 text-gray-700 font-medium rounded-full border border-gray-200`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className={`flex-1 py-4 px-8 bg-gradient-to-r ${selectedService.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started Now
                  </motion.button>
                  <motion.button
                    className="flex-1 py-4 px-8 bg-white/60 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white/80 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;