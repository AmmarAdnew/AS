import React from "react";
import SectionFour from "../../assets/SectionFour";
import { delay } from "framer-motion";
const SectionFourCard = () => {
  return (
    <div className="flex md:flex-row  flex-col gap-4 ">
      {SectionFour.map((item, index) =>  {
        var duration=(index+1)*350;
        var delay=(index+1)*100;
        return (
          <div className="md:w-1/3 w-full p-2 flex  md:block flex-col items-center md:text-start text-center" key={index}
          data-aos="fade-up"
          data-aos-duration={duration}
          data-aos-delay={delay}
          data-aos-offset="100"
          >
            <img className="size-11 rounded-full bg-white " src={item.icon} alt="icon" />
            <h1 className="font-bold py-3 text-lg">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SectionFourCard;
