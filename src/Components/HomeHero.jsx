import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] sm:h-[85vh] md:h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: `url('https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/05/worker-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          className="text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            WE PROVIDE ULTIMATE <br /> LOCKSMITH SERVICES
            <motion.span
              className="block text-yellow-400 mt-2 text-2xl sm:text-3xl md:text-4xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            >
              24/7
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            We make it a priority to offer flexible services to accommodate your
            needs
          </motion.p>

          <motion.button
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 hover:bg-gray-500 text-black font-semibold rounded shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            GET A QUOTE NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
