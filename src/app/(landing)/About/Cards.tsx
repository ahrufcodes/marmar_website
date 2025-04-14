'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CardContent = string | string[];

interface InfoCardProps {
  imageUrl: string;
  imageAlt: string;
  tagText?: string;
  title: string;
  content: CardContent;
  isReversed?: boolean;
  hideTag?: boolean;
  highlightTitle?: boolean;
  titleClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageUrl,
  imageAlt,
  tagText = "",
  title,
  content,
  isReversed = false,
  hideTag = false,
  highlightTitle = false,
  titleClass
}) => {
  return (
    <motion.div
      className={`flex justify-between gap-8 flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={400}
        className="w-full md:w-2/5 rounded-3xl object-cover"
        priority
      />
      <div
        className={`max-w-[620px] ${
          title === "Collaborations & Joining" ? "text-left mx-auto mt-1 md:mt-[5rem]" : ""
        }`}
      >
        {!hideTag && (
          <button className="bg-[#E3555A] text-xs px-6 text-[#E8F4F0] h-9 md:h-7 rounded-full">
            {tagText}
          </button>
        )}

        <h2 className={`text-[#131313] font-medium text-2xl md:text-3xl ${titleClass}`}>
          {title}
        </h2>

        {typeof content === 'string' ? (
          <p className="mb-4 text-gray-700 text-sm mt-4 leading-6" dangerouslySetInnerHTML={{ __html: content }}></p>
        ) : (
          <ul className="list-none mt-4">
            {content.map((item, index) => {
              const [boldPart, ...rest] = item.split(" - ");
              const restJoined = rest.join(" - ");

              return (
                <li key={index} className="mb-4 text-gray-700 text-sm mt-1 md:mt-4 leading-6 flex items-start">
                  <span className="text-gray-700 mr-2">•</span>
                  <span>
                    {highlightTitle ? <strong>{boldPart}</strong> : boldPart}
                    {restJoined && ` - ${restJoined}`}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Cards: React.FC = () => {
  const cardsData: InfoCardProps[] = [
    {
      imageUrl: "/assets/AboutCard1.png",
      imageAlt: "The Problem",
      tagText: "THE PROBLEM WERE TRYING TO SOLVE",
      title: "One preventable hospitalization happens every 2.7 minutes",
      titleClass: "tracking-tighter",
      content:
        "The silent dangers of adverse drug reactions and medication errors pose a significant threat to patient safety. Inappropriate polypharmacy—the concurrent use of multiple medications without clear clinical justification—affects millions of people, particularly older adults and those with chronic conditions.\n\nMARMAR tackles this challenge head-on by providing real-time, evidence-based analyses of medication combinations, helping users identify potential interactions before they become problems.",
      isReversed: false
    },
    {
      imageUrl: "/assets/AboutCard2.png",
      imageAlt: "Our Approach",
      tagText: "OUR APPROACH",
      title: "Using advanced AI and the latest pharmaceutical research, MARMAR delivers:",
      titleClass: "tracking-tighter",
      content: [
        "Comprehensive medication interaction assessments",
        "Practical advice for managing your medication regimen safely",
        "Clear explanations of potential risks in accessible language",
        "Personalized recommendations based on your unique health profile",
        "Evidence-based alternatives when medication conflicts arise"
      ],
      isReversed: true
    },
    {
      imageUrl: "/assets/AboutCard3.png",
      imageAlt: "Our mission",
      tagText: "OUR MISSION",
      title: "Our mission goes beyond medication management",
      titleClass: "tracking-tighter",
      content:
        "We aim to empower individuals with the knowledge and tools they need to take control of their health, fostering a world where medication safety is a given, not a luxury. Through advanced AI and data-driven analysis, we're reducing the risks associated with polypharmacy and improving patient outcomes worldwide.",
      isReversed: false
    },
    {
      imageUrl: "/assets/AboutCard4.png",
      imageAlt: "Our Aspirations",
      tagText: "OUR ASPIRATION",
      title: "These aspirations form the cornerstones of MARMAR's vision for the future",
      content: [
        "Healthcare System Integration - Seamlessly connecting with existing healthcare systems to provide comprehensive medication management",
        "Consumer App Development - Creating an intuitive mobile application that puts medication safety in the palm of your hand, with features like medication reminders, interaction alerts, and personalized health insights",
        "Advanced Personalization - Continuously improving our AI to deliver increasingly tailored advice for each individual's unique needs",
        "Decreased healthcare - costs associated with preventable medication-related hospitalizations",
        "Global Accessibility - Making medication safety tools available to everyone, regardless of location or resources"
      ],
      isReversed: true,
      highlightTitle: true
    },
    {
      imageUrl: "/assets/AboutCard5.png",
      imageAlt: "Collaborations & Joining",
      title: "Collaborations & Joining",
      titleClass: "tracking-tighter",
      content:
        "If what we are building resonates with you please just reach out to us, join us, come and say hi let us know or share your drug interaction journey with us <a href=\"mailto:marmar.platform@gmail.com\" style=\"background: linear-gradient(270deg, #042222 -55.94%, #66B29B 106.32%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;\">— marmar.platform@gmail.com</a>",
      isReversed: false,
      hideTag: true
    }
  ];

  return (
    <motion.div
      className="mt-[7rem] px-8 space-y-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {cardsData.map((card, index) => (
        <InfoCard
          key={index}
          imageUrl={card.imageUrl}
          imageAlt={card.imageAlt}
          tagText={card.tagText}
          title={card.title}
          content={card.content}
          isReversed={card.isReversed}
          hideTag={card.hideTag}
          highlightTitle={card.highlightTitle}
          titleClass={card.titleClass}
        />
      ))}
    </motion.div>
  );
};

export default Cards;
