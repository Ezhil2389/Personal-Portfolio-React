import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GithubIcon, LinkedinIcon, MailIcon, ChevronDown } from 'lucide-react';
import './index.css';
import Certificates from './Certificates';
import Home from './Home';

const NavLink = ({ to, children, onClick, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(to);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(to);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a href={to} onClick={handleClick} className={className || "nav-link"}>
      {children}
    </a>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-green-400 shine-effect" onClick={scrollToTop}>ER</Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
                <NavLink to="#skills">Skills</NavLink>
                <NavLink to="#projects">Projects</NavLink>
                <Link to="/certificates" className="nav-link">Certificates</Link>
                <NavLink to="#contact">Contact</NavLink>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 absolute top-full left-0 right-0 shadow-lg`}>
            <div className="flex flex-col px-4 py-2">
              <Link to="/" className="mobile-nav-link" onClick={() => { toggleMenu(); scrollToTop(); }}>Home</Link>
              <NavLink to="#skills" className="mobile-nav-link" onClick={toggleMenu}>Skills</NavLink>
              <NavLink to="#projects" className="mobile-nav-link" onClick={toggleMenu}>Projects</NavLink>
              <Link to="/certificates" className="mobile-nav-link" onClick={toggleMenu}>Certificates</Link>
              <NavLink to="#contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</NavLink>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-green-400">Ezhil R</h2>
                <p className="text-gray-400">B.Tech CCE Student</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Ezhil2389" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <GithubIcon size={24} />
                </a>
                <a href="https://linkedin.com/in/ezhilr2004" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <LinkedinIcon size={24} />
                </a>
                <a href="mailto:ezhilrav@gmail.com" className="text-gray-400 hover:text-white">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;