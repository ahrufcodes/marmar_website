import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const EmpoweringSection = () => {
  const cardItems = [
    {
      number: 1,
      imageName: "/assets/search.png",
      title: "Instant Analysis",
      description:
        "Get comprehensive medication interaction checks in seconds, powered by advanced AI that understands complex drug relationships",
    },
    {
      number: 2,
      imageName: "/assets/featured.png",
      title: "Personalized Insights ",
      description:
        "Receive tailored recommendations based on your unique health profile, medications, and specific conditions.",
    },
    {
      number: 3,
      imageName: "/assets/shields.png",
      title: "Safety First",
      description:
        "Make informed decisions with clear risk assessments and detailed explanations of potential interactions",
    },
    {
      number: 4,
      imageName: "/assets/bulb.png",
      title: "Clear Communication ",
      description:
        "Complex medical information translated into straightforward, actionable advice you can trust.",
    },
  ];

  return (
    <section className="mt-[4rem] text-center mb-8 md:text-left">
      <div className="mt-[3rem] space-y-4 text-center mb-8 md:text-left">
        <Button className="bg-[#2CC295] rounded-[27px] w-[206px]">
          Why MarMar
        </Button>
        <h1 className="text-[#131313] font-semibold text-[2rem] ">
          Empowering Your Medication Decisions
        </h1>
        <p className="text-[#606060] m-0">
          Whether you're a healthcare professional or someone managing multiple
          medications, Marmar provides instant, reliable insights that empower
          you to make confident decisions about your health.
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:hidden ">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className={`bg-[#E8F4F0] pt-8 pb-6  px-8  relative ${
              index === 0 ? "rounded-t-3xl" : ""
            } ${
              index === cardItems.length - 1
                ? "rounded-b-3xl"
                : "border-b border-[#2CC295]"
            }`}
          >
            <div className="flex flex-col items-center ">
              <div className="bg-[#ffff] p-4 rounded-lg">
                <Image
                  src={item.imageName}
                  alt="image"
                  width={20}
                  height={48}
                />
              </div>
              <h3 className="text-[#1C1C1C] font-semibold text-lg mt-8">
                {item.title}
              </h3>
              <p className="text-[#5E5E5E] text-center mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid-cols-3 h-[350px] gap-8 lg:grid-cols-4 md:grid  ">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffff] border-[2px] border-[#F0F0F0]  rounded-3xl py-4  px-8"
          >
            <div className="flex flex-col  justify-between h-full ">
              <div className="bg-[#E8F4F0] p-4 rounded-lg w-[48px]">
                <Image
                  src={item.imageName}
                  alt="image"
                  width={20}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-[#1C1C1C] font-semibold text-[1.3rem] mt-8">
                  {item.title}
                </h3>
                <p className="text-[#5E5E5E]  mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpoweringSection;
