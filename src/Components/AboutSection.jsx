import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const bulletPointsLeft = [
  "We are awesome people to meet",
  "We’re happy to help in the purchase",
  "We have the latest technologies",
  "Sed ut perspiciatis unde omnis",
];

const bulletPointsRight = [
  "The quality is our goal",
  "Optimizing the resource is good",
  "Printer took a galley of type and",
  "We are awesome people to meet",
];

const AboutSection = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We Are Locksmith Inc.
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 mb-3" />
        <p className="text-gray-500 text-base sm:text-lg font-medium">
          We repair your roof with passion
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeUp}
        >
          <img
            src="https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/05/worker-570x370.jpg"
            alt="Locksmith"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </motion.div>

        {/* Text + Bullet Points */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We Are Locksmith the simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, We Are solar the simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {bulletPointsLeft.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-gray-700"
                  variants={fadeUp}
                >
                  <FaCheck className="text-yellow-500 mt-1 mr-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-3">
              {bulletPointsRight.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-gray-700"
                  variants={fadeUp}
                >
                  <FaCheck className="text-yellow-500 mt-1 mr-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
