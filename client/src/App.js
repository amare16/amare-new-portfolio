import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experiences from './components/experiences/Experiences';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

import NavBar from './partials/navbar/NavBar';
import Footer from './partials/footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        <Footer />  
      </div>
    </Router>
    
  );
}

export default App;
