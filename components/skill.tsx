"use client";

import { container, gradiantSection } from "@/lib/settings";
import { IBM_Plex_Sans, Inter } from "next/font/google";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const cards = [
  {
    title: "WordPress",
    desc: "Custom theme and plugin development for flexible, scalable business websites.",
  },
  {
    title: "Shopify",
    desc: "Store builds and custom storefront improvements focused on conversion and speed.",
  },
  {
    title: "jQuery",
    desc: "Legacy front-end enhancements and interactive improvements for existing sites.",
  },
  {
    title: "React",
    desc: "Modern UI and reusable components built for fast, engaging user experiences.",
  },
  {
    title: "Express.js",
    desc: "API and backend logic for data handling, integrations, and custom systems.",
  },
  {
    title: "Next.js",
    desc: "High-performance marketing sites and web apps with clean architecture.",
  },
  {
    title: "Theme & Plugin Development",
    desc: "Tailored CMS solutions with custom features, layouts, and business logic.",
  },
  {
    title: "Shopify Liquid",
    desc: "Storefront customizations with polished UX and better customer journeys.",
  },
];

export default function Skill() {
  return (
    <section className={`${gradiantSection} bg-[#f8fafc]`}>
      <div className={`${container} mx-auto`}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`mb-4 text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase ${ibmPlexSans.className}`}
          >
            Stack
          </p>
          <h3
            className={`${getInter.className} text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl`}
          >
            Tech Stack
          </h3>
          <p
            className={`${ibmPlexSans.className} mt-4 text-base leading-7 text-slate-600 sm:text-lg`}
          >
            Tools and platforms I use to build clean, scalable, and
            conversion-focused digital products.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              {/* <div className="absolute left-4 top-0 h-8 w-8 rounded-b-full border-l border-r border-b border-blue-200 bg-blue-50" /> */}
              <div className="absolute right-4 top-0 h-8 w-8 rounded-b-full border-l border-r border-b border-blue-200 bg-blue-50" />

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-lg font-semibold text-blue-700 shadow-sm">
                {card.title.charAt(0)}
              </div>

              <h4
                className={`${ibmPlexSans.className} text-lg font-semibold text-slate-900`}
              >
                {card.title}
              </h4>
              <p
                className={`${ibmPlexSans.className} mt-3 text-sm leading-6 text-slate-600`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
