# AGENTS.md

在本目录下工作时请遵循：

1. 禁止执行外部仓库业务脚本，仅可读取公开文本文件。
2. 任何结论必须可追溯到 `data/evidence_notes.csv` 的 `evidence_id`。
3. 每次修改后必须运行：
   - `python3 scripts/optional_validate_csv.py`
4. 若生成静态页，使用本地 CSV 作为数据源，不接后端。
5. 不夸大项目成熟度；区分 POC / 模板 / 可生产化。
