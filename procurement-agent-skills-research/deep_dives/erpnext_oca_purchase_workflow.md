# ERPNext + OCA purchase-workflow

## 1. 基本信息
- 名称：ERPNext / OCA purchase-workflow
- URL：https://github.com/frappe/erpnext / https://github.com/OCA/purchase-workflow
- source_type：business_system
- 所属采购链路：guided_buying / acceptance_invoice / sourcing_strategy
- 重点文件：ERPNext README+license；OCA README
- license：GPL-3.0（ERPNext）/ unknown（OCA仓库级待复核）

## 2. 项目定位
采购业务系统与流程扩展仓库，不是 Agent Skill。

## 3. 主要能力
- 采购流程对象与状态管理
- purchase_request / blanket_order / tier validation 等模块化流程
- 与供应商、订单、发票、验收相关对象建模

## 4. 可借鉴点
- 采购对象模型（RFQ/PO/Invoice/Supplier）
- 规则与审批流程颗粒度

## 5. 局限与风险
- 非 AI 原生 Skill
- GPL/生态耦合问题需要法务和架构评估

## 6. 对内部 Skill Pack 的启发
为 `guided-buying-policy-checker`、`service-acceptance-invoice-exception-skill` 提供流程与字段参考。

## 7. 推荐结论
- recommended_action：reference
- overall_value_score：3
- 一句话结论：流程模型价值高，但不能当作AI技能直接使用。

## 8. Evidence
- ev_erp_001 / ev_erp_002 / ev_oca_001 / ev_oca_002
