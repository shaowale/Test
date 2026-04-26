import { Link } from 'react-router-dom';

const DEPLOY_MARK = 'deploy-2026-04-26-02';
const LAST_UPDATED_UTC = '2026-04-26 08:40 UTC';

const quickEntries = [
  { to: '/skills', label: '进入 Skill 列表', desc: '查看当前 Skill 数据与详情。' },
  { to: '/skills/new', label: '新建 Skill', desc: '快速录入并验证本地持久化。' },
  { to: '/docs', label: '打开文档中心', desc: '直接访问 README、调研报告与评估矩阵。' }
];

export function HomePage() {
  return (
    <section className="card">
      <h1>首页</h1>
      <p>这是一个适合手机端验证的 Skill 管理最小应用。</p>
      <p>现在可以从主界面直接进入 Skill 功能和文档中心。</p>

      <div className="release-badge" aria-label="release-info">
        <strong>当前版本标记：</strong> {DEPLOY_MARK}
        <br />
        <strong>最近修改时间（UTC）：</strong> {LAST_UPDATED_UTC}
      </div>

      <div className="quick-grid">
        {quickEntries.map((entry) => (
          <Link key={entry.to} to={entry.to} className="quick-card">
            <strong>{entry.label}</strong>
            <span>{entry.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
