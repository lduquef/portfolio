import React from "react";
import Image from "next/image";
import { ExternalLink } from "react-external-link";
import { link } from "fs";

function Web(props: { name: string; title: string; parrafo: string; link:string; }) {
  return(
    <div className="basis-1/3 flex-1 dark:bg-[#462BA6]  dark:shadow-[#3C2C75] shadow-lg rounded-xl">
      <div className="text-center s my-10 ">
        <ExternalLink href={props.link}> 
      <Image  
        src={require(`../../public/${props.name}.png`)} 
        className="mx-auto  rounded-lg object-cover"
        alt={props.name} 
        
        />
        <h1 className="dark:text-teal-500">{props.title}</h1>
        <span className="dark:text-gray-300">{props.parrafo}</span>
        </ExternalLink>
      </div>
    </div>
  )
};

export default Web