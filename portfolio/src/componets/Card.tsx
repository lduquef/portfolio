import React from "react";
import Image from 'next/image';


type CardProps = {
  image:string,
  title:string,
  parrafo:string,
  p1:string,
  p2:string,
  p3:string,
  
};

function Card({ image , title ,parrafo ,p1,p2,p3}:CardProps) {
    
  return (
  <>
  <div className=" text-center shadow-lg rounded-xl my-10 mx-auto dark:bg-[#431870] dark:shadow-[#25175a]">
  <Image  className="mx-auto" src={require(`../../public/${image}.png`)} alt={image} width={100} height={100}/>
  <h3 className="text-lg  font-medium pt-8 pb-2 dark:text-gray-400">{title}</h3>
  <p className="py-2 isdarkmode:text-gray-300 dark:text-gray-400">
    {parrafo}
  </p>
  <h4 className=" font-semibold py-4 text-teal-600 dark:text-[#13005A]">Design tools i use</h4>
  <p className="text-gray-800 dark:text-gray-400"> {p1}</p>
  <p className="text-gray-800 dark:text-gray-400 py-1">{p2}</p>
  <p className="text-gray-800 dark:text-gray-400 py-1">{p3}</p>

  </div>
</>)
};

export default Card
