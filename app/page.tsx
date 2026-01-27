import AboutMe from "@/components/aboutMe";
import Experiance from "@/components/experiance";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import Skill from "@/components/skill";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Services />
      <Experiance />
    </>
  );
}
