"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";

const GetStartedToday = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardItems = [
    {
      number: 1,
      title: "Medication Details",
      description:
        "Enter your current medications and supplements. Our AI understands even complex combinations, ensuring nothing is missed in your analysis.",
    },
    {
      number: 2,
      title: "Instant Analysis",
      description:
        "Our AI immediately processes your medication list, checking for potential interactions and important considerations.",
    },
    {
      number: 3,
      title: "Clear Results",
      description:
        "Receive easy-to-understand insights about your medications, with important information highlighted for your attention.",
    },
    {
      number: 4,
      title: "Clear Results",
      description:
        "Receive easy-to-understand insights about your medications, with important information highlighted for your attention.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <>
      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <motion.div
            variants={itemVariants}
            className="mt-[3rem] space-y-4 text-center mb-8 md:text-left"
          >
            <motion.div variants={itemVariants}>
              <Button className="bg-[#2CC295] rounded-[27px] w-[206px]">
                Get Started Today
              </Button>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-[#131313] font-semibold text-[2rem] max-w-[372px]"
            >
              Medication Analysis Made Crystal Clear
            </motion.h1>
            <motion.p variants={itemVariants} className="text-[#606060] m-0">
              From complex interactions to clear insights in seconds, powered by
              advanced AI.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 md:hidden"
          >
            {cardItems.map((item, index) => (
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                key={index}
                className={`bg-[#E8F4F0] pt-8 pb-6  px-4  relative ${
                  index === 0 ? "rounded-t-3xl" : ""
                } ${
                  index === cardItems.length - 1
                    ? "rounded-b-3xl"
                    : "border-b border-[#2CC295]"
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white text-black rounded-full border-[4px] border-[#2CC295] w-12 h-12 flex items-center justify-center font-semibold">
                    {item.number}
                  </div>
                  <h3 className="text-[#1C1C1C] font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[#5E5E5E] text-center">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardItems.map((item, index) => (
              <motion.div
                variants={containerVariants}
                whileHover="hover"
                key={index}
                className="group bg-white space-y-6 p-6 rounded-lg transition-colors duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center font-semibold rounded-full border-[4px] transition-colors duration-300
                ${
                  index === 0
                    ? "bg-[#2CC295] text-[white] border-[#66B29B]"
                    : "text-black  group-hover:border bg-white group-hover:bg-[#2CC295] group-hover:text-[white] group-hover:border-[#66B29B]"
                }`}
                  >
                    {item.number}
                  </div>
                  <h3
                    className={`font-semibold text-lg transition-colors duration-300
                ${
                  index === 0
                    ? "text-[#2CC295]"
                    : "text-[#042222] group-hover:text-[#2CC295]"
                }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#5E5E5E] group-hover:text-[#5E5E5E] transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default GetStartedToday;
