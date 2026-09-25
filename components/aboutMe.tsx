import { container, info, section } from "@/lib/settings";
import {
  faArrowRight,
  faEnvelope,
  faExternalLink,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import GroupOfAction from "./module/groupOfAction";
import ImageCollage from "./module/imageCollage";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const highlights = [
  {
    title: "Business-first design",
    text: "I build websites that look premium and convert attention into action.",
  },
  {
    title: "Performance focused",
    text: "Fast-loading builds that improve user experience and reduce friction.",
  },
  {
    title: "Modern stacks",
    text: "WordPress, Shopify, Next.js, React, and custom web app experiences.",
  },
  {
    title: "Conversion thinking",
    text: "Every element is designed around clarity, trust, and business outcomes.",
  },
];

export default function AboutMe() {
  return (
    <section className={`${section} `}>
      <div className={`${container} mx-auto`}>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="order-2 w-full lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-white uppercase shadow-sm">
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
              <span className={ibmPlexSans.className}>About Me</span>
            </div>

            <h3
              className={`${getInter.className} text-3xl font-semibold leading-tight tracking-[-0.05em] text-slate-900 sm:text-4xl`}
            >
              Hi, I&apos;m Naim Bhuiya.
            </h3>

            <p
              className={`${ibmPlexSans.className} mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg`}
            >
              I help businesses launch fast, modern, and conversion-focused
              digital experiences. From clean landing pages to custom web apps,
              I focus on performance, clarity, and results that support real
              growth.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-[11px] text-white">
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                  <h4
                    className={`${getInter.className} pr-8 text-lg font-semibold text-slate-900`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`${ibmPlexSans.className} mt-2 text-sm leading-6 text-slate-600`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <GroupOfAction />
          </div>

          <ImageCollage className="order-1 lg:order-2" />
        </div>
      </div>
    </section>
  );
}
