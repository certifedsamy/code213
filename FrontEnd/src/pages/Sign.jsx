import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import cross from "../assets/icons/cross.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import google from "../assets/icons/google.svg";
import apple from "../assets/icons/apple.svg";

const Sign = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        //   spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={false}
        speed={2500}
        className=" relative w-2/5 border rounded-r-xl absolute top-8 left-60 h-[76.9vh] border-none"
      >
        <NavLink to="/">
          <img
            src={cross}
            alt=""
            className="absolute rounded-full bg-[#A68989] text-black top-4 left-[90%] p-1 h-10 z-20"
          />
        </NavLink>

        <SwiperSlide className="w-full h-full bg-white p-16 pt-12 border-none">
          <h1 className="text-4xl text-slate-600 font-normal text-center ">
            Sign as a Creator
          </h1>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex gap-5 items-center justify-center">
              <div className="flex flex-col gap-2 w-[47.5%]">
                <span className="text-slate-600 ml-5">FullName</span>
                <input
                  type="text"
                  placeholder="Enter you fullname ..."
                  className="outline-none py-3 px-4 rounded-full border border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2 w-[47.5%]">
                <span className="text-slate-600 ml-5">Username</span>
                <input
                  type="text"
                  placeholder="Enter you username ..."
                  className="outline-none py-3 px-4 rounded-full border border-slate-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 ml-5">e-mail</span>
              <input
                type="text"
                placeholder="Enter you e-mail ..."
                className="outline-none py-3 px-4 rounded-full border border-slate-500 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-600 ml-5">Password</span>
              <input
                type="text"
                placeholder="Enter you password ..."
                className="outline-none py-3 px-4 rounded-full border border-slate-500 w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-8 items-center w-full justify-center">
            <div className="bg-slate-300 h-[1px] w-[35%] rounded-full"></div>
            <div className="text-slate-400">Or Sign with</div>
            <div className="bg-slate-300 h-[1px] w-[35%] rounded-full"></div>
          </div>
          <div className="flex items-center mt-4 justify-between px-24">
            <div className="flex items-center gap-8">
              <a href="https://www.google.fr" target="_blank">
                <img
                  src={google}
                  alt=""
                  className="h-10 rounded-full border border-slate-400 p-2 hover:scale-90 transition-all duration-300"
                />
              </a>
              <a href="https://www.apple.com" target="_blank">
                <img
                  src={apple}
                  alt=""
                  className="h-10 rounded-full border border-slate-400 p-2 hover:scale-90 transition-all duration-300"
                />
              </a>
            </div>
            <button className="px-4 py-2 rounded-lg border-none bg-[#459BC4] hover:bg-[#459BC4]/70 text-white transition-all hover:scale-110 duration-500 ">
              submit
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-white p-16 pt-12 border-none">
          <h1 className="text-4xl text-slate-600 font-normal text-center ">
            Sign as a Learner
          </h1>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-[47.5%]">
                <span className="text-slate-600 ml-5">Fullname</span>
                <input
                  type="text"
                  placeholder="Enter you fullname ..."
                  className="outline-none py-3 px-4 rounded-full border border-slate-500"
                />
              </div>
              <div className="flex flex-col gap-2 w-[47.5%]">
                <span className="text-slate-600 ml-5">Username</span>
                <input
                  type="text"
                  placeholder="Enter you username ..."
                  className="outline-none py-3 px-4 rounded-full border border-slate-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 ml-5">e-mail</span>
              <input
                type="text"
                placeholder="Enter you e-mail ..."
                className="outline-none py-3 px-4 rounded-full border border-slate-500"
              />
            </div>
            <span className="text-slate-600 ml-5">Password</span>
            <input
              type="text"
              placeholder="Enter you password ..."
              className="outline-none py-3 px-4 rounded-full border border-slate-500 w-full"
            />
          </div>

          <div className="flex gap-2 mt-8 items-center w-full justify-center">
            <div className="bg-slate-300 h-[1px] w-[35%] rounded-full"></div>
            <div className="text-slate-400">Or Sign with</div>
            <div className="bg-slate-300 h-[1px] w-[35%] rounded-full"></div>
          </div>
          <div className="flex items-center mt-4 justify-between px-24">
            <div className="flex items-center gap-8">
              <a href="https://www.google.fr" target="_blank">
                <img
                  src={google}
                  alt=""
                  className="h-10 rounded-full border border-slate-400 p-2 hover:scale-90 transition-all duration-300"
                />
              </a>
              <a href="https://www.apple.com" target="_blank">
                <img
                  src={apple}
                  alt=""
                  className="h-10 rounded-full border border-slate-400 p-2 hover:scale-90 transition-all duration-300"
                />
              </a>
            </div>
            <button className="px-4 py-2 rounded-lg border-none bg-[#AD8584] hover:bg-[#AD8584]/70 text-white hover:scale-110  transition-all duration-500">
              submit
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mr-16">
        <section className="bg-white w-1/5 h-[50px] rounded-l-full top-8 absolute left-[500px]"></section>
        <section className="bg-white w-1/4 h-[80px] rounded-l-full top-16 absolute left-[370px]"></section>
        <section className="bg-white w-1/5 h-[80px] rounded-l-full top-[144px] absolute left-[450px]"></section>
        <section className="bg-white w-2/5 h-[80px] rounded-l-full top-[224px] absolute left-[400px]"></section>
        <section className="bg-white w-1/6 h-[80px] rounded-l-full top-[304px] absolute left-[500px]"></section>
        <section className="bg-white w-[350px] h-[80px] rounded-l-full top-[380px] absolute left-[450px]"></section>
        <section className="bg-white w-[450px] h-[100px] rounded-l-full top-[460px] absolute left-[260px]"></section>
        <section className="bg-white w-[420px] h-[47px] rounded-l-full top-[560px] absolute left-[340px]"></section>
        <section className="bg-white w-[30px] h-[30px] rounded-full top-[130px] absolute left-[460px]"></section>
        <section className="bg-white w-[40px] h-[40px] rounded-full top-[200px] absolute left-[450px]"></section>
        <section className="bg-white w-[30px] h-[30px] rounded-full top-[290px] absolute left-[510px]"></section>
        <section className="bg-white w-[50px] h-[50px] rounded-full top-[360px] absolute left-[490px]"></section>
        <section className="bg-white w-[50px] h-[50px] rounded-full top-[440px] absolute left-[440px]"></section>
        <section className="bg-white w-[20px] h-[20px] rounded-full top-[535px] absolute left-[280px]"></section>
        <section className="bg-white w-[20px] h-[20px] rounded-full top-[575px] absolute left-[100px]"></section>
        <section className="bg-white w-[50px] h-[50px] rounded-full top-[220px] absolute left-[280px]"></section>
        <section className="bg-white w-[30px] h-[30px] rounded-full top-[300px] absolute left-[350px]"></section>
      </div>
    </>
  );
};

export default Sign;
