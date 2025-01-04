import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,f as s}from"./app-CtvCwAmI.js";const l={},a=s(`<h4 id="_1、设计模式有哪些" tabindex="-1"><a class="header-anchor" href="#_1、设计模式有哪些"><span>1、设计模式有哪些？</span></a></h4><p>23种设计模式 总体分为三大类 创建型设计模式，共5种 简单工厂、工厂方法模式，抽象工厂模式，单例模式，建造者模式，原型模式</p><p>结构型模式，共7种 适配器模式，装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式</p><p>行为型模式，共11种 策略模式，模板方法，观察者模式，迭代模式，责任链模式，命令模式，备忘录模式，状态模式，访问者模式，中介者模式，解释器模式</p><h5 id="_2、设计模式定义" tabindex="-1"><a class="header-anchor" href="#_2、设计模式定义"><span>2、设计模式定义</span></a></h5><p>1、 设计模式按照类型划分</p><ul><li>创建型设计模式：用来解耦对象的实例化过程。</li><li>结构型设计模式：将类和对象按照一定规则组合成一个更加强大的结构体。</li><li>行为型设计模式：定义类和对象的交互行为。</li></ul><p>2、 设计模式简单定义 <img src="https://upload-images.jianshu.io/upload_images/5526061-b5f70dccce19de51.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="23种设计模式简单定义" loading="lazy"></p><p>3、文字版 1）创建型设计模式</p><ul><li>单例模式：确保一个类只有一个实例，提供一个全局访问点</li><li>建造者模式：封装一个复杂对象过程，按照步骤构建对象</li><li>原型模式：通过复制现有实例创建新实例</li><li>简单工厂模式：一个工厂类根据传入参数决定创建哪一种产品实例</li><li>工厂方法模式：定义一个用于创建对象的接口，让子类决定实例化那个类</li><li>抽象工厂模式：创建相关依赖对象家族，而无须指定具体类</li></ul><p>2）结构型设计模式</p><ul><li>适配器模式：将一个类的方法或者接口转换成客户希望另一个接口</li><li>组合模式：将对象组成成树形结构以表示“整体-部分”的层次结构</li><li>装饰模式：动态的给对象添加新的功能</li><li>外观模式：对外提供一个统一方法，用来访问子系统中一群接口</li><li>桥接模式：将抽象部分与实现部分分离，使他们都可以独立进行变化</li><li>享元模式：通过共享技术来有效支持大量细粒度的对象</li><li>代理模式：为其他对象提供一种代理以控制对这个对象的访问</li></ul><p>3）行为型设计模式</p><ul><li>模板模式：定义一个算法结构，而将一些步骤延迟到子类实现</li><li>解释器模式：定义一个语言，定义它的文法的一种表示，并定义一个解释器</li><li>策略模式：定义一系列算法，把它们封装起来，并且使它们可以互相替换</li><li>状态模式：允许一个对象在其内部状态改变时改变它的行为</li><li>观察者模式：对象间一对多依赖关系，一个对象改变，依赖于它对象得到通知并更新</li><li>备忘录模式：在不破坏封装前提下，保存对象内部状态</li><li>中介者模式:用一个中介对象来封装一系列对象交互</li><li>命令模式：将命令请求封装成一个对象，可以将不同请求来进行参数化</li><li>访问者模式：在不改变数据结构的前提下，增加作用于一组元素对象新功能</li><li>责任链模式：将请求的发送者和接受者解耦，使得多个对象都有处理这个请求的机会</li><li>迭代器模式：一种遍历访问容器对象中各个元素的方法，不暴露该对象内部结构</li></ul><h5 id="_3、动态代理和静态代理区别" tabindex="-1"><a class="header-anchor" href="#_3、动态代理和静态代理区别"><span>3、动态代理和静态代理区别</span></a></h5><p>区别在于代理类生成时间不同，根据程序运行时代理类是否存在</p><p>应用场景：retrofit使用动态代理提升扩展性</p><h5 id="_4、动态代理写法" tabindex="-1"><a class="header-anchor" href="#_4、动态代理写法"><span>4、动态代理写法</span></a></h5><p>参考 https://github.com/yinlingchaoliu/23-design-pattern.git</p><p>公共部分</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//接口
public interface ILawsuit {

    //提交申请
    void submit();

    //举证
    void burden();

    //辩护
    void defend();

    //诉讼完成
    void finish();

}

public class XiaoMin implements ILawsuit {

    @Override
    public void submit() {
        //小民申请仲裁
        System.out.println( &quot;老板年底拖欠工资，特此申请仲裁！&quot; );
    }

    @Override
    public void burden() {
        //小民提交证据
        System.out.println( &quot;这是合同书和过去一年的银行工资流水！&quot; );
    }

    @Override
    public void defend() {
        //铁证如山
        System.out.println( &quot;证据确凿，不需要再说什么！&quot; );
    }

    @Override
    public void finish() {
        //结果
        System.out.println( &quot;诉讼成功，判决老板即日起七天内结算工资！&quot; );
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态代理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 代理类
 */
public class Lawyer implements ILawsuit {

    private ILawsuit mLawsuit;

    public Lawyer(ILawsuit mLawsuit) {
        this.mLawsuit = mLawsuit;
    }

    @Override
    public void submit() {
        mLawsuit.submit();
    }

    @Override
    public void burden() {
        mLawsuit.burden();
    }

    @Override
    public void defend() {
        mLawsuit.defend();
    }

    @Override
    public void finish() {
        mLawsuit.finish();
    }
}

测试类
public class TestMain {

    public static void main(String[] args) {
        ILawsuit xiaomin = new XiaoMin();
        //静态代理
        ILawsuit lawyer = new Lawyer( xiaomin );
        lawyer.submit();
        lawyer.burden();
        lawyer.defend();
        lawyer.finish();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态代理 第一种写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 *
 * 动态代理
 *
 */
public class DynamicProxy implements InvocationHandler {

    private Object obj;

    public DynamicProxy(Object obj) {
        this.obj = obj;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        Object result = method.invoke( obj,args );
        return result;
    }
}


public class TestMain {

    public static void main(String[] args) {
        ILawsuit xiaomin = new XiaoMin();
        //动态代理
        DynamicProxy proxy = new DynamicProxy( xiaomin );
        //获取小民的classLoader
        ClassLoader loader = xiaomin.getClass().getClassLoader();
        //动态代理一个代理律师
        ILawsuit lawyer = (ILawsuit) Proxy.newProxyInstance( loader, new Class[]{ILawsuit.class}, proxy );
        lawyer.submit();
        lawyer.burden();
        lawyer.defend();
        lawyer.finish();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态代理第二种通用式写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
public class DynamicProxy {

   //需要特别指定泛型类
    public static &lt;T&gt; T create(Class&lt;T&gt; serivce, final Object newInstance) {
        InvocationHandler proxy = new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                return method.invoke( newInstance, args );
            }
        };
        ClassLoader loader = serivce.getClassLoader();
        return (T) Proxy.newProxyInstance( loader, new Class[]{serivce}, proxy );
    }
}

    /**
     * 需要那个接口 泛型指向那个
     * T必须为接口类
     * @param newInstance
     * @param &lt;T&gt;
     * @return
     */
    public static &lt;T&gt; T create(final Object newInstance) {

        InvocationHandler proxy = new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                return method.invoke( newInstance, args );
            }
        };

        //获得接口列表
        Class[] ifaces = newInstance.getClass().getInterfaces();
        //获取实体类classLoader
        ClassLoader loader = newInstance.getClass().getClassLoader();
        //获得动态代理实例
        return (T) Proxy.newProxyInstance( loader, ifaces, proxy );
    }

    //retrofit写法
    /**
     * 没有真正实体类
     * 可以用invoke方法反射
     * @param service
     * @param &lt;T&gt;
     * @return
     */
    public static &lt;T&gt; T create(Class&lt;T&gt; service) {
        ClassLoader loader = service.getClassLoader();

        InvocationHandler proxy = new InvocationHandler() {

            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                //这里填写回调，没有newInstance retrofit用法
                return null;
            }
        };
        return (T) Proxy.newProxyInstance( loader, new Class[]{service}, proxy );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    public static void main(String args[]){

        //第一种方式:指定接口
        ILawsuit lawsuit =  DynamicProxy.create( ILawsuit.class, new XiaoMin() );
        lawsuit.submit();
        lawsuit.burden();

        //第二种方式:采用接口转换
        ILawsuit mlawsuit =  DynamicProxy.create(  new XiaoMin() );
        mlawsuit.defend();

        IArgue argue =  DynamicProxy.create(  new XiaoMin() );
        argue.argue();

        //转换时 必须用接口才行
        ILawsuit judge = (ILawsuit)argue;

        judge.finish();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、简单工厂、工厂方法、抽象工厂、建造者模式区别" tabindex="-1"><a class="header-anchor" href="#_5、简单工厂、工厂方法、抽象工厂、建造者模式区别"><span>5、简单工厂、工厂方法、抽象工厂、建造者模式区别</span></a></h5><p>简单工厂：一个工厂方法创建不同类型对象 工厂方法：一个具体工厂类负责创建一个具体对象类型 抽象工厂：一个具体工厂类负责创建一系列相关对象 建造者模式：对象的构建与表现分离，更注重对象创建过程</p><h5 id="_6、装饰模式与代理模式区别、与桥接者模式相比" tabindex="-1"><a class="header-anchor" href="#_6、装饰模式与代理模式区别、与桥接者模式相比"><span>6、装饰模式与代理模式区别、与桥接者模式相比</span></a></h5><p>1、装饰模式以客户端透明方式扩展对象的功能，是继承关系替代方案。 代理模式是给一个对象提供代理对象，并由代理对象来控制原有对象引用 2、装饰模式应该为所装饰对象增强功能，代理模式对所代理对象施加控制，但不对对象功能本身增加 3、桥接模式主要为应对某个类多个变化维度增加场景，通过桥接把多个变化隔离开</p><h5 id="_7、外观模式和中介模式区别" tabindex="-1"><a class="header-anchor" href="#_7、外观模式和中介模式区别"><span>7、外观模式和中介模式区别</span></a></h5><p>外观模式重点对外封装统一高层接口，便于用户使用。 中介模式避免多个互相协作对象直接易用。他们之间通过一个中介对象进行，从而得到他们耦合松散，易于应对变化</p><h5 id="_8、策略模式和状态模式区别" tabindex="-1"><a class="header-anchor" href="#_8、策略模式和状态模式区别"><span>8、策略模式和状态模式区别</span></a></h5><p>类型结构一致，本质不同，策略模式重在整个算法的替换，也就是策略替换，而状态模式则是通过状态来改变行为</p><h5 id="_9、适配器模式、装饰者模式、外观模式异同" tabindex="-1"><a class="header-anchor" href="#_9、适配器模式、装饰者模式、外观模式异同"><span>9、适配器模式、装饰者模式、外观模式异同</span></a></h5><p>相同之处，在用户类与被调用类之间加了一个中间层 不同之处 代理对象表示一个单一对象 外观对象表示一个子系统 适配器和外观是对现存系统封装 外观定义新接口，简化接口 适配器则是复用原有接口，侧重于接口转换</p><h5 id="_10、重构之代码坏味道" tabindex="-1"><a class="header-anchor" href="#_10、重构之代码坏味道"><span>10、重构之代码坏味道</span></a></h5><p>记住坏味道，在文集《重构 改善代码设计》-代码坏味道中 记住一个原则：事不过三，三则重构 常见坏味道要点： 1、代码重复 2、方法过长 3、类功能过多 4、过长参数列表 5、冗余类 6、需要过多注释</p>`,41),d=[a];function r(v,c){return n(),e("div",null,d)}const m=i(l,[["render",r],["__file","设计模式的基本概念与区别.html.vue"]]),b=JSON.parse('{"path":"/basis/advanced/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E4%B8%8E%E5%8C%BA%E5%88%AB.html","title":"设计模式的基本概念与区别","lang":"zh-CN","frontmatter":{"title":"设计模式的基本概念与区别","date":"2024-03-25T22:02:09.000Z","category":["知识进阶"],"tag":["archive"],"description":"1、设计模式有哪些？ 23种设计模式 总体分为三大类 创建型设计模式，共5种 简单工厂、工厂方法模式，抽象工厂模式，单例模式，建造者模式，原型模式 结构型模式，共7种 适配器模式，装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式 行为型模式，共11种 策略模式，模板方法，观察者模式，迭代模式，责任链模式，命令模式，备忘录模式，状态模式，访问...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/advanced/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E4%B8%8E%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式的基本概念与区别"}],["meta",{"property":"og:description","content":"1、设计模式有哪些？ 23种设计模式 总体分为三大类 创建型设计模式，共5种 简单工厂、工厂方法模式，抽象工厂模式，单例模式，建造者模式，原型模式 结构型模式，共7种 适配器模式，装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式 行为型模式，共11种 策略模式，模板方法，观察者模式，迭代模式，责任链模式，命令模式，备忘录模式，状态模式，访问..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-b5f70dccce19de51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:37:40.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-25T22:02:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式的基本概念与区别\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-b5f70dccce19de51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-25T22:02:09.000Z\\",\\"dateModified\\":\\"2024-03-26T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711445860000,"updatedTime":1711445860000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":7.48,"words":2244},"filePathRelative":"basis/advanced/设计模式的基本概念与区别.md","localizedDate":"2024年3月26日","excerpt":"<h4>1、设计模式有哪些？</h4>\\n<p>23种设计模式\\n总体分为三大类\\n创建型设计模式，共5种\\n简单工厂、工厂方法模式，抽象工厂模式，单例模式，建造者模式，原型模式</p>\\n<p>结构型模式，共7种\\n适配器模式，装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式</p>\\n<p>行为型模式，共11种\\n策略模式，模板方法，观察者模式，迭代模式，责任链模式，命令模式，备忘录模式，状态模式，访问者模式，中介者模式，解释器模式</p>\\n<h5>2、设计模式定义</h5>\\n<p>1、 设计模式按照类型划分</p>\\n<ul>\\n<li>创建型设计模式：用来解耦对象的实例化过程。</li>\\n<li>结构型设计模式：将类和对象按照一定规则组合成一个更加强大的结构体。</li>\\n<li>行为型设计模式：定义类和对象的交互行为。</li>\\n</ul>","autoDesc":true}');export{m as comp,b as data};
