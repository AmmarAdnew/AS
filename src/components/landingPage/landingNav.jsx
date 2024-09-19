import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const LandingNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDarkMode() {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.remove('dark');
    } else {
      rootElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`bg-primary-700 dark:bg-gray-700 dark:text-primary transition-all duration-200 w-full fixed top-0 z-10 lg:rounded-2xl lg:absolute lg:top-5 lg:w-[95%] lg:mx-7`}>
      <div className={`flex justify-between items-center lg:flex-row lg:justify-around py-2 lg:py-3 lg:px-5 px-4 ${isOpen ? 'flex-col' : 'flex-row'} transition-all duration-300`}>
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="font-bold text-lg lg:text-4xl font-AddisFont gradient-primary-accent">
          <Link to={"/"}>Addis Spark</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text lg:hidden">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5 text-sm lg:text-lg items-center lg:ml-6 mt-3 lg:mt-0 text-secondary`}>
          <li className="group relative">
            <Link to="/">Home</Link>
            <span className="block lg:bg-accent h-[3px] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out absolute bottom-[-3px] left-0"></span>
          </li>
          <li className="group relative">
            <Link to="/about">About</Link>
            <span className="block lg:bg-accent h-[3px] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out absolute bottom-[-3px] left-0"></span>
          </li>
          <li className="group relative">
            <Link to="/services">Services</Link>
            <span className="block lg:bg-accent h-[3px] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out absolute bottom-[-3px] left-0"></span>
          </li>
          {/* <li className="group relative">
            <Link to="/projects">Project</Link>
            <span className="block lg:bg-accent h-[3px] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out absolute bottom-[-3px] left-0"></span>
          </li> */}
        </ul>

        <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex items-center mt-3 lg:mt-0 space-x-4`}>
          <button onClick={toggleDarkMode} className="text-2xl text-primary-200 dark:text-secondary">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
          <button className="dark:bg-gray-700 dark:text-secondary-200 dark:border-gray-600 lg:hover:border-4 lg:hover:border-accent lg:hover:text-accent transition-all duration-200 px-3 lg:px-4 py-1 bg-primary lg:shadow-sm border-x-2 lg:border-x-4 border-secondary font-bold rounded-lg lg:rounded-xl text-secondary-v1  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
