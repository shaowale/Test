# Git 绑定与 CLI 启动指南

这个仓库已经增加：
- `.github/workflows/ci.yml`：推送/PR 自动跑 lint、typecheck、test、build。
- `scripts/setup_context.sh`：一键检查本地 Git/CLI/Node 环境。

## 一次性初始化

```bash
./scripts/setup_context.sh
```

## 绑定 GitHub 仓库

```bash
git remote add origin <你的GitHub仓库URL>
git push -u origin work:main
```

## 绑定 GitHub CLI（可选但推荐）

```bash
gh auth login
```

登录后可直接：

```bash
gh repo view
gh pr create
gh workflow run CI
```

## 你需要配合我做的事（我建议）
1. 在 GitHub 仓库 `Settings -> Secrets and variables -> Actions` 中补充必要机密（如果后续需要部署）。
2. 确认默认分支是否为 `main`。
3. 若你希望自动部署到 Vercel，可再加一个 `deploy.yml` workflow（我可以继续帮你补）。
