"use client";
import { container } from "@/lib/settings";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

export const PipeLine = ({ width }: { width: number }) => {
  return (
    <div
      style={{
        width: width + "px",
      }}
      className={`block h-[3px] bg-[#60a5fa] mt-[10px] relative mx-auto`}
    >
      <div
        className={`absolute -left-[20px] w-[20px] h-[20px] customGradiantStyle -top-[10px] rounded-full`}
      ></div>
      <div
        className={`absolute -right-[20px] w-[20px] h-[20px] customGradiantStyle -top-[10px] rounded-full`}
      ></div>
    </div>
  );
};

export function BasicInfo() {
  let boxRef = useRef<HTMLDivElement>(null);
  let titleRef = useRef<HTMLHeadingElement>(null);
  let [boxTotalWidth, setBoxTotalWidth] = useState<Number>(0);
  let [boxHeigth, setBoxHeigth] = useState<Number>(0);
  let [titleWidth, setTitleWidth] = useState<Number>(0);
  useEffect(() => {
    const updateWidth = () => {
      if (boxRef.current) {
        setBoxTotalWidth(boxRef.current.offsetWidth);
        setBoxHeigth(boxRef.current.offsetHeight);
      }

      if (titleRef.current) {
        setTitleWidth(titleRef.current.offsetWidth);
      }
    };

    updateWidth(); // initial
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  let bubbleBox: number =
    typeof boxTotalWidth === "number" &&
    typeof titleWidth === "number" &&
    titleWidth &&
    boxTotalWidth
      ? boxTotalWidth - titleWidth - 10
      : 120;
  let fBoxHeigth: number =
    typeof boxHeigth === "number" ? boxHeigth * (1 - 0.4) : 120;
  return (
    <div className={`relative`} ref={boxRef}>
      <h4
        className={` text-3xl text-[#F8FAFC] font-medium inline ${getInter.className}`}
        ref={titleRef}
      >
        Naim Bhuiya
      </h4>
      <p className={`${ibmPlexSans.className} text-[#F8FAFC]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        cumque ut quos explicabo magni consequuntur recusandae, repellat
        cupiditate architecto error unde nihil porro pariatur qui quidem
        dignissimos sunt sint obcaecati est eligendi nostrum? Dolorem
        praesentium consequuntur at illum enim deserunt!
      </p>
      <button
        className={`p-2 rounded-[8px] mt-[10px] bg-[#000] text-[#fff] ${ibmPlexSans.className} cursor-pointer`}
      >
        Call to Action
      </button>
      <div
        style={{
          width: `${bubbleBox}px`,
          height: fBoxHeigth + "px",
        }}
        className={`absolute top-[22px] right-0 border-t-[2px] border-e-[2px] border-[#60a5fa] rounded-tr-lg`}
      ></div>
      <div
        style={{
          top: fBoxHeigth + 22 + "px",
        }}
        className={`w-[30px] h-[30px]  absolute -right-[15px] rounded-full bg-[#60a5fa]`}
      ></div>
    </div>
  );
}
export function MoreInfo() {
  return (
    <div className={`relative`}>
      <h4
        className={`text-3xl text-[#F8FAFC] font-medium inline ${getInter.className}`}
      >
        More Info
      </h4>
      <p className={`${ibmPlexSans.className} text-[#F8FAFC]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        cumque ut quos explicabo magni consequuntur recusandae, repellat
        cupiditate architecto error unde nihil porro pariatur qui quidem
        dignissimos sunt sint obcaecati est eligendi nostrum? Dolorem
        praesentium consequuntur at illum enim deserunt!
      </p>
      <PipeLine />
      <div className={`flex mt-[10px]`}>
        <div className={`w-1/2`}>
          <h4
            className={`text-2xl font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            100+
          </h4>
          <p
            className={`text-sm font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            Job Complate
          </p>
        </div>
        <div className={`w-1/2 `}>
          <h4
            className={`text-2xl font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            99%
          </h4>
          <p
            className={`text-sm font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            Success Rate
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className={`customGradiantStyle overflow-hidden`}>
      <div className={container + " " + "pt-[150px] mx-auto relative"}>
        <div
          className={`w-[100px] h-[100px] rounded-full bg-[#60a5fa] absolute top-[100px] left-[100px]`}
        ></div>
        <div
          className={`w-[70px] h-[70px] rounded-full bg-[#60a5fa] absolute bottom-[45%] right-[70%]`}
        ></div>
        <div
          className={`w-[70px] h-[70px] rounded-full bg-[#60a5fa] absolute top-[17%] right-[30%]`}
        ></div>
        <div
          className={`w-[100px] h-[100px] rounded-full bg-[#60a5fa] absolute bottom-[40%] right-[100px]`}
        ></div>

        <h3
          className={`text-[120px] text-center font-bold iuxtxt ${getInter.className}`}
        >
          Web Developer
        </h3>
        <div className={`flex gap-4`}>
          <div className={`w-2/7 flex items-center `}>
            <BasicInfo />
          </div>
          <div className={`w-3/7 flex justify-center relative`}>
            <Image
              className={`-mt-[180px] w-[80%] z-3`}
              src={`/man.png`}
              width={800}
              height={800}
              alt=""
            />
          </div>
          <div className={`w-2/7 flex items-center`}>
            <MoreInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
