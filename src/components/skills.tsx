"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    color: "bg-blue-100",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "tRPC", "Prisma"],
    color: "bg-green-100",
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
    color: "bg-purple-100",
  },
  {
    title: "Core CS",
    items: ["DSA", "OS", "DBMS", "System Design"],
    color: "bg-orange-100",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-center text-gray-900 mb-20"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${skill.color} mb-6`}
              />

              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {skill.title}
              </h3>

              <div className="space-y-4">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-blue-600 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}