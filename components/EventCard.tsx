"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

export type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

interface EventCardProps {
  event: Event;
  idx?: number;
}

export default function EventCard({ event, idx = 0 }: EventCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="group relative h-[320px] w-full isolate cursor-crosshair flex-shrink-0"
    >
      <motion.div 
        whileHover="hover"
        initial="initial"
        className="relative h-full w-full bg-white dark:bg-[#080808] border border-gray-200 dark:border-white/5 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-none dark:hover:border-white/20 transition-all duration-500 flex flex-col items-center justify-center p-8"
      >
        <motion.h3 
          variants={{
            initial: { y: 0, scale: 1 },
            hover: { y: -45, scale: 0.95 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white tracking-wide text-center group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300 px-4"
        >
          {event.title}
        </motion.h3>

        <motion.div 
          variants={{
            initial: { opacity: 0, y: 40 },
            hover: { opacity: 1, y: 10 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-10 left-0 w-full px-8 flex flex-col items-center pointer-events-none"
        >
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 font-semibold">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <CalendarDays size={14} className="text-gray-900 dark:text-gray-100" /> 
              {event.date}
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={14} className="text-gray-900 dark:text-gray-100" /> 
              {event.location}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center line-clamp-3">
            {event.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}