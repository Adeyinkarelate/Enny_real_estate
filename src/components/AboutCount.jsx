import React, { useState, useEffect } from "react";

const AboutCount = () => {
  const [counters, setCounters] = useState({
    agents: 0,
    listings: 0,
    areas: 0,
  });

  const targetValues = {
    agents: 6,
    listings: 15,
    areas: 86,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;

        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        setCounters({
          agents: Math.floor(targetValues.agents * easeOut),
          listings: Math.floor(targetValues.listings * easeOut),
          areas: Math.floor(targetValues.areas * easeOut),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          // Ensure final values are exact
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    // Start animation after a brief delay
    const timeout = setTimeout(animateCounters, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen  py-12 px-4 my-10">
      <div className="max-w-6xl mx-auto ">
        {/* Header Section */}
        <div className="text-center md:text-start mb-16">
          <h1 className="animate__animated animate__bounceIn text-2xl md:text-4xl font-bold text-gray-800 mb-6 font-out">
            ABOUT US
          </h1>

          <p className="text-md tracking-wide  leading-8 text-justify p-4 md:p-0">
            <b>ENNY ESTATE AGENT AND REALTORS</b> is a leading real estate and property
            platform in Nigeria, offering comprehensive listings for property
            sales, rentals, and leases. We provide an easy and reliable way for
            Nigerian property seekers to discover detailed information about
            homes, houses, land, shops, office spaces, and other commercial
            properties across the country. <br />
            As one of Nigeria’s top-performing property websites, ENNY ESTATE
            AGENT AND REALTORS hosts a growing network of professional
            advertisers—including estate agents, letting and rental agencies,
            new home developers, and individual property owners. These
            professionals list properties nationwide, providing thousands of
            options for property hunters looking for convenience, quality, and
            credibility.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto p-4">
          {/* Agents & Developers */}
          <div className=" my-4 bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-blue-600 mb-4">
              {counters.agents.toLocaleString()}
            </div>
            <div className="text-xl font-semibold text-gray-700 uppercase tracking-wide font-out">
              AGENTS & DEVELOPERS
            </div>
          </div>

          {/* Property Listings */}
          <div className="my-4 bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-green-600 mb-4">
              {counters.listings.toLocaleString()}
            </div>
            <div className="text-xl font-semibold text-gray-700 uppercase tracking-wide font-out">
              PROPERTY LISTINGS
            </div>
          </div>

          {/* Areas Covered */}
          <div className="my-4 bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 font-out">
            <div className="text-5xl font-bold text-purple-600 mb-4">
              {counters.areas.toLocaleString()}
            </div>
            <div className="text-xl font-semibold text-gray-700 uppercase tracking-wide">
              AREAS COVERED
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="text-center mt-16">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg">
            Leading Property Website in Nigeria
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutCount;
