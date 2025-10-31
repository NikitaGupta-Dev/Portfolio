import { FaHtml5 } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Project() {
  return (
    <div  
      id="project"
      className="min-h-screen flex flex-col items-center bg-[#D1D5DB] pt-30 gap-5"
    >
      <h2 className="text-4xl font-bold mb-20 " data-aos="zoom-out" >My Projects</h2>
      {/* Mindfulness Web Project */}
      <div className=" flex flex-col md:flex-row items-center justify-center  w-full gap-10 px-10" data-aos="slide-up">
        <a
          href="https://mindfulness-website-bynikita.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-[90vw] md:max-w-[350px] lg:max-w-[500px] flex-shrink-0"
        >
          <img
            src="mindfulness.png"
            alt="Mindfulness Web"
            className="w-full rounded-lg shadow-lg cursor-pointer hover:-translate-y-3 transition-transform duration-300"
         
            style={{ height: 'auto' }}
          />
        </a>

        <div className="flex flex-col items-center md:items-start justify-center max-w-xl gap-3 px-2" data-aos="slide-up">
          <h2 className="text-3xl font-semibold mb-4 italic underline">Mindfulness </h2>
          <div className="flex flex-row items-center justify-center gap-6">
            <a
              href="https://github.com/NikitaGupta-Dev/Mindfulness"
              target="blanck"  className="text-3xl mb-2 px-3 py-2 rounded-lg border border-black bg-black text-white hover:bg-gray-700"
            >
              <FaGithub className="hover:rotate-6" />
            </a>
           <a href="https://mindfulness-website-bynikita.netlify.app/" target="blank"  className="text-3xl mb-2 px-3 py-2 rounded-lg border border-black bg-black text-white hover:bg-gray-700"><FaRocket className="hover:rotate-45 transform transition-transform duration-300  "/></a>
          </div>
          <p className="mb-4 text-lg text-center md:text-left  tracking-wide">
       Designed a calming meditation space focusing on stress relief and better sleep.  
Built using HTML, CSS, and JavaScript, featuring interactive session controls (play/pause), smooth UI animations, and fully responsive design for mobile and desktop.  
Optimized for all devices, deployed on Netlify.

          </p>
          <ul className="flex flex-wrap  gap-4 text-lg mb-30">
            <li className="px-5 py-2 bg-black  text-white rounded-full border border-black hover:bg-gray-600">
         <span className="flex items-center gap-2"><FaHtml5 className="text-orange-400" />HTML</span>
            </li>
            <li className="px-5 py-2 bg-black text-white rounded-full border border-black hover:bg-gray-600">
              <span className="flex items-center gap-2"><FaCss3Alt className="text-blue-500"/>CSS</span>
            </li>
            <li className="px-5 py-2 bg-black text-white rounded-full border border-black hover:bg-gray-600">
              <span className="flex items-center gap-2"><FaJs className="text-yellow-300" />JavaScript</span>
            </li>
          </ul>
        </div>
      </div>
      {/* FoodBook Project */}
     
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 px-10"  data-aos="slide-up">
        <a
        href="https://foodbook-recipe-web-by-nikitah-guptaa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-[90vw] md:max-w-[350px] lg:max-w-[500px] flex-shrink-0"
        >
          <img
            src="foodbook.png"
            alt="FoodBook Project"
            className="w-full rounded-lg shadow-lg cursor-pointer hover:-translate-y-3 transition-transform duration-300"
            style={{ height: 'auto' }}
          />
        </a>
  
        <div className="flex flex-col items-center md:items-start justify-center max-w-xl gap-3 px-2"  data-aos="slide-up">
          <h2 className="text-3xl font-semibold mb-4 italic underline">FoodBook </h2>
          <div className="flex flex-row items-center justify-center gap-6">
            <a
              href="https://github.com/NikitaGupta-Dev/Foodbook-recipe-web"
              target="blanck"  className="text-3xl mb-2 px-3 py-2 rounded-lg border border-black bg-black text-white hover:bg-gray-700"
            >
              <FaGithub className="hover:rotate-6" />
            </a>
           <a href="https://foodbook-recipe-web-by-nikitah-guptaa.netlify.app/" target="blank"  className="text-3xl mb-2 px-3 py-2 rounded-lg border border-black bg-black text-white hover:bg-gray-700"><FaRocket className="hover:rotate-45 transform transition-transform duration-300  "/></a>
          </div>
          <p className="mb-4 text-lg text-center md:text-left  tracking-wide ">
Created a modern React-based recipe explorer that allows users to search, filter, and discover  global recipes.  
Integrated TheMealDB API for dynamic content, Bootstrap and Tailwind CSS for clean layout, with YouTube video cooking guides directly embedded.  
Implemented error handling and loading states for reliable user experience across all devices.

          </p>
          <ul className="flex flex-wrap gap-4 text-lg mb-30">
            <li className="px-5 py-2 bg-black  text-white rounded-full border border-black hover:bg-gray-600">
                <span className="flex items-center gap-2"><RiReactjsFill className="text-[#61DBFB] " />React</span>
            </li>
            <li className="px-5 py-2 bg-black text-white rounded-full border border-black hover:bg-gray-600">
              <span className="flex items-center gap-2"><RiTailwindCssFill className="text-[#38B2AC]" />Tailwind</span>
            </li>
            <li className="px-5 py-2 bg-black text-white rounded-full border border-black hover:bg-gray-600">
              <span className="flex items-center gap-2"><FaBootstrap className="text-[#c142f0]" />Bootstrap</span>
            </li>
          </ul>
        </div>
    </div>
    
{/* Portfolio web project */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 px-10"  data-aos="slide-up"  >
        <a
          href="https://nikitah-guptah-portfolio.netlify.app/"
       target="_blank"
          rel="noopener noreferrer"
          className="block max-w-[90vw] md:max-w-[350px] lg:max-w-[500px] flex-shrink-0"  
        >
          <img
            src="portfolio.png"
            alt="FoodBook Project"
            className="w-full rounded-lg shadow-lg cursor-pointer hover:-translate-y-3 transition-transform duration-300"
            style={{ height: 'auto' }}
          /> 
        </a>

        <div className="flex flex-col items-center md:items-start justify-center max-w-xl gap-3 px-2"  data-aos="slide-up">
          <h2 className="text-3xl font-semibold mb-4 italic underline">Portfolio </h2>
          <div className="flex flex-row items-center justify-center gap-6">
            <a
              href="https://github.com/NikitaGupta-Dev?tab=repositories"
              target="_blank" className="text-3xl mb-2 px-3 py-2 rounded-lg border border-black bg-black text-white hover:bg-gray-700"
            >
              <FaGithub className="hover:rotate-6" />
            </a>
           <a href="https://nikitah-guptah-portfolio.netlify.app/" target="blank"  className="text-3xl mb-2 px-3 py-2 rounded-lg border border-black bg-black text-white hover:bg-gray-700"><FaRocket className="hover:rotate-45 transform transition-transform duration-300  "/></a>
          </div>
          <p className="mb-4 text-lg text-center md:text-left  tracking-wide ">
Built a responsive personal website showcasing my work.  
Used React and Tailwind CSS for fast performance, designed interactive multi-page navigation, custom animations, and smooth scrolling for a professional look.  
Features downloadable resume, live project demos, and contact options—deployed on Netlify.

          </p>
          <ul className="flex flex-wrap gap-4 text-lg mb-30">
            <li className="px-5 py-2 bg-black  text-white rounded-full border border-black hover:bg-gray-600">
           <span className="flex items-center gap-2"><RiReactjsFill  className="text-[#61DBFB]" />React</span>
            </li>
            <li className="px-5 py-2 bg-black text-white rounded-full border border-black hover:bg-gray-600">
              <span className="flex items-center gap-2"><RiTailwindCssFill className="text-[#38B2AC]" />Tailwind</span>
            </li>
      
          </ul>
        </div>
      </div>
      </div>
   
  );
}
