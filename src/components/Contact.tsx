import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('subject', formData.subject);
    formDataObj.append('message', formData.message);

    const response = await fetch('https://formspree.io/f/mrbbdzol', {
      method: 'POST',
      body: formDataObj,
      headers: {
        Accept: 'application/json'
      }
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ndidiranjo@gmail.com",
      href: "mailto:ndidiranjo@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+234 817 436 5032",
      href: "tel:+2348174365032"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Abuja, Nigeria",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vivian-ndidi-amaranjo",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Munyia",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "WhatsApp",
      href: "https://wa.me/2348174365032",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 dark:text-white mb-4">
                Send Me a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-body">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

          <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-body font-medium text-gray-700 dark:text-gray-300 mb-2">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-body focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
        placeholder="John Doe"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-body font-medium text-gray-700 dark:text-gray-300 mb-2">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-body focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
        placeholder="john@example.com"
      />
    </div>
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-body font-medium text-gray-700 dark:text-gray-300 mb-2">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-body focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
      placeholder="Project Inquiry"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-body font-medium text-gray-700 dark:text-gray-300 mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows={6}
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-body focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors resize-none"
      placeholder="Tell me about your project..."
    />
  </div>

  <motion.button
    type="submit"
    disabled={isSubmitting}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-900 hover:bg-primary-800 disabled:bg-gray-400 text-white font-body font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
        Sending...
      </>
    ) : (
      <>
        <Send className="mr-2" size={20} />
        Send Message
      </>
    )}
  </motion.button>
</form>

          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-body">
                I'm always interested in new opportunities and exciting projects. Let's connect!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-lg mr-4 group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-gray-600 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="font-body font-semibold text-gray-900 dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-primary-900 dark:text-white">
                Connect on Social
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl border border-primary-100 dark:border-primary-800"
            >
              <h4 className="text-lg font-heading font-semibold text-primary-900 dark:text-white mb-2">
                Ready to Start?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-body text-sm mb-4">
                Let's schedule a call to discuss your project requirements and how I can help bring your vision to life.
              </p>
              <motion.a
                href="https://wa.me/2348174365032"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-highlight-500 hover:bg-highlight-600 text-white font-body font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;