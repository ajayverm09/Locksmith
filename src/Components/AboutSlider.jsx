import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    name: "Aleen Valtzac",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white px-4 py-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/laminate-b.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-yellow-500 mx-auto mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.p
          className="mb-10 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          What our clients are saying
        </motion.p>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="px-2 sm:px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-lg relative">
                {/* Quote */}
                <p className="italic text-lg sm:text-xl leading-relaxed text-white mb-6 text-left">
                  “{t.quote}”
                </p>

                {/* Author */}
                <div className="flex items-center justify-end mt-6">
                  <div className="text-right">
                    <p className="text-yellow-400 font-semibold">{t.name}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden ml-4 border-2 border-yellow-500">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default TestimonialSlider;
