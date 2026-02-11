"use client";
import {
  deviceScreens,
  HeroLinerEffact,
  PingPoppingEffect,
} from "@/lib/module";
import { container } from "@/lib/settings";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import { useState, useRef, useEffect, use, JSX } from "react";
import { set } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const heroData = {
  name: "Md Ibrahim",
  nickname: "Naim Bhuiya",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque ut quos explicabo magni consequuntur recusandae, repellat cupiditate architecto error unde nihil porro pariatur qui quidem dignissimos sunt sint obcaecati est eligendi nostrum? Dolorem praesentium consequuntur at illum enim deserunt!",
  moreInfo: {
    title: "More Info",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque ut quos explicabo magni consequuntur recusandae, repellat cupiditate architecto error unde nihil porro pariatur qui quidem dignissimos sunt sint obcaecati est eligendi nostrum? Dolorem praesentium consequuntur at illum enim deserunt!",
  },
  callToAction: "Call to Action",
  stats: [
    { label: "Job Complete", value: "100+" },
    { label: "Success Rate", value: "99%" },
  ],
  skill: [
    { name: "Web Desing", percentage: 90 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 70 },
    { name: "TypeScript", percentage: 65 },
    { name: "Next.js", percentage: 60 },
    { name: "Tailwind CSS", percentage: 55 },
  ],
};

export const PipeLine = ({ width }: { width?: number }) => {
  return (
    <div
      style={{
        width: width + "px",
      }}
      className={`block h-[3px] bg-[#60a5fa] mt-[10px] relative mx-auto`}
    >
      <div
        className={`absolute -left-[20px] w-[20px] h-[20px] customGradiantStyle -top-[10px] rounded-full`}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-75 [animation-duration:3000ms] ease-in-out"></span>
      </div>
      <div
        className={`absolute -right-[20px] w-[20px] h-[20px] customGradiantStyle -top-[10px] rounded-full`}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-75 [animation-duration:3000ms] ease-in-out"></span>
      </div>
    </div>
  );
};

export function BasicInfo() {
  let boxRef = useRef<HTMLDivElement>(null);
  let titleRef = useRef<HTMLHeadingElement>(null);
  let [boxTotalWidth, setBoxTotalWidth] = useState<number>(0);
  let [boxHeigth, setBoxHeigth] = useState<number>(0);
  let [titleWidth, setTitleWidth] = useState<number>(0);
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
    <div className={`relative pr-[10px]`} ref={boxRef}>
      <Tabs defaultValue="ctr-name" className="w-[400px]">
        <TabsList
          ref={titleRef}
          className="bg-transparent border-b-2 border-l-2 border-[#60a5fa]  w-max mb-[5px]"
        >
          <TabsTrigger
            className={`backdrop-blur-lg p-[5px] text-white hover:text-white/90 cursor-pointer`}
            value="ctr-name"
          >
            Certificate Name
          </TabsTrigger>
          <TabsTrigger
            className={`backdrop-blur-lg p-[5px] text-white hover:text-white/90 cursor-pointer`}
            value="nickname"
          >
            Nickname
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ctr-name">
          <h4
            className={` text-3xl text-[#F8FAFC] font-medium inline ${getInter.className}`}
          >
            {heroData.name}
          </h4>
        </TabsContent>
        <TabsContent value="nickname">
          <h4
            className={` text-3xl text-[#F8FAFC] font-medium inline ${getInter.className}`}
          >
            {heroData.nickname}
          </h4>
        </TabsContent>
      </Tabs>

      <p className={`${ibmPlexSans.className} text-[#F8FAFC]`}>
        {heroData.description}
      </p>
      <button
        className={`p-2 rounded-[8px] mt-[10px] bg-[#000] text-[#fff] ${ibmPlexSans.className} cursor-pointer`}
      >
        {heroData.callToAction}
      </button>

      <HeroLinerEffact
        cW={boxTotalWidth - titleWidth}
        cH={boxHeigth / 2}
        borderTWClass={`border-t-[2px] border-e-[2px] border-[#60a5fa] rounded-tr-lg rounded-tl-lg`}
      />
    </div>
  );
}
export function MoreInfo() {
  return (
    <div className={`relative`}>
      <h4
        className={`text-3xl text-[#F8FAFC] font-medium inline ${getInter.className}`}
      >
        {heroData.moreInfo.title}
      </h4>
      <p className={`${ibmPlexSans.className} text-[#F8FAFC]`}>
        {heroData.moreInfo.description}
      </p>
      <PipeLine />
      <div className={`flex mt-[10px]`}>
        <div className={`w-1/2`}>
          <h4
            className={`text-2xl font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            {heroData.stats[0].value}
          </h4>
          <p
            className={`text-sm font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            {heroData.stats[0].label}
          </p>
        </div>
        <div className={`w-1/2 `}>
          <h4
            className={`text-2xl font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            {heroData.stats[1].value}
          </h4>
          <p
            className={`text-sm font-medium ${getInter.className} text-[#F8FAFC]`}
          >
            {heroData.stats[1].label}
          </p>
        </div>
      </div>
    </div>
  );
}

const skills = heroData.skill;

export function DesktopComponents() {
  const [changeTitle, setChangeTitle] = useState<string>("Web Developer");
  let count = 0;
  setTimeout(() => {
    count++;
    let itemIndex = skills.length !== count ? count : 0;
    setChangeTitle(skills[itemIndex].name);
    console.log(skills[itemIndex].name);
  }, 2000);
  return (
    <div className={`customGradiantStyle overflow-hidden`}>
      <div className={container + " " + "pt-[150px] mx-auto relative"}>
        <PingPoppingEffect />

        <h3
          className={`text-[120px] text-center font-bold iuxtxt ${getInter.className}`}
        >
          {changeTitle}
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
export default function Hero() {
  const [changeTitle, setChangeTitle] = useState("Web Developer");
  const [count, setCount] = useState(0);

  // 🔹 Change title every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const nextIndex = prev + 1 === skills.length ? 0 : prev + 1;
        setChangeTitle(skills[nextIndex].name);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Typing effect
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    setDisplayText("");

    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + changeTitle.charAt(currentIndex - 1));
      currentIndex++;

      if (currentIndex >= changeTitle.length) {
        clearInterval(typingInterval);
      }
    }, 80); // typing speed

    return () => clearInterval(typingInterval);
  }, [changeTitle]);

  return (
    <div className="customGradiantStyle overflow-hidden">
      <div className={`${container} pt-[150px] mx-auto relative`}>
        <PingPoppingEffect mainClassName="w-[50px] h-[50px] bottom-[50%] right-[5%]" />
        <PingPoppingEffect mainClassName="w-[50px] h-[50px] top-[15%] right-[25%]" />
        <PingPoppingEffect mainClassName="w-[50px] h-[50px] top-[15%] left-[5%]" />
        <PingPoppingEffect mainClassName="w-[50px] h-[50px] bottom-[50%] left-[25%]" />

        {/* 🔹 Typed Heading */}
        <h3
          className={`text-[120px] text-center font-bold iuxtxt ${getInter.className} w-full`}
        >
          {displayText}
          <span className="animate-pulse">/</span>
        </h3>

        <div className="flex gap-4">
          <div className="w-2/7 flex items-center">
            <BasicInfo />
          </div>

          <div className="w-3/7 flex justify-center relative">
            <Image
              className="-mt-[180px] w-[80%] z-3"
              src="/man.png"
              width={800}
              height={800}
              alt=""
            />
          </div>

          <div className="w-2/7 flex items-center">
            <MoreInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
