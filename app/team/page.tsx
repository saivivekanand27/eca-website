"use client";

import { useState } from "react";
import { Linkedin, Github, Mail, Globe } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import teamDataJson from "../../data/team.json";

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
};

type TeamData = {
  executive: Member[];
  technical: Member[];
  nontech: Member[];
};

type TeamCategory = "executive" | "technical" | "nontech";

const teamData: TeamData = teamDataJson as TeamData;

export default function Team() {
  const [activeTab, setActiveTab] = useState<TeamCategory>("executive");
  const members = teamData[activeTab] || [];

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-20 mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Heading */}
      <section className="text-center mb-16 relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,6vw,4rem)] md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Meet the <span className="text-slate-500 dark:text-slate-400 font-serif italic font-medium">Team</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          The passionate minds and dedicated builders behind Emerging Computers Arena. We are united by code and driven by innovation.
        </motion.p>
      </section>

      {/* Modern Pill Tabs */}
      <div className="flex justify-center gap-3 md:gap-6 mt-10 flex-wrap relative z-20 mb-16">
        {(["executive", "technical", "nontech"] as TeamCategory[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                isActive 
                  ? "text-white dark:text-gray-900 shadow-md"
                  : "bg-white dark:bg-[#0a0a0a] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {tab === "executive" ? "Executive Body" : tab === "technical" ? "Technical Team" : "Core Team"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Minimal Cards */}
      <motion.section 
        layout
        className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {members.map((member, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              key={member.name + activeTab}
              className="group relative h-[360px] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(20%-2.5rem)] min-w-[220px] max-w-[260px] isolate cursor-pointer flex-shrink-0"
            >
              {/* Minimal Card Container */}
              <div className="relative h-full w-full bg-white dark:bg-[#080808] border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none dark:hover:border-white/20 transition-all duration-500 flex flex-col p-8 items-center justify-start">
                
                {/* Image Section - Circular Minimal */}
                <div className="relative h-36 w-36 overflow-hidden rounded-full mb-6 border-4 border-gray-50 dark:border-white/5 shadow-inner transition-colors duration-500">
                  <Image
                    src={member.image || "/ECA.jpeg"}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="relative z-20 flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white tracking-wide transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-2 uppercase tracking-[0.2em]">
                    {member.role}
                  </p>
                </div>

                {/* Social Links fading in smoothly */}
                <div className="absolute bottom-6 flex gap-4 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black dark:hover:text-white transition"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href={member.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black dark:hover:text-white transition"
                  >
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

    </main>
  );
}