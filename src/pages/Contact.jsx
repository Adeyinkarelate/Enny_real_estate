import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { HiMail } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import est1 from '../assets/est2.jpg'



const Contact = () => {
  const [formData, setFormData] = useState({ 
    full_name: "", 
    email: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessInfo = {
    phonePrimary: "+234 902 767 7640",
    phoneSecondary: "",
    email: "woyedeji7@gmail.com",
    address: "No3 Ososanya st ojualale ogba ayo ogun state, Nigeria",
    facebookUrl: "https://facebook.com/lazydogrepair"
  };

  // EmailJS configuration (replace with your actual keys)
  const EMAILJS_SERVICE_ID = "your_service_id";
  const EMAILJS_TEMPLATE_ID = "your_template_id";
  const EMAILJS_PUBLIC_KEY = "your_public_key";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.full_name,
        from_email: formData.email,
        message: formData.message,
        to_email: "woyedeji7@gmail.com"
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({ 
        full_name: "", 
        email: "", 
        message: "" 
      });
      
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Go back function
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section
      id="Contact"
      style={{
        backgroundImage: `url(${est1})`,
        backgroundAttachment: "fixed",
      }}
      className="w-full h-full bg-cover p-8 bg-center bg-no-repeat bg-gray-800 bg-blend-multiply"
    >
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      {/* Go Back Button */}
      <div className="container mx-auto mb-6">
        <button
          onClick={handleGoBack}
          className="flex items-center text-white hover:text-pri transition-colors duration-200 bg-black bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-lg"
        >
          <FaArrowLeft className="mr-2" />
          Go Back
        </button>
      </div>
      
      <div className="">
        <div className="px-4 py-16 md:mx-auto sm:w-full md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            {/* Left Side */}
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 text-4xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none font-out">
                Exceeding expectations is what Enny estate agent and realtors 
                agent and realtors <span className="text-orange-600">stands for</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-300 md:text-lg font-sans">
                Going the extra mile to achieve extraordinary results is one of
                our guiding principles.
              </p>

              {/* Contact Information */}
              <div className="mt-8 space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-center text-white">
                  <FaPhone className="mr-3 text-pri shrink-0" />
                  <div className="space-y-1">
                    <a 
                      href={`tel:${businessInfo.phonePrimary}`} 
                      className="block hover:text-pri transition-colors duration-200"
                    >
                      {businessInfo.phonePrimary}
                    </a>
                    <a 
                      href={`tel:${businessInfo.phoneSecondary}`} 
                      className="block hover:text-pri transition-colors duration-200"
                    >
                      {businessInfo.phoneSecondary}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center text-white">
                  <FaEnvelope className="mr-3 text-pri shrink-0" />
                  <a 
                    href={`mailto:${businessInfo.email}`}
                    className="hover:text-pri transition-colors duration-200"
                  >
                    {businessInfo.email}
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start text-white">
                  <FaMapMarkerAlt className="mr-3 text-pri mt-1 shrink-0" />
                  <div>
                    <p className="hover:text-pri transition-colors duration-200 cursor-pointer">
                      {businessInfo.address.split(', ').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < businessInfo.address.split(', ').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center space-x-4 mt-6">
                  <a
                    href="https://wa.me/09027677640"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <SiWhatsapp className="text-xl" />
                  </a>
                  <a
                    href={businessInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    title="Follow on Facebook"
                    aria-label="Follow on Facebook"
                  >
                    <SiFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded-lg shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-gray-800">
                  Reach Out for more Enquiry
                </h3>
                    
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                    <CgProfile className="text-gray-400 text-xl mr-3" />
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      required
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent outline-none text-gray-700 text-sm border-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                    <HiMail className="text-gray-400 text-xl mr-3" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent outline-none text-gray-700 text-sm border-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                    <textarea
                      name="message"
                      placeholder="Leave a message..."
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent outline-none text-gray-700 text-sm resize-none border-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-4 rounded-xl text-sm font-semibold shadow-md transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message 
                        <MdSend className="ml-2 text-lg" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;