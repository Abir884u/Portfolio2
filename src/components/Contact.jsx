import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! (This is a demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    
    <section id="contact" className="py-20 px-4  bg-[#1e293b]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>
          
          <div>
            <textarea
              placeholder="Your Message..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6"
              className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all resize-none"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}