"use client";

import { buttonStyle, container, gradiantSection } from "@/lib/settings";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookReader,
  faCommentAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

interface ProjectCard {
  title: string;
  desc: string;
  terms: string[];
}

const cards: ProjectCard[] = [
  {
    title: "Wordpress",
    desc: "A polished storefront and content strategy project built for a business that needed a cleaner online presence.",
    terms: ["E-Commerce", "WordPress"],
  },
  {
    title: "Shopify",
    desc: "Custom storefront enhancements that improved user flow, trust, and conversion performance.",
    terms: ["E-Commerce", "Shopify"],
  },
  {
    title: "jQuery",
    desc: "Interactive front-end improvements and maintenance for a website that needed smoother behavior.",
    terms: ["Frontend", "jQuery"],
  },
  {
    title: "React",
    desc: "Reusable UI elements and application interfaces designed for performance and clarity.",
    terms: ["UI", "React"],
  },
  {
    title: "ExpressJs",
    desc: "Backend integration work focused on API connections, data flow, and user actions.",
    terms: ["API", "ExpressJS"],
  },
  {
    title: "NextJS",
    desc: "A modern web experience designed for speed, SEO, and strong business positioning.",
    terms: ["Marketing", "NextJS"],
  },
  {
    title: "Theme & Plugin Development",
    desc: "Custom WordPress functionality designed around client workflows and content needs.",
    terms: ["CMS", "WordPress"],
  },
  {
    title: "Shopify Liquid",
    desc: "Storefront customization with a cleaner brand experience and stronger product presentation.",
    terms: ["Storefront", "Shopify"],
  },
  {
    title: "Portfolio & Brand UI",
    desc: "A focused visual identity project that balanced business credibility with a modern aesthetic.",
    terms: ["Branding", "UI"],
  },
];

export function Projects() {
  return (
    <section id="project" className={`${gradiantSection} bg-[#fff]`}>
      <div className={`${container} mx-auto`}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`mb-4 text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase ${ibmPlexSans.className}`}
          >
            Portfolio
          </p>
          <h3
            className={`${getInter.className} text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl`}
          >
            Selected Projects
          </h3>
          <p
            className={`${ibmPlexSans.className} mt-4 text-base leading-7 text-slate-600 sm:text-lg`}
          >
            A sample of the digital experiences I build for businesses looking
            for clarity, speed, and results.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group gap-0 overflow-hidden pt-0 rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_38px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <CardHeader className="p-0">
                <Image
                  src="/placeholder.png"
                  className="h-[220px] w-full object-cover sm:h-[240px]"
                  width={600}
                  height={300}
                  alt={card.title}
                />
              </CardHeader>

              <CardContent className="p-5 pb-0">
                <div className="flex flex-wrap gap-2">
                  {card.terms.map((term, idx) => (
                    <span
                      key={idx}
                      className={`${ibmPlexSans.className} rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-700`}
                    >
                      {term}
                    </span>
                  ))}
                </div>

                <CardTitle
                  className={`${ibmPlexSans.className} mt-4 text-xl font-semibold text-slate-900`}
                >
                  {card.title}
                </CardTitle>

                <p
                  className={`${ibmPlexSans.className} mt-3 text-sm leading-6 text-slate-600`}
                >
                  {card.desc}
                </p>

                <CardAction className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="#"
                    className={cn(
                      buttonStyle,
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
                    )}
                  >
                    <FontAwesomeIcon icon={faBookReader} /> Read
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                    aria-label="Project link"
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                  >
                    <FontAwesomeIcon icon={faCommentAlt} /> 100
                  </Link>
                </CardAction>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
