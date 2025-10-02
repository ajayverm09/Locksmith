// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/blogs", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold flex items-center">
            <motion.img
              src="http://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/07/logo3.png"
              alt="Logo"
              className="h-6 sm:p-2 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[150px] md:max-w-[180px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-medium transition ${
                    isActive(link.path)
                      ? "text-yellow-500"
                      : "hover:text-yellow-500"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 text-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium transition ${
                      isActive(link.path)
                        ? "text-yellow-500"
                        : "hover:text-yellow-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
