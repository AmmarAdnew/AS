import React from "react";
import image from "../../assets/images/landingImages/sectionFiveIcon.png"
import icon from "../../assets/images/landingImages/SectionThreeicon.png"
import { PhoneIcon } from "@heroicons/react/24/solid";
const SectionFive = () => {
  return (
    <div className="bg-secondary dark:bg-gray-800 dark:text-primary text-neutral min-h-screen flex md:flex-row flex-col md:p-20 p-5">
      <div>
        <div className=" font-bold md:text-5xl text-3xl"
          data-aos="fade-down"
          data-aos-duration="1000"
         data-aos-delay="100"
        >
          Choose Addis Spark for Exceptional Software Development
        </div>
        <p className="md:w-[80%] my-6" 
         data-aos="fade-down"
         data-aos-duration="1000"
         data-aos-offset="200"
        >
          At Addis Spark, we offer a wide range of benefits that set us apart as
          the ideal choice for your software development projects. With our
          expertise and dedication, we ensure top-notch solutions that meet your
          unique requirements.
        </p>
        <div className="flex-cols space-y-5 " 
         data-aos="fade-down"
         data-aos-duration="1000"
         data-aos-delay="220"
        >
          <div className="flex space-x-5">
            <img className="size-8 bg-primary rounded-full" src={icon} />
            <p>Experienced Team of Software Developers</p>
          </div>
          <div className="flex space-x-5">
            <img className="size-8 bg-primary rounded-full"  src={icon} />
            <p>Cutting-Edge Technology and Tools</p>
          </div>
          <div className="flex space-x-5 ">
            <img className="size-8 bg-primary rounded-full"  src={icon} />
            <p>Timely Delivery and Efficient Project Management</p>
          </div>
          <div className="mt-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center">
        <button className="bg-primary dark:bg-gray-700 shadow-md border-[1px] border-neutral px-10 text-xl py-2 hover:scale-105 transition-all duration-200">
          Learn More
        </button>
        <div className="text-neutral text-xl flex items-center cursor-pointer my-96"> 
          <PhoneIcon className="h-6 w-6 md:ml-2 text-neutral" /> {/* Contact icon */}
          <span>Contact Us</span>
        </div>
      </div>
        </div>
      </div>
      <img className="size-[460px]" src={image}
       data-aos="fade-up"
       data-aos-duration="1000"
       data-aos-delay="200"
      />
    </div>
  );
};

export default SectionFive;
