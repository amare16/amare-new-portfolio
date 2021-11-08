import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './partials/navbar/NavBar';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './partials/footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes> 
        <Footer />  
      </div>
    </Router>
    
  );
}

export default App;
