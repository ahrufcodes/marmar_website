"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutHeroSection = () => {
  return (
    <motion.div>
      <motion.div
        className="relative flex items-center justify-center flex-col w-full p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/assets/abouthero.png"
          alt="About Hero"
          width={1000}
          height={1000}
          className="w-[90%] rounded-[27px] object-cover h-[475px] md:h-full"
          priority
        />

        <motion.div
          className="absolute bg-[#F4F8F7] w-[100%] max-w-[312px] md:max-w-[670px] rounded-[16px] px-4 md:px-8 p-4 md:p-8 flex flex-col items-center md:items-start justify-start left-1/2 md:left-[10%] -translate-x-1/2 md:-translate-x-0 top-[38%] md:top-[65%] shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <button className="bg-[#E3555A] text-[8px] md:text-xs px-2 md:px-6 text-[#E8F4F0] text-center md:text-start h-[36px] md:h-[27px] rounded-full">
            MARMAR Medication Alert and Risk Management Application for Rx Safety
          </button>

          <p className="text-[#1C1C1C] text-sm md:text-lg font-medium mt-4 text-center md:text-start">
            MARMAR is an AI-driven platform designed to empower individuals with the knowledge and tools they need to manage their medications safely.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-col mt-[3rem] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <Image
          src="/assets/Pill.png"
          alt="Pill Icon"
          width={150}
          height={150}
          quality={100}
          className="w-auto h-auto max-w-[150px]"
          priority
        />
        <p className="text-[#1C1C1C] text-sm md:text-[25px] font-medium mt-4 max-w-[800px] text-center leading-6 md:leading-8">
          In an era where healthcare challenges are increasingly complex, MARMAR stands as a beacon of innovation and safety. We are not just a platform we are a movement towards a safer, smarter healthcare ecosystem.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutHeroSection;
