import React from "react";
import Processes from "../../assets/Processes";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-around text-neutral-600">
      {Processes.map((item, index) => {
        // You can declare and use the variable here if needed
        const duration = (index + 1) * 400; 
        const offset = (index + 1) * 50;
        const delay = index * 200; // Adding delay for staggered effect

        return (
          <div
            key={index}
            className="w-[100%] md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between hover:scale-105 transition-all"
            data-aos="fade-right" // Example of animation type
            data-aos-duration={duration} // Duration of the animation
            data-aos-delay={delay} // Delay before animation starts
            data-aos-offset={offset} // Offset for the trigger point
          >
            <div className="bg-secondary-100  text-primary-800 dark:text-primary-800  dark:bg-secondary-100 shadow-lg rounded-lg overflow-hidden text-center flex flex-col h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 flex-grow">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
