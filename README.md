# Skill Mobile Web App

一个基于 **Vite + React + TypeScript** 的最小可运行 Web 应用，用于手机端验证 Skill 管理流程。

## 功能页面

- 首页 `/`
- Skill 列表页 `/skills`
- Skill 创建页 `/skills/new`
- Skill 详情页 `/skills/:id`

数据层使用 `localStorage` + 本地初始 JSON，不依赖数据库。

## 本地启动

```bash
npm install
npm run dev
```

启动后打开终端输出的本地地址（默认 `http://localhost:5173`）。

## Scripts

```bash
npm run dev        # 开发环境
npm run lint       # ESLint
npm run typecheck  # TypeScript 类型检查
npm run test       # Vitest 单元测试
npm run build      # 生产构建
```

## 一键部署到 Vercel（手机也可操作）

### 方式 A：Import Git 仓库（推荐）
1. 将仓库推送到 GitHub。
2. 手机打开 [vercel.com/new](https://vercel.com/new)。
3. 选择本仓库并导入。
4. Framework Preset 选择 **Vite**（通常会自动识别）。
5. Build Command：`npm run build`。
6. Output Directory：`dist`。
7. 点击 Deploy，等待完成后会得到线上 URL（可直接手机访问）。

### 方式 B：Vercel CLI（电脑执行）
```bash
npm i -g vercel
vercel
```

首次按提示绑定账号和项目，部署成功后会给出 URL。

## 手机端验证方法

### 方法 A：直接验证线上地址（推荐）
部署成功后，在手机浏览器打开 Vercel URL，完成以下验证：
- 首页可访问
- 列表页能展示默认 Skill
- 创建页可新增 Skill
- 详情页可查看 Skill 详情

### 方法 B：同局域网真机访问本地开发环境
1. 使用：
   ```bash
   npm run dev -- --host
   ```
2. 手机和电脑连接同一 Wi-Fi。
3. 在手机浏览器访问终端里显示的局域网地址。

## 项目结构（简化）

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
