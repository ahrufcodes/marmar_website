"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MoveUpRight, Upload, MoveLeft, RotateCcw, Share2, Download } from "lucide-react";

import { motion, useInView } from "framer-motion";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const faqData = [
    {
      id: "detail-explanation",
      question: "Detail Explanation",
      answer:
        "Our advanced AI system analyzes your medications by examining their active ingredients, potential interactions, and known side effects. It cross-references this information with current medical databases to provide comprehensive insights about your medication combinations.",
      bgColor: "bg-[#E8F4F0]"
    },
    {
      id: "general-advice",
      question: "General Advice",
      answer:
        "Yes, we take your privacy seriously. All your medical information is encrypted and stored securely following HIPAA guidelines. We never share your personal health information with third parties without your explicit consent.",
      bgColor: "bg-[#E8F4F0]"
    },
    {
      id: "symptoms",
      question: "Symptoms",
      answer:
        "Our AI system is highly accurate and regularly updated with the latest medical research. However, it's designed to be a supplementary tool and should not replace professional medical advice. Always consult with your healthcare provider about your medications.",
      bgColor: "bg-[#E8F4F0]"
    },
    {
      id: "tailored-advice",
      question: "Tailored Advice",
      answer:
        "Yes, our system can analyze both prescription medications and supplements. This comprehensive approach helps identify potential interactions between all your medications and supplements.",
      bgColor: "bg-white"
    },
    {
      id: "pharmacological-explanation",
      question: "Pharmacological Explanation",
      answer: (
        <>
          <p>
            Omeprazole inhibits CYP2D6, an enzyme involved in the metabolism of Tramadol.
            This can increase the plasma concentration of Tramadol, potentially leading to
            increased side effects.
          </p>

          <p className="flex gap-2 items-center mt-2">
            <span>This can increase the plasma</span>
            <span className="border border-[#2CC295] bg-[#E8F4F0] text-[#2CC295] rounded-md px-2 py-1 text-xs font-semibold">
              2
            </span>
            <span>concentration of Tramadol, potentially leading to increased side effects.</span>
          </p>

          <p className="mt-2">
            Lantus (insulin glargine) works by mimicking
            <span className="border border-[#2CC295] bg-[#E8F4F0] text-[#2CC295] rounded-md px-2 py-1 text-xs font-semibold ml-2">
              3
            </span>
          </p>

          <p className="mt-2">
            The body's natural insulin, helping glucose get into cells and thereby
            controlling blood sugar levels.
            <span className="border border-[#2CC295] bg-[#E8F4F0] text-[#2CC295] rounded-md px-2 py-1 text-xs font-semibold ml-2">
              3
            </span>
          </p>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      id: "references",
      question: "References",
      answer: (
        <>
          <span>Below are the references of where the explanations come from for you to read and explore further.</span>

          <div className="mt-3 flex flex-wrap gap-3 items-center justify-start">
            <button className="inline-flex items-center gap-2 border border-[#339465] bg-[#E8F4F0] rounded-full px-4 py-2 shadow-md w-auto min-w-[200px]">
              <Image src="/assets/systemImage.svg" alt="image" width={28} height={28} />
              <span className="text-[#026334] text-[12px] font-medium">ncbi.nlm.gov/pcm....</span>
              <MoveUpRight className="text-[#026334] w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-[#339465] bg-[#E8F4F0] rounded-full px-4 py-2 shadow-md w-auto min-w-[200px]">
              <Image src="/assets/systemImage.svg" alt="image" width={28} height={28} />
              <span className="text-[#026334] text-[12px] font-medium">ncbi.nlm.gov/pcm....</span>
              <MoveUpRight className="text-[#026334] w-4 h-4" />
            </button>
          </div>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      id: "alternative-medication",
      question: "Alternative Medication",
      answer: (
        <>
          <button className="flex mb-4 items-center gap-2 border border-[#339465] bg-[#E8F4F0] rounded-full px-4 py-2 shadow-md w-auto min-w-[200px]">
            <Image src="/assets/Pill.svg" alt="image" width={28} height={28} />
            <span className="text-[#026334] text-sm font-medium">Acetaminophen</span>
          </button>
          <span>If side effects from Tramadol become problematic, your healthcare provider may consider alternative pain relievers that do not interact with Omeprazole, such as Acetaminophen. If blood sugar levels are not well-controlled with Lantus, adjustments in dosage or alternative diabetes medications may be considered.</span>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      id: "dietary-precaution",
      question: "Dietary Precaution",
      answer: (
        <>
          <button className="flex mb-4 items-center gap-2 border border-[#339465] bg-[#E8F4F0] rounded-full px-4 py-2 shadow-md w-auto min-w-[200px]">
            <Image src="/assets/Pill.svg" alt="image" width={28} height={28} />
            <span className="text-[#026334] text-sm font-medium">Alcohol</span>
          </button>
          <span>Avoid alcohol as it can increase the risk of stomach damage from Omeprazole and can also increase the risk of hypoglycemia with Lantus.</span>
        </>
      ),
      bgColor: "bg-white"
    },
    {
      id: "medical-disclaimer",
      question: "Official Medical Disclaimer",
      answer: "This information is provided for educational purposes only and is not intended as medical advice. Always consult with your healthcare provider before making any changes to your medication regimen. The analysis provided is based on general medical knowledge and may not account for all individual factors that could affect your specific situation.",
      bgColor: "bg-white",
      isWarning: true
    }
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

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <div ref={ref}>
      <motion.section
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[1400px] h-full px-5 mx-auto space-y-4 mb-8 bg-white md:bg-[#E8F4F0] md:border md:rounded-lg md:px-8 md:pt-8 md:pb-[5rem]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white md:p-6 md:border md:rounded-lg py-[2rem]"
        >
          <motion.div className="flex justify-between">
            <Button className="bg-[#E3555A] text-white rounded-[27px] h-[29px] px-[4rem] font-bold">
              Interaction Risk Level: Severe
            </Button>
            <Upload className="cursor-pointer text-[#2CC295]" />
          </motion.div>

          <motion.div variants={imageVariants} className="flex gap-3 mt-4">
            <Image src="/assets/Pill.png" alt="image" width={28} height={28} />
            <h2 className="text-[#000000]">10/27/2024, 8:28:38 PM</h2>
          </motion.div>
          <motion.p variants={textVariants} className="text-[#1C1C1C] mt-2">
            There is a moderate risk of interaction between Tramadol, a pain
            reliever, and Omeprazole, a medication for stomach acid. This
            interaction may increase the levels of Tramadol in your body,
            potentially leading to more side effects. Lantus, a long-acting
            insulin, does not have significant interactions with the other two
            medications but needs to be monitored closely due to your diabetes.
          </motion.p>
          
          <div className="space-y-4 mt-4 pb-4">
            {faqData.map((item, index) => (
              <div key={item.id} className="space-y-2">
                <button 
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full border rounded-lg text-left font-medium p-3 flex justify-between items-center ${
                    item.isWarning
                      ? "bg-[#E3555A] text-white border-[#E3555A]"
                      : index < 4
                      ? "bg-[#E8F4F0] border-[#E8F4F0] text-[#131313]"
                      : "bg-white border-gray-200  text-[#131313]"
                  }`}
                >
                  <span>{item.question}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${openItem === item.id ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Separate Content Box */}
                {openItem === item.id && (
                  <div className={`border rounded-lg p-4 ${
                    item.isWarning
                      ? "bg-[#E3555A] text-white border-[#E3555A]"
                      : "bg-white border-gray-200 text-[#666F8D]"
                  }`}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 items-center mt-6">
            
              <MoveLeft className="cursor-pointer transition-colors w-5 h-6 text-[#909090]" />
              <RotateCcw className="cursor-pointer transition-colors w-5 h-6 text-[#909090]" />
              <Share2 className="cursor-pointer transition-colors w-5 h-6 text-[#909090]" />
            </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Faq;