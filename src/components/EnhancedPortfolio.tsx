import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  TrendingUp,
  Users,
  Clock,
  Star,
  X,
} from "lucide-react";
import { ass, bbbb, hf, pf, wss } from "../assets/res";

const EnhancedPortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AsterCart E-Commerce Platform",
      description:
        "A comprehensive e-commerce supermarket store with admin dashboard. Full-stack application allowing store admins to manage inventory, track sales, and handle customer data efficiently.",
      longDescription:
        "Built a complete e-commerce platform for AsterCart, featuring both customer-facing store and comprehensive admin dashboard. The platform handles product catalog management, user roles, order tracking, and payment integration with a focus on scalability and user experience.",
      image: ass,
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Munyia",
      liveUrl: "https://astercart.com",
      category: "fullstack",
      featured: true,
      metrics: {
        status: "In Production",
        features: "50+",
        performance: "95/100",
        users: "Active",
      },
      timeline: "3 months",
      team: "4 developers",
      challenges: [
        "Designed scalable admin panel for product catalog and user management",
        "Built responsive store dashboard for seamless customer experience",
        "Implemented order tracking system",
        "Optimized performance for handling large product inventories",
      ],
      results: [
        "Successfully deployed production-ready e-commerce platform",
        "Streamlined inventory management for store admins",
        "Enhanced customer experience with intuitive interface",
        "Achieved 95/100 performance score",
      ],
    },
    {
      id: 2,
      title: "PrinceFynn Medicals E-Commerce",
      description:
        "E-commerce platform for selling health supplements with Supabase backend, React frontend, and TypeScript for type safety. Features product catalog, shopping cart, and secure checkout.",
      longDescription:
        "Developed a modern e-commerce platform for PrinceFynn Medicals specializing in health supplements. Built with React, TypeScript, and Supabase for a robust, scalable solution with real-time data management and secure user authentication.",
      image: pf,
      technologies: [
        "React.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Real-time DB",
        "flutterwave",
      ],
      githubUrl: "https://github.com/Munyia",
      liveUrl: "https://princefynnmedical.com",
      category: "fullstack",
      metrics: {
        products: "100+",
        performance: "98/100",
        mobile: "Optimized",
        security: "A+",
      },
      timeline: "2 months",
      team: "Solo project",
      challenges: [
        "Implemented real-time product inventory management with Supabase",
        "Built responsive design optimized for mobile health supplement shopping",
        "Integrated secure payment processing for health product transactions",
        "Developed type-safe components with TypeScript for maintainability",
      ],
      results: [
        "Launched fully functional supplement e-commerce platform",
        "Implemented secure user authentication and data protection",
        "Created mobile-optimized shopping experience",
      ],
    },
    {
      id: 3,
      title: "WordSmitters - Ghostwriting Platform",
      description:
        "Web application connecting users with ghostwriters for book writing, publishing, and editing services. Frontend-focused platform showcasing services and enabling social media interaction.",
      longDescription:
        "Developed WordSmitters, a platform that bridges the gap between aspiring authors and professional ghostwriters. The application showcases available writing services, facilitates connections, and provides social media integration for community building.",
      image: wss,
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Social Media APIs",
        "Responsive Design",
        "SEO Optimization",
      ],
      githubUrl: "https://github.com/Munyia",
      liveUrl: "https://www.wordsmitters.com.ng",
      category: "frontend",
      featured: false,
      metrics: {
        services: "20+",
        writers: "50+",
        interface: "Intuitive",
        social: "Integrated",
      },
      timeline: "1 month",
      team: "Solo project",
      challenges: [
        "Created intuitive service showcase for ghostwriting offerings",
        "Implemented social media integration for community engagement",
        "Built responsive design for optimal cross-device experience",
        "Developed user-friendly interface for service discovery",
      ],
      results: [
        "Launched platform connecting authors with ghostwriters",
        "Created engaging social media integration",
        "Achieved excellent user experience ratings",
        "Built scalable frontend architecture",
      ],
    },
    {
      id: 4,
      title: "Halimafactor Community Initiatives",
      description:
        "NGO platform to help the poor with medical assistance. Built with MERN stack and SEO optimization to maximize reach and impact for community health initiatives.",
      longDescription:
        "Created a comprehensive platform for Halimafactor Community Initiatives NGO, focusing on providing medical assistance to underserved communities. The platform features donation management, volunteer coordination, and impact tracking with SEO optimization for maximum visibility.",
      image: hf,
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "SEO Optimization",
      ],
      githubUrl: "https://github.com/Munyia",
      liveUrl: "https://www.halimafactorcommunityinitiative.com.ng",
      category: "fullstack",
      metrics: {
        impact: "High",
        seo: "Optimized",
        accessibility: "A+",
      },
      timeline: "2.5 months",
      team: "Solo project",
      challenges: [
        "Kept design minimal and focused",
        "Ensured responsiveness across devices",
      ],

      results: [
        "Deployed a clean portfolio to showcase projects",
        "Accessible on both desktop and mobile",
      ],
    },

    {
      id: 5,
      title: "BayBook - Author Publishing Platform",
      description:
        "Currently in development: Web application for writers to publish works, manage editing and revisions, and connect with readers through integrated social media features.",
      longDescription:
        "BayBook is an ambitious project currently in development, designed to be a comprehensive platform for authors. It will feature publishing tools, revision management, reader engagement, and social media integration to create a complete ecosystem for writers and readers.",
      image: bbbb,
      technologies: ["React.js", "Node.js", "MongoDB", "Social Media APIs"],
      githubUrl: "https://github.com/Munyia",
      category: "fullstack",
      featured: false,
      metrics: {
        status: "In Development",
        features: "Planning",
        progress: "15%",
        launch: "Q4 2025",
      },
      timeline: "1 months (ongoing)",
      team: "Solo project",
      challenges: [
        "Building comprehensive publishing and editing workflow",
        "Implementing social media integration for reader engagement",
        "Creating revision management system for collaborative editing",
        "Developing scalable architecture for growing user base",
      ],
      results: [
        "Project 15% complete with core features implemented",
        "Designed comprehensive author workflow system",
        "Planning advanced social media integration",
        "Targeting Q4 2025 launch date",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full-Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const ProjectModal = ({ project }: { project: any }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary-900 dark:text-white mb-4">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-body leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(project.metrics).map(([key, value], index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="text-2xl font-heading font-bold text-primary-900 dark:text-white">
                  {String(value)}
                </div>
                <div className="text-sm font-body text-gray-600 dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-900 dark:text-white mb-4">
                Key Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300 font-body"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-900 dark:text-white mb-4">
                Results Achieved
              </h3>
              <ul className="space-y-2">
                {project.results.map((result: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300 font-body"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-primary-900 dark:text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-body font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400 font-body">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {project.timeline}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              {project.team}
            </div>
          </div>

          {/* Actions */}
    {(project.githubUrl || project.liveUrl || project.longDescription) && (
  <div className="flex space-x-4">
    {project.githubUrl ? (
      <motion.a
        href={project.githubUrl}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-body font-medium rounded-lg transition-colors"
      >
        <Github className="mr-2" size={18} />
        View Code
      </motion.a>
    ) : (
      <button
        disabled
        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-400 text-white font-body font-medium rounded-lg opacity-60 cursor-not-allowed"
      >
        <Github className="mr-2" size={18} />
        Code Unavailable
      </button>
    )}

    {project.liveUrl ? (
      <motion.a
        href={project.liveUrl.startsWith("http") ? project.liveUrl : `https://${project.liveUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-body font-medium rounded-lg transition-colors"
      >
        <ExternalLink className="mr-2" size={18} />
        Live Demo
      </motion.a>
    ) : (
    <button
  disabled
  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-400 text-white font-body font-medium rounded-lg opacity-60 cursor-not-allowed"
>
  <ExternalLink className="mr-2" size={18} />
  Demo Unavailable
</button>

    )}
  </div>
)}

        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="enhanced-portfolio"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            Real-world applications showcasing technical expertise and business
            impact
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary-900 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-4 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg"
                    >
                      <Eye className="w-6 h-6 text-primary-900 dark:text-white" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Floating Metrics */}
                <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3">
                  {Object.entries(project.metrics)
                    .slice(0, 2)
                    .map(([key, value], metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3 + metricIndex * 0.1,
                        }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg text-center min-w-[80px]"
                      >
                        <div className="text-lg font-heading font-bold text-primary-900 dark:text-white">
                          {value}
                        </div>
                        <div className="text-xs font-body text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-body font-semibold rounded-full">
                      {project.featured ? "Featured Project" : "Project"}
                    </span>
                    {project.featured && (
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-primary-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics)
                    .slice(2)
                    .map(([key, value], metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="p-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-primary-900 dark:text-white">
                            {value}
                          </div>
                          <div className="text-sm font-body text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-body font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 py-1 text-sm font-body font-medium bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 font-body">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {project.team}
                  </div>
                </div>

                {/* Actions */}
           <div className="flex space-x-4">
  {project.longDescription ? (
    <motion.button
      onClick={() => setSelectedProject(project.id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-body font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
    >
      <Eye className="mr-2" size={18} />
      View Case Study
    </motion.button>
  ) : (
    <button
      disabled
      className="inline-flex items-center px-6 py-3 bg-gray-400 text-white font-body font-semibold rounded-lg opacity-60 cursor-not-allowed"
    >
      <Eye className="mr-2" size={18} />
      No Case Study
    </button>
  )}

  {project.githubUrl ? (
    <motion.a
      href={project.githubUrl}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-body font-medium rounded-lg transition-colors"
    >
      <Github className="mr-2" size={18} />
      Code
    </motion.a>
  ) : (
    <button
      disabled
      className="inline-flex items-center px-6 py-3 bg-gray-400 text-white font-body font-medium rounded-lg opacity-60 cursor-not-allowed"
    >
      <Github className="mr-2" size={18} />
      No Code
    </button>
  )}

  {project.liveUrl ? (
    <motion.a
      href={project.liveUrl.startsWith("http") ? project.liveUrl : `https://${project.liveUrl}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-body font-medium rounded-lg transition-colors"
    >
      <ExternalLink className="mr-2" size={18} />
      Live Demo
    </motion.a>
  ) : (
    <button
      disabled
      className="inline-flex items-center px-6 py-3 bg-gray-400 text-white font-body font-medium rounded-lg opacity-60 cursor-not-allowed"
    >
      <ExternalLink className="mr-2" size={18} />
      No Demo
    </button>
  )}
</div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={projects.find((p) => p.id === selectedProject)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnhancedPortfolio;
