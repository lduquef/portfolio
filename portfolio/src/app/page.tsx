import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import "./globals.css"
import Image from 'next/image';
import perfil from '../../public/perfil.png';
import Card from '../componets/Card';
import web1 from "../../public/web1.png";
import Web from '../componets/Web';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen max-w-md mx-auto">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedbyed</h1>
            <ul className="flex items-center">
              <li> 
                <BsFillMoonStarsFill className="cursor-pointer text-3xl"/> 
              </li>
              <li> 
              <a className="bg-gradient-to-r  from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md" href = "#"> Resume</a>
              </li>
            </ul>
        </nav>
        <div className="text-center p-10 align-middle">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Luis Santiago Duque Franco</h2>
          <h3 className="text-2xl py-2 md:text-3xl">developer and designer</h3>
          <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            freelancer providing services for programmin needs. Join me down below and let{"'"}s get cracking!</p>
          <div className = "text-5xl flex justify-center gap-y-2 py-3 ">
            <AiFillTwitterCircle className = "  text-blue-600"/>
            <AiFillLinkedin className = " text-blue-900"/>
            <AiFillYoutube className = " text-red-600"/>
          </div>        
          <div className="mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image className = "mx-auto" src={perfil} alt="foto de perfil"/>
          </div>
        </div>
      </section>
      {/* *-------------------------* */}
      <section  className="text-center mx-auto "   >
        <div className="text-center  mx-auto">
          <h3 className="text-3xl py-1 font-semibold text-center bx-auto">Services I Offer</h3>
          <p className="text-justify text-md py-2 leading-8 text-gray-800 max-w-lg mx-auto">
            Since the beginning of my journey as a freelance 
            <span className="text-teal-500"> designer</span> and developer. I{"'"}ve done remote work for agencies consulted for <span className="text-teal-500">startups</span> and collaborated whit a talend people to create digital products for both business and consumer use
          </p>
          <p className="text-justify text-md py-2 leading-8 text-gray-800 max-w-lg mx-auto">
            I offer from a wide range of  
            <span className="text-teal-500"> services</span> 
            ,including brand design, programming and teaching.
          </p>
        </div>
        <div className = "lg:flex gap-10 mx-auto">
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
      <div>
          <h3  className="text-3xl py-1">Portofolio</h3>
      </div>
      <section className="md:columns-3 sm:columns-1 place-content-between py-5 my-5">
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
  )
}
