import { useEffect, useState } from "react";
import { munyia } from "../../public/res";

const About: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const fullText = "What I’m Currently Working On";
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
    <section id="about" className="bg-sec1 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image for small devices only */}
        <img
          src={munyia}
          alt="Your Name"
          className="rounded-full h-48 w-48 object-cover object-top mb-6 mx-auto sm:hidden"
        />

        <p className="text-lg mb-4 ">
          I'm a passionate <span className="font-semibold">JavaScript/TypeScript developer</span> based in{" "}
          <span className="font-semibold">Abuja, Nigeria</span>, with a strong drive to continuously enhance my skills. Currently diving into the world of{" "}
          <span className="font-semibold">Flutter</span> and <span className="font-semibold">React Native</span> to expand my horizons in mobile app development.
        </p>
        <p className="text-lg mb-4 ">
          I focus on writing clean, efficient code that solves problems and delivers seamless, intuitive user experiences. I enjoy building reliable and modern web applications that meet user needs and stand the test of time.
        </p>

        <div className="p-6 text-sec justify-center mb-6">
        <div className="text-base lg:text-3xl mb-3 text-center text-sec font-bold">
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

          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-6 space-y-4 lg:space-y-0">
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

        <p className="text-lg  pb-6">
          As I continue to evolve as a developer, I’m excited to take on new challenges, collaborate with like-minded professionals, and create cutting-edge applications that make a difference. My mission is to build solutions that are not only functional but also deliver outstanding experiences across web and mobile platforms.
        </p>
      </div>
    </section>
  );
};

export default About;
