import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import StarField from './components/StarField';
import FloatingElements from './components/FloatingElements';
import InteractiveBackground from './components/InteractiveBackground';
import WaveBackground from './components/WaveBackground';
import ProfilePanel from './components/ProfilePanel';
import TabButton from './components/TabButton';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import AIAssistant from './components/AIAssistant';
import StatsSection from './components/StatsSection';
import TechStack from './components/TechStack';
import ScrollProgress from './components/ScrollProgress';
import BugHunterRobot from './components/BugHunterRobot';
import SocialAccounts from './components/SocialAccounts';
import profileImg from './assets/profile.jpg.jpeg';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'My Projects' },
    { id: 'skills', label: 'My Skills' },
    { id: 'education', label: 'My Education' },
  ];

  const featuredProject = {
    title: "Fully Automated CI/CD Pipeline",
    description: "End-to-end CI/CD pipeline using Python, Git, GitHub, Docker, Kubernetes, Jenkins across different operating systems. Automated deployment, testing, and monitoring with comprehensive DevOps practices.",
    technologies: ["Python", "Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "Linux", "AWS"]
  };

  const pythonProjects = [
    {
      title: "WhatsApp & Email Automation",
      description: "Automated messaging system for WhatsApp and email communications",
      technologies: ["Python", "Selenium", "SMTP"]
    },
    {
      title: "Twilio Communication Suite",
      description: "Send text messages and make phone calls using Twilio API integration",
      technologies: ["Python", "Twilio API", "REST"]
    },
    {
      title: "Face Swap Application",
      description: "Capture photos and swap faces using computer vision techniques",
      technologies: ["Python", "OpenCV", "Face Recognition"]
    },
    {
      title: "Web Scraping Tool",
      description: "Extract and analyze website data using BeautifulSoup",
      technologies: ["Python", "BeautifulSoup", "Requests"]
    },
    {
      title: "Google Search Automation",
      description: "Programmatically search Google queries and extract results",
      technologies: ["Python", "Selenium", "Google API"]
    },
    {
      title: "Social Media Automation",
      description: "Automated posting on Instagram and LinkedIn platforms",
      technologies: ["Python", "Instagram API", "LinkedIn API"]
    },
    {
      title: "Streamlit Menu System",
      description: "Interactive menu-based project with speech recognition capabilities",
      technologies: ["Python", "Streamlit", "Speech Recognition"]
    },
    {
      title: "Linux Command Manager",
      description: "Remote Linux command execution over SSH with descriptions",
      technologies: ["Python", "Streamlit", "SSH", "Linux"]
    },
    {
      title: "Docker Container Manager",
      description: "Manage Docker containers through Python and Streamlit interface",
      technologies: ["Python", "Docker", "Streamlit"]
    },
    {
      title: "Virtual Mouse Controller",
      description: "Hand gesture-based mouse control using computer vision",
      technologies: ["Python", "cvzone", "mediapipe", "OpenCV"]
    }
  ];

  const mlProjects = [
    {
      title: "Student Meal Prediction",
      description: "ML model to predict mid-day meal requirements using feature engineering",
      technologies: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"]
    }
  ];

  const aiProjects = [
    {
      title: "AI Chatbot with Gemini",
      description: "Intelligent chatbot using Gemini model with system and user roles",
      technologies: ["Python", "Gemini API", "Gradio", "NLP"]
    },
    {
      title: "AI Task Agent",
      description: "Autonomous AI agent capable of performing various automated tasks",
      technologies: ["Python", "LangChain", "AI Agents", "Task Automation"]
    }
  ];

  const skills = [
    "Linux", "Python", "Jenkins", "Docker", "Kubernetes", "Git & GitHub",
    "AWS Cloud", "Machine Learning", "Generative AI & Agentic AI", "LangChain",
    "Flask", "Streamlit", "BeautifulSoup", "Good Communication Skills",
    "Helping Nature", "CI/CD Pipelines", "Scripting and Automation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027]/90 via-[#2c5364]/80 to-[#BEACD7]/70 relative overflow-x-hidden">
      <ScrollProgress />
      <StarField />
      <FloatingElements />
      <InteractiveBackground />
      <WaveBackground />
      <BugHunterRobot />
      <SocialAccounts />
      
      {/* Profile Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsProfileOpen(true)}
        className="fixed top-6 right-8 z-30 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-white"
      >
        <User size={20} className="text-purple-700" />
      </motion.button>

      {/* AI Assistant Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsAIOpen(!isAIOpen)}
        className="fixed top-6 right-20 z-30 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <Sparkles size={20} className="text-white" />
      </motion.button>

      <ProfilePanel isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <AIAssistant isOpen={isAIOpen} onToggle={() => setIsAIOpen(!isAIOpen)} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-8 lg:px-16 relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-start"
        >
          <motion.div 
            className="w-96 h-[28rem] bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={profileImg}
              alt="Bhavesh Suthar profile"
              className="w-80 h-96 object-cover rounded-2xl shadow-inner border-4 border-white/40"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          <motion.h1 
            className="text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Bhavesh
            </motion.span>
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
              animate={{ 
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear",
                delay: 1.5
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Suthar
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-2 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            AI DevOps Engineer
          </motion.p>
          <motion.p 
            className="text-lg text-white/80 italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            "Building solutions with code, creativity, and curiosity"
          </motion.p>
          
          <TechStack />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-8 lg:px-16 relative" style={{ zIndex: 2 }}>
        <StatsSection />
      </section>

      {/* Content Section */}
      <section className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
          {/* Tabs */}
          <div className="flex justify-center space-x-6 mb-12">
            {tabs.map((tab, index) => (
              <TabButton
                key={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                index={index}
              />
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {activeTab === 'projects' && (
              <div className="space-y-12">
                {/* Featured Project */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Featured Project
                    </h2>
                    <p className="text-white/80 text-lg">My most impactful work that showcases my expertise</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                  >
                    <ProjectCard {...featuredProject} featured={true} />
                  </motion.div>
                </div>

                {/* Project Categories */}
                <div className="space-y-16">
                  {/* Python Projects */}
                  <div className="mb-12">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-8"
                    >
                      <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                        <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                          🐍
                        </span>
                        Python Projects
                      </h3>
                      <p className="text-white/70 text-lg">Automation, web scraping, and utility applications</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {pythonProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                          <ProjectCard {...project} />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* ML Projects */}
                  <div className="mb-12">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-8"
                    >
                      <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                        <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                          🤖
                        </span>
                        Machine Learning
                      </h3>
                      <p className="text-white/70 text-lg">Predictive models and data analysis</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {mlProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                          <ProjectCard {...project} />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* AI Projects */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-8"
                    >
                      <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                        <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                          ✨
                        </span>
                        Generative AI / Agentic AI
                      </h3>
                      <p className="text-white/70 text-lg">Next-generation AI applications and autonomous agents</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {aiProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                          <ProjectCard {...project} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-white mb-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Technical Skills & Expertise
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="max-w-4xl mx-auto">
                <motion.h2 
                  className="text-3xl font-bold text-white mb-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Educational Background
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white text-2xl font-bold">🎓</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor of Computer Applications</h3>
                    <p className="text-lg text-gray-600 mb-4">Maharaja Ganga Singh University, Bikaner</p>
                    <motion.div 
                      className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Completed Graduation
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;