import React from 'react';
import Hero from './components/Hero';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen  text-white">
      <Hero />
  
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;