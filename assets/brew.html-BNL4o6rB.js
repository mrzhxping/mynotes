import{_ as e,c as n,o as i,b as s}from"./app-k-9Ll45r.js";const l={},a=s(`<h4 id="brew" tabindex="-1"><a class="header-anchor" href="#brew"><span>brew</span></a></h4><p>—— Mac &quot;上的应用商店&quot;，包管理器； 安装、管理包很方便</p><p>官网：<a href="https://brew.sh" target="_blank" rel="noopener noreferrer">https://brew.sh</a></p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>1、官方安装     <div size="2" color="#CCCCCC">(命令可能执行会很慢，建议开起命令行代理)</div></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、国内大佬安装脚本</p><p>     有很多，没有亲测 具体请百度</p><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 搜索包
brew search mysql

// 安装包
brew install mysql

// 查看包信息，比如目前的版本，依赖，安装后注意事项等
brew info mysql

// 卸载包
brew uninstall wget

// 显示已安装的包
brew list

// 查看brew的帮助
brew –help

// 更新， 这会更新 Homebrew 自己
brew update

// 检查过时（是否有新版本），这会列出所有安装的包里，哪些可以升级
brew outdated
brew outdated mysql

// 升级所有可以升级的软件们
brew upgrade
brew upgrade mysql

// 清理不需要的版本极其安装包缓存
brew cleanup
brew cleanup mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=[a];function r(t,c){return i(),n("div",null,d)}const b=e(l,[["render",r],["__file","brew.html.vue"]]),m=JSON.parse('{"path":"/mac/brew.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"git":{"updatedTime":1716530142000,"contributors":[{"name":"Mr.zhxping","email":"mrzhxping@gmail.com","commits":1}]},"filePathRelative":"mac/brew.md"}');export{b as comp,m as data};
