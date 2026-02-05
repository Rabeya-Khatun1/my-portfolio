import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

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
    <section className=" bg-white dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left: About Me */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            Passionate <span className="font-semibold text-blue-500">MERN Stack Developer</span> with expertise in building modern, responsive web applications. Currently pursuing Science education while mastering cutting-edge web technologies through certification programs.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I specialize in creating scalable solutions that combine elegant front-end interfaces with robust back-end architecture. My dual focus on academic and practical development allows me to approach problems analytically and technically.
          </p>
          <motion.div
  className="grid grid-cols-2 gap-6 mt-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Projects Card */}
  <motion.div
    className="relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 text-center overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl font-extrabold mb-2">20+</div>
    <div className="text-lg font-medium">Projects Completed</div>

    {/* Floating Glow */}
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
  </motion.div>

  {/* Skills Card */}
  <motion.div
    className="relative  rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 text-center overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl font-extrabold mb-2">15+</div>
    <div className="text-lg font-medium">Skills Mastered</div>

    {/* Floating Glow */}
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
  </motion.div>
</motion.div>

        </motion.div>

        {/* Right: Education & Certification */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative ${item.bgColor} rounded-xl p-6  ${item.accentColor}   dark:border-gray-700`}
            >
              <div className="flex items-start gap-4 mb-4">
                {item.icon}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.organization} • {item.department} • {item.duration}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.category === 'education'
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
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
