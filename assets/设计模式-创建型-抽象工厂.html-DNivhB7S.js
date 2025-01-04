import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as a}from"./app-CtvCwAmI.js";const l={},r=a(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>抽象工厂：创建相关依赖对象家族，而无须指定具体类 </code></p><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h4><p>抽象工厂</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 制动
 */
public interface IBrake {
    void brake();
}

/**
 * 发动机
 */
public interface IEngine {
    void engine();
}

//轮胎
public interface ITire {
    void tire();
}

/**
 * 汽车工厂
 */
public interface ICarFactory {

    IBrake createBrake();
    IEngine createEngine();
    ITire createTire();

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体实现</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class NormalBrake implements IBrake {

    @Override
    public void brake() {

    }

}

public class NormalEngine implements IEngine {

    @Override
    public void engine() {

    }
}

public class NormalTire implements ITire {
    @Override
    public void tire() {

    }
}

public class NormalFactory implements ICarFactory {
    @Override
    public IBrake createBrake() {
        return new NormalBrake();
    }

    @Override
    public IEngine createEngine() {
        return new NormalEngine();
    }

    @Override
    public ITire createTire() {
        return new NormalTire();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端调用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 一簇抽象接口
 */
public class TestMain {

    public static void main(String[] args) {
        ICarFactory normalFactory = new NormalFactory();
        normalFactory.createBrake().brake();
        normalFactory.createEngine().engine();
        normalFactory.createTire().tire();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,11),d=[r];function s(t,c){return n(),i("div",null,d)}const u=e(l,[["render",s],["__file","设计模式-创建型-抽象工厂.html.vue"]]),o=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82.html","title":"设计模式-创建型-抽象工厂","lang":"zh-CN","frontmatter":{"title":"设计模式-创建型-抽象工厂","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 抽象工厂：创建相关依赖对象家族，而无须指定具体类 代码 抽象工厂 具体实现 客户端调用 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-创建型-抽象工厂"}],["meta",{"property":"og:description","content":"1、定义 抽象工厂：创建相关依赖对象家族，而无须指定具体类 代码 抽象工厂 具体实现 客户端调用 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-创建型-抽象工厂\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"basis/design-pattern/设计模式-创建型-抽象工厂.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>抽象工厂：创建相关依赖对象家族，而无须指定具体类 </code></p>\\n<h4>代码</h4>\\n<p>抽象工厂</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 制动\\n */\\npublic interface IBrake {\\n    void brake();\\n}\\n\\n/**\\n * 发动机\\n */\\npublic interface IEngine {\\n    void engine();\\n}\\n\\n//轮胎\\npublic interface ITire {\\n    void tire();\\n}\\n\\n/**\\n * 汽车工厂\\n */\\npublic interface ICarFactory {\\n\\n    IBrake createBrake();\\n    IEngine createEngine();\\n    ITire createTire();\\n\\n}\\n\\n</code></pre></div>","autoDesc":true}');export{u as comp,o as data};
