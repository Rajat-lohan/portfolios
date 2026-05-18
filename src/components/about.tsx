"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE - RESUME PREVIEW */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#eef5fb] rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

            <iframe
              src="/resume.pdf"
              className="w-full h-[750px]"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-green-600 font-bold uppercase tracking-widest mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Full Stack
            <br />
            Developer
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-10">
            I am a passionate Computer Science undergraduate
            focused on building scalable and high-performance
            web applications using Next.js, TypeScript,
            Prisma, PostgreSQL, and modern technologies.

            I enjoy solving DSA problems, learning System Design,
            and developing real-world full stack applications.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-[#eef5fb] rounded-3xl p-8">
              <div className="text-5xl font-black text-green-600">
                265+
              </div>

              <div className="mt-3 text-gray-600 font-medium">
                Problems Solved
              </div>
            </div>

            <div className="bg-[#eef5fb] rounded-3xl p-8">
              <div className="text-5xl font-black text-green-600">
                5+
              </div>

              <div className="mt-3 text-gray-600 font-medium">
                Full Stack Projects
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="space-y-6 mt-12">

            <div className="bg-[#eef5fb] rounded-3xl p-6">
              <h3 className="font-bold text-2xl mb-3 text-gray-900">
                Education
              </h3>

              <p className="text-gray-600 leading-8">
                B.Tech Computer Science Engineering
                at Galgotias University (2023–2027)
                with CGPA 7.52.
              </p>
            </div>

            <div className="bg-[#eef5fb] rounded-3xl p-6">
              <h3 className="font-bold text-2xl mb-3 text-gray-900">
                Experience
              </h3>

              <p className="text-gray-600 leading-8">
                Full Stack Web Development,
                DSA, System Design,
                Authentication Systems,
                and scalable backend development.
              </p>
            </div>

            <div className="bg-[#eef5fb] rounded-3xl p-6">
              <h3 className="font-bold text-2xl mb-3 text-gray-900">
                Goal
              </h3>

              <p className="text-gray-600 leading-8">
                Crack top product-based companies
                and become a highly skilled Software Engineer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}