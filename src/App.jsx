import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import { useEffect } from "react";
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'
import Skill from './Pages/Skill.jsx'
import Layout from './Component/Layout.jsx'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
     AOS.init({
      duration: 1100, 
      once: false    ,
         easing: 'ease-in-out', 
          mirror: false, 
             offset: 200,    
     });
   }, []);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/projects",
          element:<Project/>
        },
        {
          path: "/skill",
          element: <Skill />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
     
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// import { useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Layout from "./Component/Layout";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import './App.css';

// function App() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1100, 
//       once: false    ,
//         easing: 'ease-in-out', 
//           mirror: false, 
//             offset: 200,    
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <Layout />
//     </BrowserRouter>
//   );
// }

// export default App;
