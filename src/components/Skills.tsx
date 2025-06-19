import React from 'react';
import { motion } from 'framer-motion';
import { FaGitAlt, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "TypeScript", level: 95, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 100, color: "bg-cyan-500" },
        { name: "HTML/CSS", level: 100, color: "bg-orange-500" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 98, color: "bg-green-600" },
        { name: "Express.js", level: 98, color: "bg-gray-400" },
        { name: "MongoDB", level: 98, color: "bg-green-700" },
        { name: "MySQL", level: 98, color: "bg-blue-700" },
        { name: "RESTful APIs", level: 98, color: "bg-purple-600" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 100, color: "bg-orange-500" },
        { name: "Postman", level: 100, color: "bg-orange-400" },
        { name: "Vercel", level: 100, color: "bg-black" },
        { name: "Render", level: 100, color: "bg-purple-500" },
        { name: "VS Code", level: 100, color: "bg-blue-600" },
      ]
    }
  ];

const techStack = [
  { name: 'React.js', icon: <FaReact className="text-sky-400 w-10 h-10" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 w-10 h-10" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 w-10 h-10" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 w-10 h-10" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 w-10 h-10" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700 w-10 h-10" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 w-10 h-10" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600 w-10 h-10" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500 w-10 h-10" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-emerald-400 w-10 h-10" /> },
];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-semibold text-primary-900 dark:text-white mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-sm font-body font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-semibold text-primary-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-body font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="font-body font-semibold text-primary-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        className={`h-3 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;