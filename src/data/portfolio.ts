export const profile = {
  name: "吴江彬",
  englishName: "Jiangbin Wu",
  github: "https://github.com/wujiangbin0604-cmyk",
  description: "在代码与实验之间，把想法一步步做出来。这里记录我的软件开发、机器学习和数学建模项目。",
};

export const categories = ["全部", "软件开发", "机器学习", "数学建模", "编程实践"] as const;
export type Category = Exclude<(typeof categories)[number], "全部">;

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  summary: string;
  stack: string[];
  status: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  motif: "web" | "research" | "orbit" | "temple" | "fish" | "code" | "model";
  github?: string;
  demo?: string;
  demoLabel?: string;
  note?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "visionpulse", title: "VisionPulse", subtitle: "顶会热词统计平台", category: "软件开发",
    summary: "把 CVPR、ICCV、ECCV 论文整理成可以检索、分析和追踪的研究方向，减少论文调研中的重复工作。",
    stack: ["Python", "SQLite", "TF-IDF", "K-Means", "Docker"], status: "课程项目", motif: "research", featured: true,
    image: "visionpulse.png", imageAlt: "VisionPulse 顶会热词统计平台真实页面截图",
    github: "https://github.com/wujiangbin0604-cmyk/softwarearticlesys",
    highlights: ["支持单篇检索、批量标题和 JSON 导入，以及论文增删改查。", "使用 TF-IDF 与 K-Means 提取热门方向，展示关键词关联与年度走势。", "采用 SQLite 本地缓存与公开元数据服务，提供摘要查看和分析报告下载。", "通过 Docker 固化运行环境，并整理原型、测试和部署文档。"],
  },
  {
    slug: "gene-expression", title: "基因表达五癌种分类", subtitle: "特征选择与集成学习研究", category: "机器学习",
    summary: "围绕高维基因表达数据，比较特征筛选、线性分类器和集成方法，记录可复核的实验过程。",
    stack: ["Python", "scikit-learn", "SVM", "ANOVA"], status: "研究项目", motif: "research", featured: true,
    github: "https://github.com/wujiangbin0604-cmyk/bioproject",
    highlights: ["围绕 20,531 个基因和五类癌症样本开展分类与特征分析。", "使用折内特征筛选、标准化及分类 Pipeline，比较 ANOVA 与高方差 Top50。", "分析重复交叉验证、特征集合稳定性、硬投票和错误互补性。", "提供冻结模型的单样本推理包、输入校验和实验审计。"],
    note: "结果限于数据集内五类已患癌样本的表达分类。早期探索曾涉及后续保留样本，因此保留集评价属于同来源回顾性分析，不作为外部验证或临床诊断结论。",
  },
  {
    slug: "lunar-lander", title: "LunarLander", subtitle: "月球着陆器强化学习", category: "机器学习",
    summary: "从随机策略出发，对比 DQN 与 PPO，结合着陆轨迹和训练记录理解智能体如何学习控制。",
    stack: ["PyTorch", "Gymnasium", "DQN", "PPO"], status: "实验项目", motif: "orbit", featured: true,
    image: "lunar-lander.png", imageAlt: "月球着陆器实验中的真实轨迹分析图",
    highlights: ["在 LunarLander-v3 环境建立随机策略、DQN 与 PPO 基线。", "记录逐步状态、动作、奖励和策略相关字段，支持回合级复盘。", "比较成功着陆、坠毁和超时轨迹，分析低空阶段和早期行为分歧。", "保留模型、评估记录、训练曲线与官方环境渲染动画。"],
  },
  {
    slug: "mazu-lots", title: "妈祖天后灵签问事", subtitle: "移动端民俗文化体验", category: "软件开发",
    summary: "以泉州天后宫文化为背景，把问事、掷杯、抽签、验签和解签串成完整的交互体验。",
    stack: ["React", "TypeScript", "Vite", "Framer Motion"], status: "Web 应用", motif: "temple", featured: true,
    github: "https://github.com/wujiangbin0604-cmyk/tianhoutext", demo: "https://wujiangbin0604-cmyk.github.io/tianhoutext/", demoLabel: "在线体验",
    highlights: ["收录 60 支天后灵签，包含签诗、传统签意与典故。", "设计移动端优先的问事流程与掷杯、摇签动画。", "不配置 AI 服务也能使用内置传统释义完成体验。", "可选接入 DeepSeek，服务端保管 API Key。"],
  },
  {
    slug: "wooden-fish", title: "无聊木鱼", subtitle: "桌面敲击与休息倒计时", category: "软件开发",
    summary: "一个轻量的 Windows 桌面浮窗，让敲木鱼、休息计时和自动敲击在本地完成。",
    stack: ["Electron", "React", "TypeScript", "Web Audio"], status: "桌面应用", motif: "fish",
    github: "https://github.com/wujiangbin0604-cmyk/BoringWoodenFishEntertainment-Device",
    demo: "https://github.com/wujiangbin0604-cmyk/BoringWoodenFishEntertainment-Device/releases", demoLabel: "查看发布版本",
    highlights: ["透明无边框、桌面置顶，支持拖动和窗口缩放。", "支持主动敲击、功德动画和 1–60 分钟休息倒计时。", "可选择关闭自动敲击，或每 3、5、10 秒自动敲击。", "通过 Web Audio API 本地合成音效，无需账号和网络。"],
  },
  {
    slug: "california-housing", title: "加州房价预测", subtitle: "从数据探索到回归对照", category: "机器学习",
    summary: "围绕 California Housing 数据，整理异常值、特征分布和回归模型，理解误差与泛化的关系。",
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib"], status: "实验项目", motif: "model",
    image: "housing.png", imageAlt: "加州房价预测项目的真实模型性能对比图",
    highlights: ["完成特征分布、相关性、地理分布和异常值诊断。", "比较原始特征、对数变换、截断处理和标准化方案。", "对照最小二乘、Ridge、Lasso、Elastic Net 与随机森林。", "整理残差、训练与测试误差及特征重要性图表。"],
  },
  {
    slug: "customer-segmentation", title: "顾客分群与消费画像", subtitle: "K-Means 聚类及稳定性分析", category: "机器学习",
    summary: "从年龄、收入和消费评分出发，观察顾客群体的差异，并检验聚类结果是否稳定。",
    stack: ["Python", "NumPy", "K-Means", "JavaScript"], status: "实验项目", motif: "model",
    image: "customers.png", imageAlt: "顾客分群实验生成的真实消费画像图",
    highlights: ["对顾客数值特征标准化，比较二维与三维聚类。", "实现 K-Means 初始化、迭代与轮廓系数计算。", "使用 ARI 与 Jaccard 分析不同配置下的分群稳定性。", "生成散点、关系密度、区域划分和消费群体画像图。"],
  },
  {
    slug: "product-popularity", title: "商品热度预测", subtitle: "神经网络、决策树与随机森林", category: "机器学习",
    summary: "以合成商品数据进行热门二分类，通过版本对照、正则化和特征消融记录模型变化。",
    stack: ["TensorFlow", "scikit-learn", "Python"], status: "实验合集", motif: "model",
    image: "products.png", imageAlt: "商品热度预测项目的真实 PR 与 ROC 对照图",
    highlights: ["保留 12 个神经网络实验版本，比较价格、材料和早期销量等输入。", "对照 L2 强度、训练轮数、学习曲线与多随机种子结果。", "增加单特征决策树、全特征树和 200 棵树随机森林。", "保存预测、模型、指标及 PR/ROC 图表。"],
    note: "项目使用合成数据；前七天销量字段也经过合成，结果用于学习和探索性比较。",
  },
  {
    slug: "titanic", title: "泰坦尼克号生还分析", subtitle: "手写逻辑回归与随机森林", category: "机器学习",
    summary: "从乘客特征探索入手，手动实现逻辑回归，再用随机森林建立对照，完成二分类实践。",
    stack: ["Python", "NumPy", "pandas", "Matplotlib"], status: "实验项目", motif: "research",
    image: "titanic.png", imageAlt: "泰坦尼克号项目生成的真实分类模型对比图",
    highlights: ["分析性别、年龄、舱位、亲属数量和票价与生还的关联。", "实现 sigmoid、交叉熵、梯度下降和 ROC/AUC 计算。", "在训练数据内处理年龄缺失，固定划分比较模型。", "整理随机森林、分类阈值、损失与预测表现的图表。"],
  },
  {
    slug: "hongkong-housing", title: "港岛房价与涨跌预测", subtitle: "回归、分类与时间滚动验证", category: "机器学习",
    summary: "围绕住宅价格时间序列，逐步尝试单变量、多特征和滚动预测，比较价格与涨跌方向两类目标。",
    stack: ["Python", "NumPy", "线性回归", "逻辑回归"], status: "实验合集", motif: "model",
    image: "hongkong.png", imageAlt: "港岛房价项目生成的真实月度滚动预测图",
    highlights: ["手动实现批量梯度下降及单变量、多特征线性回归。", "比较 L2 正则化以及移除房价关联特征后的表现。", "建立七特征月度滚动预测，比较首年与首五年起步方案。", "扩展涨跌逻辑回归与历史验证动态阈值实验。"],
  },
  {
    slug: "rehmannia-drying", title: "药材烘干热湿耦合建模", subtitle: "2026 数学建模竞赛实践", category: "数学建模",
    summary: "用三条数值路线模拟药材温度、水分与收缩过程，在统一边界和导出框架下比较模型。",
    stack: ["Python", "有限体积法", "SciPy", "数值验证"], status: "团队竞赛项目", motif: "model",
    highlights: ["覆盖温度、水分扩散、长时间烘干与收缩边界四类问题。", "比较半拉格朗日重映射、材料坐标和归一化移动坐标。", "统一实测边界、物性公式、终止判据与 Excel 结果导出。", "设置 quick、paper、reference 预设，支持端点和网格复核。"],
  },
  {
    slug: "market-monitor", title: "盘中研究报告工具", subtitle: "行情整理、事件监测与报告生成", category: "软件开发",
    summary: "把持仓披露、盘中行情、历史净值和新闻整理为可解释的研究报告，支持定时运行与邮件队列。",
    stack: ["Python", "SQLite", "HTML", "PowerShell"], status: "本地工具", motif: "research",
    highlights: ["聚合基金披露、相关资产行情与公开事件，生成分层趋势评分。", "输出 HTML 研究报告并保存历史记录。", "实现 Windows 后台定时运行与邮件失败重试队列。", "提供历史回测和月度复盘脚本。"],
    note: "用于个人研究和风险监测；盘中估算与基金最终净值有差异，工具不执行自动交易。",
  },
  {
    slug: "vue-articles", title: "Vue 文章与评论界面", subtitle: "西二在线前端课程实践", category: "软件开发",
    summary: "围绕文章列表、分类、详情和评论组织组件，练习前端路由与接口模块的拆分。",
    stack: ["Vue 3", "Vite", "JavaScript", "Axios"], status: "课程练习", motif: "web",
    highlights: ["拆分文章列表、导航栏、侧栏和评论区组件。", "配置带文章 ID 的详情路由。", "分别组织文章与评论 API 模块。", "保留页面与接口对接练习，尚未提供公开部署地址。"],
  },
  {
    slug: "todo-api", title: "前后端待办清单", subtitle: "从页面输入到 HTTP 接口", category: "软件开发",
    summary: "用一个小型待办应用练习 JSON 请求、Express 路由与页面数据刷新。",
    stack: ["Node.js", "Express", "JavaScript"], status: "课程练习", motif: "web",
    highlights: ["实现 GET /api/todos 获取列表。", "实现 POST /api/todos 接收 JSON 新任务。", "通过 Express 托管页面，使用 fetch 刷新列表。", "当前版本使用内存存储，作为前后端对接练习。"],
  },
  {
    slug: "java-calculator", title: "Java 科学计算器", subtitle: "表达式解析与桌面界面", category: "编程实践",
    summary: "把计算逻辑和图形界面拆开，练习表达式求值、运算优先级与进制转换。",
    stack: ["Java", "Swing", "表达式解析"], status: "桌面练习", motif: "code",
    highlights: ["通过 CalculatorEngine 与 CalculatorGUI 分离逻辑和界面。", "使用分词、调度场算法和后缀表达式求值。", "支持数学及物理常数的预处理。", "补充进制转换与错误表达式处理。"],
  },
  {
    slug: "java-chat", title: "Java TCP 聊天程序", subtitle: "Socket 通信与多客户端", category: "编程实践",
    summary: "通过客户端、服务端和聊天窗口，理解 TCP 连接、消息传递与线程协作。",
    stack: ["Java", "Socket", "多线程", "Swing"], status: "网络编程练习", motif: "code",
    highlights: ["包含 ChatServer、ChatClient 与 ChatWindow。", "服务端监听连接，为客户端分配处理线程。", "使用对象输入输出流传递消息。", "维护在线用户，组织桌面聊天交互。"],
  },
  {
    slug: "java-ball", title: "弹球躲避小游戏", subtitle: "Java 图形界面与游戏循环", category: "编程实践",
    summary: "围绕小球移动、玩家避障和生存时间，练习桌面游戏的状态更新与界面绘制。",
    stack: ["Java", "Swing", "碰撞检测"], status: "游戏练习", motif: "orbit",
    highlights: ["拆分 Ball、GameEngine、GamePanel 和 MainFrame。", "通过定时执行组织游戏状态更新。", "处理鼠标位置、边界与碰撞。", "管理开始、结束及生存时间状态。"],
  },
  {
    slug: "cpp-airplane", title: "C++ 飞机射击小游戏", subtitle: "EasyX 图形与模块化实践", category: "编程实践",
    summary: "从图形窗口和输入响应入手，把游戏管理、画面渲染和逻辑更新拆成独立模块。",
    stack: ["C++", "EasyX", "游戏循环"], status: "游戏练习", motif: "orbit",
    highlights: ["建立 EasyX 图形窗口和主游戏循环。", "拆分画面渲染、逻辑更新与输入输出管理。", "用游戏管理类组织运行流程。", "归并 airplay、ConsoleApplication2 与打飞机目录中的相关练习版本。"],
  },
  {
    slug: "dungeon-dp", title: "地下城最小生命值可视化", subtitle: "动态规划与路径展示", category: "编程实践",
    summary: "把地下城路径问题做成图形界面，在网格中展示最小初始生命值与对应路径。",
    stack: ["C++", "EasyX", "动态规划"], status: "算法练习", motif: "code",
    highlights: ["使用动态规划计算到达终点所需的最小生命值。", "根据路径记录重建最优行进路线。", "绘制起点、终点、网格与路径。", "组织按钮交互和可配置网格尺寸。"],
  },
  {
    slug: "data-structures", title: "数据结构与算法实验", subtitle: "链表、栈、树与优先队列", category: "编程实践",
    summary: "把本地数据结构课程作业整理成一个实践合集，记录从结构实现到题目求解的过程。",
    stack: ["C++", "链表", "栈", "二叉树"], status: "课程合集", motif: "code",
    highlights: ["链表题目：合并有序链表及多组 LeetCode 练习。", "优先队列与二叉排序树实现。", "栈相关实验与上机作业。", "收录数据结构实验作业 1、算法与数据结构实验作业 2、上机作业 3 和试验作业 3。"],
  },
  {
    slug: "web-layouts", title: "网页布局与结构练习", subtitle: "HTML、CSS 与 XML 基础", category: "编程实践",
    summary: "从静态页面还原开始，练习导航、搜索、课程卡片、新闻页面和结构化标记。",
    stack: ["HTML", "CSS", "XML"], status: "课程合集", motif: "web",
    highlights: ["学成在线页面：导航、搜索、用户区和课程布局。", "央视新闻页面的 HTML 结构练习。", "前端目录中的 CSS 与页面布局实验。", "XML 文档与文章详情静态页面练习。"],
  },
  {
    slug: "java-cpp-basics", title: "Java 与 C++ 基础练习", subtitle: "语言、对象与基础运算", category: "编程实践",
    summary: "归档早期语言学习代码，涵盖对象继承、类型判断、指针和基础输入输出。",
    stack: ["Java", "C++", "面向对象"], status: "学习记录", motif: "code",
    highlights: ["Java：继承、JavaBean、类型判断与基础语法。", "整理 study、study1、javadeedu、faceobject 中的练习。", "C++：指针、常量、输入输出及除法错误处理。", "归并 Project1、Project2、Project5 与 ConsoleApplication1 等基础练习。"],
  },
  {
    slug: "ml-foundations", title: "机器学习与张量基础", subtitle: "从公式实现到张量运算", category: "编程实践",
    summary: "保留监督学习和深度学习的入门代码，记录从手动推导到使用框架表达运算的学习过程。",
    stack: ["Python", "NumPy", "PyTorch", "TensorFlow"], status: "学习记录", motif: "model",
    highlights: ["单变量线性回归与逻辑回归的基础实现。", "张量创建、索引、形状变换和矩阵乘法。", "张量与 NumPy 的转换及常用数值运算。", "神经网络层与分类模型草稿；尚未完成的代码保留为学习练习。"],
  },
];
