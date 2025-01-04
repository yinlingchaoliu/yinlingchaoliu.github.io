import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,f as n}from"./app-CtvCwAmI.js";const s={},i=n(`<p>Git命令中文乱码通常是因为Git配置的默认编码与系统或终端的编码不一致导致的。</p><p>解决方法：</p><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac"><span>mac</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.quotepath <span class="token boolean">false</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> gui.encoding utf-8
<span class="token function">git</span> config <span class="token parameter variable">--global</span> i18n.commit.encoding utf-8
<span class="token function">git</span> config <span class="token parameter variable">--global</span> i18n.logoutputencoding utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.quotepath <span class="token boolean">false</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">LESSCHARSET</span><span class="token operator">=</span>utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function l(c,p){return e(),t("div",null,o)}const g=a(s,[["render",l],["__file","git命令中文乱码.html.vue"]]),m=JSON.parse('{"path":"/fe/tools/git%E7%9B%B8%E5%85%B3/git%E5%91%BD%E4%BB%A4%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81.html","title":"git命令中文乱码","lang":"zh-CN","frontmatter":{"title":"git命令中文乱码","date":"2024-04-15T11:47:50.000Z","category":["git相关"],"tag":["git相关"],"description":"Git命令中文乱码通常是因为Git配置的默认编码与系统或终端的编码不一致导致的。 解决方法： mac windows","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/tools/git%E7%9B%B8%E5%85%B3/git%E5%91%BD%E4%BB%A4%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"git命令中文乱码"}],["meta",{"property":"og:description","content":"Git命令中文乱码通常是因为Git配置的默认编码与系统或终端的编码不一致导致的。 解决方法： mac windows"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T23:07:42.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"git相关"}],["meta",{"property":"article:published_time","content":"2024-04-15T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T23:07:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git命令中文乱码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-15T11:47:50.000Z\\",\\"dateModified\\":\\"2024-04-14T23:07:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"mac","slug":"mac","link":"#mac","children":[]},{"level":3,"title":"windows","slug":"windows","link":"#windows","children":[]}],"git":{"createdTime":1713136062000,"updatedTime":1713136062000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.33,"words":98},"filePathRelative":"fe/tools/git相关/git命令中文乱码.md","localizedDate":"2024年4月15日","excerpt":"<p>Git命令中文乱码通常是因为Git配置的默认编码与系统或终端的编码不一致导致的。</p>\\n<p>解决方法：</p>\\n<h3>mac</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> core.quotepath <span class=\\"token boolean\\">false</span>\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> gui.encoding utf-8\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> i18n.commit.encoding utf-8\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> i18n.logoutputencoding utf-8\\n</code></pre></div>","autoDesc":true}');export{g as comp,m as data};
