import React from 'react';
import { motion } from 'framer-motion';

const StoryTimeline = ({ isInView }) => {
  const timelineItems = [
    {
      phase: "Discovery",
      title: "The Spark",
      description: "First encounter with code ignited a passion for creating digital solutions",
      icon: "💡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      phase: "Learning",
      title: "The Journey",
      description: "Diving deep into MERN stack, mastering each technology with dedication",
      icon: "🚀",
      color: "from-blue-400 to-purple-500"
    },
    {
      phase: "Creating",
      title: "The Vision",
      description: "Building meaningful projects that solve real problems and delight users",
      icon: "✨",
      color: "from-teal-400 to-cyan-500"
    },
    {
      phase: "Future",
      title: "The Goal",
      description: "Becoming an independent developer who creates lasting impact through code",
      icon: "🎯",
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-blue-400 rounded-full"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.phase}
            className="relative flex items-start space-x-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline Node */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-white"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-xl`}>
                {item.icon}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {item.phase}
                </span>
                <div className={`h-1 flex-1 bg-gradient-to-r ${item.color} rounded-full`} />
              </div>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StoryTimeline;