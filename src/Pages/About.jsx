import React from "react";
import ClientSlider from "../Components/AboutClients";
import TestimonialSlider from "../Components/AboutSlider";
import InterestingFacts from "../Components/AboutFacts";
import AboutSection from "../Components/AboutSection";
import TeamSection from "../Components/HomeTeam";
import AboutHero from "../Components/AboutHero";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <AboutHero />
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <AboutSection />
      </motion.div>

      {/* INTERESTING FACTS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <InterestingFacts />
      </motion.div>

      {/* TEAM SECTION */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Our Team</h2>
          <div className="mt-2 w-20 h-1 bg-yellow-500 mx-auto" />
          <p className="mt-3 text-sm text-gray-500">We are awesome people</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <TeamSection />
        </motion.div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <TestimonialSlider />
      </motion.div>

      {/* CLIENT SLIDER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <ClientSlider />
      </motion.div>
    </div>
  );
};

export default About;
