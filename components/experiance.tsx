import { container, section } from "@/lib/settings";
import {
  faArrowRight,
  faCircleDot as regularDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import GroupOfAction from "./module/groupOfAction";
import ImageCollage from "./module/imageCollage";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const experiencePoints = [
  "Product strategy and execution across web experiences",
  "Design systems thinking with measurable user impact",
  "Cross-functional collaboration with engineering and product teams",
  "Clear communication from concept through launch",
  "Experience design grounded in real business outcomes",
  "A process that balances speed, quality, and scalability",
];

export default function Experiance() {
  return (
    <section className={`${section} bg-[#f8fafc]`}>
      <div className={`${container}`}>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1.2fr] lg:gap-12">
          <ImageCollage />

          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#1d4ed8]">
              Experience
            </div>

            <div className="space-y-5">
              <h3
                className={`text-3xl font-bold text-[#0f172a] sm:text-4xl ${getInter.className}`}
              >
                Professional Experience
              </h3>

              <p
                className={`${ibmPlexSans.className} text-base leading-8 text-slate-700`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                recusandae, beatae rem error sunt eos sit, vel veritatis
                exercitationem accusantium atque, voluptas nulla nobis quasi
                excepturi sed? Commodi, perspiciatis corporis vitae fuga
                molestiae tempore ducimus unde, amet eaque dolores est modi
                autem quas fugiat corrupti assumenda sequi.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {experiencePoints.map((item) => (
                <div
                  key={item}
                  className={`${ibmPlexSans.className} flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700 shadow-sm`}
                >
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0f172a] text-[10px] text-white">
                    <FontAwesomeIcon icon={regularDot} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <GroupOfAction />
          </div>
        </div>
      </div>
    </section>
  );
}
