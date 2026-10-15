import { ArrowDown, FileText } from 'lucide-react';
import profileImage from '../assets/image3.jpeg';
import resumePdf from '../assets/GADDIPATI CHANDRADITHYA Resume A.pdf';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute top-10 -left-20 w-96 h-96 rounded-full bg-accent-pink animate-float" />
        <div
          className="blob absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary-accent animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="blob absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-accent-pink-dark animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left — text */}
          <div className="md:w-1/2 text-center md:text-left animate-slideInLeft">
            <div className="inline-flex items-center gap-2 bg-card-bg/60 backdrop-blur-sm border border-border-subtle rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-text">Open to opportunities</span>
            </div>

            <p className="text-muted-text text-lg mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4">
              <span className="gradient-text-animated">Gaddipati</span>
              <br />
              <span className="text-light-text">Chandradithya</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-text mb-6">
              Computer Science Undergraduate &amp; Future Tech Innovator
            </p>
            <p className="text-muted-text text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Technically driven and highly motivated, seeking opportunities to enhance personal and
              professional development with expertise in Machine Learning and full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="group bg-accent-pink text-white px-8 py-3.5 rounded-full font-semibold hover:bg-accent-pink-dark transition-all duration-300 shadow-lg hover:shadow-accent-pink/40 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-light-text border border-border-subtle px-8 py-3.5 rounded-full hover:bg-card-bg hover:border-accent-pink/50 transition-all duration-300"
              >
                <FileText size={18} />
                View Resume
              </a>
              <a
                href={resumePdf}
                download="GADDIPATI-CHANDRADITHYA-Resume.pdf"
                className="flex items-center justify-center gap-2 text-muted-text border border-border-subtle/60 px-5 py-3.5 rounded-full hover:text-light-text hover:bg-card-bg transition-all duration-300"
              >
                <FileText size={17} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-slideInRight">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-6 rounded-full border border-border-subtle/40 animate-[spin_25s_linear_infinite]" />
              <div
                className="absolute inset-0 -m-12 rounded-full border border-border-subtle/20 animate-[spin_35s_linear_infinite_reverse]"
                style={{ borderStyle: 'dashed' }}
              />

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-pink/80 glow-pink-strong animate-pulseGlow">
                <img
                  src={profileImage}
                  alt="Chandradithya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://placehold.co/400x400/FF4081/FFFFFF?text=Chandradithya';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 md:-right-6 bg-card-bg/90 backdrop-blur-sm border border-border-subtle rounded-2xl px-4 py-3 shadow-xl animate-float">
                <p className="text-2xl font-extrabold gradient-text">8.11</p>
                <p className="text-xs text-muted-text">Current CGPA</p>
              </div>
              <div
                className="absolute -bottom-2 -left-2 md:-left-6 bg-card-bg/90 backdrop-blur-sm border border-border-subtle rounded-2xl px-4 py-3 shadow-xl animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="text-2xl font-extrabold gradient-text">10.0</p>
                <p className="text-xs text-muted-text">SSC CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-text hover:text-accent-pink transition-colors duration-300 animate-bounceSubtle"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
