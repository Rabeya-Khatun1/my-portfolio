import React, { useRef } from 'react';
import { motion} from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);

  const educationData = [
    {
      id: 1,
      category: 'education',
      title: 'Higher Secondary Certificate (Science)',
      organization: 'Satkhira Government College',
      department: 'Science Group',
      duration: '2025 - Present',
      description: 'Currently studying in Science stream with focus on mathematics, physics, and ICT. Building strong analytical and problem-solving foundations for computer science.',
      skills: ['Mathematics', 'Physics', 'ICT', 'Problem Solving'],
      accentColor: 'border-l-blue-500',
      bgColor: 'bg-white dark:bg-gray-800',
      icon: (
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      category: 'certification',
      title: 'MERN Stack Web Development',
      organization: 'Programming Hero',
      department: 'Online Certification',
      duration: 'Jun 2025 - Dec 2025',
      description: 'Comprehensive certification covering modern web development technologies including React, Node.js, Express, and MongoDB with hands-on projects.',
      skills: ['MERN Stack', 'RESTful APIs', 'Authentication', 'Deployment'],
      accentColor: 'border-l-purple-500',
      bgColor: 'bg-white dark:bg-gray-800',
      icon: (
        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
<section id="about" className="bg-white dark:bg-gray-900 py-16 md:py-24 transition-colors duration-500 overflow-hidden">
  <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
    {/* Left: About Me */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center lg:text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-6">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-xs md:text-lg leading-relaxed">
        Passionate <span className="font-semibold text-blue-500">MERN Stack Developer</span> with expertise in building modern, responsive web applications. Currently pursuing Science education while mastering cutting-edge web technologies.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-xs md:text-lg leading-relaxed">
        I specialize in creating scalable solutions that combine elegant front-end interfaces with robust back-end architecture. My focus allows me to approach problems analytically and technically.
      </p>


      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Projects Card */}
        <motion.div
          className="relative rounded-2xl p-6 md:p-8 bg-blue-50 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-blue-100 dark:border-gray-700"
          whileHover={{ y: -5 }}
        >
          <div className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">20+</div>
          <div className="text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200">Projects Completed</div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          className="relative rounded-2xl p-6 md:p-8 bg-purple-50 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-purple-100 dark:border-gray-700"
          whileHover={{ y: -5 }}
        >
          <div className="text-3xl md:text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">15+</div>
          <div className="text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200">Skills Mastered</div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl"></div>
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right: Education & Certification */}
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {educationData.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className={`relative ${item.bgColor} rounded-xl md:p-6 shadow-sm border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all`}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 p-1">
            <div className="md:p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              {item.icon}
            </div>
            <div>
              <h4 className="text-sm md:text-xl font-bold text-gray-900 dark:text-white leading-tight">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
                {item.organization} <span className="hidden sm:inline">•</span> <br className="sm:hidden" /> {item.duration}
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-xs md:text-base mb-4 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider ${
                  item.category === 'education'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
  );
};

export default About;
