"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, TerminalSquare, Layers } from "lucide-react";

export default function TrainingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-20 lg:py-28 mx-auto min-h-screen relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/30 dark:bg-blue-900/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <section className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Training <span className="text-slate-500 dark:text-slate-400 font-serif italic">Resources</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-6 text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          We recommend practicing on the following industry-standard competitive programming platforms to hone your algorithmic intuition.
        </motion.p>
      </section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.a 
          variants={itemVariants}
          href="https://codeforces.com" 
          target="_blank" 
          rel="noreferrer"
          className="group relative bg-gray-50/80 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] hover:-translate-y-2 hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f8aca]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white dark:bg-black rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-gray-800 text-[#1f8aca]">
            <TerminalSquare size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Codeforces</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            The global gold standard for CP. Massive problemset and weekly 2-hour contests that perfectly simulate ICPC pressure.
          </p>
          <div className="mt-auto px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:bg-[#1f8aca] group-hover:text-white group-hover:border-transparent transition-colors">
            Start Solving <ArrowUpRight size={14} />
          </div>
        </motion.a>

        <motion.a 
          variants={itemVariants}
          href="https://leetcode.com" 
          target="_blank" 
          rel="noreferrer"
          className="group relative bg-gray-50/80 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] hover:-translate-y-2 hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white dark:bg-black rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-gray-800 text-orange-500">
            <Code2 size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">LeetCode</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            Highly accessible structure. Perfect for mastering Data Structure fundamentals (like Trees, Maps, and DP) before jumping into heavy math.
          </p>
          <div className="mt-auto px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent transition-colors">
            Start Solving <ArrowUpRight size={14} />
          </div>
        </motion.a>

        <motion.a 
          variants={itemVariants}
          href="https://cses.fi/problemset/" 
          target="_blank" 
          rel="noreferrer"
          className="group relative bg-gray-50/80 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] hover:-translate-y-2 hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col items-center text-center cursor-pointer md:col-span-2 lg:col-span-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white dark:bg-black rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-gray-800 text-purple-500">
            <Layers size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSES Set</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            A comprehensive curriculum of 300 pure algorithmic challenges ranging from introductory sorting to advanced graph theory.
          </p>
          <div className="mt-auto px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent transition-colors">
            Start Solving <ArrowUpRight size={14} />
          </div>
        </motion.a>

      </motion.div>

    </main>
  );
}