import { beforeEach, describe, expect, it } from 'vitest';
import { findSkillById, getSkills, saveSkill } from './skillsStorage';

beforeEach(() => {
  localStorage.clear();
});

describe('skillsStorage', () => {
  it('loads default skills when storage is empty', () => {
    const skills = getSkills();
    expect(skills.length).toBeGreaterThan(0);
  });

  it('saves and finds a created skill', () => {
    saveSkill({
      id: 'skill-test-1',
      name: 'Test Skill',
      description: 'for tests',
      level: 'Beginner',
      createdAt: '2026-04-26'
    });

    const skill = findSkillById('skill-test-1');
    expect(skill?.name).toBe('Test Skill');
  });
});
