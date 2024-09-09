import React from "react";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import tiktok from "../assets/icons/tiktok.svg";

const Header = () => {
  return (
    <div className="pt-2">
      <header className="flex items-center justify-between px-24 py-2 h-12 bg-[#002670] rounded-[10px] w-[95%] mx-auto">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img
              src={location}
              alt=""
              className="h-4 hover:scale-125 transition-all duration-300 cursor-pointer"
            />
            <span className="font-normal text-sm text-white hover:underline cursor-pointer">
              Algeria. Algiers. Hydra city
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={phone}
              alt=""
              className="h-4 hover:scale-125 transition-all duration-300 cursor-pointer"
            />
            <span className="font-normal text-sm text-white hover:underline cursor-pointer">
              +1.235.264.956
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={instagram}
            alt=""
            className="h-5  hover:scale-125 transition-all duration-300 cursor-pointer"
          />
          <img
            src={twitter}
            alt=""
            className="h-4  hover:scale-125 transition-all duration-300 cursor-pointer"
          />
          <img
            src={tiktok}
            alt=""
            className="h-4  hover:scale-125 transition-all duration-300 cursor-pointer"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
