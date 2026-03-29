"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [icpcOpen, setIcpcOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  // Fix hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMounted(true);
}, []);

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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-white/10">

      <div className="w-full mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ECA.jpeg"
            alt="ECA Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold text-slate-800 dark:text-white">
            ECA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-semibold text-sm">

          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-black dark:hover:text-white">
              {link.name}
            </Link>
          ))}

          {/* ICPC Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIcpcOpen(true)}
            onMouseLeave={() => setIcpcOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              ICPC
              <ChevronDown size={16} />
            </div>

            <AnimatePresence>
              {icpcOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-10 left-0 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl shadow-lg w-48 py-3"
                >
                  {icpcLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact">Contact</Link>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10"
          >
            {mounted && (
              resolvedTheme === "dark" ? <Sun size={20}/> : <Moon size={20}/>
            )}
          </button>

          {/* Join Button */}
          <Link href="/join">
            <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-bold">
              Join ECA
            </button>
          </Link>

        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4">

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              resolvedTheme === "dark" ? <Sun size={24}/> : <Moon size={24}/>
            )}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-white/10"
          >
            <div className="flex flex-col gap-2 px-6 py-6">

              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setIcpcOpen(!icpcOpen)}
                className="flex justify-between py-3"
              >
                ICPC
                <ChevronDown size={20}/>
              </button>

              {icpcOpen && (
                <div className="flex flex-col pl-4">
                  {icpcLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/contact">Contact</Link>

              <Link href="/join">
                <button className="mt-4 bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-xl w-full">
                  Join ECA
                </button>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}