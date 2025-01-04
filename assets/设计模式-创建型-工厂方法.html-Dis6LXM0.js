import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as d}from"./app-CtvCwAmI.js";const s={},t=d(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>工厂方法：定义一个用于创建对象的接口，让子类决定实例化那个类</code></p><h4 id="_2、例子" tabindex="-1"><a class="header-anchor" href="#_2、例子"><span>2、例子</span></a></h4><h5 id="_1、写法一" tabindex="-1"><a class="header-anchor" href="#_1、写法一"><span>1、写法一</span></a></h5><p>产品</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface Product {
    void method();
}

public class ProductA implements Product{
    @Override
    public void method() {

    }
}

public class ProductB implements Product{
    @Override
    public void method() {
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 工厂
 */
public interface Factory {
    Product createProduct();
}

public class FactoryA implements Factory{
    @Override
    public Product createProduct() {
        return new ProductA();
    }
}

public class FactoryB implements Factory{
    @Override
    public Product createProduct() {
        return new ProductB();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端调用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 让子类决定实例化那个类
 * 工厂方法
 */
public class TestMain {

    public static void main(String[] args) {
        Factory factory = new FactoryA();
        Product product = factory.createProduct();
        product.method();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、方法二-用反射" tabindex="-1"><a class="header-anchor" href="#_2、方法二-用反射"><span>2、方法二 用反射</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface Product {
    void method();
}

public class ProductA implements Product {
    @Override
    public void method() {

    }
}

/**
 * 工厂
 */
public interface Factory {
    &lt;T extends Product&gt; T createProduct(Class&lt;T&gt; clazz);
}

public class ConcreteFactory implements Factory{
    @Override
    public &lt;T extends Product&gt; T createProduct(Class&lt;T&gt; clazz) {
        Product product = null;
        try {
            product = (Product) Class.forName( clazz.getName() ).newInstance();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return (T)product;
    }
}

/**
 * 让子类决定实例化那个类
 * 工厂方法
 */
public class TestMain {

    public static void main(String[] args) {
        Factory factory = new ConcreteFactory();
        Product product = factory.createProduct( ProductA.class );
        product.method();
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、代码示例" tabindex="-1"><a class="header-anchor" href="#_3、代码示例"><span>3、代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,13),a=[t];function l(c,r){return i(),n("div",null,a)}const m=e(s,[["render",l],["__file","设计模式-创建型-工厂方法.html.vue"]]),o=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95.html","title":"设计模式-创建型-工厂方法","lang":"zh-CN","frontmatter":{"title":"设计模式-创建型-工厂方法","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 工厂方法：定义一个用于创建对象的接口，让子类决定实例化那个类 2、例子 1、写法一 产品 客户端调用 2、方法二 用反射 3、代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-创建型-工厂方法"}],["meta",{"property":"og:description","content":"1、定义 工厂方法：定义一个用于创建对象的接口，让子类决定实例化那个类 2、例子 1、写法一 产品 客户端调用 2、方法二 用反射 3、代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-创建型-工厂方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":280},"filePathRelative":"basis/design-pattern/设计模式-创建型-工厂方法.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>工厂方法：定义一个用于创建对象的接口，让子类决定实例化那个类</code></p>\\n<h4>2、例子</h4>\\n<h5>1、写法一</h5>\\n<p>产品</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public interface Product {\\n    void method();\\n}\\n\\npublic class ProductA implements Product{\\n    @Override\\n    public void method() {\\n\\n    }\\n}\\n\\npublic class ProductB implements Product{\\n    @Override\\n    public void method() {\\n        \\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
