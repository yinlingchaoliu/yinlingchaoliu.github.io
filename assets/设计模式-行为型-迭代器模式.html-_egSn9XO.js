import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,f as t}from"./app-CtvCwAmI.js";const l={},s=t(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>迭代器模式：一种遍历访问容器对象中各个元素的方法，不暴露该对象内部结构</code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 迭代器模式
 */
public interface Iterator&lt;T&gt; {

    /**
     * 是否有下一个元素
     * @return
     */
    boolean hasNext();

    /**
     * 返回当前元素，并将位置移至下一位
     */
    T next();

}

public interface Collection&lt;T&gt; {
    Iterator&lt;T&gt; iterator();
}

/**
 * list列表迭代
 * @param &lt;T&gt;
 */
public class ListIterator&lt;T&gt; implements Iterator&lt;T&gt;{

    private List&lt;T&gt; array;
    private int position;

    public ListIterator(List&lt;T&gt; list){
        this.array = list;
        position = 0;
    }

    @Override
    public boolean hasNext() {
        return !(position &gt; array.size() -1 || array.get( position ) == null);
    }

    @Override
    public T next() {
        T element = array.get( position );
        position ++ ;
        return element;
    }

}

/**
 * 雇员
 */
public class Employee {
    private String name;// 姓名
    private int age;// 年龄
    private String sex;// 性别
    private String position;// 职位

    public Employee(String name, int age, String sex, String position) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.position = position;
    }

    @Override
    public String toString() {
        return &quot;Employee{&quot; +
                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                &quot;, age=&quot; + age +
                &quot;, sex=&#39;&quot; + sex + &#39;\\&#39;&#39; +
                &quot;, position=&#39;&quot; + position + &#39;\\&#39;&#39; +
                &#39;}&#39;;
    }
}

/**
 * 公司
 */
public class CompanyLi implements Collection&lt;Employee&gt;{

    private Iterator&lt;Employee&gt; iterator;

    public CompanyLi(){
        List&lt;Employee&gt; list = new ArrayList&lt;&gt;(  );
        list.add(new Employee(&quot;小民&quot;, 26, &quot;男&quot;, &quot;程序猿&quot;));
        list.add(new Employee(&quot;小芸&quot;, 22, &quot;女&quot;, &quot;测试&quot;));
        list.add(new Employee(&quot;小方&quot;, 18, &quot;女&quot;, &quot;测试&quot;));
        list.add(new Employee(&quot;可儿&quot;, 21, &quot;女&quot;, &quot;设计&quot;));
        iterator = new ListIterator&lt;&gt;( list );
    }

    @Override
    public Iterator&lt;Employee&gt; iterator() {
        return iterator;
    }
}

/**
 *
 * 迭代器模式
 *
 * 遍历又不暴露细节
 *
 * 支持对容器对象的多种遍历。弱化了容器类与遍历算法之间的关系
 *
 */
public class TestMain {

    public static void main(String[] args) {

        CompanyLi companyLi = new CompanyLi();

        //迭代
        Iterator iterator = companyLi.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next().toString());
        }

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),a=[s];function r(d,v){return i(),e("div",null,a)}const m=n(l,[["render",r],["__file","设计模式-行为型-迭代器模式.html.vue"]]),u=JSON.parse(`{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-迭代器模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-迭代器模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 迭代器模式：一种遍历访问容器对象中各个元素的方法，不暴露该对象内部结构 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-迭代器模式"}],["meta",{"property":"og:description","content":"1、定义 迭代器模式：一种遍历访问容器对象中各个元素的方法，不暴露该对象内部结构 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-迭代器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"basis/design-pattern/设计模式-行为型-迭代器模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>迭代器模式：一种遍历访问容器对象中各个元素的方法，不暴露该对象内部结构</code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 迭代器模式\\n */\\npublic interface Iterator&lt;T&gt; {\\n\\n    /**\\n     * 是否有下一个元素\\n     * @return\\n     */\\n    boolean hasNext();\\n\\n    /**\\n     * 返回当前元素，并将位置移至下一位\\n     */\\n    T next();\\n\\n}\\n\\npublic interface Collection&lt;T&gt; {\\n    Iterator&lt;T&gt; iterator();\\n}\\n\\n/**\\n * list列表迭代\\n * @param &lt;T&gt;\\n */\\npublic class ListIterator&lt;T&gt; implements Iterator&lt;T&gt;{\\n\\n    private List&lt;T&gt; array;\\n    private int position;\\n\\n    public ListIterator(List&lt;T&gt; list){\\n        this.array = list;\\n        position = 0;\\n    }\\n\\n    @Override\\n    public boolean hasNext() {\\n        return !(position &gt; array.size() -1 || array.get( position ) == null);\\n    }\\n\\n    @Override\\n    public T next() {\\n        T element = array.get( position );\\n        position ++ ;\\n        return element;\\n    }\\n\\n}\\n\\n/**\\n * 雇员\\n */\\npublic class Employee {\\n    private String name;// 姓名\\n    private int age;// 年龄\\n    private String sex;// 性别\\n    private String position;// 职位\\n\\n    public Employee(String name, int age, String sex, String position) {\\n        this.name = name;\\n        this.age = age;\\n        this.sex = sex;\\n        this.position = position;\\n    }\\n\\n    @Override\\n    public String toString() {\\n        return \\"Employee{\\" +\\n                \\"name='\\" + name + '\\\\'' +\\n                \\", age=\\" + age +\\n                \\", sex='\\" + sex + '\\\\'' +\\n                \\", position='\\" + position + '\\\\'' +\\n                '}';\\n    }\\n}\\n\\n/**\\n * 公司\\n */\\npublic class CompanyLi implements Collection&lt;Employee&gt;{\\n\\n    private Iterator&lt;Employee&gt; iterator;\\n\\n    public CompanyLi(){\\n        List&lt;Employee&gt; list = new ArrayList&lt;&gt;(  );\\n        list.add(new Employee(\\"小民\\", 26, \\"男\\", \\"程序猿\\"));\\n        list.add(new Employee(\\"小芸\\", 22, \\"女\\", \\"测试\\"));\\n        list.add(new Employee(\\"小方\\", 18, \\"女\\", \\"测试\\"));\\n        list.add(new Employee(\\"可儿\\", 21, \\"女\\", \\"设计\\"));\\n        iterator = new ListIterator&lt;&gt;( list );\\n    }\\n\\n    @Override\\n    public Iterator&lt;Employee&gt; iterator() {\\n        return iterator;\\n    }\\n}\\n\\n/**\\n *\\n * 迭代器模式\\n *\\n * 遍历又不暴露细节\\n *\\n * 支持对容器对象的多种遍历。弱化了容器类与遍历算法之间的关系\\n *\\n */\\npublic class TestMain {\\n\\n    public static void main(String[] args) {\\n\\n        CompanyLi companyLi = new CompanyLi();\\n\\n        //迭代\\n        Iterator iterator = companyLi.iterator();\\n        while (iterator.hasNext()){\\n            System.out.println(iterator.next().toString());\\n        }\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}`);export{m as comp,u as data};
