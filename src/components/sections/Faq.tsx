import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  const faqData = [
    {
      question: "How does the medication analysis work?",
      answer:
        "Our advanced AI system analyzes your medications by examining their active ingredients, potential interactions, and known side effects. It cross-references this information with current medical databases to provide comprehensive insights about your medication combinations.",
    },
    {
      question: "Is my medical information secure?",
      answer:
        "Yes, we take your privacy seriously. All your medical information is encrypted and stored securely following HIPAA guidelines. We never share your personal health information with third parties without your explicit consent.",
    },
    {
      question: "How accurate is the AI analysis?",
      answer:
        "Our AI system is highly accurate and regularly updated with the latest medical research. However, it's designed to be a supplementary tool and should not replace professional medical advice. Always consult with your healthcare provider about your medications.",
    },
    {
      question: "Can I analyze supplements along with medications?",
      answer:
        "Yes, our system can analyze both prescription medications and supplements. This comprehensive approach helps identify potential interactions between all your medications and supplements.",
    },
    {
      question: "How often should I review my medications?",
      answer:
        "We recommend reviewing your medications whenever there's a change in your prescription or at least every 3-6 months. Regular reviews help ensure your medication regime remains safe and effective as your health needs change.",
    },
  ];
  return (
    <section className="mt-[4rem] space-y-4  mb-8 bg-white md:bg-[#E8F4F0] md:border md:rounded-lg md:px-8 md:pt-8">
      <div className="bg-white md:p-6  md:border md:rounded-lg">
        <Button className="bg-[#E3555A] text-white  rounded-[27px] w-[206px]">
          Interaction Risk Level:Severe
        </Button>
        <div className="flex gap-3 mt-4">
          <Image src="/assets/Pill.png" alt="image" width={28} height={28} />
          <h2 className="text-[#000000] ">10/27/2024, 8:28:38 PM</h2>
        </div>
        <p className="text-[#000000] mt-2">
          There is a moderate risk of interaction between Tramadol, a pain
          reliever, and Omeprazole, a medication for stomach acid. This
          interaction may increase the levels of Tramadol in your body,
          potentially leading to more side effects. Lantus, a long-acting
          insulin, does not have significant interactions with the other two
          medications but needs to be monitored closely due to your diabetes.
        </p>
        <Accordion type="single" collapsible className="space-y-4 mt-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#E8F4F0] border rounded-lg px-4 data-[state=open]:bg-white"
            >
              <AccordionTrigger className="text-left hover:text-[#2CC295] text-[#131313] font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#606060]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
