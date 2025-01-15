import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { aster, bb, cc, nb, ws } from "../assets";

const Projects = () => {
   const [displayedText, setDisplayedText] = useState<string>("");
    const fullText = "My Projects";
    const animationDelay = 300; // 0.3 seconds between letters
    const stayDuration = 5000; // 5 seconds when the full text is displayed
  
    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;
      let currentIndex = 0;
  
      const animateText = () => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(animateText, animationDelay);
        } else {
          timeout = setTimeout(() => {
            currentIndex = 0;
            setDisplayedText("");
            animateText();
          }, stayDuration);
        }
      };
  
      animateText();
  
      return () => clearTimeout(timeout);
    }, [fullText]);
  
  return (
    <section id="works" className="p-8">
      <div className="text-3xl mb-3  text-sec font-bold">
          {displayedText.split("").map((letter, index) => (
            <span
              key={index}
              className={`dancing-text`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="bg-sec text-white p-4 shadow-lg rounded-3xl hover:shadow-2xl transition-all">
          <img
            src={aster}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg mb-4 sm:h-64 md:h-48"
          />
          <h3 className="text-lg font-play text-pry font-bold mb-2">
            AsterCart
          </h3>
          <p className="text-sm font-jet mb-2">
            An eCommerce supermarket store admin dashboard. This full-stack
            application allows store admins to manage inventory, track sales,
            and handle customer data efficiently.
          </p>
          <div className="flex flex-wrap justify-start gap-2 text-xs text-gray-500">
            <span className="flex items-center bg-[#61dafb] text-black px-2 py-1 rounded-full">
              <FaReact className="mr-1" />
              React
            </span>
            <span className="flex items-center bg-[#3178c6] text-black px-2 py-1 rounded-full">
              <SiTypescript className="mr-1" />
              TypeScript
            </span>
            <span className="flex items-center bg-[#38bdf8] text-black px-2 py-1 rounded-full">
              <SiTailwindcss className="mr-1" />
              Tailwind
            </span>
            <span className="flex items-center bg-[#8cc84b] text-black px-2 py-1 rounded-full">
              <SiNodedotjs className="mr-1" />
              Node.js
            </span>
            <span className="flex items-center bg-[#4DB33D] text-black px-2 py-1 rounded-full">
              <SiMongodb className="mr-1" />
              MongoDB
            </span>
          </div>
          <p className="mt-4 text-sm font-jet text-pry">
            E-Commerce Web Application
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-sec text-white p-4 shadow-lg rounded-3xl hover:shadow-2xl transition-all">
          <img
            src={ws}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg mb-4 sm:h-64 md:h-48"
          />
          <h3 className="text-lg text-pry font-bold mb-2">WordSmitters</h3>
          <p className="text-sm font-jet mb-2">
            This web application connects users with ghostwriters for book
            writing, publishing, and editing services, showcasing the available
            services and enabling social media interaction.
          </p>
          <div className="flex flex-wrap justify-start gap-2 text-xs text-gray-500">
            <span className="flex items-center bg-[#61dafb] text-black px-2 py-1 rounded-full">
              <FaReact className="mr-1" />
              React
            </span>
            <span className="flex items-center bg-[#3178c6] text-black px-2 py-1 rounded-full">
              <SiTypescript className="mr-1" />
              TypeScript
            </span>
            <span className="flex items-center bg-[#38bdf8] text-black px-2 py-1 rounded-full">
              <SiTailwindcss className="mr-1" />
              Tailwind
            </span>
          </div>
          <p className="mt-4 text-sm text-pry font-jet">Web Application</p>
        </div>

        {/* Project 3 */}
        <div className="bg-sec text-white p-4 shadow-lg rounded-3xl hover:shadow-2xl transition-all">
          <img
            src={bb}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg mb-4 sm:h-64 md:h-48"
          />
          <h3 className="text-lg text-pry font-bold mb-2">BayBook</h3>
          <p className="text-sm font-jet mb-2">
            This web application allows writers to publish their works, manage
            editing and revisions, and connect with readers through integrated
            social media features. It showcases the tools and services available
            for authors to promote and distribute their books.
          </p>

          <div className="flex flex-wrap justify-start gap-2 text-xs text-gray-500">
            <span className="flex items-center bg-[#61dafb] text-black px-2 py-1 rounded-full">
              <FaReact className="mr-1" />
              React
            </span>
            <span className="flex items-center bg-[#3178c6] text-black px-2 py-1 rounded-full">
              <SiTypescript className="mr-1" />
              TypeScript
            </span>
            <span className="flex items-center bg-[#38bdf8] text-black px-2 py-1 rounded-full">
              <SiTailwindcss className="mr-1" />
              Tailwind
            </span>
            <span className="flex items-center bg-[#8cc84b] text-black px-2 py-1 rounded-full">
              <SiNodedotjs className="mr-1" />
              Node.js
            </span>
            <span className="flex items-center bg-[#4DB33D] text-black px-2 py-1 rounded-full">
              <SiMongodb className="mr-1" />
              MongoDB
            </span>
          </div>
          <p className="mt-4 text-pry text-sm font-jet">Web Application</p>
        </div>

        {/* Project 4 */}
        <div className="bg-sec text-white p-4 shadow-lg rounded-3xl hover:shadow-2xl transition-all">
          <img
            src={nb}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg mb-4 sm:h-64 md:h-48"
          />
          <h3 className="text-lg text-pry font-bold mb-2">NoreBase</h3>
          <p className="text-sm font-jet mb-2">
            This dashboard provides an overview of all coins, displaying their
            code, price, and total supply. It allows users to monitor coin data
            in real time, providing key insights for effective decision-making.
          </p>

          <div className="flex flex-wrap justify-start gap-2 text-xs text-gray-500">
            <span className="flex items-center bg-[#61dafb] text-black px-2 py-1 rounded-full">
              <FaReact className="mr-1" />
              React
            </span>
            <span className="flex items-center bg-[#3178c6] text-black px-2 py-1 rounded-full">
              <SiTypescript className="mr-1" />
              TypeScript
            </span>
            <span className="flex items-center bg-[#38bdf8] text-black px-2 py-1 rounded-full">
              <SiTailwindcss className="mr-1" />
              Tailwind
            </span>
            <span className="flex items-center bg-[#8cc84b] text-black px-2 py-1 rounded-full">
              <SiNodedotjs className="mr-1" />
              Node.js
            </span>
            <span className="flex items-center bg-[#4DB33D] text-black px-2 py-1 rounded-full">
              <SiMongodb className="mr-1" />
              MongoDB
            </span>
          </div>
          <p className="mt-4 text-pry text-sm font-jet">
            Cryptocurrency Tracking
          </p>
        </div>

        {/* Project 5 */}
        <div className="bg-sec text-white p-4 shadow-lg rounded-3xl hover:shadow-2xl transition-all">
          <img
            src={cc}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg mb-4 sm:h-64 md:h-48"
          />
          <h3 className="text-lg text-pry font-bold mb-2">
            Coffee Landing Page
          </h3>
          <p className="text-sm font-jet mb-2">
            This landing page, built with HTML, CSS, and React, offers a clean
            and responsive design to showcase the platform's features. It
            provides users with an engaging first impression and easy navigation
            to explore the services and tools available.
          </p>

          <div className="flex flex-wrap justify-start gap-2 text-xs text-gray-500">
            <span className="flex items-center bg-[#61dafb] text-black px-2 py-1 rounded-full">
              <FaReact className="mr-1" />
              React
            </span>
            <span className="flex items-center bg-[#e34f26] text-black px-2 py-1 rounded-full">
              <SiHtml5 className="mr-1" />
              HTML
            </span>
            <span className="flex items-center bg-[#1572b6] text-black px-2 py-1 rounded-full">
              <SiCss3 className="mr-1" />
              CSS
            </span>
          </div>
          <p className="mt-4 text-pry text-sm font-jet">Website</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
