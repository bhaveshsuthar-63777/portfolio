import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, GraduationCap, Briefcase, Linkedin, Github, Mail, Phone } from 'lucide-react';

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfilePanel: React.FC<ProfilePanelProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 bg-white/90 backdrop-blur-lg shadow-2xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  BS
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Bhavesh Suthar</h3>
                <p className="text-gray-600">AI DevOps Engineer</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin size={18} className="text-purple-600" />
                  <span>Bikaner, Rajasthan</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <GraduationCap size={18} className="text-purple-600" />
                  <span>BCA from Maharaja Ganga Singh University</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <Briefcase size={18} className="text-purple-600" />
                  <span>Summer Internship: LinuxWorld</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                
                <a
                  href="https://www.linkedin.com/in/bhavesh-suthar-29a609212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/bhaveshsuthar-63777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="mailto:sutharb490@gmail.com"
                  className="flex items-center space-x-3 text-red-600 hover:text-red-800 transition-colors"
                >
                  <Mail size={18} />
                  <span>sutharb490@gmail.com</span>
                </a>

                <a
                  href="tel:6377719079"
                  className="flex items-center space-x-3 text-green-600 hover:text-green-800 transition-colors"
                >
                  <Phone size={18} />
                  <span>6377719079</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfilePanel;