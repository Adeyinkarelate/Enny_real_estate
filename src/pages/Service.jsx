import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../data/data";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";




const Service = () => {
  const [activeTab, setActiveTab] = useState("estate");
  const [selectedProperty, setSelectedProperty] = useState();

  const navigate = useNavigate();

  const handleContactAgent = () => {
    navigate('/contact');
  };

  // WhatsApp function - replace with actual owner number
  const handleScheduleTour = (property) => {
    const phoneNumber = "09027677640"; // Replace with actual owner WhatsApp number
    const message = `Hello! I'm interested in scheduling a tour for: ${property.title}. Please let me know available dates and times.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <>
      <Banner pageTitle="Premium Real Estate Services" subtitle="Comprehensive real estate solutions tailored to your unique needs"/>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50 ">
        <div className="max-w-7xl mx-auto my-20">
          <div className="flex justify-center mb-16">
            <div className=" font-out inline-flex rounded-full bg-gray-800 p-1 shadow-lg border border-gray-700">
              {["estate", "residential", "land"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-pri text-gray-900 shadow-md"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {activeTab === "estate" && (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {properties.estate.map((property) => (
                  <motion.div
                    key={property.id}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <motion.img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-out text-white mb-2">
                        {property.title}
                      </h3>
                      <p className="text-gray-400 mb-4 font-light tracking-wider">
                        {property.description}
                      </p>
                      <button
                        onClick={() => setSelectedProperty(property)}
                        className=" font-out w-full py-3 px-4 bg-pri hover:bg-amber-800 text-gray-900 font-medium rounded-lg transition-all duration-300"
                      >
                        View Estate
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "residential" && (
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {properties.residential.map((property) => (
                  <motion.div
                    key={property.id}
                    className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 h-64 md:h-auto">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 md:w-1/2 flex flex-col">
                        <div className="grow">
                          <h3 className="text-4xl font-out text-white mb-2">
                            {property.title}
                          </h3>
                          <p className="text-gray-400 mb-4 font-light tracking-wider">
                            {property.description}
                          </p>
                          <p className="text-gray-300 mb-6 flex items-center font-light tracking-wider">
                            <svg
                              className="w-5 h-5 mr-2 text-sec"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {property.address}
                          </p>
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {property.specs.map((spec, i) => (
                              <div
                                key={i}
                                className="bg-gray-700 rounded-lg p-3 text-center"
                              >
                                <p className="text-sec font-light text-lg">
                                  {spec.value}
                                </p>
                                <p className="text-gray-300 text-xs">
                                  {spec.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProperty(property)}
                          className=" font-out self-start py-3 px-6 bg-pri hover:bg-yellow-800 text-gray-900 font-medium rounded-lg transition-all duration-300"
                        >
                          View Residence
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "land" && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {properties.land.map((property) => (
                  <motion.div
                    key={property.id}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="grow">
                      <h3 className="text-xl font-out text-white mb-2">
                        {property.title}
                      </h3>
                      <p className="text-gray-400 mb-4 font-light tracking-wider">
                        {property.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.zoning.map((zone, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700 text-sec text-xs rounded-full"
                          >
                            {zone}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm flex items-center font-light tracking-wider">
                        <svg
                          className="w-4 h-4 mr-2 text-sec"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Coordinates: {property.coordinates}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProperty(property)}
                      className="font-out mt-6 w-full py-3 px-4 bg-pri hover:bg-yellow-800 text-gray-900 font-medium rounded-lg transition-all duration-300"
                    >
                      View Land Details
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {selectedProperty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProperty(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="font-out absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200 z-10"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid md:grid-cols-2 ">
                  <div className="h-64 md:h-full">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-4 font-out">
                      {selectedProperty.title}
                    </h2>
                    <p className="text-sec text-lg mb-6 font-light tracking-wider">
                      {selectedProperty.description}
                    </p>
                    <div className="prose prose-invert text-gray-300 mb-8">
                      <p>{selectedProperty.details}</p>

                      {selectedProperty.features && (
                        <div className="mt-6">
                          <h4 className="text-white font-medium mb-3 font-out">
                            Key Features:
                          </h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {selectedProperty.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center font-out "
                              >
                                <svg
                                  className="w-4 h-4 mr-2 text-sec"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProperty.specs && (
                        <div className="mt-6">
                          <h4 className="text-white font-medium mb-3 font-out">
                            Property Specifications:
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            {selectedProperty.specs.map((spec, i) => (
                              <div
                                key={i}
                                className="bg-gray-700 rounded-lg p-3 text-center"
                              >
                                <p className="text-sec text-lg font-light tracking-wider">
                                  {spec.value}
                                </p>
                                <p className="text-gray-300 text-xs font-light tracking-wider">
                                  {spec.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedProperty.coordinates && (
                        <div className="mt-6">
                          <h4 className="text-white font-medium mb-2 font-out">
                            Location Details:
                          </h4>
                          <p className="text-gray-300 flex items-center font-light tracking-wider">
                            <svg
                              className="w-4 h-4 mr-2 text-sec"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            Coordinates: {selectedProperty.coordinates}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button onClick={handleContactAgent} className="font-out flex-1 py-3 px-6 bg-pri hover:bg-amber-800 text-gray-900 font-medium rounded-lg transition-all duration-300">
                        Contact Agent
                      </button>
                      <a 
                        href={handleScheduleTour(selectedProperty)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-out flex-1 py-3 px-6 border border-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                        </svg>
                        Schedule Tour
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
};

export default Service;