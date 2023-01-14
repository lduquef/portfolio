import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import "./globals.css"
import Image from 'next/image';
import perfil from '../../public/perfil.png';
import design from '../../public/design.png';
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
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
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-bold">Luis Santiago Duque Franco</h2>
          <h3 className="text-2xl py-2 font-semibold">developer and designer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">freelancer providing services for programmin needs. Join me down below and let{"'"}s get cracking!</p>
          <div className = "text-5xl flex justify-center gap-y-2 py-3 ">
            <AiFillTwitterCircle className = "  text-blue-600"/>
            <AiFillLinkedin className = " text-blue-900"/>
            <AiFillYoutube className = " text-red-600"/>
          </div>        
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image  objectFit = "cover" src={perfil} alt="foto de perfil"/>
          </div>
        </div>
      </section>
      {/* *-------------------------* */}
      <section>
        <div className="text-center">
          <h3 className="text-3xl py-1 font-semibold">Services I Offer</h3>
          <p className="text-justify text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelance 
            <span className="text-teal-500"> designer</span> and developer. I{"'"}ve done remote work for agencies consulted for <span className="text-teal-500">startups</span> and collaborated whit a talend people to create digital productos for both business and consumer use
          </p>
          <p className="text-justify text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of  
            <span className="text-teal-500"> services</span> 
            ,including brand design, programming and teaching.
          </p>
        </div>
        <div className="text-center shadow-lg rounded-xl my-10">
          <Image src={design} alt="design" width={100} height={100}/>
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p>
            {""}
            creating elegant designs suited for your needs following core design theory
          </p>
          <h4 className=" font-semibold py-4 text-teal-600">Design tools i use</h4>
          <p className="text-gray-800 py-1"> Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">figma</p>

        </div>

        <Image src={code} alt="code" />
        <Image src={consulting} alt="consulting" />
      </section>
    </main>
  )
}
