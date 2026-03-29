"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "../../data/events.json";
import EventCard, { Event } from "../../components/EventCard";

type EventCategory = "upcoming" | "past";

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventCategory>("upcoming");
  const today = new Date();

  // Handle parsing failures gracefully based on data
  const upcomingEvents: Event[] = (eventsData.events as Event[]).filter(
    (event) => new Date(event.date) >= today
  );

  const pastEvents: Event[] = (eventsData.events as Event[]).filter(
    (event) => new Date(event.date) < today
  );

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-20 lg:py-28 mx-auto min-h-screen relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-200/50 dark:bg-gray-800/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gray-300/30 dark:bg-gray-900/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Heading */}
      <section className="text-center mb-16 relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          ECA <span className="text-slate-500 dark:text-slate-400 font-serif italic font-medium">Events</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Workshops, coding contests, and community gatherings designed fully to elevate your skills and career.
        </motion.p>
      </section>

      {/* Modern Pill Tabs */}
      <div className="flex justify-center gap-3 md:gap-6 mt-10 flex-wrap relative z-20 mb-16">
        {(["upcoming", "past"] as EventCategory[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                isActive 
                  ? "text-white dark:text-gray-900 shadow-md"
                  : "bg-white dark:bg-[#080808] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-event-tab"
                  className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize tracking-wide text-sm">
                {tab} Events
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Minimal Typography Cards */}
      <motion.section 
        layout
        className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {currentEvents.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-full text-center py-20 text-gray-500 italic"
            >
              No {activeTab} events to show currently.
            </motion.div>
          ) : (
            currentEvents.map((event, idx) => (
              <EventCard key={event.title + activeTab} event={event} idx={idx} />
            ))
          )}
        </AnimatePresence>
      </motion.section>

    </main>
  );
}