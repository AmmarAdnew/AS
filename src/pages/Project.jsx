import { FaCube } from "react-icons/fa";

export default function Project() {
  return (
    <div className="text-neutral dark:text-gray-100">
      <div className="bg-secondary-100 dark:bg-gray-800 px-8 md:px-16 pt-10 pb-40">
        <h1
          className="font-[700] text-[48px] text-neutral-900 dark:text-gray-50 text-center max-w-[700px] w-full mx-auto"
          data-aos="fade-down" // AOS animation
          data-aos-duration="1000" // Duration of animation in ms
        >
          Experience the Power of Addis Spark&apos;s Software Development
          Solutions
        </h1>

        <div
          className="w-full lg:w-10/12 h-[650px] bg-secondary-200 dark:bg-gray-600 rounded-3xl shadow-[1px_8px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[1px_8px_0px_0px_rgba(255,255,255,0.2)] m-auto my-10"
          data-aos="zoom-in-up" // AOS animation
          data-aos-duration="1000"
        ></div>

        <p
          className="w-full lg:w-8/12 mx-auto my-16 text-[20px] text-primary-900 dark:text-neutral-100"
          data-aos="fade-up" // AOS animation
          data-aos-duration="1000"
        >
          At Addis Spark, we bring your ideas to life with our expert team of
          software developers. With our cutting-edge technology and innovative
          solutions, we deliver high-quality web applications, websites, and
          mobile applications that exceed your expectations.At Addis Spark, we
          bring your ideas to life with our expert team of software developers.
          With our cutting-edge technology and innovative solutions, we deliver
          high-quality web applications, websites, and mobile applications
          exceed your expectations.At Addis Spark, we bring your ideas to life
          with our expert team of software developers. With our cutting-edge
          technology and innovative solutions, we deliver high-quality web
          applications, websites, and mobile applications that exceed your
          expectations.
        </p>

        <div
          className="flex justify-center w-full lg:w-8/12 mx-auto gap-10"
          data-aos="fade-up" // AOS animation
          data-aos-duration="1000"
        >
          <div className="max-w-64 flex flex-col gap-2">
            <div
              className="text-6xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <FaCube />
            </div>
            <h3
              className="text-3xl pt-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Reliable
            </h3>
            <p
              className="text-xl text-primary-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Trust our team to deliver reliable software solutions that meet
              your unique business needs.
            </p>
          </div>

          <div className="max-w-64 flex flex-col gap-2">
            <div
              className="text-6xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <FaCube />
            </div>
            <h3
              className="text-3xl pt-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Efficient
            </h3>
            <p
              className="text-xl text-primary-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              We optimize our development process to ensure efficient delivery
              of your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
