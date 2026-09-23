import { container, section } from "@/lib/settings";
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

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#contact"
                className={`${ibmPlexSans.className} inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800`}
              >
                Let&apos;s Talk
              </Link>

              <Link
                href="https://wa.me/+8801815936851"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                WhatsApp
              </Link>

              <Link
                href="mailto:naimbhuiya@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Email
              </Link>
            </div>
          </div>

          <div className="order-1 w-full lg:order-2">
            <div className="grid grid-cols-[0.9fr_1.1fr_0.9fr] gap-3 sm:gap-4">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <Image
                    src="/1.webp"
                    width={600}
                    height={700}
                    alt="Portfolio work sample"
                    className="h-[180px] w-full rounded-[16px] object-cover sm:h-[220px] lg:h-[260px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <Image
                    src="/3.jpg"
                    width={600}
                    height={700}
                    alt="Website project preview"
                    className="h-[140px] w-full rounded-[16px] object-cover sm:h-[180px] lg:h-[220px]"
                  />
                </div>
                <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <Image
                    src="/4.webp"
                    width={600}
                    height={700}
                    alt="Design project preview"
                    className="h-[140px] w-full rounded-[16px] object-cover sm:h-[180px] lg:h-[220px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <Image
                    src="/2.jpg"
                    width={600}
                    height={700}
                    alt="Brand and UI project preview"
                    className="h-[180px] w-full rounded-[16px] object-cover sm:h-[220px] lg:h-[260px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
