import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-CtvCwAmI.js";const t={},i=e(`<h4 id="_1、组件化思路" tabindex="-1"><a class="header-anchor" href="#_1、组件化思路"><span>1、组件化思路</span></a></h4><p>“聚合和解耦是项目架构的基础”，站在组件化项目角度，第一步期望子组件可以作为APP单独调试和壳APP集成发布。好处在于开发者在一个子项目中把子组件作为一个子app开发，而不影响别人。APP上线，发布者只需关心是否合并子组件功能。</p><h4 id="_2、单独调试与集成发布需求拆解" tabindex="-1"><a class="header-anchor" href="#_2、单独调试与集成发布需求拆解"><span>2、单独调试与集成发布需求拆解</span></a></h4><ul><li>1、单独调试：指通过一个标志isRunAlone, 若isRunAlone==true,当前lib项目转化为app项目，反之为lib项目，移除调试代码</li><li>2、集成发布：指壳工程，IDE编写代码时，不能引用子组件代码，做到编写隔离，而编译时，又要将子组件代码编译到主项目中，最好配置是在壳工程中gradle.propetties，建议也要支持扩展方法addComponent，以函数方式支持</li></ul><h4 id="_3、核心逻辑" tabindex="-1"><a class="header-anchor" href="#_3、核心逻辑"><span>3、核心逻辑</span></a></h4><ul><li>1、初始化当前项目</li><li>2、获取当前任务类型</li><li>3、若当前是壳工程，支持编译隔离</li><li>4、若当前是子组件，支持单独调试和发布 #####3.1 示例代码</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>    <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span>Project project<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mProject <span class="token operator">=</span> project

        <span class="token comment">//1、初始化当前项目</span>
        <span class="token function">initAlone</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span>

        <span class="token comment">//2、判断当前任务 只有assemble任务才添加依赖</span>
        assembleTask <span class="token operator">=</span> <span class="token function">getTaskInfo</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span>

        <span class="token comment">//3、当前是壳工程 不许被引用</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMainApp</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//运行壳工程配置</span>
            <span class="token function">runMainApp</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span>
            <span class="token comment">//添加配置依赖</span>
            <span class="token function">compileComponents</span><span class="token punctuation">(</span>assembleTask<span class="token punctuation">,</span> project<span class="token punctuation">)</span>
            <span class="token comment">//添加扩展方法 (选项) 参数</span>
            project<span class="token punctuation">.</span>ext<span class="token punctuation">.</span>addComponent <span class="token operator">=</span> <span class="token punctuation">{</span> dependencyName <span class="token operator">-&gt;</span> <span class="token function">addComponent</span><span class="token punctuation">(</span>dependencyName<span class="token punctuation">)</span> <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//4、支持单独调试和发布</span>
        <span class="token function">runAlone</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2单独调试" tabindex="-1"><a class="header-anchor" href="#_3-2单独调试"><span>3.2单独调试</span></a></h5><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> String DEBUG_DIR <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;src/main/debug/&quot;</span></span>

    <span class="token comment">/**
     * 支持单独调试和发布
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">runAlone</span><span class="token punctuation">(</span>Project project<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.找当前module的状态</span>
        <span class="token keyword">boolean</span> isRunAlone <span class="token operator">=</span> <span class="token function">fetchAloneStatus</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isRunAlone<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            project<span class="token punctuation">.</span>apply plugin<span class="token punctuation">:</span> <span class="token string">&#39;com.android.application&#39;</span>
            <span class="token function">log</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;apply plugin is &quot;</span></span> <span class="token operator">+</span> <span class="token string">&#39;com.android.application&#39;</span><span class="token punctuation">)</span>
            project<span class="token punctuation">.</span>android<span class="token punctuation">.</span>sourceSets <span class="token punctuation">{</span>
                main <span class="token punctuation">{</span>
                    <span class="token comment">//debug模式下，如果存在src/main/debug/AndroidManifest.xml，则自动使用其作为manifest文件</span>
                    <span class="token keyword">def</span> debugManifest <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">DEBUG_DIR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">AndroidManifest.xml&quot;</span></span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>project<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>debugManifest<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        manifest<span class="token punctuation">.</span>srcFile debugManifest
                    <span class="token punctuation">}</span>
                    java<span class="token punctuation">.</span>srcDirs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;src/main/java&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">DEBUG_DIR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">java&quot;</span></span><span class="token punctuation">]</span>
                    res<span class="token punctuation">.</span>srcDirs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;src/main/res&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">DEBUG_DIR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">res&quot;</span></span><span class="token punctuation">]</span>
                    assets<span class="token punctuation">.</span>srcDirs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;src/main/assets&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">DEBUG_DIR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">assets&quot;</span></span><span class="token punctuation">]</span>
                    jniLibs<span class="token punctuation">.</span>srcDirs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;src/main/jniLibs&#39;</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">DEBUG_DIR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">jniLibs&quot;</span></span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            project<span class="token punctuation">.</span>apply plugin<span class="token punctuation">:</span> <span class="token string">&#39;com.android.library&#39;</span>
            <span class="token function">log</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;apply plugin is &quot;</span></span> <span class="token operator">+</span> <span class="token string">&#39;com.android.library&#39;</span><span class="token punctuation">)</span>
            <span class="token comment">//main下删除所有debug目录下的文件</span>
            project<span class="token punctuation">.</span>android<span class="token punctuation">.</span>sourceSets<span class="token punctuation">.</span>main <span class="token punctuation">{</span>
                <span class="token comment">//默认这个位置，为代码清晰</span>
                manifest<span class="token punctuation">.</span>srcFile <span class="token string">&#39;src/main/AndroidManifest.xml&#39;</span>
                <span class="token comment">//删除所有debug目录下内容</span>
                java <span class="token punctuation">{</span>
                    exclude <span class="token string">&#39;debug/**&#39;</span>
                <span class="token punctuation">}</span>
                res <span class="token punctuation">{</span>
                    exclude <span class="token string">&#39;debug/**&#39;</span>
                <span class="token punctuation">}</span>
                assets <span class="token punctuation">{</span>
                    exclude <span class="token string">&#39;debug/**&#39;</span>
                <span class="token punctuation">}</span>
                jniLibs <span class="token punctuation">{</span>
                    exclude <span class="token string">&#39;debug/**&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、插件编写原则" tabindex="-1"><a class="header-anchor" href="#_4、插件编写原则"><span>4、插件编写原则</span></a></h4><p>1、单一职责：一个插件只做好一件事，不要与其他组件化插件功能耦合。 2、配置化：用户最小情况修改代码，可以带来稳定 3、易用性：以用户为中心，编写代码提供插件支持，减少生僻概念，支持用户惯性写法</p><ul><li><p>1、单一职责 单独调试和集成发布功能属于通用功能，即使不做插件化，在开发中也有好处。过于强大插件功能，易用性反而降低，进而限制了</p></li><li><p>2、配置化 在根目录下gradle.propetties配置isRunAlone，就可以设置设置项目中组件lib与app形式切换 在空壳app下gradle.propetties配置,就可以动态引入子组件</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>###是否为主APP
isMainApp=true

###配置方式接入组件
debugComponent=&#39;:module_main&#39;,\\
  &#39;:module_girls&#39;,\\
  &#39;:module_news&#39;
releaseComponent=&#39;:module_main&#39;,\\
  &#39;:module_girls&#39;,\\
  &#39;:module_news&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>易用性 支持壳工程 addComponent(&#39;:module_main&#39;)函数,在gradle中引入子组件，配置还支持容错性trimAll不可见字符</li></ul><p>####5、使用示例 根目录配置gradle.propetties</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>##集成与独立模式
isRunAlone=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1、壳工程 gradle配置</p><div class="language-gradle line-numbers-mode" data-ext="gradle" data-title="gradle"><pre class="language-gradle"><code><span class="token keyword">apply</span> <span class="token keyword">plugin</span><span class="token punctuation">:</span> <span class="token string">&#39;thorAlone&#39;</span>
并且删除原来的app引用
<span class="token comment">//apply plugin: &#39;com.android.application&#39;</span>

<span class="token comment">//或采用这种方式</span>
<span class="token keyword">dependencies</span><span class="token punctuation">{</span>
    <span class="token comment">//组件解耦采用这种方式  assemble 才会引入依赖 build并不引入达到组件间代码隔离</span>
    <span class="token function">addComponent</span><span class="token punctuation">(</span><span class="token string">&#39;:module_main&#39;</span><span class="token punctuation">)</span>
    <span class="token function">addComponent</span><span class="token punctuation">(</span>deps<span class="token punctuation">.</span>support<span class="token punctuation">.</span>multidex<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gradle.propetties</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>###是否为主APP
isMainApp=true

###配置方式接入组件
debugComponent=&#39;:module_main&#39;,\\
  &#39;:module_girls&#39;,\\
  &#39;:module_news&#39;
releaseComponent=&#39;:module_main&#39;,\\
  &#39;:module_girls&#39;,\\
  &#39;:module_news&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、子组件配置 gradle配置,删除sourceSets</p><div class="language-gradle line-numbers-mode" data-ext="gradle" data-title="gradle"><pre class="language-gradle"><code><span class="token keyword">apply</span> <span class="token keyword">plugin</span><span class="token punctuation">:</span> <span class="token string">&#39;thorAlone&#39;</span>
并且删除原来的lib引用
<span class="token comment">//apply plugin: &#39;com.android.library&#39;</span>

<span class="token comment">//删除 sourceSets</span>
<span class="token comment">//sourceSets{</span>
<span class="token comment">//main{}</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件代码配置 <img src="https://upload-images.jianshu.io/upload_images/5526061-36e69f19ba093c97.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>####6、项目代码 https://github.com/yinlingchaoliu/AndroidComponent</p><p>插件位置 AndroidComponent/thor_alone_gradle_plugin</p><div class="language-gradle line-numbers-mode" data-ext="gradle" data-title="gradle"><pre class="language-gradle"><code><span class="token comment">//诸神黄昏</span>
include <span class="token string">&#39;:component:thor_alone_gradle_plugin&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),p=[i];function o(l,c){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","第1章-组件单独调试与集成发布.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%BB%84%E4%BB%B6%E5%8C%96/%E7%AC%AC1%E7%AB%A0-%E7%BB%84%E4%BB%B6%E5%8D%95%E7%8B%AC%E8%B0%83%E8%AF%95%E4%B8%8E%E9%9B%86%E6%88%90%E5%8F%91%E5%B8%83.html","title":"第1章-组件单独调试与集成发布","lang":"zh-CN","frontmatter":{"title":"第1章-组件单独调试与集成发布","date":"2024-03-24T11:47:50.000Z","category":["Android组件化"],"tag":["archive"],"description":"1、组件化思路 “聚合和解耦是项目架构的基础”，站在组件化项目角度，第一步期望子组件可以作为APP单独调试和壳APP集成发布。好处在于开发者在一个子项目中把子组件作为一个子app开发，而不影响别人。APP上线，发布者只需关心是否合并子组件功能。 2、单独调试与集成发布需求拆解 1、单独调试：指通过一个标志isRunAlone, 若isRunAlone=...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%BB%84%E4%BB%B6%E5%8C%96/%E7%AC%AC1%E7%AB%A0-%E7%BB%84%E4%BB%B6%E5%8D%95%E7%8B%AC%E8%B0%83%E8%AF%95%E4%B8%8E%E9%9B%86%E6%88%90%E5%8F%91%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"第1章-组件单独调试与集成发布"}],["meta",{"property":"og:description","content":"1、组件化思路 “聚合和解耦是项目架构的基础”，站在组件化项目角度，第一步期望子组件可以作为APP单独调试和壳APP集成发布。好处在于开发者在一个子项目中把子组件作为一个子app开发，而不影响别人。APP上线，发布者只需关心是否合并子组件功能。 2、单独调试与集成发布需求拆解 1、单独调试：指通过一个标志isRunAlone, 若isRunAlone=..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-36e69f19ba093c97.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第1章-组件单独调试与集成发布\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-36e69f19ba093c97.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":3.39,"words":1017},"filePathRelative":"fe/android/Android组件化/第1章-组件单独调试与集成发布.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、组件化思路</h4>\\n<p>“聚合和解耦是项目架构的基础”，站在组件化项目角度，第一步期望子组件可以作为APP单独调试和壳APP集成发布。好处在于开发者在一个子项目中把子组件作为一个子app开发，而不影响别人。APP上线，发布者只需关心是否合并子组件功能。</p>\\n<h4>2、单独调试与集成发布需求拆解</h4>\\n<ul>\\n<li>1、单独调试：指通过一个标志isRunAlone, 若isRunAlone==true,当前lib项目转化为app项目，反之为lib项目，移除调试代码</li>\\n<li>2、集成发布：指壳工程，IDE编写代码时，不能引用子组件代码，做到编写隔离，而编译时，又要将子组件代码编译到主项目中，最好配置是在壳工程中gradle.propetties，建议也要支持扩展方法addComponent，以函数方式支持</li>\\n</ul>","autoDesc":true}');export{r as comp,m as data};
