import { BookOpen, School, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const education = [
  {
    icon: BookOpen,
    title: 'B.Tech in Computer Science Engineering',
    school: 'Marri Laxman Reddy Institute of Technology and Management, Hyderabad',
    period: '2022 — 2026',
    metric: 'CGPA: 8.11',
  },
  {
    icon: School,
    title: 'Intermediate',
    school: 'Narayana Junior College, Kukatpally',
    period: '2020 — 2022',
    metric: 'Percentage: 87.8%',
  },
  {
    icon: GraduationCap,
    title: 'SSC',
    school: 'Narayana High School',
    period: '2020',
    metric: 'CGPA: 10.0',
  },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div ref={ref} className={`container mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background, education, and passion for technology"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Journey card */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover:border-accent-pink/30 transition-colors duration-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent-pink rounded-full" />
              My Journey
            </h3>
            <p className="text-muted-text text-base md:text-lg mb-4 leading-relaxed">
              I am a technically driven and highly motivated Computer Science undergraduate seeking
              opportunities to enhance personal and professional development. With a strong
              foundation in programming languages like{' '}
              <Highlight>C</Highlight>, <Highlight>Java</Highlight>, and{' '}
              <Highlight>Python</Highlight>, I've developed hands-on expertise in SQL database
              management.
            </p>
            <p className="text-muted-text text-base md:text-lg leading-relaxed">
              My passion lies in <Highlight>Machine Learning</Highlight> and{' '}
              <Highlight>front-end technologies</Highlight>, where I combine analytical thinking
              with creative problem-solving. I pride myself on being an effective communicator with
              excellent analytical and problem-solving abilities, always eager to tackle complex
              challenges and learn new technologies.
            </p>
          </div>

          {/* Education card */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover:border-accent-pink/30 transition-colors duration-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-secondary-accent rounded-full" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="group bg-dark-bg/60 rounded-xl p-5 flex items-start gap-4 border border-transparent hover:border-accent-pink/20 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-pink/10 flex items-center justify-center group-hover:bg-accent-pink/20 transition-colors duration-300">
                    <edu.icon size={22} className="text-accent-pink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-light-text leading-snug">
                      {edu.title}
                    </h4>
                    <p className="text-muted-text text-sm mt-1">{edu.school}</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-xs text-muted-text bg-dark-bg/80 px-2.5 py-1 rounded-full border border-border-subtle">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-accent-pink-light">{edu.metric}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({ children }) {
  return <span className="text-accent-pink font-semibold">{children}</span>;
}

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
        <span className="gradient-text-animated">{title}</span>
      </h2>
      <p className="text-muted-text text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="w-12 h-1 rounded-full bg-accent-pink/60" />
        <span className="w-2 h-2 rounded-full bg-accent-pink" />
        <span className="w-12 h-1 rounded-full bg-accent-pink/60" />
      </div>
    </div>
  );
}
