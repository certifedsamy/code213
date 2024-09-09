import React, { useState, useEffect } from "react";
import code from "../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 110) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex itmes-center justify-between px-24 h-[65px] shadow-xs shadow-slate-200 z-20 bg-slate-200 w-[80%] transition-all duration-300 ease-in-out rounded-[20px] ml-[150px] mt-5 ${
        isScrolled
          ? "w-[100%] sticky flex justify-center items-center top-5 -ml-[0px] bg-white bg-opacity-30 backdrop-blur-md"
          : "-top-3"
      }`}
    >
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img
            src={code}
            alt=""
            className="h-12 hover:scale-125 transition-all duration-300"
          />
        </NavLink>

        <h1 className="text-lg font-bold text-[#002670]">UpUrWor</h1>
      </div>

      <div className="flex items-center gap-8">
        <NavLink
          to="/Home"
          className="text-md font-normal text-slate-700 hover:border-b-2 hover:border-[#002240] hover:text-[#002240]  py-5 transition-all duration-100"
        >
          <a href="" className="">
            Home
          </a>
        </NavLink>

        <a
          href=""
          className="text-md font-normal text-slate-700 hover:border-b-2 hover:border-[#002240] hover:text-[#002240]  py-5 transition-all duration-100"
        >
          Offers
        </a>
        <a
          href=""
          className="text-md font-normal text-slate-700 hover:border-b-2 hover:border-[#002240] hover:text-[#002240]  py-5 transition-all duration-100"
        >
          Contact
        </a>
        <NavLink
          to="/Faq"
          className="text-md font-normal text-slate-700 hover:border-b-2 hover:border-[#002240] hover:text-[#002240]  py-5 transition-all duration-100"
        >
          <a href="">FAQ</a>
        </NavLink>
      </div>

      <div className="flex items-center pr-20 relative">
        <NavLink
          to="/Log"
          className="text-white bg-[#A68989] px-5 py-3 rounded-full hover:bg-[#002670] transition-all duration-500 z-10"
        >
          <button>Log In</button>
        </NavLink>

        <NavLink
          to="/Sign"
          className="text-slate-700 bg-white px-5 pl-10 py-3 rounded-r-full  absolute ml-[55px]  transition-all duration-500"
        >
          <button link>Sign In</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
