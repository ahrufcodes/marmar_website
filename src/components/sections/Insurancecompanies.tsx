"use client";
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { div } from 'motion/react-client';
const Insurancecompanies = () => {
  return (
  <div className='px-8'>


    <div className=" bg-gradient-to-r from-[#042222]  to-[#66B29B]  rounded-xl p-6 md:p-10 text-white w-full flex flex-col md:flex-row justify-between items-center h-auto md:h-[432px] ">

      <div className="max-w-lg space-y-6 text-left text-sm text-[#E8F4F0]">
        <Button className="bg-[#2CC295]  border border-white transition-all duration-300 rounded-[27px] px-6 h-[29px] text-sm font-medium">
          For Insurance Companies
        </Button>
        <h1 className="text-sm md:text-[18px] font-medium w-full md:w-[580px] leading-[1.8rem] ">
          For every 100 members using MARMAR, insurers can potentially
          prevent 3-5 medication-related hospitalizations annually,
          representing an estimated $50,000 - $85,000 in savings per 100 members.
        </h1>

      </div>
      <div className="relative max-w-[50%]  md:max-w-[100%] mr-[1px] md:mr-[6rem]">
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
    </div>
  )
}

export default Insurancecompanies
