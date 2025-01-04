import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as t}from"./app-CtvCwAmI.js";const r={},s=t(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>策略模式：定义一系列算法，把它们封装起来，并且使它们可以互相替换 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface IMemberStrategy {
    //打折
    double discount(double price);
}

public class AdvancedMemberStrategy implements IMemberStrategy {
    @Override
    public double discount(double price) {
        return price * 0.8;
    }
}

public class IntermediateMemberStrategy implements IMemberStrategy {
    @Override
    public double discount(double price) {
        return price * 0.9;
    }
}

public class PrimaryMemberStrategy implements IMemberStrategy {
    @Override
    public double discount(double price) {
        return price * 1;
    }
}

public class Price {
    private IMemberStrategy strategy;

    public Price(IMemberStrategy strategy){
        this.strategy = strategy;
    }

    public double quote(double booksPrice){
        return strategy.discount(booksPrice);
    }

}

/**
 * 策略模式
 * 关注点在于行为的选择
 * 解决swich-case
 */
public class TestMain {

    public static void main(String[] args) {

        Price price = new Price( new PrimaryMemberStrategy() );
        price.quote( 100 );

        Price price1 = new Price( new IntermediateMemberStrategy() );
        price.quote( 100 );

        Price price2 = new Price( new AdvancedMemberStrategy() );
        price.quote( 100 );

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),a=[s];function c(d,l){return i(),n("div",null,a)}const b=e(r,[["render",c],["__file","设计模式-行为型-策略模式.html.vue"]]),v=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-策略模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-策略模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 策略模式：定义一系列算法，把它们封装起来，并且使它们可以互相替换 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-策略模式"}],["meta",{"property":"og:description","content":"1、定义 策略模式：定义一系列算法，把它们封装起来，并且使它们可以互相替换 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-策略模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"basis/design-pattern/设计模式-行为型-策略模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>策略模式：定义一系列算法，把它们封装起来，并且使它们可以互相替换 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public interface IMemberStrategy {\\n    //打折\\n    double discount(double price);\\n}\\n\\npublic class AdvancedMemberStrategy implements IMemberStrategy {\\n    @Override\\n    public double discount(double price) {\\n        return price * 0.8;\\n    }\\n}\\n\\npublic class IntermediateMemberStrategy implements IMemberStrategy {\\n    @Override\\n    public double discount(double price) {\\n        return price * 0.9;\\n    }\\n}\\n\\npublic class PrimaryMemberStrategy implements IMemberStrategy {\\n    @Override\\n    public double discount(double price) {\\n        return price * 1;\\n    }\\n}\\n\\npublic class Price {\\n    private IMemberStrategy strategy;\\n\\n    public Price(IMemberStrategy strategy){\\n        this.strategy = strategy;\\n    }\\n\\n    public double quote(double booksPrice){\\n        return strategy.discount(booksPrice);\\n    }\\n\\n}\\n\\n/**\\n * 策略模式\\n * 关注点在于行为的选择\\n * 解决swich-case\\n */\\npublic class TestMain {\\n\\n    public static void main(String[] args) {\\n\\n        Price price = new Price( new PrimaryMemberStrategy() );\\n        price.quote( 100 );\\n\\n        Price price1 = new Price( new IntermediateMemberStrategy() );\\n        price.quote( 100 );\\n\\n        Price price2 = new Price( new AdvancedMemberStrategy() );\\n        price.quote( 100 );\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{b as comp,v as data};
