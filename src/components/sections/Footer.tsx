import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const Footer = () => {
  return (
    <>
      <div className="">
        <div className="px-0 md:px-6 rounded-lg">

       
         <div
          className="bg-gradient-to-r from-[#66B29B] to-[#042222] rounded-none md:rounded-lg p-4 text-center space-y-8 w-full flex flex-col  justify-center items-center h-[432px] " >
          <h1 className="text-[2rem] text-white">
            Take Control of your health Today!
          </h1>
          <h3 className="text-white text-[1rem]">
            Because Understanding your medications shouldn't be complicated.
          </h3>
          <Button className="bg-white text-[#000000]">Get Started Now</Button>
        </div>
        </div>

        <div className="px-3 sm:px-6 rounded-lg">
  <div className="mt-6 sm:mt-12 py-6 sm:py-8 bg-white rounded-lg px-4">
    <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-16 lg:gap-32">
      {/* Logo Section */}
      <div className="mb-6 md:mb-0">
        <Image
          src="/assets/footerlogo.png"
          alt="Marmar logo"
          width={50}
          height={41}
        />
      </div>
      
      {/* Links and Newsletter Section */}
      <div className="flex flex-row flex-wrap justify-between gap-8 md:gap-12 lg:gap-24">
        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs text-[#5E5E5E] font-medium mb-1">Company</span>
          <a href="#"  target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">About</a>
          <a href="#"   target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Our Approach</a>
          <a href="#"  target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Changelog</a>
          <a href="#"  target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Blog</a>
          <a href="https://www.instagram.com/marmarapp?igsh=MXE4NjB5czB1bjh1bg"  target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Instagram</a>
          <a href="https://x.com/Marmarapp"   target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Twitter</a>
          <a href="https://www.linkedin.com/company/marmarapp/"  target="_blank" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">LinkedIn</a>
        </div>
        
        {/* Research Links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs text-[#5E5E5E] font-medium mb-1">Research</span>
          <a href="#" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Accuracy</a>
          <a href="#" className="text-xs text-[#042222] hover:text-[#2CC295] transition-colors">Model</a>
        </div>
        
        {/* Newsletter - Desktop */}
        <div className="bg-[#F0F0F0] rounded-2xl p-4 sm:p-6 w-full md:w-auto md:max-w-xs lg:max-w-sm hidden md:block">
          <h2 className="text-xs">
            <span className="text-[#2CC295] text-xs">Get notified when we launch</span> our mobile app.
          </h2>
          <div className="flex mt-4 border border-[#DADADA] rounded-full bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-xs rounded-full focus:outline-none"
            />
            <button className="bg-white border-0 rounded-full px-4 py-2 text-xs text-black transition-colors duration-300 hover:text-[#2CC295]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  
    
 
    <div
      className="h-px w-full mt-8"
      style={{
        background: "linear-gradient(to right, #000000 0%, #EEEFF0 50%, #EFEFF1 100%)",
      }}
    ></div>
    

    <div className="flex flex-col gap-3 md:flex-row justify-between items-center mt-6 mb-8 px-2 sm:px-6">
      <h2 className="text-[#909090] text-xs">© 2024 Marmar</h2>
      <h2 className="text-[#909090] text-xs text-center md:text-right">
        Registered at Camburgh House, 27 New Dover Road, Canterbury, CT1 3DN, England
      </h2>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Footer;
