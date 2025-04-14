import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Hiring = () => {
  const faqData = [
    {
      number: "01",
      question: "How does the medication analysis work?",
      answer:
        "Our advanced AI system analyzes your medications by examining their active ingredients, potential interactions, and known side effects. It cross-references this information with current medical databases to provide comprehensive insights about your medication combinations.",
    },
    {
      number: "02",
      question: "Is my medical information secure?",
      answer:
        "Yes, we take your privacy seriously. All your medical information is encrypted and stored securely following HIPAA guidelines. We never share your personal health information with third parties without your explicit consent.",
    },
    {
      number: "03",
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI system is highly accurate and regularly updated with the latest medical research. However, it is designed to be a supplementary tool and should not replace professional medical advice. Always consult with your healthcare provider about your medications.",
    },
    {
      number: "04",
      question: "Can I analyze supplements along with medications?",
      answer:
        "Yes, our system can analyze both prescription medications and supplements. This comprehensive approach helps identify potential interactions between all your medications and supplements.",
    },
    {
      number: "05",
      question: "How often should I review my medications?",
      answer:
        "We recommend reviewing your medications whenever there is a change in your prescription or at least every 3-6 months. Regular reviews help ensure your medication regime remains safe and effective as your health needs change.",
    },
  ];
  return (
    <>
      <div className="mt-[8rem]   flex flex-col justify-center items-center mx-auto max-w-[900px] text-center">
        <h2 className="text-[#66B29B] text-[0.9rem] text-center ">
          We are hiring!
        </h2>
        <h1 className="text-[#131313]  font-semibold  text-[1.3rem] md:text-[2rem]">
          Meet our team
        </h1>
        <p className="text-[#606060]  ">
          Our approach combines technological innovation with unwavering
          commitment to accuracy and user safety. While Marmar represents the
          cutting edge of AI-powered medication analysis, we maintain a clear
          focus on practical, reliable, and understandable results that make a
          real difference in medication management.
        </p>
        <div className="mt-[3rem] flex gap-4 flex-col md:flex-row md:gap-[3rem] justify-between  w-full">
          <div className="flex gap-4 flex-col  items-center justify-center">
            <Image
              src="/assets/ceoavatar.svg"
              alt="image"
              width={70}
              height={70}
            />
            <div>
              <h4 className="text-[#101828] text-sm font-semibold">
                Ahmad Rufai
              </h4>
              <span className="text-[#667085] text-sm"> Founder & CEO</span>
            </div>
          </div>
          <div className="flex gap-5 flex-col  items-center justify-center ">
            <Image src="/assets/cto.png" alt="image" width={70} height={70} />
            <div>
              <h4 className="text-[#101828] text-sm font-semibold">Habeeb</h4>
              <span className="text-[#667085] text-sm"> CTO</span>
            </div>
          </div>
          <div className="flex gap-4 flex-col  items-center justify-center">
            <Image
              src="/assets/medicaladvisor.png"
              alt="image"
              width={45}
              height={48}
            />
            <div>
              <h4 className="text-[#101828] text-sm font-semibold">
                Maryam Imran
              </h4>
              <span className="text-[#667085] text-sm"> Medical Advisor</span>
            </div>
          </div>
          <div className="flex gap-4 flex-col  items-center justify-center">
            <Image
              src="/assets/technicaladvisor.png"
              alt="image"
              width={70}
              height={70}
            />
            <div>
              <h4 className="text-[#101828] text-sm font-semibold">
                Maryam Musa
              </h4>
              <span className="text-[#667085] text-sm">Technical Advisor</span>
            </div>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-4 mt-[5rem]">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-[#ffff] border-b  rounded-lg px-4 "
          >
            <AccordionTrigger className="text-left ] text-[#131313] font-medium flex items-center justify-between">
              <div className="flex gap-4">
                <span className="text-[#909090] font-semibold  text-[1.2rem]">
                  {" "}
                  {faq.number}
                </span>
                <h2 className="text-[#1C1C1C] text-[1.2rem] font-semibold">
                  {" "}
                  {faq.question}
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[#fff] p-4 rounded-lg bg-gradient-to-r from-[#66B29B] to-[#042222]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Hiring;
