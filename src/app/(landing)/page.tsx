import HeroSection from "@/components/sections/HeroSection";
import GetStartedToday from "@/components/sections/GetStartedToday";
import Faq from "@/components/sections/Faq";
import EmpoweringSection from "@/components/sections/EmpoweringSection";
import Testimonials from "@/components/sections/Testimonials";
import OurOfferings from "@/components/sections/OurOfferings";
import Insurancecompanies from "@/components/sections/Insurancecompanies";
import Partners from "@/components/sections/Partners"

const page = () => {
  return (
    <>
      <HeroSection />
      <GetStartedToday />
      <Faq />
      <Testimonials />
 
      <section id="our-offering-section" data-section-target="our-offering-section">
        <OurOfferings />
      </section>
   
  
      <section id="providers-section" data-section-target="providers-section">
        <EmpoweringSection />
      </section>
      <section id="insurance-section" data-section-target="insurance-section">
        <Insurancecompanies />
      </section>
 
      <Partners/>

    </>
  );
};

export default page;
