import { munyia } from "../assets";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-sec1">
      <div className="max-w-4xl mx-auto">
        
        {/* Image for small devices only */}
        <img
          src={munyia}
          alt="Your Name"
          className="rounded-full h-[200px] w-[200px] object-cover object-top mb-4 mx-auto sm:hidden"
        />

        <p className="text-lg mb-4">
          I'm a passionate <span className="font-semibold">JavaScript/TypeScript developer</span> based in <span className="font-semibold">Abuja, Nigeria</span>, with a strong drive to continuously enhance my skills. Currently diving into the world of <span className="font-semibold">Flutter</span> and <span className="font-semibold">React Native</span> to expand my horizons in mobile app development.
        </p>
        <p className="text-lg mb-4">
          I focus on writing clean, efficient code that solves problems and delivers seamless, intuitive user experiences. I enjoy building reliable and modern web applications that meet user needs and stand the test of time.
        </p>

        <div className="p-4 font-merri rounded-lg shadow-sm mb-4">
          <p className="font-bold text-2xl font-play justify-center text-center mb-4">What I’m Currently Working On:</p>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-4 space-y-4 lg:space-y-0">
            <li className="flex bg-sec text-pry items-center font-merri p-4 rounded-lg shadow-md lg:w-[48%]">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                alt="Flutter Icon"
                className="w-6 h-6 mr-3"
              />
              <span className="font-semibold">
                Mastering the art of mobile development with{" "}
                <span className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                    alt="Flutter Icon"
                    className="w-5 h-5 mr-2"
                  />
                  Flutter
                </span>{" "}
                and{" "}
                <span className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React Native Icon"
                    className="w-5 h-5 mr-2"
                  />
                  React Native
                </span>
              </span>
            </li>
            <li className="flex items-center bg-sec text-pry p-4 rounded-lg shadow-md lg:w-[48%]">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript Icon"
                className="w-6 h-6 mr-3"
              />
              <span className="font-semibold">
                Building robust and scalable web applications using{" "}
                <span className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript Icon"
                    className="w-5 h-5 mr-2"
                  />
                  JavaScript
                </span>{" "}
                and{" "}
                <span className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript Icon"
                    className="w-5 h-5 mr-2"
                  />
                  TypeScript
                </span>
              </span>
            </li>
            <li className="flex items-center bg-sec text-pry lg:mx-auto p-4 rounded-lg shadow-md lg:w-[48%]">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original.svg"
                alt="Code Icon"
                className="w-6 h-6 mr-3"
              />
              <span className="font-semibold">
                Exploring other technologies and frameworks to stay ahead of the curve in web and mobile development.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-lg pb-10">
          As I continue to evolve as a developer, I’m excited to take on new challenges, collaborate with like-minded professionals, and create cutting-edge applications that make a difference. My mission is to build solutions that are not only functional but also deliver outstanding experiences across web and mobile platforms.
        </p>
      </div>
    </section>
  );
};

export default About;
