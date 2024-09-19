import Accordion from "../components/Accordion";
import SatisifiedCustomersCard from "../components/SatisifiedCustomersCard";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import faqs from "../assets/faqs";
import members from "../assets/members";
import ContactUs from "../components/ContactUs";

export default function About() {
  return (
    <div className="text-neutral pt-5 dark:text-gray-100 dark:bg-gray-800">
      <div
        className="bg-secondar flex gap-5 px-8 md:px-16 py-20 items-center"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col gap-6" data-aos="fade-right">
          <h1 className="font-[700] text-[48px] text-primary-700 dark:text-gray-50">
            Addis <span className="gradient-primary-accent">Spark,</span> <br />
            Who are we?
          </h1>
          <p className="text-xl text-primary-500 dark:text-secondary-100">
            We are a team of skilled software developers specializing in web
            applications, websites, and mobile applications. With our expertise
            and passion for innovation, we bring your ideas to life and deliver
            exceptional results.
          </p>
          <div
            className="bg-secondary-200 rounded-lg dark:bg-gray-100 w-fit text-primary dark:text-gray-800 text-xl py-2 px-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]  mt-2"
            data-aos="zoom-in"
          >
            <Link to="/services">Services</Link>
          </div>
        </div>
        <div className="flex-1 hidden md:block" data-aos="fade-left">
          <img src="about_image-1.png" alt="" />
        </div>
      </div>

      {/* <div
        className="bg-secondary-v2 dark:bg-gray-700 w-full mx-auto px-8 md:px-16 py-20"
        data-aos="fade-up"
      >
        <h2
          className="text-5xl font-[700] text-neutral dark:text-gray-50 mb-4"
          data-aos="fade-right"
        >
          Satisfied Customers
        </h2>
        <p className="text-2xl text-gray-600 dark:text-gray-100 mb-12">
          Read what our clients have to say about us
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
          data-aos="zoom-in"
        >
          <SatisifiedCustomersCard
            img="https://via.placeholder.com/100"
            alt="customer-1"
            name="John Doe"
            rating={5}
            review="Addis Spark is a team of skilled developers who delivered my project on time and on budget. I highly recommend them."
            position="CEO"
            company="Company Name"
          />

          <SatisifiedCustomersCard
            img="https://via.placeholder.com/100"
            alt="customer-2"
            name="Jane Doe"
            rating={4}
            review="I had a great experience working with Addis Spark. They are professional and reliable."
            position="CTO"
            company="Company Name"
          />

          <SatisifiedCustomersCard
            img="https://via.placeholder.com/100"
            alt="customer-3"
            name="John Smith"
            rating={5}
            review="I am very happy with the results. Addis Spark exceeded my expectations."
            position="COO"
            company="Company Name"
          />
        </div> 
      </div> */} 

      {/* <div
        className="bg-primary dark:bg-gray-800 px-8 md:px-16 py-20"
        data-aos="fade-up"
      >
        <h2
          className="text-5xl font-[700] text-neutral dark:text-gray-50 mb-4"
          data-aos="fade-right"
        >
          Meet Our Team
        </h2>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12">
          Get to know the talented individuals behind Addis Spark.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
          data-aos="zoom-in"
        >
          {members.map((member, index) => (
            <TeamCard
              key={index}
              img={member.img}
              alt={member.alt}
              name={member.name}
              postition={member.postition}
              description={member.description}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
              telegramUrl={member.telegramUrl}
              portfolioUrl={member.portfolioUrl}
            />
          ))}
        </div>
      </div> */}

          {/* FAQ start */}

      {/* <div
        className="bg-secondary dark:bg-gray-700 px-8 md:px-16 py-20"
        data-aos="fade-up"
      >
        <h2
          className="text-5xl font-[700] text-neutral dark:text-gray-50 mb-4"
          data-aos="fade-right"
        >
          FAQs
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
          Find answers to common questions potential clients might have about
          working with Addis Spark.
        </p>

        <div className="flex flex-col gap-5" data-aos="zoom-in">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              description={faq.description}
              answer={faq.answer}
            />
          ))}
        </div>
      </div> */}

        {/* new FAQ */}

        <div className='min-h-screen bg-primary-800 dark:bg-gray-800 dark:text-primary flex flex-col gap-5 md:p-16 p-2'>
         <div className='md:text-4xl font-bold text-secondary-200 text-center'>FAQs</div>
         <div className='text-neutral text-center text-secondary-200'>Find answers to common questions potential clients might have about working with Addis Spark.</div>
         {
           faqs.map((faq,index)=>
        {
            return(
                <Accordion
               key={index}
               title={faq?.title}
               description={faq?.description}
               answer={faq?.answer}
            />
            )
        })
         }
        </div>

      <div
        className="px-8 md:px-16 py-20 bg-secondary-v2 dark:bg-gray-800"
        data-aos="fade-up"
      >
        <ContactUs />
      </div>
    </div>
  );
}
