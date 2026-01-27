"use client";
import { container, gradiantSection } from "@/lib/settings";
import { IBM_Plex_Sans, Inter, Roboto } from "next/font/google";
import { PipeLine } from "./hero";
import { useEffect, useRef, useState } from "react";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

export default function Skill() {
  let heddingRef = useRef<HTMLHeadingElement>(null);
  let [textWidth, setTextWidth] = useState<number>(0);

  useEffect(() => {
    if (heddingRef.current) {
      setTextWidth(heddingRef.current.offsetWidth);
    }
  }, []);
  const cards = [
    {
      title: "Wordpress",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "Shopify",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "jQuery",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "React",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "ExpressJs",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "NextJS",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "Wordpress Theme & Plugin Development",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
    {
      title: "Shopify Lequid",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae!`,
    },
  ];
  const cardStyle = `w-[calc(33%-20px)] p-4 rounded-[5px] border-[0]  bg-[#ffffff12] backdrop-blur-lg`;
  const cardTitle = `${ibmPlexSans.className} font-medium text-lg text-[#fff]`;
  const cardParaGrap = `${ibmPlexSans.className} font-normal text-sm text-[#fff] `;
  return (
    <div className={`${gradiantSection}`}>
      <div className={`block ${container} `}>
        {/* Title */}
        <div className={``}>
          <div className={`flex flex-wrap justify-center`}>
            <h3
              className={`text-center text-[#fff] inline mx-auto text-[30px] font-medium ${getInter.className}`}
              ref={heddingRef}
            >
              Tech Stack
            </h3>
          </div>
          <p
            className={`w-1/2 mx-auto text-center text-[#fff] ${ibmPlexSans.className}`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            nihil praesentium voluptate id reiciendis? Obcaecati, quam quasi?
            Voluptatum, modi ducimus?
          </p>
        </div>
        <div className={`flex flex-wrap gap-[20px] mt-[30px]`}>
          {cards.map((card, index) => (
            <div key={index} className={`${cardStyle}`}>
              <h4 className={cardTitle}>{card.title}</h4>
              <p className={cardParaGrap}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
