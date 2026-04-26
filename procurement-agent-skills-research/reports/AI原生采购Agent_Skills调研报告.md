# AI 原生采购 Agent + Skills 调研报告

## 1. 执行摘要
1. 公开市场尚无可直接复制上线的“企业间接采购 Skill Pack”，多数为模板、POC 或特定场景加速器。
2. 最有价值的不是“直接拿来用”，而是吸收：Skill 组织方式、文档处理能力、评标与评分框架、人审闭环、ERP 采购对象模型。
3. Anthropic Skills 在工程方法上价值最高（Skill 结构、skill-creator、文档技能），但采购业务深度有限。
4. w95 与 buyer-eval 可快速补齐第一阶段模板与评审框架；AI-Powered-RFP-Analyzer 提供多 Agent 评标架构参考。
5. Microsoft RFP Response Accelerator 与 AutoRFP 更偏“供应商响应侧”，需谨慎映射到采购方评标场景。
6. ERPNext/OCA 不是 Agent Skill，但对采购流程与数据模型非常关键。
7. 建议“自研内部 Skill Pack”，不要直接搬运外部技能；第一阶段聚焦文档与评审型技能。

## 2. 企业间接采购链路拆解
间接采购覆盖 IT/SaaS、咨询、营销、HR、行政、物业、差旅、物流、能源、MRO 等。其链路从需求澄清到续约退出，核心是多文档、多角色、多规则协同。

按 13 段 taxonomy：
- 输入侧：需求、邮件、历史合同、预算、供应商材料
- 输出侧：SOW、RFX、评标矩阵、TCO、谈判策略、合同风险、验收与绩效报告
- 价值侧：缩短周期、提高一致性、沉淀专家判断
- 难点侧：数据分散、规则复杂、责任边界敏感

## 3. Agent + Skills 改造机会
### 适合改造
- 需求澄清/SOW、RFP/RFQ、方案解析、评标矩阵、TCO/谈判、合同初筛、供应商绩效。

### 不适合完全自动化
- 付款执行、会计入账、税务处理、PO正式创建、审批最终决策、法律最终结论、主数据最终变更。

## 4. 公开项目全景图
- agent_skill：Anthropic / ai-evos / buyer-eval
- prompt_template：w95 多个采购模板
- agent_project：AI-Powered-RFP-Analyzer / Microsoft Accelerator / AutoRFP
- business_system：ERPNext / OCA purchase-workflow
- algorithm_project：ChainCommand

结论：公开资产对“结构和方法”帮助大，对“企业可上线能力”帮助有限。

## 5. 重点项目 Deep Dive 汇总
详见 `deep_dives/` 8 篇。综合结论：
- 高价值（adapt/adopt）：Anthropic、buyer-eval、AI-Powered-RFP-Analyzer、w95核心模板
- 中价值（reference）：AutoRFP、Microsoft Accelerator、ERPNext/OCA
- 观察（watch）：ChainCommand

## 6. Skills 管理体系与分类方法
- `skills_registry.csv`：统一登记分类、评分、推荐动作。
- `evidence_notes.csv`：每条关键判断必须可回溯证据。
- `gap_map.csv`：将公开覆盖映射到内部建设优先级。

## 7. 评估矩阵与推荐动作
- adopt：Anthropic Skill 组织方法
- adapt：buyer-eval、AI-Powered-RFP-Analyzer、w95 核心模板
- reference：AutoRFP、Microsoft Accelerator、ERPNext/OCA
- watch：ChainCommand

## 8. Gap Map：覆盖与缺口
- 公开覆盖较好：rfx_builder、proposal_evaluation
- 明显缺口：intake_sow、guided_buying、acceptance_invoice（高度依赖企业规则/系统）
- 中等覆盖：contract_review、supplier_performance、tco_pricing

## 9. 自研采购 Skill Pack 建议（第一阶段）
1. procurement-intake-sow-builder
2. rfp-rfq-builder
3. vendor-proposal-evaluator
4. tco-negotiation-prep
5. contract-risk-review
6. supplier-scorecard-renewal
7. nonstandard-risk-pitfall-detector

每个技能需定义：输入、输出、证据字段、人工审核边界、评测样本。

## 10. 产品化路线图
### 第一阶段：文档与评审型 Skill Pack
- 目标：产出高质量文档、评分、风险初筛
- 依赖：模板、历史案例、评审规则

### 第二阶段：接入企业规则与数据
- 目标：接预算、合同库、供应商库、审批规则
- 风险：数据口径与系统集成复杂

### 第三阶段：品类专家与供应链优化
- 目标：能源/物流/MRO 专项能力 + 优化模型
- 风险：算法解释性与业务适配

## 11. 风险、合规与安全建议
- 禁止直接执行外部仓库业务脚本。
- License 必须法务复核（尤其 proprietary / GPL 影响）。
- 采购结论必须证据化，并保留人工审核。
- 法律条款结论只能做初筛，法务必须复核。
- 供应商准入、PO、付款和主数据变更必须由企业系统与授权人员控制。

## 12. 附录
- 完整清单：`data/skills_registry.csv`
- 评分规则：见字段说明
- taxonomy：13段采购链路
- recommended_action：adopt/adapt/reference/watch/discard
- 证据使用：`data/evidence_notes.csv`
