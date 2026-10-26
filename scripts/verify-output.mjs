import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, join, relative } from "node:path";
import assert from "node:assert/strict";

const root = resolve("dist");
const basePath = process.env.DEPLOY_TARGET === "github-pages" ? "/webpersonsite/" : "/";
async function walk(folder) {
  const entries = await readdir(folder,{withFileTypes:true});
  const paths = await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(folder,entry.name)) : [join(folder,entry.name)]));
  return paths.flat();
}
const pages = (await walk(root)).filter(path => path.endsWith(".html"));
assert.equal(pages.length,24,"应生成首页和23个项目详情页");
let links = 0;
for (const path of pages) {
  const html = await readFile(path,"utf8");
  assert.match(html,/<html[^>]+lang="zh-CN"/,`${relative(root,path)} 语言标记`);
  assert.match(html,/<h1\b/,`${relative(root,path)} 应有主标题`);
  assert.equal((html.match(/<h1\b/g) ?? []).length,1,"每页一个主标题");
  let anchorOpen = false;
  for (const token of html.matchAll(/<\/?a(?:\s[^>]*|)>/g)) {
    const closing = token[0].startsWith("</");
    if (!closing) assert(!anchorOpen,`${relative(root,path)} 存在嵌套链接`);
    anchorOpen = !closing;
  }
  assert(!anchorOpen,`${relative(root,path)} 存在未闭合链接`);
  assert(!/formspree|spotify\.com|linkedin\.com|github\.com\/gothsec|oscarhernandez\.vercel|MoviesForDevs|stockin-demo|rifasvelez/i.test(html),"不能残留模板个人内容或服务端点");
  assert(!/[A-Z]:\\|SMTP_PASSWORD|FIREBASE_API_KEY/.test(html),"不能包含本地路径或配置项");
  for (const match of html.matchAll(/\b(?:href|src)="(\/[^"]*)"/g)) {
    const url = new URL(match[1],"http://localhost");
    assert(url.pathname.startsWith(basePath),`站内链接缺少部署前缀 ${match[1]}`);
    let file = join(root,decodeURIComponent(url.pathname.slice(basePath.length)));
    const info = await stat(file).catch(() => null);
    assert(info,`${relative(root,path)} 引用了缺失资源 ${url.pathname}`);
    if (info.isDirectory()) file = join(file,"index.html");
    assert((await stat(file)).isFile(),`缺失页面 ${file}`);
    if (url.hash && file.endsWith(".html")) {
      const target = await readFile(file,"utf8");
      assert(target.includes(`id="${url.hash.slice(1)}"`),`缺失锚点 ${match[1]}`);
    }
    links++;
  }
}
const home = await readFile(join(root,"index.html"),"utf8");
assert.equal((home.match(/data-project /g) ?? []).length,23,"首页应呈现全部项目");
assert(!/<form\b|<iframe\b/.test(home),"不应保留原作者的表单或嵌入");
console.log(JSON.stringify({basePath,pages:pages.length,projectDetails:pages.length-1,localLinksAndAssetsChecked:links,result:"passed"},null,2));
