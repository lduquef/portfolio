import React from "react";
import Image from "next/image";


function Web(props: { name: string; title: string; parrafo: string; }) {
  return(
    <>
      <div className="text-center shadow-lg rounded-xl my-10">
      <Image  className="mx-auto" src={require(`../../public/${props.name}.png`)} alt={props.name} width={200} height={200}/>
      {props.title}
      {props.parrafo}
      </div>
    </>
  )
};

export default Web