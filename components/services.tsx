"use client";

import { buttonStyle, container, gradiantSection } from "@/lib/settings";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export const services: ServiceItem[] = [
  {
    icon: "💻",
    title: "Website Development",
    desc: "Custom websites built with modern tech (React, Next.js, WordPress, etc.)",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Mobile-friendly layouts that look great on all devices.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Speed up slow websites for better user experience and SEO.",
  },
  {
    icon: "🎨",
    title: "UI Implementation",
    desc: "Turn Figma / XD designs into clean, working code.",
  },
  {
    icon: "🛒",
    title: "E-commerce Development",
    desc: "Online stores with payment setup, product pages, and checkout flow.",
  },
  {
    icon: "🧩",
    title: "Frontend Development",
    desc: "React / Next.js interfaces with smooth interactions.",
  },
  {
    icon: "🔧",
    title: "Backend Integration",
    desc: "APIs, databases, auth systems, and server logic.",
  },
  {
    icon: "🔍",
    title: "SEO Basics Setup",
    desc: "On-page SEO, meta tags, structured content.",
  },
  {
    icon: "🛠",
    title: "Website Maintenance",
    desc: "Bug fixes, updates, and long-term support.",
  },
  {
    icon: "🚀",
    title: "Deployment & Hosting",
    desc: "Domain setup, hosting, and live deployment.",
  },
];

export function Services() {
  return (
    <section className={`${gradiantSection} bg-[#f8fafc]`}>
      <div className={`${container} mx-auto`}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`mb-4 text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase ${ibmPlexSans.className}`}
          >
            Services
          </p>
          <h3
            className={`${getInter.className} text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl`}
          >
            Web Development Services Offered
          </h3>
          <p
            className={`${ibmPlexSans.className} mt-4 text-base leading-7 text-slate-600 sm:text-lg`}
          >
            Practical solutions for businesses that need reliable, modern
            digital experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "group border border-slate-200 bg-white p-0 shadow-[0_12px_32px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]",
                "rounded-[22px]"
              )}
            >
              <CardHeader className="p-5 pb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl shadow-sm">
                  {service.icon}
                </div>
              </CardHeader>

              <CardContent className="px-5 pb-5">
                <CardTitle
                  className={`${ibmPlexSans.className} text-lg font-semibold text-slate-900`}
                >
                  {service.title}
                </CardTitle>
                <p
                  className={`${ibmPlexSans.className} mt-3 text-sm leading-6 text-slate-600`}
                >
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contact"
            className={cn(
              buttonStyle,
              "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5"
            )}
          >
            Support anytime — 24 hours a day, 7 days a week
          </Link>
        </div>
      </div>
    </section>
  );
}
