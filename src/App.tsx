import  { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import EnhancedPortfolio from './components/EnhancedPortfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CodeQuality from './components/CodeQuality';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets and animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <div key="main-content">
              <Navigation />
              <main>
                <Home />
                <Services />
                <Skills />
                <Timeline />
                <EnhancedPortfolio />
                <Testimonials />
                <Blog />
                <CodeQuality />
                <Certificates />
                <Contact />
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;