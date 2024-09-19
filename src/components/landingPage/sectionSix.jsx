import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TestimonialCard from "../TestimonialCard";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Remove if unused

const SectionSix = () => {
  return (
    <div className="min-h-screen text-neutral dark:bg-gray-700 dark:text-primary md:p-10 font-sans">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="md:w-[50%] py-10">
          <div  className="md:text-5xl text-4xl md:text-start text-center font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Transform Your Ideas into Reality
          </div>
          <div className="md:w-[70%] md:py-5 py-2 md:text-start text-center "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
          >
            We are a team of expert software developers ready to bring your
            vision to life.
          </div>
          <div className="flex space-x-5 md:justify-start md:space-y-0 md:space-x-10 justify-center flex-wrap"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            <button className="bg-primary dark:bg-gray-600 shadow-[2px_5px_0px_0px_rgba(0,0,0,0.2)] border-[1px] border-neutral md:px-10 px-5 text-xl py-2 hover:scale-105 transition-all duration-200 font-bold">
              Learn More
            </button>
            <button className="bg-primary dark:bg-gray-600 shadow-[2px_5px_0px_0px_rgba(0,0,0,0.2)] border-[1px] border-neutral md:px-10 px-5 text-xl py-2 hover:scale-105 transition-all duration-200 font-bold">
              Contact Us
            </button>
          </div>
        </div>
        <img
          className="w-[90%] md:w-[45%] h-[270px] bg-secondary"
          src="path-to-your-image.jpg"
          alt="Software development illustration"

          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"

        />
      </div>
     <div className="w-full pt-5 h-[450px] flex flex-rwo justify-center " >
      <TestimonialCard  />
      </div>
    </div>
  );
};

export default SectionSix;
