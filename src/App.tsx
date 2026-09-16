import { useState } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Cursor from './components/Cursor';
import IntroLoader from './components/IntroLoader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-50">
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      <Background />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
