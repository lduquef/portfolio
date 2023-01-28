'use client'
import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import "./globals.css"
import Image from 'next/image';
import perfil from '../../public/perfil.png';
import Card from '../componets/Card';
import Web from '../componets/Web';
const inter = Inter({ subsets: ['latin'] });
import React from 'react';
import Head from './head'

export default function Home() {
  const [darkMode,setDarkmode] = React.useState(false);
  return (
    <div className= {darkMode? "dark":""}>
    <Head/>
    <main className="bg-white px-9 md:px-20 lg:px-40 dark:bg-[#13005A]">
      
      <section className="min-h-screen max-w-md mx-auto">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-teal-100">developedbyed</h1>
            <ul className="flex items-center">
              <li> 
                <BsFillMoonStarsFill onClick={()=>setDarkmode(!darkMode)} className="cursor-pointer text-3xl dark:text-gray-400"/> 
              </li>
              <li> 
                {darkMode ? (<a className="bg-gradient-to-r  from-[#3C2C75] to-gray-800 text-white px-4 py-2 rounded-md" href = "#"> Resume</a>)
                :(<a className="bg-gradient-to-r  from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md" href = "#"> Resume</a>) }
              
              </li> 
            </ul>
        </nav>
        <div className="text-center p-10 align-middle">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-500">Luis Santiago Duque Franco</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">developer and designer</h3>
          <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
            freelancer providing services for programmin needs. Join me down below and let{"'"}s get cracking!</p>
          <div className = "text-5xl flex justify-center gap-y-2 py-3 ">
            <AiFillTwitterCircle className = "  text-blue-600"/>
            <AiFillLinkedin className = " text-blue-900"/>
            <AiFillYoutube className = " text-red-600"/>
          </div>  
          {darkMode? ( <div className="mx-auto  bg-gradient-to-b from-[#25175a] to-indigo-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image className = "mx-auto" src={perfil} alt="foto de perfil"/>
          </div>):
          (<div className="mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image className = "mx-auto" src={perfil} alt="foto de perfil"/>
          </div>)}      
         
        </div>
      </section>
      {/* *-------------------------* */}
      <section  className="text-center mx-auto  "   >
        <div className="text-center  mx-auto">
          <h3 className="text-3xl py-1 font-semibold text-center bx-auto dark:text-gray-300">Services I Offer</h3>
          <p className="text-justify text-md py-2 leading-8 text-gray-800 max-w-lg mx-auto dark:text-gray-400">
            Since the beginning of my journey as a freelance 
            <span className="text-teal-500 dark:text-gray-400"> designer</span> and developer. I{"'"}ve done remote work for agencies consulted for <span className="text-teal-500">startups</span> and collaborated whit a talend people to create digital products for both business and consumer use
          </p>
          <p className="text-justify text-md py-2 leading-8 text-gray-800 max-w-lg mx-auto dark:text-gray-400">
            I offer from a wide range of  
            <span className="text-teal-500 dark:text-gray-400"> services</span> 
            ,including brand design, programming and teaching.
          </p>
        </div>
        <div className = "text-center lg :flex gap-10 mx-auto">
        <Card image='design'
        title='Beautiful Design'
        parrafo="creating elegant designs suited for your needs following core design theory."
        p1= "Phtoshop"
        p2="illustrator"
        p3="Figma"
        />
        <Card image='code'
        title='Beautiful Design'
        parrafo="creating elegant designs suited for your needs following core design theory."
        p1= "Phtoshop"
        p2="illustrator"
        p3="Figma"
        />
        <Card image='consulting'
        title='Beautiful Design'
        parrafo="creating elegant designs suited for your needs following core design theory."
        p1= "Phtoshop"
        p2="illustrator"
        p3="Figma"
        />
        </div>
      </section>
      <div className="text-center">
          <h3  className="text-3xl py-1">Portofolio</h3>
      </div>
      <section className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <Web 
        name = 'web1'
        title='calculator'
        parrafo = 'consiste'
        
        />
        <Web 
        name = 'web2'
        title='Enlistar Tareas'
        parrafo = 'consiste'
        />
        <Web 
        name = 'web3'
        title='contador de clicks'
        parrafo = 'consiste'
        />
        <Web 
        name = 'web4'
        title='landign page'
        parrafo = 'consiste'
        />
      </section>
    </main>
    </div>
  )
}
