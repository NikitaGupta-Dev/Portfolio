import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Skill() {
  return (
   <div id='skill' className="bg-[#22282C] py-50  text-center" data-aos="zoom-in">
  <h2 className="text-4xl font-bold text-white mb-12">My Core Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-5 justify-center items-end mx-auto max-w-5xl">
   
    <div className="flex flex-col items-center">
      <FaHtml5 className="text-5xl text-[#EF652A] mb-2" />
      <span className="font-medium text-lg text-white mb-2">HTML</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-200 to-white rounded-full"></div>
    </div>
    <div className="flex flex-col items-center">
      <FaCss3Alt className="text-5xl text-[#2965F1] mb-2" />
      <span className="font-medium text-lg text-white mb-2">CSS</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"></div>
    </div>
    <div className="flex flex-col items-center">
      <FaJs className="text-5xl text-[#F0DB4F] mb-2" />
      <span className="font-medium text-lg text-white mb-2">JavaScript</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"></div>
    </div>
    <div className="flex flex-col items-center">
      <RiReactjsFill className="text-5xl text-[#61DBFB] mb-2" />
      <span className="font-medium text-lg text-white mb-2">React</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"></div>
    </div>
    <div className="flex flex-col items-center">
      <RiTailwindCssFill className="text-5xl text-[#38BDF8] mb-2" />
      <span className="font-medium text-lg text-white mb-2">Tailwind</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"></div>
    </div>
    <div className="flex flex-col items-center">
      <FaBootstrap className="text-5xl text-[#c142f0] mb-2" />
      <span className="font-medium text-lg text-white mb-2">Bootstrap</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"></div>
    </div>
    <div className="flex flex-col items-center">
      <FaGithub className="text-5xl text-white mb-2" />
      <span className="font-medium text-lg text-white mb-2">Git & GitHub</span>
      <div className="w-14 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"></div>
    </div>
  </div>
  

</div>

  )
}
