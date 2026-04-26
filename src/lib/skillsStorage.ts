import { initialSkills } from '../data/initialSkills';
import type { Skill } from '../types';

const KEY = 'skills-app-data';

export function getSkills(): Skill[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(initialSkills));
    return initialSkills;
  }

  try {
    const parsed = JSON.parse(raw) as Skill[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return initialSkills;
  } catch {
    return initialSkills;
  }
}

export function saveSkill(newSkill: Skill): void {
  const current = getSkills();
  localStorage.setItem(KEY, JSON.stringify([newSkill, ...current]));
}

export function findSkillById(id: string): Skill | undefined {
  return getSkills().find((skill) => skill.id === id);
}
