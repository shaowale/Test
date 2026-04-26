import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveSkill } from '../lib/skillsStorage';
import type { Skill } from '../types';

const levels: Skill['level'][] = ['Beginner', 'Intermediate', 'Advanced'];

export function SkillCreatePage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState<Skill['level']>('Beginner');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = `skill-${Date.now()}`;
    saveSkill({
      id,
      name: name.trim(),
      description: description.trim(),
      level,
      createdAt: new Date().toISOString().slice(0, 10)
    });

    navigate(`/skills/${id}`);
  };

  return (
    <section className="card">
      <h1>Skill 创建页</h1>
      <form className="form" onSubmit={onSubmit}>
        <label>
          名称
          <input required value={name} onChange={(event) => setName(event.target.value)} />
        </label>

        <label>
          描述
          <textarea
            required
            rows={4}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <label>
          Level
          <select value={level} onChange={(event) => setLevel(event.target.value as Skill['level'])}>
            {levels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">保存 Skill</button>
      </form>
    </section>
  );
}
