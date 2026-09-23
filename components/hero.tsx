"use client";

import { container } from "@/lib/settings";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const tags = ["WordPress", "Shopify", "Next.js", "React", "AI Apps"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8fafc]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),_transparent_38%)]" />

      <div
        className={`${container} relative mx-auto grid items-center gap-10 py-16 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-24`}
      >
        <div className="order-2 w-full max-w-xl lg:order-1">
          <p
            className={`mb-4 text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase ${ibmPlexSans.className}`}
          >
            Web Designer & Developer
          </p>

          <h1
            className={`${inter.className} text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-[4rem]`}
          >
            I Build Fast Websites That Help Businesses Grow.
          </h1>

          <p
            className={`mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg ${ibmPlexSans.className}`}
          >
            I design and develop modern websites, e-commerce stores, and web
            apps focused on performance, usability, and business results.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className={`inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 ${ibmPlexSans.className}`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 ${ibmPlexSans.className}`}
            >
              Let&apos;s Work Together
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-medium tracking-[0.1em] text-slate-600 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-slate-200 blur-3xl" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-4">
              <div className="mb-4 flex items-center gap-2 pl-1">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>

              <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Image
                    className={`w-full h-full object-cover rounded-[10px]`}
                    src="/man.jpg"
                    width={600}
                    height={400}
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Speed
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      98%
                    </p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[98%] rounded-full bg-blue-600" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-900 p-3 text-white">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      Stack
                    </p>
                    <div className="mt-3 space-y-2 text-sm text-slate-200">
                      <div className="flex items-center justify-between">
                        <span>WordPress</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Shopify</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Javascript</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>React</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Node Js</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Next.js</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Express js</span>
                        <span>•</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>PHP</span>
                        <span>•</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  <span>Web Performance</span>
                  <span>Core Web Vitals</span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <div className="h-2 w-full rounded-full bg-slate-200">
                      <div className="h-full w-[86%] rounded-full bg-blue-600" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <div className="h-2 w-full rounded-full bg-slate-200">
                      <div className="h-full w-[92%] rounded-full bg-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
