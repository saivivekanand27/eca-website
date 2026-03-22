"use client";
import Image from "next/image";
import { Users, Trophy, Mic, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DetailedCard from "../components/DetailedCard";

export default function Home() {
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* HERO */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
            Emerging Computers <span className="text-blue-600 dark:text-blue-500">Arena</span>
          </h1>
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-xl leading-relaxed transition-colors duration-300">
            Emerging Computers Arena (ECA) is a premier student community at SNIST
            focused on competitive programming, innovation, and building
            impactful technology together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20"
            >
              Become a Member <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-bold border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition text-gray-800 dark:text-gray-200"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <Image
            src="/ECA.jpeg"
            alt="ECA Logo"
            width={400}
            height={400}
            className="rounded-full shadow-2xl object-cover relative z-10 p-2 bg-white dark:bg-gray-900 transition-colors duration-300"
            priority
          />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Why Join <span className="text-blue-600 dark:text-blue-500">ECA</span>?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 max-w-2xl mx-auto">Discover the benefits of being part of our vibrant tech community.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <DetailedCard 
            icon={<Users size={32} />}
            title="Peer Learning"
            description="Juniors learn advanced data structures and algorithms from seniors through highly collaborative, hands-on problem solving sessions every week."
            tooltipText="Mentorship happens 1-on-1 and in group settings."
          />
          <DetailedCard 
            icon={<Trophy size={32} />}
            title="Coding Competitions"
            description="Participate in regular internal competitive programming contests to sharpen your algorithmic thinking and prepare for ICPC."
            tooltipText="We host weekly contests on platforms like Codeforces."
          />
          <DetailedCard 
            icon={<Mic size={32} />}
            title="Speaker Sessions"
            description="Learn directly from industry experts, notable alumni, and tech leaders through guest talks, specialized workshops, and hackathons."
            tooltipText="Past speakers include engineers from FAANG!"
          />
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="mt-32 pb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Upcoming <span className="text-blue-600 dark:text-blue-500">Events</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
          Future events ordered chronologically.
        </p>
        <div className="mt-12 p-16 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl bg-gray-50 dark:bg-gray-900/30 flex flex-col items-center justify-center transition-colors duration-300">
           <p className="text-blue-600 dark:text-blue-400 font-bold text-2xl tracking-wide">
            Exciting events coming soon! Stay tuned.
           </p>
        </div>
      </section>
    </main>
  );
}