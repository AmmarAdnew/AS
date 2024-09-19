import { FaTelegramPlane } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex gap-10 " data-aos="fade-up">
      <div className="flex flex-col gap-5 flex-1" data-aos="fade-right">
        <h2
          className="text-3xl font-[700] text-center text-secondary-900 dark:text-gray-50 mb-4"
          data-aos="fade-down"
        >
          Contact Us
        </h2>
        <p 
          className="text-lg text-secondary-800 dark:text-gray-300 mb-3"
          data-aos="fade-up"
        >
          Have a question or need assistance? Reach out to us!
        </p>
        <div data-aos="fade-up">
          <label
            htmlFor="name"
            className="text-lg text-gray-800 dark:text-gray-100"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border-[1px] border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 p-2 mt-2  rounded-lg  focus:outline-gray-500"
          />
        </div>
        <div data-aos="fade-up">
          <label
            htmlFor="email"
            className="text-lg text-gray-800 dark:text-gray-100"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border-[1px] border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 p-2 mt-2  rounded-lg  focus:outline-gray-500"
          />
        </div>
        <div data-aos="fade-up">
          <label
            htmlFor="message"
            className="text-lg text-gray-800 dark:text-gray-100"
          >
            Message*
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="6"
            className="w-full border-[1px] border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 p-4 mt-2 none-resizable rounded-lg  focus:outline-gray-500"
          />
        </div>

        <div className="flex ml-auto" data-aos="fade-up">
          <button className="bg-gray-700 rounded-lg text-white dark:bg-gray-200 dark:text-gray-800 text-xl py-2 px-6 flex gap-2 items-center shadow-[4px_6px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_6px_0px_0px_rgba(255,255,255,0.4)]">
            Send Message
            <FaTelegramPlane color="#fCA311" />
          </button>
        </div>
      </div>
      <div className="flex-1 mt-8 hidden lg:block" data-aos="fade-left">
        <img src="Contact us.gif" className='scale-100 rounded-tl-[200px] rounded-tr-[170px] rounded-bl-[100px] rounded-br-[120px]' alt="" />
        
      </div>
    </div>
  );
}
