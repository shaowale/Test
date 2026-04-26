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

## GitHub 凭证建议（重要）

> **不要把 GitHub Token 直接发在聊天里。**
> 推荐使用 `gh auth login --web` 在浏览器授权，或者在本机安全保存 Token。

推荐方式：

```bash
gh auth login --web --git-protocol https
```

验证登录状态：

```bash
gh auth status
```

如果必须使用 Token，请在本机终端输入（避免明文留痕）：

```bash
export GH_TOKEN=<your_token>
gh auth status
```

## 安装 GitHub CLI（gh）

- macOS（Homebrew）
  ```bash
  brew install gh
  ```
- Ubuntu / Debian
  ```bash
  sudo apt install gh
  ```
- Windows（winget）
  ```powershell
  winget install GitHub.cli
  ```

## 常用命令

```bash
gh repo view
gh pr create
gh workflow run CI
```

## 你需要配合我做的事（我建议）
1. 在 GitHub 仓库 `Settings -> Secrets and variables -> Actions` 中补充必要机密（如果后续需要部署）。
2. 确认默认分支是否为 `main`。
3. 若你希望自动部署到 Vercel，可再加一个 `deploy.yml` workflow（我可以继续帮你补）。


## 自动发布到 Vercel（GitHub Actions）

仓库已提供：`.github/workflows/vercel-deploy.yml`。

请在 GitHub 仓库 Secrets 中配置：
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

配置后，推送到 `main` 会自动触发生产部署。

