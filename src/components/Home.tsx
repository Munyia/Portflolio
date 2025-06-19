import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Calendar, Code, Users, Lightbulb } from 'lucide-react';
import { munyia } from '../assets/res';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Believing in the power of teamwork and effective communication in project success."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions."
    }
  ];

  return (
    <>
      {/* HERO & ABOUT SECTION */}
      <section id="home" className="relative  overflow-hidden bg-gradient-to-br from-white via-gray-100 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-32 pt-24">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-400 via-accent-400 to-transparent rounded-full blur-3xl opacity-30 -z-10 animate-float" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-br from-accent-300 via-primary-300 to-transparent rounded-full blur-3xl opacity-20 -z-10 animate-float-slow" />
  <div className="max-w-7xl  mx-5 grid lg:grid-cols-[1fr_auto_1fr] gap-12 relative px-5">
        {/* HERO COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6 z-10"
        >
          <div className="w-40 h-40 mx-auto lg:mx-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-accent-600 rounded-full animate-glow" />
            <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
              <img src={munyia} alt="Ndidi Vivian" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white">
            Amaranjo Ndidi Vivian
          </h1>
          <p className="text-lg md:text-xl text-primary-700 dark:text-accent-300 font-medium">
            Full-Stack Developer | Digital Solutions Expert
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-neutral-600 dark:text-neutral-400 font-body">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Abuja, Nigeria
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Available for Projects
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 font-body max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I build impactful software solutions with clean code and intuitive design. My work spans e-commerce, community platforms, and admin systems—all grounded in purpose and performance.
          </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
  <motion.a
    href="https://drive.google.com/file/d/16txtS6_DhTkuHU-l6xRspmGfJF7eossE/view?usp=sharing"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center px-6 py-3 
               bg-gradient-to-br from-primary-900 to-accent-600 
               dark:from-neutral-500 dark:to-neutral-500 
               text-white font-body font-semibold 
               rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <Download className="mr-2" size={20} /> Download CV
  </motion.a>

  <motion.button
    onClick={() => scrollToSection('contact')}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center px-6 py-3 
               bg-gradient-to-br from-primary-900 to-accent-600 
               dark:from-neutral-500 dark:to-neutral-500 
               text-white font-body font-semibold 
               rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <Mail className="mr-2" size={20} /> Hire Me
  </motion.button>
</div>

        </motion.div>

        {/* Wavy Divider */}
    <div className="hidden lg:flex justify-center items-center relative z-0">
  <svg viewBox="0 0 200 900" preserveAspectRatio="none" className="h-full w-24">
    <defs>
      <linearGradient id="heroAboutDivider" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#334155" />  {/* primary-700 */}
        <stop offset="100%" stopColor="#f59e0b" /> {/* accent-400 */}
      </linearGradient>
    </defs>
    <path
      d="M 100 0 C 130 100, 70 200, 100 300 C 130 400, 70 500, 100 600 C 130 700, 70 800, 100 900"
      stroke="url(#heroAboutDivider)"
      strokeWidth="4"
      fill="none"
    />
  </svg>
</div>
        {/* ABOUT COLUMN */}
       <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="pt-10 px-4 sm:px-6 lg:px-0 space-y-6 z-10"
>
  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 dark:text-white text-center lg:text-left">
    About Me
  </h2>

  <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none text-justify sm:text-left">
    <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
      I'm a passionate full-stack developer with expertise in modern web technologies including 
      React.js, Node.js, and TypeScript. With a background in Geography and Environment from 
      Imo State University and intensive technical training at GoMyCode, I bring a unique 
      perspective to problem-solving in software development.
    </p>
    <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
      Currently working as a Full-Stack Developer at AsterCart, I specialize in building 
      scalable e-commerce solutions, admin dashboards, and user-centric applications. 
      I'm passionate about creating digital solutions that make a real impact on businesses 
      and communities, from e-commerce platforms to NGO initiatives that help underserved populations.
    </p>
    <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed">
      My diverse project portfolio includes e-commerce platforms like PrinceFynn Medicals, 
      community-focused NGO solutions like Halimafactor Community Initiatives, and publishing 
      platforms like WordSmitters and BayBook. I believe in using technology to solve real-world 
      problems and create meaningful impact.
    </p>
  </div>
</motion.div>

      </div>

        {/* SVG WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
          <svg
            className="relative block w-[calc(150%+1.3px)] h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.26C231.76 64.44 144.25 99.78 53.53 103.11 36.55 103.7 19.52 102.12 2.54 99.39V0h1197.93v27.35c-41.8 21.88-86.38 46.94-145.88 54.29-66.66 8.17-138.06-6.74-196.69-26.91-62.67-21.45-120.51-52.6-186.52-52.24-55.33.31-104.41 28.29-157.99 38.77z"
              fill="currentColor"
              className="text-accent-50 dark:text-gray-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-accent-50 dark:bg-gray-900 py-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 dark:text-white text-center mb-10">
            My Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-accent-200 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4">
                  {val.icon}
                </div>
                <h4 className="text-xl font-heading font-semibold text-primary-900 dark:text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-body">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
