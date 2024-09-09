import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import cross from "../assets/icons/cross.svg";
import up from "../assets/icons/arrowup.svg";
import anime from "../assets/images/pngWorking.png";
import Pricing from "../components/Pricing";
import Creators from "../components/Creators";
import Learners from "../components/Learners";
import Footer from "../components/Footer";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState("pricing");
  return (
    <div className="px-10 py-5 relative">
      <NavLink to="/">
        <img
          src={cross}
          alt=""
          className="absolute rounded-full bg-[#A68989] text-black top-36 left-[93.5%] p-1 h-10 z-20"
        />
      </NavLink>
      <Navbar />

      <section className="w-full h-auto bg-white rounded-xl overflow-hidden mt-5 relative">
        <div className="w-full h-auto flex">
          <div className="relative bg-white w-full h-auto rounded-lg py-10 px-24 flex flex-col items-center gap-10 w-3/5">
            {/* <div className="absolute w-[100px] h-[10px] bg-[#002690] rounded-full top-[110px] left-[530px]"></div> */}
            <h1 className="text-5xl font-semibold flex items-center relative">
              <img src={up} alt="" className="h-20" />p your work
            </h1>
            <p className="font-normal text-xl text-slate-800 text-center">
              ExploreWorld Travel Agency offers{" "}
              <span className="text-black font-semibold">personalized</span>{" "}
              travel planning for all types of vacations. Whether you're looking
              for a relaxing beach escape, an{" "}
              <span className="text-black font-semibold">adventurous trek</span>{" "}
              , or a{" "}
              <span className="text-black font-semibold">cultural journey</span>{" "}
              , we handle all the details. Enjoy seamless travel experiences
              with our expert guidance and{" "}
              <span className="text-black font-semibold">
                exceptional service
              </span>{" "}
              .
            </p>
            <div className="flex items-center gap-10 justify-center">
              <NavLink
                to="/Sign"
                className="px-4 py-3 rounded-lg text-white bg-[#002670] hover:bg-[#002670]/70 tranbsition-all duration-300 hover:shadow-md hover:shadow-[#0ef18d]/20"
              >
                <button>Get Started</button>
              </NavLink>

              <button className="px-4 py-3 rounded-lg text-white bg-[#002670]/70 hover:bg-[#002670] stransition-all duration-300 hover:shadow-md hover:shadow-[#2BD2A4]/20">
                Any Questions ?
              </button>
            </div>
          </div>
          <img src={anime} alt="" />
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-[#002670] to-[#A68989] w-3/4 mx-auto rounded-full py-4 mt-12">
          <button
            className="px-12 py-5 text-xl text-white border-r-2 border-white"
            onClick={() => setCurrentComponent("pricing")}
          >
            Pricing
          </button>

          <button
            className="px-12 py-5 text-xl text-white border-r-2 border-white"
            onClick={() => setCurrentComponent("creators")}
          >
            Creators
          </button>

          <button
            className="px-12 py-5 text-xl text-white border-r-2 border-white"
            onClick={() => setCurrentComponent("learners")}
          >
            Learners
          </button>

          <button className="px-12 py-5 text-xl text-white border-r-2 border-white">
            ----
          </button>
          <button className="px-12 py-5 text-xl text-white border-r-2 border-white">
            ----
          </button>
          <button className="px-12 py-5 text-xl text-white ">----</button>
        </div>
        <div className="w-full h-[85vh] overflow-hidden">
          {currentComponent === "pricing" && <Pricing />}
          {currentComponent === "creators" && <Creators />}
          {currentComponent === "learners" && <Learners />}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
