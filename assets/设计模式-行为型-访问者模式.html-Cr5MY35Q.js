import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,f as s}from"./app-CtvCwAmI.js";const d={},t=s(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>访问者模式：在不改变数据结构的前提下，增加作用于一组元素对象新功能</code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 受访者
 */
public interface IAccept {
    void accept(IVisitor visit);
    void showInfo();
}

/**
 * 访问者
 */
public interface IVisitor&lt;ACCEPT extends IAccept&gt; {

    void visit(ACCEPT accept);

    Kind kind(); //访问者类型

}

/**
 * 访问者类型
 */
public enum Kind {
    CEO,
    CTO,
    HR
}

/**
 * 访问者模板
 */
public abstract class Visitor implements IVisitor{
    @Override
    public void visit(IAccept accept) {
        accept.showInfo();
    }
}

public class CEOVisitor extends Visitor{

    @Override
    public Kind kind() {
        return Kind.CEO;
    }

}

public class CTOVisitor extends Visitor  {

    @Override
    public Kind kind() {
        return Kind.CTO;
    }

}

/**
 * 访问者
 */
public class HRVisitor extends Visitor{

    @Override
    public Kind kind() {
        return Kind.HR;
    }
}

/**
 * 受访者--工程师
 */
public class Engineer implements IAccept {

    private String name;
    private String kpi;
    private String line;
    private IVisitor visitor;

    public Engineer(String name, String kpi, String line) {
        this.name = name;
        this.kpi = kpi;
        this.line = line;
    }

    @Override
    public void accept(IVisitor visit) {
        visitor = visit;
        visit.visit( this );
    }

    @Override
    public void showInfo() {
        if (visitor.kind() == Kind.CEO){
            System.out.println( &quot;Engineer{&quot; +
                    &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                    &quot;, kpi=&#39;&quot; + kpi + &#39;\\&#39;&#39; +
                    &#39;}&#39; );
        }else if(visitor.kind() == Kind.CTO){
            System.out.println( &quot;Engineer{&quot; +
                    &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                    &quot;, line=&#39;&quot; + line + &#39;\\&#39;&#39; +
                    &#39;}&#39; );
        }else if(visitor.kind() == Kind.HR){
            System.out.println( &quot;Engineer{&quot; +
                    &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                    &#39;}&#39; );
        }
    }

}

/**
 * 受访者--经理
 *
 */
public class Manage implements IAccept{

    private String name;
    private String kpi;
    private String product;
    private IVisitor visitor;

    public Manage(String name, String kpi, String product) {
        this.name = name;
        this.kpi = kpi;
        this.product = product;
    }

    @Override
    public void accept(IVisitor visit) {
        visitor = visit;
        visit.visit( this );
    }

    @Override
    public void showInfo() {
        if (visitor.kind() == Kind.CEO){
            System.out.println( &quot;Manage{&quot; +
                    &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                    &quot;, kpi=&#39;&quot; + kpi + &#39;\\&#39;&#39; +
                    &quot;, product=&#39;&quot; + product + &#39;\\&#39;&#39; +
                    &#39;}&#39; );
        }else if(visitor.kind() == Kind.CTO){
            System.out.println( &quot;Manage{&quot; +
                    &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                    &quot;, product=&#39;&quot; + product + &#39;\\&#39;&#39; +
                    &#39;}&#39; );
        }else if(visitor.kind() == Kind.HR){
            System.out.println( &quot;Manage{&quot; +
                    &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                    &#39;}&#39; );
        }

    }

}

public class Company {

    private List&lt;IAccept&gt; acceptList = new ArrayList&lt;&gt;(  );

    public Company(){
        acceptList.add( new Engineer( &quot;小明&quot;,&quot;14&quot;,&quot;1000&quot; ) );
        acceptList.add( new Engineer( &quot;小张&quot;,&quot;10&quot;,&quot;12300&quot; ) );
        acceptList.add( new Engineer( &quot;小李&quot;,&quot;19&quot;,&quot;100450&quot; ) );
        acceptList.add( new Engineer( &quot;小孙&quot;,&quot;16&quot;,&quot;101100&quot; ) );

        acceptList.add( new Manage( &quot;张总&quot;,&quot;20&quot;,&quot;花钱项目&quot; ) );
        acceptList.add( new Manage( &quot;马云&quot;,&quot;10&quot;,&quot;五福项目&quot; ) );
        acceptList.add( new Manage( &quot;王总&quot;,&quot;20&quot;,&quot;卖大米项目&quot; ) );
        acceptList.add( new Manage( &quot;陈总&quot;,&quot;20&quot;,&quot;到天亮项目&quot; ) );
    }

    public void showReport(IVisitor visitor){
        for (IAccept  accept :acceptList){
            accept.accept( visitor );
        }
    }

}

/**
 * 访问者模式
 *
 */
public  class TestMain {

    public static void main(String[] args){

        //公司
        Company company = new Company();

        //访问者查看对应报告
        company.showReport( new CEOVisitor() );
        company.showReport( new HRVisitor() );
        company.showReport( new CTOVisitor() );
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),l=[t];function a(v,r){return i(),e("div",null,l)}const m=n(d,[["render",a],["__file","设计模式-行为型-访问者模式.html.vue"]]),o=JSON.parse(`{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-访问者模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-访问者模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 访问者模式：在不改变数据结构的前提下，增加作用于一组元素对象新功能 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-访问者模式"}],["meta",{"property":"og:description","content":"1、定义 访问者模式：在不改变数据结构的前提下，增加作用于一组元素对象新功能 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-访问者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"basis/design-pattern/设计模式-行为型-访问者模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>访问者模式：在不改变数据结构的前提下，增加作用于一组元素对象新功能</code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 受访者\\n */\\npublic interface IAccept {\\n    void accept(IVisitor visit);\\n    void showInfo();\\n}\\n\\n/**\\n * 访问者\\n */\\npublic interface IVisitor&lt;ACCEPT extends IAccept&gt; {\\n\\n    void visit(ACCEPT accept);\\n\\n    Kind kind(); //访问者类型\\n\\n}\\n\\n/**\\n * 访问者类型\\n */\\npublic enum Kind {\\n    CEO,\\n    CTO,\\n    HR\\n}\\n\\n/**\\n * 访问者模板\\n */\\npublic abstract class Visitor implements IVisitor{\\n    @Override\\n    public void visit(IAccept accept) {\\n        accept.showInfo();\\n    }\\n}\\n\\npublic class CEOVisitor extends Visitor{\\n\\n    @Override\\n    public Kind kind() {\\n        return Kind.CEO;\\n    }\\n\\n}\\n\\npublic class CTOVisitor extends Visitor  {\\n\\n    @Override\\n    public Kind kind() {\\n        return Kind.CTO;\\n    }\\n\\n}\\n\\n/**\\n * 访问者\\n */\\npublic class HRVisitor extends Visitor{\\n\\n    @Override\\n    public Kind kind() {\\n        return Kind.HR;\\n    }\\n}\\n\\n/**\\n * 受访者--工程师\\n */\\npublic class Engineer implements IAccept {\\n\\n    private String name;\\n    private String kpi;\\n    private String line;\\n    private IVisitor visitor;\\n\\n    public Engineer(String name, String kpi, String line) {\\n        this.name = name;\\n        this.kpi = kpi;\\n        this.line = line;\\n    }\\n\\n    @Override\\n    public void accept(IVisitor visit) {\\n        visitor = visit;\\n        visit.visit( this );\\n    }\\n\\n    @Override\\n    public void showInfo() {\\n        if (visitor.kind() == Kind.CEO){\\n            System.out.println( \\"Engineer{\\" +\\n                    \\"name='\\" + name + '\\\\'' +\\n                    \\", kpi='\\" + kpi + '\\\\'' +\\n                    '}' );\\n        }else if(visitor.kind() == Kind.CTO){\\n            System.out.println( \\"Engineer{\\" +\\n                    \\"name='\\" + name + '\\\\'' +\\n                    \\", line='\\" + line + '\\\\'' +\\n                    '}' );\\n        }else if(visitor.kind() == Kind.HR){\\n            System.out.println( \\"Engineer{\\" +\\n                    \\"name='\\" + name + '\\\\'' +\\n                    '}' );\\n        }\\n    }\\n\\n}\\n\\n/**\\n * 受访者--经理\\n *\\n */\\npublic class Manage implements IAccept{\\n\\n    private String name;\\n    private String kpi;\\n    private String product;\\n    private IVisitor visitor;\\n\\n    public Manage(String name, String kpi, String product) {\\n        this.name = name;\\n        this.kpi = kpi;\\n        this.product = product;\\n    }\\n\\n    @Override\\n    public void accept(IVisitor visit) {\\n        visitor = visit;\\n        visit.visit( this );\\n    }\\n\\n    @Override\\n    public void showInfo() {\\n        if (visitor.kind() == Kind.CEO){\\n            System.out.println( \\"Manage{\\" +\\n                    \\"name='\\" + name + '\\\\'' +\\n                    \\", kpi='\\" + kpi + '\\\\'' +\\n                    \\", product='\\" + product + '\\\\'' +\\n                    '}' );\\n        }else if(visitor.kind() == Kind.CTO){\\n            System.out.println( \\"Manage{\\" +\\n                    \\"name='\\" + name + '\\\\'' +\\n                    \\", product='\\" + product + '\\\\'' +\\n                    '}' );\\n        }else if(visitor.kind() == Kind.HR){\\n            System.out.println( \\"Manage{\\" +\\n                    \\"name='\\" + name + '\\\\'' +\\n                    '}' );\\n        }\\n\\n    }\\n\\n}\\n\\npublic class Company {\\n\\n    private List&lt;IAccept&gt; acceptList = new ArrayList&lt;&gt;(  );\\n\\n    public Company(){\\n        acceptList.add( new Engineer( \\"小明\\",\\"14\\",\\"1000\\" ) );\\n        acceptList.add( new Engineer( \\"小张\\",\\"10\\",\\"12300\\" ) );\\n        acceptList.add( new Engineer( \\"小李\\",\\"19\\",\\"100450\\" ) );\\n        acceptList.add( new Engineer( \\"小孙\\",\\"16\\",\\"101100\\" ) );\\n\\n        acceptList.add( new Manage( \\"张总\\",\\"20\\",\\"花钱项目\\" ) );\\n        acceptList.add( new Manage( \\"马云\\",\\"10\\",\\"五福项目\\" ) );\\n        acceptList.add( new Manage( \\"王总\\",\\"20\\",\\"卖大米项目\\" ) );\\n        acceptList.add( new Manage( \\"陈总\\",\\"20\\",\\"到天亮项目\\" ) );\\n    }\\n\\n    public void showReport(IVisitor visitor){\\n        for (IAccept  accept :acceptList){\\n            accept.accept( visitor );\\n        }\\n    }\\n\\n}\\n\\n/**\\n * 访问者模式\\n *\\n */\\npublic  class TestMain {\\n\\n    public static void main(String[] args){\\n\\n        //公司\\n        Company company = new Company();\\n\\n        //访问者查看对应报告\\n        company.showReport( new CEOVisitor() );\\n        company.showReport( new HRVisitor() );\\n        company.showReport( new CTOVisitor() );\\n    }\\n\\n}\\n\\n</code></pre></div>","autoDesc":true}`);export{m as comp,o as data};
