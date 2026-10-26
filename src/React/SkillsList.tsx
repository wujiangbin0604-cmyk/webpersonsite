import { useId, useState } from "react";
const skills = [
  {title:"软件与交互开发",items:["React / Vue 页面与交互","Electron 桌面应用","Python / Node.js 服务与数据存储"]},
  {title:"机器学习与实验",items:["数据探索、特征工程与模型对照","分类、回归、聚类与强化学习","实验记录、结果复核与可视化"]},
  {title:"数学建模与编程",items:["热湿耦合与数值求解","Java / C++ 课程与算法实践","从问题分析到可运行的项目"]},
];
export default function SkillsList() {
  const [open,setOpen] = useState<number | null>(null);
  const id = useId();
  return <div className="skills"><h2>我在做什么</h2><div className="skills-items">{skills.map((skill,index) => <div className="skill" key={skill.title}>
    <h3><button type="button" aria-expanded={open === index} aria-controls={`${id}-${index}`} onClick={() => setOpen(current => current === index ? null : index)}>
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={index === 0 ? "M3 4h18v16H3zM3 9h18M7 6h1M11 6h1" : index === 1 ? "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" : "m8 5-7 7 7 7m8-14 7 7-7 7"} /></svg>
      <span>{skill.title}</span><span className="skill-toggle" aria-hidden="true">{open === index ? "−" : "+"}</span>
    </button></h3>
    <ul id={`${id}-${index}`} hidden={open !== index}>{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
  </div>)}</div></div>;
}
