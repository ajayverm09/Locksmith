import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Commercial Locksmith",
    description:
      "Reliable solutions for businesses to secure their premises effectively.",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/commercial.jpg?id=1702",
  },
  {
    title: "Residential Locksmith",
    description:
      "Protect your home with our expert locksmith services and quick response.",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/residential.jpg?id=1703",
  },
  {
    title: "Automotive Locksmith",
    description:
      "Fast and reliable automotive locksmith services for all vehicle types.",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/car-key.jpg?id=1704",
  },
  {
    title: "Emergency Locksmith",
    description:
      "24/7 emergency locksmith services whenever you need immediate assistance.",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/emergency.jpg?id=1705",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-sm sm:text-base mt-2">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded transition"
                >
                  READ MORE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
