import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 bg-slate-900 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-white">Data<span className="text-neon">Scientist</span></span>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} Sachin Rawat. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
