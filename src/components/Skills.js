import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiVite,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb";

/* ---------- percentage color logic ---------- */
const getLevelColor = (level) => {
  if (level < 20) return "bg-red-500";
  if (level < 70) return "bg-blue-500";
  return "bg-green-500";
};

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: "React.js",
      level: 95,
      category: "frontend",
      icon: <FaReact />,
      description: "Building dynamic UIs with hooks, context API, and component lifecycle",
      color: "text-cyan-500",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-200 dark:border-cyan-700"
    },
    {
      id: 2,
      name: "Next.js",
      level: 51,
      category: "frontend",
      icon: <SiNextdotjs />,
      description: "Server-side rendering, static generation, and API routes",
      color: "text-gray-800 dark:text-gray-300",
      bg: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-300 dark:border-gray-700"
    },
    {
      id: 3,
      name: "JavaScript",
      level: 59,
      category: "frontend",
      icon: <FaJs />,
      description: "ES6+ features, async programming, and modern JavaScript patterns",
      color: "text-yellow-500 dark:text-yellow-400",
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-200 dark:border-yellow-700"
    },
    {
      id: 4,
      name: "HTML5",
      level: 95,
      category: "frontend",
      icon: <FaHtml5 />,
      description: "Semantic markup, accessibility, and modern HTML features",
      color: "text-orange-500 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-200 dark:border-orange-700"
    },
    {
      id: 5,
      name: "CSS3",
      level: 68,
      category: "frontend",
      icon: <FaCss3Alt />,
      description: "Advanced CSS features, animations, and responsive design",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700"
    },
    {
      id: 6,
      name: "Tailwind CSS",
      level: 80,
      category: "frontend",
      icon: <SiTailwindcss />,
      description: "Utility-first CSS framework with custom configurations",
      color: "text-teal-500 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      border: "border-teal-200 dark:border-teal-700"
    }
   ,
   
    {
      id: 7,
      name: "Framer Motion",
      level: 40,
      category: "frontend",
      icon: <TbBrandFramerMotion />,
      description: "Production-ready animations for React applications",
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700"
    },
   
    {
      id: 8,
      name: "Node.js",
      level: 10,
      category: "backend",
      icon: <FaNodeJs />,
      description: "Server-side JavaScript runtime and ecosystem",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700"
    },
    {
      id: 9,
      name: "Express.js",
      level: 34,
      category: "backend",
      icon: <SiExpress />,
      description: "Minimalist web framework for Node.js applications",
      color: "text-gray-700 dark:text-gray-300",
      bg: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-300 dark:border-gray-700"
    },
    {
      id: 10,
      name: "MongoDB",
      level: 52,
      category: "backend",
      icon: <SiMongodb />,
      description: "NoSQL database with aggregation and indexing",
      color: "text-green-500 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700"
    },
    {
      id: 11,
      name: "Firebase",
      level: 84,
      category: "backend",
      icon: <SiFirebase />,
      description: "Backend-as-a-service with authentication and realtime database",
      color: "text-yellow-500 dark:text-yellow-400",
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-200 dark:border-yellow-700"
    },
   
  
    {
      id: 12,
      name: "REST API",
      level: 49,
      category: "backend",
      icon: <FaDatabase />,
      description: "Design and implementation of RESTful APIs",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700"
    },
    {
      id: 13,
      name: "Git",
      level: 15,
      category: "tools",
      icon: <FaGitAlt />,
      description: "Version control system with branching strategies",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-200 dark:border-orange-700"
    },
    {
      id: 14,
      name: "GitHub",
      level: 36,
      category: "tools",
      icon: <FaGithub />,
      description: "Code hosting platform with CI/CD workflows",
      color: "text-gray-800 dark:text-gray-300",
      bg: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-300 dark:border-gray-700"
    },
    {
      id: 15,
      name: "Vite",
      level: 58,
      category: "tools",
      icon: <SiVite />,
      description: "Next generation frontend tooling",
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700"
    },
    {
      id: 16,
      name: "NPM",
      level: 22,
      category: "tool",
      icon: <FaNpm />,
      description: "Package manager for JavaScript",
      color: "text-red-500 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-700"
    },

  
    {
      id: 17,
      name: "VS Code",
      level: 47,
      category: "tools",
      icon: <TbBrandVscode />,
      description: "Code editor with extensions and debugging tools",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700"
    },
    {
      id: 18,
      name: "Vercel",
      level: 35,
      category: "tools",
      icon: <SiVercel />,
      description: "Cloud platform for static sites and Serverless Functions",
      color: "text-gray-800 dark:text-gray-300",
      bg: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-300 dark:border-gray-700"
    },
    {
      id: 19,
      name: "Netlify",
      level: 83,
      category: "tools",
      icon: <SiNetlify />,
      description: "Web hosting and automation platform",
      color: "text-teal-500 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      border: "border-teal-200 dark:border-teal-700"
    },
  
    {
      id: 20,
      name: "Figma",
      level: 28,
      category: "design",
      icon: <FaFigma />,
      description: "Interface design and prototyping tool",
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700"
    }

  ];

  const frontend = skillsData.filter((s) => s.category === "frontend");
  const backend = skillsData.filter((s) => s.category === "backend");
  const tools = skillsData.filter((s) => s.category === "tools");

const MarqueeLine = ({ data, reverse = false }) => {
  // If reverse, render items in reverse order
  const items = reverse ? [...data].reverse() : data;

  return (
    <div className="overflow-hidden mb-8">
      <div className="flex gap-6 min-w-max animate-marquee">
        {items.concat(items).map((skill, index) => (
          <div
            key={index}
            className={`${skill.bg} ${skill.border} border rounded-xl p-5 shadow-sm min-w-[200px]`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`flex items-center gap-2 text-xl ${skill.color}`}>
                {skill.icon}
                <span className="font-semibold text-base">{skill.name}</span>
              </div>
              <span className="font-bold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



  return (
    <section className="bg-white pb-10 dark:bg-gray-900">
      <div className="container mx-auto ">
        <h3 className="text-xl font-bold mb-4">Frontend</h3>
        <MarqueeLine data={frontend} />

        <h3 className="text-xl font-bold mb-4">Backend</h3>
        <MarqueeLine data={backend} reverse />

        <h3 className="text-xl font-bold mb-4">Tools</h3>
        <MarqueeLine data={tools} />
      </div>
    </section>
  );
};

export default Skills;
