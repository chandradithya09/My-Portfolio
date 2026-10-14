import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const preferenceId = 'default';
const fallbackSkills = ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript'];

export function useJobPreferences() {
  const [selectedSkills, setSelectedSkills] = useState(fallbackSkills);
  const [nextReviewAt, setNextReviewAt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadPreferences() {
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
      setIsLoading(false);
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

    const { error } = await supabase.from('portfolio_job_preferences').upsert({
      id: preferenceId,
      selected_skills: nextSkills,
      next_review_at: nextReview,
      updated_at: new Date().toISOString(),
    });

    if (error) setSaveError('Your selection could not be saved yet. Please try again.');
    setIsSaving(false);
  }, [selectedSkills]);

  return { selectedSkills, nextReviewAt, isLoading, isSaving, saveError, toggleSkill };
}
