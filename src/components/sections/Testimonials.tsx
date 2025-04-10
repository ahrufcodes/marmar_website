"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView]);

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

  const testimonials = [
    {
      testimonial:
        "This project is very promising in pharmacy and it will benefit doctors and nurses too. excellent application of technology. continue working on it, it needs more idea refining and integrating it into heathcare system",
      author: "Walaa Nasr Elghitany",
      jobDescription: "Data scientist and doctor",
      bgColor: "bg-[#66B29B]",
    },
    {
      testimonial:
        "Managing multiple medications used to be a constant source of worry for me. With MarMar, I've found peace of mind. The personalized advice and clear information on medication interactions have made a significant difference in my daily life. It feels like having a personal healthcare assistant at my fingertips",
      author: "Lanre",
      jobDescription: "Patient User",
      bgColor: "bg-[#E3555A]",
    },
    {
      testimonial:
        "As a 4th year medical student, Marmar has been helpful and efficient in understanding pharmacology easier, especially in the aspect of drug-drug interactions and side effects of drugs. It's faster and also correlates with what I have in my lecture notes",
      author: "Imran M",
      jobDescription: "Medical Student",
      bgColor: "bg-gradient-to-r from-[#66B29B] to-[#042222]",
    },
  ];

  return (
    <div ref={ref}>
      <motion.section
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="container mx-auto py-16 max-w-[1400px] h-full px-5 "
      >
        <div className="space-y-8">
          <div className="text-center">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Button className="bg-[#2CC295] hover:bg-[#25a07c] rounded-full px-8 h-[29px] mb-4 transition-colors duration-300 textxs">
                Testimonials
              </Button>
            </motion.div>
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[#131313] font-semibold text-2xl md:text-3xl"
            >
              Don't take our word for it
            </motion.h1>
          </div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className={`${item.bgColor} rounded-xl hover:rounded-3xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}

              >
                <div className="flex flex-col justify-between h-full min-h-[320px]">
                  <div>
                    <motion.p
                      variants={textVariants}
                      className="text-[#FEFFF1] font-medium text-lg leading-relaxed"
                    >
                      "{item.testimonial}"
                    </motion.p>
                  </div>
                  <div className="mt-6">
                    <motion.p
                      variants={textVariants}
                      className="text-[#FEFFF1] font-bold text-[1.1rem] mb-1"
                    >
                      {item.author}
                    </motion.p>
                    <motion.p
                      variants={textVariants}
                      className="text-[#042222] font-semibold text-xl"
                    >
                      {item.jobDescription}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;
