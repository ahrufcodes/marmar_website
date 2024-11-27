import Hiring from "@/components/sections/Hiring";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-[2.5rem] mb-[10rem]">
        <div className="max-w-[900px] text-center  space-y-7 flex flex-col justify-center items-center mx-auto">
          <h1 className="text-[#131313]  font-semibold  text-[1.5rem] md:text-[2.5rem]">
            About Us
          </h1>
          <p className="text-[#606060]  ">
            Our approach combines technological innovation with unwavering
            commitment to accuracy and user safety. While Marmar represents the
            cutting edge of AI-powered medication analysis, we maintain a clear
            focus on practical, reliable, and understandable results that make a
            real difference in medication management.
          </p>
        </div>
        <Hiring />
      </div>
    </>
  );
};

export default page;
