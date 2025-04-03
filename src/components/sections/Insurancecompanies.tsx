"use client";
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
const Insurancecompanies = () => {
  return (
    <div className=" isolate bg-gradient-to-r from-[#042222] to-[#66B29B] bg-cover bg-center bg-no-repeat p-6 md:p-10 text-white w-full flex flex-col md:flex-row justify-between items-center h-auto md:h-[432px] ">

      <div className="max-w-lg space-y-6 text-left text-sm text-[#E8F4F0]">
        <Button className="bg-[#2CC295] hover:bg-[#1E9A7C] border border-white transition-all duration-300 rounded-[27px] px-6 py-3 text-sm font-medium">
          For Insurance Companies
        </Button>
        <h1 className="text-lg md:text-lg font-medium w-full md:w-[580px] leading-[2.2rem]">
          For every 100 members using MARMAR, insurers can potentially
          prevent 3-5 medication-related hospitalizations annually,
          representing an estimated $50,000 - $85,000 in savings per 100 members.
        </h1>

      </div>
      <Image src="/assets/pill.svg" alt="Medication Icon" width={100} height={100} className="w-24 h-24 md:w-32 md:h-32" />

    </div>

  )
}

export default Insurancecompanies
