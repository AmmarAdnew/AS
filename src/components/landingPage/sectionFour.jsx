import React from "react";
import SectionFourCard from './SectionFourCard'
import { PhoneIcon } from "@heroicons/react/24/solid";
const SectionFour = () => {
  return (
    <div className=" text-neutral pt-10 sm:p-0 -mt-6 sm:m-0 min-h-screen bg-primary dark:bg-gray-700 dark:text-primary  md:p-8">
      <div className="md:w-[762px]">
        <div
        className="font-bold md:text-5xl text-4xl my-6 md:px-0 px-4 text-center md:text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="0"
        >
          Software Development Services That Drive Success
        </div>
        <p className="md:w-[650px] md:px-0 px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          Addis Spark offers a range of software development services, including
          web applications, websites, and mobile applications. Our team of
          experienced developers is dedicated to delivering high-quality
          solutions that meet your unique needs.
        </p>
      </div>
      <div className="py-5 flex flex-row  ">
        <SectionFourCard />
      </div>
   <div className="flex justify-center">
   <div className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center">
        <button className="bg-primary dark:bg-gray-700 shadow-md border-[1px] border-neutral dark:border-primary px-10 text-xl py-2 hover:scale-105 transition-all duration-200">
          Learn More
        </button>
        <div className="text-xl flex items-center cursor-pointer pb-5"> 
          <PhoneIcon className="h-6 w-6 md:ml-2 " /> {/* Contact icon */}
          <span>Contact Us</span>
        </div>
      </div>
   </div>
    </div>
  );
};

export default SectionFour;
