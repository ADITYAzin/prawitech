"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F7FB] px-6">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-[32px] border border-white/40 p-8 shadow-sm">
        {/* Branding - Logo */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-2xl font-extrabold text-[#1A1A1A]">
            Prawitech
          </h1>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-xl font-bold text-[#1A1A1A] text-center mb-8">
          Management System Area
        </h2>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2 font-sans">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[#1A1A1A]/20 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:border-[#0768FB] focus:outline-none focus:ring-1 focus:ring-[#0768FB] font-sans"
              placeholder="name@prawitech.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1A1A1A] mb-2 font-sans">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#1A1A1A]/20 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:border-[#0768FB] focus:outline-none focus:ring-1 focus:ring-[#0768FB] font-sans"
              placeholder="••••••••"
            />
          </div>

          {/* Primary CTA Button */}
          <button
            type="submit"
            className="w-full rounded-[12px] bg-[#0768FB] px-8 py-3 font-semibold text-white hover:opacity-90 transition-opacity font-sans"
          >
            Sign In
          </button>

          {/* Visual Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1A1A1A]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/80 text-[#1A1A1A]/60 font-sans">or</span>
            </div>
          </div>

          {/* Google SSO Button */}
          <button
            type="button"
            className="w-full rounded-[12px] bg-white border border-[#1A1A1A]/20 px-8 py-3 font-semibold text-[#1A1A1A] hover:bg-[#F4F7FB] transition-colors font-sans flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
