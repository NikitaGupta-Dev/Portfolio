import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { FaEnvelope, FaPhone } from "react-icons/fa";
export default function Contact() {
  return (
   <footer className="bg-gradient-to-b from-[#22313F] to-[#185267] text-white px-4 pt-7" id="contact"  data-aos="fade-down">
        <h2 className="text-4xl font-bold mb-20 ">Contact</h2>
  <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6">
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2">
        <span className=" text-xl">📧</span>
        <a href="mailto:nikitagupta123489@gmail.com" className="hover:text-gray-400 transition">nikitagupta123489@gmail.com</a>
      </span>
      <span className="flex items-center gap-2">
        <span className=" text-xl">📞</span>
        <a href="tel:+919220805011" className="hover:text-gray-400 transition">+91-9220805011</a>
      </span>
    </div>
    <div className="flex items-center gap-5">
      <a href="https://github.com/NikitaGupta-Dev?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-cyan-700 transition hover:scale-125"> <FaGithub /> </a>
      <a href="https://www.linkedin.com/in/nikitah-gupta/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-cyan-700 transition hover:scale-125"> <FaLinkedin /> </a>
      
    </div>
  </div>
  <hr className="my-4 border-t border-cyan-600/40" />
  <div className="text-center font-normal text-cyan-100 ">
    Designed &amp; Built by Nikita Gupta © 2025
  </div>
</footer>

  );
}
