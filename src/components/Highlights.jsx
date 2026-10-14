import { Trophy, TrendingUp, Award, FolderGit2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './About';

const stats = [
  { icon: Trophy, value: '10.0', label: 'SSC CGPA', sub: 'Academic Excellence' },
  { icon: TrendingUp, value: '8.11', label: 'Current CGPA', sub: 'B.Tech Performance' },
  { icon: Award, value: '87.8%', label: 'Intermediate', sub: 'Academic Achievement' },
  { icon: FolderGit2, value: '2+', label: 'Projects', sub: 'Technical Innovation' },
];

export default function Highlights() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="highlights" className="section-padding relative">
      <div ref={ref} className={`container mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          title="Academic & Project Highlights"
          subtitle="A snapshot of my academic journey and technical achievements"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group glass-card rounded-2xl p-6 md:p-8 text-center hover:border-accent-pink/40 hover:shadow-xl hover:shadow-accent-pink/10 transition-all duration-400 hover:-translate-y-2"
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-secondary-accent/10 items-center justify-center mb-4 group-hover:bg-secondary-accent/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon size={26} className="text-secondary-accent" />
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold gradient-text mb-1">
                {stat.value}
              </h3>
              <p className="text-light-text text-sm font-medium">{stat.label}</p>
              <p className="text-muted-text text-xs mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
