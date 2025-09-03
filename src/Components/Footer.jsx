// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white text-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold tracking-widest mb-4">LOCKSMITH®</h2>
          <p className="text-gray-400 leading-relaxed">
            The locksmith inc. is the leader of locksmith installation and repair in
            the country sed diam nonumy eirmod tempor invidunt ut labore and
            efficient strategy.
          </p>
        </motion.div>

        {/* Center: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <span className="font-semibold text-white">PHONE:</span> +1 123 457 653
            </li>
            <li>
              <span className="font-semibold text-white">FAX:</span> +1 496 457 654
            </li>
            <li>
              <span className="font-semibold text-white">EMAIL:</span>{" "}
              our-mail@example.com
            </li>
            <li>
              <span className="font-semibold text-white">ADDRESS:</span> 121 King
              Street, Melbourne 3000 Australia
            </li>
          </ul>
        </motion.div>

        {/* Right: Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-gray-400 mb-3">Sign up your newsletter</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-4 py-2 border border-amber-50 text-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 font-bold hover:bg-yellow-500 transition rounded-r-md">
              GO
            </button>
          </div>
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaVimeoV />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <div className="space-x-4 mb-2 md:mb-0">
            <a href="/about" className="hover:text-white">
              About Us
            </a>
            <span>|</span>
            <a href="/blogs" className="hover:text-white">
              Blog
            </a>
            <span>|</span>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <p>© 2025 Locksmith. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
