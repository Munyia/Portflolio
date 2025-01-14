import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { munyia } from "../assets";

const Sidebar: React.FC = () => {
  return (
    <div className="lg:w-[20%] lg:fixed lg:top-0 lg:h-screen lg:backdrop-blur-md lg:bg-black text-white lg:shadow-md lg:px-6">
      <div className="hidden lg:flex flex-col items-center h-full">
        <img
          src={munyia}
          alt="Your Name"
          className="rounded-full h-[200px] w-[200px] object-cover object-top mb-2"
        />
        <h2 className="text-2xl text-sec1 font-semibold">
          Amaranjo Ndidi Vivian
        </h2>

        {/* Contact Information */}
        <p className="mt-2 text-base">ndidiranjo@gmail.com</p>

        <div className="flex my-2">
          <FaMapMarkerAlt size={24} className="mr-2 text-sm text-red-500" />
          <span>Abuja, Nigeria</span>
        </div>

        {/* Social Links */}
        <div className="mt-3 flex flex-col gap-2 text-left">
          <div className="flex items-center gap-4">
            <FaGithub size={24} className="text-gray-600" />
            <div>
              <p className="font-semibold">GitHub</p>
              <a
                href="https://github.com/Munyia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-sm hover:underline"
              >
                https://github.com/Munyia
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} className="text-red-700" />
            <div>
              <p className="font-semibold">Gmail</p>
              <a
                href="mailto:ndidiranjo@gmail.com"
                className="text-red-700 text-sm hover:underline"
              >
                ndidiranjo@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp size={24} className="text-green-700" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <a
                href="https://wa.me/2348174365032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 text-sm hover:underline"
              >
                https://wa.me/2348174365032
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin size={24} className="text-blue-700" />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <a
                href="https://linkedin.com/in/vivian-ndidi-amaranjo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-sm hover:underline"
              >
                https://linkedin.com/in/vivian-ndidi-amaranjo
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaInstagram size={24} className="text-pink-600" />
            <div>
              <p className="font-semibold">Instagram</p>
              <a
                href="https://instagram.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 text-sm hover:underline"
              >
                https://instagram.com/your-username
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* For small screens */}
      <div className="flex flex-col">
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md flex justify-around py-2">
        <a
          href="https://github.com/Munyia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} className="text-gray-600" />
        </a>
        <a href="mailto:ndidiranjo@gmail.com">
          <FaEnvelope size={24} className="text-red-700" />
        </a>
        <a
          href="https://wa.me/2348174365032"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} className="text-green-700" />
        </a>
        <a
          href="https://linkedin.com/in/vivian-ndidi-amaranjo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} className="text-blue-700" />
        </a>
        <a
          href="https://instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="text-pink-600" />
        </a>
      </div>
      <div className="lg:hidden fixed bottom-[5] left-0 w-full text-center text-sm text-gray-700">
        <p>Amaranjo Ndidi Vivian</p>
        <div className="flex justify-center items-center gap-1">
          <FaMapMarkerAlt size={16} className="text-red-500" />
          <span>Abuja, Nigeria</span>
        </div>
      </div>
      </div>

  
    </div>
  );
};

export default Sidebar;
