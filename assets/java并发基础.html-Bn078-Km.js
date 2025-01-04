import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as s}from"./app-CtvCwAmI.js";const t={},d=s(`<h5 id="_1、volatile和synchronized的区别" tabindex="-1"><a class="header-anchor" href="#_1、volatile和synchronized的区别"><span>1、volatile和synchronized的区别</span></a></h5><p>volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取； synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。</p><p>volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的 volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性</p><p>volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。</p><p>volatile标记的变量不会被编译器优化；synchronized标记的变量可以被编译器优化</p><h5 id="_2、通过静态内部类实现单例好处" tabindex="-1"><a class="header-anchor" href="#_2、通过静态内部类实现单例好处"><span>2、通过静态内部类实现单例好处</span></a></h5><p>1、不用synchronized，节省时间 2、懒加载，节省空间</p><h5 id="_3、synchronized三种用法-此知识点常考" tabindex="-1"><a class="header-anchor" href="#_3、synchronized三种用法-此知识点常考"><span>3、synchronized三种用法(此知识点常考)</span></a></h5><p>对于普通同步方法，锁是当前实例对象 对于静态同步方法，锁是当前类Class对象 对于同步方法块，锁是synchrionized括号里配置对象</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//锁的三种用法
public class SyncDemo {

    private Object lock = new Object();
    private static Object sLock = new Object();

    public synchronized void methodInstance() {
        System.out.println( &quot;锁是当前实例对象&quot; );
    }

    public synchronized static void methodClass() {
        System.out.println( &quot;锁是当前类Class对象&quot; );
    }

    public static void methodConfig() {
        synchronized (SyncDemo.class) {
            System.out.println( &quot;锁是synchronized配置对象 - 当前类Class对象&quot; );
        }
    }

    public static void methodConfig3() {
        synchronized (sLock) {
            System.out.println( &quot;锁是synchronized配置对象&quot; );
        }
    }

    public void methodConfig1() {
        synchronized (lock) {
            System.out.println( &quot;锁是synchronized配置对象&quot; );
        }
    }

    public void methodConfig2() {
        synchronized (this) {
            System.out.println( &quot;锁是synchronized配置对象 - 当前实例对象&quot; );
        }
    }

    public static void main(String[] args) {
        SyncDemo demo = new SyncDemo();

        //当前实例对象
        demo.methodInstance();
        demo.methodConfig2();
        System.out.println();

        //当前类Class对象
        SyncDemo.methodClass();
        SyncDemo.methodConfig();
        System.out.println();

        //配置对象
        SyncDemo.methodConfig3();
        demo.methodConfig1();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[d];function a(o,c){return n(),i("div",null,l)}const m=e(t,[["render",a],["__file","java并发基础.html.vue"]]),u=JSON.parse('{"path":"/basis/advanced/java%E5%B9%B6%E5%8F%91%E5%9F%BA%E7%A1%80.html","title":"java并发基础","lang":"zh-CN","frontmatter":{"title":"java并发基础","date":"2024-03-25T22:02:09.000Z","category":["知识进阶"],"tag":["archive"],"description":"1、volatile和synchronized的区别 volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取； synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。 volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的 volatil...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/advanced/java%E5%B9%B6%E5%8F%91%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"java并发基础"}],["meta",{"property":"og:description","content":"1、volatile和synchronized的区别 volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取； synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。 volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的 volatil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:37:40.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-25T22:02:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java并发基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-25T22:02:09.000Z\\",\\"dateModified\\":\\"2024-03-26T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711445860000,"updatedTime":1711445860000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.5,"words":449},"filePathRelative":"basis/advanced/java并发基础.md","localizedDate":"2024年3月26日","excerpt":"<h5>1、volatile和synchronized的区别</h5>\\n<p>volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取；\\nsynchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。</p>\\n<p>volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的\\nvolatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性</p>\\n<p>volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。</p>","autoDesc":true}');export{m as comp,u as data};
