import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Dignissim phasellus ultrices tellus",
    excerpt:
      "Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.",
    date: "28",
    month: "Aug",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/emergency-368x193.jpg",
  },
  {
    id: 2,
    title: "Excepteur sint occaecat cupidatat",
    excerpt:
      "Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.",
    date: "28",
    month: "Aug",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2016/05/commercial-368x193.jpg",
  },
  {
    id: 3,
    title: "Aenean nonummy hendrerit mauris",
    excerpt:
      "Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.",
    date: "28",
    month: "Aug",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2014/08/shutterstock_227886367-368x193.jpg",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Latest News</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto my-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group bg-white rounded cursor-pointer overflow-hidden shadow-md relative transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-0 left-0 bg-yellow-500 text-white font-bold text-sm leading-tight">
                    <div className="px-2 py-1">{post.date}</div>
                    <div className="bg-black px-2 py-1 uppercase">
                      {post.month}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition">
                    {post.title}
                  </h3>
                  {/* Decorative underline */}
                  <div className="w-8 h-1 bg-yellow-400 mb-3"></div>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <span className="text-yellow-500 font-semibold text-sm hover:underline">
                    Read More →
                  </span>

                  {/* Hover Underline Effect */}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#FFB61E] transition-all duration-300 origin-center group-hover:w-full transform -translate-x-1/2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
