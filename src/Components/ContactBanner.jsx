// ContactBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section
      className="relative w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.venushomeappliances.com/storage/app/applicationFiles/20210127122704ciontact-us-banner.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            Contact Us
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="w-16 sm:w-24 md:w-32 h-[3px] bg-yellow-500 mx-auto mt-4 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
