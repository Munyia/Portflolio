import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const location = useLocation(); // Get current location
  const isActive = (path: string) => location.pathname === path;
  const [pageTitle, setPageTitle] = useState("Default Title");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("About");
        break;
      case "/projects":
        setPageTitle("Projects");
        break;
      case "/resume":
        setPageTitle("Resume");
        break;
      case "/contact":
        setPageTitle("Contact");
        break;
      default:
        setPageTitle("Default Title");
        break;
    }
  }, [location]);

  return (
    <div className="lg:flex lg:h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:w-[80%] lg:pl-[20%] h-full lg:relative">
        {/* Page Title & Hamburger Menu */}
        <div className="flex items-center justify-between p-6 text-3xl lg:text-3xl font-extrabold text-sec1">
          <h1>{pageTitle}</h1>
          {/* Hamburger Menu for small screens */}
          <div className="lg:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
        </div>

        {/* Collapsible Menu for Small Devices */}
        {isMenuOpen && (
  <div className="absolute top-[1vh] right-0 bg-sec1 w-1/2 shadow-md rounded-lg z-50 p-4">
    <nav className="flex flex-col gap-4 items-end"> {/* Align menu items to the right */}
      <Link
        to="/"
        className={`font-bold text-base ${
          isActive("/") ? "text-sec" : "text-black hover:text-sec1"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`font-bold text-base ${
          isActive("/projects") ? "text-sec" : "text-black hover:text-sec1"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        Projects
      </Link>
      <Link
        to="/resume"
        className={`font-bold text-base ${
          isActive("/resume") ? "text-sec" : "text-black hover:text-sec1"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        Resume
      </Link>
      <Link
        to="/contact"
        className={`font-bold text-base ${
          isActive("/contact") ? "text-sec" : "text-black hover:text-sec1"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
    </nav>
  </div>
)}


        {/* Main Content */}
        <main className="p-6 overflow-auto lg:flex-1">
          <Outlet />
        </main>

        {/* Standard Navigation for Large Screens */}
        <div className="hidden lg:flex  absolute top-0 right-0 w-1/2 h-[10vh] drop-shadow-lg rounded-s-2xl  bg-white/30 shadow-md backdrop-blur-md z-50 p-4 justify-end">
          <header className="flex  flex-col justify-between h-full">
            <nav className="flex justify-center gap-6">
              <Link
                to="/"
                className={`font-bold text-lg ${
                  isActive("/") ? "text-sec" : "text-sec1 hover:text-sec1"
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`font-bold text-lg ${
                  isActive("/projects") ? "text-sec" : "text-sec1 hover:text-sec1"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className={`font-bold text-lg ${
                  isActive("/resume") ? "text-sec" : "text-sec1 hover:text-sec1"
                }`}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className={`font-bold text-lg ${
                  isActive("/contact") ? "text-sec" : "text-sec1 hover:text-sec1"
                }`}
              >
                Contact
              </Link>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Layout;
