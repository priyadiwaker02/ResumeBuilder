import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Templates from "./Components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResumeBuilderPage from './Components/ResumeBuilderPage'

function App() {
  return (
    <div className="main">
      <Router>
        {/* Header should typically be inside Router to access navigation if needed */}
        {/* <Header /> */}
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/resume-builder" element={<ResumeBuilderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
