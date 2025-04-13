import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const Footer = () => {
  return (
    <>
      <div className="">
        <div className="px-8 md:px-6 rounded-lg">

       
         <div
          className="bg-gradient-to-r from-[#66B29B] to-[#042222] rounded-[24px] p-6 md:p-4 text-center space-y-6 md:space-y-8 w-full flex flex-col justify-center items-center h-auto md:h-[432px] shadow-md" >
          <h1 className="text-[1.5rem] md:text-[2rem] text-white">
            Take Control of your health Today!
          </h1>
          <h3 className="text-white text-[0.875rem] md:text-[1rem] px-2">
            Because Understanding your medications shouldn&apos;t be complicated.
          </h3>
          <a href="https://app.marmar.life/" target="_blank">
            <Button className="bg-white text-[#000000] mt-2">Get Started Now</Button>
          </a>
        </div>
        </div>

        {/* Main Footer Section */}
        <div className="px-8 sm:px-6 rounded-lg">
          <div className="mt-6 sm:mt-12 py-6 sm:py-8 bg-white rounded-[24px] px-4 md:px-8 lg:px-12 shadow-md">
            {/* Main Footer Content - Desktop: 4 horizontal columns, Mobile: stacked */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start md:space-x-12 lg:space-x-20">
              {/* Logo Section - Column 1 */}
              <div className="mb-6 md:mb-0 md:flex-shrink-0">
                <Image
                  src="/assets/footerlogo.png"
                  alt="Marmar logo"
                  width={50}
                  height={41}
                />
              </div>
              
              {/* Mobile layout for Company and Research columns */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0 md:hidden">
                {/* Company Links Column */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs text-[#131313] font-medium mb-1">Company</span>
                  <a href="#" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">About</a>
                  <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Our Approach</span>
                  <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Blog</span>
                  <a href="https://www.instagram.com/marmarapp?igsh=MXE4NjB5czB1bjh1bg" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">Instagram</a>
                  <a href="https://x.com/Marmarapp" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">Twitter (X)</a>
                  <a href="https://www.linkedin.com/company/marmarapp/" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">LinkedIn</a>
                </div>
                
                {/* Research Links Column */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs text-[#131313] font-medium mb-1">Research</span>
                  <a href="#" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">DrugFormDB</a>
                  <a href="https://cohere.com/events/cohere-for-ai-Ahmad-Rufai-2025" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">Our Founder&apos;s Talk with Cohere For AI</a>
                  <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Model</span>
                  <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Explainability</span>
                </div>
              </div>
              
              {/* Desktop layout - Company Column */}
              <div className="hidden md:flex md:flex-col gap-3">
                <span className="text-xs text-[#131313] font-medium mb-1">Company</span>
                <a href="#" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">About</a>
                <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Our Approach</span>
                <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Blog</span>
                <a href="https://www.instagram.com/marmarapp?igsh=MXE4NjB5czB1bjh1bg" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">Instagram</a>
                <a href="https://x.com/Marmarapp" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">Twitter (X)</a>
                <a href="https://www.linkedin.com/company/marmarapp/" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">LinkedIn</a>
              </div>
              
              {/* Desktop layout - Research Column */}
              <div className="hidden md:flex md:flex-col gap-3">
                <span className="text-xs text-[#131313] font-medium mb-1">Research</span>
                <a href="#" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">DrugFormDB</a>
                <a href="https://cohere.com/events/cohere-for-ai-Ahmad-Rufai-2025" target="_blank" className="text-xs text-[#667085] hover:text-[#2CC295] transition-colors">Our Founder&apos;s Talk with Cohere For AI</a>
                <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Model</span>
                <span className="text-xs text-[#667085] cursor-not-allowed opacity-75">Explainability</span>
              </div>
              
              {/* Newsletter - Column 4 */}
              <div className="bg-[#F4F4F4] rounded-[24px] p-4 sm:p-6 w-full md:w-auto md:max-w-xs mt-6 md:mt-0 md:ml-auto">
                <h2 className="text-xs">
                  <span className="text-[#2CC295] text-xs">Get notified when we launch our app.</span> our mobile app.
                </h2>
                <div className="flex mt-4 border border-[#DADADA] rounded-full bg-white">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-3 py-2 text-xs rounded-full focus:outline-none"
                  />
                  <button className="bg-white border-0 rounded-full px-4 py-2 text-xs text-black transition-colors duration-300 hover:text-[#2CC295]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          
            <div
              className="h-px w-full my-8"
              style={{
                background: "linear-gradient(to right, #000000 0%, #EEEFF0 50%, #EFEFF1 100%)",
              }}
            ></div>
            
            {/* Footer Bottom */}
            <div className="flex flex-col gap-3 md:flex-row justify-between items-center mt-6 mb-4 px-2">
              <h2 className="text-[#909090] text-xs">© 2025 Marmar</h2>
              <h2 className="text-[#909090] text-xs text-center md:text-right">
                MARMAR is a child company of AHRUF Technologies. All rights reserved
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
