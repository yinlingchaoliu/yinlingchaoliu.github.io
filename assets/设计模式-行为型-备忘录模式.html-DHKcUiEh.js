import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as t}from"./app-CtvCwAmI.js";const s={},a=t(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>备忘录模式：在不破坏封装前提下，保存对象内部状态 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Memoto {
    private String name;
    private String age;
    private String sex;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}

public interface IMemotoStore {
    void store(Memoto memoto);
    Memoto restore();
}

/**
 * 备忘录模式
 */
public class Caretaker implements IMemotoStore{

    private Memoto memoto = new Memoto();

    @Override
    public void store(Memoto memoto) {
        memoto.setAge( memoto.getAge());
        memoto.setName( memoto.getName() );
        memoto.setSex( memoto.getSex() );
    }

    @Override
    public Memoto restore() {
        return memoto;
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),r=[a];function l(d,o){return n(),i("div",null,r)}const v=e(s,[["render",l],["__file","设计模式-行为型-备忘录模式.html.vue"]]),u=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-备忘录模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-备忘录模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 备忘录模式：在不破坏封装前提下，保存对象内部状态 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-备忘录模式"}],["meta",{"property":"og:description","content":"1、定义 备忘录模式：在不破坏封装前提下，保存对象内部状态 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-备忘录模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"basis/design-pattern/设计模式-行为型-备忘录模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>备忘录模式：在不破坏封装前提下，保存对象内部状态 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public class Memoto {\\n    private String name;\\n    private String age;\\n    private String sex;\\n\\n    public String getName() {\\n        return name;\\n    }\\n\\n    public void setName(String name) {\\n        this.name = name;\\n    }\\n\\n    public String getAge() {\\n        return age;\\n    }\\n\\n    public void setAge(String age) {\\n        this.age = age;\\n    }\\n\\n    public String getSex() {\\n        return sex;\\n    }\\n\\n    public void setSex(String sex) {\\n        this.sex = sex;\\n    }\\n}\\n\\npublic interface IMemotoStore {\\n    void store(Memoto memoto);\\n    Memoto restore();\\n}\\n\\n/**\\n * 备忘录模式\\n */\\npublic class Caretaker implements IMemotoStore{\\n\\n    private Memoto memoto = new Memoto();\\n\\n    @Override\\n    public void store(Memoto memoto) {\\n        memoto.setAge( memoto.getAge());\\n        memoto.setName( memoto.getName() );\\n        memoto.setSex( memoto.getSex() );\\n    }\\n\\n    @Override\\n    public Memoto restore() {\\n        return memoto;\\n    }\\n\\n}\\n\\n</code></pre></div>","autoDesc":true}');export{v as comp,u as data};
