import { beforeEach, describe, expect, it } from 'vitest';
import { findSkillById, getSkills, saveSkill } from './skillsStorage';

class MemoryStorage implements Storage {
  private map = new Map<string, string>();

  get length() {
    return this.map.size;
  }

  clear(): void {
    this.map.clear();
  }

  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }

  key(index: number): string | null {
    return Array.from(this.map.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.map.delete(key);
  }

  setItem(key: string, value: string): void {
    this.map.set(key, value);
  }
}

Object.defineProperty(globalThis, 'localStorage', {
  value: new MemoryStorage(),
  writable: true
});

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
