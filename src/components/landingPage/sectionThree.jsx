import React from "react";
import image from "/Innovation.gif";
import SectionThreeCard from './SectionThreeCard';

const SectionThree = () => {
  return (
    <div className="bg-secondary-200 dark:bg-gray-800 text-neutral dark:text-primary min-h-screen w-full relative font-sans px-12 py-6 flex justify-between gap-4 flex-col md:flex-row">
      <div className=" pt-12 px-6 md:w-full">
        <div
          className="text-primary-800 pt-6 md:text-start mr-10 md:absolute md:mb-5 md: font-bold text-4xl text-center dark:text-white"
          data-aos="fade-right" // Animation from the right side
          data-aos-duration="800" // Duration of the animation
          data-aos-delay="200" // Delay before the animation starts
        >
          Experience the Power <br/> of <span className='gradient-primary-accent ' >Addis Spark's</span>  Software <br/> Development Solutions
        </div>
        <p
          className="text-secondary-800 md:pt-40 mb-12 md:ml-1 -ml-6 md:text-start text-center pt-6 dark:text-white "
          data-aos="fade-right" // Animation from the bottom
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          At Addis Spark, we bring your ideas to life with our expert team of
          software developers. With our cutting-edge technology and innovative
          solutions, we deliver high-quality web applications, websites, and
          mobile applications that exceed your expectations.
        </p>
        <div
          className="flex space-x-5 md:mt-5"
          data-aos="fade-right" // Animation from the left side
          data-aos-duration="1000"
          data-aos-delay="400"
          data--aos-offset="0"
        >
          <SectionThreeCard />
        </div>
      </div>
      {/* <img
        className="scale-[80%] hover:scale-90 transition-all duration-300"
        src={image}
        data-aos="slide-left" // Zoom-in animation for the image
        data-aos-duration="1000"
        data-aos-delay="800"
      /> */}

        <img src={image} className='scale-90 py-12 rounded-tl-[170px] rounded-tr-[200px] rounded-bl-[100px] rounded-br-[120px] ' alt="" />


    </div>
  );
};

export default SectionThree;
