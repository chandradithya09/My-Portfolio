import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-border-subtle/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold gradient-text-animated tracking-tight">
          Chandradithya
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-accent-pink' : 'text-muted-text hover:text-light-text'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-pink rounded-full transition-all duration-300 ${
                      isActive ? 'w-6' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-accent-pink text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-pink-dark transition-all duration-300 shadow-lg hover:shadow-accent-pink/40 hover:scale-105"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-light-text p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2 bg-dark-bg/95 backdrop-blur-md border-t border-border-subtle/30 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-muted-text hover:text-accent-pink hover:bg-card-bg/50 transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-accent-pink text-white px-5 py-3 rounded-full text-center font-semibold"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
