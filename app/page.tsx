"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Compass, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import eventsData from "../data/events.json";
import EventCard, { Event } from "../components/EventCard";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const today = new Date();
  const upcomingEvents: Event[] = (eventsData.events as Event[]).filter(
    (event) => new Date(event.date) >= today
  ).slice(0, 3);

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatingVariants: any = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0a0a0a] pb-32">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-gray-200/50 dark:bg-gray-800/20 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-gray-300/30 dark:bg-gray-900/40 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 py-20 lg:py-28 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/20 text-gray-600 dark:text-gray-300 font-medium mb-8 backdrop-blur-md shadow-sm">
            <span className="tracking-wide text-sm font-serif">Welcome to our community</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white transition-colors duration-300 mb-6">
            Emerging Computers <span className="text-slate-500 dark:text-slate-400 font-serif italic">Arena</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10">
            We are dedicated to enhancing the coding culture at <b className="font-semibold text-gray-900 dark:text-white">Sreenidhi Institute of Science and Technology (SNIST)</b>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/team" className="px-8 flex items-center justify-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-black dark:hover:bg-gray-100 font-semibold rounded-full shadow-lg transition-all duration-300">
              Meet the Team <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="relative flex-shrink-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <Image
            src="/ECA.jpeg"
            alt="ECA Logo"
            width={400}
            height={400}
            className="rounded-full shadow-2xl object-cover relative z-10 p-2 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
            priority
          />
        </motion.div>
      </section>

      {/* CORE OBJECTIVES SECTION (BENTO GRID FROM ABOUT) */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 mx-auto mt-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 dark:text-white tracking-tight">Our <span className="text-slate-500 dark:text-slate-400 font-serif italic">Mission</span></h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* Card 1: CP & DSA */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 relative group bg-gray-50/50 dark:bg-gray-900/40 backdrop-blur-2xl border border-gray-200/80 dark:border-white/5 p-10 lg:p-12 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-gray-200/50 dark:bg-gray-800/30 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                <Code2 className="text-gray-900 dark:text-gray-100" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Competitive Coding & DSA</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-normal">
                  Our primary focus is mastering Data Structures and Algorithms. We provide a rigorous, highly collaborative environment for students to sharpen their problem-solving skills and thrive in coding competitions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Exploration */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 relative group bg-gray-50/50 dark:bg-gray-900/40 backdrop-blur-2xl border border-gray-200/80 dark:border-white/5 p-10 lg:p-12 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-slate-200/50 dark:bg-slate-800/30 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Compass className="text-slate-900 dark:text-slate-100" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Fields & Exploration</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Not sure where to start? We guide students on exactly what tech fields to explore, providing curated roadmaps and high-quality learning resources.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Mentoring */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 relative group bg-gray-50/50 dark:bg-gray-900/40 backdrop-blur-2xl border border-gray-200/80 dark:border-white/5 p-10 lg:p-12 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-200/50 dark:bg-gray-800/30 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Users className="text-gray-900 dark:text-gray-100" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Senior Mentorship</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Get personalized, hands-on mentoring from experienced seniors who have traversed the same paths, interviewed at top companies, and conquered the same challenges.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: ICPC Flagship (True Floating UI) */}
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="md:col-span-8 relative group"
          >
            {/* Animated realistic soft border backdrop */}
            <div className="absolute -inset-0.5 bg-gray-300 dark:bg-gray-700 rounded-[2.6rem] opacity-30 blur-sm group-hover:opacity-50 transition duration-700" />
            
            <div className="relative bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-3xl h-full w-full rounded-[2.5rem] p-10 lg:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-14 border border-gray-200 dark:border-gray-800">
              
              <div className="relative flex-shrink-0">
                <div className="relative bg-amber-50 dark:bg-amber-900/20 p-8 rounded-[2rem] border border-amber-200/50 dark:border-amber-700/30 transform group-hover:scale-105 transition duration-500 shadow-sm">
                  <Trophy className="text-amber-700 dark:text-amber-500 w-16 h-16" />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase rounded-full mb-4 shadow-sm">
                  Our Core Objective
                </div>
                <h3 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
                  <span className="text-slate-500 dark:text-slate-400 font-serif italic">ICPC</span> at SNIST
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  Our main priority is building elite teams that represent SNIST at the <strong className="text-gray-900 dark:text-white font-semibold">International Collegiate Programming Contest (ICPC)</strong>. We provide the ecosystem, resources, and training—you bring the grit and determination.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 pb-16 pt-24 mt-16 text-center border-t border-gray-200 dark:border-white/5">
        <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-gray-900 dark:text-white tracking-tight">
          Upcoming <span className="text-slate-500 dark:text-slate-400 font-serif italic">Events</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl mx-auto mb-12">
          Future events ordered chronologically. Don't miss out on what's next for the community.
        </p>

        {upcomingEvents.length === 0 ? (
          <div className="mt-8 flex justify-center">
            <p className="text-gray-500 italic">No upcoming events scheduled yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 text-left">
            {upcomingEvents.map((event, idx) => (
              <EventCard key={event.title} event={event} idx={idx} />
            ))}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Link href="/events" className="px-8 flex items-center justify-center py-4 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            View All Events <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}