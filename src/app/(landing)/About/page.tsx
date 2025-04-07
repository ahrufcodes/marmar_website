
import React from "react";
import AboutHeroSection from "./AboutHeroSection";
import Cards from "./Cards";
import ArticlesAbout from "./ArticlesAbout";
const page = () => {
  return (
    <>
      <div className="mt-[2.5rem] mb-[10rem]">
      <AboutHeroSection/>
      <Cards/>
  <ArticlesAbout/>
  
      </div>
    </>
  );
};

export default page;
