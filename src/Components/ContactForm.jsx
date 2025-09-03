import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-16 px-6 bg-gray-50 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 text-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 text-center md:text-left"
        >
          Get In Touch
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="w-16 h-1 bg-yellow-500 mb-6 mx-auto md:mx-0"
        />

        <motion.p
          variants={itemVariants}
          className="text-gray-500 mb-8 text-center md:text-left leading-relaxed"
        >
          Neque porro quisquam est qui dolorem ipsum quia lorem ipsum dolor sit
          amet dolor sit amet, consectetur, adipisci velit...
        </motion.p>

        {/* Form */}
        <motion.form variants={containerVariants} className="space-y-6">
          {/* Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </motion.div>

          {/* Message */}
          <motion.textarea
            variants={itemVariants}
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          ></motion.textarea>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-3 rounded-lg shadow-lg transition"
            >
              SEND
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
