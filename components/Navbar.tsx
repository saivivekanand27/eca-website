"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    {
      name: "ICPC",
      href: "/icpc",
      dropdown: [
        { name: "About ICPC", href: "/icpc" },
        { name: "Training", href: "/icpc/training" },
        { name: "Teams", href: "/icpc/teams" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/ECA.jpeg" alt="ECA Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-xl font-semibold text-white">ECA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group">
              {!link.dropdown ? (
                <Link href={link.href} className="hover:text-blue-500 transition">
                  {link.name}
                </Link>
              ) : (
                <>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition">
                    {link.name} <ChevronDown size={16} />
                  </button>
                  <div className="absolute top-8 left-0 hidden group-hover:block bg-black border border-gray-800 rounded-lg shadow-lg w-48 py-2 z-50">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-5 py-2 hover:bg-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-gray-300 flex flex-col gap-2 px-6 py-4 border-t border-gray-800">
          {navLinks.map((link, idx) => (
            <div key={idx} className="flex flex-col">
              {!link.dropdown ? (
                <Link
                  href={link.href}
                  className="py-2 hover:text-blue-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <div>
                  <button
                    className="flex justify-between items-center py-2 w-full hover:text-blue-500 transition"
                    onClick={() =>
                      setDropdownOpen(prev => ({
                        ...prev,
                        [link.name]: !prev[link.name],
                      }))
                    }
                  >
                    {link.name}{" "}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        dropdownOpen[link.name] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {dropdownOpen[link.name] && (
                    <div className="flex flex-col pl-4">
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="py-2 hover:text-blue-500 transition"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Join Button */}
          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Join ECA
          </button>
        </div>
      )}
    </nav>
  );
}