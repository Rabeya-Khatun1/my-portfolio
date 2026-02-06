import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces using React.js, Tailwind CSS, and modern design principles.",
    icon: <FaReact className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
    glow: "rgba(59, 130, 246, 0.4)", // blue
  },
  {
    title: "Backend Development",
    description:
      "Creating robust server-side applications with Node.js and Express, implementing APIs and authentication.",
    icon: <FaNodeJs className="w-10 h-10 text-green-600 dark:text-green-500" />,
    glow: "rgba(34, 197, 94, 0.4)", // green
  },
  {
    title: "Database Management",
    description:
      "Designing efficient databases and schemas using MongoDB, ensuring data integrity and performance.",
    icon: <SiMongodb className="w-10 h-10 text-green-700 dark:text-green-600" />,
    glow: "rgba(22, 163, 74, 0.4)", // darker green
  },
  {
    title: "Full-Stack Projects",
    description:
      "Integrating frontend and backend to build scalable full-stack applications with modern stacks.",
    icon: <FaDatabase className="w-10 h-10 text-purple-600 dark:text-purple-500" />,
    glow: "rgba(139, 92, 246, 0.4)", // purple
  },
  {
    title: "API Design & Integration",
    description:
      "Developing RESTful APIs and integrating third-party services to enhance application functionality.",
    icon: <SiExpress className="w-10 h-10 text-gray-600 dark:text-gray-400" />,
    glow: "rgba(107, 114, 128, 0.4)", // gray
  },
 {
  title: "Authentication & Security",
  description:
    "Implementing secure authentication systems using JWT, OAuth, and session management, ensuring user data protection.",
  icon: <FaGitAlt className="w-10 h-10 text-red-500 dark:text-red-400" />,
  glow: "rgba(239, 68, 68, 0.4)", // red
}

];

export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-2 md:px-10 transition-colors duration-500">
      <h2 className="text-4xl font-bold text-center mb-12">Services I Prefer</h2>

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `inset 0 0 40px 10px ${service.glow}`,
            }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg cursor-pointer transition-transform duration-300"
          >
             {/* Icon */}
  <div className="mb-4 flex justify-center items-center">
    {service.icon}
  </div>
            <h3 className="text-xl text-center font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-center dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
