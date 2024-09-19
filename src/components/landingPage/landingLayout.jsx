import React from "react";
import HeroSection from "./heroSection";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import SectionSix from "./sectionSix";
import SectionSeven from "./sectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./sectionNine";
import PricingSection from "./pricing_section"

const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* hearo and navbar container */}

      {/* Navigation */}
      {/* Hero Section */}
      <div>
        <HeroSection/>
      </div>

      {/* Content Sections */}
      <div className=" bg-secondary-200 overflow-hidden">
        <SectionTwo />
        <SectionThree />
        {/* <SectionFour /> */}
        {/* <SectionFive /> */}
        {/* <SectionSix /> */}
        <PricingSection />
        <SectionSeven />
        {/* <SectionEight /> */}
        <SectionNine />
      </div>
    </div>
  );
};

export default LandingLayout;
