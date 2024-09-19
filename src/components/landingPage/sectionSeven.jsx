import React from 'react'
import faqs from '../../assets/faqs';
import Accordion from '../Accordion'
const SectionSeven = () => {
    return ( 
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
    );
}
 
export default SectionSeven;
