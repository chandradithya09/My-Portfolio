import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-light-text font-poppins antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
