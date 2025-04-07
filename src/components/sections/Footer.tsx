import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const Footer = () => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-[#042222] to-[#66B29B]  bg-cover bg-center bg-no-repeat p-4 text-center space-y-8 w-full flex flex-col justify-center items-center h-[432px]"
        style={{ backgroundImage: "url('/assets/footerbg.svg')" }}
      >
        <h1 className="text-[2rem] text-white">
          Take Control of your health Today!
        </h1>
        <h3 className="text-white text-[1rem]">
          Because Understanding your medications shouldn't be complicated.
        </h3>
        <Button className="bg-white text-[#000000]">Get Started Now</Button>
      </div>

      <div className="mt-8 px-10 py-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col mx-auto justify-center  md:flex-row gap-12 md:gap-24">
          <div className="mb-8 md:mb-0">
            <Image
              src="/assets/footerlogo.png"
              alt="image"
              width={50}
              height={41}
            />
          </div>

          <div className="flex flex-row md:justify-between w-[90%] gap-10 md:gap-2 ">
            <div className="flex flex-col gap-4">
              <span className="text-xs text-[#5E5E5E]">Company</span>
              <h3 className="text-[1rem] text-[#042222]">About</h3>
              <h3 className="text-[1rem] text-[#042222]">Our Approach</h3>
              <h3 className="text-[1rem] text-[#042222]">Changelog</h3>
              <h3 className="text-[1rem] text-[#042222]">Blog</h3>
              <h3 className="text-[1rem] text-[#042222]">Instagram</h3>
              <h3 className="text-[1rem] text-[#042222]">Twitter</h3>
              <h3 className="text-[1rem] text-[#042222]">LinkedIn</h3>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs text-[#5E5E5E]">Research</span>
              <h3 className="text-[1rem] text-[#042222]">Accuracy</h3>
              <h3 className="text-[1rem] text-[#042222]">Model</h3>
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl p-8 h-[168px] hidden md:block">
              <h2 className="">
                {" "}
                <span className="text-[#2CC295]">
                  {" "}
                  Get notified when we launch our app
                </span>{" "}
                our mobile app.
              </h2>
              <div className="flex  mt-5 border border-[#DADADA] px-4  py-2 rounded-full bg-white flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full  focus:outline-none focus:border-[#2CC295] focus:ring-1 focus:ring-[#2CC295]"
                />
                <Button className="bg-[#fff] border rounded-full px-8 py-2 text-[#000] transition-colors duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[1px] w-full bg-gradient-to-r mt-7"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, #EEEFF0 50%, #EFEFF1 100%)",
          }}
        ></div>
        <div className="flex flex-col gap-4 md:flex-row justify-between mt-[2rem] mb-14">
          <h2 className="text-[#909090] text-sm">© 2024 Marmar </h2>
          <h2 className="text-[#909090] text-sm">
            Registered at Camburgh House, 27 New Dover Road, Canterbury, CT1
            3DN, England{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
