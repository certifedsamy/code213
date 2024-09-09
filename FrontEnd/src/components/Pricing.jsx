import React from "react";
import { pricing } from "../data/data";

const Pricing = () => {
  return (
    <div className="flex items-center justify-center gap-12 py-16 px-12">
      {pricing.map((p, i) => (
        <div className="rounded-xl shadow-lg flex flex-col items-center justify-center gap-3 py-12 px-5 w-[350px] border-t-8 border-[#002670] hover:scale-110 transition-all duration-300">
          <h1 className="text-3xl font-semibold">{p.membership}</h1>
          <div className="flex flex-col items-center justify-center pt-5">
            <p className="text-xl font-semibold">{p.price}</p>
            <span className="text-slate-500 font-normal text-lg">
              {p.duration}
            </span>
          </div>

          <button className="px-4 py-3 rounded-lg bg-[#002670] text-white w-full mt-10 hover:scale-90 hover:bg-[#002670]/90 transition-all duration-300">
            Get {p.membership}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
