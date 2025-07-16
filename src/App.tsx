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
import SocialAccounts from './components/SocialAccounts';
import profileImg from './assets/profile.jpg.jpeg';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState<string>('');
  const [activeTab, setActiveTab] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const devopsProjects = [
    {
      title: "CI/CD Pipeline",
      description: "Fully automated CI/CD pipeline with Docker and Kubernetes",
      technologies: ["Python", "Git", "GitHub", "Docker", "Kubernetes", "Jenkins"],
      githubUrl: "https://github.com/yourusername/ci-cd-pipeline"
    },
    {
      title: "AWS Infrastructure",
      description: "Infrastructure as Code using AWS CloudFormation and Terraform",
      technologies: ["AWS", "Terraform", "CloudFormation", "DevOps"],
      githubUrl: "https://github.com/yourusername/aws-infrastructure"
    },
    {
      title: "Monitoring Dashboard",
      description: "Real-time monitoring and alerting system",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Docker"],
      githubUrl: "https://github.com/yourusername/monitoring-dashboard"
    }
  ];

  const pythonProjects = [
    "Send WhatsApp",
    "InstaPost",
    "Send Mail",
    "Search Google",
    "Text Message",
    "Web Scrap",
    "Swap Face"
  ];

  const jsProjects = [
    "Video Capture App",
    "Unit Converter",
    "Video Copy & Send Email",
    "Temperature Converter",
    "Speed Tester",
    "Whatsapp Sender",
    "Mood Music Player",
    "Live Vlog Application",
    "Internet Speed Tester",
    "Grocery Store Finder",
    "GPS Location",
    "Goal Countdown Timer",
    "Darkmode Toggle",
    "Camera App",
    "BMI Calculator",
    "Age Calculator"
  ];

  const pythonGithubUrl = "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/functions.py";

  const mainProjects = [
    {
      title: "Borrow Smart",
      description: "Smart borrowing system with intelligent recommendations",
      technologies: ["Python", "Flask", "Machine Learning", "SQL"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/borrowsmart.py"
    },
    {
      title: "Virtual Mouse",
      description: "Hand gesture-based virtual mouse controller",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/virtualmouse.py"
    },
    {
      title: "File Explorer",
      description: "Advanced file management system with search capabilities",
      technologies: ["Python", "Tkinter", "File System", "GUI"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/fileexplorer.py"
    },
    {
      title: "Linux SSH Dashboard",
      description: "Web-based SSH dashboard for Linux server management",
      technologies: ["Python", "Flask", "SSH", "Web Interface"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/linuxssh.py"
    }
  ];

  const aiProjects = [
    {
      title: "Caption Generator",
      description: "AI-powered image caption generation using deep learning",
      technologies: ["Python", "TensorFlow", "Computer Vision", "NLP"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/postgrow.py"
    },
    {
      title: "Study Mate",
      description: "AI study assistant with personalized learning recommendations",
      technologies: ["Python", "LangChain", "AI Agents", "Education"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/studymate.py"
    },
    {
      title: "devops_agent",
      description: "AI-powered DevOps automation agent",
      technologies: ["Python", "AI Agents", "DevOps"],
      githubUrl: "https://github.com/bhaveshsuthar-63777/pp-codes/blob/main/aiagent_v1.py",
      liveDemoUrl: "https://www.linkedin.com/posts/bhavesh-suthar-29a609212_ai-devops-docker-activity-7350914889692950528-n16c?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXW5lYBYeLetgF1feI6WomWkdbyV3wE_Uk"
    }
  ];

  const skills = [
    "Linux", "Python", "Jenkins", "Docker", "Kubernetes", "Git & GitHub",
    "AWS Cloud", "Machine Learning", "Generative AI & Agentic AI", "LangChain",
    "Flask", "Streamlit", "BeautifulSoup", "Good Communication Skills",
    "Helping Nature", "CI/CD Pipelines", "Scripting and Automation"
  ];

  // Blog data
  const blogs = [
    {
      title: "How Netflix is Streaming Innovation with AWS",
      url: "https://medium.com/@sutharb490/how-netflix-is-streaming-innovation-with-aws-a-deep-dive-into-its-cloud-strategy-447a3bfc24c8"
    },
    {
      title: "How Companies are Leveraging Docker: Real World Use Cases",
      url: "https://medium.com/@sutharb490/how-companies-are-leveraging-docker-real-world-case-studies-c9b22a3718fc"
    },
    {
      title: "Find a way to give sound card access to any program inside Docker.",
      url: "https://medium.com/@sutharb490/find-a-way-to-give-sound-card-access-to-any-program-inside-docker-2bfe27ff027f"
    },
    {
      title: "Why Top Companies Use Linux — And the Benefits They Reap",
      url: "https://medium.com/@sutharb490/why-top-companies-use-linux-and-the-benefits-they-reap-0d93f9c899e3"
    },
    {
      title: "5 Popular GUI Programs in Linux and the Terminal Commands Behind Them",
      url: "https://medium.com/@sutharb490/5-popular-gui-programs-in-linux-and-the-terminal-commands-behind-them-dd649ba192e9"
    }
  ];

  const jsProjectsLink = "https://github.com/bhaveshsuthar-63777/jsprojects";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      <ScrollProgress />
      <StarField />
      <FloatingElements />
      <InteractiveBackground />
      <WaveBackground />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`text-white font-medium transition-all duration-300 hover:text-purple-300 ${
                    activeTab === tab.id ? 'text-purple-300 border-b-2 border-purple-300' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Action Buttons Grouped */}
      <div className="fixed top-28 right-8 z-50 flex flex-col space-y-4 items-end">
        <SocialAccounts />
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsProfileOpen(true)}
          className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-white"
        >
          <User size={20} className="text-purple-700" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAIOpen(!isAIOpen)}
          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <Sparkles size={20} className="text-white" />
        </motion.button>
      </div>

      <ProfilePanel isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <AIAssistant 
        isOpen={isAIOpen} 
        onToggle={() => {
          setIsAIOpen(!isAIOpen);
          if (!isAIOpen) {
            setInitialQuestion(''); // Clear initial question when closing
          }
        }} 
        initialQuestion={initialQuestion}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-8 lg:px-16 relative pt-20" style={{ zIndex: 2 }}>
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
              className="w-96 h-[28rem] object-cover rounded-2xl shadow-inner border-4 border-white/40"
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

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
          <motion.h2 
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-2xl font-bold">👨‍💻</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bhavesh Suthar</h3>
              <p className="text-lg text-gray-600 mb-4">AI DevOps Engineer from Bikaner, Rajasthan</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm passionate about building innovative solutions with code, creativity, and curiosity. 
                Specializing in DevOps automation, AI/ML applications, and full-stack development. 
                Currently pursuing my passion for technology and helping organizations streamline their development processes.
              </p>
              <motion.div 
                className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Available for Opportunities
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
          <motion.h2 
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          
          {/* Project Categories */}
          <div className="space-y-16">
            {/* DevOps Projects */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    ⚙️
                  </span>
                  DevOps Projects
                </h3>
                <p className="text-white/70 text-lg">Infrastructure, automation, and deployment solutions</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {devopsProjects.map((project: any, index: number) => (
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
            <div className="mb-12">
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
                  AI Projects
                </h3>
                <p className="text-white/70 text-lg">Artificial Intelligence and Machine Learning applications</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiProjects.map((project: any, index: number) => (
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

            {/* Main Projects */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    🚀
                  </span>
                  Main Projects
                </h3>
                <p className="text-white/70 text-lg">Core applications and innovative solutions</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainProjects.map((project: any, index: number) => (
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

            {/* Python Micro Tasks */}
            <div>
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
                  Python Micro Tasks
                </h3>
                <p className="text-white/70 text-lg">Automation, web scraping, and utility micro tasks</p>
              </motion.div>
              <div className="max-w-md">
                <div className="bg-white/80 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
                  <h4 className="font-bold text-xl text-gray-800 mb-3">Python Micro Tasks</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {pythonProjects.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                  <a
                    href={pythonGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 w-full mb-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    <span>View Python Code on GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* HTML/JS Projects */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                    💻
                  </span>
                  HTML/JS Projects
                </h3>
                <p className="text-white/70 text-lg">Frontend web applications and interactive projects</p>
              </motion.div>
              <div className="max-w-md">
                <div className="bg-white/80 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
                  <h4 className="font-bold text-xl text-gray-800 mb-3">HTML/JS Projects</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {jsProjects.map((proj, idx) => (
                      <li key={idx}>{proj}</li>
                    ))}
                  </ul>
                  <a
                    href={jsProjectsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    <span>View JS Projects on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
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
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
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
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto"
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
          <motion.h2 
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-2xl font-bold">📧</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect!</h3>
              <p className="text-lg text-gray-600 mb-6">I'm always open to discussing new opportunities and collaborations.</p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:sutharb490@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  📧 sutharb490@gmail.com
                </motion.a>
                <motion.a
                  href="https://github.com/bhaveshsuthar-63777"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="block bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
                >
                  🐙 GitHub Profile
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhavesh-suthar-29a609212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  💼 LinkedIn Profile
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Chat with AI Assistant
            </h2>
            <p className="text-white/80 text-lg">Ask me anything about my projects, skills, or experience</p>
          </motion.div>

          {/* Quick Questions */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "What are Bhavesh's main skills?",
                "Tell me about Bhavesh's DevOps experience",
                "What Python micro tasks has Bhavesh built?",
                "What are Bhavesh's main projects?",
                "What AI projects has Bhavesh developed?",
                "What is Bhavesh's educational background?"
              ].map((question, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    setInitialQuestion(question);
                    setIsAIOpen(true);
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">?</span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors font-medium">
                      {question}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-purple-300 text-xs font-medium">Click to ask AI Assistant</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">AI Assistant</h4>
                  <p className="text-white/70 text-sm">Ready to help you!</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white/90 text-sm">
                    👋 Hi! I'm Bhavesh's AI assistant. I can help you learn more about his projects, skills, and experience. 
                    Feel free to ask me anything about his DevOps expertise, Python projects, AI applications, or educational background!
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setInitialQuestion('');
                  setIsAIOpen(true);
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Sparkles size={18} />
                <span>Start Chatting</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen bg-white/10 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-8 py-16">
          <motion.h2 
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {blogs.map((blog, idx) => (
              <motion.a
                key={idx}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.2)' }}
                className="block bg-white/80 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 m-4 text-pink-400 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">📝</div>
                <h4 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">{blog.title}</h4>
                <span className="text-purple-600 font-semibold text-sm">Read Blog →</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;