import React from "react";
import testimonial from "../assets/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../src/index.css"; // Import your custom CSS file here
import prev from "../assets/images/landingImages/prev.png";
import next from "../assets/images/landingImages/right-arrow.png";

const TestimonialCard = () => {
  return (
    <Swiper
      className="bg-primary dark:bg-gray-600 text-neutral dark:text-primary text-center relative md:w-[100%]"
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {testimonial.map((testimonial, index) => (
        <SwiperSlide
          className="relative  flex flex-col justify-center items-center"
          key={index}
        >
          <img className="md:w-24 w-20" src={testimonial.icon} alt="Client Icon" />
          <div className="font-bold md:w-[35%] w-[90%] py-4">{testimonial.feedback}</div>
          <img
            className="md:w-10 w-9 mb-1 "
            src={testimonial.profilePicture}
            alt={testimonial.clientName}
          />
          <div>{testimonial.clientName}</div>
          <div>
            {testimonial.clientTitle}, {testimonial.company}
          </div>
          <div className="prev dark:bg-secondary absolute left-4 top-1/2 md:size-12 size-10 border-2 border-neutral rounded-full flex justify-center items-center p-1">
            <img src={prev} alt="Previous" />
          </div>
          <div className="next absolute right-4 md:size-12 dark:bg-secondary size-10 top-1/2 border-2 border-neutral rounded-full flex justify-center items-center p-1">
            <img src={next} alt="Next" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCard;
