import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const OurOfferings = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center">
        <Button className="bg-[#2CC295] hover:bg-[#25a07c] rounded-full px-8 py-2 mb-4 transition-colors duration-300">
          OUR OFFERING
        </Button>
        <h1 className="text-[#131313] font-semibold text-2xl md:text-3xl">
          See what we offer
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-[930px] mx-auto">
        <div className="bg-[#E8F4F0] border border-[#F0F0F0] rounded-3xl py-4 px-8">
          <div className="flex flex-col items-center justify-between h-full gap-7 text-left">
            <div>
              <h3 className="text-[#1C1C1C] font-semibold text-[1.3rem] mt-8">
                Smart Medication Management in Your Pocket
              </h3>
              <p className="text-[#5E5E5E] mt-2">
                Experience the full power of Marmar on your mobile device. Get
                instant medication analysis, set personalized reminders, and
                access your detailed medication history anytime, anywhere.
              </p>
            </div>
            <div className="w-full h-full">
              <Image
                src="/assets/smartmedication.svg"
                alt="image"
                width={20}
                height={48}
                className="w-[455px] h-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#E8F4F0] border border-[#F0F0F0] rounded-3xl py-4 px-8">
          <div className="flex flex-col items-center justify-between h-full  text-left">
            <div>
              <h3 className="text-[#1C1C1C] font-semibold text-[1.3rem] mt-8">
                Our App
              </h3>
              <p className="text-[#5E5E5E] mt-2">
                ur intuitive app combines AI-powered safety checks with
                easy-to-use features, ensuring you're always just a tap away
                from medication insights you can trust.
              </p>
            </div>
            <Image
              src="/assets/ourapp.svg"
              alt="image"
              width={20}
              height={48}
              className="w-[174px] h-[304]"
            />
          </div>
        </div>

        <div className="bg-[#E8F4F0] border border-[#F0F0F0] rounded-3xl py-4 px-8 md:col-span-2  mx-auto">
          <div className="flex flex-col justify-between h-full  text-left lg:flex-row items-center">
            <div>
              <h3 className="text-[#1C1C1C] font-semibold text-[1.3rem] mt-8">
                Protect your time and maximize your income
              </h3>
              <p className="text-[#5E5E5E] mt-2] ">
                Advanced AI analysis of drug interactions and patient-specific
                factors, transforming complex pharmaceutical data into clear,
                actionable insights for safer medication management
              </p>
            </div>
            <Image
              src="/assets/protecttime.svg"
              alt="image"
              width={20}
              height={48}
              className="w-[445px] h-[387px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
