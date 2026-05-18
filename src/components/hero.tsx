"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#eef5fb] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium mb-8">
            Available for Placements
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900">
            Full Stack
            <br />
            Developer Portfolio
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-2xl">
            I build scalable web applications using Next.js,
            TypeScript, Prisma, PostgreSQL, and modern frontend
            technologies.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a href="#projects" className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
              View Projects
            </a>

            <a href="/resume.pdf" download className="px-8 py-4 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">Download Resume</a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="flex justify-center">

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 w-full max-w-xl">

        <iframe
          src="/resume.pdf"
          className="w-full h-[700px]"
        />
      </div>
    </div>
      </div>
    </section>
  );
}