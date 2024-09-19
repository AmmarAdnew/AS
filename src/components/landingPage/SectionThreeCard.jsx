import React from "react"
import SoftwareDs from "../../assets/SoftwareDs"
const SectionThreeCard = () => {
return(
    SoftwareDs.map((item,index)=>
        {
         return(
             <div key={index} className="w-[40%]">
                
                <img className="size-9 bg-white scale-20 rounded-full dark:rounded-lg" src={item.icon}/>
                <div className="font-semibold text-2xl text-secondary-900 py-2 dark:text-primary-200">{item.title}</div>
                <div className="text-secondary-800 dark:text-secondary-100">{item.description}</div>
             </div>
             )
        })
)
};

export default SectionThreeCard;
