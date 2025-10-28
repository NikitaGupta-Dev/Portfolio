import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    const handlescroll = () => {
      const sections = ["home", "project", "skill", "about", "contact"];
      const scrollPosition = window.scrollY + 150;
      for (const sectionID of sections) {
        const section = document.getElementById(sectionID);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionID);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handlescroll);
    handlescroll();
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <nav className="bg-gray-900 text-white  text-lg py-4  px-8 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex md:justify-around justify-between items-center ">
        <img src="./logo2.png" alt="Logo" width={50} />

        {/* Hamburger Button */}
        <button
          className="md:hidden block text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width={30} height={30} fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h22M4 16h22M4 24h22"
            />
          </svg>
        </button>

        {/* Navbar Links - Desktop */}
        <ul className="hidden md:flex gap-8 ">
          <li>
            <NavLink
              to="/"
              className={
                activeSection === "home" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={
                activeSection === "project" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("project")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skill"
              className={
                activeSection === "skill" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("skill")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                activeSection === "about" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("about")}
            >
              About Me
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={
                activeSection === "contact" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar Links - Mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 ">
          <li>
            <NavLink
              to="/"
              className={
                activeSection === "home" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("home")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={
                activeSection === "project" ? "nav-link" : ""
              }
              onClick={() => scrollToSection("project")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skill"
              className={
                activeSection === "skill" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("skill")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                activeSection === "about" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("about")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={
                activeSection === "contact" ? "nav-link " : ""
              }
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
