import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,f as r}from"./app-CtvCwAmI.js";const d={},s=r(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>组合模式：将对象组成树形结构以表示“整体-部分”的层次结构 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//目录抽象类
public abstract class Dir {

    private String name;

    protected List&lt;Dir&gt; dirs = new ArrayList&lt;&gt;(  );

    public Dir(String name){
        this.name = name;
    }

    public abstract void addDir(Dir dir);

    public abstract void rmDir(Dir dir);

    public abstract void clear();

    public abstract void print();

    public abstract List&lt;Dir&gt; getFiles();

    public  String getName(){
        return name;
    }
}


public class File extends Dir{

    public File(String name) {
        super(name);
    }

    @Override
    public void addDir(Dir dir) {
        throw new UnsupportedOperationException(&quot;文件对象不支持该操作！&quot;);
    }

    @Override
    public void rmDir(Dir dir) {
        throw new UnsupportedOperationException(&quot;文件对象不支持该操作！&quot;);
    }

    @Override
    public void clear() {
        throw new UnsupportedOperationException(&quot;文件对象不支持该操作！&quot;);
    }

    @Override
    public void print() {
        System.out.print(getName());
    }

    @Override
    public List&lt;Dir&gt; getFiles() {
        throw new UnsupportedOperationException(&quot;文件对象不支持该操作！&quot;);
    }

}

public class Folder extends Dir{

    public Folder(String name) {
        super( name );
    }

    @Override
    public void addDir(Dir dir) {
        dirs.add( dir );
    }

    @Override
    public void rmDir(Dir dir) {
        dirs.remove( dir );
    }

    @Override
    public void clear() {
        dirs.clear();
    }

    @Override
    public void print() {
        System.out.print(getName() + &quot;(&quot;);
        Iterator&lt;Dir&gt; iter = dirs.iterator();
        while (iter.hasNext()) {
            Dir dir = iter.next();
            dir.print();
            if(iter.hasNext()){
                System.out.print(&quot;, &quot;);
            }
        }
        System.out.print(&quot;)&quot;);
    }

    @Override
    public List&lt;Dir&gt; getFiles() {
        return dirs;
    }
}

public class TestMain {

    /**
     * 组合模式表示 : 整体-部分的关系
     * @param args 树型结构
     */
    public static void main(String[] args) {

        //构造一个目录对象表示C盘根目录
        Dir diskC = new Folder(&quot;C&quot;);

        //C盘根目录下有一个文件Log.txt
        diskC.addDir(new File(&quot;Log.txt&quot;));

        //C盘根目录下有三个目录Windows、PerfLogs、Program File
        Dir dirWin = new Folder(&quot;Windows&quot;);

        //Windows目录下有文件explorer.exe
        dirWin.addDir(new File(&quot;explorer.exe&quot;));
        diskC.addDir(dirWin);

        //打印出文件结构
        diskC.print();

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),l=[s];function t(a,v){return n(),e("div",null,l)}const m=i(d,[["render",t],["__file","设计模式-结构型-组合模式.html.vue"]]),o=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%BB%93%E6%9E%84%E5%9E%8B-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F.html","title":"设计模式-结构型-组合模式","lang":"zh-CN","frontmatter":{"title":"设计模式-结构型-组合模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 组合模式：将对象组成树形结构以表示“整体-部分”的层次结构 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%BB%93%E6%9E%84%E5%9E%8B-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-结构型-组合模式"}],["meta",{"property":"og:description","content":"1、定义 组合模式：将对象组成树形结构以表示“整体-部分”的层次结构 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-结构型-组合模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"basis/design-pattern/设计模式-结构型-组合模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>组合模式：将对象组成树形结构以表示“整体-部分”的层次结构 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>//目录抽象类\\npublic abstract class Dir {\\n\\n    private String name;\\n\\n    protected List&lt;Dir&gt; dirs = new ArrayList&lt;&gt;(  );\\n\\n    public Dir(String name){\\n        this.name = name;\\n    }\\n\\n    public abstract void addDir(Dir dir);\\n\\n    public abstract void rmDir(Dir dir);\\n\\n    public abstract void clear();\\n\\n    public abstract void print();\\n\\n    public abstract List&lt;Dir&gt; getFiles();\\n\\n    public  String getName(){\\n        return name;\\n    }\\n}\\n\\n\\npublic class File extends Dir{\\n\\n    public File(String name) {\\n        super(name);\\n    }\\n\\n    @Override\\n    public void addDir(Dir dir) {\\n        throw new UnsupportedOperationException(\\"文件对象不支持该操作！\\");\\n    }\\n\\n    @Override\\n    public void rmDir(Dir dir) {\\n        throw new UnsupportedOperationException(\\"文件对象不支持该操作！\\");\\n    }\\n\\n    @Override\\n    public void clear() {\\n        throw new UnsupportedOperationException(\\"文件对象不支持该操作！\\");\\n    }\\n\\n    @Override\\n    public void print() {\\n        System.out.print(getName());\\n    }\\n\\n    @Override\\n    public List&lt;Dir&gt; getFiles() {\\n        throw new UnsupportedOperationException(\\"文件对象不支持该操作！\\");\\n    }\\n\\n}\\n\\npublic class Folder extends Dir{\\n\\n    public Folder(String name) {\\n        super( name );\\n    }\\n\\n    @Override\\n    public void addDir(Dir dir) {\\n        dirs.add( dir );\\n    }\\n\\n    @Override\\n    public void rmDir(Dir dir) {\\n        dirs.remove( dir );\\n    }\\n\\n    @Override\\n    public void clear() {\\n        dirs.clear();\\n    }\\n\\n    @Override\\n    public void print() {\\n        System.out.print(getName() + \\"(\\");\\n        Iterator&lt;Dir&gt; iter = dirs.iterator();\\n        while (iter.hasNext()) {\\n            Dir dir = iter.next();\\n            dir.print();\\n            if(iter.hasNext()){\\n                System.out.print(\\", \\");\\n            }\\n        }\\n        System.out.print(\\")\\");\\n    }\\n\\n    @Override\\n    public List&lt;Dir&gt; getFiles() {\\n        return dirs;\\n    }\\n}\\n\\npublic class TestMain {\\n\\n    /**\\n     * 组合模式表示 : 整体-部分的关系\\n     * @param args 树型结构\\n     */\\n    public static void main(String[] args) {\\n\\n        //构造一个目录对象表示C盘根目录\\n        Dir diskC = new Folder(\\"C\\");\\n\\n        //C盘根目录下有一个文件Log.txt\\n        diskC.addDir(new File(\\"Log.txt\\"));\\n\\n        //C盘根目录下有三个目录Windows、PerfLogs、Program File\\n        Dir dirWin = new Folder(\\"Windows\\");\\n\\n        //Windows目录下有文件explorer.exe\\n        dirWin.addDir(new File(\\"explorer.exe\\"));\\n        diskC.addDir(dirWin);\\n\\n        //打印出文件结构\\n        diskC.print();\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
