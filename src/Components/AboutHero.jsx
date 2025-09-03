import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="relative h-[220px] sm:h-[260px] md:h-[320px] flex items-center justify-center sm:justify-start text-white px-4 sm:px-8 md:px-16 w-full"
      style={{
        backgroundImage:
          "url('https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/themes/locksmith/images/titlebar-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center sm:text-left"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          About Us
        </h1>
        <motion.div
          className="w-16 h-[3px] bg-yellow-500 mt-3 mx-auto sm:mx-0"
          initial={{ width: 0 }}
          animate={{ width: "4rem", transition: { duration: 0.8, delay: 0.5 } }}
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
