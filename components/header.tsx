"use client";
import { container } from "@/lib/settings";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";
import TopBar from "./module/topBar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "./module/hooks";

const getInter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Logo() {
  let logoStyle = `text-[#000] text-2xl font-semibold ${getInter.className}`;
  return <div className={logoStyle}>{`Md Ibrahim`}</div>;
}
const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Portfolio", href: "#" },
];
export function NavBar() {
  const navItemStyle = `px-4 py-2 rounded-full text-[15px] font-medium text-[#101828] transition-colors hover:bg-[#EDF3FD] hover:text-[#3D7DE0] ${getInter.className}`;

  return (
    <nav className=" flex justify-center md:px-4">
      {/* Desktop pill nav */}
      <ul className="hidden items-center gap-1 rounded-full border border-black/5 bg-white/70 py-1.5  shadow-[0_10px_30px_-10px_rgba(16,24,40,0.15)] backdrop-blur-md md:flex">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={navItemStyle}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile bar */}
      <div className="flex w-full max-w-full md:max-w-[480px] items-center justify-between rounded-full border border-black/5 bg-white/70 px-4 py-2 shadow-[0_10px_30px_-10px_rgba(16,24,40,0.15)] backdrop-blur-md md:hidden">
        <span
          className={`text-[16px] font-bold text-[#101828] ${getInter.className}`}
        >
          <Logo />
        </span>

        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#101828] transition-colors hover:bg-[#EDF3FD]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          {/* "Flying" menu: full-width panel that drops from the top, items fly in staggered */}
          <SheetContent
            side="top"
            className="rounded-b-3xl border-none bg-white/95 pb-10 pt-16 shadow-2xl backdrop-blur-xl"
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
                      className={`block rounded-2xl px-6 py-4 text-center text-[20px] font-semibold text-[#101828] transition-colors hover:bg-[#EDF3FD] hover:text-[#3D7DE0] ${getInter.className}`}
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
  const buttonStyle = `p-2 rounded-full bg-[#000] text-[#fff] ${getInter.className}`;
  return <button className={buttonStyle}>Hire Me!</button>;
}
export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div
        className={`${container} mx-auto md:flex md:items-center md:justify-between py-4`}
      >
        {/* Logo/CTA hide on mobile with CSS — no flash, no JS hook needed */}
        <div className="hidden md:block">
          <Logo />
        </div>

        {/* NavBar already switches pill-nav <-> mobile bar internally via Tailwind */}
        <NavBar />

        <div className="hidden md:block">
          <CallToAction />
        </div>
      </div>
    </header>
  );
}
