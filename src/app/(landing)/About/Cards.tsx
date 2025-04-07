import React from 'react';
import Image from 'next/image';

type CardContent = string | string[];


interface InfoCardProps {
  imageUrl: string;
  imageAlt: string;
  tagText?: string; 
  title: string;
  content: CardContent;
  isReversed?: boolean;
  hideTag?: boolean; 
  highlightTitle?: boolean; // ✅ NEW
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  imageUrl, 
  imageAlt, 
  tagText = "", 
  title, 
  content, 
  isReversed = false,
  hideTag = false,
  highlightTitle = false // ✅ NEW
}) => {
  return (
    <div className={`flex justify-center gap-8 mt-[6rem] flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={400}
        className="w-full md:w-2/5 rounded-3xl object-cover"
        priority
      />
      <div className="max-w-[620px]">
        {!hideTag && (
          <button className="bg-[#E3555A] text-xs px-6 text-[#E8F4F0] h-9 md:h-7 rounded-full">
            {tagText}
          </button>
        )}
        
        <h2 className={`mt-4 max-w-md 
  ${highlightTitle 
    ? "text-[#5E5E5E] text-sm md:text-md font-normal leading-6"
    : "text-[#1C1C1C] text-sm md:text-2xl font-medium"
  }`}>
  {title}
</h2>


        {typeof content === 'string' ? (
          <p className="mt-4 text-sm md:text-md text-[#5E5E5E] leading-6" dangerouslySetInnerHTML={{ __html: content }}></p>
        ) : (
          <ul className="list-none">
            {content.map((item, index) => {
        
              const [boldPart, ...rest] = item.split(" - ");
              const restJoined = rest.join(" - ");

              return (
                <li key={index} className="mt-1 md:mt-4 text-sm md:text-md text-[#5E5E5E] leading-6 flex items-start">
                  <span className="text-[#5E5E5E] mr-2">•</span>
                  <span>
                  {highlightTitle ? (
  <strong>{boldPart}</strong>
) : (
  boldPart
)}
{restJoined && ` - ${restJoined}`}

                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

interface CardData extends InfoCardProps {}

const Cards: React.FC = () => {

  const cardsData: CardData[] = [
    {
      imageUrl: "/assets/AboutCard1.svg",
      imageAlt: "The Problem",
      tagText: "The problem we're trying to solve",
      title: "One preventable hospitalization happens every 2.7 minutes",
      content: "The silent dangers of adverse drug reactions and medication errors pose a significant threat to patient safety. Inappropriate polypharmacy—the concurrent use of multiple medications without clear clinical justification—affects millions of people, particularly older adults and those with chronic conditions.\n\nMARMAR tackles this challenge head-on by providing real-time, evidence-based analyses of medication combinations, helping users identify potential interactions before they become problems.",
      isReversed: false
    },
    {
      imageUrl: "/assets/AboutCard2.svg",
      imageAlt: "Our Approach",
      tagText: "Our Approach",
      title: "Using advanced AI and the latest pharmaceutical research, MARMAR delivers:",
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
      imageUrl: "/assets/AboutCard4.svg",
      imageAlt: "Our mission",
      tagText: "OUR  MISSION",
      title: "Our mission goes beyond medication management",
      content: "We aim to empower individuals with the knowledge and tools they need to take control of their health, fostering a world where medication safety is a given, not a luxury. Through advanced AI and data-driven analysis, we're reducing the risks associated with polypharmacy and improving patient outcomes worldwide.",
      isReversed: false
    },
    {
      imageUrl: "/assets/AboutCard5.svg",
      imageAlt: "Our Aspirations",
      tagText: "Our Aspirations",
      title: "These aspirations form the cornerstones of MARMAR's vision for the future",
      content: [
        " Healthcare System Integration - Seamlessly connecting with existing healthcare systems to provide comprehensive medication management",
        "Consumer App Development - Creating an intuitive mobile application that puts medication safety in the palm of your hand, with features like medication reminders, interaction alerts, and personalized health insights",
        "Advanced Personalization - Continuously improving our AI to deliver increasingly tailored advice for each individual's unique needs",
        "Decreased healthcare - costs associated with preventable medication-related hospitalizations",
        "Global Accessibility - Making medication safety tools available to everyone, regardless of location or resources"
      ],
      isReversed: true,
      highlightTitle: true 
    },
    {
      imageUrl: "/assets/AboutCard3.svg",
      imageAlt: "Collaborations & Joining",
      title: "Collaborations & Joining",
      content: "If what we're building resonates with you please just reach out to us, join us, come and say hi let's us know or share your drug interaction journey with us <span style=\"background: linear-gradient(270deg, #042222 -55.94%, #66B29B 106.32%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;\">— marmar.platform@gmail.com</span>",
      isReversed: false,
      hideTag: true
    }
  ];

  return (
    <div className="mt-[7rem] px-8 space-y-24">
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
        />
      ))}
    </div>
  );
};

export default Cards;