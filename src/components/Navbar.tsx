"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about", hasDropdown: true },
  { label: "Important Dates", href: "#important-dates" },
  { label: "Eligibility / Fee", href: "#eligibility" },
  { label: "How to Apply", href: "#how-to-apply" },
  { label: "Syllabus / Brochure / Archive", href: "#syllabus" },
  { label: "Tech-Support", href: "#tech-support" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#2d3436] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#00bcd4] flex items-center justify-center border-2 border-white">
            <span className="text-xs font-bold text-white text-center leading-tight">
              NEST
            </span>
          </div>
          <span className="text-2xl font-bold tracking-wide">
            NEST<span className="text-[#e67e22]">2026</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                activeLink === link.label
                  ? "bg-[#e67e22] text-white"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  className="inline-block ml-1 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

      {/* Login Button */}
          <a
            href="/login"
            className="hidden lg:block bg-[#e67e22] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d35400] transition-colors"
          >
            LOGIN
          </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#2d3436] border-t border-gray-600 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMobileOpen(false);
              }}
              className={`block py-2 text-sm ${
                activeLink === link.label ? "text-[#e67e22]" : "text-gray-200"
              }`}
            >
              {link.label}
            </a>
          ))}
            <a
              href="/login"
              className="block mt-2 bg-[#e67e22] text-white px-6 py-2 rounded-full font-semibold text-center"
            >
              LOGIN
            </a>
        </div>
      )}
    </nav>
  );
}
