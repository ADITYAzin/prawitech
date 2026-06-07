"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const services = [
  "Graphic Design & Identity",
  "Web Development",
  "AI Automation",
];

const objectives = [
  "Start a New Project",
  "Upgrade an Existing System",
  "Inquire About Services",
  "Other",
];

const budgets = [
  "Less than IDR 10M",
  "IDR 10M – 50M",
  "IDR 50M – 150M",
  "More than IDR 150M",
];

const timelines = [
  "Less than 1 Month",
  "1 – 3 Months",
  "More than 3 Months / Flexible",
];

const inputClass =
  "w-full border-0 border-b border-[#1A1A1A]/15 bg-transparent py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/35 transition-colors duration-200 focus:border-[#0768FB] focus:outline-none focus:ring-0";

const selectClass =
  "w-full cursor-pointer appearance-none border-0 border-b border-[#1A1A1A]/15 bg-transparent py-3 pr-8 text-sm text-[#1A1A1A] transition-colors duration-200 focus:border-[#0768FB] focus:outline-none focus:ring-0";

const labelClass = "mb-1 block text-xs font-medium uppercase tracking-wider text-[#1A1A1A]/45";

const chevronClass =
  "pointer-events-none absolute right-0 top-[calc(50%+0.375rem)] h-4 w-4 -translate-y-1/2 text-[#1A1A1A]/35";

export default function ContactForm({ defaultService }) {
  const [submitted, setSubmitted] = useState(false);
  const initialService =
    defaultService && services.includes(defaultService) ? defaultService : "";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="max-w-xl rounded-2xl border border-[#1A1A1A]/8 bg-white px-8 py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-[#1A1A1A]">
              Thank you for reaching out.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">
              Our team will review your inquiry and respond within one business
              day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="max-w-xl">
          <h2 className="font-heading text-2xl font-extrabold text-[#1A1A1A] sm:text-3xl">
            Tell Us About Your Project.
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-8">
            <div className="relative">
              <label htmlFor="objective" className={labelClass}>
                I am looking to...
              </label>
              <select id="objective" name="objective" required className={selectClass} defaultValue="">
                <option value="" disabled>
                  Select your objective
                </option>
                {objectives.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className={chevronClass} />
            </div>

            <div className="relative">
              <label htmlFor="service" className={labelClass}>
                Service Type
              </label>
              <select
                id="service"
                name="service"
                required
                className={selectClass}
                defaultValue={initialService}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className={chevronClass} />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company / Organization
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or institution name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="title" className={labelClass}>
                  Professional Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Your role or position"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="relative">
                <label htmlFor="budget" className={labelClass}>
                  Estimated Project Budget
                </label>
                <select id="budget" name="budget" required className={selectClass} defaultValue="">
                  <option value="" disabled>
                    Select budget range
                  </option>
                  {budgets.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className={chevronClass} />
              </div>
              <div className="relative">
                <label htmlFor="timeline" className={labelClass}>
                  Target Completion
                </label>
                <select id="timeline" name="timeline" required className={selectClass} defaultValue="">
                  <option value="" disabled>
                    Select timeframe
                  </option>
                  {timelines.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className={chevronClass} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Your Vision
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Briefly describe your vision or the core challenges you aim to solve."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[12px] bg-[#0768FB] px-8 py-3.5 text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              Submit Inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

