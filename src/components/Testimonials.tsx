import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Damilola",
      role: "Founder",
      company: "AsterCart",
      content:
        "Vivian led the development of AsterCart’s admin and store dashboards, building both the frontend and the admin backend. She also collaborated with the team on the store’s backend. Her attention to detail and strong engineering skills helped us deliver a fast, reliable platform that’s easy to manage and scale.",
      rating: 5,
      project: "E-commerce Platform Development",
    },
    {
      name: "Dr. Prince Fynn Kojo",
      role: "Founder",
      company: "PrinceFynn Medicals",
      content:
        "Vivian delivered a smooth, professional e-commerce platform for our supplement business. The site looks great, works well on all devices, and has made managing products and orders a lot simpler. We’ve seen a real improvement in our online presence thanks to her work.",
      rating: 5,
      project: "Health Supplements E-commerce",
    },
    {
      name: "Gozy Ranjo",
      role: "Director",
      company: "Wordsmitters",
      content:
        "The WordSmitters platform looks and feels professional. The layout is clean, easy to navigate, and really highlights the services clearly. It’s been a great tool for connecting writers and clients, and the built-in social features make the experience more engaging.",
      rating: 5,
      project: "Ghost writing and Publishing platform",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const testimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative"
          >
            <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-800">
              <Quote className="w-8 h-8" />
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-body font-medium rounded-full">
                {testimonial.project}
              </span>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-primary-900 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 font-body text-sm">
                {testimonial.role}
              </p>
              <p className="text-accent-600 dark:text-accent-400 font-body text-sm font-medium">
                {testimonial.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
