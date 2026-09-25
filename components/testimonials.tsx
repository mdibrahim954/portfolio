"use client";

import { buttonStyle, container, gradiantSection } from "@/lib/settings";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    text: "The team transformed our rough ideas into a polished product experience. Every detail felt thoughtful, and our users noticed the difference immediately.",
    initials: "SJ",
    accent: "from-[#2563eb] to-[#60a5fa]",
  },
  {
    name: "Daniel Lee",
    role: "Startup Founder",
    text: "Fast, strategic, and incredibly clear. They understood our product goals and delivered a cleaner conversion flow that increased engagement from day one.",
    initials: "DL",
    accent: "from-[#0f172a] to-[#334155]",
  },
  {
    name: "Amina Rahman",
    role: "Marketing Lead",
    text: "The work looked premium, felt modern, and matched our brand perfectly. Communication was smooth and the execution was dependable throughout.",
    initials: "AR",
    accent: "from-[#16a34a] to-[#4ade80]",
  },
  {
    name: "Marcus Hill",
    role: "E-commerce Manager",
    text: "They built a conversion-focused experience that was both beautiful and functional. Our customers had a much easier time navigating the store.",
    initials: "MH",
    accent: "from-[#f59e0b] to-[#fbbf24]",
  },
  {
    name: "Priya Nandi",
    role: "Brand Strategist",
    text: "Everything from layout to interactions felt intentional. The result was a more confident brand presence online and better customer trust.",
    initials: "PN",
    accent: "from-[#ec4899] to-[#f472b6]",
  },
  {
    name: "James Carter",
    role: "Operations Director",
    text: "This was the first time a design partner truly understood how to balance business goals with user experience. The end result felt premium and practical.",
    initials: "JC",
    accent: "from-[#7c3aed] to-[#a78bfa]",
  },
];

export function Testimonials() {
  return (
    <section
      className={`${gradiantSection} bg-[radial-gradient(circle_at_top,#ffffff_0%,#f8fafc_55%,#eef2ff_100%)]`}
    >
      <div className={`block ${container}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
            Reviews
          </span>
          <h3
            className={`mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl ${getInter.className}`}
          >
            Reviews & Testimonials
          </h3>
          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base ${ibmPlexSans.className}`}
          >
            Partnering with clients who value clarity, quality, and a polished
            digital experience. Here’s what they have to say about the process
            and the results.
          </p>
        </div>

        <Carousel className="mt-10 sm:mt-12">
          <CarouselContent className="-ml-3 md:-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-3 md:basis-1/2 md:pl-4 xl:basis-1/3"
              >
                <Card className="group h-full rounded-[24px] border border-slate-200 bg-white/85 p-0 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]">
                  <CardHeader className="px-5 pt-5 pb-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-md",
                            item.accent
                          )}
                        >
                          {item.initials}
                        </div>
                        <div>
                          <CardTitle
                            className={`${ibmPlexSans.className} text-base font-semibold text-slate-900`}
                          >
                            {item.name}
                          </CardTitle>
                          <p className="text-xs text-slate-500">{item.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[#fbbf24]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FontAwesomeIcon
                            key={starIndex}
                            icon={faStar}
                            className="text-[12px]"
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-5 pb-5 pt-0">
                    <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#2563eb] to-[#93c5fd]" />
                    <p
                      className={`${ibmPlexSans.className} text-sm leading-7 text-slate-600`}
                    >
                      “{item.text}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50" />
            <CarouselNext className="static translate-y-0 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50" />
          </div>
        </Carousel>

        <div className="mt-10 text-center">
          <Link
            className={cn(
              buttonStyle,
              "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            )}
            href="#contact"
          >
            Support anytime — 24 hours a day, 7 days a week
          </Link>
        </div>
      </div>
    </section>
  );
}
