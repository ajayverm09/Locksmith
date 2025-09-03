// src/components/WelcomeSection.jsx
import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Section */}
        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Hello and Welcome
          </h1>

          {/* Yellow line */}
          <motion.div
            className="w-20 h-1 bg-yellow-500 my-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>

          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
          </p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              John M. Li
            </p>
            <img
              className="mt-2 sm:mt-0 h-12 sm:h-16 object-contain"
              src="https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/John_mccain_signature2-170x100.png"
              alt="Signature"
            />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/present.jpg"
            alt="Person"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
