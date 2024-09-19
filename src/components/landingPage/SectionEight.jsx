import React from 'react'
import members from '../../assets/members';
import TeamCard from '../TeamCard';
const SectionEight = () => {

    const OurTeam=members.slice(0,3);
    return ( 
        <div className='min-h-screen bg-primary dark:bg-gray-700 dark:text-primary md:p-10'>
           <div className='md:text-4xl font-bold md:py-3 text-3xl text-center md:text-self '
             data-aos="fade-down"
             data-aos-duration="900"
             data-aos-delay="100"
           >Meet Our Team</div>
           <p className='py-1 text-center' 

             data-aos="fade-down"
             data-aos-duration="900"
             data-aos-delay="0"

           >Get to know the talented individuals behind Addis Spark.</p>
           <div className='grid md:grid-cols-3 w0[364px] gap-5 md:py-5'>
             {
            OurTeam.map((memeber,index)=>
            {
              var duration=(index+1)*500;
                return (
                 <div key={index}

                 data-aos="fade-up"
                 data-aos-duration={duration}
                //  data-aos-delay="400"
                 >
                    <TeamCard
                    img={memeber?.img}
                    alt={memeber?.alt}
                    name={memeber?.name}
                    postition={memeber?.postition}
                    description={memeber?.description}
                    linkedinUrl={memeber?.linkedinUrl}
                    githubUrl={memeber?.githubUrl}
                    telegramUrl={memeber?.telegramUrl}
                    portfolioUrl={memeber?.portfolioUrl}/>

                 </div>
                )
            })
             }
           </div>
          <div className='flex justify-center'>
          <button className='md:px-7  px-4 mt-5 md:py-1 border-gray-600 shadow-[5px_4px_0px_0px_rgba(0,0,0,0.9)] border-[1px]' >
            learn More
           </button>
          </div>
        </div>
     );
}
 
export default SectionEight;