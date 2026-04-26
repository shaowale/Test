# Skill Mobile Web App

这是一个可直接部署的网页版 Skill 管理应用（Vite + React + TypeScript），专门为手机端查看与验证准备。

## 你现在能看到什么

- 首页 `/`
- Skill 列表页 `/skills`
- Skill 创建页 `/skills/new`
- Skill 详情页 `/skills/:id`

数据存储：本地 `localStorage` + 默认 JSON，无需数据库。

## 本地运行（电脑）

```bash
npm install
npm run dev -- --host
```

启动后会看到类似 `http://192.168.x.x:5173` 的地址，手机和电脑在同一 Wi-Fi 下即可访问。

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## 一键部署到 Vercel（推荐）

### 方案 A：网页导入（最适合手机用户）
1. 代码推到 GitHub。
2. 手机打开 Vercel，选择 **Add New Project**。
3. 选择该仓库并导入。
4. 框架选择 **Vite**（通常会自动识别）。
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. 点击 Deploy，等待完成后即可拿到线上 URL。

### 方案 B：Vercel CLI（电脑）
```bash
npm i -g vercel
vercel
vercel --prod
```

> 已添加 `vercel.json`，确保刷新 `/skills/...` 这类前端路由时不会 404。

## 手机上验证清单

拿到线上 URL 后，在手机浏览器逐项验证：

1. 打开首页是否正常显示。
2. 进入 Skill 列表页是否有默认数据。
3. 在 Skill 创建页新增一条 Skill。
4. 跳转到 Skill 详情页是否能看到刚创建的数据。
5. 关闭浏览器再打开，数据是否仍在（localStorage 持久化）。

## 项目结构

```txt
src/
  components/Layout.tsx
  data/initialSkills.ts
  lib/skillsStorage.ts
  pages/
    HomePage.tsx
    SkillsPage.tsx
    SkillCreatePage.tsx
    SkillDetailPage.tsx
```

## Git 绑定与自动化建议

为便于在上下文环境里稳定执行，仓库已补充：

- `scripts/setup_context.sh`：检测 git/node/npm/python3/gh 是否可用，并给出下一步命令。
- `.github/workflows/ci.yml`：自动执行 `lint` / `typecheck` / `test` / `build`。
- `docs/GIT_AND_CLI_BOOTSTRAP.md`：Git 绑定与 GitHub CLI 使用说明。

推荐你本地执行：

```bash
./scripts/setup_context.sh
```

凭证安全建议：优先使用 `gh auth login --web` 浏览器授权，不要在聊天中明文发送 GitHub Token。
