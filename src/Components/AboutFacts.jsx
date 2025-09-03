import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, value: 1523, label: 'RESIDENTIAL' },
  { id: 2, value: 2119, label: 'COMMERCIAL' },
  { id: 3, value: 2303, label: 'INDUSTRIAL' },
  { id: 4, value: 1023, label: 'AUTOMOTIVE' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const InterestingFacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="w-full py-16 bg-cover bg-center flex flex-col items-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/tiles-b.jpg?id=1417')",
      }}
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={itemVariants}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Interesting Facts</h2>
        <div className="mt-1 w-16 h-1 bg-yellow-500 mx-auto" />
        <p className="mt-2 text-sm text-gray-300">Our numbers</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 lg:gap-32"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-4xl font-bold">
              {inView && <CountUp end={stat.value} duration={2} />}
            </h3>
            <p className="mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InterestingFacts;
