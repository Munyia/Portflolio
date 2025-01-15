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
      <div className="flex-1 lg:w-[80vw] lg:pl-[20vw] h-full lg:relative">
        {/* Page Title & Hamburger Menu for Small Screens */}
        <div className="fixed top-0 left-0 flex-col flex w-full z-50 bg-white/30 backdrop-blur-md p-4 shadow-lg lg:hidden ">
          <div className="flex justify-between">
            <p className="text-2xl">Amaranjo Ndidi Vivian</p>
            <div>
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </div>
          </div>
          <h1 className="font-extrabold text-pry font-play justify-center text-center">{pageTitle}</h1>
        </div>

        {/* Page Title for Large Screens */}
        <div className="hidden lg:flex sm:hidden font-play bg-sec1 pt-10 items-center justify-between p-6 text-3xl lg:text-3xl font-extrabold text-pry">
          <h1>{pageTitle}</h1>
        </div>

        {/* Collapsible Menu for Small Devices */}
        {isMenuOpen && (
          <div className="fixed top-[1vh] right-0 font-play backdrop-blur-md bg-white/30 w-1/2 shadow-md rounded-lg z-50 p-4">
            <nav className="flex flex-col gap-4 items-end"> {/* Align menu items to the right */}
              <Link
                to="/"
                className={`font-bold text-base ${isActive("/") ? "text-sec" : "text-pry hover:text-sec1"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`font-bold text-base ${isActive("/projects") ? "text-sec" : "text-pry hover:text-sec1"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className={`font-bold text-base ${isActive("/resume") ? "text-sec" : "text-pry hover:text-sec1"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className={`font-bold text-base ${isActive("/contact") ? "text-sec" : "text-pry hover:text-sec1"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="p-6 bg-sec1 font-jet overflow-auto lg:flex-1 pt-28 lg:pt-6">
          <Outlet />
        </main>

        {/* Standard Navigation for Large Screens */}
        <div className="hidden lg:flex font-jet absolute top-0 right-0 w-1/2 h-[10vh] drop-shadow-lg rounded-s-2xl bg-white/30 shadow-md backdrop-blur-md z-50 p-4 justify-end">
          <header className="flex flex-col justify-between h-full">
            <nav className="flex justify-center gap-6">
              <Link
                to="/"
                className={`font-bold text-lg ${isActive("/") ? "text-sec" : "text-pry hover:text-sec"}`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`font-bold text-lg ${isActive("/projects") ? "text-sec" : "text-pry hover:text-sec"}`}
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className={`font-bold text-lg ${isActive("/resume") ? "text-sec" : "text-pry hover:text-sec"}`}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className={`font-bold text-lg ${isActive("/contact") ? "text-sec" : "text-pry hover:text-sec"}`}
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
