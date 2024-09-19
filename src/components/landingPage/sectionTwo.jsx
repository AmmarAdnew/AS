import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Import the desired icon
import Card from "./sectionTwoCard";

const SectionTwo = () => {
  return (
    <div className="min-h-screen bg-primary-800 dark:bg-gray-800 dark:text-secondary flex flex-col items-center p-10 font-sans">
      
      <div data-aos="fade-down" data-aos-offset="0" data-aos-duration="800"  className="font-bold font-sans text-3xl text-secondary md:text-4xl text-center mt-2">
      Our Process<span className="gradient-primary-accent">: From Concept to</span>  Completion
      </div>
      <div data-aos="fade-down" data-aos-offset="0" data-aos-duration="900" className="w-full md:w-1/2 text-center text-primary-100 mt-4 font-sans">
        At Addis Spark, we follow a streamlined process to bring your project to
        life. From understanding your requirements to delivering a high-quality
        solution, we ensure a smooth journey.
      </div>
      
      <div className="flex flex-col md:flex-row md:space-x-10 md:mt-10 w-full justify-center">
        <Card />
      </div>
      
    </div>
  );
};

export default SectionTwo;
