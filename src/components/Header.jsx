import { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const isActive = (path) => {
    return currentPath === path ? "underline text-primary" : "";
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isDrawerOpen && !e.target.closest(".drawer-content")) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDrawerOpen]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`bg-neutral-v3 text-secondary flex justify-between items-center px-4 py-4 ${
        currentPath === "/" && "hidden"
      }`}
    >
      <div className="mr-16">
        <Link to={"/"}>Addis Spark</Link>
      </div>
      <ul className="gap-4 items-center flex-1 hidden md:flex">
        <li>
          <Link className={`${isActive("/about")}`} to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className={`${isActive("/services")}`} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className={`${isActive("/projects")}`} to="/projects">
            Projects
          </Link>
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          More <FaAngleDown />
        </li>
      </ul>
      <div className="flex gap-4">
        <div
          onClick={() => toggleTheme()}
          className={`p-0 m-0 focus:ring-0 ${!isDrawerOpen && "mr-8"} `}
        >
          {theme == "dark" ? (
            <FaSun className="text-2xl cursor-pointer" />
          ) : (
            <FaMoon className="text-2xl cursor-pointer" />
          )}
        </div>
        <div className="border-[2px] border-secondary bg-neutral w-fit px-4 cursor-pointer hidden md:block">
          Get in touch
        </div>
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleDrawer} />
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-v2 z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center drawer-content">
          <div className="text-lg font-bold">Menu</div>
          <FaTimes className="text-2xl cursor-pointer" onClick={closeDrawer} />
        </div>
        <ul className="flex flex-col gap-4 p-4 drawer-content">
          <li>
            <Link
              className={`${isActive("/about")}`}
              to="/about"
              onClick={closeDrawer}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`${isActive("/services")}`}
              to="/services"
              onClick={closeDrawer}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`${isActive("/projects")}`}
              to="/projects"
              onClick={closeDrawer}
            >
              Projects
            </Link>
          </li>
          <div className="self-center p-3">
            <div
              className="h-5"
              // onClick={() => dispatch(toggleTheme())}
            ></div>
          </div>
          <li>
            <Link
              className={`${isActive("/contact")}`}
              to="/contact"
              onClick={closeDrawer}
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}
    </div>
  );
}
