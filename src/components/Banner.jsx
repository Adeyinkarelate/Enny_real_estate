import React from "react";
import est1 from "../assets/est3.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Banner = ({ pageTitle, subtitle }) => {
  // Go back  
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/')
  };

  return (
    <div className="flex flex-col relative bg-cover bg-center bg-no-repeat bg-black h-[450px] w-full justify-center align-middle">
      {/* background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${est1})` }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-conic-60 from-black/70 via-black/70 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Content */}
        <div className="text-center flex flex-col  items-center text-white">
          <h1 className="animate__animated animate__fadeInLeft animate__slower text-3xl md:text-4xl font-bold mb-3 font-out">{pageTitle}</h1>
          {subtitle && (
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Home Button */}
          <button
            onClick={handleGoBack}
            className="my-6  text-lg font-light flex items-center text-white hover:text-pri transition-colors duration-200 bg-black bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-lg"
          >
            <FaArrowLeft className="mr-2" />
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
