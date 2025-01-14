import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaNodeJs,  } from 'react-icons/fa'; // React, JS, Node, Database
import { SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si'; // Tailwind, TypeScript, Express, MongoDB, MySQL


const Resume = () => {
  return (
    <section id="resume" className="p-8">
      <p className="mb-4">Click below to view or download my resume:</p>
      <div className="flex sm:space-x-6 space-x-2 mb-6 ">
  <a 
    href="https://drive.google.com/file/d/17EhsD6iHtwbtz5hb49_bwSkix8JoEDuT/view?usp=sharing" 
    target="_blank" 
    className="bg-sec text-white py-2 px-6 font-play rounded-lg hover:bg-pry transition duration-300 transform hover:scale-105 text-sm sm:text-base sm:w-auto mb-2 sm:mb-0"
  >
    View Resume
  </a>
  <a 
    href="https://drive.google.com/file/d/17EhsD6iHtwbtz5hb49_bwSkix8JoEDuT/view?usp=sharing" 
    download 
    className="bg-sec text-white py-2 px-6 font-play rounded-lg hover:bg-pry transition duration-300 transform hover:scale-105 text-sm sm:text-base sm:w-auto mb-2 sm:mb-0"
  >
    Download Resume
  </a>
</div>




      <div className="mb-8">
  <h3 className="text-xl font-play  font-semibold">Skills</h3>
 
  <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {/* React */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>React.js</span>
      <FaReact className="w-5 h-5 text-blue-500" /> {/* React icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
    </div>
  </div>

  {/* JavaScript */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>JavaScript</span>
      <FaJs className="w-5 h-5 text-yellow-500" /> {/* JavaScript icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
    </div>
  </div>

{/* TypeScript */}
<div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>TypeScript</span>
      <SiTypescript className="w-5 h-5 text-blue-600" /> {/* TypeScript icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
    </div>
  </div>

  {/* Tailwind CSS */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>Tailwind CSS</span>
      <SiTailwindcss className="w-5 h-5 text-blue-500" /> {/* Tailwind CSS icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
    </div>
  </div>

  {/* HTML */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>HTML</span>
      <FaHtml5 className="w-5 h-5 text-red-500" /> {/* HTML5 icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
    </div>
  </div>

  {/* CSS */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>CSS</span>
      <FaCss3Alt className="w-5 h-5 text-blue-700" /> {/* CSS icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-700 h-2.5 rounded-full" style={{ width: "100%" }}></div>
    </div>
  </div>

 

  {/* Node.js */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>Node.js</span>
      <FaNodeJs className="w-5 h-5 text-green-500" /> {/* Node.js icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
    </div>
  </div>

  {/* Express.js */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>Express.js</span>
      <SiExpress className="w-5 h-5 text-green-600" /> {/* Express.js icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
    </div>
  </div>

  {/* MongoDB */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>MongoDB</span>
      <SiMongodb className="w-5 h-5 text-green-700" /> {/* MongoDB icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-green-700 h-2.5 rounded-full" style={{ width: "80%" }}></div>
    </div>
  </div>

  {/* MySQL */}
  <div className="mb-4">
    <label className=" text-sm font-medium flex justify-between items-center">
      <span>MySQL</span>
      <SiMysql className="w-5 h-5 text-blue-900" /> {/* MySQL icon */}
    </label>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: "80%" }}></div>
    </div>
  </div>
</div>


</div>


      <div className="mb-8">
  <h3 className="text-xl text-pry font-semibold">Education</h3>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* First Box */}
    <div className="p-4  bg-sec text-white rounded-lg">
      <p className="mt-2">
        <strong className='text-pry'>BSc in Geography and Environment</strong><br />
        Imo State University — Oct 2014 - Jul 2018
      </p>
    </div>

    {/* Second Box */}
    <div className="p-4  bg-sec text-white rounded-lg">
      <p className="mt-2">
        <strong  className='text-pry'>Fullstack JavaScript Web Development</strong><br />
       Technical Training  — GoMyCode Abuja — Dec 2023 - Apr 2024
      </p>
    </div>
  </div>
</div>


<div className="mb-8">
  <h3 className="text-xl text-pry font-semibold">Work Experience</h3>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* First Work Experience Box */}
    <div className="p-4 bg-sec text-white rounded-3xl">
      <h4 className="font-semibold text-pry">FullStack Web Developer (Contract) - AsterCart</h4>
      <p className="text-sm">Oct 2024 – Present</p>
      <ul className="list-disc list-inside">
        <li>Leading the development of store and admin dashboards.</li>
        <li>Designing the admin panel for product catalog, user roles, and order tracking.</li>
        <li>Building a responsive and user-friendly store dashboard.</li>
        <li>Using React.js, Node.js, Express.js, and Tailwind CSS.</li>
      </ul>
    </div>

    {/* Second Work Experience Box */}
    <div className="p-4 bg-sec text-white rounded-3xl">
      <h4 className="font-semibold text-pry mt-6">Web Development Intern (Remote) - Hard Tech Hub</h4>
      <p className="text-sm">Oct 2024 – Present</p>
      <ul className="list-disc list-inside">
        <li>Assisted in designing and developing responsive, intuitive user interfaces.</li>
        <li>Collaborated with senior developers on code optimization.</li>
        <li>Tested and refined web components for cross-device compatibility.</li>
      </ul>
    </div>

    {/* Third Work Experience Box */}
    <div className="p-4 bg-sec text-white rounded-3xl">
      <h4 className="font-semibold text-pry mt-6">Web Developer Intern (Contract) - Zeta Biotech</h4>
      <p className="text-sm">Sept 2024 – Oct 2024</p>
      <ul className="list-disc list-inside">
        <li>Developed front-end features to enhance user experience.</li>
        <li>Collaborated on responsive design integration with teams.</li>
        <li>Built UI components for smooth cross-device performance.</li>
      </ul>
    </div>

    {/* Fourth Work Experience Box */}
    <div className="p-4 bg-sec text-white rounded-3xl">
      <h4 className="font-semibold text-pry mt-6">FullStack JavaScript Web Developer / Student - GoMyCode</h4>
      <p className="text-sm">Dec 2023 – Apr 2024</p>
      <ul className="list-disc list-inside">
        <li>Developed CRUD operations in a MERN-based book application.</li>
        <li>Built scalable backend APIs and responsive UI components.</li>
        <li>Focused on clean code, version control, and testing practices.</li>
      </ul>
    </div>
  </div>
</div>

    </section>
  );
};

export default Resume;
