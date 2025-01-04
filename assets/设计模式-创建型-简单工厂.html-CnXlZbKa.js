import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as a}from"./app-CtvCwAmI.js";const s={},l=a(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>简单工厂模式：一个工厂类根据传入参数决定创建哪一种产品实例 </code></p><h4 id="uml类图" tabindex="-1"><a class="header-anchor" href="#uml类图"><span>uml类图</span></a></h4><figure><img src="https://upload-images.jianshu.io/upload_images/5526061-319b961350ea7970.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="简单工厂" tabindex="0" loading="lazy"><figcaption>简单工厂</figcaption></figure><h4 id="_2、例子" tabindex="-1"><a class="header-anchor" href="#_2、例子"><span>2、例子</span></a></h4><p>定义不同类型车</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//定义车
public interface ICar {
    void drive();
}

//吉普车
public class JeepCar implements ICar {
    @Override
    public void drive() {
        System.out.println( &quot;吉普车&quot; );
    }
}
//小轿车
public class SmallCar implements ICar {
    @Override
    public void drive() {
        System.out.println( &quot;小轿车&quot; );
    }
}

public class SportCar implements ICar {
    @Override
    public void drive() {
        System.out.println( &quot;运动车&quot; );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单工厂</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//定义车类型
public enum CarType {
    SPORT_CAR,
    JEEP_CAR,
    SMALL_CAR
}

//工厂
public class CarFactory {

    public static ICar createCar(CarType type){
        switch (type){
            case SMALL_CAR:
                return new SmallCar();
            case JEEP_CAR:
                return new JeepCar();
            case SPORT_CAR:
                return new SportCar();
            default:
                return new SmallCar();
        }
    }

}

/**
 *
 * 简单工厂
 *
 */
public class TestMain {

    public static void main(String[] args){

        ICar smallCar = CarFactory.createCar( CarType.SMALL_CAR );
        smallCar.drive();

        ICar jeepCar = CarFactory.createCar( CarType.JEEP_CAR );
        jeepCar.drive();

        ICar sportCar = CarFactory.createCar( CarType.SPORT_CAR );
        sportCar.drive();

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,11),r=[l];function t(d,c){return i(),n("div",null,r)}const u=e(s,[["render",t],["__file","设计模式-创建型-简单工厂.html.vue"]]),o=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82.html","title":"设计模式-创建型-简单工厂","lang":"zh-CN","frontmatter":{"title":"设计模式-创建型-简单工厂","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 简单工厂模式：一个工厂类根据传入参数决定创建哪一种产品实例 uml类图 简单工厂简单工厂 2、例子 定义不同类型车 简单工厂 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-创建型-简单工厂"}],["meta",{"property":"og:description","content":"1、定义 简单工厂模式：一个工厂类根据传入参数决定创建哪一种产品实例 uml类图 简单工厂简单工厂 2、例子 定义不同类型车 简单工厂 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-319b961350ea7970.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-创建型-简单工厂\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-319b961350ea7970.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"basis/design-pattern/设计模式-创建型-简单工厂.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>简单工厂模式：一个工厂类根据传入参数决定创建哪一种产品实例 </code></p>\\n<h4>uml类图</h4>\\n<figure><img src=\\"https://upload-images.jianshu.io/upload_images/5526061-319b961350ea7970.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240\\" alt=\\"简单工厂\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>简单工厂</figcaption></figure>","autoDesc":true}');export{u as comp,o as data};
