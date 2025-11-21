import React, { useEffect, useState } from "react";
import { assets } from "../data/data";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [showMobile , setMobile] = useState(false);


  useEffect(()=>{
      if(showMobile){
        document.body.style.overflow ='hidden'
      }else{
        document.body.style.overflow ='auto'
      }
      return ()=>{
        document.body.style.overflow ='auto'
      }

  },[showMobile])

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent font-out">
        <img src={assets.logo_dark} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <Link to="/" className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" className="cursor-pointer hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/service" className="hidden md:block bg-sec px-8 py-2 rounded-full text-black">
          Projects
        </Link>
        <img onClick={()=> setMobile(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="" />
      </div>
      {/* -------------mobile-menu----------------- */}
      <div className={`md:hidden ${showMobile ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-scroll bg-black text-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img src={assets.cross_icon} onClick={()=> setMobile(false)} className="w-6" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium cursor-pointer">
          <Link to="/" onClick={()=> setMobile(false)}  className="  px-4 py-2  inline-block hover:scale-150  transition-all ease-in-out">Home</Link>
          <Link to="/service" onClick={()=> setMobile(false)}  className="px-4 py-2 rounded-full inline-block hover:scale-150">Services</Link>
          <Link to="/about" onClick={()=> setMobile(false)}  className="px-4 py-2 rounded-full inline-block hover:scale-150">About</Link>
          <Link to="/project" onClick={()=> setMobile(false)}  className="px-4 py-2 rounded-full inline-block hover:scale-150">Project</Link>
          <Link to="/contact" onClick={()=> setMobile(false)}  className="px-4 py-2 rounded-full inline-block hover:scale-150">Contact</Link>
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
