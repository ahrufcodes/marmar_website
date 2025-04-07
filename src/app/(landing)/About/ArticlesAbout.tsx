import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticlesAbout = () => {

    const articleCards = [
        {
            color: '#2CC295',
            image: '/assets/article1.svg',
            title: 'DrugFormDB: A GPT-4 & PubMedBERT Drug dataset',
            description: 'How I classified 3.8K medications into their respective forms to improve MARMARs user flow and personalization result.',
            link: 'https://ahruf.substack.com/p/drugformdb-a-gpt-4-and-pubmedbert'
        },
        {
            image: '/assets/article2.svg',
            title: 'AI in Medication Management: Current Applications',
            description: 'A comprehensive review of how artificial intelligence is transforming medication adherence and patient outcomes.',
            link: 'https://open.substack.com/pub/ahruf/p/inappropriate-polypharmacy-the-hidden?r=yjpai&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false'
        },
        {
            image: '/assets/article3.svg',
            title: 'Personalized Medicine: The Future of Healthcare',
            description: 'Exploring the intersection of data science and pharmaceutical research in creating individualized treatment plans.',
            link: 'https://open.substack.com/pub/ahruf/p/when-ai-advices-patients-validating?r=yjpai&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false'
        }
    ];


    return (
        <div className='mt-[8rem] px-6'>
            <div className="flex items-start md:items-center justify-center flex-col mb-[5rem]">
                <button className="bg-[#E3555A] text-xs px-6 text-[#E8F4F0] h-9 md:h-7 rounded-full">
                    Articles and Research
                </button>
                <p className="text-[#1C1C1C] text-xl md:text-3xl font-medium mt-4 max-w-[800px] md:text-center">
                    Explore our latest contributions to the field of medication management and AI-powered healthcare.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center '>
                {articleCards.map((card, index) => (
                    <div key={index} className="w-full max-w-[417px]">
                        {index === 0 ? (

                            <div className="w-full h-[287px] flex items-center justify-center rounded-t-3xl" style={{ backgroundColor: card.color }}>
                                <Image
                                    src={card.image}
                                    alt={`Article ${index + 1}`}
                                    width={350}
                                    height={200}
                                    priority

                                />
                            </div>
                        ) : index === 1 ? (
                            <div className="w-full h-[287px] flex items-center justify-center rounded-t-3xl bg-gradient-to-r from-[#042222] to-[#66B29B]">
                                <Image
                                    src={card.image}
                                    alt={`Article ${index + 1}`}
                                    width={350}
                                    height={200}
                                    priority
                                />
                            </div>
                        ) : (

                            <div className="w-full h-[287px] flex items-center justify-center rounded-t-3xl bg-gradient-to-r from-[#FFE7E7] to-[#E3555A]">
                                <Image
                                    src={card.image}
                                    alt={`Article ${index + 1}`}
                                    width={350}
                                    height={200}
                                    priority
                                />
                            </div>
                        )}
                        <div className='bg-white w-full h-auto min-h-[180px] flex items-start rounded-b-3xl flex-col px-4 pt-6 pb-6 space-y-4 shadow-sm'>
                            <h1 className='text-sm font-semibold'>{card.title}</h1>
                            <p className='text-xs text-[#5E5E5E]'>{card.description}</p>
                            <a href={card.link} target="_blank" rel="noopener noreferrer">
                                <Button className="bg-white text-[#000000] border border-[#909090] hover:bg-gray-50">
                                    Learn More <ChevronRight className='ml-2 h-4 w-4 text-[#339465] font-bold' />
                                </Button>
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesAbout;