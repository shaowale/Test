import { Link } from 'react-router-dom';
import { getSkills } from '../lib/skillsStorage';

export function SkillsPage() {
  const skills = getSkills();

  return (
    <section>
      <h1>Skill 列表</h1>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li className="card" key={skill.id}>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
            <div className="row-between">
              <small>{skill.level}</small>
              <Link to={`/skills/${skill.id}`}>查看详情</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
