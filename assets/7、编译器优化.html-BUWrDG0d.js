import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as p}from"./app-CtvCwAmI.js";const t="/assets/compile-lekt3YS5.png",e="/assets/jit-CFyubR5D.png",o={},c=p('<h3 id="早期-编译器-优化" tabindex="-1"><a class="header-anchor" href="#早期-编译器-优化"><span>早期(编译器)优化</span></a></h3><figure><img src="'+t+`" alt="编译过程" tabindex="0" loading="lazy"><figcaption>编译过程</figcaption></figure><p>com.sun.tools.javac.main.javaCompiler</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">compile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//准备过程: 初始化插入注解处理器</span>
  <span class="token function">initProcessAnnotations</span><span class="token punctuation">(</span>processors<span class="token punctuation">)</span><span class="token punctuation">;</span>

  delegateCompiler <span class="token operator">=</span> <span class="token function">processAnnotations</span><span class="token punctuation">(</span>  <span class="token comment">// 过程2 :执行注解处理</span>
      <span class="token function">enterTrees</span><span class="token punctuation">(</span><span class="token function">stopIfError</span><span class="token punctuation">(</span><span class="token class-name">CompileStage</span><span class="token punctuation">.</span><span class="token constant">PARSE</span><span class="token punctuation">,</span> <span class="token comment">//过程1:输入符号表</span>
      <span class="token function">parseFile</span><span class="token punctuation">(</span>sourceFileObjects<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 过程1：解析: 词法分析和语法分析</span>
      <span class="token punctuation">,</span>classnames<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//过程3: 分析及字节码生成</span>
  delegateCompiler<span class="token punctuation">.</span><span class="token function">compile2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">compile2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">BY_TODO</span><span class="token operator">:</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>todo<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token function">generate</span><span class="token punctuation">(</span> desugar <span class="token punctuation">(</span> flow<span class="token punctuation">.</span><span class="token function">attribute</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 生成字节码 | 解语法糖 | 数据流分析 | 符号标注</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-解析与填充符号表" tabindex="-1"><a class="header-anchor" href="#_1-解析与填充符号表"><span>1.解析与填充符号表</span></a></h4><p>parseFile()</p><p>token -&gt; ast -&gt; flow -&gt; symbol</p><ul><li>1、词法、语法分析 词法分析是将源代码的字符流转变为标记(Token)的集合</li></ul><p>语法分析是根据Token序列构造抽象语法树ast的过程</p><ul><li>2.填充符号表</li></ul><p>enterTrees()</p><p>符号表示一组符号地址和符号信息构成的表格</p><h4 id="_2-注解处理" tabindex="-1"><a class="header-anchor" href="#_2-注解处理"><span>2.注解处理</span></a></h4><p>initProcessAnnotations()</p><p>processAnnotations()</p><p>doProcess()</p><p>插入式编译器插件，可以读取、修改、添加抽象语法树任意元素</p><p>插入式插件在处理注解期间对语法树进行修改，编译器将回到解析及填充符号表重新处理,直到所有注解处理器不在修改 ，每一次循环称之为Round</p><h4 id="_3-语义分析与字节码生成" tabindex="-1"><a class="header-anchor" href="#_3-语义分析与字节码生成"><span>3.语义分析与字节码生成</span></a></h4><p>语法树能保证结构正确，无法保证符合逻辑</p><p>语义分析主要任务是对结构上源程序上下文有关性质审查</p><ul><li>token检查</li></ul><p>attribute() flow() 检查是否声明变量，变量和赋值之间数据能否匹配</p><ul><li>数据及控制流分析</li></ul><p>局部变量使用前是否赋值，方法的每条路径是否有返回值</p><ul><li>解语法糖</li></ul><p>语法糖对功能没有影响，方便开发人员使用，增强可读性，减少出错</p><ul><li>字节码生成</li></ul><p>将各步骤生成信息(抽象语法树，符号表)转化到字节码写到磁盘中</p><h4 id="java-语法糖" tabindex="-1"><a class="header-anchor" href="#java-语法糖"><span>java 语法糖</span></a></h4><h5 id="_1-泛型与类型擦除" tabindex="-1"><a class="header-anchor" href="#_1-泛型与类型擦除"><span>1. 泛型与类型擦除</span></a></h5><p>泛型编译后成为Object</p><p>泛型遇到重载后不能编译</p><p>泛型擦除，对方法code属性中字节码的擦除，实际元数据中，还保留泛型信息， 这是通过反射获得参数化类型的依据</p><h5 id="_2-自动装箱与拆箱-遍历循环" tabindex="-1"><a class="header-anchor" href="#_2-自动装箱与拆箱-遍历循环"><span>2. 自动装箱与拆箱，遍历循环</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//自动装箱 拆箱 遍历循环后</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Iterator</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拆箱问题</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> d <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> e <span class="token operator">=</span> <span class="token number">321</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> f <span class="token operator">=</span> <span class="token number">321</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> g <span class="token operator">=</span> <span class="token number">3L</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c == d          :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e == f          :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c == a + b      :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c.equals(a+b)   :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;g==(a+b)        :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">==</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;g.equals(a+b)   :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//输出结果</span>
c <span class="token operator">==</span> d          <span class="token operator">:</span><span class="token boolean">true</span>
e <span class="token operator">==</span> f          <span class="token operator">:</span><span class="token boolean">false</span>
c <span class="token operator">==</span> a <span class="token operator">+</span> b      <span class="token operator">:</span><span class="token boolean">true</span>
c<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>   <span class="token operator">:</span><span class="token boolean">true</span>
g<span class="token operator">==</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>        <span class="token operator">:</span><span class="token boolean">true</span>
g<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>   <span class="token operator">:</span><span class="token boolean">false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol><li>包装类自动装箱会缓存值为-128~127的Integer对象</li></ol></li><li><ol start="2"><li>包装类”==“运算在没有遇到算术运算情况下不会拆箱</li></ol></li><li><ol start="3"><li>equals比较会先判断类型，再判断内容</li></ol></li><li><ol start="4"><li>== 比较的是地址</li></ol></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Integer</span> a <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">//字节码</span>
<span class="token number">0</span><span class="token operator">:</span>   iconst_1
<span class="token number">1</span><span class="token operator">:</span>   invokestatic    #<span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">//Method java/lang/Integer.valueOf:(I)</span>
<span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>
<span class="token number">4</span><span class="token operator">:</span>   astore_1   

<span class="token comment">// -128~127 有对象换存池 值相同，对象地址相同</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">final</span> <span class="token keyword">int</span> offset <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token operator">-</span><span class="token number">128</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token number">127</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// must cache </span>
	    <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> offset<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Integer a = 1 自动装箱</span>
<span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c == d :true 自动装箱使用valueOf 对象池，地址相同</p><p>e == f :false 值超过127 ，值相同，但是对象地址不相同</p><p>c == a + b :true 自动装箱使用valueOf 对象池，地址相同</p><p>c.equals(a+b) :true 对象类型相同integer ，值相同</p><p>g==(a+b) :true 拆箱计算a+b时，将结果3转换成long类型，再跟g比较，所以结果true</p><p>g.equals(a+b) :false a+b计算结果装箱为Integer 3的对象，g为Long对象，equals比较时，会使用instanceof判断类型，结果false</p><h5 id="_3-条件编译" tabindex="-1"><a class="header-anchor" href="#_3-条件编译"><span>3. 条件编译</span></a></h5><p>删除无用代码</p><h4 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h4><p>编写自定义注解处理器 AbstractProcessor</p><p>javaopt + apt技术</p><h3 id="晚期-运行期-优化" tabindex="-1"><a class="header-anchor" href="#晚期-运行期-优化"><span>晚期(运行期)优化</span></a></h3><figure><img src="`+e+`" alt="解释器与编译器交互" tabindex="0" loading="lazy"><figcaption>解释器与编译器交互</figcaption></figure><ul><li>Client Compiler 简称 C1编译器</li><li>Server Compiler 简称 C2编译器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 强制启动c1</span>
<span class="token function">java</span> <span class="token parameter variable">-client</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 强制启动c2</span>
<span class="token function">java</span> <span class="token parameter variable">-server</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 强制启动解释器模式</span>
<span class="token function">java</span> <span class="token parameter variable">-Xint</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 强制启动jit模式</span>
<span class="token function">java</span> <span class="token parameter variable">-Xcomp</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即时编译器优化成本地代码需要占用程序运行时间，要编译优化程度更高代码，解释器还要替编译器收集性能监控信息</p><h4 id="分层编译策略" tabindex="-1"><a class="header-anchor" href="#分层编译策略"><span>分层编译策略</span></a></h4><p>第0层，程序解释执行，不开启性能监控Profiling, 可触发第1层编译</p><p>第1层，c1编译，将字节码编译成本地代码，简单可靠优化，如果有必要才加入性能监控</p><p>第2层，c2编译，将字节码编译成本地代码，编译耗时优化，根据性能监控启动激进优化</p><h4 id="编译对象与除法条件" tabindex="-1"><a class="header-anchor" href="#编译对象与除法条件"><span>编译对象与除法条件</span></a></h4><p>热点代码</p><ul><li>被多次调用的方法</li><li>被多次执行的循环体</li></ul><p>以整个方法作为编译对象，称为栈上替换 OSR编译</p><h4 id="热点探测" tabindex="-1"><a class="header-anchor" href="#热点探测"><span>热点探测</span></a></h4><ul><li>基于采样: 周期性检查栈顶，发现方法经常出现，判定热点方法，优点:简单高效，容易获取调用关系(堆栈中)，缺点:很难精确，一旦阻塞扰乱热点探测</li><li>基于计数器: 每个方法建立计数器，统计执行次数，当计数器达到阈值，判定热点方法，优点:精确，缺点:需要额外的计数器，需要额外的内存，需要额外的时间 不能直接获得方法调用关系</li></ul><p>jvm采用基于计数器(hotspot)</p><ul><li>方法计数器 c1 Client 1500次 Server 10000次</li></ul><p>统计次数是相对频率，当超过一定时间限度，调用次数不足提交即时编译器，计数器数量减半(热度衰减)，半衰周期</p><ul><li>回边计数器 c2</li></ul><p>client 13995次 server 10700次 没有计数衰减</p><h4 id="编译过程" tabindex="-1"><a class="header-anchor" href="#编译过程"><span>编译过程</span></a></h4><p>Client Compiler优化</p><ol><li>高级中间代码 HIR, 静态分配 方法内联 常量传播</li><li>低级中间代码 LIR, 空值检查消除，范围检查消除</li><li>线性扫描算法 在LIR寄存器做窥孔优化，产生机器代码</li></ol><p>Server Compiler优化</p><p>优化级别 GUN C++ -o2 优化水平</p><ol><li>普通优化 无用代码消除、循环展开、常量传播、基本块重排序、检查消除、空值检查消除</li><li>激进优化 守护内联、分支频率预测</li></ol><h4 id="优化技术" tabindex="-1"><a class="header-anchor" href="#优化技术"><span>优化技术</span></a></h4><p>无用代码消除</p><p>公共子表达式消除: 代数简化</p><p>数组范围检查:</p><p>方法内联: 目标方法复制到调用方法</p><h5 id="逃逸分析" tabindex="-1"><a class="header-anchor" href="#逃逸分析"><span>逃逸分析:</span></a></h5><p>动态分析对象动态作用域。被外部方法引用，叫方法逃逸。被线程访问到，叫线程逃逸</p><p>如果对象不会逃逸，可以进行高效优化，逃逸对象可以通过内联方式处理</p><ol><li>栈上分配</li><li>同步消除</li><li>标量替换</li></ol><p>不能保证逃逸分析的性能高于它的消耗</p><h4 id="java与c-对比" tabindex="-1"><a class="header-anchor" href="#java与c-对比"><span>java与c++对比</span></a></h4><ol><li>即时编译器运行占用用户程序运行时间</li><li>java动态类型安全语言,做安全检查</li><li>java方法接收多态选择频率大于c++</li><li>java动态扩展语言</li><li>java对象在堆上分配对象，局部变量在栈上分配，c++多种分配</li></ol>`,89),l=[c];function i(u,r){return s(),a("div",null,l)}const m=n(o,[["render",i],["__file","7、编译器优化.html.vue"]]),v=JSON.parse('{"path":"/basis/jvm/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA/7%E3%80%81%E7%BC%96%E8%AF%91%E5%99%A8%E4%BC%98%E5%8C%96.html","title":"7、编译器优化","lang":"zh-CN","frontmatter":{"title":"7、编译器优化","date":"2024-04-11T07:06:06.000Z","category":["深入理解java虚拟机"],"tag":["jvm"],"description":"早期(编译器)优化 编译过程编译过程 com.sun.tools.javac.main.javaCompiler 1.解析与填充符号表 parseFile() token -> ast -> flow -> symbol 1、词法、语法分析 词法分析是将源代码的字符流转变为标记(Token)的集合 语法分析是根据Token序列构造抽象语法树ast的过程...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/jvm/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA/7%E3%80%81%E7%BC%96%E8%AF%91%E5%99%A8%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"7、编译器优化"}],["meta",{"property":"og:description","content":"早期(编译器)优化 编译过程编译过程 com.sun.tools.javac.main.javaCompiler 1.解析与填充符号表 parseFile() token -> ast -> flow -> symbol 1、词法、语法分析 词法分析是将源代码的字符流转变为标记(Token)的集合 语法分析是根据Token序列构造抽象语法树ast的过程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T23:07:42.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"jvm"}],["meta",{"property":"article:published_time","content":"2024-04-11T07:06:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T23:07:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7、编译器优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-11T07:06:06.000Z\\",\\"dateModified\\":\\"2024-04-14T23:07:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"早期(编译器)优化","slug":"早期-编译器-优化","link":"#早期-编译器-优化","children":[]},{"level":3,"title":"晚期(运行期)优化","slug":"晚期-运行期-优化","link":"#晚期-运行期-优化","children":[]}],"git":{"createdTime":1713136062000,"updatedTime":1713136062000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":6.39,"words":1918},"filePathRelative":"basis/jvm/深入理解java虚拟机/7、编译器优化.md","localizedDate":"2024年4月11日","excerpt":"<h3>早期(编译器)优化</h3>\\n<figure><figcaption>编译过程</figcaption></figure>\\n<p>com.sun.tools.javac.main.javaCompiler</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">void</span> <span class=\\"token function\\">compile</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">//准备过程: 初始化插入注解处理器</span>\\n  <span class=\\"token function\\">initProcessAnnotations</span><span class=\\"token punctuation\\">(</span>processors<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  delegateCompiler <span class=\\"token operator\\">=</span> <span class=\\"token function\\">processAnnotations</span><span class=\\"token punctuation\\">(</span>  <span class=\\"token comment\\">// 过程2 :执行注解处理</span>\\n      <span class=\\"token function\\">enterTrees</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">stopIfError</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">CompileStage</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">PARSE</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">//过程1:输入符号表</span>\\n      <span class=\\"token function\\">parseFile</span><span class=\\"token punctuation\\">(</span>sourceFileObjects<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 过程1：解析: 词法分析和语法分析</span>\\n      <span class=\\"token punctuation\\">,</span>classnames<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">//过程3: 分析及字节码生成</span>\\n  delegateCompiler<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">compile2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">compile2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">switch</span><span class=\\"token punctuation\\">(</span>tag<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token constant\\">BY_TODO</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>todo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isEmpty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n         <span class=\\"token function\\">generate</span><span class=\\"token punctuation\\">(</span> desugar <span class=\\"token punctuation\\">(</span> flow<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">attribute</span><span class=\\"token punctuation\\">(</span>todo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">// 生成字节码 | 解语法糖 | 数据流分析 | 符号标注</span>\\n      <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};
