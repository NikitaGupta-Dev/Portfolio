import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div id='home' className="flex flex-col justify-center items-center bg-gray-800 px-4 h-screen " data-aos="fade-down" >
      <div className="w-full flex flex-col items-center pt-50 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
          Hello <span className="inline-block">👋</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          I'm <span className="text-cyan-400" >Nikita Gupta</span>, a Frontend
          Developer.
        </h2>
        <div className="max-w-4xl mx-auto ">
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 ">
            Focused on code quality, collaboration, and continuous learning to
            produce modern, reliable web solutions.
          </p>
        </div>

        <div className="flex justify-center gap-5 flex-col space-y-0   md:flex-row md:space-y-0 md:gap-8 text-white cursor-Pointer">
          <NavLink
            to="/projects"
            className="font-semibold text-xl bg-gradient-to-r from-[#174457] to-[#24363F] px-7 py-3 rounded-lg shadow flex items-center gap-2 hover:from-[#24363F] hover:to-[#174457]"
          >
          
          
            <FaRocket />
            My Projects
          </NavLink>
          <a
            href="/Public/pdf.pdf"
            target="_blank"
            className="font-semibold text-xl px-7 py-3 rounded-lg bg-transparent text-white border border-gray-700 flex items-center gap-2 cursor-pointer hover:bg-gray-700"
          >
            {" "}
            Download Resume <FaArrowCircleDown />
          </a>
        </div>
      
<div className="relative w-full flex justify-center my-12 ">
  <div className="w-4/5 h-1 bg-gradient-to-r from-[#174457] to-[#24363F] rounded-full shadow-lg"></div>
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5/5 h-8 bg-gradient-to-r from-[#174457]/0 via-white/20 to-[#24363F]/30 blur-md rounded-full"></div>
</div>
{/* <p className="text-white text-4xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis illo accusamus esse cumque laboriosam doloremque atque perferendis porro quae tenetur aut nemo ut consectetur numquam quia ad dolorem nostrum, minus recusandae voluptates. Aspernatur saepe doloremque aliquam dignissimos, voluptates perspiciatis quas iusto. Fugiat ipsa vel dolorem architecto provident totam, fugit nam? Minima ipsam quod accusamus cum, omnis, earum ad amet a magnam eveniet necessitatibus tenetur temporibus minus ab est dolor blanditiis, doloremque qui veniam. Saepe deleniti hic necessitatibus eos atque neque rerum eaque. Et nesciunt minus ratione officiis rem fugit soluta, impedit necessitatibus perspiciatis, cupiditate ducimus at libero nisi voluptates?</p> */}
      </div>
    </div>
  );
}
