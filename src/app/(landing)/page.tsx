import HeroSection from "@/components/sections/HeroSection";
import GetStartedToday from "@/components/sections/GetStartedToday";
import Faq from "@/components/sections/Faq";
import EmpoweringSection from "@/components/sections/EmpoweringSection";
import Testimonials from "@/components/sections/Testimonials";
import OurOfferings from "@/components/sections/OurOfferings";
import Insurancecompanies from "@/components/sections/Insurancecompanies";
import Partners from "@/components/sections/Partners"
import Reveal from "@/components/util/Reveal";

const page = () => {
  return (
    <>
      <HeroSection />
      <GetStartedToday />
      <Faq />
      <Testimonials />
      <OurOfferings />
      <EmpoweringSection />
      <Insurancecompanies/>
      <Partners/>

    </>
  );
};

export default page;
