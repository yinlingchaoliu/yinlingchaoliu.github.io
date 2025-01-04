import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as s}from"./app-CtvCwAmI.js";const l={},r=s(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>责任链模式：将请求的发送者和接受者解耦，使得多个对象都有处理这个请求的机会</code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface InvokerHandler {

    //汇报工作
    void requestPermission(InvokerHandler handler);
    //处理核心逻辑
    void handleRequest(int limit);
    //当前权限
    int hasLimit();
    //当前职位
    String hasJob();

}

/**
 * 责任链
 */
public abstract class Leader implements InvokerHandler{

    private InvokerHandler nextHandler;

    @Override
    public void requestPermission(InvokerHandler handler) {
        this.nextHandler = handler;
    }

    @Override
    public void handleRequest(int limit) {

        if (limit &lt;= hasLimit()){
            System.out.println(hasJob()+&quot;拥有权限&quot; +limit+&quot;额度，审批&quot;);
        }else{
            if(nextHandler == null){
                System.out.println(&quot;没有上级汇报对象&quot;);
            }else {
                nextHandler.handleRequest( limit );
            }
        }

    }

}

public class Boss extends Leader {

    @Override
    public int hasLimit() {
        return Integer.MAX_VALUE;
    }

    @Override
    public String hasJob() {
        return &quot;老板&quot;;
    }
}

public class Director extends Leader{

    @Override
    public int hasLimit() {
        return 5000;
    }

    @Override
    public String hasJob() {
        return &quot;主管&quot;;
    }
}

public class Group extends Leader{

    @Override
    public int hasLimit() {
        return 3000;
    }

    @Override
    public String hasJob() {
        return &quot;组员&quot;;
    }
}

//经理
public class Manager extends Leader {

    @Override
    public int hasLimit() {
        return 10000;
    }

    @Override
    public String hasJob() {
        return &quot;经理&quot;;
    }
}

/**
 * 责任链模式
 */
public class TestMain {

    public static void main(String[] args){

        Boss boss = new Boss();
        Manager manager = new Manager();
        Director director = new Director();
        Group group = new Group();

        //确定汇报关系
        group.requestPermission( director );
        director.requestPermission( manager );
        manager.requestPermission( boss );
        boss.requestPermission( null );


        //组员汇报
        group.handleRequest( 2000 );

        //主管处理
        director.handleRequest( 300 );

        //经理处理
        manager.handleRequest( 20000 );

        //老板处理
        boss.handleRequest( 100 );
        boss.handleRequest( 1000 );
        boss.handleRequest( 900000 );

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),d=[r];function a(t,v){return e(),i("div",null,d)}const m=n(l,[["render",a],["__file","设计模式-行为型-责任链模式.html.vue"]]),b=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-责任链模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-责任链模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 责任链模式：将请求的发送者和接受者解耦，使得多个对象都有处理这个请求的机会 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-责任链模式"}],["meta",{"property":"og:description","content":"1、定义 责任链模式：将请求的发送者和接受者解耦，使得多个对象都有处理这个请求的机会 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-责任链模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"basis/design-pattern/设计模式-行为型-责任链模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>责任链模式：将请求的发送者和接受者解耦，使得多个对象都有处理这个请求的机会</code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public interface InvokerHandler {\\n\\n    //汇报工作\\n    void requestPermission(InvokerHandler handler);\\n    //处理核心逻辑\\n    void handleRequest(int limit);\\n    //当前权限\\n    int hasLimit();\\n    //当前职位\\n    String hasJob();\\n\\n}\\n\\n/**\\n * 责任链\\n */\\npublic abstract class Leader implements InvokerHandler{\\n\\n    private InvokerHandler nextHandler;\\n\\n    @Override\\n    public void requestPermission(InvokerHandler handler) {\\n        this.nextHandler = handler;\\n    }\\n\\n    @Override\\n    public void handleRequest(int limit) {\\n\\n        if (limit &lt;= hasLimit()){\\n            System.out.println(hasJob()+\\"拥有权限\\" +limit+\\"额度，审批\\");\\n        }else{\\n            if(nextHandler == null){\\n                System.out.println(\\"没有上级汇报对象\\");\\n            }else {\\n                nextHandler.handleRequest( limit );\\n            }\\n        }\\n\\n    }\\n\\n}\\n\\npublic class Boss extends Leader {\\n\\n    @Override\\n    public int hasLimit() {\\n        return Integer.MAX_VALUE;\\n    }\\n\\n    @Override\\n    public String hasJob() {\\n        return \\"老板\\";\\n    }\\n}\\n\\npublic class Director extends Leader{\\n\\n    @Override\\n    public int hasLimit() {\\n        return 5000;\\n    }\\n\\n    @Override\\n    public String hasJob() {\\n        return \\"主管\\";\\n    }\\n}\\n\\npublic class Group extends Leader{\\n\\n    @Override\\n    public int hasLimit() {\\n        return 3000;\\n    }\\n\\n    @Override\\n    public String hasJob() {\\n        return \\"组员\\";\\n    }\\n}\\n\\n//经理\\npublic class Manager extends Leader {\\n\\n    @Override\\n    public int hasLimit() {\\n        return 10000;\\n    }\\n\\n    @Override\\n    public String hasJob() {\\n        return \\"经理\\";\\n    }\\n}\\n\\n/**\\n * 责任链模式\\n */\\npublic class TestMain {\\n\\n    public static void main(String[] args){\\n\\n        Boss boss = new Boss();\\n        Manager manager = new Manager();\\n        Director director = new Director();\\n        Group group = new Group();\\n\\n        //确定汇报关系\\n        group.requestPermission( director );\\n        director.requestPermission( manager );\\n        manager.requestPermission( boss );\\n        boss.requestPermission( null );\\n\\n\\n        //组员汇报\\n        group.handleRequest( 2000 );\\n\\n        //主管处理\\n        director.handleRequest( 300 );\\n\\n        //经理处理\\n        manager.handleRequest( 20000 );\\n\\n        //老板处理\\n        boss.handleRequest( 100 );\\n        boss.handleRequest( 1000 );\\n        boss.handleRequest( 900000 );\\n\\n    }\\n}\\n\\n</code></pre></div>","autoDesc":true}');export{m as comp,b as data};
