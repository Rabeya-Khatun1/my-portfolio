import React, { useRef } from 'react';
import { motion} from 'framer-motion';
import { Link } from 'react-router';

const FeaturedProjects = () => {
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "E-Tuition-BD",
      description: "A full-stack e-learning platform that allows students to access online courses, pay online, and track their progress automatically.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
      demoUrl: "https://e-tuition-bd-3d12f.web.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/e-tuition-bd-client",
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      featured: true
    },
    {
      id: 2,
      title: "MovieMaster Pro",
      description: "A comprehensive movie management system allowing users to browse, add, edit, delete, and filter movies with advanced options.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Firebase"],
      demoUrl: "https://movie-master-auth.web.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/movie-master-pro-client",
      image: 'https://images.pexels.com/photos/8261568/pexels-photo-8261568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 3,
      title: "Emergency Hotline ",
      description: "A simple and responsive web application to quickly access emergency service numbers, copy them, and simulate calls.",
      techStack: ["HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "JavaScript"],
      demoUrl: "https://jazzy-rabanadas-29061c.netlify.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/emergency-hotline",
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      featured: false
    },
    {
      id: 4,
      title: "Product hub Website",
      description: "A simple and responsive product hub web application to add, list, and manage products with payment-ready UI.",
      techStack: ["HTML5", "Tailwind CSS", "DaisyUI", "JavaScript", "Next JS"],
      demoUrl: "https://product-hub-coral-five.vercel.app/",
      githubUrl: "https://github.com/Rabeya-Khatun1/product-hub",
      image: 'https://images.pexels.com/photos/7586656/pexels-photo-7586656.jpeg',
      featured: true
    },
 
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -60, scale: 0.9, transition: { duration: 0.5 } }
  };

  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.1 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4 } }
  };

  return (
    <section ref={sectionRef} id="featured-projects" className="bg-white dark:bg-gray-900 py-5">
      <div className="container mx-auto px-4">
        <h1 className='text-blue-500 text-5xl text-center font-bold py-2'>Featured Projects</h1>
        <p className="text-lg max-w-4xl mx-auto my-2 text-center text-gray-700">
          Showcasing innovative web applications and digital solutions built with modern technologies
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 pt-8"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative pb-2 rounded-3xl hover:border-2 border-blue-600 overflow-hidden group"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  className="absolute top-6 left-6 z-20 px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  Featured
                </motion.div>
              )}

              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-3xl"
              />

              {/* Content */}
              <div className="relative z-10 space-y-2 px-4 py-3">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className='text-xs'>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                  
                </div>

  <button>  <Link to={`/projects/${project.id}`} className="inline-block mt-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
      View Project
    </Link> </button>
              
              </div>

              {/* Hover Glow */}
              <motion.div
                className="absolute -inset-1 bg-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
