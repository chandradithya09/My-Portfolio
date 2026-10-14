import { Code2, Globe, Database, BrainCircuit, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useJobPreferences } from '../hooks/useJobPreferences';
import { SectionHeading } from './About';
import JobMatching from './JobMatching';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C'],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'SQL', 'MongoDB'],
  },
  {
    icon: BrainCircuit,
    title: 'Applied Development',
    skills: ['Machine Learning', 'REST APIs', 'Full-stack Development'],
  },
];

const coreCompetencies = [
  'Problem Solving',
  'Analytical Thinking',
  'Communication',
  'Team Collaboration',
  'Adaptability',
  'Continuous Learning',
];

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  const { selectedSkills, nextReviewAt, isSaving, saveError, toggleSkill } = useJobPreferences();

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-secondary-accent/5 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Select the skills you want to use for your job matching profile"
        />

        <div className="mt-5 text-center">
          <p className="text-sm text-muted-text">Selected skills are highlighted. Click any skill to add or remove it.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="group glass-card rounded-2xl p-6 text-center hover:border-accent-pink/40 hover:shadow-lg hover:shadow-accent-pink/10 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-accent-pink/10 items-center justify-center mb-4 group-hover:bg-accent-pink/20 group-hover:scale-110 transition-all duration-300">
                <cat.icon size={28} className="text-accent-pink" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-pink/40 ${
                        isSelected
                          ? 'bg-accent-pink text-white border-accent-pink shadow-md shadow-accent-pink/20'
                          : 'bg-dark-bg/80 text-muted-text border-border-subtle hover:border-secondary-accent/50 hover:text-light-text'
                      }`}
                    >
                      {isSelected && <Check size={13} />}
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((comp, i) => (
              <button
                key={comp}
                type="button"
                onClick={() => toggleSkill(comp)}
                aria-pressed={selectedSkills.includes(comp)}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-pink/40 ${
                  selectedSkills.includes(comp)
                    ? 'bg-gradient-to-r from-accent-pink to-accent-pink-dark text-white shadow-lg shadow-accent-pink/30'
                    : 'bg-card-bg border border-border-subtle text-muted-text hover:border-accent-pink/50 hover:text-light-text'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        <JobMatching
          selectedSkills={selectedSkills}
          nextReviewAt={nextReviewAt}
          isSaving={isSaving}
          saveError={saveError}
        />
      </div>
    </section>
  );
}
