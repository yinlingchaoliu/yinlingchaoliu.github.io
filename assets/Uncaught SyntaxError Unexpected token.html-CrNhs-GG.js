import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-CtvCwAmI.js";const e={},p=t(`<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>taro h5</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">yarn</span> dev:h5  
<span class="token comment"># 测试h5 页面没有问题 本地调试没有问题</span>


<span class="token function">yarn</span> build:h5 
serve <span class="token parameter variable">-s</span> dist
<span class="token comment"># 生产部署 dist文件时，报错 Uncaught SyntaxError: Unexpected token  &#39;/&lt;&#39; (at </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><p>问题: 在打包后引入的资源路径出错的问题</p><ul><li>publicPath 根据情况设置</li><li>核心关注点 publicPath basename 属性</li></ul><p>dev.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;&quot;development&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defineConstants</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mini</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/h5&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">basename</span><span class="token operator">:</span> <span class="token string">&quot;/h5&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;browser&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span>
      <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prod.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;&quot;production&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defineConstants</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mini</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">basename</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;browser&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span>
      <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function r(l,c){return a(),s("div",null,o)}const d=n(e,[["render",r],["__file","Uncaught SyntaxError Unexpected token.html.vue"]]),k=JSON.parse(`{"path":"/server/env/Uncaught%20SyntaxError%20Unexpected%20token.html","title":"Uncaught SyntaxError Unexpected token  '/<' (at","lang":"zh-CN","frontmatter":{"title":"Uncaught SyntaxError Unexpected token  '/<' (at","date":"2024-04-30T08:47:50.000Z","order":19,"category":["server"],"tag":["env"],"description":"背景 taro h5 解决方案 问题: 在打包后引入的资源路径出错的问题 publicPath 根据情况设置 核心关注点 publicPath basename 属性 dev.js prod.js","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/server/env/Uncaught%20SyntaxError%20Unexpected%20token.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Uncaught SyntaxError Unexpected token  '/<' (at"}],["meta",{"property":"og:description","content":"背景 taro h5 解决方案 问题: 在打包后引入的资源路径出错的问题 publicPath 根据情况设置 核心关注点 publicPath basename 属性 dev.js prod.js"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-30T00:55:04.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"env"}],["meta",{"property":"article:published_time","content":"2024-04-30T08:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-30T00:55:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Uncaught SyntaxError Unexpected token  '/<' (at\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-30T08:47:50.000Z\\",\\"dateModified\\":\\"2024-04-30T00:55:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1714438504000,"updatedTime":1714438504000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"server/env/Uncaught SyntaxError Unexpected token.md","localizedDate":"2024年4月30日","excerpt":"<h3>背景</h3>\\n<p>taro h5</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>\\n<span class=\\"token function\\">yarn</span> dev:h5  \\n<span class=\\"token comment\\"># 测试h5 页面没有问题 本地调试没有问题</span>\\n\\n\\n<span class=\\"token function\\">yarn</span> build:h5 \\nserve <span class=\\"token parameter variable\\">-s</span> dist\\n<span class=\\"token comment\\"># 生产部署 dist文件时，报错 Uncaught SyntaxError: Unexpected token  '/&lt;' (at </span>\\n\\n</code></pre></div>","autoDesc":true}`);export{d as comp,k as data};