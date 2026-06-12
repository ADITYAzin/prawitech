"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function Header({ admin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();
  const servicesRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isAdmin = admin || pathname?.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  }

  function handleMouseEnter() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  }

  function handleMouseLeave() {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  }

  // Hide global header on all admin pages
  if (isAdmin) return null;

  function closeMobile() {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  function linkClass(href) {
    return `text-[14px] sm:text-[15px] transition-colors duration-200 ${
      isActive(href)
        ? "text-[#0768FB] font-semibold"
        : "text-[#1A1A1A] font-medium hover:text-[#0768FB]"
    }`;
  }

  function mobileLinkClass(href) {
    return `block text-[16px] transition-colors duration-200 ${
      isActive(href)
        ? "text-[#0768FB] font-semibold"
        : "text-[#1A1A1A] font-medium hover:text-[#0768FB]"
    }`;
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F4F7FB]/80 backdrop-blur-md border-b border-white/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4">
        <Link
          href={isAdmin ? "/admin" : "/"}
          className="font-heading text-2xl font-extrabold text-[#1A1A1A] tracking-tight"
        >
          Prawitech
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {isAdmin ? (
            <>
              <Link href="/admin" className={linkClass("/admin")}>
                Dashboard
              </Link>
              <Link href="/admin/work" className={linkClass("/admin/work")}>
                Works
              </Link>
              <Link href="/admin/messages" className={linkClass("/admin/messages")}>
                Messages
              </Link>
            </>
          ) : (
            <>
              <Link href="/about" className={linkClass("/about")}>
                About
              </Link>

              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className={`flex items-center gap-1 text-[14px] sm:text-[15px] transition-colors duration-200 ${
                    pathname?.startsWith("/services")
                      ? "text-[#0768FB] font-semibold"
                      : "text-[#1A1A1A] font-medium hover:text-[#0768FB]"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[200px] bg-[#F4F7FB]/80 backdrop-blur-md rounded-[12px] shadow-lg border border-white/40 p-4 transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <Link
                        href="/services/graphic-design"
                        onClick={() => setIsServicesOpen(false)}
                        className={`block text-[14px] sm:text-[15px] transition-colors duration-200 ${
                          pathname === "/services/graphic-design"
                            ? "text-[#0768FB] font-semibold"
                            : "text-[#1A1A1A] hover:text-[#0768FB]"
                        }`}
                      >
                        Graphic Design
                      </Link>
                      <Link
                        href="/services/web-development"
                        onClick={() => setIsServicesOpen(false)}
                        className={`block text-[14px] sm:text-[15px] transition-colors duration-200 ${
                          pathname === "/services/web-development"
                            ? "text-[#0768FB] font-semibold"
                            : "text-[#1A1A1A] hover:text-[#0768FB]"
                        }`}
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/services/ai-automation"
                        onClick={() => setIsServicesOpen(false)}
                        className={`block text-[14px] sm:text-[15px] transition-colors duration-200 ${
                          pathname === "/services/ai-automation"
                            ? "text-[#0768FB] font-semibold"
                            : "text-[#1A1A1A] hover:text-[#0768FB]"
                        }`}
                      >
                        AI Automation
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/work" className={linkClass("/work")}>
                Work
              </Link>
            </>
          )}
        </nav>

        {isAdmin ? (
          <button
            onClick={handleLogout}
            className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[12px] hover:opacity-90 transition-opacity duration-200"
          >
            Sign Out
            <LogOut className="w-4 h-4" />
          </button>
        ) : (
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#0768FB] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[12px] hover:opacity-90 transition-opacity duration-200"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-[#1A1A1A]"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[73px] z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobile}
        />

        <div
          className={`absolute top-0 left-0 right-0 bg-[#F4F7FB] border-b border-[#1A1A1A]/10 shadow-lg transition-all duration-300 ease-in-out ${
            isMobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="px-6 sm:px-10 py-6 space-y-5">
            {isAdmin ? (
              <>
                <Link
                  href="/admin"
                  onClick={closeMobile}
                  className={mobileLinkClass("/admin")}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/work"
                  onClick={closeMobile}
                  className={mobileLinkClass("/admin/work")}
                >
                  Works
                </Link>
                <Link
                  href="/admin/messages"
                  onClick={closeMobile}
                  className={mobileLinkClass("/admin/messages")}
                >
                  Messages
                </Link>
                <button
                  onClick={() => {
                    closeMobile();
                    handleLogout();
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white text-[15px] font-semibold px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity duration-200"
                >
                  Sign Out
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/about"
                  onClick={closeMobile}
                  className={mobileLinkClass("/about")}
                >
                  About
                </Link>

                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`flex items-center gap-1 text-[16px] transition-colors duration-200 ${
                      pathname?.startsWith("/services")
                        ? "text-[#0768FB] font-semibold"
                        : "text-[#1A1A1A] font-medium hover:text-[#0768FB]"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileServicesOpen ? "max-h-40 mt-3" : "max-h-0 mt-0"
                    }`}
                  >
                    <div className="space-y-3 pl-4 border-l-2 border-[#0768FB]/20">
                      <Link
                        href="/services/graphic-design"
                        onClick={closeMobile}
                        className={`block text-[15px] transition-colors duration-200 ${
                          pathname === "/services/graphic-design"
                            ? "text-[#0768FB] font-semibold"
                            : "text-[#1A1A1A]/70 hover:text-[#0768FB]"
                        }`}
                      >
                        Graphic Design
                      </Link>
                      <Link
                        href="/services/web-development"
                        onClick={closeMobile}
                        className={`block text-[15px] transition-colors duration-200 ${
                          pathname === "/services/web-development"
                            ? "text-[#0768FB] font-semibold"
                            : "text-[#1A1A1A]/70 hover:text-[#0768FB]"
                        }`}
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/services/ai-automation"
                        onClick={closeMobile}
                        className={`block text-[15px] transition-colors duration-200 ${
                          pathname === "/services/ai-automation"
                            ? "text-[#0768FB] font-semibold"
                            : "text-[#1A1A1A]/70 hover:text-[#0768FB]"
                        }`}
                      >
                        AI Automation
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/work"
                  onClick={closeMobile}
                  className={mobileLinkClass("/work")}
                >
                  Work
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center gap-2 bg-[#0768FB] text-white text-[15px] font-semibold px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity duration-200"
                >
                  Contact
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
