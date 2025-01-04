import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as d}from"./app-CtvCwAmI.js";const l={},s=d(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>建造者模式：封装一个复杂对象过程，按照步骤构建对象 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><p>1、普通写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 构件
 */
public interface Builder {

    void buildPartA();
    void buildPartB();
    void buildPartC();

}

/**
 * 构件实现
 */
public class ConcreteBuilder implements Builder {

    @Override
    public void buildPartA() {

    }

    @Override
    public void buildPartB() {

    }

    @Override
    public void buildPartC() {

    }
}

/**
 * 建造者
 */
public class Director {

    private Builder builder;

    public  Director(Builder builder) {
        this.builder = builder;
    }

    /**
     * 策略
     */
    public void constructProduct(){
        builder.buildPartA();
        builder.buildPartB();
        builder.buildPartC();
    }

}

public class TestMain {

    public static void main(String[] args) {

        ConcreteBuilder builder = new ConcreteBuilder();
        Director director = new Director( builder );
        director.constructProduct();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、惯用写法，省略构建者</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 建造者 省略Driector
 * 优点 动态参数配置
 */
public class Request {

    private String body;
    private String head;
    private String parm;

    public void setBody(String body) {
        this.body = body;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public void setParm(String parm) {
        this.parm = parm;
    }

    /**
     *
     */
    public static class Builder{

        private String body;
        private String head;
        private String parm;

        public Builder setBody(String body) {
            this.body = body;
            return this;
        }

        public Builder setHead(String head) {
            this.head = head;
            return this;
        }

        public Builder setParm(String parm) {
            this.parm = parm;
            return this;
        }

        public Request create(){
            Request request = new Request();
            request.setHead( head );
            request.setParm( parm );
            request.setBody( body );
            return request;
        }
    }
}

public class TestMain {

    public static void main(String[] args) {
        Request request = new Request.Builder()
                .setHead( &quot;head&quot; )
                .setParm( &quot;parm&quot; )
                .setBody( &quot;body&quot; )
                .create();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,9),r=[s];function a(t,v){return e(),n("div",null,r)}const b=i(l,[["render",a],["__file","设计模式-创建型-建造者模式.html.vue"]]),m=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F.html","title":"设计模式-创建型-建造者模式","lang":"zh-CN","frontmatter":{"title":"设计模式-创建型-建造者模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 建造者模式：封装一个复杂对象过程，按照步骤构建对象 写法 1、普通写法 2、惯用写法，省略构建者 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-创建型-建造者模式"}],["meta",{"property":"og:description","content":"1、定义 建造者模式：封装一个复杂对象过程，按照步骤构建对象 写法 1、普通写法 2、惯用写法，省略构建者 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-创建型-建造者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"basis/design-pattern/设计模式-创建型-建造者模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>建造者模式：封装一个复杂对象过程，按照步骤构建对象 </code></p>\\n<h4>写法</h4>\\n<p>1、普通写法</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 构件\\n */\\npublic interface Builder {\\n\\n    void buildPartA();\\n    void buildPartB();\\n    void buildPartC();\\n\\n}\\n\\n/**\\n * 构件实现\\n */\\npublic class ConcreteBuilder implements Builder {\\n\\n    @Override\\n    public void buildPartA() {\\n\\n    }\\n\\n    @Override\\n    public void buildPartB() {\\n\\n    }\\n\\n    @Override\\n    public void buildPartC() {\\n\\n    }\\n}\\n\\n/**\\n * 建造者\\n */\\npublic class Director {\\n\\n    private Builder builder;\\n\\n    public  Director(Builder builder) {\\n        this.builder = builder;\\n    }\\n\\n    /**\\n     * 策略\\n     */\\n    public void constructProduct(){\\n        builder.buildPartA();\\n        builder.buildPartB();\\n        builder.buildPartC();\\n    }\\n\\n}\\n\\npublic class TestMain {\\n\\n    public static void main(String[] args) {\\n\\n        ConcreteBuilder builder = new ConcreteBuilder();\\n        Director director = new Director( builder );\\n        director.constructProduct();\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{b as comp,m as data};
