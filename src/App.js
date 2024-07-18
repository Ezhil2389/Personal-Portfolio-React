import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X, GithubIcon, LinkedinIcon, MailIcon, ChevronDown } from 'lucide-react';
import './index.css';
import Certificates from './Certificates';
import Home from './Home';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-green-400 shine-effect">ER</Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="nav-link">Home</Link>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <Link to="/certificates" className="nav-link">Certificates</Link>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
            <Link to="/" className="mobile-nav-link">Home</Link>
            <a href="#skills" className="mobile-nav-link">Skills</a>
            <a href="#projects" className="mobile-nav-link">Projects</a>
            <Link to="/certificates" className="mobile-nav-link">Certificates</Link>
            <a href="#contact" className="mobile-nav-link">Contact</a>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;