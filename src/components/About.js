import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './AboutAnimations.css';
import myPhoto from '../assets/myPicture.jpg'

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Animated counter hook
  const useCounter = (end, duration = 2.5) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (isInView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        setTimeout(() => requestAnimationFrame(animate), 1000);
      }
    }, [end, duration]); // Removed isInView from dependencies
    return count;
  };

  const experienceCount = useCounter(3, 2);
  const projectCount = useCounter(50, 2.5);
  const clientCount = useCounter(25, 3);
  const skillCount = useCounter(15, 2.8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.3 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -45 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const techStack = [
    { name: 'MongoDB', color: 'from-emerald-400 to-green-500', bgColor: 'bg-emerald-50' },
    { name: 'Express.js', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-yellow-50' },
    { name: 'React.js', color: 'from-blue-400 to-cyan-500', bgColor: 'bg-blue-50' },
    { name: 'Node.js', color: 'from-green-400 to-teal-500', bgColor: 'bg-green-50' },
    { name: 'Git', color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-50' },
    { name: 'JavaScript', color: 'from-yellow-300 to-amber-500', bgColor: 'bg-yellow-50' }
  ];

  const stats = [
    { number: experienceCount, suffix: "+", label: "Years Experience", color: "from-blue-400 to-cyan-500" },
    { number: projectCount, suffix: "+", label: "Projects Completed", color: "from-purple-400 to-indigo-500" },
    { number: clientCount, suffix: "+", label: "Happy Clients", color: "from-teal-400 to-emerald-500" },
    { number: skillCount, suffix: "+", label: "Skills Mastered", color: "from-orange-400 to-red-500" }
  ];

  return (
      <section ref={sectionRef} id="about" className="section section-alt">
      
      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
          <div className="absolute top-32 left-16 w-96 h-96 bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30" />
        </motion.div>

        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-15"
              style={{
                left: `${8 + i * 10}%`,
                top: `${12 + (i % 4) * 22}%`,
                width: `${30 + (i % 3) * 15}px`,
                height: `${30 + (i % 3) * 15}px`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{ duration: 8 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              <div className="w-full h-full rounded-full" style={{ background: `linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,197,253,0.15))` }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen"
          variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          {/* Left Column - Photo */}
          <motion.div className="flex justify-center lg:justify-start order-2 lg:order-1" variants={itemVariants}>
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
                style={{ y: photoY, rotate: photoRotate }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div className="absolute inset-8 backdrop-blur-xl bg-white/15 border border-white/25 overflow-hidden shadow-2xl rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]">
                  <img src={myPhoto} alt="Rabeya Khatun" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-10 order-1 lg:order-2" variants={itemVariants}>
            
            {/* Title */}
            <motion.div variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <div className="flex flex-wrap leading-none mb-6">
                {"About Me".split('').map((letter, index) => (
                  <motion.span key={index} className="heading-primary inline-block" variants={letterVariants}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
              <motion.div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"
                initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 1.2, delay: 1 }} />
            </motion.div>

            {/* Description */}
            <motion.div className="space-y-8">
              <motion.p className="text-large"
                initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
                Hello! I'm <span className="font-bold text-gradient">Rabeya Khatun</span>, a passionate <span className="font-bold text-gradient">MERN Stack Developer</span> with expertise in creating modern, responsive web applications. I specialize in building scalable solutions using cutting-edge technologies and best practices.
              </motion.p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div className="space-y-6">
              <h3 className="heading-tertiary">Technical Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div key={tech.name} className="card-secondary text-center overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}>
                    <motion.div className="text-2xl mb-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-white font-bold text-sm mx-auto`}>
                        {tech.name.charAt(0)}
                      </div>
                    </motion.div>
                    <div className="font-semibold text-gray-800 text-sm">{tech.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} className="card text-center"
                  whileHover={{ scale: 1.05, y: -5 }} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}>
                  <motion.div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white font-bold`}>
                    {stat.label.split(' ')[0].charAt(0)}
                  </motion.div>
                  <motion.div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.number}{stat.suffix}</motion.div>
                  <div className="text-secondary font-medium text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
