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
        "Tramadol and Omeprazole interact through the CYP2D6 enzyme system. Omeprazole can inhibit this enzyme, potentially increasing Tramadol levels in your bloodstream by 30-50%. This may enhance pain relief but also increases the risk of side effects like drowsiness, dizziness, and constipation. The interaction is classified as moderate because it requires monitoring but rarely causes severe outcomes in most patients. Lantus (insulin glargine) works through a different metabolic pathway and doesn't directly interact with either medication, but your diabetes management requires careful attention since pain medications and potential side effects can affect eating patterns and glucose control.",
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
        "Take all medications exactly as prescribed, paying attention to timing. Tramadol should be taken with food to reduce stomach upset. Omeprazole works best when taken 30-60 minutes before the first meal of the day. Monitor your blood sugar more frequently when starting or adjusting any medication. Keep a symptom diary to track any side effects and share this with your healthcare provider. Don't suddenly stop taking any of these medications without consulting your doctor, as this could lead to withdrawal symptoms or return of underlying conditions. Always inform all healthcare providers about your complete medication list, including over-the-counter drugs and supplements.",
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
                  { name: "Drowsiness", duration: "First 2-3 days, usually improves as your body adjusts" },
                  { name: "Mild nausea", duration: "First week, take medication with food to minimize" },
                  { name: "Dry mouth", duration: "Ongoing, can be managed with sugar-free candies or regular water intake" }
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
                  { name: "Blood glucose levels", frequency: "Check 4 times daily, target range 80-130 mg/dL before meals" },
                  { name: "Pain levels", frequency: "Track daily using 0-10 scale, report if consistently above 5" },
                  { name: "Digestive comfort", frequency: "Note any changes in bowel habits or persistent stomach pain" }
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
                  { name: "Severe drowsiness or confusion", action: "Seek immediate medical attention" },
                  { name: "Difficulty breathing or unusually slow breathing", action: "Emergency - call 911" },
                  { name: "Hypoglycemia symptoms: sweating, shakiness, extreme hunger", action: "Check blood sugar and follow your low blood sugar protocol" }
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
        "Based on your profile as someone managing both diabetes and pain, consider taking Tramadol after measuring your blood sugar to ensure you're not experiencing hypoglycemia, which could compound drowsiness side effects. Monitor your blood glucose more frequently during the first week of this medication combination. If you experience increased drowsiness, avoid driving or operating machinery. Your age also makes you more susceptible to medication side effects, so start with the lowest effective dose of Tramadol. Consider working with a diabetes educator to adjust meal timing around your medications for optimal control. Keep glucose tablets or a quick source of sugar available in case pain affects your normal eating schedule.",
      bgColor: "bg-white",
      icon: <Activity className="w-5 h-5 mr-2" />
    },
    {
      id: "pharmacological-explanation",
      question: "Pharmacological Explanation",
      answer: (
        <div className="space-y-4">
          {[
            { explanation: "Tramadol is metabolized primarily through the CYP2D6 enzyme into its active metabolite O-desmethyltramadol, which provides much of its pain-relieving effect by binding to μ-opioid receptors and inhibiting serotonin and norepinephrine reuptake.", referenceIndex: 0 },
            { explanation: "Omeprazole is a proton pump inhibitor that irreversibly binds to the H+/K+ ATPase enzyme, reducing stomach acid production. However, Omeprazole is also a moderate inhibitor of CYP2D6, which reduces the conversion of Tramadol to its active metabolite while simultaneously slowing the clearance of the parent compound.", referenceIndex: 1 },
            { explanation: "Lantus (insulin glargine) works independently of hepatic metabolism, forming microprecipitates in subcutaneous tissue and releasing insulin slowly over 24 hours to regulate glucose metabolism.", referenceIndex: 2 }
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
              { citation: "Gjestad C, Westin AA, Skogvoll E, Spigset O. \"Effect of proton pump inhibitors on the serum concentrations of the selective serotonin reuptake inhibitors citalopram, escitalopram, and sertraline.\" Ther Drug Monit. 2015;37(1):90-97.", url: "https://pubmed.ncbi.nlm.nih.gov/25162786/", source: "PubMed" },
              { citation: "Hernandez-Lopez C, Martinez-Farnos L, Karhu D, et al. \"Comparative effects of omeprazole and pantoprazole on the pharmacokinetics and pharmacodynamics of tramadol in healthy subjects.\" Drugs R D. 2017;17(1):103-111.", url: "https://pubmed.ncbi.nlm.nih.gov/28063040/", source: "PubMed" },
              { citation: "American Diabetes Association. \"Standards of Medical Care in Diabetes.\" Diabetes Care. 2023;46(Supplement 1).", url: "#", source: "Clinical Guidelines" }
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
                Acetaminophen (Tylenol)
              </div>
              <p className="text-sm text-gray-600 mt-1">This non-opioid pain reliever doesn&apos;t interact significantly with Omeprazole and poses less risk of respiratory depression. It&apos;s suitable for moderate pain and has minimal impact on blood glucose control. Maximum daily dose should not exceed 3,000mg.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium flex items-center">
                <span className="mr-2">💊</span>
                Famotidine (Pepcid)
              </div>
              <p className="text-sm text-gray-600 mt-1">This H2 receptor antagonist can be an alternative to Omeprazole for acid reduction with fewer drug interactions. It has minimal effect on CYP enzymes and may be safer for patients on multiple medications while still providing effective acid suppression for most patients.</p>
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
                <span className="mr-2">🍷</span>
                Alcohol
              </div>
              <p className="text-sm text-gray-600 mt-1">Avoid completely while taking Tramadol as this combination significantly increases risk of drowsiness, dizziness, and potentially dangerous respiratory depression.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium flex items-center">
                <span className="mr-2">🍊</span>
                Grapefruit Juice
              </div>
              <p className="text-sm text-gray-600 mt-1">Limit consumption as it can inhibit CYP enzymes, potentially increasing Tramadol levels in your bloodstream.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium flex items-center">
                <span className="mr-2">🍽️</span>
                Carbohydrate Timing
              </div>
              <p className="text-sm text-gray-600 mt-1">Maintain consistent carbohydrate intake with meals to help manage blood glucose levels while using Lantus. Avoid skipping meals, especially if experiencing nausea from medications.</p>
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
      answer: "This information is provided for educational purposes only and is not intended as medical advice. Always consult with your healthcare provider before making any changes to your medication regimen. The analysis provided is based on general medical knowledge and may not account for all individual factors that could affect your specific situation.",
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
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium bg-red-500">
              <span className="hidden sm:inline">INTERACTION RISK LEVEL: </span>
              <span className="sm:hidden">RISK: </span>
              SEVERE
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
            There is a moderate risk of interaction between Tramadol, a pain
            reliever, and Omeprazole, a medication for stomach acid. This
            interaction may increase the levels of Tramadol in your body,
            potentially leading to more side effects. Lantus, a long-acting
            insulin, does not have significant interactions with the other two
            medications but needs to be monitored closely due to your diabetes.
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