import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Aleen Valzac",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "John Doe",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Jane Smith",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const ClientQuoteSection = () => {
  return (
    <section className="bg-[#1d1d1f] text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Our Clients</h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-300 mb-8">There are all awesome people</p>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="max-w-xl"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <p className="italic text-lg text-gray-200">“{t.quote}”</p>
                  <div className="flex items-center mt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-yellow-500"
                    />
                    <span className="ml-4 text-yellow-400 font-semibold">
                      {t.name}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Get a Free Quote</h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-300 mb-6">
            Sed odio orci, fringilla nec dolor et, euismod auctor mauris.
            Curabitur semper dui diam, nec accumsan mauris consequat sed.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.textarea
              placeholder="Your message"
              rows="5"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientQuoteSection;
