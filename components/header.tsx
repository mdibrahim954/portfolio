"use client";
import { container } from "@/lib/settings";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";
import TopBar from "./module/topBar";

const getInter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Logo() {
  let logoStyle = `text-[#fff] text-2xl font-semibold ${getInter.className}`;
  return <div className={logoStyle}>Naim Bhuiya</div>;
}
export function NavBar() {
  let navitemStyle = `p-2 rounded-full bg-[#000] text-[#FFF] ${getInter.className} `;
  return (
    <nav>
      <ul
        className={`flex py-[10px] px-[4px] gap-2 rounded-full backdrop-blur-md ${"bg-[#60A5FA]"} text-[16px]`}
      >
        <li className={``}>
          <Link className={navitemStyle} href={"#"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={navitemStyle} href={`#`}>
            About
          </Link>
        </li>
        <li>
          <Link className={navitemStyle} href={`#`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link className={navitemStyle} href={`#`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export function CallToAction() {
  let buttonStyle = `p-2 rounded-full bg-[#000] text-[#fff] ${getInter.className}`;
  return <button className={buttonStyle}>Hire Me!</button>;
}
export default function Header({}) {
  return (
    <header className={`w-[100%] p-0 m-0  absolute top-0 left-0`}>
      <TopBar />
      <div
        className={`${container} mx-auto flex justify-between py-4 items-center `}
      >
        <div>
          <Logo />
        </div>
        <div>
          <NavBar />
        </div>
        <div>
          <CallToAction />
        </div>
      </div>
    </header>
  );
}
