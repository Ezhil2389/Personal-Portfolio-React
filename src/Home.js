import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion, useAnimation } from 'framer-motion';
import './index.css';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const controls = useAnimation();
  const [visibleSection, setVisibleSection] = useState(null);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const toggleProject = (projectIndex) => {
    setExpandedProject(expandedProject === projectIndex ? null : projectIndex);
  };

  const titles = [
    "B.Tech CCE Student",
    "UI/UX Designer",
    "Full-Stack Developer",
    "Music Producer"
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      for (const [section, ref] of Object.entries(sectionRefs)) {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls, visibleSection]);

  const skills = [
    { title: 'Web Development', subpoints: ['Angular', 'React', 'SpringBoot'] },
    { title: 'UI/UX Design & Research', subpoints: ['Figma', 'AdobeXD'] },
    { title: 'Computer Networks', subpoints: ['Tetcos Netsim','Wireshark'] },
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
      github: "https://github.com/Ezhil2389/Raspberry-Pi-Door-Security-Camera"
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
      description: "A Portfolio website made on React! A showcase of all my projects, skills and certifications",
      details: [
        { label: "Framework", value: "React" },
        { label: "UI Design", value: "Figma" },
      ],
      github: "https://github.com/Ezhil2389/Personal-Portfolio-React"
    },
  ];

  const handleMusicClick = () => {
    window.open('https://open.spotify.com/artist/0Pu62Uc06oxyp57I7HO7jB?si=ybmtaML_S3SvU4q-3ibuWQ', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section id="home" ref={sectionRefs.home} className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <motion.div 
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <motion.a 
                href="#contact" 
                className="get-in-touch bg-green-400 text-gray-900 py-2 px-4 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-green-300 transition duration-300 shine-effect w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Get in Touch
            </motion.a>
            <motion.a 
                href="https://drive.google.com/file/d/1m2Z8l2A3c6B2ahkJnrvO-8isLqudVaI_/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-resume bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-700 transition duration-300 shine-effect w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Download Resume
            </motion.a>
            </div>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-green-400" />
        </motion.div>
        <div className="absolute inset-0 z-0 opacity-50 bg-noise"></div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20 px-4 bg-gray-800">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={0}
        >
          <h2 className="text-3xl font-bold mb-8 text-green-400">About Me</h2>
          <p className="text-xl mb-8 leading-relaxed">
            I'm an Undergraduate Student with a passion for Full-Stack Web Development and UI-UX design/Research. 
            My skills in creative thinking and execution, combined with my interest in Computer Networks 
            and Communication Systems, drive me to create innovative solutions and cool products.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Ezhil2389" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition duration-300"
            >
              <GithubIcon size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition duration-300"
            >
              <LinkedinIcon size={28} />
            </a>
            <a 
              href="mailto:ezhilrav@gmail.com" 
              className="text-gray-400 hover:text-green-400 transition duration-300"
            >
              <MailIcon size={28} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionRefs.skills} className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg shadow-lg glassmorphism transform hover:scale-105 transition duration-300"
                onClick={skill.title === 'Music' ? handleMusicClick : undefined}
                data-skill={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{skill.title}</h3>
                <ul className="list-disc list-inside text-gray-400">
                  {skill.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex}>{subpoint}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
<section id="projects" ref={sectionRefs.projects} className="py-20 px-4 bg-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-green-400">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-lg glassmorphism transform transition duration-300"
          onClick={() => toggleProject(index)}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-green-400">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <motion.div 
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: expandedProject === index ? 'auto' : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="mt-4 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: expandedProject === index ? 1 : 0 }}
              transition={{ duration: 0.3, delay: expandedProject === index ? 0.1 : 0 }}
            >
              {project.details.map((detail, detailIndex) => (
                <p key={detailIndex}><strong>{detail.label}:</strong> {detail.value}</p>
              ))}
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-400 hover:text-green-300 font-semibold transition duration-300 block mt-2"
                  whileHover={{ x: 5 }}
                >
                  View on GitHub &rarr;
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, text: "Call Me", subtext: "+91 9884063255", href: "tel:+919884063255" },
              { icon: MessageCircle, text: "WhatsApp", subtext: "+91 9884063255", href: "https://wa.me/919884063255" },
              { icon: MailIcon, text: "Email", subtext: "ezhilrav@gmail.com", href: "mailto:ezhilrav@gmail.com" }
            ].map((item, index) => (
                <a 
                key={index}
                href={item.href} 
                target={item.icon === MessageCircle ? "_blank" : "_self"}
                rel={item.icon === MessageCircle ? "noopener noreferrer" : ""}
                className="flex flex-col items-center p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300"
              >
                <item.icon size={48} className="text-green-400 mb-4" />
                <span className="text-lg font-semibold">{item.text}</span>
                <span className="text-gray-300">{item.subtext}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Ezhil R. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Want to check out my music? Well, find the easter egg to check my Spotify out!</p>
        </div>
      </footer>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-green-400 z-50"
        style={{ scaleX: scrollPosition / (document.documentElement.scrollHeight - window.innerHeight) }}
      />
    </div>
  );
};

export default Home;