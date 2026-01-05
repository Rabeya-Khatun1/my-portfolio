import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './BlogAnimations.css';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  // Blog categories
  const categories = [
    'All',
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Tech Tips'
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Building Responsive Web Applications with React and Tailwind CSS',
      category: 'Web Development',
      excerpt: 'Learn how to create beautiful, responsive web applications using React.js and Tailwind CSS. This comprehensive guide covers best practices, component architecture, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      date: 'December 15, 2024',
      readTime: '8 min read',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      shadowColor: 'shadow-blue-200'
    },
    {
      id: 2,
      title: 'Modern UI/UX Design Principles for Better User Experience',
      category: 'UI/UX Design',
      excerpt: 'Explore the latest UI/UX design trends and principles that create engaging user experiences. From color theory to typography, learn how to design interfaces that users love.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      date: 'December 10, 2024',
      readTime: '6 min read',
      featured: true,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-200'
    },
    {
      id: 3,
      title: 'Essential JavaScript ES6+ Features Every Developer Should Know',
      category: 'Tech Tips',
      excerpt: 'Master modern JavaScript with these essential ES6+ features. From arrow functions to async/await, destructuring, and modules - level up your JavaScript skills.',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      date: 'December 5, 2024',
      readTime: '10 min read',
      featured: false,
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      shadowColor: 'shadow-yellow-200'
    },
    {
      id: 4,
      title: 'React Native vs Flutter: Choosing the Right Mobile Framework',
      category: 'Mobile Apps',
      excerpt: 'Compare React Native and Flutter for mobile app development. Learn about performance, development experience, and when to choose each framework for your next project.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      date: 'November 28, 2024',
      readTime: '12 min read',
      featured: false,
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      shadowColor: 'shadow-emerald-200'
    },
    {
      id: 5,
      title: 'Advanced CSS Animations and Micro-Interactions',
      category: 'Web Development',
      excerpt: 'Create stunning web experiences with advanced CSS animations and micro-interactions. Learn keyframes, transforms, and how to add delightful details to your interfaces.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      date: 'November 20, 2024',
      readTime: '7 min read',
      featured: false,
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      shadowColor: 'shadow-indigo-200'
    },
    {
      id: 6,
      title: 'Design Systems: Creating Consistent User Interfaces',
      category: 'UI/UX Design',
      excerpt: 'Build scalable design systems that ensure consistency across your products. Learn about component libraries, design tokens, and documentation best practices.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      date: 'November 15, 2024',
      readTime: '9 min read',
      featured: false,
      gradient: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      shadowColor: 'shadow-rose-200'
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className="section"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -5
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -10
            }}
          />
        </div>

        {/* Floating Blog Decorations */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 20}%`,
                width: `${30 + (i % 3) * 15}px`,
                height: `${30 + (i % 3) * 15}px`,
              }}
              animate={{
                y: [-15, 25, -15],
                x: [-10, 15, -10],
                rotate: [0, 180, 360],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2,
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
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(196, 181, 253, 0.2))'
                    : i % 6 === 3
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(251, 207, 232, 0.2))'
                    : i % 6 === 4
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(167, 243, 208, 0.2))'
                    : 'linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(253, 230, 138, 0.2))',
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
          className="text-center mb-16"
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
              {"Latest Blog Posts".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="heading-primary inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.5 }}
          />
          
          <motion.p
            className="text-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Insights, tutorials, and thoughts on web development, design, and technology trends
          </motion.p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={filterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`btn transition-all duration-300 ${
                activeCategory === category
                  ? 'btn-primary'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="card cursor-pointer overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  rotateY: 1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                {/* Featured Badge */}
                {post.featured && (
                  <motion.div
                    className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    Featured
                  </motion.div>
                )}

                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Tag */}
                  <motion.div
                    className={`absolute bottom-4 right-4 px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {post.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="heading-tertiary text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-body mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <motion.div
                    className="inline-flex items-center text-sm font-semibold text-gradient transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${post.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}
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
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Posts Button */}
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
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Posts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;