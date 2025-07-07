import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const SocialAccounts: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/bhaveshsuthar',
      color: 'hover:bg-gray-800',
      bgColor: 'bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/bhavesh-suthar',
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sutharb490@gmail.com',
      color: 'hover:bg-red-600',
      bgColor: 'bg-red-500'
    }
  ];

  const downloadResume = () => {
    // Create a sample resume download (you can replace this with actual resume file)
    const resumeContent = `
Bhavesh Suthar
AI DevOps Engineer
Bikaner, Rajasthan

EDUCATION
Bachelor of Computer Applications (BCA)
Maharaja Ganga Singh University, Bikaner

SKILLS
• DevOps: Docker, Kubernetes, Jenkins, AWS, CI/CD Pipelines
• Programming: Python, JavaScript, TypeScript
• AI/ML: Machine Learning, Generative AI, LangChain, Gemini API
• Tools: Git, GitHub, Linux, Flask, Streamlit
• Soft Skills: Communication, Problem Solving, Team Collaboration

EXPERIENCE
Summer Internship - LinuxWorld
• Hands-on DevOps experience
• CI/CD pipeline development
• Container orchestration with Docker & Kubernetes

PROJECTS
• Fully Automated CI/CD Pipeline
• AI Chatbot with Gemini
• Machine Learning Models
• Web Automation Tools
• Docker Container Management

CONTACT
Email: sutharb490@gmail.com
GitHub: github.com/bhaveshsuthar
LinkedIn: linkedin.com/in/bhavesh-suthar
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bhavesh_Suthar_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed top-6 right-48 z-40 flex items-center space-x-3">
      {/* Social Links */}
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`w-10 h-10 ${social.bgColor} ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <social.icon size={18} />
        </motion.a>
      ))}
      
      {/* Download Resume Button */}
      <motion.button
        onClick={downloadResume}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
        title="Download Resume"
      >
        <Download size={18} />
      </motion.button>
    </div>
  );
};

export default SocialAccounts; 