import React from 'react';
import './index.css';

const certificates = [
  {
    title: 'Foundations of User Experience Design from Google Inc.',
    image: 'https://i.ibb.co/1McWM61/Whats-App-Image-2024-07-18-at-11-39-10.jpg', // Replace with your Google Drive image link
    link: 'https://www.coursera.org/account/accomplishments/verify/BVGD5STSRPSZ?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' // Replace with your Google Drive certificate link
  },
  {
    title: 'Introduction to DevOps from IBM',
    image: 'https://i.ibb.co/q7Q0WjC/Whats-App-Image-2024-07-18-at-11-52-34.jpg',
    link: 'https://www.coursera.org/account/accomplishments/verify/M8L4QKF242SB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    title: 'Introduction to MongoDB from MongoDB University',
    image: 'https://i.ibb.co/6N8fRNW/Whats-App-Image-2024-07-18-at-11-55-52.jpg',
    link: 'https://learn.mongodb.com/c/V4e_Y_WEQXm00BAkSXlViQ'
  },
  {
    title: 'Citi - Technology Software Development Job Simulation',
    image: 'https://i.ibb.co/CQnJsXx/Whats-App-Image-2024-07-18-at-11-57-14.jpg',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Citi/2jxESPvorR7fmypXj_Citi_wu6tfojGp9HHQgg5j_1708766365813_completion_certificate.pdf'
  },
  {
    title: 'Hewlett Packard Enterprise - SDE Job Simulation',
    image: 'https://i.ibb.co/MDzK9Vg/Whats-App-Image-2024-07-18-at-11-59-05.jpg',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Hewlett%20Packard%20Enterprise%20/da2T3WZCbMAJD7bNB_Hewlett%20Packard%20Enterprise_wu6tfojGp9HHQgg5j_1708608354518_completion_certificate.pdf'
  },
  {
    title: 'Project Management Foundations from LinkedIn Learning',
    image: 'https://i.ibb.co/4jcFs8D/Whats-App-Image-2024-07-18-at-12-00-12.jpg',
    link: 'https://www.linkedin.com/learning/certificates/69c620d7746faf8645ac7fbfc036264951689c60abf9e8f43ad64aeea9f25949'
  },
  // Add more certificates here
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg glassmorphism transform hover:scale-105 transition duration-300">
              <img src={certificate.image} alt={certificate.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-green-400">{certificate.title}</h3>
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold transition duration-300 block mt-2">
                View Certificate &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
