import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,f as n}from"./app-CtvCwAmI.js";const s={},a=n(`<p>####1、定义 <code>原型模式：通过复制现有实例创建新实例 </code></p><p>####写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 原型模式
 * 浅拷贝与深拷贝
 * 浅拷贝其内容
 * 深拷贝其对象
 */
public class Book implements Cloneable{

    private String title; //浅拷贝
    private ArrayList&lt;String&gt; images; //深拷贝

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList&lt;String&gt; getImages() {
        return images;
    }

    public void setImages(ArrayList&lt;String&gt; images) {
        this.images = images;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        Book book = (Book) super.clone();
        ArrayList imageList = (ArrayList)images.clone();
        book.setImages( imageList );
        return book;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####代码示例 https://github.com/yinlingchaoliu/23-design-pattern</p>`,4),r=[a];function l(d,c){return i(),t("div",null,r)}const p=e(s,[["render",l],["__file","设计模式-创建型-原型模式.html.vue"]]),v=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html","title":"设计模式-创建型-原型模式","lang":"zh-CN","frontmatter":{"title":"设计模式-创建型-原型模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"####1、定义 原型模式：通过复制现有实例创建新实例 ####写法 ####代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%88%9B%E5%BB%BA%E5%9E%8B-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-创建型-原型模式"}],["meta",{"property":"og:description","content":"####1、定义 原型模式：通过复制现有实例创建新实例 ####写法 ####代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-创建型-原型模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"basis/design-pattern/设计模式-创建型-原型模式.md","localizedDate":"2024年3月24日","excerpt":"<p>####1、定义\\n<code>原型模式：通过复制现有实例创建新实例 </code></p>\\n<p>####写法</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 原型模式\\n * 浅拷贝与深拷贝\\n * 浅拷贝其内容\\n * 深拷贝其对象\\n */\\npublic class Book implements Cloneable{\\n\\n    private String title; //浅拷贝\\n    private ArrayList&lt;String&gt; images; //深拷贝\\n\\n    public String getTitle() {\\n        return title;\\n    }\\n\\n    public void setTitle(String title) {\\n        this.title = title;\\n    }\\n\\n    public ArrayList&lt;String&gt; getImages() {\\n        return images;\\n    }\\n\\n    public void setImages(ArrayList&lt;String&gt; images) {\\n        this.images = images;\\n    }\\n\\n    @Override\\n    protected Object clone() throws CloneNotSupportedException {\\n        Book book = (Book) super.clone();\\n        ArrayList imageList = (ArrayList)images.clone();\\n        book.setImages( imageList );\\n        return book;\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{p as comp,v as data};
