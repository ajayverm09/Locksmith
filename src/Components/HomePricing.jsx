import React from "react";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Emergency Locksmith",
    items: [
      { service: "Lock Re-Keys", price: "$35" },
      { service: "Lock Repairs", price: "$55" },
      { service: "Master Key Systems", price: "$45" },
      { service: "Card access & keypad locking", price: "$70" },
      { service: "Security Lock Systems", price: "$120" },
    ],
  },
  {
    title: "Residential Prices",
    items: [
      { service: "Lock Re-Keys", price: "$35" },
      { service: "Lock-Box Installation", price: "$55" },
      { service: "Lock-Box Repair", price: "$45" },
      { service: "Lock Repairs", price: "$70" },
      { service: "Security Lock Systems", price: "$120" },
    ],
  },
  {
    title: "Automotive Prices",
    items: [
      { service: "Car Lockout", price: "$35" },
      { service: "Car Re-Keys", price: "$55" },
      { service: "Ignition Key Programming", price: "$45" },
      { service: "Transponder Keys Programming", price: "$70" },
      { service: "Security Lock Systems", price: "$120" },
    ],
  },
  {
    title: "Commercial Prices",
    items: [
      { service: "Lock Re-Keys", price: "$35" },
      { service: "Lock Repairs", price: "$55" },
      { service: "Master Key Systems", price: "$45" },
      { service: "Card access & keypad locking", price: "$70" },
      { service: "Security Lock Systems", price: "$120" },
    ],
  },
];

const PricingTable = () => {
  return (
    <section className="bg-white w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Pricing Plans</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((section, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col border border-gray-200 shadow-md rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Header */}
              <div className="bg-gray-900 text-white text-center py-4 font-semibold uppercase text-sm sm:text-base">
                {section.title}
              </div>

              {/* Items */}
              <ul className="flex-1 text-sm sm:text-base divide-y divide-gray-200">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between px-5 py-3 text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                  >
                    <span>{item.service}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="bg-gray-100 p-5 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded uppercase tracking-wider text-sm transition"
                >
                  See More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
