"use client";

import { container } from "@/lib/settings";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const getInter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Logo() {
  return (
    <div
      className={`text-2xl font-bold tracking-tight text-slate-900 ${getInter.className}`}
    >
      Md Ibrahim
    </div>
  );
}

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const navItemStyle = `px-4 py-2 rounded-full text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${getInter.className}`;

  return (
    <nav className="flex w-full md:w-auto justify-center md:px-4">
      <ul className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 py-1.5 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.18)] backdrop-blur-xl md:flex">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={navItemStyle}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex w-full items-center justify-between rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.16)] backdrop-blur-xl md:hidden">
        <span
          className={`text-base font-bold text-slate-900 ${getInter.className}`}
        >
          <Logo />
        </span>

        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition-colors hover:bg-slate-100"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="rounded-b-3xl border-none bg-white/95 pb-8 pt-16 shadow-2xl backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-2">
              {navItems.map((item, i) => (
                <li
                  key={item.label}
                  className="w-full animate-in fade-in slide-in-from-top-8 duration-500"
                  style={{
                    animationDelay: `${i * 90}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={`block rounded-2xl px-6 py-4 text-center text-lg font-semibold text-slate-800 transition-all hover:bg-slate-100 hover:text-blue-600 ${getInter.className}`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export function CallToAction() {
  return (
    <button
      className={`rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 ${getInter.className}`}
    >
      Hire Me!
    </button>
  );
}

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div
        className={`${container} mx-auto flex items-center justify-between py-4`}
      >
        <div className="hidden md:block">
          <Logo />
        </div>

        <NavBar />

        <div className="hidden md:block">
          <CallToAction />
        </div>
      </div>
    </header>
  );
}
