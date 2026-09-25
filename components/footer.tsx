import { container, info, section } from "@/lib/settings";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={cn(
        section,
        "border-t border-slate-800 bg-[#020817] py-12 text-white"
      )}
    >
      <div className={cn(container, "px-4 sm:px-6")}>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-[1.1fr_0.8fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
              {info.name}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Building digital experiences that feel premium.
            </h3>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              I design and build modern, responsive websites with React,
              Next.js, and Tailwind to help brands stand out online.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              Get in touch
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <Link
                  href={`mailto:${info.email}`}
                  className="transition hover:text-white"
                >
                  {info.email}
                </Link>
              </p>
              <p>
                <span className="text-slate-400">Phone:</span>{" "}
                <Link
                  href={`tel:${info.phone}`}
                  className="transition hover:text-white"
                >
                  {info.phone}
                </Link>
              </p>
              <p className="leading-7 text-slate-300">
                Available for freelance projects, collaborations, and product
                builds.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} MD Ibrahim. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="transition hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="transition hover:text-white">
              GitHub
            </Link>
            <Link href="#" className="transition hover:text-white">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
