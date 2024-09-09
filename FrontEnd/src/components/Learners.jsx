import React from "react";
import { creators } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Learners = () => {
  return (
    <div className="flex ">
      <div className="h-auto w-2/4 p-32 space-y-12">
        <h1 className="text-6xl text-[#AD8584] font-bold text-center">
          Our Learners
        </h1>
        <p className="font-normal text-base text-slate-800 text-center">
          ExploreWorld Travel Agency offers{" "}
          <span className="text-black font-semibold">personalized</span> travel
          planning for all types of vacations. Whether you're looking for a
          relaxing beach escape, an{" "}
          <span className="text-black font-semibold">adventurous trek</span> ,
          or a{" "}
          <span className="text-black font-semibold">cultural journey</span> ,
          we handle all the details. Enjoy seamless travel experiences with our
          expert guidance and{" "}
          <span className="text-black font-semibold">exceptional service</span>{" "}
          .
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={120}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="h-[65vh] mt-20 px-28 py-10 w-2/4"
      >
        {creators.map((c, i) => (
          <SwiperSlide className="p-10 rounded-lg shadow-lg w-full border-t-8 border-[#AD8584]/80">
            <div className="flex gap-3 items-center ">
              <img
                src={c.img}
                alt=""
                className="h-10 border border-[#002670] rounded-full"
              />
              <div className="">
                <h1 className="text-lg font-normal">{c.name}</h1>
                <p className="text-md font-thin text-slate-500">{c.role}</p>
              </div>
            </div>
            <p className="text-md font-normal mt-10">{c.opinion}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Learners;
