"use client";
import React from "react";
import { Link, Twitter, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

const Blogs = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex justify-between mt-7">
        <ul className="flex flex-col gap-3">
          <li className="text-[#2CC295]">Table of contents</li>
          <li
            className="text-[#5E5E5E] cursor-pointer hover:text-[#2CC295]"
            onClick={() => scrollToSection("introduction")}
          >
            Introduction
          </li>
          <li
            className="text-[#5E5E5E] cursor-pointer hover:text-[#2CC295]"
            onClick={() => scrollToSection("software-tools")}
          >
            Software and tools
          </li>
          <li
            className="text-[#5E5E5E] cursor-pointer hover:text-[#2CC295]"
            onClick={() => scrollToSection("other-resources")}
          >
            Other resources
          </li>
          <li
            className="text-[#5E5E5E] cursor-pointer hover:text-[#2CC295]"
            onClick={() => scrollToSection("conclusions")}
          >
            Conclusion
          </li>
        </ul>
        <p className="text-[#667085] w-[75%] hidden sm:block">
          At Marmar, we've built a sophisticated medication analysis system that
          combines advanced AI technology with comprehensive medical knowledge.
          Here's how we ensure accuracy, reliability, and clarity in every
          analysis
        </p>
      </div>
      <div className="w-[30%] h-[1px] bg-[#EAECF0] my-3"></div>
      <div className="flex gap-4">
        <div className="border border-[#DADADA] p-2 rounded-lg">
          <Link className="w-[18px] h-[18px]" />
        </div>
        <div className="border border-[#DADADA] p-2 rounded-lg">
          <Twitter className="w-[18px] h-[18px] stroke-[#909090] text-[#909090]" />
        </div>
        <div className="border border-[#DADADA] p-2 rounded-lg">
          <Linkedin className="w-[18px] h-[18px]" />
        </div>
        <div className="border border-[#DADADA] p-2 rounded-lg">
          <Facebook className="w-[18px] h-[18px]" />
        </div>
      </div>

      <p className="text-[#667085] my-7 block sm:hidden ">
        At Marmar, we've built a sophisticated medication analysis system that
        combines advanced AI technology with comprehensive medical knowledge.
        Here's how we ensure accuracy, reliability, and clarity in every
        analysis
      </p>

      <div className="mt-8" id="introduction">
        <h1 className="text-[#131313]  font-semibold  text-[1.3rem] md:text-[1.9rem]">
          Introduction
        </h1>
        <p className="text-[#667085] mt-4">
          At Marmar, we've built a sophisticated medication analysis system that
          combines advanced AI technology with comprehensive medical knowledge.
          Here's how we ensure accuracy, reliability, and clarity in every
          analysis
        </p>
        <Image
          src="/assets/introduction.png"
          alt="image"
          width={400}
          height={600}
          className="w-full h-full my-[3rem]"
        />
        <div className="max-w-[698px] flex items-center gap-4 mt-5">
          <div className=" h-[200px] left-1/2 w-[4px] bg-[#6941C6]"></div>
          <div>
            <h2 className="text-[1.3rem] text-[#101828] font-semibold">
              "In a world older and more complete than ours they move finished
              and complete, gifted with extensions of the senses we have lost or
              never attained, living by voices we shall never hear."
            </h2>
            <p className="text-[#667085] mt-4">
              — Olivia Rhye, Product Designer
            </p>
          </div>
        </div>
        <p className="text-[#667085] mt-8">
          Our approach combines technological innovation with unwavering
          commitment to accuracy and user safety. While Marmar represents the
          cutting edge of AI-powered medication analysis, we maintain a clear
          focus on practical, reliable, and understandable results that make a
          real difference in medication management.
        </p>
        <p className="text-[#667085] mt-4">
          Our approach combines technological innovation with unwavering
          commitment to accuracy and user safety. While Marmar represents the
          cutting edge of AI-powered medication analysis, we maintain a clear
          focus on practical, reliable, and understandable results that make a
          real difference in medication management.
        </p>
      </div>

      <div className="mt-[3rem]" id="software-tools">
        <h1 className="text-[#131313]  font-semibold  text-[1.3rem] md:text-[1.9rem]">
          Software and tools
        </h1>
        <p className="text-[#667085] mt-4">
          Our approach combines technological innovation with unwavering
          commitment to accuracy and user safety. While Marmar represents the
          cutting edge of AI-powered medication analysis, we maintain a clear
          focus on practical, reliable, and understandable results that make a
          real difference in medication management.
        </p>
      </div>

      <div className="mt-[3rem]" id="other-resources">
        <h1 className="text-[#131313]  font-semibold  text-[1.3rem] md:text-[1.9rem]">
          Other Resources
        </h1>
        <p className="text-[#667085] mt-2">
          Always Evolving" Our approach to medication safety is dynamic and
          ever-improving:
        </p>
        <div className="mt-3  px-[1.5rem]">
          <ul className="text-[#667085] list-disc  ">
            <li>Regular model updates</li>
            <li>Regular model updates</li>
            <li>Continuous accuracy monitoring</li>
            <li>Healthcare professional feedback integration</li>
            <li>User experience refinement</li>
            <li>Emerging drug information incorporation</li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-[#667085] mt-2">
            Safety First" While Marmar provides advanced AI-powered analysis, we
            maintain clear guidelines:
          </p>
          <div className="mt-3 ">
            <ul className="text-[#667085] list-disc  px-[1.5rem]">
              <li>
                {" "}
                All insights are supplementary to professional medical advice
              </li>
              <li>Clear safety disclaimers and guidance</li>
              <li>Emergency situation protocols</li>
              <li>Healthcare professional feedback integration</li>
              <li>Healthcare provider consultation recommendations</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-[#667085] mt-2">
            Clarity in Communication: We transform complex medical data into:
          </p>
          <div className="mt-3 px-[1.5rem]">
            <ul className="text-[#667085] list-disc ">
              <li>Clear, actionable insights</li>
              <li>Easy-to-understand risk levels</li>
              <li>Emergency situation protocols</li>
              <li>Practical recommendations</li>
              <li>Accessible explanations</li>
              <li>Quick reference summaries</li>
            </ul>
          </div>
        </div>
        <Image
          src="/assets/otherresources.png"
          alt="image"
          width={400}
          height={600}
          className="w-full h-full my-[3rem]"
        />
        <p className="text-[#667085] mt-8">
          Our approach combines technological innovation with unwavering
          commitment to accuracy and user safety. While Marmar represents the
          cutting edge of AI-powered medication analysis, we maintain a clear
          focus on practical, reliable, and understandable results that make a
          real difference in medication management.
        </p>
        <p className="text-[#667085] mt-4">
          Our approach combines technological innovation with unwavering
          commitment to accuracy and user safety. While Marmar represents the
          cutting edge of AI-powered medication analysis, we maintain a clear
          focus on practical, reliable, and understandable results that make a
          real difference in medication management.
        </p>
      </div>

      <div className="mt-[3rem] mb-[15rem]" id="conclusions">
        <div className="bg-[#F9FAFB] rounded-2xl px-[3rem] py-8">
          <h1 className="text-[#131313]  font-semibold  text-[1.3rem] md:text-[1.9rem]">
            Conclusion
          </h1>
          <p className="text-[#667085] mt-7 font-normal">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p className="text-[#667085] mt-7 font-normal">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p className="text-[#667085] mt-7 font-normal">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p className="text-[#667085] mt-7 font-normal">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#EAECF0] mt-[2.5rem]"></div>
        <div className="flex mt-8 gap-4">
          <div className="bg-[#F0F9FF] text-sm text-[#026AA2] px-6 py-2 rounded-[1rem]">
            Product
          </div>
          <div className="bg-[#FDF2FA] text-sm text-[#C11574] px-6  py-2 rounded-[1rem]">
            Tools
          </div>
          <div className="bg-[#FDF2FA] text-sm text-[#C11574] px-6  py-2 rounded-[1rem]">
            Saas
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
