"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const EmpoweringSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardItems = [
    {
      number: 1,
      imageName: "/assets/bulb.png",
      title: "Seamless Integration",
      description:
        "Our flexible API connects effortlessly with your existing EHR infrastructure, adding powerful medication safety features without disrupting workflows.",
    },
    {
      number: 2,
      imageName: "/assets/featured.png",
      title: "Enhanced Clinical Decision Support",
      description:
        "Provide clinicians with real-time medication interaction alerts and evidence-based recommendations at the point of care.",
    },
    {
      number: 3,
      imageName: "/assets/shields.png",
      title: "Improved Patient Outcomes",
      description:
        "Help providers identify and prevent potential adverse drug events before they occur, enhancing patient safety and satisfaction",
    },
    {
      number: 4,
      imageName: "/assets/bulb.png",
      title: "Regulatory Compliance",
      description:
        "Support your healthcare clients' medication safety initiatives and help them meet quality measures related to medication management",
    },
  ];

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
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <section ref={ref} className="mt-16 mb-16 text-center md:text-left">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-hidden max-w-[1400px] h-full px-4 sm:px-5 mx-auto"
      >
        <motion.div
          variants={textVariants}
          className="mt-12 space-y-4  mb-10 text-left w-full  "
        >
          <motion.div variants={textVariants}>
            <Button className="bg-[#2CC295]  rounded-full px-6  h-[29px] text-sm font-medium transition-colors duration-300">
              FOR EHR COMPANIES
            </Button>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-[#131313] font-medium text-2xl md:text-3xl md:w-[500px]"
          >
            Enhance Your EHR Platform with Medication Intelligence
          </motion.h1>

          <motion.p variants={textVariants} className="text-[#606060] text-sm md:text-base m-0 md:w-[600px]">
            Integrate MARMAR's advanced medication analysis capabilities directly into your EHR system to provide unprecedented value to healthcare providers and their patients.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={textVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {cardItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-start "
            >
              <div className=" rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Image
                    src={item.imageName}
                    alt="image"
                    width={20}
                    height={48}
                  />
              </div>
              <h3 className="text-[#042222] font-medium text-[20px] mb-3">
                     {item.title}
                   </h3>
                   <p className="text-[#042222] text-start  text-[16px]">
                     {item.description}
                   </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={textVariants}
          className="mt-12 flex justify-start"
        >
          <Button className="bg-[#E3555A] text-white rounded-sm shadow-md font-medium ">
            Schedule a Demo for EHR Integration
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmpoweringSection;