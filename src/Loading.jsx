import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-blue-500 z-50 overflow-hidden">
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Multi-layered circular loader */}
        <div className="relative flex items-center justify-center w-44 h-44 mb-8">
          {/* Outer glow ring */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-sm" />
          
          {/* Outer rotating ring */}
          <motion.div
            className="absolute w-44 h-44 rounded-full border-2 border-transparent border-t-blue border-r-white/50"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
          
          {/* Middle rotating ring - opposite direction */}
          <motion.div
            className="absolute w-32 h-32 rounded-full border-2 border-transparent border-b-blue/70 border-l-white/30"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          
          {/* Inner pulsing ring */}
          <motion.div
            className="absolute w-20 h-20 rounded-full border border-white/20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          
          {/* Center name with gradient and pulse */}
          <motion.h1 
            className="text-3xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            RABEYA
          </motion.h1>
          
          {/* Floating dots around the circle */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                left: `${50 + 42 * Math.cos((i * Math.PI) / 4)}%`,
                top: `${50 + 42 * Math.sin((i * Math.PI) / 4)}%`,
              }}
              animate={{ scale: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Code-style loading lines with cursor */}
        <div className="text-center font-mono space-y-2 mb-8">
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-green-400">&gt;</span>
            <span>const portfolio = new Developer();</span>
            <motion.span
              className="w-2 h-5 bg-blue-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="text-green-400">&gt;</span>
            <span>portfolio.loadProjects();</span>
            <motion.span
              className="w-2 h-5 bg-blue-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="text-green-400">&gt;</span>
            <span>portfolio.initUI();</span>
            <motion.span
              className="w-2 h-5 bg-blue-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
            />
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <span className="text-green-400">&gt;</span>
            <span className="text-blue-300">Loading assets...</span>
            <motion.span
              className="w-2 h-5 bg-blue-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.9 }}
            />
          </motion.div>
        </div>

        {/* Enhanced progress bar with glow */}
        <div className="relative w-48 h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
          {/* Background shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          
          {/* Main progress bar */}
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-blue-500/80 to-blue-500 rounded-full"
            animate={{ 
              x: ["-100%", "100%"],
              width: ["20%", "40%", "20%"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-500 blur-md" />
        </div>

        {/* Percentage counter */}
        <motion.div
          className="mt-4 font-mono text-sm text-blue-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-blue-500 font-medium">Initializing</span>
          <motion.span
            className="inline-block w-4 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block w-4"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block w-4"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
          >
            .
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom info text */}
      <motion.div
        className="absolute bottom-8 text-xs text-gray-500 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Press <span className="text-white bg-gray-700 px-1 rounded">ESC</span> to skip
      </motion.div>
    </div>
  );
};

export default Loading;