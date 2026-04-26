# run-llama auto_rfp

## 1. 基本信息
- 名称：AutoRFP
- URL：https://github.com/run-llama/auto_rfp
- source_type：agent_project
- 所属采购链路：rfx_builder / proposal_evaluation
- 重点文件：README.md、LICENSE
- license：MIT

## 2. 项目定位
RFP 响应自动化产品化平台（多租户 + 检索 + 回答生成）。

## 3. 主要能力
- RFP 问题抽取
- 知识库检索
- 多步骤响应生成
- 来源归因

## 4. 可借鉴点
- “问答自动化平台”形态完整
- source attribution 机制适合证据链设计

## 5. 局限与风险
- 依赖较重（Supabase/Postgres/OpenAI/LlamaCloud）
- 更偏供应商响应侧，不是采购评标侧

## 6. 对内部 Skill Pack 的启发
可借鉴检索+回答+引用链路，用于投标材料解析与应答。

## 7. 推荐结论
- recommended_action：reference
- overall_value_score：4
- 一句话结论：适合形态参考，不适合直接搬运。

## 8. Evidence
- ev_autorfp_001 / ev_autorfp_002
