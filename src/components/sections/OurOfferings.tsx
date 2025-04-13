"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from 'lucide-react';

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
    <section ref={ref} className="container mx-auto py-16 px-4 sm:px-8 max-w-[1400px] h-full">
      <div className="text-left">
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button className="bg-[#2CC295]  rounded-full px-8 h-[29px] text-xs mb-4 transition-colors duration-300">
            OUR OFFERING
          </Button>
        </motion.div>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#131313] font-medium text-2xl md:text-3xl md:w-[640px]" >
          Medication safety solutions tailored for every stakeholder in the healthcare journey.
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm text-[#5E5E5E] md:w-[640px] mt-4 text-[16px] leading-6"
        >
          Tailored medication safety solutions for everyone in the healthcare ecosystem.
          From individual users to healthcare providers and insurance companies, MARMAR delivers specialized tools to prevent medication errors and improve outcomes.
        </motion.p>
      </div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-auto"
      >
        {[
          {
            title: "Smart Medication Management in Your Pocket",
            description:
              "Experience the full power of Marmar on your mobile device. Get instant medication analysis, set personalized reminders, and access your detailed medication history anytime, anywhere.",
            image: "/assets/smartmedication.svg",
            imageClass: "w-full max-w-[455px] h-auto object-contain",
          },
          {
            title: "Our App",
            description:
              "Our intuitive app combines AI-powered safety checks with easy-to-use features, ensuring you&apos;re always just a tap away from medication insights you can trust.",
            images: [
              {
                src: "/assets/ourapp.svg",
                class: "w-full max-w-[174px] h-auto object-contain"
              },
              {
                src: "/assets/ourapp.svg",
                class: "w-full max-w-[174px] h-auto object-contain"
              },
              {
                src: "/assets/ourapp.svg",
                class: "w-full max-w-[174px] h-auto object-contain"
              }
            ],
            hasMultipleImages: true
          },
          {
            title: "Protect your time and maximize your income",
            description:
              "For healthcare professionals, MARMAR transforms complex pharmaceutical data into actionable clinical insights. Our advanced AI analyzes drug interactions and patient-specific factors in seconds, helping you make more informed prescribing decisions, reduce medication errors, and improve patient outcomes—all while streamlining your workflow",
            image: "/assets/protecttime.svg",
            imageClass: "w-full max-w-[445px] h-auto object-contain",
            fullWidth: true,
            showButton: true,
            buttonText: "Let's help talk to your workplace about MARMAR ",
            buttonClass: "bg-[#E3555A] text-white rounded-sm shadow-md font-medium ",
            icon: true,
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
                 p-[0.5px] rounded-[30px] bg-gradient-to-r from-[#042222]  to-[#66B29B]
       min-h-[100%] w-full
    ${item.fullWidth ? "md:col-span-2" : ""}
            `}
          >
            <div
              className={`
              flex flex-col ${item.fullWidth ? "lg:flex-row" : ""} 
      items-center justify-between h-full w-full
      bg-[#E8F4F0] rounded-[30px] py-4 px-4 sm:px-8
      text-left gap-4 sm:gap-7
            `}
            >
              <div className={`${item.fullWidth ? "lg:max-w-[50%]" : "w-full"}`}>
                <motion.h3
                  variants={textVariants}
                  className="text-[#1C1C1C] font-medium text-[16px]  lg:text-[20px] mt-4 sm:mt-8"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className="text-[#1C1C1C] text-[14px] lg:text-[14px] mt-4"
                >
                  {item.description}
                </motion.p>
                {item.showButton && (
                  <motion.div
                    variants={buttonVariants}
                    className="mt-4"
                  >
                    <Button className={`${item.buttonClass}hidden lg:flex text-xs  items-center space-x-1 mb-4`}>
                      <span>{item.buttonText}</span>
                      {item.icon && <ChevronRight className="w-4 h-4" />}
                    </Button>
                  </motion.div>
                )}
              </div>

              {item.hasMultipleImages ? (
                <motion.div
                  variants={imageVariants}
                  className="w-full grid grid-cols-3 gap-2 place-items-center mt-4 lg:mt-0"
                >
                  {item.images.map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={img.src}
                      alt={`app image ${imgIndex + 1}`}
                      width={174}
                      height={304}
                      className={img.class}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={imageVariants}
                  className="w-full flex justify-center"
                >
                  <Image
                    src={item.image ?? "/fallback.svg"} 
                    alt={item.title}
                    width={item.fullWidth ? 445 : 455}
                    height={item.fullWidth ? 387 : 300}
                    className={item.imageClass}
                  />

                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
        <motion.div
  variants={buttonVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="mt-6 lg:hidden w-full flex justify-start "
>
  <Button className="bg-[#E3555A] text-white rounded-sm shadow-md font-medium text-[12px] flex items-center space-x-1 px-2 py-2">
    <span>Let&apos;s help talk to your workplace about MARMAR</span>
    <ChevronRight className="w-4 h-4" />
  </Button>
</motion.div>
      </motion.div>
    </section>
  );
};

export default OurOfferings;