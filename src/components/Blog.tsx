import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X, ArrowLeft } from 'lucide-react';
import { introvert, last, tutor, undefine } from '../assets/res';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "The Bug Who Tried to Join a Sports Team",
      excerpt: "He couldn't commit to any team every time they picked him, he threw an exception.",
      content: "Once upon a sprint, a JavaScript bug joined a soccer team. At practice, every time he touched the ball, he shouted, 'undefined!' and fell down. The coach tried to console him, but the debugger kept stopping mid-field. Eventually, he was benched for constant side effects.",
      category: "sports",
      publishDate: "2024-06-18",
      readTime: "2 min read",
      image: undefine
    },
    {
      id: 2,
      title: "Why Introvert Coders Avoid Standups",
      excerpt: "Because they'd rather `console.log()` their thoughts than speak them.",
      content: "Every morning, the dev team gathered around for standups. While the extroverts shared roadmaps, blockers, and coffee shop preferences, the introverts quietly updated Jira and hoped nobody noticed them. One brave soul typed out their entire status in Morse code using blinking.",
      category: "introverts",
      publishDate: "2024-06-17",
      readTime: "3 min read",
      image: introvert
    },
    {
      id: 3,
      title: "When a Developer Tries to Tutor Geography",
      excerpt: "He couldn't locate the bug, but he knew exactly where Africa nested in the DOM.",
      content: "The dev took on tutoring a kid in geography. 'This continent,' he said, pointing at Africa, 'has the same structure as a nested `<div>`. Nigeria is absolutely positioned, and Egypt? That’s fixed—never changes time zones.' The kid passed...in JavaScript, not geography.",
      category: "tutoring",
      publishDate: "2024-06-16",
      readTime: "2 min read",
      image: tutor
    },
    {
      id: 4,
      title: "The Football Match Between Tabs and Spaces",
      excerpt: "It ended in a draw. But nobody could agree where the ball started.",
      content: "Tabs FC showed up in uniform spacing, while Spaces United wore pixel-perfect gear. The ref? A linter bot. The crowd? Full of angry Vim users. When the kickoff blew, confusion erupted: Tabs kept jumping ahead 4 spaces, and Spaces said, 'We need consistency!' Final score? Infinite loops.",
      category: "sports",
      publishDate: "2024-06-15",
      readTime: "2 min read",
      image: last
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const current = articles[currentIndex];

  const handleNext = () => setCurrentIndex((currentIndex + 1) % articles.length);
  const handlePrev = () => setCurrentIndex((currentIndex - 1 + articles.length) % articles.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 75) handlePrev();
    else if (deltaX < -75) handleNext();
  };

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-4xl w-full px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-8"
        >
          Latest Articles
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 text-left relative"
          >
            <div className="w-full h-[300px] overflow-hidden rounded-xl mb-4">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
            <div className="mb-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(current.publishDate).toLocaleDateString()}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{current.readTime}</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-900 dark:text-white mb-2">
              {current.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-body mb-4">
              {current.excerpt}
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => setModalOpen(true)}
              className="mt-6 inline-flex items-center text-accent-600 dark:text-accent-400 font-body font-medium hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
            <div className="mt-6 flex justify-center space-x-2">
              {articles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    idx === currentIndex ? 'bg-accent-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button onClick={handlePrev} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button onClick={handleNext} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full h-[300px] overflow-hidden rounded-lg mb-6">
                <img src={current.image} alt={current.title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(current.publishDate).toLocaleDateString()}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{current.readTime}</span>
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary-900 dark:text-white mb-4">
                {current.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-body whitespace-pre-line mb-6">
                {current.content}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={handlePrev}
                  className="flex items-center px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Next <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
