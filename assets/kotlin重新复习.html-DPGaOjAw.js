import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as a}from"./app-CtvCwAmI.js";const i={},l=a(`<p>####温故知新 将好的用法记录下来 流水账式记录</p><p>kotlin哲学 实用、精简、安全</p><p>原则：(DRY) Don\`t Repeat Yourself</p><p>表达主体</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun max(a:Int, b:Int):Int = if(a&gt;b) a else b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>var 变量 val 不变量</p><p>类和属性</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Person(val name:String)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>任意对象使用when，用when代替复杂if</p><p>is 类型监测，智能类型转换</p><p>ranges</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val oneToTen = 1..10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kotlin遍历几种写法</p><p>in 检查范围</p><p>异常处理 ：try作为表达式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun readNum(reader:BufferedReader){
    var number  = try{
        Interger.parseInt(reader.readLine())
    }catch(e:Exception){
        return null
    }
    printlin(number)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>list函数 last() max()</p><p>类扩展 :顶层属性扩展</p><div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code><span class="token keyword">package</span> strings
<span class="token keyword">fun</span> String<span class="token punctuation">.</span><span class="token function">lastChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>Char <span class="token operator">=</span> <span class="token keyword">get</span><span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kotlin调用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var c = &quot;abc&quot;.lastChar()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>java调用扩展函数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>char c = StringUtilKt.lastChar(&quot;abc&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多态在kotlin中失效的</p><p>可变参数 vararg</p><p>元组 pairs</p><p>split</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;12.345-6.A&quot;.spilt(&quot;.&quot;.toRegex())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kotlin接口： 带有默认实现方法</p><p>open final abstract修饰符，默认final类型</p><p>可见性 public默认<br> internal 模块内可见 protected 子类可见 private 类内部可见</p><p>初始化类：主构造器和初始化器</p><p>constructor init{</p><p>}</p><p>次构造器</p><p>super(ctx)=&gt;this(ctx) get() set(value:String)</p><p>数据类</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>data class Client(val name:String , val code :Int)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>copy 拷贝数据</p><p>by类委托 减少大量不必要实现</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
class DelegateCollection&lt;T&gt;(
    innerList:Conllection&lt;T&gt; = ArrayList&lt;T&gt;()
):Conllection&lt;T&gt; by innerList{}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>object 单例类 无构造函数</p><p>伴生对象：访问静态函数，静态成员</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class A{

    companion object{
          fun bar(){
          println(&quot;hello&quot;)
          }
    }

}

A.bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名内部类 1、对象表达式 object : Clickable{</p><p>}</p><p>2、 lambda</p><p>lambda 应用 1、集合</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var list =listOf(Person(&quot;a&quot;,12), Person(&quot;b&quot;,14))
list.maxBy{ it.age }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、语法表达式 <img src="https://upload-images.jianshu.io/upload_images/5526061-3e5584d21dab45f0.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="语法表达式" loading="lazy"></p><p>成员引用 people::age</p><p>filter 移除不想要函数 map 对合集每个元素应用给定函数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var people = listOf(Person(&quot;Alice&quot;,20),Person(&quot;Bob&quot;,31))
people.filter{it.age &gt; 30}
output=&gt;[Person(&quot;Bob&quot;,31)]

var list = listOf(1,2,3,4)
list.map{ it * it }
[1,4,9,16]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对集合应用预言，条件判定 all 所有 any 任意 count 符合数量 find 返回符合第一个</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var people = listOf(Person(&quot;Alice&quot;,20),Person(&quot;Bob&quot;,31))

var canBe27 ={p:Person-&gt;p.age &lt;=27}

people.all(canBe27)
people.any(canBe27)
people.count(canBe27)
people.find(canBe27)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>groupBy 一个将列表转化为多组映射</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var people = listOf(Person(&quot;Alice&quot;,20),Person(&quot;Bob&quot;,31),
Person(&quot;Carol&quot;,31))

//分组
people.groupBy{it.age}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flatMap 数据变换重新排列 函数变换，多个列表合并一个集合</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val strings = listOf(&quot;abcc&quot;,&quot;deffggrr&quot;)
println(strings.flatMap{it.toList()})

[a, b, c, c, d, e, f, f, g, g, r, r]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//转换为序列，数据量大时，会更高效<br> sequence</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>people.asSequence()  //转换为序列
            .map(Person::name)
            .filter{ it.startsWith(&quot;A&quot;)}
            .toList() //序列转换成列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化，先用filter,后map</p><p>with函数 建造者 apply函数</p>`,63),s=[l];function d(r,o){return t(),n("div",null,s)}const u=e(i,[["render",d],["__file","kotlin重新复习.html.vue"]]),v=JSON.parse('{"path":"/fe/android/kotlin/kotlin%E9%87%8D%E6%96%B0%E5%A4%8D%E4%B9%A0.html","title":"kotlin重新复习","lang":"zh-CN","frontmatter":{"title":"kotlin重新复习","date":"2024-03-24T11:47:50.000Z","category":["kotlin"],"tag":["archive"],"description":"####温故知新 将好的用法记录下来 流水账式记录 kotlin哲学 实用、精简、安全 原则：(DRY) Don`t Repeat Yourself 表达主体 var 变量 val 不变量 类和属性 任意对象使用when，用when代替复杂if is 类型监测，智能类型转换 ranges kotlin遍历几种写法 in 检查范围 异常处理 ：try作为...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/kotlin/kotlin%E9%87%8D%E6%96%B0%E5%A4%8D%E4%B9%A0.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"kotlin重新复习"}],["meta",{"property":"og:description","content":"####温故知新 将好的用法记录下来 流水账式记录 kotlin哲学 实用、精简、安全 原则：(DRY) Don`t Repeat Yourself 表达主体 var 变量 val 不变量 类和属性 任意对象使用when，用when代替复杂if is 类型监测，智能类型转换 ranges kotlin遍历几种写法 in 检查范围 异常处理 ：try作为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-3e5584d21dab45f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:37:40.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kotlin重新复习\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-3e5584d21dab45f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-26T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711445860000,"updatedTime":1711445860000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"fe/android/kotlin/kotlin重新复习.md","localizedDate":"2024年3月24日","excerpt":"<p>####温故知新\\n将好的用法记录下来\\n流水账式记录</p>\\n<p>kotlin哲学\\n实用、精简、安全</p>\\n<p>原则：(DRY)\\nDon`t Repeat Yourself</p>\\n<p>表达主体</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>fun max(a:Int, b:Int):Int = if(a&gt;b) a else b\\n</code></pre></div><p>var 变量\\nval 不变量</p>\\n<p>类和属性</p>","autoDesc":true}');export{u as comp,v as data};
