"use client";
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
const Insurancecompanies = () => {
  return (
    <div className=" isolate bg-gradient-to-r from-[#042222] to-[#66B29B] bg-cover bg-center bg-no-repeat p-6 md:p-10 text-white w-full flex flex-col md:flex-row justify-between items-center h-auto md:h-[432px] ">

      <div className="max-w-lg space-y-6 text-left text-sm text-[#E8F4F0]">
        <Button className="bg-[#2CC295]  border border-white transition-all duration-300 rounded-[27px] px-6 h-[29px] text-sm font-medium">
          For Insurance Companies
        </Button>
        <h1 className="text-lg md:text-lg font-medium w-full md:w-[580px] leading-[2.2rem]">
          For every 100 members using MARMAR, insurers can potentially
          prevent 3-5 medication-related hospitalizations annually,
          representing an estimated $50,000 - $85,000 in savings per 100 members.
        </h1>

      </div>
      <div className="relative w-[1000px]  max-w-[13%]">
      <Image 
    src="/assets/socials.svg" 
    alt="Socials Icon" 
    width={1000} 
    height={1000} 
    className="w-full h-full object-cover relative" 
    priority 
  />
  <Image 
    src="/assets/InsuranceCompany.svg" 
    alt="Insurance Company Icon" 
    width={1000} 
    height={1000} 
    className="w-full h-full object-contain  top-[2rem] absolute" 
    priority 
  />
  

</div>



    </div>

  )
}

export default Insurancecompanies
