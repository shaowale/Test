import { Link, useParams } from 'react-router-dom';
import { findSkillById } from '../lib/skillsStorage';

export function SkillDetailPage() {
  const { id = '' } = useParams();
  const skill = findSkillById(id);

  if (!skill) {
    return (
      <section className="card">
        <h1>Skill 详情页</h1>
        <p>未找到该 Skill。</p>
        <Link to="/skills">返回列表</Link>
      </section>
    );
  }

  return (
    <section className="card">
      <h1>Skill 详情页</h1>
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
      <p>Level: {skill.level}</p>
      <p>创建时间: {skill.createdAt}</p>
      <Link to="/skills">返回列表</Link>
    </section>
  );
}
