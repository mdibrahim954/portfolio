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
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio dicta porro eligendi asperiores totam praesentium tempora libero quam vitae! `,
    },
  ];
  const cardStyle = `w-[calc(33%-20px)] p-4 rounded-[15px] border-[0]  bg-[#ffffff12] backdrop-blur-lg`;
  const cardTitle = `${ibmPlexSans.className} font-medium text-lg text-[#fff]`;
  const cardParaGrap = `${ibmPlexSans.className} font-normal text-sm text-[#fff] `;
  const [cardEffactW, setCardEffactW] = useState<number>(0);
  const [cardEffactH, setCardEffactH] = useState<number>(0);
  const effectedConatiner = useRef<HTMLDivElement>(null);

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
          {cards.map(
            (card, index) => (
              useEffect(() => {
                const update = () => {
                  if (effectedConatiner.current) {
                    setCardEffactW(effectedConatiner.current.offsetWidth);
                    setCardEffactH(effectedConatiner.current.offsetHeight);
                  }
                };

                update(); // initial
                window.addEventListener("resize", update);

                return () => window.removeEventListener("resize", update);
              }, []),
              (
                <div
                  ref={effectedConatiner}
                  key={index}
                  className={`${cardStyle}`}
                >
                  <div>
                    <div
                      className={`absolute -top-[10px] -left-[11px] border-t-[2px] border-l-[2px] border-solid border-[#60a5fa] rounded-ss-[20px] z-11`}
                      style={{
                        width: cardEffactW / 2 + 2 + "px",
                        height: cardEffactH / 3 + "px",
                      }}
                    ></div>
                    <div
                      style={{
                        top: -17.5 + "px",
                        left: cardEffactW / 2 - 7.5 + "px",
                      }}
                      className={`w-[15px] h-[15px]  absolute  rounded-full bg-[#60a5fa]`}
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-75"></span>
                    </div>
                    <div
                      className={`absolute -top-[10px] -right-[11px] border-t-[2px] border-r-[2px] border-solid border-[#60a5fa] rounded-se-[20px] z-11`}
                      style={{
                        width: cardEffactW / 2 + 2 + "px",
                        height: cardEffactH / 3 + "px",
                      }}
                    ></div>
                  </div>

                  <h4 className={cardTitle}>{card.title}</h4>
                  <p className={cardParaGrap}>{card.desc}</p>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}
