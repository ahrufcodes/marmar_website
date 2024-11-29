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
        className="space-y-6 mt-4 md:flex justify-between px-10 items-center"
      >
        <motion.div
          variants={textVariants}
          className="text-center md:text-left max-w-[700px]"
        >
          <motion.h1
            variants={textVariants}
            className="text-[#131313] font-semibold text-[1.5rem] md:text-[2.5rem] lg:mt-[-5rem]"
          >
            Peace of Mind with Every Prescription
          </motion.h1>
          <motion.p variants={textVariants} className="text-[#606060] mt-4">
            Experience the confidence that comes from truly understanding your
            medications. Instant AI analysis makes complex interactions clear
            and simple.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="flex gap-3 mx-auto mt-5 justify-center items-center md:justify-start"
          >
            <Button className="bg-[#2CC295] hover:bg-[#446259] ">
              Check Your Medication <ChevronRight />
            </Button>
            <Button className="bg-white text-[#131313] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:bg-slate-600 rounded-md">
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={imageVariants} className="mt-6 md:mt-0">
          <Image
            src="/assets/herosectionimage.svg"
            alt="image"
            width={400}
            height={600}
            className="w-full h-auto md:w-[400px] lg:w-[663px] object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="space-y-2 mx-auto text-center mt-[2rem] flex flex-col justify-center items-center md:text-left md:items-start"
      >
        <h2 className="text-[#606060]">Supported By</h2>
        <Image
          src="/assets/supportslogo.svg"
          alt="image"
          width={65}
          height={36}
          className="w-full max-w-[200px] md:h-[40px]"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
