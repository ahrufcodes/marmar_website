import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div className="space-y-6 mt-4 md:flex justify-between  items-center">
        <div className="text-center md:text-left max-w-[700px]">
          <h1 className="text-[#131313]  font-semibold  text-[1.5rem] md:text-[2.5rem] lg:mt-[-5rem]">
            Peace of Mind with Every Prescription
          </h1>
          <p className="text-[#606060]  ">
            Experience the confidence that comes from truly understanding your
            medications. Instant AI analysis makes complex interactions clear
            and simple.
          </p>
          <div className="flex  gap-3 mx-auto mt-5 justify-center items-center md:justify-start">
            <Button className="bg-[#2CC295]">
              Check Your Medication <ChevronRight />
            </Button>
            <Button className="bg-white text-[#131313] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_2px_rgba(0,0,0,0.1)] rounded-md">
              Get Started Now
            </Button>
          </div>
        </div>
        <Image
          src="/assets/herosectionimage.svg"
          alt="image"
          width={400}
          height={600}
          className="w-full h-auto md:w-[400px] lg:w-[663px] object-contain"
        />
      </div>
      <div className="space-y-2 mx-auto  text-center mt-[2rem] flex flex-col justify-center items-center md:text-left md:items-start">
        <h2 className="text-[#606060]  ">Supported By</h2>
        <Image
          src="/assets/supportslogo.svg"
          alt="image"
          width={65}
          height={36}
          className="w-full max-w-[200px] md:h-[40px]"
        />
      </div>
    </>
  );
};

export default HeroSection;
