import React from 'react';
import Hero from './components/Hero';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Hero />
  
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;