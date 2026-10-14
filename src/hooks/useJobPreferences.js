import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const preferenceId = 'default';
const storageKey = 'portfolio-job-preferences';
const fallbackSkills = ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript'];

function readLocalPreferences() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function useJobPreferences() {
  const [selectedSkills, setSelectedSkills] = useState(fallbackSkills);
  const [nextReviewAt, setNextReviewAt] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadPreferences() {
      if (!supabase) {
        const saved = readLocalPreferences();
        if (active && saved?.selectedSkills) {
          setSelectedSkills(saved.selectedSkills);
          setNextReviewAt(saved.nextReviewAt ?? null);
        }
        return;
      }

      const { data, error } = await supabase
        .from('portfolio_job_preferences')
        .select('selected_skills, next_review_at')
        .eq('id', preferenceId)
        .maybeSingle();

      if (!active) return;
      if (!error && data) {
        setSelectedSkills(data.selected_skills);
        setNextReviewAt(data.next_review_at);
      }
    }

    loadPreferences();
    return () => {
      active = false;
    };
  }, []);

  const toggleSkill = useCallback(async (skill) => {
    setSaveError('');
    setIsSaving(true);
    const nextSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((item) => item !== skill)
      : [...selectedSkills, skill];
    const nextReview = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();

    setSelectedSkills(nextSkills);
    setNextReviewAt(nextReview);

    const localValue = JSON.stringify({ selectedSkills: nextSkills, nextReviewAt: nextReview });
    window.localStorage.setItem(storageKey, localValue);

    if (supabase) {
      const { error } = await supabase.from('portfolio_job_preferences').upsert({
        id: preferenceId,
        selected_skills: nextSkills,
        next_review_at: nextReview,
        updated_at: new Date().toISOString(),
      });
      if (error) setSaveError('Saved on this device. The shared profile could not be updated yet.');
    }

    setIsSaving(false);
  }, [selectedSkills]);

  return { selectedSkills, nextReviewAt, isSaving, saveError, toggleSkill };
}
