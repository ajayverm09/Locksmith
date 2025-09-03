import React from "react";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section
      className="relative h-[250px] md:h-[300px] flex items-center justify-start text-white px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/themes/locksmith/images/titlebar-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <motion.div
        className="relative z-10 ml-4 sm:ml-8 md:ml-16 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Latest News & Blogs
        </motion.h1>

        <motion.div
          className="w-40 sm:w-60 md:w-80 h-[2px] bg-yellow-600 mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />
      </motion.div>
    </section>
  );
};

export default BlogHero;
