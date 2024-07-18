import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const toggleProject = (projectIndex) => {
    setExpandedProject(expandedProject === projectIndex ? null : projectIndex);
  };

  const titles = [
    "B.Tech CCE Student",
    "UI/UX Designer",
    "Web Developer",
    "Music Producer"
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { title: 'Web Development', subpoints: ['Angular', 'React', 'SpringBoot'] },
    { title: 'UI/UX Design', subpoints: ['Figma', 'AdobeXD'] },
    { title: 'Computer Networks', subpoints: ['Tetcos Netsim'] },
    { title: 'DBMS', subpoints: ['MySQL', 'MongoDB'] },
    { title: 'DevOps', subpoints: ['Git', 'Jenkins', 'Kubernetes'] },
    { title: 'Media', subpoints: ['DaVinci Resolve', 'Final Cut Pro X'] },
    { title: 'Music', subpoints: ['Logic Pro', 'Keys & Guitar'] },
    { title: 'Hardware', subpoints: ['Raspberry Pi', 'Arduino UNO'] },
    { title: 'App Development', subpoints: ['Flutter'] },
  ];

  const projects = [
    {
      title: "Bank & Investment Comparison",
      description: "A Web Application which accepts a Bank Statement and a Mutual Funds investment statement (from Kuvera) and gives a table of matched & mismatched transactions as output.",
      details: [
        { label: "Frontend", value: "ReactJS" },
        { label: "Backend", value: "Flask, SQLite3, Python" },
        { label: "UI Design", value: "Figma" },
      ],
      github: "https://github.com/Ezhil2389/bank-statement-matcher-kuvera"
    },
    {
      title: "Smart Doorbell System using Raspberry Pi",
      description: "A Smart Doorbell with an embedded camera which recognizes human faces to automatically ring a bell and notify the owner via SMS, and saved faces to unlock the door.",
      details: [
        { label: "Hardware", value: "Raspberry Pi, PiCam" },
        { label: "Language", value: "Python" },
        { label: "Service", value: "Twilio SMS Service" },
      ],
    },
    {
      title: "Task Management System",
      description: "A web application which can add, update and scratch tasks off.",
      details: [
        { label: "Frontend", value: "AngularTS" },
        { label: "Backend", value: "Flask, SQLite3, Python" },
        { label: "UI Design", value: "Figma" },
      ],
    },
    {
      title: "This Portfolio",
      description: "A Portfolio website made on React!",
      details: [
        { label: "Framework", value: "React" },
        { label: "UI Design", value: "Figma" },
      ],
      github: "https://github.com/Ezhil2389/Personal-Portfolio-React"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            Hi, I'm <span className="text-green-400 shine-effect">Ezhil R</span>
          </h1>
          <div className="h-8 relative overflow-hidden w-full max-w-5xl mx-auto">
            <TransitionGroup>
              <CSSTransition
                key={currentTitleIndex}
                timeout={500}
                classNames="fade"
              >
                <p className="text-xl md:text-2xl mb-8 absolute w-full whitespace-nowrap">
                  {titles[currentTitleIndex]}
                </p>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-green-400 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-300 transition duration-300 shine-effect">
              Get in Touch
            </a>
            <a href="https://drive.google.com/file/d/1m2Z8l2A3c6B2ahkJnrvO-8isLqudVaI_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 shine-effect">
              Download Resume
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-green-400" />
        </div>
        <div className="absolute inset-0 z-0 opacity-50 bg-noise"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">About Me</h2>
          <p className="text-xl mb-8 leading-relaxed">
            I'm an Undergraduate Student with a passion for Front-end Web Development and UI-UX designing. 
            My skills in creative thinking and execution, combined with my interest in Computer Networks 
            and Communication Systems, drive me to create innovative solutions.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Ezhil2389" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition duration-300">
              <GithubIcon size={28} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition duration-300">
              <LinkedinIcon size={28} />
            </a>
            <a href="mailto:ezhilrav@gmail.com" className="text-white hover:text-green-400 transition duration-300">
              <MailIcon size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg glassmorphism transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-green-400">{skill.title}</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {skill.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex}>{subpoint}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-gray-900 p-6 rounded-lg shadow-lg glassmorphism transform transition duration-300 ${expandedProject === index ? 'scale-105' : 'hover:scale-105'}`}
                onClick={() => toggleProject(index)}
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {expandedProject === index && (
                  <div className="mt-4 text-gray-300">
                    {project.details.map((detail, detailIndex) => (
                      <p key={detailIndex}><strong>{detail.label}:</strong> {detail.value}</p>
                    ))}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold transition duration-300 block mt-2">
                        View on GitHub &rarr;
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="tel:+919884063255" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
              <Phone size={48} className="text-green-400 mb-4" />
              <span className="text-lg font-semibold">Call Me</span>
              <span className="text-gray-300">+91 9884063255</span>
            </a>
            <a href="https://wa.me/919884063255" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
              <MessageCircle size={48} className="text-green-400 mb-4" />
              <span className="text-lg font-semibold">WhatsApp</span>
              <span className="text-gray-300">+91 9884063255</span>
            </a>
            <a href="mailto:ezhilrav@gmail.com" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
              <MailIcon size={48} className="text-green-400 mb-4" />
              <span className="text-lg font-semibold">Email</span>
              <span className="text-gray-300">ezhilrav@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Ezhil R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;