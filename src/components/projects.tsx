"use client";

import { motion } from "framer-motion";
import {  ExternalLink } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

const projects = [
  {
  title: "GeeksForGeeks Tracker",

  description:
    "Track coding progress, solved problems, submissions, and competitive programming journey on GeeksForGeeks.",

  color: "bg-green-100",

  type: "gfg",

  live: "https://www.geeksforgeeks.org/profile/rajat23scszckj?tab=activity",
},

  {
    title: "Ecommerce Platform",
    description:
      "Modern ecommerce app with admin dashboard and payments.",
    color: "bg-green-100",

    github: "https://github.com/Rajat-lohan/mern-ecommerce",
    live: "https://mern-ecommerce-six-beige.vercel.app",
  },

  {
    title: "Portfolio Website",
    description:
      "Animated developer portfolio using Next.js and Framer Motion.",
    color: "bg-purple-100",

    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.vercel.app",
  },

  {
  title: "LeetCode Tracker",
  description:
    "Track coding stats, contests, and heatmaps.",
  color: "bg-orange-100",

  type: "leetcode",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#eef5fb]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-center text-gray-900 mb-20"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition"
            >
              <div
                className={`h-64 ${project.color}`}
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-8">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.type === "leetcode" ? (
                    <a href="/leetcode" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">Open Tracker </a>

  ) : project.type === "gfg" ? (

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
  >
    Open GFG Profile
  </a>

)  : (
    <>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                    <FaGithub size={18} />
                      GitHub
                  </a>

                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition font-semibold">
                    <ExternalLink size={18} />
                      Live Demo
                  </a>
                  </>
  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}