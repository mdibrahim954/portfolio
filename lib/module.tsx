import { useEffect, useState } from "react";
import { cn } from "./utils";

interface PropsSettings {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}
interface HeroLinerEffactProps {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  cW: number; // Calculate Width
  cH: number; // Calculate Height
  borderTWClass: string; // Border Tailwind Class
  propsSettings?: PropsSettings;
}

export function HeroLinerEffact({
  top,
  bottom,
  right,
  left,

  cW = 0,
  cH = 0,
  borderTWClass,
  propsSettings,
}: HeroLinerEffactProps) {
  return (
    <div
      style={{
        width: `${cW}px`,
        height: cH + "px",
        transitionDuration: "700ms",
      }}
      className={`absolute top-[22px]  right-0 ${borderTWClass}  `}
    >
      <div
        style={{
          top: cH! - 10 + "px",
          transitionDuration: "700ms",
        }}
        className={`w-[20px] h-[20px]  absolute -right-[11px]  rounded-full bg-[#60a5fa]`}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full  bg-[#60a5fa] opacity-75 [animation-duration:3000ms] ease-in-out"></span>
      </div>
    </div>
  );
}

export const deviceScreens = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640); // Tailwind's sm breakpoint
      setIsTablet(width > 640 && width <= 1024); // Tailwind's md breakpoint
      setIsDesktop(width > 1024); // Above md breakpoint
    };
    updateDevice(); // initial
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export function loadingEffect() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return loading;
}

// Ping popping effect
interface PingPoppingEffectProps {
  mainClassName?: string;
  popClassName?: string;
}
export function PingPoppingEffect({
  mainClassName,
  popClassName,
}: PingPoppingEffectProps) {
  return (
    <div
      className={cn(
        `w-[70px] h-[70px] rounded-full bg-[#60a5fa] absolute bottom-[40%] right-[100px]`,
        mainClassName
      )}
    >
      <span
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-75 [animation-duration:3000ms] ease-in-out",
          popClassName
        )}
      ></span>
    </div>
  );
}
