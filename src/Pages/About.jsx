// import { GoDotFill } from "react-icons/go";

// export default function About() {
//   return (
//     <div id="about" className="min-h-screen  bg-[#D1D5DB] px-6 py-20">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        
//         <div className="space-y-15 text-lg leading-relaxed">

//           <p>Hi, I'm <strong>Nikita Gupta</strong>. I’m a <strong>Frontend Developer</strong> who enjoys creating clean, responsive, and user-friendly web applications  that solve real-world problems.</p>
        
// <div className="flex  gap-4">

//   <span className="mt-1 flex-shrink-0">
//     <GoDotFill className="text-2xl" />
//   </span>

//   <div>
//     <h2 className="text-2xl font-semibold mb-3">My Background</h2>
//     <p>
//       I hold a <strong>Bachelor of Arts (Honors) in Political Science</strong> and have over <strong>3 years of professional experience</strong> working as a <strong>Backend Executive at Prime Packes India</strong> (2021–2024), a manufacturing company. In this role, I was responsible for managing data operations, coordinating with clients, handling order processing, and supporting backend administrative tasks.
//     </p>
//     <p className="mt-3">
//       This experience helped me develop strong analytical thinking, attention to detail, problem-solving abilities, and time management skills—qualities that now directly translate into writing efficient, clean, and maintainable code.
//     </p>
//   </div>
// </div>

// <div className="flex gap-4">

//   <span className="mt-1 flex-shrink-0">
//     <GoDotFill className="text-2xl" />
//   </span>
  
//           <div>
//             <h2 className="text-2xl font-semibold mb-3">Why I Transitioned to Web Development</h2>
//             <p>
//               While working in operations, I became increasingly fascinated by the power of technology to transform industries and improve user experiences. I realized that I wanted to be part of building solutions rather than just managing processes. The creativity, logical problem-solving, and continuous learning in web development deeply resonated with me.
//             </p>
//             <p className="mt-3">
//               In <strong>mid-2024</strong>, I made the bold decision to pursue my passion and began my journey into coding. Since then, I've been dedicated to mastering the fundamentals and building projects that showcase my skills.
//             </p>
//             <p className="mt-3">
//               Since then, I've dedicated myself to mastering HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap, and Git/GitHub through hands-on projects, online courses, and consistent practice. I'm currently expanding into backend technologies like Node.js, Express.js, and MongoDB to become a well-rounded full-stack developer.
//             </p>
//           </div>
// </div>
//          <div className="flex gap-4">
//           <span className="mt-1 flex-shrink-0">
//             <GoDotFill className="text-2xl" />
//           </span>
          
// <div>
//   <h2 className="text-2xl font-semibold mb-3">What I’ve Learned From My Professional Journey</h2>
//           <ul className=" list-decimal list-inside space-y-2 text-lg leading-relaxed">
//   <li>Understand user needs and business requirements well to create meaningful solutions.</li>
//   <li>Write clean, maintainable, and scalable code that can grow with projects.</li>
//   <li>Work well with cross-functional teams and explain technical concepts clearly.</li>
//   <li>Manage deadlines effectively and deliver quality work under pressure.</li>
//   <li>Learn new tools and technologies quickly to stay updated in a fast-changing environment.</li>
//   <li>Stay organized and handle multiple tasks efficiently.</li>
// </ul>
// </div>
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { GoDotFill } from "react-icons/go";
import { FaBriefcase, FaCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-[#D1D5DB] px-6 py-30">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 " data-aos="slide-up" >
          About Me
        </h2>
        <p className="text-center text-xl text-gray-800 mb-12 max-w-4xl mx-auto" data-aos="slide-up">
          Hi, I'm <strong>Nikita Gupta</strong>. I'm a <strong>Frontend Developer</strong> who enjoys creating clean, responsive, and user-friendly web applications that solve real-world problems.
        </p>

        {/* Content Cards */}
        <div className="space-y-8">
          
          {/* Card 1: My Background */}
          <div className= "bg-gradient-to-br from-gray-100 to-gray-300  rounded-xl shadow-xl p-8 hover:shadow-inner transition-shadow duration-400" data-aos="zoom-in">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-teal-600 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">My Background</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  I hold a <strong>Bachelor of Arts (Honors) in Political Science</strong> and have over <strong>3 years of professional experience</strong> working as a <strong>Backend Executive at Prime Packes India</strong> (2021–2024), a manufacturing company. In this role, I managed data operations, coordinated with clients, handled order processing, and supported backend administrative tasks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This experience helped me develop strong analytical thinking, attention to detail, problem-solving abilities, and time management skills—qualities that now translate into writing efficient, clean, and maintainable code.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Why Web Development */}
          <div className=" bg-gradient-to-br from-gray-100 to-gray-300  rounded-xl shadow-xl p-8 hover:shadow-inner transition-shadow duration-400" data-aos="zoom-out">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaCode className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Why I Transitioned to Web Development</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  While working in operations, I became increasingly fascinated by the power of technology to transform industries and improve user experiences. I realized that I wanted to be part of building solutions rather than just managing processes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In <strong>mid-2024</strong>, I made the bold decision to pursue my passion and began my journey into coding. Since then, I've dedicated myself to mastering HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and Git/GitHub through hands-on projects and consistent practice.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Professional Strengths */}
          <div className=" bg-gradient-to-br from-gray-100 to-gray-300  rounded-xl shadow-xl p-8 hover:shadow-inner transition-shadow duration-400"  data-aos="zoom-in">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <FaLightbulb className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">What I’ve Learned From My Professional Journey</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                  <li>Understand user needs and business requirements to create meaningful solutions</li>
                  <li>Write clean, maintainable, and scalable code</li>
                  <li>Work well with cross-functional teams and communicate clearly</li>
                  <li>Manage deadlines effectively and deliver quality work under pressure</li>
                  <li>Learn new tools quickly to stay updated</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
