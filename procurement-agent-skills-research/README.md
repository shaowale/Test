# procurement-agent-skills-research

面向企业间接采购场景的 AI 原生 Agent + Skills 第一轮调研项目。

## 目标
- 建立可追溯的公开来源调研底座（source + evidence + scoring + gap map）。
- 输出可用于内部决策的《AI 原生采购 Agent + Skills 调研报告》。
- 明确哪些可 adopt/adapt，哪些仅能 reference/watch。

## 目录
- `data/`：四张核心 CSV（seed、registry、evidence、gap）
- `deep_dives/`：8 个重点项目深度分析
- `reports/`：正式报告、分类体系、评估矩阵
- `site/index.html`：静态管理页（CSV 浏览+筛选）
- `scripts/`：轻量辅助脚本（可选）

## 研究边界
- 不执行外部仓库代码，只读取公开文本（README/SKILL.md/LICENSE/docs）。
- 关键判断必须可回溯 `evidence_notes.csv`。
- 明确区分：`agent_skill` / `prompt_template` / `agent_project` / `business_system` / `algorithm_project` / `research_reference`。

## 更新方式
1. 更新 `data/evidence_notes.csv`（先证据，后判断）。
2. 更新 `data/skills_registry.csv`（评分 + 推荐动作）。
3. 更新 `data/gap_map.csv`（覆盖与缺口）。
4. 同步更新 `reports/AI原生采购Agent_Skills调研报告.md`。
