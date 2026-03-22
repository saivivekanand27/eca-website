"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icpcOpen, setIcpcOpen] = useState(false);
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  const icpcLinks = [
    { name: "What is it?", href: "/icpc" },
    { name: "Training & Practice", href: "/icpc/training" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="w-full mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/ECA.jpeg"
            alt="ECA Logo"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/20 group-hover:scale-110 transition duration-300"
          />
          <span className="text-xl font-serif italic font-bold text-slate-800 dark:text-slate-200 tracking-wide">
            ECA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-semibold text-sm tracking-wide">

          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative hover:text-black dark:hover:text-white transition group"
            >
              {link.name}
              <motion.span 
                className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}

          {/* ICPC Dropdown */}
          <div className="relative" 
               onMouseEnter={() => setIcpcOpen(true)}
               onMouseLeave={() => setIcpcOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white transition py-2">
              ICPC 
              <motion.div animate={{ rotate: icpcOpen ? 180 : 0 }}>
                <ChevronDown size={16} />
              </motion.div>
            </div>

            <AnimatePresence>
              {icpcOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 pt-2"
                >
                  <div className="bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl w-48 py-3">
                    {icpcLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-white/10 transition text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="relative hover:text-black dark:hover:text-white transition group">
            Connect
            <motion.span 
              className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          
          {/* Dark mode toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            <AnimatePresence mode="wait">
              {mounted && (
                <motion.div
                  key={theme === "dark" ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Join Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full shadow-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors ml-2"
          >
            Join ECA
          </motion.button>

        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-700 dark:text-gray-300"
          >
            {mounted && (theme === "dark" ? <Sun size={24} /> : <Moon size={24} />)}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X size={28} className="text-gray-900 dark:text-white" /> : <Menu size={28} className="text-gray-900 dark:text-white" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl text-gray-700 dark:text-gray-300 overflow-hidden border-t border-gray-200 dark:border-white/10"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="py-3 text-lg font-medium border-b border-gray-100 dark:border-white/5 hover:text-black dark:hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile ICPC dropdown */}
              <div className="border-b border-gray-100 dark:border-white/5 pb-2">
                <button
                  onClick={() => setIcpcOpen(!icpcOpen)}
                  className="flex justify-between items-center w-full py-3 text-lg font-medium hover:text-black dark:hover:text-white"
                >
                  ICPC
                  <motion.div animate={{ rotate: icpcOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {icpcOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col pl-4 overflow-hidden border-l-2 border-gray-200 dark:border-white/10 ml-2 mt-2"
                    >
                      {icpcLinks.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-black dark:hover:text-white transition"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="py-3 text-lg font-medium hover:text-black dark:hover:text-white border-b border-gray-100 dark:border-white/5 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              <button className="mt-6 bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-3 rounded-xl font-bold w-full hover:opacity-90 transition shadow-lg">
                Join ECA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}