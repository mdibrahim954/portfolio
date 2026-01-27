"use client";
import {
  buttonStyle,
  container,
  gradiantSection,
  section,
} from "@/lib/settings";
import { IBM_Plex_Sans, Inter, Roboto } from "next/font/google";
import { PipeLine } from "./hero";
import { useEffect, useRef, useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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

interface cards {
  title: string;
  desc: string;
  terms: string[];
}

export function Projects() {
  const cards: cards[] = [
    {
      title: "Wordpress",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "Wordpress"],
    },
    {
      title: "Shopify",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "Shopify"],
    },
    {
      title: "jQuery",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "jQuery"],
    },
    {
      title: "React",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "React"],
    },
    {
      title: "ExpressJs",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "ExpressJS"],
    },
    {
      title: "NextJS",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "NextJS"],
    },
    {
      title: "Wordpress Theme & Plugin Development",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "Wordpress"],
    },
    {
      title: "Shopify Lequid",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "Shopify"],
    },

    {
      title: "Shopify Lequid",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
      terms: ["E-Commerce", "Shopify"],
    },
  ];
  const cardStyle = `w-[calc(33%-20px)] pb-[10px] pt-[0px] rounded-[10px] border-[1px] border-[#E2E8F0] shadow-sm bg-[#ffffff12] backdrop-blur-lg overflow-hidden`;
  const cardTitle = `${ibmPlexSans.className} font-medium text-lg text-[#000]`;
  const cardParaGrap = `${ibmPlexSans.className} font-normal text-sm text-[#000] `;
  const termsStyle = `${ibmPlexSans.className} text-sm text-[#000] bg-[#f3f4f6] px-2 py-1 rounded-full`;
  return (
    <div className={`${section}`}>
      <div className={`block ${container} `}>
        {/* Title */}
        <div className={``}>
          <div className={`flex flex-wrap justify-center`}>
            <h3
              className={`text-center text-[#000] inline mx-auto text-[30px] font-medium ${getInter.className}`}
            >
              Projects
            </h3>
          </div>
          <p
            className={`w-1/2 mx-auto text-center text-[#000] ${ibmPlexSans.className}`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            nihil praesentium voluptate id reiciendis? Obcaecati, quam quasi?
            Voluptatum, modi ducimus?
          </p>
        </div>
        <div className={`flex flex-wrap gap-[20px] mt-[30px]`}>
          {cards.map((card, index) => (
            <Card key={index} className={cardStyle + ` gap-1`}>
              <CardHeader className={`p-0 `}>
                <Image
                  src={`/placeholder.png`}
                  className={`  w-full h-[300px] object-cover`}
                  width={400}
                  height={200}
                  alt={card.title}
                />
              </CardHeader>
              <CardContent className={`px-[15px]`}>
                <CardTitle className={cardTitle + ` inline gap-2`}>
                  {card.title}{" "}
                  {card.terms.map((term, idx) => (
                    <Link
                      key={idx}
                      className={cn(termsStyle, "mr-[5px] inline-block")}
                      href={"#"}
                    >
                      {term}
                    </Link>
                  ))}
                </CardTitle>
                <p className={cardParaGrap}>{card.desc}</p>
                <CardAction
                  className={` justify-self-start mt-[10px] mb-[5px] flex  gap-1`}
                >
                  <Link
                    href={"#"}
                    className={cn(
                      buttonStyle,
                      "px-[10px] py-[5px] rounded-full"
                    )}
                  >
                    {`Read More`}
                  </Link>

                  <Link
                    href={"#"}
                    className={cn(
                      buttonStyle,
                      "px-[10px] py-[5px] rounded-full bg-gradient-to-br from-[#1e40af] to-[#60a5fa]"
                    )}
                  >
                    {`Live Demo`}
                  </Link>

                  <Link
                    href={"#"}
                    className={cn(
                      buttonStyle,
                      "px-[10px] py-[5px] rounded-full bg-gradient-to-br from-[#1e40af] to-[#60a5fa]"
                    )}
                  >
                    {`Comment`}
                  </Link>
                </CardAction>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
