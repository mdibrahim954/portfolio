"use client";
import AboutMe from "@/components/aboutMe";
import ContactUs, { ContactForm } from "@/components/Contact";
import Experiance from "@/components/experiance";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import Skill from "@/components/skill";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Services />
      <Experiance />
      <Testimonials />
      <ContactUs />
    </>
  );
}
