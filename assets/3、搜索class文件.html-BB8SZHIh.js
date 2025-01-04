import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-CtvCwAmI.js";const p={},e=t(`<h3 id="_1、知识扩展" tabindex="-1"><a class="header-anchor" href="#_1、知识扩展"><span>1、知识扩展</span></a></h3><p>java jvm根据类路径(class path)来搜索类，加载到内存</p><table><thead><tr><th>按照搜索先后顺序</th><th>位置</th></tr></thead><tbody><tr><td>1、启动类路径(bootstrap classpath)</td><td>Jre/lib</td></tr><tr><td>2、扩展类路径(extension classpath)</td><td>Jre/lib/ext</td></tr><tr><td>3、用户类路径(user classpath)</td><td>当前目录 .</td></tr></tbody></table><p>可以通过 -Xbootclasspath 修改启动类路径</p><p>参数 -classpath /-cp</p><p>go语言不需要显式实现接口</p><p>defer 确保异常及时处理</p><h3 id="_2、cmd添加jre目录" tabindex="-1"><a class="header-anchor" href="#_2、cmd添加jre目录"><span>2、Cmd添加jre目录</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// java [-options] class [args...]</span>
<span class="token keyword">type</span> Cmd <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	XjreOption  <span class="token builtin">string</span>   <span class="token comment">// 指定jre启动类的目录</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">parseCmd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Cmd <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cmd<span class="token punctuation">.</span>XjreOption<span class="token punctuation">,</span><span class="token string">&quot;Xjre&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;path to jre&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、类加载规则" tabindex="-1"><a class="header-anchor" href="#_3、类加载规则"><span>3、类加载规则</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> classpath

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;path/filepath&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Classpath <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	bootClasspath Entry <span class="token comment">//启动类搜索</span>
	extClasspath  Entry <span class="token comment">//扩展类搜索</span>
	userClasspath Entry <span class="token comment">//用户类搜索</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建解析器</span>
<span class="token keyword">func</span> <span class="token function">Parse</span><span class="token punctuation">(</span>jreOption<span class="token punctuation">,</span> cpOption <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Classpath <span class="token punctuation">{</span>
	cp <span class="token operator">:=</span> <span class="token operator">&amp;</span>Classpath<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">//解析启动类加载</span>
	cp<span class="token punctuation">.</span><span class="token function">parseBootAndExtClasspath</span><span class="token punctuation">(</span>jreOption<span class="token punctuation">)</span>
	<span class="token comment">//解析用户类加载</span>
	cp<span class="token punctuation">.</span><span class="token function">parseUserClasspath</span><span class="token punctuation">(</span>cpOption<span class="token punctuation">)</span>
	<span class="token keyword">return</span> cp
<span class="token punctuation">}</span>

<span class="token comment">// 读取文件名称为className的class文件</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Classpath<span class="token punctuation">)</span> <span class="token function">ReadClass</span><span class="token punctuation">(</span>className <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> Entry<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	className <span class="token operator">=</span> className <span class="token operator">+</span> <span class="token string">&quot;.class&quot;</span>
	<span class="token comment">// 1. 从启动类路径寻找读取 &lt;className&gt;.class 类</span>
	<span class="token keyword">if</span> data<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> err <span class="token operator">:=</span> self<span class="token punctuation">.</span>bootClasspath<span class="token punctuation">.</span><span class="token function">readClass</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> data<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token comment">// 2. 从扩展类路径寻找读取 &lt;className&gt;.class 类</span>
	<span class="token keyword">if</span> data<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> err <span class="token operator">:=</span> self<span class="token punctuation">.</span>extClasspath<span class="token punctuation">.</span><span class="token function">readClass</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> data<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token comment">// 3. 从用户类路径寻找读取 &lt;className&gt;.class 类</span>
	<span class="token keyword">return</span> self<span class="token punctuation">.</span>userClasspath<span class="token punctuation">.</span><span class="token function">readClass</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Classpath<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> self<span class="token punctuation">.</span>userClasspath<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Classpath<span class="token punctuation">)</span> <span class="token function">parseBootAndExtClasspath</span><span class="token punctuation">(</span>jreOption <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	jreDir <span class="token operator">:=</span> <span class="token function">getJreDir</span><span class="token punctuation">(</span>jreOption<span class="token punctuation">)</span>
	self<span class="token punctuation">.</span>bootClasspath <span class="token operator">=</span> <span class="token function">newWildcardEntry</span><span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>jreDir<span class="token punctuation">,</span> <span class="token string">&quot;lib&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment">// jre/lib/*</span>
	self<span class="token punctuation">.</span>extClasspath <span class="token operator">=</span> <span class="token function">newWildcardEntry</span><span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>jreDir<span class="token punctuation">,</span> <span class="token string">&quot;lib&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// jre/lib/ext/*</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getJreDir</span><span class="token punctuation">(</span>jreOption <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">// 先读取命令行参数-Xjre，如果存在，直接返回（为了简化，不做错误输入的处理）</span>
	<span class="token keyword">if</span> jreOption <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> jreOption
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果命令行没有传入-Xjre，使用JAVA_HOME/jre</span>
	<span class="token keyword">if</span> javaHome <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;JAVA_HOME&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> javaHome <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>javaHome<span class="token punctuation">,</span> <span class="token string">&quot;jre&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;Can&#39;t find jre folder&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Classpath<span class="token punctuation">)</span> <span class="token function">parseUserClasspath</span><span class="token punctuation">(</span>cpOption <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> cpOption <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
		cpOption <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>
	<span class="token punctuation">}</span>
	self<span class="token punctuation">.</span>userClasspath <span class="token operator">=</span> <span class="token function">newEntry</span><span class="token punctuation">(</span>cpOption<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、类路径查找" tabindex="-1"><a class="header-anchor" href="#_4、类路径查找"><span>4、类路径查找</span></a></h3><ul><li>1、Entry搜索类路径</li><li>2、DirEntry 搜索目录下类路径</li><li>3、ZipEntry 搜索zip或jar文件形式类路径</li><li>4、CompositeEntry 组合类路径</li><li>5、WildcardEntry 所有通配符下类路径</li></ul><p>Entry 类路径查找</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> classpath

<span class="token keyword">import</span> <span class="token string">&quot;os&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;strings&quot;</span>

<span class="token comment">//分隔符 &quot;:&quot;</span>
<span class="token keyword">const</span> pathListSeparator <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>PathListSeparator<span class="token punctuation">)</span>

<span class="token comment">//定义接口</span>
<span class="token keyword">type</span> Entry <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// 寻找和读取 class 文件</span>
	<span class="token comment">// 入参：className - class文件的相对路径，eg. 如果要读取 java.lang.Object 类，则className = java/lang/Object.class</span>
	<span class="token comment">// 返回值：</span>
	<span class="token comment">// 1. 读取到的class文件内容的[]byte</span>
	<span class="token comment">// 2. 最终定位到包含className文件的Entry对象</span>
	<span class="token comment">// 3. 错误信息error</span>
	<span class="token function">readClass</span><span class="token punctuation">(</span>className <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> Entry<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token comment">//获得className</span>
	<span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//根据参数类型创建不同搜索模式</span>
<span class="token keyword">func</span> <span class="token function">newEntry</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> Entry <span class="token punctuation">{</span>

	<span class="token comment">//读取多个className文件 java -cp path1/classes:path2/classes</span>
	<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> pathListSeparator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">newCompositeEntry</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 读取path下所有jar文件的className文件  java -cp path/*</span>
	<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">newWildcardEntry</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 从path/lib1.jar下查找并读取className文件：java -cp path/lib1.jar 或者 java -cp path/lib1.zip</span>
	<span class="token comment">//读取zip/jar下 className文件 :java -cp path/lib1.jar</span>
	<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&quot;.jar&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&quot;.zip&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">newZipEntry</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//遍历目录</span>
	<span class="token keyword">return</span> <span class="token function">newDirEntry</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>
<span class="token comment">//测试classpath</span>
<span class="token keyword">func</span> <span class="token function">parseClasspath</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>Cmd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cp <span class="token operator">:=</span> classpath<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>XjreOption<span class="token punctuation">,</span> cmd<span class="token punctuation">.</span>cpOption<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>&quot;classpath<span class="token punctuation">:</span><span class="token operator">%</span>v class<span class="token punctuation">:</span><span class="token operator">%</span>v args<span class="token punctuation">:</span><span class="token operator">%</span>v
&quot;<span class="token punctuation">,</span>
		cp<span class="token punctuation">,</span> cmd<span class="token punctuation">.</span>class<span class="token punctuation">,</span> cmd<span class="token punctuation">.</span>args<span class="token punctuation">)</span>

	className <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>class<span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	classData<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> cp<span class="token punctuation">.</span><span class="token function">ReadClass</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>&quot;Could not find or load main class <span class="token operator">%</span>s
&quot;<span class="token punctuation">,</span> cmd<span class="token punctuation">.</span>class<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>&quot;class data<span class="token punctuation">:</span><span class="token operator">%</span>v
&quot;<span class="token punctuation">,</span> classData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战项目地址" tabindex="-1"><a class="header-anchor" href="#实战项目地址"><span>实战项目地址</span></a></h3><p>https://gitee.com/yinlingchaoliu/jvmgo.git</p><p>提交标签classpath</p>`,20),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","3、搜索class文件.html.vue"]]),k=JSON.parse('{"path":"/basis/jvm/%E6%89%8B%E5%8A%A8%E7%BC%96%E5%86%99jvm%E8%99%9A%E6%8B%9F%E6%9C%BA/3%E3%80%81%E6%90%9C%E7%B4%A2class%E6%96%87%E4%BB%B6.html","title":"3、搜索class文件","lang":"zh-CN","frontmatter":{"title":"3、搜索class文件","date":"2024-04-10T06:06:06.000Z","category":["手动编写jvm虚拟机"],"tag":["jvmgo"],"description":"1、知识扩展 java jvm根据类路径(class path)来搜索类，加载到内存 可以通过 -Xbootclasspath 修改启动类路径 参数 -classpath /-cp go语言不需要显式实现接口 defer 确保异常及时处理 2、Cmd添加jre目录 3、类加载规则 4、类路径查找 1、Entry搜索类路径 2、DirEntry 搜索目录...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/jvm/%E6%89%8B%E5%8A%A8%E7%BC%96%E5%86%99jvm%E8%99%9A%E6%8B%9F%E6%9C%BA/3%E3%80%81%E6%90%9C%E7%B4%A2class%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"3、搜索class文件"}],["meta",{"property":"og:description","content":"1、知识扩展 java jvm根据类路径(class path)来搜索类，加载到内存 可以通过 -Xbootclasspath 修改启动类路径 参数 -classpath /-cp go语言不需要显式实现接口 defer 确保异常及时处理 2、Cmd添加jre目录 3、类加载规则 4、类路径查找 1、Entry搜索类路径 2、DirEntry 搜索目录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T22:43:38.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"jvmgo"}],["meta",{"property":"article:published_time","content":"2024-04-10T06:06:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T22:43:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3、搜索class文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-10T06:06:06.000Z\\",\\"dateModified\\":\\"2024-04-09T22:43:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"1、知识扩展","slug":"_1、知识扩展","link":"#_1、知识扩展","children":[]},{"level":3,"title":"2、Cmd添加jre目录","slug":"_2、cmd添加jre目录","link":"#_2、cmd添加jre目录","children":[]},{"level":3,"title":"3、类加载规则","slug":"_3、类加载规则","link":"#_3、类加载规则","children":[]},{"level":3,"title":"4、类路径查找","slug":"_4、类路径查找","link":"#_4、类路径查找","children":[]},{"level":3,"title":"实战项目地址","slug":"实战项目地址","link":"#实战项目地址","children":[]}],"git":{"createdTime":1711376238000,"updatedTime":1712702618000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":2}]},"readingTime":{"minutes":2.66,"words":797},"filePathRelative":"basis/jvm/手动编写jvm虚拟机/3、搜索class文件.md","localizedDate":"2024年4月10日","excerpt":"<h3>1、知识扩展</h3>\\n<p>java jvm根据类路径(class path)来搜索类，加载到内存</p>\\n<table>\\n<thead>\\n<tr>\\n<th>按照搜索先后顺序</th>\\n<th>位置</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1、启动类路径(bootstrap classpath)</td>\\n<td>Jre/lib</td>\\n</tr>\\n<tr>\\n<td>2、扩展类路径(extension classpath)</td>\\n<td>Jre/lib/ext</td>\\n</tr>\\n<tr>\\n<td>3、用户类路径(user classpath)</td>\\n<td>当前目录 .</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{d as comp,k as data};
