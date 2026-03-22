"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react";

export default function ICPCMainPage() {
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
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* HERO DESCRIPTION */}
      <section className="text-center mb-24 relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight"
        >
          The <span className="text-slate-500 dark:text-slate-400 font-serif italic">Olympics</span> of Coding
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-8 text-xl leading-relaxed font-light"
        >
          The <strong>International Collegiate Programming Contest (ICPC)</strong> is the world's most prestigious competitive programming competition. Teams of 3 are challenged to solve incredibly complex algorithmic problems under immense time pressure. It tests teamwork, logic, and speed.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 mt-6 text-lg leading-relaxed font-light"
        >
          At ECA, our core mission is taking complete beginners and molding them into elite competitors ready to represent SNIST on the global stage. 
        </motion.p>
      </section>

      {/* THREE PILLARS SECTION */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-8 mb-24 relative z-10"
      >
        <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <TrendingUp className="text-gray-900 dark:text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Zero to Hero</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            We provide structured roadmaps for data structures and algorithms, starting from the absolute basics up to advanced trees and graphs.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <Users className="text-gray-900 dark:text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Team Synergy</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            ICPC is a team sport. We host mock contests that force 3-person squads to share a single computer, optimizing communication and strategy.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <Globe className="text-gray-900 dark:text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Global Recognition</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            High performers in the regionals often skip standard FAANG interviews. We help you put extreme competitive programming on your resume.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-slate-900 dark:bg-white rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:text-gray-900 mb-6 tracking-tight">
            Ready to Start Training?
          </h2>
          <p className="text-gray-300 dark:text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            Skip the tutorial hell. Jump directly into our curated practice platforms and start building your fundamental problem-solving intuition today.
          </p>
          <Link href="/icpc/training" className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#0a0a0a] border border-transparent dark:border-gray-800 text-gray-900 dark:text-white font-bold rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all">
            Access Resources <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.section>

    </main>
  );
}