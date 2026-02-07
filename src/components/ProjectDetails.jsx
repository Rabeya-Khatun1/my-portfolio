
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaUser,
  FaCode,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
 

  const project = projects.find((p) => p.id === Number(id));


  if (!project) {
    return (
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Project Not Found ❌
        </h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-14 pb-12 md:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="px-4 md:px-16">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b border-gray-100 dark:border-gray-700 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-4xl font-black text-gray-900 dark:text-gray-100 mb-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-1 md:px-3 py-1 rounded-full">
                  <FaUser className="text-blue-500" /> {project.role}
                </span>
                {project.featured && (
                  <span className="px-1 md:px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500">
                    Featured Project
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.demoUrl}
                rel="noreferrer"
                
                className="p-1 md:p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubUrl}
                rel="noreferrer"
                
                className="p-1 md:p-3 bg-gray-700 hover:bg-black text-white rounded-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left */}
              <div className="lg:col-span-2 space-y-10">
                {/* Overview */}
                <section>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Project Overview
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </section>

                {/* Features */}
                <section>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <FaStar className="text-yellow-500" /> Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.keyFeatures?.map((f, i) => (
                      <div
                        key={i}
                        className="p-1 md:p-3 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-xl text-xs md:text-sm text-gray-700 dark:text-gray-300"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Challenges */}
                <section className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border border-red-100 dark:border-gray-600 rounded-2xl p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <FaCode /> Challenges & Solutions
                  </h3>
                  <div className="space-y-4">
                    {project.challenges?.map((c, i) => (
                      <div
                        key={i}
                        className="bg-white/60 dark:bg-gray-800/60 p-2 md:p-4 rounded-xl"
                      >
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                          {c.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {c.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <div className="bg-gray-400 dark:bg-gray-700 text-white rounded-2xl p-3 md:p-6 shadow-xl">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <FaCode /> Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="p-1 md:px-3 py-1 text-xs bg-white/10 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="bg-blue-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-2xl p-3 md:p-6">
                  <h3 className="font-bold text-blue-900 dark:text-blue-400 mb-4">
                    Project Assets
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href={project.demoUrl}
                      rel="noreferrer"
                      className="p-1 md:p-3 bg-white dark:bg-gray-700 rounded-xl flex justify-between"
                    >
                      Live Preview <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubUrl}
                      rel="noreferrer"
                      className="p-1 md:p-3 bg-white dark:bg-gray-700 rounded-xl flex justify-between"
                    >
                      Source Code <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 p-4 md:p-8 text-center">
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              This project highlights strong Full-Stack Development skills.
            </p>
            <Link
              to="/"
              className="inline-block mt-4 font-bold text-blue-600 hover:underline"
            >
              Let's discuss this project
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
