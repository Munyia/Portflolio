import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Users, Rocket, GraduationCap, Globe, Heart } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
  
    {
      year: "2025",
      title: "Full-Stack Web Developer",
      company: "BayBook",
      location: "Abuja, Nigeria",
      type: "Remote project",
      icon: <Globe className="w-5 h-5" />,
      description: "Currently developing a comprehensive web application for writers to publish works, manage editing and revisions, and connect with readers through integrated social media features.",
      achievements: [
        "Building comprehensive publishing and editing workflow",
        "Implementing social media integration for reader engagement",
        "Creating revision management system for collaborative editing",
        "Developing scalable architecture for growing user base"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Social Media APIs", "Publishing Tools"]
    },
    {
      year: "2025",
      title: "PrinceFynn Medicals E-Commerce",
      company: "Remote Project",
      location: "Nigeria",
      type: "project",
      icon: <Globe className="w-5 h-5" />,
      description: "Built e-commerce platform for selling health supplements with Supabase backend, React frontend, and TypeScript for type safety and real-time data management.",
      achievements: [
        "Implemented real-time product inventory management with Supabase",
        "Built responsive design optimized for mobile health supplement shopping",
        "Integrated secure payment processing for health product transactions",
        "Developed type-safe components with TypeScript for maintainability"
      ],
      technologies: ["React.js", "TypeScript", "Supabase", "Tailwind CSS", "Real-time DB"]
    },
    {
      year: "2025",
      title: "Halimafactor Community Initiatives",
      company: "NGO Project",
      location: "Nigeria",
      type: "project",
      icon: <Heart className="w-5 h-5" />,
      description: "Developed NGO platform to help the poor with medical assistance, built with MERN stack and SEO optimization to maximize reach and impact for community health initiatives.",
      achievements: [
        "Optimized SEO for maximum visibility in search engines",
        "Created accessible design for diverse user demographics"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "SEO Optimization"]
    },
      {
      year: "2024",
      title: "WordSmitters - Ghostwriting Platform",
      company: "Freelance Project",
      location: "Nigeria",
      type: "project",
      icon: <Globe className="w-5 h-5" />,
      description: "Developed a web application connecting users with ghostwriters for book writing, publishing, and editing services, showcasing available services and enabling social media interaction.",
      achievements: [
        "Created intuitive service showcase for ghostwriting offerings",
        "Implemented social media integration for community engagement",
        "Built responsive design for optimal cross-device experience",
        "Developed user-friendly interface for service discovery"
      ],
      technologies: ["React.js", "Tailwind CSS", "Social Media APIs", "Responsive Design"]
    },
      {
      year: "2024-2025",
      title: "Full-Stack Web Developer",
      company: "AsterCart",
      location: "Abuja, Nigeria",
      type: "Remote Project",
      icon: <Code className="w-5 h-5" />,
      description: "Leading development of AsterCart's e-commerce supermarket store and admin dashboard for efficient inventory management and customer data handling.",
      achievements: [
        "Designed comprehensive admin panel for product catalog and user roles",
        "Built responsive store dashboard for order tracking and customer management",
        "Implemented secure payment integration systems",
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
    },
    {
      year: "2024",
      title: "Web Developer Intern",
      company: "Zeta Biotech",
      location: "Nigeria",
      type: "work",
      icon: <Rocket className="w-5 h-5" />,
      description: "Developed front-end features to enhance user experience and worked on responsive design integration.",
      achievements: [
        "Enhanced user experience consistency",
        "Built responsive UI components",
        "Optimized code for improved performance",
        "Contributed to project documentation"
      ],
      technologies: ["React.js", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      year: "2023-2024",
      title: "Full-Stack JavaScript Web Developer",
      company: "GoMyCode",
      location: "Wuse 2, Abuja",
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Intensive full-stack development training focusing on MERN stack and modern web development practices.",
      achievements: [
        "Mastered MERN stack development",
        "Built CRUD operations in book app",
        "Developed responsive React components",
        "Learned RESTful API development"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"]
    },
    {
      year: "2014-2018",
      title: "BSc in Geography and Environment",
      company: "Imo State University",
      location: "Imo State, Nigeria",
      type: "education",
      icon: <Award className="w-5 h-5" />,
      description: "Bachelor's degree providing strong analytical and problem-solving foundation that complements technical skills.",
      achievements: [
        "Developed analytical thinking skills",
        "Strong research methodology",
        "Environmental data analysis",
        "Project management experience"
      ],
      technologies: ["Research", "Data Analysis", "Project Management", "Critical Thinking"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'from-blue-500 to-blue-600';
      case 'education': return 'from-purple-500 to-purple-600';
      case 'project': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Work Experience';
      case 'education': return 'Education';
      case 'project': return 'Project';
      default: return 'Milestone';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            A timeline of growth, achievements, and continuous learning in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-highlight-500 rounded-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-body font-semibold bg-gradient-to-r ${getTypeColor(event.type)} text-white rounded-full`}>
                        {getTypeLabel(event.type)}
                      </span>
                      <span className="text-2xl font-heading font-bold text-primary-900 dark:text-white">
                        {event.year}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-heading font-bold text-primary-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-accent-600 dark:text-accent-400 font-body font-semibold mb-2">
                      <span>{event.company}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 font-body text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 font-body mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-body font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 font-body flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-body font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(event.type)} rounded-full flex items-center justify-center text-white shadow-lg`}
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-500/20 dark:to-accent-500/20 rounded-2xl p-8 border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl font-heading font-bold text-primary-900 dark:text-white mb-4">
              What's Next?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-body mb-6 max-w-2xl mx-auto">
              I'm always looking for new challenges and opportunities to grow. Let's build something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-primary-900 to-accent-600 dark:bg-primary-500 hover:bg-primary-800 text-white font-body font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2" size={20} />
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;