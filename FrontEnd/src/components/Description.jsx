import React from "react";
import { NavLink } from "react-router-dom";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-auto relative top-0 mt-20">
      <h1 className="text-6xl text-white font-bold w-1/4 text-center">
        Prove & Share work
      </h1>
      <p className="font-normal text-base text-slate-800 w-2/5 text-center">
        ExploreWorld Travel Agency offers{" "}
        <span className="text-black font-semibold">personalized</span> travel
        planning for all types of vacations. Whether you're looking for a
        relaxing beach escape, an{" "}
        <span className="text-black font-semibold">adventurous trek</span> , or
        a <span className="text-black font-semibold">cultural journey</span> ,
        we handle all the details. Enjoy seamless travel experiences with our
        expert guidance and{" "}
        <span className="text-black font-semibold">exceptional service</span> .
      </p>
      <div className="flex items-center gap-10 w-1/4 justify-center">
        <NavLink
          to="/Sign"
          className="px-4 py-3 rounded-lg text-white bg-[#002670] hover:bg-[#002670]/70 tranbsition-all duration-300 hover:shadow-md hover:shadow-[#0ef18d]/20"
        >
          <button>Get Started</button>
        </NavLink>
        <NavLink
          className="px-4 py-3 rounded-lg text-white bg-[#002670]/70 hover:bg-[#002670] stransition-all duration-300 hover:shadow-md hover:shadow-[#2BD2A4]/20"
          to="/Faq"
        >
          <button>Any Questions ?</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Description;
