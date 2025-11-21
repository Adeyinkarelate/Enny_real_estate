import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section
      class="bg-center bg-no-repeat bg-gray-600 bg-blend-multiply h-screen"
      style={{ backgroundImage: "url('/real.jpg')" }}
    >
      <Navbar />
      <div class="continer flex flex-col mx-auto items-center justify-center w-full h-full ">
        <h1 class=" animate__animated animate__fadeInLeft animate__slower lg:max-w-5xl text-center mt-16  mb-4 text-4xl md:text-6xl font-light tracking-tight leading-none text-white   font-out">
          Expert Real Estate Advisory Services
        </h1>
        <p class="text-center max-w-4xl mb-8 text-lg font-light text-gray-300 lg:text-md sm:px-16 lg:px-48">
          Enny estate agent and realtors as the pinnacle of luxury living in
          Nigeria and Africa, Enny has redefined upscale real estate, setting a
          new benchmark for sophistication and excellence.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/service"
            class=" animate__animated animate__fadeInLeft animate__slower inline-flex justify-center items-center py-3 px-5 text-base font-normal text-center text-white rounded-lg bg-pri hover:bg-amber-900 focus:ring-4 focus:ring-pri dark:focus:ring-pri shadow-md "
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <a
            href={`https://wa.me/09027677640?`}
            target="_blank"
            class=" animate__animated animate__fadeInRight animate__slower inline-flex justify-center  items-center py-3 px-5 sm:ms-4 text-base font-normal text-center text-white rounded-lg border border-sec  focus:ring-4 focus:ring-gray-400"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411" />
            </svg>
            Schedule Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
