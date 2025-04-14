"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";

const GetStartedToday = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [animationRunning, setAnimationRunning] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef<number>(0);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousDirectionRef = useRef<string | null>(null);

  const cardItems = [
    { number: 1, title: "Medication Details", description: "Enter your current medications and supplements. Our AI understands even complex combinations, ensuring nothing is missed in your analysis." },
    { number: 2, title: "Instant Analysis", description: "Our AI immediately processes your medication list, checking for potential interactions and important considerations." },
    { number: 3, title: "Personalized Insights", description: "Receive clear, easy-to-understand insights about your medications, with important highlights for your attention." },
    { number: 4, title: "Safer Medication Use", description: "Get a personalized medication safety profile, empowering you to take the right steps for better health." },
  ];
 
  const clearAnimationTimer = () => {
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
      animationTimerRef.current = null;
    }
  };

  const runForwardAnimation = useCallback(() => {
    setAnimationRunning(true); 
    clearAnimationTimer();
    setActiveStep(0);

    let step = 0;
    
    animationTimerRef.current = setInterval(() => {
      if (step < cardItems.length - 1) {
        step++;
        setActiveStep(step);
      } else {
        clearAnimationTimer();
        setAnimationRunning(false);
      }
    }, 500);  
    
    previousDirectionRef.current = "down";
  }, [cardItems.length]);

  const runBackwardAnimation = useCallback(() => {
    setAnimationRunning(true)
    clearAnimationTimer();
    setActiveStep(cardItems.length - 1);
  
    let step = cardItems.length - 1;
    
    animationTimerRef.current = setInterval(() => {
      if (step > 0) {
        step--;
        setActiveStep(step);
      } else {
        clearAnimationTimer();
        setAnimationRunning(false);
      }
    }, 2000);
    
    previousDirectionRef.current = "up";
  }, [cardItems.length]);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (!animationRunning) {
        runForwardAnimation();
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [animationRunning, runForwardAnimation]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        
        // Protect window access to avoid SSR issues
        if (typeof window !== "undefined") {
          const currentScrollY = window.scrollY;
          const scrollDirection = currentScrollY > lastScrollYRef.current ? "down" : "up";
          lastScrollYRef.current = currentScrollY;

          if (entry.isIntersecting && !animationRunning) {
            if (scrollDirection === "down" && previousDirectionRef.current !== "down") {
              runForwardAnimation();
            } else if (scrollDirection === "up" && previousDirectionRef.current !== "up") {
              runBackwardAnimation();
            }
          } else if (!entry.isIntersecting) { 
            clearAnimationTimer();
            setAnimationRunning(false);
          }
        }
      },
      { threshold: 0.5 }  
    );
  
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  
    return () => {
      observer.disconnect();
      clearAnimationTimer();
    };
  }, [cardItems.length, animationRunning, runForwardAnimation, runBackwardAnimation]);
  return (
    <div ref={ref}>
      <motion.div
        ref={componentRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-hidden max-w-[1400px] h-full px-5 mx-auto mb-[2rem]"
      >
        <motion.div className="mt-12 space-y-4 text-center mb-8 md:text-left">
          <motion.div>
            <Button className="bg-[#2CC295] rounded-full text-[12px] md:text-md px-6 font-medium text-[#E8F4F0]">
              GET YOUR COMPREHENSIVE ANALYSIS IN SECONDS
            </Button>
          </motion.div>
          <motion.h2 className="text-4xl font-bold tracking-tighter">
            Four Simple Steps To Safer Medication Management
          </motion.h2>
          <motion.p className="mb-4 text-gray-700 text-sm max-w-[550px]">
            Our advanced AI transforms complex pharmacology into actionable insights, giving you a complete understanding of your medication safety profile without the medical jargon.
          </motion.p>
        </motion.div>
        
        {/* Mobile view */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 md:hidden place-items-center bg-[#E8F4F0] px-4 py-8 rounded-[10px]"
        >
          {cardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, y: 30 }}
              animate={
                activeStep !== null && index <= activeStep
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.5, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-[#ffff] pt-8 pb-6 px-4 relative shadow-md rounded-md"
            >
              <div className="flex flex-col items-start space-y-4">
                <div
                  className={`bg-white text-black rounded-full border-4 w-12 h-12 flex items-center justify-center font-semibold text-sm ${
                    activeStep !== null && index <= activeStep ? "border-[#2CC29533]" : "border-gray-300"
                  }`}
                >
                  {item.number}
                </div>
                <h3 className="text-[#1C1C1C] font-medium text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, y: 30 }}
              animate={
                activeStep !== null && index <= activeStep
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.5, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="group space-y-6 p-6 rounded-lg transition-colors duration-300"
            >
              <div className="flex flex-col space-y-4">
                <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-full shadow-xl transition-colors duration-300   
                ${activeStep !== null && index <= activeStep ? "bg-[#2CC295] text-white border-[#66B29B]" : "text-black bg-gray-300 border-gray-400"}`}>
                  {item.number}
                </div>
                <h3 className={`font-bold text-lg transition-colors duration-300 
                  ${activeStep !== null && index <= activeStep ? "text-[#2CC295]" : "text-gray-500"}`}>
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </div>
  );
};

export default GetStartedToday;