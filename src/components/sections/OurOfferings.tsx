"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const OurOfferings = () => {
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
    <section ref={ref} className="container mx-auto py-16">
      <div className="text-center">
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button className="bg-[#2CC295] hover:bg-[#25a07c] rounded-full px-8 py-2 mb-4 transition-colors duration-300">
            OUR OFFERING
          </Button>
        </motion.div>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#131313] font-semibold text-2xl md:text-3xl"
        >
          See what we offer
        </motion.h1>
      </div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-[930px] mx-auto"
      >
        {[
          {
            title: "Smart Medication Management in Your Pocket",
            description:
              "Experience the full power of Marmar on your mobile device. Get instant medication analysis, set personalized reminders, and access your detailed medication history anytime, anywhere.",
            image: "/assets/smartmedication.svg",
            imageClass: "w-[455px] h-[300px]",
          },
          {
            title: "Our App",
            description:
              "Our intuitive app combines AI-powered safety checks with easy-to-use features, ensuring you're always just a tap away from medication insights you can trust.",
            image: "/assets/ourapp.svg",
            imageClass: "w-[174px] h-[304px]",
          },
          {
            title: "Protect your time and maximize your income",
            description:
              "Advanced AI analysis of drug interactions and patient-specific factors, transforming complex pharmaceutical data into clear, actionable insights for safer medication management",
            image: "/assets/protecttime.svg",
            imageClass: "w-[445px] h-[387px]",
            fullWidth: true,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            className={`
              bg-[#E8F4F0] border border-[#F0F0F0] rounded-3xl py-4 px-8 
              ${item.fullWidth ? "md:col-span-2 mx-auto" : ""}
            `}
          >
            <div
              className={`
              flex flex-col items-center justify-between h-full 
              ${item.fullWidth ? "lg:flex-row" : ""}
              text-left gap-7
            `}
            >
              <div>
                <motion.h3
                  variants={textVariants}
                  className="text-[#1C1C1C] font-semibold text-[1.3rem] mt-8"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className="text-[#5E5E5E] mt-2"
                >
                  {item.description}
                </motion.p>
              </div>
              <motion.div
                variants={imageVariants}
                className="w-full h-full flex justify-center"
              >
                <Image
                  src={item.image}
                  alt="image"
                  width={20}
                  height={48}
                  className={item.imageClass}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurOfferings;
