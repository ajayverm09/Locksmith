import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";

// Client logos
const clients = [
  {
    name: "Whirlpool",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/01/whirlpool.png",
  },
  {
    name: "RCA",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/01/rca.png",
  },
  {
    name: "Kenmore",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/01/kenmore.png",
  },
  {
    name: "Maytag",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/01/maytag.png",
  },
  {
    name: "Samsung",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
  },
  {
    name: "GE",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/01/general-electric.png",
  },
];

const ClientSlider = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Clients</h2>
          <div className="w-20 h-1 bg-yellow-400 my-3 mx-auto"></div>
          <p className="text-gray-500">They are awesome people</p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="client-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={client.image}
                alt={client.name}
                data-aos="zoom-in"
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSlider;
