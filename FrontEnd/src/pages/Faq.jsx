import React from "react";
import Navbar from "../components/Navbar";
import { faq } from "../data/data";
import { useState } from "react";
import arrow from "../assets/icons/arrow.svg";
import cross from "../assets/icons/cross.svg";
import { NavLink } from "react-router-dom";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-2/4 h-[80vh] bg-white bg-opacity-30 backdrop-blur-[70%] rounded-xl absolute top-16 left-80 p-16 flex flex-col relative">
      <NavLink to="/">
        <img
          src={cross}
          alt=""
          className="absolute rounded-full bg-[#A68989] text-black top-3 left-[93%] p-1 h-10 z-20"
        />
      </NavLink>
      <ul>
        {faq.map((f, i) => (
          <li key={i}>
            <div
              onClick={() => toggleFAQ(i)}
              className="bg-white rounded-lg py-3 px-4 mb-2 flex justify-between items-center"
            >
              <h1>{f.question}</h1>
              <img
                src={arrow}
                alt=""
                className="h-8 rounded-full rotate-[135deg] border border-black p-[5px]"
              />
            </div>
            <div
              className={`tansition-all duration-300 ease-in-out ${
                openIndex === i
                  ? `max-h-[500px] p-4 opacity-100 visible mb-10`
                  : `max-h-0 p-4 opacity-0 invisible`
              } bg-slate-200 rounded-lg`}
            >
              <p className="text-slate-500">{f.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
