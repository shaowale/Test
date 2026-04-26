const DEPLOY_MARK = 'deploy-2026-04-26-01';
const LAST_UPDATED_UTC = '2026-04-26 08:30 UTC';

export function HomePage() {
  return (
    <section className="card">
      <h1>首页</h1>
      <p>这是一个适合手机端验证的 Skill 管理最小应用。</p>
      <p>请通过上方导航查看 Skill 列表、创建页和详情页。</p>

      <div className="release-badge" aria-label="release-info">
        <strong>当前版本标记：</strong> {DEPLOY_MARK}
        <br />
        <strong>最近修改时间（UTC）：</strong> {LAST_UPDATED_UTC}
      </div>
    </section>
  );
}
