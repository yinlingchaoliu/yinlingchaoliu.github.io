import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as s}from"./app-CtvCwAmI.js";const r={},t=s(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>观察者模式：对象间一对多依赖关系，一个对象改变，依赖于它对象得到通知并更新</code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 被观察者
 */
public interface IObservable {
    //注册
    void register(IObserver observer);
    //通知
    void notify(String msg);

}

/**
 * 观察者
 */
public interface IObserver {
    //更新
    void update(String msg);
}

public class Tv implements IObservable {

    List&lt;IObserver&gt; list = new ArrayList&lt;&gt;();

    @Override
    public void register(IObserver observer) {
        list.add( observer );
    }

    @Override
    public void notify(String msg) {
        for (IObserver observer : list) {
            observer.update( msg );
        }
    }
}

/**
 * 观察者
 */
public class User implements IObserver {

    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void update(String msg) {
        System.out.println( name + &quot;,&quot; + msg + &quot;更新了！&quot; );
    }

}

public class TestMain {

    public static void main(String[] args){

        User user1 = new User( &quot;小米&quot; );
        User user2 = new User( &quot;小名&quot; );
        User user3 = new User( &quot;小明&quot; );

        Tv tv = new Tv();
        tv.register( user1 );
        tv.register( user2 );
        tv.register( user3 );

        tv.notify( &quot;甄嬛来了&quot; );
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),l=[t];function d(a,v){return n(),i("div",null,l)}const m=e(r,[["render",d],["__file","设计模式-行为型-观察者模式.html.vue"]]),b=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-观察者模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-观察者模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 观察者模式：对象间一对多依赖关系，一个对象改变，依赖于它对象得到通知并更新 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-观察者模式"}],["meta",{"property":"og:description","content":"1、定义 观察者模式：对象间一对多依赖关系，一个对象改变，依赖于它对象得到通知并更新 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-观察者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"basis/design-pattern/设计模式-行为型-观察者模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>观察者模式：对象间一对多依赖关系，一个对象改变，依赖于它对象得到通知并更新</code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 被观察者\\n */\\npublic interface IObservable {\\n    //注册\\n    void register(IObserver observer);\\n    //通知\\n    void notify(String msg);\\n\\n}\\n\\n/**\\n * 观察者\\n */\\npublic interface IObserver {\\n    //更新\\n    void update(String msg);\\n}\\n\\npublic class Tv implements IObservable {\\n\\n    List&lt;IObserver&gt; list = new ArrayList&lt;&gt;();\\n\\n    @Override\\n    public void register(IObserver observer) {\\n        list.add( observer );\\n    }\\n\\n    @Override\\n    public void notify(String msg) {\\n        for (IObserver observer : list) {\\n            observer.update( msg );\\n        }\\n    }\\n}\\n\\n/**\\n * 观察者\\n */\\npublic class User implements IObserver {\\n\\n    private String name;\\n\\n    public User(String name) {\\n        this.name = name;\\n    }\\n\\n    @Override\\n    public void update(String msg) {\\n        System.out.println( name + \\",\\" + msg + \\"更新了！\\" );\\n    }\\n\\n}\\n\\npublic class TestMain {\\n\\n    public static void main(String[] args){\\n\\n        User user1 = new User( \\"小米\\" );\\n        User user2 = new User( \\"小名\\" );\\n        User user3 = new User( \\"小明\\" );\\n\\n        Tv tv = new Tv();\\n        tv.register( user1 );\\n        tv.register( user2 );\\n        tv.register( user3 );\\n\\n        tv.notify( \\"甄嬛来了\\" );\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,b as data};
