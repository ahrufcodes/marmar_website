"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Upload, MoveLeft, RotateCcw, Share2, AlertTriangle, Activity, AlertCircle, Clock, ExternalLink, Download } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openItem, setOpenItem] = useState<string | null>("Symptoms");
  
  const faqData = [
    {
      id: "detail-explanation",
      question: "Detailed Explanation",
      answer:
        "Tramadol, an opioid analgesic, can increase the risk of hypoglycemia when used with Lantus, a long-acting insulin. Omeprazole, a proton pump inhibitor, may increase the absorption of Tramadol, potentially leading to increased side effects. Additionally, Lantus can cause hypokalemia, which may be exacerbated by Omeprazole.",
      bgColor: "bg-[#E8F4F0]",
      icon: <svg className="w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5v14h14V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9h6M9 12h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
    },
    {
      id: "general-advice",
      question: "General Advice",
      answer:
        "Regular monitoring of blood glucose levels, kidney function, and signs of hypokalemia is crucial. Patients should also be aware of the potential for increased Tramadol side effects, such as dizziness and somnolence, and take precautions to avoid accidents.",
      bgColor: "bg-[#E8F4F0]"
    },
    {
      id: "symptoms",
      question: "Symptoms",
      answer: (
        <>
          <div className="space-y-6">
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 bg-green-100 text-green-800">
                <Activity className="w-4 h-4" />
                <span className="ml-2">Expected</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">These are normal reactions that most people experience with these medications.</p>
              <div className="space-y-2">
                {[
                  { name: "Dizziness", duration: "First week of treatment" },
                  { name: "Nausea and vomiting", duration: "First few days of treatment" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-green-50">
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 bg-yellow-100 text-yellow-800">
                <AlertCircle className="w-4 h-4" />
                <span className="ml-2">Monitoring Needed</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Symptoms or body measurements that need regular checking.</p>
              <div className="space-y-2">
                {[
                  { name: "Blood glucose levels", frequency: "Daily" },
                  { name: "Kidney function", frequency: "Every 6 months" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-yellow-50">
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Activity className="w-4 h-4 mr-1" />
                        <span>{item.frequency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 bg-red-100 text-red-800">
                <AlertTriangle className="w-4 h-4" />
                <span className="ml-2">Concerning</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">These are unusual or severe reactions that need medical attention.</p>
              <div className="space-y-2">
                {[
                  { name: "Hypoglycemia", action: "Seek immediate medical attention if symptoms occur, such as confusion, shakiness, or loss of consciousness" },
                  { name: "Seizures", action: "Seek immediate medical attention if seizures occur" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-red-50">
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="flex items-center text-sm text-red-500 mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span>{item.action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ),
      bgColor: "bg-[#E8F4F0]",
      icon: <Activity className="w-5 h-5 mr-2" />
    },
    {
      id: "tailored-advice",
      question: "Tailored Advice",
      answer:
        "Given the patient's middle adult age, average weight, and above-average height, it is essential to maintain a healthy lifestyle, including a balanced diet and regular exercise, to manage Type 2 Diabetes and reduce the risk of complications. The patient should also be cautious when taking Tramadol, as its sedative effects may be more pronounced in this age group.",
      bgColor: "bg-white",
      icon: <Activity className="w-5 h-5 mr-2" />
    },
    {
      id: "pharmacological-explanation",
      question: "Pharmacological Explanation",
      answer: (
        <div className="space-y-4">
          {[
            { explanation: "The combination of Tramadol and Lantus can increase the risk of hypoglycemia due to the synergistic effects of Tramadol on insulin secretion and Lantus on glucose metabolism.", referenceIndex: 0 },
            { explanation: "Omeprazole can increase the absorption of Tramadol by inhibiting the cytochrome P450 2D6 enzyme, leading to increased Tramadol plasma concentrations.", referenceIndex: 1 }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#66B29B] text-white flex items-center justify-center text-sm font-medium cursor-pointer">
                {item.referenceIndex + 1}
              </div>
              <p className="text-gray-700">{item.explanation}</p>
            </div>
          ))}
        </div>
      ),
      bgColor: "bg-white",
      icon: <svg className="w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5v14h14V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9h6M9 12h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
    },
    {
      id: "references",
      question: "References",
      answer: (
        <>
          <div className="space-y-4">
            {[
              { citation: "Lal R, et al. (2018). Tramadol and insulin: a review of the literature. Journal of Clinical Pharmacology, 58(10), 1231-1238.", url: "#", source: "PubMed" },
              { citation: "Flockhart DA, et al. (2009). P450 drug interaction table. Indiana University School of Medicine.", url: "#", source: "Clinical Guidelines" }
            ].map((reference, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image src="/assets/systemImage.svg" alt="PubMed" width={20} height={20} />
                    <span className="text-sm font-medium text-gray-700">Reference {index + 1}</span>
                  </div>
                  <a 
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66B29B] hover:text-[#4B8F7B] flex items-center space-x-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Source</span>
                  </a>
                </div>
                <p className="mt-2 text-sm text-gray-600">{reference.citation}</p>
              </div>
            ))}
          </div>
        </>
      ),
      bgColor: "bg-white",
      icon: <svg className="w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
    },
    {
      id: "alternative-medication",
      question: "Alternative Medications",
      answer: (
        <>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium flex items-center">
                <span className="mr-2">💊</span>
                Tapentadol
              </div>
              <p className="text-sm text-gray-600 mt-1">Tapentadol may be a suitable alternative to Tramadol, as it has a lower risk of seizures and hypoglycemia.</p>
            </div>
          </div>
        </>
      ),
      bgColor: "bg-white",
      icon: <span className="mr-2 text-lg">💊</span>
    },
    {
      id: "dietary-precaution",
      question: "Dietary Precautions",
      answer: (
        <>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium flex items-center">
                <span className="mr-2">🥣</span>
                Grapefruit juice
              </div>
              <p className="text-sm text-gray-600 mt-1">Grapefruit juice can increase the plasma concentrations of Tramadol by inhibiting the cytochrome P450 3A4 enzyme.</p>
            </div>
          </div>
        </>
      ),
      bgColor: "bg-white",
      icon: <span className="mr-2 text-lg">🍽️</span>
    },
    {
      id: "medical-disclaimer",
      question: "Official Medical Disclaimer",
      answer: "MARMAR, in its capacity as a digital health information platform, is designed to augment medication management practices. However, it is imperative to understand that MARMAR does not serve as a substitute for professional medical counsel, clinical diagnosis, or therapeutic intervention.",
      bgColor: "bg-white",
      isWarning: true,
      icon: <AlertTriangle className="w-5 h-5 mr-2" />
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
          className="bg-white md:p-6 md:border md:rounded-2xl py-[2rem] shadow-lg"
        >
          <motion.div className="mb-4 flex items-center">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium bg-[#EBB305]">
              <span className="hidden sm:inline">INTERACTION RISK LEVEL: MODERATE</span>
              <span className="sm:hidden">RISK: MODERATE</span>
            </span>
            <div className="ml-auto">
              <Upload className="cursor-pointer text-[#2CC295]" />
            </div>
          </motion.div>

          <motion.div variants={imageVariants} className="flex items-center mb-4">
            <Image src="/assets/Pill.png" alt="Marmar" width={28} height={28} />
            <span className="ml-2 text-gray-500 text-sm">{new Date().toLocaleString()}</span>
          </motion.div>
          
          <motion.p variants={textVariants} className="mb-4 text-gray-700 text-sm">
            This is a sample history of a 58-year-old male with Type 2 diabetes, chronic lower back pain, and GERD. He takes Tramadol 50mg twice daily for pain management, Omeprazole 20mg once daily for acid reflux, and Lantus (insulin glargine) 20 units at bedtime for diabetes control. The patient weighs 82 kg, stands 175 cm tall, and has no known drug allergies.
          </motion.p>
          
          <div className="space-y-2 mt-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className={`rounded-lg overflow-hidden border ${
                  item.isWarning
                    ? 'bg-[#E3555A] border-[#E3555A]'
                    : 'bg-[#E8F4F0] border-[#909090] border-opacity-20'
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full text-left px-4 py-3 font-medium flex justify-between items-center text-sm ${
                    item.isWarning ? 'text-white' : 'text-black'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66B29B]`}
                  aria-expanded={openItem === item.id}
                  aria-controls={`section-${index}`}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openItem === item.id ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      id={`section-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${
                        item.isWarning ? 'bg-[#FFEEEE] text-black' : 'bg-white'
                      }`}
                    >
                      <div className="px-4 py-4 text-sm text-gray-800">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="flex gap-4 items-center mt-6">
            <MoveLeft className="cursor-pointer transition-colors w-5 h-6 text-[#909090]" />
            <RotateCcw className="cursor-pointer transition-colors w-5 h-6 text-[#909090]" />
            <Share2 className="cursor-pointer transition-colors w-5 h-6 text-[#909090]" />
            <Download className="cursor-pointer transition-colors w-5 h-6 text-[#909090] ml-auto" />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Faq;