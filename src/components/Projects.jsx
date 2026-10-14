import { Shield, MessageSquare, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './About';

const projects = [
  {
    icon: Shield,
    title: 'AI Driven Cybersecurity Threat Detection in Cloud Environments',
    description:
      'An AI-powered cybersecurity system designed to detect, analyze, and prevent cloud-based cyber threats using Machine Learning, anomaly detection, and real-time monitoring techniques.',
    tech: ['Python', 'Machine Learning', 'Cyber Security', 'TensorFlow', 'AWS/Azure'],
    features: [
      'Real-time threat detection and monitoring using AI and ML algorithms',
      'Detects suspicious activities, anomalies, and potential cyber attacks automatically',
      'Cloud security analytics with alert generation and threat prediction',
    ],
    liveDemo: null,
  },
  {
    icon: MessageSquare,
    title: 'Real-time Chat Application',
    description:
      'A dynamic and responsive real-time chat application featuring instant messaging, user authentication, and a modern, vibrant user interface. Designed for seamless communication across devices.',
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS', 'Vercel'],
    features: [
      'Instant real-time messaging',
      'Modern, user-friendly interface',
      'Responsive design for all devices',
    ],
    liveDemo: 'https://realtime-chat-app-nsv4.vercel.app',
  },
];

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent-pink/5 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my technical projects demonstrating expertise in machine learning and software development"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group glass-card rounded-2xl p-7 md:p-8 hover:border-accent-pink/40 hover:shadow-xl hover:shadow-accent-pink/10 transition-all duration-500"
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-pink/10 flex items-center justify-center group-hover:bg-accent-pink/20 group-hover:scale-110 transition-all duration-300">
                  <project.icon size={26} className="text-accent-pink" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight pt-1">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted-text text-sm md:text-base mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-dark-bg/80 px-3 py-1 rounded-full text-xs text-muted-text border border-border-subtle hover:border-secondary-accent/50 hover:text-light-text transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Key features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-light-text mb-2 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-text">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-pink flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-pink text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-pink-dark transition-all duration-300 shadow-lg hover:shadow-accent-pink/40 hover:scale-105"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-text text-lg mb-6">
            Interested in collaborating or learning more about my projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-pink to-accent-pink-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent-pink/40 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
