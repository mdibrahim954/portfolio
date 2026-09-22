import { IBM_Plex_Sans, Inter } from "next/font/google";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});
export const section = `py-[100px]`;
export const gradiantSection = `customGradiantStyle ${section}`;
export const container = `w-3/4 mx-auto `;
export const gradiantContainer = `${container} customGradiantStyle`;
export const buttonStyle = `${ibmPlexSans.className} px-[20px] py-[10px] rounded-[5px] bg-[#000] text-[#fff] hover:bg-[#333] transition-all duration-300 ease-in-out`;
export const personalInformation = {
  phone: "123-456-7890",
  email: "naimbhuiya954@gmail.com",
  bEmail: "naimbhuiya@devshark.net",
  location: "Dhaka, Bangladesh",
};

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}