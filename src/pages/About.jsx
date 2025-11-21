import React, { useState } from "react";
import { info } from "../data/data";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import AboutCount from "../components/AboutCount";
import OurService from "../components/OurService";
//https://businessphotos.ai/funnel?p=7  ( to change is picture)

const About = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % info.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + info.length) % info.length);

  const { image, title, content, projects } = info[index];

  return (
    <div>
      <Banner
        pageTitle="Your Trusted Real Estate Partners"
        subtitle="ENNY ESTATE AGENT AND REALTORS - Turning your property dreams into reality with dedicated expertise"
      />
      {/* About */}
      <AboutCount />
      {/* =====Our Service======= */}
      <div className="bg-gray-100 p-10">
        <div className="max-w-6xl mx-auto mb-10">
        <h1 className="animate__animated animate__bounceIn text-2xl md:text-4xl font-bold text-gray-800 mb-6 font-out text-center md:text-start my-4">
          SERVICES
        </h1>
        <OurService />
      </div> 
      </div>
      {/* ==========footer================ */}
      <Footer />
    </div>
  );
};

export default About;
