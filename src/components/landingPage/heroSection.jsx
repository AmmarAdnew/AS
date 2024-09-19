import React from 'react';
import LandingNav from './landingNav'; // Capitalize filename to match component import
import heroGif from '../../assets/images/landingImages/heroGif.gif'; // Ensure the correct file extension

const HeroSection = () => {
    return (
        <div className='bg-secondary-100 dark:bg-gray-800 w-full min-h-screen relative'>
            <LandingNav />
            <div  className='w-full h-full flex flex-col md:flex-row md:pt-36  pt-14 justify-center items-center md:items-start space-y-12 md:space-y-0 md:space-x-32'>
                <div data-aos="fade-down" className='w-full md:w-[40%] text-center md:text-left px-6 '>
                    <h1 className='md:text-5xl -400 text-4xl mb-7 font-sans font-bold leading-tight'>
                        Transforming Ideas into <span className='gradient-primary-accent ' >Powerful</span>  <br /> Software Solutions
                    </h1>
                    <p className='text-lg mb-7'>
                        We are a team of skilled software developers specializing in web applications, websites, and mobile applications. With our expertise and passion for innovation, we bring your ideas to life and deliver exceptional results.
                    </p>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <button className=' bg-primary text-white hover:scale-105 py-2 px-7 rounded-lg shadow-md transition duration-300'>
                            Let's Begin
                        </button>
                    </div>
                </div>
                <div  className='md:translate-y-[-10%]'>
                    <img data-aos=""  src={heroGif} alt='Hero' className='scale-90 rounded-tl-[200px] rounded-tr-[170px] rounded-bl-[100px] rounded-br-[120px]' />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
