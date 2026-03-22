"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactHub() {
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

  const socials = [
    {
      name: "WhatsApp",
      description: "Join our primary announcement group.",
      icon: <FaWhatsapp size={40} />,
      href: "https://chat.whatsapp.com/",
      color: "from-green-500/10",
      textClass: "text-green-500",
      bgHover: "group-hover:bg-green-500",
    },
    {
      name: "Discord",
      description: "Hangout, ask coding doubts, and team up.",
      icon: <FaDiscord size={40} />,
      href: "https://discord.gg/",
      color: "from-indigo-500/10",
      textClass: "text-indigo-500",
      bgHover: "group-hover:bg-indigo-500",
    },
    {
      name: "LinkedIn",
      description: "Connect with ECA alumni and professionals.",
      icon: <FaLinkedin size={40} />,
      href: "https://www.linkedin.com/",
      color: "from-blue-500/10",
      textClass: "text-blue-500",
      bgHover: "group-hover:bg-blue-600",
    },
    {
      name: "Instagram",
      description: "Check out event reels & behind the scenes.",
      icon: <FaInstagram size={40} />,
      href: "https://www.instagram.com/",
      color: "from-pink-500/10",
      textClass: "text-pink-500",
      bgHover: "group-hover:bg-pink-600",
    },
  ];

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-20 lg:py-28 mx-auto min-h-screen relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/30 dark:bg-blue-900/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/30 dark:bg-purple-900/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <section className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Join the <span className="text-slate-500 dark:text-slate-400 font-serif italic">Community</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-6 text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Whether you want to team up for hackathons, ask for coding advice, or just hang out with fellow developers, we are everywhere you are.
        </motion.p>
      </section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto mb-20"
      >
        {socials.map((social) => (
          <motion.a 
            key={social.name}
            variants={itemVariants}
            href={social.href} 
            target="_blank" 
            rel="noreferrer"
            className="group relative bg-gray-50/80 dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 p-10 rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl dark:shadow-none transition-all duration-300 flex flex-col items-start cursor-pointer overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="flex justify-between w-full items-start mb-8 relative z-10">
              <div className={`w-16 h-16 flex items-center justify-center bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 ${social.textClass} group-hover:scale-110 transition-transform duration-500`}>
                {social.icon}
              </div>
              <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 flex items-center justify-center group-hover:bg-white group-hover:text-black dark:group-hover:text-white transition-colors shadow-sm">
                <ArrowUpRight size={24} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{social.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed relative z-10">
              {social.description}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Official Email Contact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-5xl mx-auto bg-slate-900 dark:bg-white rounded-[2rem] p-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6 shadow-xl"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/10 dark:bg-black/5 flex items-center justify-center flex-shrink-0">
            <Mail className="text-white dark:text-gray-900" size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-1">Official Inquiries</h3>
            <p className="text-gray-400 dark:text-gray-600">Reach out to the executive board directly.</p>
          </div>
        </div>
        <a href="mailto:contact@eca.edu" className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center shadow-lg">
          contact@eca.edu
        </a>
      </motion.div>

    </main>
  );
}