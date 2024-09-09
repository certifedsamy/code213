import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import cross from "../assets/icons/cross.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const Login = () => {
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
        className=" relative w-2/5 border rounded-r-xl absolute top-8 left-60 h-[60vh] border-none"
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
            Log to your acount
          </h1>
          <div className="flex flex-col gap-4 mt-12">
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

          <button className="px-4 py-2 rounded-lg border-none bg-[#459BC4] hover:bg-[#459BC4]/70 text-white transition-all hover:scale-110 duration-500 mt-10 ml-5">
            Log in
          </button>
        </SwiperSlide>
      </Swiper>
      <div className="mr-16 mt-12">
        <section className="bg-white w-1/5 h-[50px] rounded-l-full top-8 absolute left-[500px]"></section>
        <section className="bg-white w-1/4 h-[80px] rounded-l-full top-16 absolute left-[370px]"></section>
        <section className="bg-white w-1/5 h-[80px] rounded-l-full top-[144px] absolute left-[450px]"></section>
        <section className="bg-white w-2/5 h-[80px] rounded-l-full top-[224px] absolute left-[400px]"></section>
        <section className="bg-white w-1/6 h-[80px] rounded-l-full top-[304px] absolute left-[500px]"></section>
        <section className="bg-white w-[350px] h-[101px] rounded-l-full top-[380px] absolute left-[450px]"></section>
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

export default Login;
