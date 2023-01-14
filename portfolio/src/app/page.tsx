import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import "./globals.css"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li> 
                <BsFillMoonStarsFill className="cursor-pointer"/> 
              </li>
              <li> 
              <a className="bg-gradient-to-r  from-cyan-500 to-teal-300 text-white" href = "#"> Resume</a>
              </li>
            </ul>
        </nav>
      </section>
    </main>
  )
}
