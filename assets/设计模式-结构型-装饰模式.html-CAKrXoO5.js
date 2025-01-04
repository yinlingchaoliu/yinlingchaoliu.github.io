import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as s}from"./app-CtvCwAmI.js";const r={},d=s(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>装饰模式：动态给对象添加新功能 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public abstract class Person {

    public abstract void dressed();

}

public class Girl extends Person {
    @Override
    public void dressed() {
        System.out.println(&quot;Girl穿了打底裤&quot;);
    }
}

public class PersonWrapper extends Person{

    private Person mPerson;

    public PersonWrapper(Person mPerson) {
        this.mPerson = mPerson;
    }

    @Override
    public void dressed() {
        mPerson.dressed();
    }

}

public class PersonClothSytle extends PersonWrapper{

    public PersonClothSytle(Person mPerson) {
        super( mPerson );
    }

    /**
     * 穿牛仔裤
     */
    private void dressJean(){
        System.out.println(&quot;穿牛仔裤&quot;);
    }

    /**
     * 穿鞋子
     */
    private void dressShoes(){
        System.out.println(&quot;穿鞋子 &quot;);
    }

    @Override
    public void dressed() {
        super.dressed();
        dressJean();
        dressShoes();
    }
}

public class TestMain {
    
    /**
     * 装饰模式
     * 层层给装饰方法添加新内容
     * eg context contextwrapper
     * 装饰模式比继承更加灵活性
     * @param args
     */
    public static void main(String[] args) {

        Person girl = new Girl();

        PersonWrapper wrapper = new PersonWrapper( girl );
        wrapper.dressed();

        PersonWrapper style = new PersonClothSytle( girl );
        style.dressed();

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),l=[d];function a(t,c){return n(),i("div",null,l)}const u=e(r,[["render",a],["__file","设计模式-结构型-装饰模式.html.vue"]]),m=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%BB%93%E6%9E%84%E5%9E%8B-%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F.html","title":"设计模式-结构型-装饰模式","lang":"zh-CN","frontmatter":{"title":"设计模式-结构型-装饰模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 装饰模式：动态给对象添加新功能 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%BB%93%E6%9E%84%E5%9E%8B-%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-结构型-装饰模式"}],["meta",{"property":"og:description","content":"1、定义 装饰模式：动态给对象添加新功能 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-结构型-装饰模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"basis/design-pattern/设计模式-结构型-装饰模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>装饰模式：动态给对象添加新功能 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public abstract class Person {\\n\\n    public abstract void dressed();\\n\\n}\\n\\npublic class Girl extends Person {\\n    @Override\\n    public void dressed() {\\n        System.out.println(\\"Girl穿了打底裤\\");\\n    }\\n}\\n\\npublic class PersonWrapper extends Person{\\n\\n    private Person mPerson;\\n\\n    public PersonWrapper(Person mPerson) {\\n        this.mPerson = mPerson;\\n    }\\n\\n    @Override\\n    public void dressed() {\\n        mPerson.dressed();\\n    }\\n\\n}\\n\\npublic class PersonClothSytle extends PersonWrapper{\\n\\n    public PersonClothSytle(Person mPerson) {\\n        super( mPerson );\\n    }\\n\\n    /**\\n     * 穿牛仔裤\\n     */\\n    private void dressJean(){\\n        System.out.println(\\"穿牛仔裤\\");\\n    }\\n\\n    /**\\n     * 穿鞋子\\n     */\\n    private void dressShoes(){\\n        System.out.println(\\"穿鞋子 \\");\\n    }\\n\\n    @Override\\n    public void dressed() {\\n        super.dressed();\\n        dressJean();\\n        dressShoes();\\n    }\\n}\\n\\npublic class TestMain {\\n    \\n    /**\\n     * 装饰模式\\n     * 层层给装饰方法添加新内容\\n     * eg context contextwrapper\\n     * 装饰模式比继承更加灵活性\\n     * @param args\\n     */\\n    public static void main(String[] args) {\\n\\n        Person girl = new Girl();\\n\\n        PersonWrapper wrapper = new PersonWrapper( girl );\\n        wrapper.dressed();\\n\\n        PersonWrapper style = new PersonClothSytle( girl );\\n        style.dressed();\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
