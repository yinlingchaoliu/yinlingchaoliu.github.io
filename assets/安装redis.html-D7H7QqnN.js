import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as t}from"./app-CtvCwAmI.js";const a={},i=t(`<h3 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#安装redis</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> redis-server

<span class="token comment">#确认Redis已经安装并且服务正在运行</span>
<span class="token function">sudo</span> systemctl status redis-server


<span class="token comment">#如果你需要配置Redis，可以编辑配置文件 /etc/redis/redis.conf。</span>


<span class="token comment">#启动Redis服务：</span>

<span class="token function">sudo</span> systemctl start redis-server


<span class="token comment">#使Redis服务开机自启：</span>

<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> redis-server


redis-cli <span class="token function">ping</span>
PONG

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[i];function c(d,l){return n(),s("div",null,r)}const m=e(a,[["render",c],["__file","安装redis.html.vue"]]),u=JSON.parse('{"path":"/server/env/%E5%AE%89%E8%A3%85redis.html","title":"安装redis","lang":"zh-CN","frontmatter":{"title":"安装redis","date":"2024-03-24T11:47:50.000Z","order":10,"category":["server"],"tag":["env"],"description":"安装redis","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/server/env/%E5%AE%89%E8%A3%85redis.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"安装redis"}],["meta",{"property":"og:description","content":"安装redis"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-25T10:39:24.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"env"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-25T10:39:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装redis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-04-25T10:39:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"安装redis","slug":"安装redis","link":"#安装redis","children":[]}],"git":{"createdTime":1714041564000,"updatedTime":1714041564000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"server/env/安装redis.md","localizedDate":"2024年3月24日","excerpt":"<h3>安装redis</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#安装redis</span>\\n\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> redis-server\\n\\n<span class=\\"token comment\\">#确认Redis已经安装并且服务正在运行</span>\\n<span class=\\"token function\\">sudo</span> systemctl status redis-server\\n\\n\\n<span class=\\"token comment\\">#如果你需要配置Redis，可以编辑配置文件 /etc/redis/redis.conf。</span>\\n\\n\\n<span class=\\"token comment\\">#启动Redis服务：</span>\\n\\n<span class=\\"token function\\">sudo</span> systemctl start redis-server\\n\\n\\n<span class=\\"token comment\\">#使Redis服务开机自启：</span>\\n\\n<span class=\\"token function\\">sudo</span> systemctl <span class=\\"token builtin class-name\\">enable</span> redis-server\\n\\n\\nredis-cli <span class=\\"token function\\">ping</span>\\nPONG\\n\\n</code></pre></div>","autoDesc":true}');export{m as comp,u as data};
