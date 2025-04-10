"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-6 mt-4 md:flex  flex-col  justify-between px-8 items-center"
      >

        <motion.div variants={imageVariants} className="flex items-center justify-center">
          <Image
            src="/assets/Pill.svg"
            alt="image"
            width={400}
            height={600}
            className="md:w-full md:h-auto object-contain w-[134px] h-[134px]"
          />
        </motion.div>
        <motion.div
          variants={textVariants}
          className="text-center  max-w-[1000px] mt-[5rem]"
        >
          <motion.h1 variants={textVariants} className="text-[#131313] font-bold text-[34px] md:text-[64px] leading-9 md:leading-[4rem] ">
            The Medications you take should heal, not harm
            <motion.span
              variants={textVariants}
              className="text-[#E3555A] ml-[0.5rem] md:ml-[1rem]"
            >
              you.
            </motion.span>
          </motion.h1>

          <motion.p variants={textVariants} className="text-[#606060] mt-4 ">
            MARMAR analyzes your medications instantly, alerting you to potential dangers and giving you the power to prevent problems before they start
          </motion.p>

          <motion.div
  variants={buttonVariants}
  className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 px-4 sm:px-0"
>
  {/* Button 1: Gradient Border */}
  <div className="relative w-full md:w-auto p-[1px] rounded-md bg-gradient-to-b from-[#BFD8B3] to-[#339465] group">
    <a href="https://www.mamarhealth.com/"  target="_blank" className="block">
      <Button className="bg-[#2CC295] hover:bg-[#25A07A] w-full md:w-auto rounded-[3px] transition-colors duration-200">
        Check Your Medication Now <ChevronRight className="ml-5" />
      </Button>
    </a>
  </div>

  {/* Button 2: Outline Style */}
  <Button className="w-full md:w-auto bg-white text-[#131313] rounded-md hover:bg-[#f0f0f0] hover:text-black transition duration-200 shadow-[inset_0_0_1px_1px_#4D91E13B]">
    Get Started Now
  </Button>
</motion.div>

        </motion.div>


      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="space-y-2 mx-auto text-center mt-[2rem] flex flex-col justify-center items-center "
      >
        <h2 className="text-[#606060]">Supported & In Partnership With</h2>
        <div className="flex gap-2 justify-center items-center ml-[15px] md:ml-0 ">
          <Image
            src="/assets/microsoft.svg"
            alt="Microsoft"
            width={60}
            height={36}
            className="w-auto max-w-[200px] md:h-[40px]"
          />
          <Image
            src="/assets/health.svg"
            alt="Health"
            width={50}
            height={36}
            className="w-auto max-w-[100px] md:h-[40px]"
          />
          <Image
            src="/assets/playform.svg"
            alt="Platform"
            width={60}
            height={36}
            className="w-auto max-w-[100px] md:h-[40px]"
          />
          <Image
            src="/assets/systemImage.svg"
            alt="System"
            width={50}
            height={36}
            className="w-auto max-w-[50px] md:max-w-[100px] md:h-[40px]"
          />
        </div>

      </motion.div>
    </div>
  );
};

export default HeroSection;
