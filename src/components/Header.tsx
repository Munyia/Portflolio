import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center fixed w-[80%]  z-50 backdrop-blur-md bg-white/30 shadow-md">
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>

          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
