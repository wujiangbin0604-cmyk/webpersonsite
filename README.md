# 吴江彬的项目空间

基于 [nuonuo-888/Portfolio](https://github.com/nuonuo-888/Portfolio) 模板制作的中文个人项目网站。保留深色背景、紫色强调色、技术滚动条、技能折叠区和字符动画，内容替换为吴江彬的实际项目与学习记录。

目前整理 **23 个项目与实践合集**，包括公开 GitHub 项目和经授权读取的 E 盘本地项目。重复副本归并为同一项目；基础练习按主题归档。每个项目都有独立详情页。

## 本地运行

建议使用 Node.js 22 或更新的兼容版本。

```powershell
npm ci
npm run dev
```

打开终端打印的本地地址，默认是 `http://localhost:4321`。

```powershell
npm run build
node scripts/verify-output.mjs
npm run preview
```

`build` 会先运行 Astro 类型检查，再将全部静态页面和优化后的图片输出到 `dist/`。

## GitHub Pages

- 源码仓库：[webpersonsite](https://github.com/wujiangbin0604-cmyk/webpersonsite)
- 网站地址：[吴江彬的项目空间](https://wujiangbin0604-cmyk.github.io/webpersonsite/)
- 自动部署配置：`.github/workflows/deploy.yml`

推送到 `main` 后，GitHub Actions 会安装锁定依赖、检查类型、生成静态页面、校验站内资源并发布 GitHub Pages。仓库的 Settings → Pages 使用 GitHub Actions 作为来源。

CI 设置 `DEPLOY_TARGET=github-pages`，使页面、图片、图标与详情链接使用 `/webpersonsite/` 前缀。本地开发默认仍使用根路径。手动验证部署版本可执行：

```powershell
$env:DEPLOY_TARGET='github-pages'
npm run build
node scripts/verify-output.mjs
npm run preview
```

此时本地预览地址为 `http://localhost:4321/webpersonsite/`。恢复本地根路径构建前移除该环境变量。

## 修改内容

- `src/data/portfolio.ts`：姓名、GitHub 地址、全部项目说明、分类、技术栈和外部链接。
- `src/assets/projects/`：真实页面截图和实验图；构建时由 Astro 优化为 WebP。
- `src/components/`：首页、导航、技术滚动条、项目筛选、关于我和页脚。
- `src/React/`：技能折叠与字符动画。
- `src/pages/projects/[slug].astro`：根据项目数据生成详情页。
- 本地另保留项目资料来源记录，不上传机器上的原始目录路径。

新增项目时在 `projects` 数组中增加一个对象，使用唯一的 `slug`。没有公开地址的本地项目只展示详情，不生成无效的在线预览或仓库链接。

## 交互

- 按软件开发、机器学习、数学建模、编程实践筛选。
- 按名称、介绍、技术和项目内容搜索，可与分类叠加。
- 搜索无结果时可重置筛选。
- 支持桌面与手机布局、键盘操作及减少动态效果的系统偏好。

模板原作者的表单、社交账号、Spotify 嵌入和云端点赞已移除。联系方式使用实际 GitHub 主页。未复制原项目的密钥、环境配置、原始数据或模型文件到网站。

## 来源与许可

原模板版权归 Oscar Hernandez 所有，完整 MIT 许可保留在 `LICENSE`。字符动画组件原模板注明来源为 [ReactBits](https://www.reactbits.dev/)。项目卡片中的示意图仅用于介绍，真实截图与实验图均明确标注；网站展示各项目的介绍，不重新分发这些项目的源码或模型。
