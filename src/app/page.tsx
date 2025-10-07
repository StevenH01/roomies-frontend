"use client";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Benefits from "@/components/Benefits";
import BigPicture from "@/components/BigPicture";
import Specs from "@/components/Specs";
import Testimonial from "@/components/Testimonial";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TrustedBy />
        <Benefits />
        <BigPicture />
        <Specs />
        <Testimonial />
        <Steps />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
