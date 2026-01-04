import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white section-padding" id="about">
      <div className="container-max">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              I'm a passionate Full-Stack MERN Developer with a keen eye for creating 
              seamless digital experiences. With expertise in modern web technologies, 
              I specialize in building scalable, user-friendly applications that solve 
              real-world problems.
            </p>
            
            <p>
              My journey in web development started with a curiosity for how things work 
              behind the scenes. Today, I combine technical expertise with creative 
              problem-solving to deliver solutions that not only meet requirements but 
              exceed expectations.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>
          </div>

          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;