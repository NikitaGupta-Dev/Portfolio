// import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import Skill from '../Pages/Skill';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      
        <Home />
      <Project />
      <Skill />
      <About /> 
      <Contact /> 
      
    </>
  );
}

export default Layout;