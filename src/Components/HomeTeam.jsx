import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Chauffina Carr",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/08/team-600x600.jpg",
    bio: "Logan grew up in a household where design was very important. His father was a chief furniture deisgn for",
  },
  {
    name: "Parsley Montana",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/08/team-2-600x600.jpg",
    bio: "Logan grew up in a household where design was very important. His father was a chief furniture deisgn for",
  },
  {
    name: "Bodrum Salvador",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/08/team-3-445x445.jpg",
    bio: "Logan grew up in a household where design was very important. His father was a chief furniture deisgn for",
  },
  {
    name: "Nathaneal Down",
    image:
      "https://themes.webdevia.com/locksmith-home-security-systems-wordpress-theme/wp-content/uploads/2017/08/team-4-445x445.jpg",
    bio: "Logan grew up in a household where design was very important. His father was a chief furniture deisgn for",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white w-full py-12 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-lg shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
