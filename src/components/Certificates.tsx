import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Download, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
const certificates = [
{
  title: "The Full-Stack JavaScript Bootcamp",
  issuer: "GoMyCode",
  issueDate: "25th April, 2024",
  description: "Completed an intensive full-stack development bootcamp covering JavaScript, Node.js, Express, React, and MongoDB with hands-on project experience.",
  previewUrl: "https://drive.google.com/file/d/1uMX-9VIc3fa5yQLXmXeWOFwTtJWYPqaw/view?usp=sharing",
  downloadUrl: "https://drive.google.com/file/d/1uMX-9VIc3fa5yQLXmXeWOFwTtJWYPqaw/view?usp=sharing",
  color: "from-rose-400 to-rose-600",
  verified: true
},

  {
  title: "Bachelor of Science in Geography and Environmental Management",
  issuer: "Imo State University, Nigeria",
  issueDate: "12th September, 2019",
  description: "Awarded a B.Sc. in Geography and Environmental Management from Imo State University after completing studies in environmental systems, human geography, urban planning, and resource management.",
  previewUrl: "https://drive.google.com/file/d/1kvsLSQBwiHPN_L8XICjwW-DjVbhKoX2L/view?usp=sharing",
  downloadUrl: "https://drive.google.com/file/d/1kvsLSQBwiHPN_L8XICjwW-DjVbhKoX2L/view?usp=sharing",
  color: "from-green-400 to-green-600",
  verified: true
},

  {
    title: "Certificate of National Service",
    issuer: "National Youth Service Corps (NYSC), Nigeria",
    issueDate: "28th November, 2020",
    description: "Successfully completed one year of national service in Nigeria in accordance with Section 11 of the NYSC Act, signifying civic responsibility and leadership.",
    previewUrl: "https://drive.google.com/file/d/1kqTstSH84apuLKvbW5TS7PLaoaE0UfXZ/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1kqTstSH84apuLKvbW5TS7PLaoaE0UfXZ/view?usp=sharing",
    color: "from-emerald-400 to-emerald-600",
    verified: true
  },
    {
    title: "Human Resource and Advanced Human Resource Management",
    issuer: "Clemads Global Consulting Ltd.",
    issueDate: "4th March, 2021",
    description: "Comprehensive training in human resource principles, employment legislation, recruitment, job analysis, compensation, performance appraisal, and HR best practices.",
    previewUrl: "https://drive.google.com/file/d/1kq_GtiyF9xv6SMjIHX7wAOQVARV6QABn/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1kq_GtiyF9xv6SMjIHX7wAOQVARV6QABn/view?usp=sharing",
    color: "from-red-400 to-red-600",
    verified: true
  },
  {
    title: "International Relations & Diplomacy",
    issuer: "Clemads Global Consulting Ltd.",
    issueDate: "20th March, 2021",
    description: "Professional training on global affairs, foreign policy, diplomacy, multilateral relations, and conflict resolution including protocols in international diplomacy.",
    previewUrl: "https://drive.google.com/file/d/1kpxDEwE6xt0KN6D8smSl43BSBxfdCTiE/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1kpxDEwE6xt0KN6D8smSl43BSBxfdCTiE/view?usp=sharing",
    color: "from-blue-400 to-blue-600",
    verified: true
  },
  {
    title: "Project Management Professional",
    issuer: "Clemads Global Consulting Ltd.",
    issueDate: "25th January, 2021",
    description: "Training in professional project management including cost, scope, time, risk, procurement, quality, and integration management aligned with global standards.",
    previewUrl: "https://drive.google.com/file/d/1krzSVi2Kqwbr3kManvtPWtto0onAn6oN/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1krzSVi2Kqwbr3kManvtPWtto0onAn6oN/view?usp=sharing",
    color: "from-orange-400 to-orange-600",
    verified: true
  },
];


  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            Professional certifications demonstrating expertise and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -5 }}
  className="flex flex-col bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden min-h-[400px]"
>
  {/* Background Gradient */}
  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${cert.color}`}></div>

  {/* Verified Badge */}
  {cert.verified && (
    <div className="absolute top-4 right-4">
      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
        <Award className="w-5 h-5 text-white" />
      </div>
    </div>
  )}

  <div className="space-y-4 mt-4 flex-grow flex flex-col">
    <div className="space-y-2">
      <h3 className="text-xl font-heading font-bold text-primary-900 dark:text-white leading-tight">
        {cert.title}
      </h3>
      <p className="text-accent-600 dark:text-accent-400 font-body font-semibold">
        {cert.issuer}
      </p>
      <div className="flex items-center text-gray-500 dark:text-gray-400 font-body text-sm">
        <Calendar className="w-4 h-4 mr-2" />
        Issued {cert.issueDate}
      </div>
    </div>

    <p className="text-gray-600 dark:text-gray-300 font-body text-sm leading-relaxed flex-grow">
      {cert.description}
    </p>

    <div className="flex space-x-3 pt-2 mt-auto">
      <motion.a
        href={cert.previewUrl}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 font-body font-medium rounded-lg hover:bg-accent-200 dark:hover:bg-accent-900/50 transition-colors"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        View
      </motion.a>
      <motion.a
        href={cert.downloadUrl}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-900 hover:bg-primary-800 text-white font-body font-medium rounded-lg transition-colors"
      >
        <Download className="w-4 h-4 mr-2" />
        Download
      </motion.a>
    </div>
  </div>
</motion.div>

          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-6"
        >
          {[
            { number: "6+", label: "Professional Certifications" },
            { number: "100%", label: "Verified Credentials" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md">
              <div className="text-3xl font-heading font-bold text-primary-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-body font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;