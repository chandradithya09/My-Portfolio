import { BriefcaseBusiness, Clock3, Info, Check } from 'lucide-react';

const openingTypes = [
  { title: 'Python Developer', detail: 'Backend, automation, and data-focused roles' },
  { title: 'Frontend Developer', detail: 'HTML, CSS, and JavaScript product teams' },
  { title: 'Full-stack Developer', detail: 'JavaScript and database-driven applications' },
  { title: 'MySQL Developer', detail: 'Database development and query-focused roles' },
];

export default function JobMatching({ selectedSkills, nextReviewAt, isSaving, saveError }) {
  const reviewLabel = nextReviewAt
    ? new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(nextReviewAt))
    : 'after your first selection';

  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
      <div className="rounded-2xl border border-accent-pink/25 bg-gradient-to-br from-accent-pink/10 via-card-bg/80 to-card-bg/60 p-7 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent-pink/15 flex items-center justify-center flex-shrink-0">
            <BriefcaseBusiness size={24} className="text-accent-pink" />
          </div>
          <div>
            <p className="text-accent-pink text-xs font-semibold uppercase tracking-[0.2em] mb-2">Job matching profile</p>
            <h3 className="text-xl md:text-2xl font-bold">Your selected skills guide the next market review</h3>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {selectedSkills.length > 0 ? selectedSkills.map((skill) => (
            <span key={skill} className="inline-flex items-center gap-1.5 rounded-full bg-accent-pink/15 border border-accent-pink/25 px-3 py-1.5 text-sm text-accent-pink-light">
              <Check size={14} /> {skill}
            </span>
          )) : <p className="text-sm text-muted-text">Select at least one skill above to build a matching profile.</p>}
        </div>

        <div className="mt-7 rounded-xl bg-dark-bg/50 border border-border-subtle p-4 flex items-start gap-3">
          <Clock3 size={18} className="text-secondary-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-light-text">Next review: {reviewLabel}</p>
            <p className="text-xs text-muted-text mt-1">Your preference is refreshed for a 48-hour review cycle when you change a skill.</p>
          </div>
        </div>

        {isSaving && <p className="mt-3 text-xs text-muted-text">Saving your skill profile...</p>}
        {saveError && <p className="mt-3 text-xs text-red-400">{saveError}</p>}
      </div>

      <div className="glass-card rounded-2xl p-7 md:p-8">
        <div className="flex items-center gap-2 mb-5">
          <Info size={18} className="text-secondary-accent" />
          <h3 className="font-semibold">Matching roles</h3>
        </div>
        <div className="space-y-3">
          {openingTypes.map((opening) => (
            <div key={opening.title} className="rounded-xl bg-dark-bg/60 border border-border-subtle p-4">
              <p className="text-sm font-semibold text-light-text">{opening.title}</p>
              <p className="text-xs text-muted-text mt-1">{opening.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-text mt-5 leading-relaxed">
          This profile prepares role matches but does not submit applications automatically. Each opening should be reviewed and approved before applying.
        </p>
      </div>
    </div>
  );
}
