import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center text-white px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/themes/locksmith/images/titlebar-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 ml-4 sm:ml-10 md:ml-16 text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Contact Us
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="h-[2px] bg-yellow-600 mt-2"
        />
      </motion.div>
    </section>
  );
};

export default ContactHero;
