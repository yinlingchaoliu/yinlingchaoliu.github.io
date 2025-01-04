import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,f as s}from"./app-CtvCwAmI.js";const d={},l=s(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>模板模式：定义一个算法结构，而将一些步骤延迟到子类实现 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 电脑核心流程
 */
public interface IComputer {

    //开启电源
    void powerOn();

    //检查硬件
    void checkHardware();

    //载入操作系统
    void loadOS();

    //登录
    void login();

    //是否登录
    boolean isLogin();

    //启动完整流程
    void startUp();

}

/**
 *
 * 模板方法
 * 封装不变部分，扩展可变部分。
 * 提取公共部分代码，便于维护
 *
 */
public abstract class AbstractComputer implements IComputer {

    //下面是模板方法，定义为final，子类不能覆盖此方法
    //固定策略不能轻易改变
    @Override
    public final void startUp() {
        System.out.println( &quot;--------开机 START--------&quot; );
        powerOn();
        checkHardware();
        loadOS();
        if (isLogin()) {
            login();
        }
        System.out.println( &quot;-------- 开机 END --------&quot; );
    }
}

/**
 * windows电脑
 */
public class WindowsComputer extends AbstractComputer {

    @Override
    public void powerOn() {
        System.out.println(&quot;Windows电脑开启电源&quot;);
    }

    @Override
    public void checkHardware() {
        System.out.println(&quot;Windows电脑检查硬件&quot;);
    }

    @Override
    public void loadOS() {
        System.out.println(&quot;Windows电脑载入操作系统&quot;);
    }

    @Override
    public void login() {

    }

    @Override
    public boolean isLogin() {
        return false;//返回false，不需登录
    }

}

public  class TestMain {

    public static void main(String[] args){

        AbstractComputer computer = new WindowsComputer();
        computer.startUp();

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),t=[l];function a(r,c){return i(),e("div",null,t)}const u=n(d,[["render",a],["__file","设计模式-行为型-模板模式.html.vue"]]),m=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-模板模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-模板模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 模板模式：定义一个算法结构，而将一些步骤延迟到子类实现 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-模板模式"}],["meta",{"property":"og:description","content":"1、定义 模板模式：定义一个算法结构，而将一些步骤延迟到子类实现 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-模板模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"basis/design-pattern/设计模式-行为型-模板模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>模板模式：定义一个算法结构，而将一些步骤延迟到子类实现 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 电脑核心流程\\n */\\npublic interface IComputer {\\n\\n    //开启电源\\n    void powerOn();\\n\\n    //检查硬件\\n    void checkHardware();\\n\\n    //载入操作系统\\n    void loadOS();\\n\\n    //登录\\n    void login();\\n\\n    //是否登录\\n    boolean isLogin();\\n\\n    //启动完整流程\\n    void startUp();\\n\\n}\\n\\n/**\\n *\\n * 模板方法\\n * 封装不变部分，扩展可变部分。\\n * 提取公共部分代码，便于维护\\n *\\n */\\npublic abstract class AbstractComputer implements IComputer {\\n\\n    //下面是模板方法，定义为final，子类不能覆盖此方法\\n    //固定策略不能轻易改变\\n    @Override\\n    public final void startUp() {\\n        System.out.println( \\"--------开机 START--------\\" );\\n        powerOn();\\n        checkHardware();\\n        loadOS();\\n        if (isLogin()) {\\n            login();\\n        }\\n        System.out.println( \\"-------- 开机 END --------\\" );\\n    }\\n}\\n\\n/**\\n * windows电脑\\n */\\npublic class WindowsComputer extends AbstractComputer {\\n\\n    @Override\\n    public void powerOn() {\\n        System.out.println(\\"Windows电脑开启电源\\");\\n    }\\n\\n    @Override\\n    public void checkHardware() {\\n        System.out.println(\\"Windows电脑检查硬件\\");\\n    }\\n\\n    @Override\\n    public void loadOS() {\\n        System.out.println(\\"Windows电脑载入操作系统\\");\\n    }\\n\\n    @Override\\n    public void login() {\\n\\n    }\\n\\n    @Override\\n    public boolean isLogin() {\\n        return false;//返回false，不需登录\\n    }\\n\\n}\\n\\npublic  class TestMain {\\n\\n    public static void main(String[] args){\\n\\n        AbstractComputer computer = new WindowsComputer();\\n        computer.startUp();\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
