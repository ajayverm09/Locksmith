import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Aleen Valzac",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "John Doe",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Jane Smith",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const ClientQuoteSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;

  return (
    <section className="bg-[#1d1d1f] text-white py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Clients Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Clients</h2>
          <div className="w-12 md:w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-300 mb-6 md:mb-8">There are all awesome people</p>

          {isMobile ? (
            // 📱 Mobile → all in column
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md w-full"
                >
                  <p className="italic text-sm md:text-base text-gray-200">“{t.quote}”</p>
                  <div className="flex items-center mt-4 md:mt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-500"
                    />
                    <span className="ml-3 md:ml-4 text-yellow-400 font-semibold text-sm md:text-base">
                      {t.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : isTablet ? (
            // 💻 Tablet → 2 per row
            <div className="grid grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md w-full"
                >
                  <p className="italic text-sm md:text-base text-gray-200">“{t.quote}”</p>
                  <div className="flex items-center mt-4 md:mt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-500"
                    />
                    <span className="ml-3 md:ml-4 text-yellow-400 font-semibold text-sm md:text-base">
                      {t.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // 🖥 Desktop → Swiper carousel
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 2,
              }}
              autoplay={{ delay: 4000 }}
              loop={true}
              spaceBetween={16}
              slidesPerView={1}
              className="w-full"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md w-full max-w-md"
                  >
                    <p className="italic text-sm md:text-base text-gray-200">“{t.quote}”</p>
                    <div className="flex items-center mt-4 md:mt-6">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-500"
                      />
                      <span className="ml-3 md:ml-4 text-yellow-400 font-semibold text-sm md:text-base">
                        {t.name}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get a Free Quote</h2>
          <div className="w-12 md:w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
            Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.
          </p>

          <form className="space-y-4 max-w-[90vw] md:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.textarea
              placeholder="Your message"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-yellow-500 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition text-sm md:text-base"
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
