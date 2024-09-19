import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-secondary">
      <div>
        <div className="bg-primary-700 dark:bg-gray-700 dark:text-secondary flex flex-col text-center items-center gap-16 md:flex-row md:text-start md:items-start md:gap-8 md:px-5 pt-16 pb-10">
          <div className="flex flex-col gap-3 justify-center px-5 flex-1">
          <div className="font-bold text-lg lg:text-4xl font-AddisFont gradient-radial-primary-accent">
          <Link to={"/"}>Addis Spark</Link>
          </div>
            <p className="text-lg text-white max-w-[400px]">
              Transforming Ideas into Powerful Software Solutions
            </p>
            <div className="text-2xl flex gap-4 justify-center md:justify-start">
              {/* <FaLinkedin />
              <FaTwitter />
              <FaInstagram /> */}
            </div>
          </div>

          <div className="flex justify-around w-full px-5 flex-1 text-left">
            <div className="flex flex-col gap-5">
              <h3 className="font-[700] text-xl">About Us</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/">Portfolio</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-[700] text-xl">Support</h3>
              <ul className="flex flex-col gap-3">
                
                <li>
                  <Link to="/services">Customer Service</Link>
                </li>
                <li>
                  <Link to="/">Get Started</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-secondary-900 text-center py-3 text-sm dark:text-white">
          ©{new Date().getFullYear()} Addis Spark. All Right Reserved
        </p>
      </div>
    </div>
  );
}
