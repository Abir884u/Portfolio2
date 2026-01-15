import React, { useState, useEffect } from 'react';
import { Github, Linkedin,  Download, Eye, Home,  FolderOpen, MessageSquare, Menu, X } from 'lucide-react';

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
     
     <nav className={`w-full py-2 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
  <div className="max-w-6xl mx-auto px-4">

    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full shadow-2xl z-50">
      
      <button onClick={() => scrollToSection('home')} className="flex items-center gap-1 text-gray-200 hover:text-blue-400 transition-colors">
        <Home size={18} />
        <span>Home</span>
      </button>

      <button onClick={() => scrollToSection('projects')} className="flex items-center gap-1 text-gray-200 hover:text-blue-400 transition-colors">
        <FolderOpen size={18} />
        <span>Projects</span>
      </button>

      <button onClick={() => scrollToSection('contact')} className="flex items-center gap-1 text-gray-200 hover:text-blue-400 transition-colors">
        <MessageSquare size={18} />
        <span>Contact</span>
      </button>

    </div>
  </div>
</nav>



      
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Hello, I'm</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Istiak Abir
            </h1>
            
            <p className="text-2xl text-blue-200 font-light">Web & Mobile App Engineer</p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate Full Stack Developer with expertise in modern web technologies.
               I build scalable applications and solve complex problems with clean, 
               efficient code.
            </p>
            
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
          
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-400 ml-2">developerProfile.js</span>
              </div>
              <pre className="text-xs md:text-sm text-green-400 font-mono overflow-x-auto">
{`const aboutMe = {
  name: "Istiak Abir",
  role: "Full Stack Developer",
  skills: [
    "JavaScript","C","C++","Java",
    "HTML","CSS","TailwindCSS",
    "React.js","Node.js","Express.js"
  ],
  tools: [
    "Git", "Docker", "AWS"
  ],
  passion: [
    "Clean code and best practices",
    "UI/UX design",
    "SQA and Testing"
  ]
};`}
              </pre>
              <div className="mt-4 flex items-center justify-end gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available for hire</span>
              </div>
            </div>
          </div>
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