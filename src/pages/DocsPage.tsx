const REPO_BASE = 'https://github.com/shaowale/Test/blob/main';

type DocLink = {
  title: string;
  summary: string;
  path: string;
};

const docs: DocLink[] = [
  {
    title: '应用说明 README',
    summary: '包含本地启动、移动端验证、自动部署说明。',
    path: 'README.md'
  },
  {
    title: 'Git 与 CLI 启动文档',
    summary: '包含 GitHub 凭证建议、gh 使用方式、自动发布配置。',
    path: 'docs/GIT_AND_CLI_BOOTSTRAP.md'
  },
  {
    title: '采购调研报告（正式版）',
    summary: 'AI 原生采购 Agent + Skills 研究报告主文档。',
    path: 'procurement-agent-skills-research/reports/AI原生采购Agent_Skills调研报告.md'
  },
  {
    title: '开源项目评估矩阵',
    summary: '重点项目评分、推荐动作与取舍依据。',
    path: 'procurement-agent-skills-research/reports/开源项目评估矩阵.md'
  },
  {
    title: '采购 Skills 分类体系',
    summary: '采购链路 taxonomy、source_type 分类及内部技能规划。',
    path: 'procurement-agent-skills-research/reports/采购Skills分类体系.md'
  }
];

export function DocsPage() {
  return (
    <section>
      <h1>文档中心</h1>
      <p>下面这些文档可以直接从主界面进入查看（跳转 GitHub 文件页）。</p>
      <ul className="doc-list">
        {docs.map((doc) => (
          <li className="card" key={doc.path}>
            <h2>{doc.title}</h2>
            <p>{doc.summary}</p>
            <a href={`${REPO_BASE}/${doc.path}`} target="_blank" rel="noreferrer">
              打开文档
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
