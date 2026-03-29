"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Compass, Code2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import eventsData from "../data/events.json";
import EventCard, { Event } from "../components/EventCard";

export default function Home() {

  const today = new Date();

  const upcomingEvents: Event[] = (eventsData.events as Event[])
    .filter((event) => new Date(event.date) >= today)
    .slice(0, 3);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: .6 }
    }
  };

  return (

    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0a0a0a] tracking-tight">

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 blur-[120px] rounded-full animate-pulse"/>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"/>
      </div>

      {/* HERO */}
      <section className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">

        {/* ✅ THIS LINE MOVES CONTENT UP */}
        <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 md:gap-20 -translate-y-20 md:-translate-y-28">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="max-w-2xl text-center md:text-left"
          >

            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/30 backdrop-blur-md text-xs tracking-wider uppercase text-gray-600 dark:text-gray-300 mb-6">
              Welcome to our community
            </div>

            <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
              Emerging Computers{" "}
              <span className="text-slate-500 dark:text-slate-400 font-serif italic">
                Arena
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              We are dedicated to enhancing the coding culture at{" "}
              <b className="text-gray-900 dark:text-white">
                Sreenidhi Institute of Science and Technology (SNIST)
              </b>.
            </p>

            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition"
            >
              Meet the Team
              <ArrowRight className="ml-2 w-4 h-4"/>
            </Link>

          </motion.div>

          {/* LOGO */}
          <motion.div
            className="flex justify-center md:justify-end w-full"
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
          >

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40"/>

              <Image
                src="/ECA.jpeg"
                alt="ECA Logo"
                width={300}
                height={300}
                className="rounded-full relative z-10 shadow-2xl p-2 bg-white dark:bg-black"
                priority
              />
            </div>

          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce text-sm">
          Scroll ↓
        </div>

      </section>

      {/* MISSION */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 mx-auto py-20">

        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-gray-900 dark:text-white">
            Our{" "}
            <span className="text-slate-500 dark:text-slate-400 font-serif italic">
              Mission
            </span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >

          <motion.div variants={itemVariants} className="md:col-span-8 glass-card">
            <Code2 size={26}/>
            <h3 className="text-2xl font-semibold mt-4">
              Competitive Coding & DSA
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">
              Our focus is mastering Data Structures and Algorithms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 glass-card">
            <Compass size={26}/>
            <h3 className="text-xl font-semibold mt-4">
              Fields & Exploration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
              Explore different tech fields.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 glass-card">
            <Users size={26}/>
            <h3 className="text-xl font-semibold mt-4">
              Senior Mentorship
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
              Learn from experienced seniors.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-8 relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-amber-400/10 via-orange-400/10 to-transparent border border-amber-200/20"
          >
            <Trophy className="text-amber-500" size={42}/>
            <h3 className="text-3xl font-bold mt-4">
              ICPC at SNIST
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-lg">
              Build elite teams for ICPC.
            </p>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-400/20 blur-3xl rounded-full"/>
          </motion.div>

        </motion.div>

      </section>

      {/* EVENTS */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 py-16 border-t border-gray-200 dark:border-white/10 text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Upcoming Events
        </h2>

        {upcomingEvents.length === 0 ? (
          <p className="mt-8 text-gray-500 italic">
            No upcoming events scheduled yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 text-left">
            {upcomingEvents.map((event, idx) => (
              <EventCard key={event.title} event={event} idx={idx}/>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href="/events"
            className="px-6 py-3 border rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            View All Events
            <ArrowRight className="ml-2 w-4 h-4 inline"/>
          </Link>
        </div>

      </section>

    </main>
  );
}