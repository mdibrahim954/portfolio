"use client";
import {
  buttonStyle,
  container,
  gradiantSection,
  section,
} from "@/lib/settings";
import { IBM_Plex_Sans, Inter, Roboto } from "next/font/google";
import { PipeLine } from "./hero";
import { JSX, useEffect, useRef, useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

interface servicesIterface {
  icon: string | JSX.Element;
  title: string;
  desc: string;
}

export const services: servicesIterface[] = [
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
  const cardStyle = `w-[calc(25%-20px)] p-[10px] rounded-[15px] bg-[#ffffff12] backdrop-blur-lg`;
  const cardTitle = `${ibmPlexSans.className} font-medium text-lg text-[#fff]`;
  const cardParaGrap = `${ibmPlexSans.className} font-normal text-sm text-[#fff] text-center `;

  return (
    <div className={`${gradiantSection}`}>
      <div className={`block ${container} `}>
        {/* Title */}
        <div className={``}>
          <div className={`flex flex-wrap justify-center`}>
            <h3
              className={`text-center text-[#fff] inline mx-auto text-[30px] font-medium ${getInter.className}`}
            >
              {`Web Development Services Offered`}
            </h3>
          </div>
          <p
            className={`w-1/2 mx-auto text-center text-[#fff] ${ibmPlexSans.className}`}
          >
            {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            nihil praesentium voluptate id reiciendis? Obcaecati, quam quasi?
            Voluptatum, modi ducimus?`}
          </p>
        </div>
        <div className={`flex flex-wrap justify-center gap-[20px] mt-[30px]`}>
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                cardStyle,
                ` gap-1 border-[0px] p-0 px-[10px] py-[10px]`
              )}
            >
              <CardHeader className={`p-0 `}>
                {typeof service.icon === "string" ? (
                  <p className={`text-center text-[30px]`}>{service.icon}</p>
                ) : (
                  service.icon
                )}
              </CardHeader>
              <CardContent className={`px-[0px]`}>
                <CardTitle className={cardTitle + ` text-center gap-2`}>
                  {service.title}
                </CardTitle>
                <p className={cardParaGrap}>{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className={`mt-[40px] text-center`}>
          <Link
            className={cn(
              buttonStyle,
              " mx-auto inline-block px-[20px] py-[10px] rounded-full"
            )}
            href={"#contact"}
          >{`Support anytime — 24 hours a day, 7 days a week`}</Link>
        </div>
      </div>
    </div>
  );
}
