import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as l}from"./app-B6plLX71.js";const t={},a=l(`<p>####kotlin模拟运行器 https://try.kotlinlang.org/</p><p>####惯用语法</p><ul><li>函数定义</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//有返回值
fun sum(a: Int, b: Int): Int {
    return a + b
}

//无返回值
fun printSum(a: Int, b: Int) {
println(&quot;sum of $a and $b is \${a + b}&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义变量</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//只读
val a: Int = 1

//变量
var x = 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串模板 $</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var a = 1 
val s1 = &quot;a is $a&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>条件表达式统一写法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (a &gt; b) {
        return a
} else {
        return b 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>空值校验 null</li></ul><p>当某个变量的值可以为 null 的时候，必须在声明处的类型后添加 ? 来标识该引用可为空</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val str: String ?= null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>数据类型检测</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun getStringLength(obj: Any): Int?{
    if(obj is String){
        return obj.length
    }
    return null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用for循环</li></ul><p>1、类似java增强for循环</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//推荐这种写法
val items = listOf(&quot;apple&quot;, &quot;banana&quot;, &quot;kiwifruit&quot;) 
for (item in items) {
    println(item)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val items = listOf(&quot;apple&quot;, &quot;banana&quot;, &quot;kiwifruit&quot;) 
for (index in items.indices) 
{
    println(&quot;item at $index is \${items[index]}&quot;) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>for (i in array.indices) {
    println(array[i])
}

for ((index, value) in array.withIndex()) { 
    println(&quot;the element at $index is $value&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while循环方法 优点：对index进行精确控制</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val items = listOf(&quot;apple&quot;, &quot;banana&quot;, &quot;kiwifruit&quot;) 
var index = 0
while (index &lt; items.size) {
    println(&quot;item at $index is \${items[index]}&quot;)
    index++ 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区间方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//升序
val n = 11
for (x in 1..n step 2) 
{ 
    print(x)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//降序
for (x in 9 downTo 0 step 3) 
{
    print(x) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>区间检测</li></ul><p>1、是否在某范围内</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val x = 10
val y = 9
if (x in 1..y+1) {
    println(&quot;fits in range&quot;) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>when 表达式 (取代switch)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>when (x) {
    1 -&gt; print(&quot;x == 1&quot;) 
    2 -&gt; print(&quot;x == 2&quot;) 
    else -&gt; { // default
        print(&quot;x is neither 1 nor 2&quot;) 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>集合遍历</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//推荐用法
for (item in items) {
    println(item)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//推荐用法
for ((key, value) in map) {
    println(&quot;$key -&gt; $value&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或 判断集合是否包含</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>when {
    &quot;orange&quot; in items -&gt; println(&quot;juicy&quot;)
    &quot;apple&quot; in items -&gt; println(&quot;apple is fine too&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或 使用 lambda 表达式来过滤(filter)与映射(map)集合:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val fruits = listOf(&quot;banana&quot;, &quot;avocado&quot;, &quot;apple&quot;, &quot;kiwifruit&quot;)

fruits
    .filter{ it.startsWith(&quot;a&quot;) }
    .sortedBy { it }
    .map { it.toUpperCase() }
    .forEach { println(it) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建对象 不需要“new”关键字</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> val rectangle = Rectangle(5.0, 2.0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####习惯用法</p><ul><li>创建实体类</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//推荐实体类要有默认参数
data class Customer(val name: String = &quot;&quot;, var email: String = &quot;&quot;)

var customer: Customer = Customer(&quot;chentong&quot;,&quot;7045xxx&quot;)
println(customer.toString())

var customer01: Customer = Customer(name=&quot;kk&quot;)
customer01.email = &quot;1986xxx&quot;    println(customer01.toString())

//强烈推荐这种写法 语义清晰
var customer02: Customer = Customer(name=&quot;tong&quot;,email=&quot;890xxx&quot;)
println(customer02.toString())

var customer03: Customer = Customer(&quot;03&quot;)
customer03.email = &quot;1986xxx&quot;
println(customer03.toString())

var customer04: Customer = Customer()
println(customer04.toString())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）自带getter、setter、toString、hashcode方法 2）val(只读) 没有setter方法 3）如果生成的类需要含有一个无参的构造函数，则所有的属性必须指定默认值</p><ul><li>函数默认参数</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun foo(a: Int = 0, b: String = &quot;&quot;) { ...... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>过滤 list(filter 内是判断条件)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val listdata = listOf(1, 2, 3, -1)
println(listdata.toString())
    
var newdata = listdata.filter{ it &gt; 0 } 
println(newdata.toString())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>map创建</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//打印map
fun printMap(map: Map&lt;String,Any?&gt;){
    for ((key, value) in map) {
        println(&quot;$key -&gt; $value&quot;)
    }
}

//强烈推荐第一种写法 语义清晰
var map = HashMap&lt;String,Any?&gt;()
map.put(&quot;chen&quot;,&quot;tong&quot;)
map.put(&quot;yang&quot;,&quot;yue&quot;)
printMap(map)

var map01 = mutableMapOf&lt;String, Any?&gt;()
map01[&quot;chen01&quot;] = &quot;tong&quot;
map01[&quot;yang01&quot;] = &quot;yue&quot;
printMap(map01)

var map02: HashMap&lt;String,String&gt; = HashMap()
map02.put(&quot;chen02&quot;,&quot;tong&quot;)
map02.put(&quot;yang02&quot;,&quot;yue&quot;)
printMap(map02)

var chen03 = &quot;tong&quot;
var yang03 =&quot;yue&quot;
var yuan03 = &quot;dong&quot;
//左key,右value    
var map03 = mutableMapOf(&quot;chen03&quot; to chen03, &quot;yang03&quot; to yang03,&quot;yuan03&quot; to yuan03)
printMap(map03)

val map04: MutableMap&lt;String, Any?&gt; = mutableMapOf()
map04.put(&quot;chen04&quot;,&quot;tong&quot;)
map04.put(&quot;yang04&quot;,&quot;yue&quot;)
map04[&quot;yuan04&quot;] = &quot;dong&quot;
printMap(map04)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>强烈推荐第一种写法</strong> 原因： 1、简单少，语法清晰， 2、与java写法一致，上手成本低，易于理解 3、分辨map是到底哪种实现方式很重要</p><ul><li>list创建</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//list打印
fun printList(list: List&lt;Any?&gt;){
    for (item in list) {
        println(&quot;$item&quot;)
    }
    println(&quot;===end===&quot;)
}

val lists = listOf(&quot;lists&quot;, &quot;123&quot;, &quot;456&quot;) 
//没有add方法
printList(lists)

//强烈推荐这种写法
var lists01 = ArrayList&lt;String&gt;()
lists01.add(&quot;lists01&quot;)
lists01.add(&quot;banana&quot;)    
printList(lists01)

val lists02: MutableList&lt;String&gt; = mutableListOf(&quot;lists02&quot;,&quot;02121&quot;)
lists02.add(&quot;testadd&quot;)
printList(lists02)

//推荐这种写法
var lists03: MutableList&lt;String&gt; = mutableListOf()
lists03.add(&quot;lists03&quot;)
lists03.add(&quot;676767&quot;)
printList(lists03)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐第2、4种写法，清晰，简洁</strong></p><ul><li>只读list map</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val list = listOf(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;)

val map = mapOf(&quot;a&quot; to 1, &quot;b&quot; to 2, &quot;c&quot; to 3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>访问map</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var map = HashMap&lt;String,String&gt;()
map.put(&quot;chen&quot;,&quot;tong&quot;)
map[&quot;zhang&quot;] = &quot;san&quot;     

println(map.get(&quot;zhang&quot;))    
println(map.get(&quot;chen&quot;))

println(map[&quot;zhang&quot;]) 
println(map[&quot;chen&quot;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速访问推荐下面👇</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>println(map[&quot;key&quot;]) 
map[&quot;key&quot;] = value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>延迟属性</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val p: String by lazy { 
// 计算该字符串
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建单例</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>object Resource {
    val name = &quot;Name&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####安全判断</p><ul><li>if not null缩写</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val lists = listOf(&quot;123&quot;)
println(lists?.size)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>if not null{} else{} 缩写</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val lists = listOf(&quot;123&quot;)
println(lists?.size ?: &quot;empty&quot;)
println(&quot;内容&quot; ?: &quot;empty&quot;)
println(null ?: &quot;empty&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>if not null</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val lists = listOf(&quot;123&quot;)
lists?.let {
	// 代码会执行到此处, 假如data不为null
    println(lists.size)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回 when 表达式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun transform(color: String): Int { 
    return when (color) {
        &quot;Red&quot; -&gt; 0
        &quot;Green&quot; -&gt; 1
        &quot;Blue&quot; -&gt; 2
        else -&gt; throw IllegalArgumentException(&quot;Invalid color param value&quot;)
	} 
}

println(transform(&quot;Red&quot;))

println(transform(&quot;1&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单表达式用法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun theAnswer() = 42
//等于
fun theAnswer(): Int {
    return 42
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一个对象调用多种方法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Turtle {
    fun penDown(){
    	println(&quot;penDown()&quot;)
    }
	
    fun penUp(){
    	println(&quot;penUp()&quot;)
	}
    
	fun turn(degrees: Double){
    	println(&quot;turn($degrees)&quot; )
	}
    
	fun forward(pixels: Double){
    	println(&quot;forward($pixels)&quot;)
	}
}

val myTurtle = Turtle()
with(myTurtle) { // 画一个 100 像素的正方形
    penDown()
	for(i in 1..4) 
    {
        forward(100.0)
        turn(90.0)
    }
    penUp() 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>优先使用try 、if 与 when表达形式</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>return if (x) foo() else bar()

return when(x) {
    0 -&gt; &quot;zero&quot;
    else -&gt; &quot;nonzero&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面代码不建议使用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (x)
    return foo()
else
    return bar()

when(x) {
    0 -&gt; return &quot;zero&quot;
    else -&gt; return &quot;nonzero&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 适用两个条件 when 适用多个条件</p><p>####基础知识 数字面值中间加下划线，易于读 val oneMillion = 1_000_000</p><p>kotlin 不使用位运算</p><p>数组Array</p><ul><li>if 表达式 会返回值，或代码块中值</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 传统用法
var max = a
if (a &lt; b) max = b

// 作为表达式
val max = if (a &gt; b) a else b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*for循环 补充</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>for (i in array.indices) {
    println(array[i])
}

for ((index, value) in array.withIndex()) { 
    println(&quot;the element at $index is $value&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>标签 @ 即跳转地址 不建议采用 合理使用 return 、break、continue取代</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fun foo() {
    listOf(1, 2, 3, 4, 5).forEach lit@{
        if (it == 3) return@lit // 局部返回到该 lambda 表达式的调用者，即 forEach 循环
        print(it) 
    }
	print(&quot; done with explicit label&quot;) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####类与对象</p><ul><li>类的写法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class  Person{
    var name: String = &quot;chentong&quot; 
    
    //主构造函数    
    constructor()
    //主构造函数 初始化代码
    
    init{
        name = name + &quot; from Init&quot;
    }
    
    constructor(name: String){
        this.name = name+&quot; from name&quot;
    }
    
    constructor(name: String, from: String){
        this.name = name + &quot; from &quot; + from
    }

}  

var person = Person()
println(person.name)
    
var person01 = Person(&quot;yan&quot;)
println(person01.name)

var person02 = Person(&quot;kun&quot;,&quot; China &quot;)
println(person02.name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>类继承</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>open class Base(p: Int)
class Derived(p: Int) : Base(p)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法覆盖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>open class Base {
    open fun v() { ... }
    fun nv() { ... }
}
class Derived() : Base() {
    override fun v() { ... }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>属性覆盖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>open class Foo {
open val x: Int get() { ...... }
}
class Bar1 : Foo() {
    override val x: Int = ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类不覆盖基类open成员</p><p>#####抽象类</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>open class Base {
    open fun f() {}
}
abstract class Derived : Base() { override abstract fun f()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####接口</p><p><strong>接口不建议写方法体，也不建议写属性字段</strong><strong>原则就是清晰，易懂无歧义</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface MyInterface { 
    fun bar()
    fun foo() {// 可选的方法体} 
}

class Child : MyInterface { 
    override fun bar() {// 方法体 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####可见性修饰 private :文件内可见 protected :只在本类与子类可见，外界引用不可见 internal:能⻅到类声明的本模块内的任何客戶端都可⻅其 internal 成员（相同模块） public ：默认是public</p><p>#####扩展</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class C {
    fun foo(){println(&quot;member&quot;) }
}

fun C.foo(i: Int) {println(&quot;extension&quot;)}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####泛型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> class Box&lt;T&gt;(t: T) {
     var value = t
}

val box = Box&lt;Int&gt;()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>形变 in/out 解决通配符问题</p><p>类型擦除</p><p>延时属性lazy 线程安全的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>val lazyValue: String by lazy { 
    println(&quot;computed!&quot;) &quot;Hello&quot;
}

fun main(args: Array&lt;String&gt;) {
    println(lazyValue)  
    println(lazyValue)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,118),s=[a];function d(u,r){return i(),n("div",null,s)}const m=e(t,[["render",d],["__file","kotlin经典用法.html.vue"]]),o=JSON.parse('{"path":"/fe/android/kotlin/kotlin%E7%BB%8F%E5%85%B8%E7%94%A8%E6%B3%95.html","title":"kotlin经典用法","lang":"zh-CN","frontmatter":{"title":"kotlin经典用法","date":"2024-03-24T11:47:50.000Z","category":["kotlin"],"tag":["archive"],"description":"####kotlin模拟运行器 https://try.kotlinlang.org/ ####惯用语法 函数定义 定义变量 字符串模板 $ 条件表达式统一写法 空值校验 null 当某个变量的值可以为 null 的时候，必须在声明处的类型后添加 ? 来标识该引用可为空 数据类型检测 使用for循环 1、类似java增强for循环 或 或 while循...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/kotlin/kotlin%E7%BB%8F%E5%85%B8%E7%94%A8%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"kotlin经典用法"}],["meta",{"property":"og:description","content":"####kotlin模拟运行器 https://try.kotlinlang.org/ ####惯用语法 函数定义 定义变量 字符串模板 $ 条件表达式统一写法 空值校验 null 当某个变量的值可以为 null 的时候，必须在声明处的类型后添加 ? 来标识该引用可为空 数据类型检测 使用for循环 1、类似java增强for循环 或 或 while循..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:37:40.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kotlin经典用法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-26T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711445860000,"updatedTime":1711445860000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":5.77,"words":1731},"filePathRelative":"fe/android/kotlin/kotlin经典用法.md","localizedDate":"2024年3月24日","excerpt":"<p>####kotlin模拟运行器\\nhttps://try.kotlinlang.org/</p>\\n<p>####惯用语法</p>\\n<ul>\\n<li>函数定义</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>//有返回值\\nfun sum(a: Int, b: Int): Int {\\n    return a + b\\n}\\n\\n//无返回值\\nfun printSum(a: Int, b: Int) {\\nprintln(\\"sum of $a and $b is ${a + b}\\")\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
