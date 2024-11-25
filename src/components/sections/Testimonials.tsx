import React from "react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      testimonial:
        "This project is very promising in pharmacy and it will benefit doctors and nurses too. excellent application of technology. continue working on it, it needs more idea refining and integrating it into heathcare system",
      author: "Walaa Nasr Elghitany",
      jobDescription: "Data scientist and doctor",
      bgColor: "bg-[#66B29B]",
    },
    {
      testimonial:
        "Managing multiple medications used to be a constant source of worry for me. With MarMar, I've found peace of mind. The personalized advice and clear information on medication interactions have made a significant difference in my daily life. It feels like having a personal healthcare assistant at my fingertips",
      author: "Lanre",
      jobDescription: "Patient User",
      bgColor: "bg-[#E3555A]",
    },
    {
      testimonial:
        "As a 4th year medical student, Marmar has been helpful and efficient in understanding pharmacology easier, especially in the aspect of drug-drug interactions and side effects of drugs. It's faster and also correlates with what I have in my lecture notes",
      author: "Imran M",
      jobDescription: "Medical Student",
      bgColor: "bg-gradient-to-r from-[#66B29B] to-[#042222]",
    },
  ];

  return (
    <section className="container mx-auto  py-16">
      <div className="space-y-8">
        <div className="text-center ">
          <Button className="bg-[#2CC295] hover:bg-[#25a07c] rounded-full px-8 py-2 mb-4 transition-colors duration-300">
            Testimonials
          </Button>
          <h1 className="text-[#131313] font-semibold text-2xl md:text-3xl">
            Don't take our word for it
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex flex-col justify-between h-full min-h-[320px]">
                <div>
                  <p className="text-[#FEFFF1] font-medium text-lg leading-relaxed">
                    "{item.testimonial}"
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-[#FEFFF1] font-bold text-[1.1rem] mb-1">
                    {item.author}
                  </p>
                  <p className="text-[#042222] font-semibold text-xl">
                    {item.jobDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
