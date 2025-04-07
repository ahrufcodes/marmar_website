import React from 'react'
import Image from 'next/image'
import { div } from 'motion/react-client'

const AboutHeroSection = () => {
  return (
    <div className=''>
      <div className="relative flex items-center justify-center flex-col w-full p-2">
        <Image
          src="/assets/abouthero.svg"
          alt="About Hero"
          width={1000}
          height={1000}
          className="w-[90%] rounded-[27px] object-cover h-[475px] md:h-full"
          priority
        />
        <div className="absolute bg-[#F4F8F7] w-[100%]  max-w-[312px] md:max-w-[670px] rounded-[16px] px-[4rem]  p-4 md:p-8 flex flex-col items-center md:items-start justify-start left-1/2  xl:left-[35%] -translate-x-1/2 top-[38%] md:top-[44%] shadow-lg">

          <button className="bg-[#E3555A] text-[8px] md:text-xs px-2 md:px-6 text-[#E8F4F0] text-center md:text-start h-[36px]  md:h-[27px] rounded-full ">
            MARMAR Medication Alert and Risk Management Application for Rx Safety
          </button>

          <p className="text-[#1C1C1C] text-sm md:text-lg font-medium mt-4 text-center md:text-start">
            MARMAR is an AI-driven platform designed to empower individuals with the knowledge and tools they need to manage their medications safely.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col mt-[3rem] px-4'>
      <Image
          src="/assets/pill.svg"
          alt="About Hero"
          width={100}
          height={100}
        
          priority
        />
        <p className=' text-[#1C1C1C] text-sm md:text-lg font-medium mt-4 max-w-[800px] text-center'>
        In an era where healthcare challenges are increasingly complex, MARMAR stands as a beacon of innovation and safety. We are not just a platform we are a movement towards a safer, smarter healthcare ecosystem.
        </p>
      </div>


    </div>
  )
}

export default AboutHeroSection
