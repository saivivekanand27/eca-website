"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import galleryData from "../../data/gallery.json";

type GalleryEvent = {
  slug: string;
  title: string;
  image?: string;
};

export default function Gallery() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const events = galleryData as GalleryEvent[];

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-20 lg:py-28 mx-auto min-h-screen relative overflow-hidden bg-white dark:bg-[#0a0a0a]">

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-200/50 dark:bg-gray-800/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gray-300/30 dark:bg-gray-900/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Heading */}
      <section className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          ECA{" "}
          <span className="text-slate-500 dark:text-slate-400 font-serif italic font-medium">
            Gallery
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Explore the memories captured from our flagship workshops,
          competitions, and community gatherings.
        </motion.p>
      </section>

      {/* Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
      >
        {events.map((event) => (
          <motion.div key={event.slug} variants={itemVariants}>
            <Link
              href={`/gallery/${event.slug}`}
              className="block h-full w-full outline-none"
            >
              <div className="group relative h-[380px] w-full rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-2xl dark:shadow-none dark:hover:border-white/20 transition-all duration-500 cursor-crosshair">

                <Image
                  src={event.image || "/ECA.jpeg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View Photos
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-wide">
                        {event.title}
                      </h2>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 flex-shrink-0 shadow-lg transform group-hover:scale-100 scale-75 hover:scale-110 transition-all">
                      <ArrowUpRight size={24} />
                    </div>

                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

    </main>
  );
}