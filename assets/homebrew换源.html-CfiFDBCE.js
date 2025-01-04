import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as r,f as i}from"./app-CtvCwAmI.js";const n={},o=i(`<p>####替换brew源</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#brew 备用地址-1
cd &quot;$(brew --repo)&quot;
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
#homebrew-core
#替换homebrew-core.git
cd &quot;$(brew --repo)/Library/Taps/homebrew/homebrew-core&quot;
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
brew update

# 备用地址-2
cd &quot;$(brew --repo)&quot;
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/brew.git
cd &quot;$(brew --repo)/Library/Taps/homebrew/homebrew-core&quot;
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew-core.git
brew update

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####官方地址</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#重置brew.git
cd &quot;$(brew --repo)&quot;
git remote set-url origin https://github.com/Homebrew/brew.git

#重置homebrew-core.git
cd &quot;$(brew --repo)/Library/Taps/homebrew/homebrew-core&quot;
git remote set-url origin https://github.com/Homebrew/homebrew-core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[o];function s(c,d){return t(),r("div",null,a)}const u=e(n,[["render",s],["__file","homebrew换源.html.vue"]]),b=JSON.parse('{"path":"/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/homebrew%E6%8D%A2%E6%BA%90.html","title":"homebrew换源","lang":"zh-CN","frontmatter":{"title":"homebrew换源","date":"2024-03-24T11:47:50.000Z","category":["日常问题锦集"],"tag":["archive"],"description":"####替换brew源 ####官方地址","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/homebrew%E6%8D%A2%E6%BA%90.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"homebrew换源"}],["meta",{"property":"og:description","content":"####替换brew源 ####官方地址"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T12:51:21.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-24T12:51:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"homebrew换源\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-24T12:51:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711284681000,"updatedTime":1711284681000,"contributors":[{"name":"陈桐","email":"tong.chen","commits":1}]},"readingTime":{"minutes":0.42,"words":125},"filePathRelative":"archives/日常问题锦集/homebrew换源.md","localizedDate":"2024年3月24日","excerpt":"<p>####替换brew源</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#brew 备用地址-1\\ncd \\"$(brew --repo)\\"\\ngit remote set-url origin https://mirrors.ustc.edu.cn/brew.git\\n#homebrew-core\\n#替换homebrew-core.git\\ncd \\"$(brew --repo)/Library/Taps/homebrew/homebrew-core\\"\\ngit remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git\\nbrew update\\n\\n# 备用地址-2\\ncd \\"$(brew --repo)\\"\\ngit remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/brew.git\\ncd \\"$(brew --repo)/Library/Taps/homebrew/homebrew-core\\"\\ngit remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew-core.git\\nbrew update\\n\\n</code></pre></div>","autoDesc":true}');export{u as comp,b as data};
