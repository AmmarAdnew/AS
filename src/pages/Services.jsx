import ContactUs from "../components/ContactUs";

export default function Services() {
  return (
    <div className="text-neutral dark:text-gray-100">
      <div
        className="flex flex-col gap-10 bg-white-200 dark:bg-gray-700 px-8 md:px-16 pt-10 pb-40 "
        data-aos="fade-up"
      >
        <h1
          className="font-[700] text-[48px] pt-14 text-neutral-900 dark:text-gray-50 text-center"
          data-aos="fade-down"
        >
          Services
        </h1>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div
            className="flex-1 flex flex-col gap-6 order-2 md:order-1"
            data-aos="fade-right"
          >
            <h2 className="font-[700] text-[48px] text-primary-800">
              <span className="gradient-primary-secondary">Web <br /> Development</span> 
            </h2>
            <p className="text-xl text-primary-800 dark:text-primary-100">
              We are a team of skilled software developers specializing in web
              applications, websites, and mobile applications. With our
              expertise and passion for innovation, we bring your ideas to life
              and deliver exceptional results.
            </p>
          </div>
          <div className="flex-1 order-1" data-aos="zoom-in">
            <img src="services-image-1.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="bg-white-200 dark:bg-gray-800 flex flex-col md:flex-row gap-16 items-center px-8 md:px-16 pt-20 pb-32"
        data-aos="fade-up"
      >
        <div className="flex-1" data-aos="zoom-in">
          <img src="services_image-2.png" alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-6" data-aos="fade-left">
          <h2 className="font-[700] text-[48px] text-neutral dark:text-gray-50">
          <span className="gradient-primary-secondary"> Mobile App <br /> Development</span> 
          </h2>
          <p className="text-xl text-primary-800 dark:text-primary-100">
            We are a team of skilled software developers specializing in web
            applications, websites, and mobile applications. With our expertise
            and passion for innovation, we bring your ideas to life and deliver
            exceptional results.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row gap-16 items-center bg-white-200 dark:bg-gray-700 px-8 md:px-16 pt-20 pb-40"
        data-aos="fade-up"
      >
        <div
          className="flex-1 flex flex-col gap-6 order-2 md:order-1"
          data-aos="fade-right"
        >
          <h2 className="font-[700] text-[48px] text-neutral dark:text-gray-50">
          <span className="gradient-primary-secondary">Software As <br /> A Service (SAAS)</span>
          </h2>
          <p className="text-xl text-primary-800 dark:text-primary-100">
            We are a team of skilled software developers specializing in web
            applications, websites, and mobile applications. With our expertise
            and passion for innovation, we bring your ideas to life and deliver
            exceptional results.
          </p>
        </div>
        <div className="flex-1 order-1" data-aos="zoom-in">
          <img src="services_image-3.png" alt="" />
        </div>
      </div>

      <div className="px-8 md:px-16 py-20 bg-secondary-v2 dark:bg-gray-800">
        <ContactUs />
      </div>
    </div>
  );
}
