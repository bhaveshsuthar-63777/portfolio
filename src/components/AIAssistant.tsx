import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Minimize2, Maximize2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Bhavesh's personal AI assistant. I can tell you everything about his amazing projects, skills, and experience. What would you like to explore first?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('project') || message.includes('work')) {
      return "Bhavesh has worked on amazing projects! His featured CI/CD pipeline automates the entire development lifecycle using Python, Docker, Kubernetes, and Jenkins. He's also built AI chatbots with Gemini, ML models for meal prediction, and various automation tools. Which specific project interests you?";
    }
    
    if (message.includes('skill') || message.includes('technology')) {
      return "Bhavesh is skilled in DevOps technologies like Docker, Kubernetes, Jenkins, and AWS. He's proficient in Python, Machine Learning, and Generative AI. He also works with LangChain, Flask, Streamlit, and has excellent communication skills. Want to know more about any specific technology?";
    }
    
    if (message.includes('education') || message.includes('study')) {
      return "Bhavesh completed his Bachelor of Computer Applications (BCA) from Maharaja Ganga Singh University in Bikaner. He also did a summer internship at LinuxWorld, which gave him hands-on DevOps experience.";
    }
    
    if (message.includes('contact') || message.includes('reach')) {
      return "You can reach Bhavesh through LinkedIn, GitHub, or email at sutharb490@gmail.com. He's always open to discussing new opportunities and collaborations!";
    }
    
    if (message.includes('ai') || message.includes('machine learning')) {
      return "Bhavesh is passionate about AI! He's built chatbots using Gemini API, created AI agents for task automation, and developed ML models for prediction tasks. He's also experienced with LangChain for building AI applications.";
    }
    
    if (message.includes('devops') || message.includes('automation')) {
      return "DevOps is Bhavesh's specialty! He's created fully automated CI/CD pipelines, manages Docker containers, works with Kubernetes orchestration, and builds automation scripts. His approach focuses on efficiency and reliability.";
    }
    
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Great to meet you! I'm here to tell you all about Bhavesh Suthar, an amazing AI DevOps Engineer from Bikaner. What would you like to explore first - his projects, skills, or background?";
    }
    
    return "That's an interesting question! Bhavesh is a versatile AI DevOps Engineer with experience in automation, machine learning, and cloud technologies. Feel free to ask about his projects, skills, education, or anything else you'd like to know!";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className={`fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
          } transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Bhavesh's AI</h3>
                <p className="text-xs text-gray-500">Your personal guide</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={onToggle}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isUser
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200/50">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Bhavesh..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIAssistant;