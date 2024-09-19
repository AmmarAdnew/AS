import { useState } from "react";
import propTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Accordion({ title, description, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div
        className="bg-white dark:bg-gray-900 rounded-lg  dark:border-gray-50 px-8 py-5"
        data-aos="fade-up"
      >
        <div className="flex justify-between">
          <h3 className="text-xl font-[700]">{title}</h3>
          {!open ? (
            <FaPlus size={24} onClick={() => setOpen(true)} />
          ) : (
            <FaMinus size={24} onClick={() => setOpen(false)} />
          )}
        </div>
        <p
          className="text-lg text-gray-800 dark:text-gray-100 pt-2"
          data-aos="fade-up"
        >
          {description}
        </p>
        {open && (
          <>
            <div
              className="h-[2px] bg-gray-500 dark:bg-gray-400 w-1/3 mt-5"
              data-aos="fade-up"
            ></div>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 pt-2"
              data-aos="fade-up"
            >
              {answer}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  answer: propTypes.string,
};
