import { Link } from 'react-router-dom';

const DEPLOY_MARK = 'deploy-2026-04-26-03';
const LAST_UPDATED_UTC = '2026-04-26 09:05 UTC';

const highlights = [
  '需求澄清 → 供应商评估 → 合同风险审查 全链路支持',
  '主界面直达文档中心，可快速查看调研报告与矩阵',
  '移动端优先设计，适合老板手机快速验收'
];

const quickEntries = [
  { to: '/skills', label: '采购 Skill 看板', desc: '查看当前 Skill 清单和能力分布。' },
  { to: '/skills/new', label: '新增业务 Skill', desc: '录入你家的新规则、模板和经验。' },
  { to: '/docs', label: '调研文档中心', desc: '直接查看报告、评估矩阵和落地说明。' }
];

export function HomePage() {
  return (
    <section className="home-stack">
      <article className="card hero-card">
        <h1>你家的 AI 采购 Skill 工作台</h1>
        <p>这是你当前版本的首页改版，和最初版本已经不一样，便于你直观看到发布差异。</p>

        <div className="release-badge" aria-label="release-info">
          <strong>当前版本标记：</strong> {DEPLOY_MARK}
          <br />
          <strong>最近修改时间（UTC）：</strong> {LAST_UPDATED_UTC}
        </div>
      </article>

      <article className="card">
        <h2>本轮上线重点</h2>
        <ul className="bullet-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

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
