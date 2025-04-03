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
      imageName:"/assets/bulb.png",
      title: "Lower Healthcare Costs",
      description:
        "Prevent expensive medication-related hospitalizations and emergency department visits through proactive interaction monitoring.",
    },
    {
      number: 2,
      imageName: "/assets/featured.png",
      title: "Improve Member Health Outcomes",
      description:
        "Enhance medication adherence and reduce adverse events among members managing multiple prescriptions.",
    },
    {
      number: 3,
      imageName: "/assets/shields.png",
      title: "Value-Added Member Benefit",
      description:
        "Differentiate your insurance offerings with a cutting-edge digital health tool that members will actually use.",
    },
    {
      number: 4,
      imageName: "/assets/bulb.png",
      title: "Data-Driven Insights",
      description:
        "Gain anonymized, population-level insights into medication safety trends across your member base.",
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
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <section ref={ref} className="mt-[4rem] text-center mb-8 md:text-left">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-hidden max-w-[1400px] h-full px-5 mx-auto"
      >
        <motion.div
          variants={textVariants}
          className="mt-[3rem] space-y-4 mb-8 text-left w-full md:w-[640px] "
        >
          <motion.div variants={textVariants}>
            <Button className="bg-[#2CC295] rounded-[27px] ">
            Reduce Costs, Improve Outcomes for Your Members
            </Button>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-[#131313] font-semibold text-[2rem]" >
          Partner with MARMAR to prevent medication-related hospitalizations
          </motion.h1>

          <motion.p variants={textVariants} className="text-[#606060] m-0">
          Adverse drug events cost insurance providers billions annually in preventable hospitalizations and emergency care. By offering MARMAR to your members, you can proactively identify medication risks before they lead to costly complications.
          </motion.p>
        </motion.div>

     =    <motion.div 
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
                   <h3 className="text-[#042222] font-medium text-lg mb-3">
                     {item.title}
                   </h3>
                   <p className="text-[#5E5E5E] text-start  text-sm">
                     {item.description}
                   </p>
                 </motion.div>
               ))}
             </motion.div>
     
             <motion.div
               variants={textVariants}
               className="mt-12 flex justify-start"
             >
               <Button className="bg-[#E3555A] hover:bg-[#C8444F] text-white rounded-md px-6 py-3 h-auto flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md text-sm md:text-base">
                 Schedule a Demo for EHR Integration
                 <ChevronRight className="w-5 h-5" />
               </Button>
             </motion.div>
           </motion.div>
    </section>
  );
};

export default EmpoweringSection;
