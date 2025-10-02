import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./BlogData";
import { motion } from "framer-motion";

const BlogsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#F7F6FB] py-14 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 sm:mb-14 text-gray-900"
        >
          Latest Blogs
        </motion.h2>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition h-full"
            >
              {/* Image - Clickable */}
              <Link to={`/blog/${blog.id}`} className="block overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </Link>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-sm font-semibold text-yellow-600 uppercase">
                    {blog.category}
                  </span>
                  {/* Title - Clickable */}
                  <Link to={`/blog/${blog.id}`}>
                    <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2 sm:mb-3 text-gray-900 transition-colors hover:text-yellow-500 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                {/* Button - Clickable */}
                <Link to={`/blog/${blog.id}`}>
                  <div className="mt-2">
                    <span className="inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition text-sm sm:text-base text-center">
                      Read More
                    </span>
                  </div>
                </Link>
              </div>

              {/* Footer */}
              <div className="border-t px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 flex justify-between">
                <span>✍️ {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;