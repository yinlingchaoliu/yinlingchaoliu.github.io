import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-CtvCwAmI.js";const p={},e=t(`<p>读写锁</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Data</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> buffer<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReadWriteLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadWriteLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      lock<span class="token punctuation">.</span><span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">doRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">readUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">String</span> buffer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      lock<span class="token punctuation">.</span><span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">doWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">writeUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ReentrantReadWriteLock 重入读写锁</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantData</span><span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">String</span> buffer<span class="token punctuation">;</span>
  
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReadWriteLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantReadWriteLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> readLock <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> writeLock <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      readLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">doRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            readLock<span class="token punctuation">.</span><span class="token function">unLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">String</span> buffer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      writeLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">doWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            writeLock<span class="token punctuation">.</span><span class="token function">unLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>锁降级 降级为读锁</p><p>获取写入锁 获取读取锁 释放写入锁</p>`,6),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","Read-Write-Lock模式.html.vue"]]),d=JSON.parse('{"path":"/basis/juc/java%E9%AB%98%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/Read-Write-Lock%E6%A8%A1%E5%BC%8F.html","title":"Read-Write-Lock模式","lang":"zh-CN","frontmatter":{"title":"Read-Write-Lock模式","date":"2024-03-24T11:47:50.000Z","category":["java高并发编程"],"tag":["juc"],"description":"读写锁 ReentrantReadWriteLock 重入读写锁 锁降级 降级为读锁 获取写入锁 获取读取锁 释放写入锁","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/juc/java%E9%AB%98%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/Read-Write-Lock%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Read-Write-Lock模式"}],["meta",{"property":"og:description","content":"读写锁 ReentrantReadWriteLock 重入读写锁 锁降级 降级为读锁 获取写入锁 获取读取锁 释放写入锁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T00:56:59.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"juc"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T00:56:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Read-Write-Lock模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-05-09T00:56:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1715216219000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":2}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"basis/juc/java高并发编程/Read-Write-Lock模式.md","localizedDate":"2024年3月24日","excerpt":"<p>读写锁</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Data</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> buffer<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">ReadWriteLock</span> lock <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ReadWriteLock</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">read</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n      lock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readLock</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">try</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">doRead</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">finally</span><span class=\\"token punctuation\\">{</span>\\n            lock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readUnlock</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  \\n      <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> buffer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n      lock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">writeLock</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">try</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">doWrite</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">finally</span><span class=\\"token punctuation\\">{</span>\\n            lock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">writeUnlock</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  \\n      <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,d as data};
