import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Zap, Shield, Palette, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Complete web/mobile application development using modern technologies like React, React Native Node.js, and MongoDB.",
      features: ["MERN Stack", "RESTful APIs", "Database Design", "Authentication"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Custom e-commerce platforms with payment integration, inventory management, and admin dashboards.",
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Order Tracking"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first, responsive web applications that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First", "Cross-Browser", "Performance Optimized", "Accessibility"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Efficient database design and management with both SQL and NoSQL databases for optimal performance.",
      features: ["MongoDB", "MySQL", "Data Modeling", "Query Optimization"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure fast loading times and smooth user experience.",
      features: ["Code Splitting", "Lazy Loading", "Caching", "Bundle Optimization"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Robust security measures including authentication, authorization, and data protection protocols.",
      features: ["JWT Authentication", "Data Encryption", "HTTPS", "Input Validation"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Search engine optimization to improve visibility and ranking in search results for better reach.",
      features: ["On-Page SEO", "Meta Tags", "Site Speed", "Content Optimization"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-primary-900 dark:text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 font-body mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-heading font-bold text-primary-900 dark:text-white mb-12 text-center">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-heading font-semibold text-primary-900 dark:text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-body">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;