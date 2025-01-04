import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as l}from"./app-CtvCwAmI.js";const s={},a=l(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>单例模式：确保一个类只有一个实例，提供一个全局访问点 </code></p><h4 id="单例6种写法" tabindex="-1"><a class="header-anchor" href="#单例6种写法"><span>单例6种写法</span></a></h4><h5 id="_1、饿汉式" tabindex="-1"><a class="header-anchor" href="#_1、饿汉式"><span>1、饿汉式</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 *
 * 饿汉式单例
 * @author chentong
 * 非线程安全
 *
 */
public class HungrySingleton {

    private static HungrySingleton hungrySingleton = new HungrySingleton();

    private HungrySingleton(){

    }

    public HungrySingleton getInstance(){
        return hungrySingleton;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、懒汉" tabindex="-1"><a class="header-anchor" href="#_2、懒汉"><span>2、懒汉</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 懒汉式单例
 * 线程安全
 * @author chentong
 */
public class LazySingleton {

    private static  LazySingleton lazySingleton;

    private LazySingleton(){
    }

    public static synchronized LazySingleton getInstance(){
        if(lazySingleton == null){
            lazySingleton = new LazySingleton();
        }
        return lazySingleton;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、内部静态类</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 内部静态类 单例
 * @author chentong
 *
 */
public class Singleton {

    private Singleton(){

    }

    /**
     * 静态内部类
     */
    private static class SingletonHolder{
        public static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance(){
        return SingletonHolder.INSTANCE;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、Double Check</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class DoubleCheckSingleton {

    private static volatile DoubleCheckSingleton doubleCheckSingleton;

    private DoubleCheckSingleton(){
    }

    public static DoubleCheckSingleton getInstance(){

        if(doubleCheckSingleton == null){
            synchronized (DoubleCheckSingleton.class){
                if (doubleCheckSingleton == null){
                    doubleCheckSingleton = new DoubleCheckSingleton();
                }
            }
        }
        return doubleCheckSingleton;

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、枚举单例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 *
 * 枚举法式单例
 * @author chentong
 * 枚举默认线程安全
 * 防止反序列化重新创建新的对象
 *
 */
public enum  EnumSingleton {

    INSTANCE;

    public void doSomething(){
    }

    /**
     * 使用示例
     */
    public static class SingleDemo {
        public static void main(String[] args) {
            EnumSingleton singleton = EnumSingleton.INSTANCE;
            singleton.doSomething();
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、容器单例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MapSingleton {

    private static Map&lt;String ,Object&gt; objectMap = new HashMap&lt;&gt;(  );

    private MapSingleton(){

    }

    public static void registerService(String key,Object object){
        if (!objectMap.containsKey( key )){
            objectMap.put( key,object );
        }
    }

    public static Object getService(String key){
        return objectMap.get( key );
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,17),d=[a];function t(c,r){return e(),i("div",null,d)}const m=n(s,[["render",t],["__file","设计模式-创建型-单例模式.html.vue"]]),o=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","title":"设计模式-创建型-单例模式","lang":"zh-CN","frontmatter":{"title":"设计模式-创建型-单例模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 单例模式：确保一个类只有一个实例，提供一个全局访问点 单例6种写法 1、饿汉式 2、懒汉 3、内部静态类 4、Double Check 5、枚举单例 6、容器单例 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-创建型-单例模式"}],["meta",{"property":"og:description","content":"1、定义 单例模式：确保一个类只有一个实例，提供一个全局访问点 单例6种写法 1、饿汉式 2、懒汉 3、内部静态类 4、Double Check 5、枚举单例 6、容器单例 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-创建型-单例模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.07,"words":320},"filePathRelative":"basis/design-pattern/设计模式-创建型-单例模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>单例模式：确保一个类只有一个实例，提供一个全局访问点 </code></p>\\n<h4>单例6种写法</h4>\\n<h5>1、饿汉式</h5>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n *\\n * 饿汉式单例\\n * @author chentong\\n * 非线程安全\\n *\\n */\\npublic class HungrySingleton {\\n\\n    private static HungrySingleton hungrySingleton = new HungrySingleton();\\n\\n    private HungrySingleton(){\\n\\n    }\\n\\n    public HungrySingleton getInstance(){\\n        return hungrySingleton;\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
