import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Calendar, Code, Users, Lightbulb } from "lucide-react";
import { munyia } from "../assets/res";

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "I write maintainable, efficient, and scalable code with long-term value.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "I believe teamwork and open communication drive innovation and project success.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "I stay curious and constantly explore modern tools and technologies to evolve my craft.",
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* === HERO SECTION === */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-500 to-primary-600 bg-clip-text text-transparent">
              Amaranjo Ndidi Vivian
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
            Full-Stack Developer & Mobile Engineer
          </p>
          <p className="max-w-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed mx-auto lg:mx-0">
            I build modern, impactful software that connects web and mobile experiences—combining clean
            code, thoughtful design, and purpose-driven performance.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 font-body">
            <span className="flex items-center gap-1">
              <MapPin size={16} /> Abuja, Nigeria
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} /> Available for Projects
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <motion.a
              href="https://drive.google.com/file/d/16txtS6_DhTkuHU-l6xRspmGfJF7eossE/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-700 to-accent-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition"
            >
              <Download className="mr-2" size={20} /> Download CV
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-accent-400 text-accent-600 dark:text-accent-300 rounded-xl font-semibold shadow-sm hover:shadow-lg transition"
            >
              <Mail className="mr-2" size={20} /> Hire Me
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-accent-300/40">
            <img
              src={munyia}
              alt="Ndidi Vivian"
              className="object-cover w-full h-full rounded-full"
            />
            <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* === ABOUT SECTION === */}
      <section className="bg-accent-50/30 dark:bg-gray-900 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold font-heading text-primary-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed max-w-3xl mx-auto">
            I'm a full-stack developer passionate about building meaningful digital products for both web and mobile. 
            I work with React.js, React Native, Node.js, and TypeScript to create high-performance, accessible, and 
            visually engaging applications that bring ideas to life.
          </p>
          <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed max-w-3xl mx-auto">
            Currently, I’m developing a mobile app while continuing to deliver web solutions in e-commerce, 
            health, and community-focused sectors.
          </p>
        </motion.div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-24 px-6 bg-gradient-to-b from-accent-50 to-white dark:from-gray-950 dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-12">
            My Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-accent-100 dark:border-gray-700 transition-transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  {val.icon}
                </div>
                <h4 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
