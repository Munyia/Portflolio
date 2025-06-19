import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Journey', id: 'timeline' },
    { label: 'Projects', id: 'enhanced-portfolio' },
    { label: 'Blog', id: 'blog' },
    { label: 'Code Quality', id: 'code-quality' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-primary-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold text-white">
              Amaranjo Ndidi Vivian
            </h3>
            <p className="text-gray-300 font-body leading-relaxed">
              Full-Stack Developer passionate about creating innovative digital solutions 
              that drive business growth and exceptional user experiences.
            </p>
            <p className="text-accent-400 font-body font-medium">
              Available for freelance projects and full-time opportunities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-white">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-300 hover:text-accent-400 font-body transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-white">
              Let's Connect
            </h4>
            <div className="space-y-2 text-gray-300 font-body">
              <p>Abuja, Nigeria</p>
              <p>ndidiranjo@gmail.com</p>
              <p>+234 817 436 5032</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com/in/vivian-ndidi-amaranjo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Munyia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://wa.me/2348174365032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-gray-700 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-300 font-body">
            <span>© {currentYear} Amaranjo Ndidi Vivian. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-accent-600 hover:bg-accent-700 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;