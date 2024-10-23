import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Blogs from './pages/Blogs';
import Company from './pages/Company';
import Works from './pages/Works';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Footer from './common/Footer';
import TeamAndAdvisors from './pages/TeamAndAdvisors';
import VideoAndGraphics from './pages/VideoAndGraphics';
import ProjectPage from './components/ProjectPage';
import projectData from './data.json';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<ProjectPage projects={projectData.projects} />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/graphics" element={<VideoAndGraphics />} />
        <Route path="/team-and-advisors" element={<TeamAndAdvisors/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;