import React from "react";
import Image from "next/image";
import Blogs from "@/components/sections/Blogs";

const Page = () => {
  return (
    <>
      <div className="mt-[2rem] mb-8">
        <h2 className="text-[#66B29B] text-[0.9rem] text-center ">
          Published 20 Nov 2024
        </h2>
        <div className="max-w-[900px] text-center  space-y-4 flex flex-col justify-center items-center mx-auto">
          <h1 className="text-[#131313]  font-semibold  text-[1.5rem] md:text-[2.5rem]">
            Base Model, Accuracy & Everything In Between
          </h1>
          <p className="text-[#606060]  ">
            Experience the confidence that comes from truly understanding your
            medications. Instant AI analysis makes complex interactions clear
            and simple.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <Image
              src="/assets/ceoavatar.svg"
              alt="image"
              width={45}
              height={48}
            />
            <div>
              <h4 className="text-[#101828] text-sm font-semibold">
                Ahmad Rufai
              </h4>
              <span className="text-[#667085] text-sm">CEO</span>
            </div>
          </div>
        </div>
        <Image
          src="/assets/ourapproachcontainer.png"
          alt="image"
          width={400}
          height={600}
          className="w-full h-full my-5"
        />
        <div className="max-w-[1000px] mt-[5rem] mx-auto flex flex-col justify-center  ">
          <div className="w-full h-[1px] bg-[#EAECF0] "></div>
          <Blogs />
        </div>
      </div>
    </>
  );
};

export default Page;
