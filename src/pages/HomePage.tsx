import { Link } from 'react-router-dom';

const DEPLOY_MARK = 'deploy-2026-04-26-04';
const LAST_UPDATED_UTC = '2026-04-26 18:50 UTC';

const metrics = [
  { label: '在线 Skill 模块', value: '7', note: '覆盖需求-评标-合同-绩效' },
  { label: '调研资料入口', value: '5', note: '主界面直达核心文档' },
  { label: '自动流程状态', value: 'CI + Deploy', note: '提交主干即触发检查和发布' }
];

const quickEntries = [
  { to: '/skills', label: '进入作战看板', desc: '查看所有 Skill、等级和说明。' },
  { to: '/skills/new', label: '新增业务规则', desc: '把你家的规则录入到 Skill 库。' },
  { to: '/docs', label: '查看决策文档', desc: '快速进入报告、矩阵与实施文档。' }
];

export function HomePage() {
  return (
    <section className="home-stack">
      <article className="card hero-card">
        <p className="eyebrow">Procurement AI Workspace</p>
        <h1>采购 Agent 中控台（全新改版）</h1>
        <p>这版做了风格大改：深色渐变、数据卡片、重点入口聚合，和第一版视觉明显不同。</p>

        <div className="release-badge" aria-label="release-info">
          <strong>当前版本标记：</strong> {DEPLOY_MARK}
          <br />
          <strong>最近修改时间（UTC）：</strong> {LAST_UPDATED_UTC}
        </div>
      </article>

      <article className="metrics-grid" aria-label="homepage-metrics">
        {metrics.map((metric) => (
          <div className="metric-card" key={metric.label}>
            <small>{metric.label}</small>
            <strong>{metric.value}</strong>
            <span>{metric.note}</span>
          </div>
        ))}
      </article>

      <article className="card focus-card">
        <h2>你现在可以马上做的事</h2>
        <ul className="bullet-list">
          <li>从文档中心打开调研报告，直接给管理层过一遍结论。</li>
          <li>把你家的采购流程经验沉淀成 Skill，形成内部知识资产。</li>
          <li>每次改版后看“版本标记”，手机上就能立刻确认是否发布成功。</li>
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
