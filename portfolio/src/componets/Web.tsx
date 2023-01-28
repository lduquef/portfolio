import React from "react";
import Image from "next/image";


function Web(props: { name: string; title: string; parrafo: string; }) {
  return(
    <div className="basis-1/3 flex-1 dark:bg-[#462BA6]  dark:shadow-[#3C2C75] shadow-lg rounded-xl">
      <div className="text-center s my-10 ">
      <Image  
        src={require(`../../public/${props.name}.png`)} 
        className="mx-auto  rounded-lg object-cover"
        alt={props.name} 
        
        />
        <h1 className="dark:text-teal-500">{props.title}</h1>
        <span className="dark:text-gray-300">{props.parrafo}</span>
        
      </div>
    </div>
  )
};

export default Web