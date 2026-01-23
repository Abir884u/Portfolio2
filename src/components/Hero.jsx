import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Eye, Home, FolderOpen, MessageSquare, Menu, X } from 'lucide-react';

import { motion } from "framer-motion";

export default function Hero() {
  const [showCVModal, setShowCVModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMobileMenu(false);
    }
  };

  return (
    <>
     
  <motion.nav
  initial={{ 
    y: "80%", 
    opacity: 1  
  }}
  animate={{ 
    y: 0,     
    opacity: 1 
  }}
  transition={{ 
    duration: 0.8,
    ease: "easeOut",
    delay: 0.3
  }}
  className={`w-full ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}
>
  <div className="max-w-8xl mx-auto px-4">
    <motion.div
      initial={{ y: 100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }}
      className="fixed bottom-0.5 -ml-24 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full shadow-4xl z-50"
    >
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection('home')} 
        className="flex items-center  gap-4 text-gray-200 hover:text-blue-400 transition-colors p-2"
      >
        <Home size={23} />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection('projects')} 
        className="flex items-center gap-4 text-gray-200 hover:text-blue-400 transition-colors p-2"
      >
        <FolderOpen size={23} />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection('contact')} 
        className="flex items-center gap-4 text-gray-200 hover:text-blue-400 transition-colors p-2"
      >
        <MessageSquare size={23} />
      </motion.button>

    </motion.div>
  </div>
</motion.nav>


      <section id="home" className="min-h-screen bg-[linear-gradient(135deg,_#286594_0%,_#082647_100%)] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Hello, I'm</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight slate-200 opacity: 1; transform: none">
              Istiak Abir
            </h1>
            
            <p className="text-2xl text-blue-200 font-light">Web & Mobile App Engineer</p>
            
            <motion.p
  initial={{ 
    y: 10,      
    opacity: 0  
  }}
  animate={{ 
    y: 0,        
    opacity: 1
  }}
  transition={{ 
    duration: 0.8,
    ease: "easeOut",
    delay: 0.3    
  }}
  className="text-gray-300 leading-relaxed text-lg"
>
  Passionate Full Stack Developer with expertise in modern web technologies.
  I build scalable applications and solve complex problems with clean,
  efficient code.
</motion.p>
            
            <div className="flex gap-4 pt-4">
              <button onClick={() => setShowCVModal(true)} className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Download size={18} />
                Download CV
              </button>
              <button onClick={() => scrollToSection('contact')} className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105">
                Contact Me
              </button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Abir884u" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-500 transition-all transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/istiak-abir" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-500 transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <motion.div
  initial={{ 
    opacity: 0,
    x: 100,  
  }}
  animate={{ 
    opacity: 1,
    x: 0,    
  }}
  transition={{ 
    duration: 1,
    ease: "easeOut",
    delay: 0.3 
  }}
  className="relative"
>
  

  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 -mt-8 border  border-slate-700 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
     <pre className="text-[10px] text-orange-300  overflow-x-auto">
<span style={{color: 'rgb(86, 156, 214)'}}>const</span>{` aboutMe: `}<span style={{color: 'rgb(78, 201, 176)'}}>DeveloperProfile</span>{` = {
  codename: "Istiak Abir",
  role: "Web and Mobile App Developer",
  experience: "3+ years, 10+ projects",
  stack: {
    languages: ["JavaScript", "TypeScript", "C++"],
    frameworks: ["React", "Next.js", "React Native", "Appwrite", "NodeJS"],
    libraries: ["TailwindCSS", "Shadcn", "Redux", "Socket.io"],
  },
  tools: [
    "Git", "VSCode", "Chrome DevTools", "Render", "Netlify",
    "Firebase", "CodeBlocks", "Jira", "ChatGPT", "Figma"
  ],
  whatIDo: [
    "Create fast, responsive apps using React, Next.js, and React Native.",
    "Turn complex ideas into user-friendly, performant, and secure apps.",
    "Write clean, reusable, scalable code.",
  ],
  keyAchievements: [
    "Delivered 10+ projects with API integration and authentication.",
    "Improved app performance and load times significantly."
  ],
  softSkills: [
    "Clear communicator and team collaborator",
    "Fast learner, adaptable and solutions-focused mindset"
  ]
};`}
    </pre>
  </div>
  <motion.div
    initial={{ opacity: 1, y: 8 }}
    animate={{
       y: [0, -10, 0], rotate: [0, 2, 0],
    }}
     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute h-12 -bottom-4 -right-4 flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 text-xs border border-white/10 rounded-2xl"
  >
    <div className='text-xl'>👩🏻‍💻</div> 
    <span className='font-bold'>Available for hire</span>
  </motion.div>
</motion.div>
  

          
        </div>
      </section>

      {showCVModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] px-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My CV
            </h3>
            <p className="text-gray-300 mb-6">
              Would you like to download or view my CV?
            </p>
            
            <div className="space-y-3">
              <a href="https://drive.google.com/uc?export=download&id=1g8yjqYME4Ci84iDTVBBElT0NfC_ezBsX" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </a>
              
              <a href="https://drive.google.com/file/d/1g8yjqYME4Ci84iDTVBBElT0NfC_ezBsX/view" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-2">
                <Eye size={20} />
                View CV Online
              </a>
              
              <button onClick={() => setShowCVModal(false)} className="w-full bg-slate-700 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-600 transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}