import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';


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
      </div>
    </Router>
    
  );
}

export default App;
