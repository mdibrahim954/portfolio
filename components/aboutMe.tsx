import { container, section } from "@/lib/settings";
import {
  faArrowRight,
  faEnvelope,
  faExternalLink,
  faLink,
  faLinkSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

export function AboutImageGellary() {
  return <div></div>;
}
export default function AboutMe() {
  const cardStyle = `w-[calc(50%-20px)] border-[1px] border-[#E2E8F0] p-[10px] rounded-[10px]  block relative shadow-sm`;
  return (
    <div className={`${section}`}>
      <div className={`${container}`}>
        <div className={`flex gap-[20px]`}>
          <div className={`w-[calc(50%-20px)] flex gap-[10px] items-center`}>
            <Image
              className={`w-[calc(33.33%-10px)] h-[400px] object-cover rounded-[10px]`}
              src="/1.webp"
              width={600}
              height={400}
              alt=""
            />
            <div className={`w-[calc(33.33%-20px)]  gap-[10px] flex flex-col`}>
              <Image
                className={`h-[250px] object-cover rounded-[10px]`}
                src="/3.jpg"
                width={600}
                height={400}
                alt=""
              />
              <Image
                className={`h-[250px] object-cover rounded-[10px]`}
                src="/4.webp"
                width={600}
                height={400}
                alt=""
              />
            </div>
            <Image
              className={`w-[calc(33.33%-10px)] h-[400px] object-cover rounded-[10px]`}
              src="/2.jpg"
              width={600}
              height={400}
              alt=""
            />
          </div>
          <div className={`w-[calc(50%-10px)]`}>
            <div>
              <span
                className={`bg-[#000] px-[10px] py-[5px] inline-block rounded-full text-[#fff] ${ibmPlexSans.className}`}
              >
                <FontAwesomeIcon icon={faArrowRight} /> About Me
              </span>
              <h3
                className={`text-3xl font-bold text-[#000] ${getInter.className} mt-[20px]`}
              >
                Hi, This is Naim Bhuiya!
              </h3>
              <p className={`${ibmPlexSans.className} text-[#000] text-md`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                recusandae, beatae rem error sunt eos sit, vel veritatis
                exercitationem accusantium atque, voluptas nulla nobis quasi
                excepturi sed? Commodi, perspiciatis corporis vitae fuga
                molestiae tempore ducimus unde, amet eaque dolores est modi
                autem quas fugiat corrupti assumenda sequi, eligendi provident
                tempora excepturi qui temporibus! Cumque officia et cum facilis.
                Debitis fugiat similique excepturi ipsa expedita fuga iusto
                fugit, ex sunt ratione veritatis temporibus odit eaque ullam
                soluta provident atque? Tenetur, beatae!
              </p>
              <div className={`flex flex-wrap gap-[20px] mt-[10px]`}>
                <Link className={`${cardStyle} `} href="#">
                  <span
                    className={`absolute block w-[20px] h-[20px] bg-[#000] rounded-[5px] text-white text-[14px] top-[5px] right-[5px] flex justify-center items-center`}
                  >
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                  <h4 className={`${getInter.className} font-semibold`}>
                    Card title
                  </h4>
                  <p className={`${ibmPlexSans.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, doloribus!
                  </p>
                </Link>
                <Link className={cardStyle} href="#">
                  <span
                    className={`absolute block w-[20px] h-[20px] bg-[#000] rounded-[5px] text-white text-[14px] top-[5px] right-[5px] flex justify-center items-center`}
                  >
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                  <h4 className={`${getInter.className} font-semibold`}>
                    Card title
                  </h4>
                  <p className={`${ibmPlexSans.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, doloribus!
                  </p>
                </Link>
                <Link className={cardStyle} href="#">
                  <span
                    className={`absolute block w-[20px] h-[20px] bg-[#000] rounded-[5px] text-white text-[14px] top-[5px] right-[5px] flex justify-center items-center`}
                  >
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                  <h4 className={`${getInter.className} font-semibold`}>
                    Card title
                  </h4>
                  <p className={`${ibmPlexSans.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, doloribus!
                  </p>
                </Link>
                <Link className={cardStyle} href="#">
                  <span
                    className={`absolute block w-[20px] h-[20px] bg-[#000] rounded-[5px] text-white text-[14px] top-[5px] right-[5px] flex justify-center items-center`}
                  >
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                  <h4 className={`${getInter.className} font-semibold`}>
                    Card title
                  </h4>
                  <p className={`${ibmPlexSans.className}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, doloribus!
                  </p>
                </Link>
              </div>
              <div className={`mt-[30px]`}>
                <ul className={` flex flex-wrap gap-[20px]`}>
                  <li>
                    <Link
                      href={"#"}
                      className={`p-2 rounded-[8px] mt-[10px] bg-[#000] text-[#fff] ${ibmPlexSans.className} cursor-pointer`}
                    >
                      Call to Action
                    </Link>
                  </li>
                  <li>
                    <Link href={"tel:+8801815936851"}>
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        className={`ml-[10px] text-[#000] ${ibmPlexSans.className}`}
                      >
                        +8801815936851
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"mailto:naimbhuiya@gmail.com"}>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span
                        className={`ml-[10px] text-[#000] ${ibmPlexSans.className}`}
                      >
                        naimbhuiya@gmail.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
