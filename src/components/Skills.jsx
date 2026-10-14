import { Code2, Globe, Database, BrainCircuit } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './About';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C', 'Java (OOP)', 'Python'],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['SQL', 'Database Design', 'Query Optimization'],
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    skills: ['NumPy', 'pandas', 'scikit-learn', 'ML Algorithms'],
  },
];

const coreCompetencies = [
  'Problem Solving',
  'Analytical Thinking',
  'Communication',
  'Team Collaboration',
  'Project Management',
  'Research & Development',
];

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-secondary-accent/5 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and core competencies"
        />

        {/* Skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="group glass-card rounded-2xl p-6 text-center hover:border-accent-pink/40 hover:shadow-lg hover:shadow-accent-pink/10 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-accent-pink/10 items-center justify-center mb-4 group-hover:bg-accent-pink/20 group-hover:scale-110 transition-all duration-300">
                <cat.icon size={28} className="text-accent-pink" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-dark-bg/80 px-3 py-1 rounded-full text-xs text-muted-text border border-border-subtle hover:border-secondary-accent/50 hover:text-light-text transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((comp, i) => (
              <span
                key={comp}
                className="bg-gradient-to-r from-accent-pink to-accent-pink-dark text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-accent-pink/40 hover:scale-105 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
