import Aboutme from "@/components/Aboutme";
// import ClientTestimonials from "@/components/ClientTestimonials";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import MyServices from "@/components/MyServices";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <MyServices />
      <Portfolio />
      {/* <ClientTestimonials /> */}
      <Pricing />
      <ContactMe />
      <LetsWorkTogether />
      <Footer />
    </>
  );
}
