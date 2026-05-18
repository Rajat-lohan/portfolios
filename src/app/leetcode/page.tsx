"use client";

import {
  FaJava,
  FaFire,
} from "react-icons/fa";

import {
  SiLeetcode,
} from "react-icons/si";

import { motion } from "framer-motion";

const recentProblems = [
  {
    name: "Jump Game III",
    time: "1 day ago",
  },
  {
    name: "Find Minimum in Rotated Sorted Array II",
    time: "2 days ago",
  },
  {
    name: "Find Minimum in Rotated Sorted Array",
    time: "3 days ago",
  },
  {
    name: "Jump Game IX",
    time: "5 days ago",
  },
];

const heatmapData = [
  1,0,0,1,1,0,1,0,0,1,1,1,
  0,0,1,1,0,0,1,1,1,0,0,1,
  1,1,0,0,1,0,1,1,0,0,1,1,
  0,1,1,0,0,1,1,0,1,1,0,0,
  1,1,0,1,0,0,1,1,1,0,0,1,
  1,0,0,1,1,0,1,0,1,1,0,0,
  1,1,0,0,1,1,0,0,1,0,1,1,
];

export default function LeetCodePage() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-6 py-12">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <SiLeetcode className="text-5xl text-yellow-500" />

            <div>
              <h1 className="text-4xl font-black">
                LeetCode Tracker
              </h1>

              <p className="text-zinc-400">
                Competitive Programming Progress
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1d25] rounded-3xl p-8 border border-zinc-800 h-fit"
          >
            <div className="flex flex-col items-center text-center">
              
              <div className="w-28 h-28 rounded-full bg-zinc-700 mb-6" />

              <h2 className="text-3xl font-bold">
                RajatLohan
              </h2>

              <p className="text-zinc-400 mt-1">
                RajatLohan
              </p>

              <div className="mt-6 text-2xl font-bold text-yellow-400">
                Rank 647,350
              </div>

              <button className="mt-8 w-full h-14 rounded-2xl bg-green-600 hover:bg-green-700 transition font-semibold">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 border-t border-zinc-800 pt-8">
              
              <h3 className="text-xl font-bold mb-6">
                Community Stats
              </h3>

              <div className="space-y-5 text-zinc-300">
                
                <div className="flex justify-between">
                  <span>Views</span>
                  <span>0</span>
                </div>

                <div className="flex justify-between">
                  <span>Solution</span>
                  <span>0</span>
                </div>

                <div className="flex justify-between">
                  <span>Discuss</span>
                  <span>0</span>
                </div>

                <div className="flex justify-between">
                  <span>Reputation</span>
                  <span>0</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-10 border-t border-zinc-800 pt-8">
              
              <h3 className="text-xl font-bold mb-6">
                Languages
              </h3>

              <div className="flex items-center justify-between bg-[#111318] rounded-2xl p-4">
                
                <div className="flex items-center gap-3">
                  <FaJava className="text-orange-500 text-2xl" />

                  <span>Java</span>
                </div>

                <span className="font-semibold">
                  232 solved
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Top Cards */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Solved */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1a1d25] rounded-3xl p-8 border border-zinc-800"
              >
                <div className="flex items-center justify-between mb-8">
                  
                  <h3 className="text-2xl font-bold">
                    Problems Solved
                  </h3>

                  <FaFire className="text-orange-500 text-3xl" />
                </div>

                <div className="text-6xl font-black text-yellow-400">
                  232
                </div>

                <div className="mt-4 text-zinc-400">
                  out of 3934 problems
                </div>

                <div className="mt-10 space-y-4">
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Easy</span>
                      <span>62/944</span>
                    </div>

                    <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full w-[30%] bg-green-500 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Medium</span>
                      <span>139/2056</span>
                    </div>

                    <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full w-[45%] bg-yellow-500 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Hard</span>
                      <span>31/934</span>
                    </div>

                    <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full w-[15%] bg-red-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1a1d25] rounded-3xl p-8 border border-zinc-800"
              >
                <h3 className="text-2xl font-bold mb-8">
                  Badges
                </h3>

                <div className="flex flex-col items-center justify-center h-[250px]">
                  
                  <div className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center text-5xl">
                    🏅
                  </div>

                  <div className="mt-6 text-xl font-semibold">
                    May LeetCoding Challenge
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1a1d25] rounded-3xl p-8 border border-zinc-800"
            >
              <div className="flex items-center justify-between mb-8">
                
                <h3 className="text-3xl font-bold">
                  Activity Heatmap
                </h3>

                <div className="text-zinc-400">
                  408 submissions this year
                </div>
              </div>

              {/* Fake Heatmap */}
              <div className="grid grid-cols-12 gap-2">
                {heatmapData.map((active, index) => (
                  <div key={index} className={`h-6 rounded ${active ? "bg-green-500" : "bg-zinc-800"}`} />
  ))}
              </div>
            </motion.div>

            {/* Recent Problems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1a1d25] rounded-3xl p-8 border border-zinc-800"
            >
              <div className="flex items-center justify-between mb-8">
                
                <h3 className="text-3xl font-bold">
                  Recent AC
                </h3>

                <a
                  href="https://leetcode.com/u/RajatLohan/"
                  target="_blank"
                  className="text-yellow-400"
                >
                  View Profile
                </a>
              </div>

              <div className="space-y-5">
                {recentProblems.map((problem, index) => (
                  <div
                    key={index}
                    className="bg-[#111318] rounded-2xl p-5 flex items-center justify-between hover:bg-[#181b22] transition"
                  >
                    <div className="font-semibold">
                      {problem.name}
                    </div>

                    <div className="text-zinc-400">
                      {problem.time}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}