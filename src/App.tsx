import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Scroll from "./components/Scroll";


const App: React.FC = () => {
  return (
    <Router>
      <Scroll /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} /> {/* Default to About page */}
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
