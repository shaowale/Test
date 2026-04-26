# Anthropic Skills

## 1. 基本信息
- 名称：Anthropic Skills
- URL：https://github.com/anthropics/skills
- source_type：agent_skill
- 所属采购链路：rfx_builder / proposal_evaluation / contract_review（文档工程层）
- 重点文件：README.md、skills/skill-creator/SKILL.md、skills/pdf/SKILL.md
- license：混合（部分 Apache-2.0 + 部分 Proprietary）
- stars / forks / last_updated：124k / 14.5k / unknown

## 2. 项目定位
这是 Agent Skill 工程底座仓库，不是采购业务仓库。

## 3. 主要能力
- Skill 目录规范和 `SKILL.md` 元数据组织
- 文档技能（PDF/XLSX 等）
- skill-creator 的迭代评测方法

## 4. 可借鉴点
- 统一 Skill 包结构
- 先评测后迭代的技能开发循环
- 文档处理能力可直接支撑采购文档场景

## 5. 局限与风险
- 采购业务知识较少
- 文档类 skill 含 proprietary 条款，需要复核

## 6. 对内部 Skill Pack 的启发
- 作为内部 Skill SDK 与模板底座
- 为 `rfp-rfq-builder` / `vendor-proposal-evaluator` 提供文档处理能力

## 7. 推荐结论
- recommended_action：adopt
- overall_value_score：5
- 一句话结论：工程底座价值极高，但采购业务层仍需自研。

## 8. Evidence
- ev_anthropic_001 / ev_anthropic_002 / ev_anthropic_003 / ev_anthropic_004
