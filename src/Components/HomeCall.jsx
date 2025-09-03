// src/components/CallBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const CallBanner = () => {
  return (
    <section className="w-full bg-yellow-500 py-6 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
          Get a Professional Services, Call us Now.
          <motion.span
            className="ml-2 inline-block font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            124 789 654
          </motion.span>
        </p>
      </motion.div>
    </section>
  );
};

export default CallBanner;
