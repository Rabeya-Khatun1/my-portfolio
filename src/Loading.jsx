import { motion } from "framer-motion";

const Loading = () => {
  const isMobile = window.innerWidth < 640;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-blue-500 z-50 overflow-hidden">

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Loader */}
      <div className="relative flex flex-col items-center justify-center">

        {/* Rings */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 sm:mb-8">

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-white/50"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          <motion.div
            className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white/20"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            RABEYA
          </motion.h1>
        </div>

        {/* Code lines */}
        <div className="text-center font-mono space-y-1 sm:space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm">
          {[
            "const portfolio = new Developer();",
            "portfolio.loadProjects();",
            "portfolio.initUI();",
            "Loading assets..."
          ].map((line, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <span className="text-green-400">&gt;</span>
              <span>{line}</span>
              <motion.span
                className="w-2 h-4 bg-blue-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative w-40 sm:w-48 h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>

        {/* Text */}
        <motion.div
          className="mt-3 font-mono text-xs sm:text-sm text-blue-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Initializing...
        </motion.div>
      </div>

      {/* Bottom text (hide on mobile) */}
      <motion.div
        className="absolute bottom-6 text-xs text-gray-500 font-mono hidden sm:block"
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
