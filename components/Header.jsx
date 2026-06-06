"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F4F7FB]/80 backdrop-blur-md border-b border-white/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4">
        {/* Left Zone: Brand Identity */}
        <Link
          href="/"
          className="font-heading text-2xl font-extrabold text-[#1A1A1A] tracking-tight"
        >
          Prawitech
        </Link>

        {/* Center Zone: Main Navigation & Nested Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/about"
            className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-medium hover:text-[#0768FB] transition-colors duration-200"
          >
            About
          </Link>

          {/* Services with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-medium hover:text-[#0768FB] transition-colors duration-200"
            >
              Services
            </button>

            {/* Dropdown Panel */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[200px] bg-[#F4F7FB]/80 backdrop-blur-md rounded-[12px] shadow-lg border border-white/40 p-4 transition-all duration-300">
                <div className="space-y-3">
                  <Link
                    href="/services/graphic-design"
                    className="block text-[14px] sm:text-[15px] text-[#1A1A1A] hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="block text-[14px] sm:text-[15px] text-[#1A1A1A] hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/ai-automation"
                    className="block text-[14px] sm:text-[15px] text-[#1A1A1A] hover:text-[#0768FB] transition-colors duration-200"
                  >
                    AI Automation
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/work"
            className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-medium hover:text-[#0768FB] transition-colors duration-200"
          >
            Work
          </Link>
        </nav>

        {/* Right Zone: Primary Action / Conversion */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#0768FB] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[12px] hover:opacity-90 transition-opacity duration-200"
        >
          Contact
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
