import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,f as n}from"./app-CtvCwAmI.js";const t={},l=n(`<p>简单sharepref存储工具，支持多sharepref表使用，支持参数化配置</p><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h3><p>https://github.com/yinlingchaoliu/sharepref.git</p><h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h3><p><img src="https://upload-images.jianshu.io/upload_images/5526061-260e0a4c86ab82ff.gif?imageMogr2/auto-orient/strip" alt="" loading="lazy"> 源码中有完整使用示例</p><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h3><ul><li>支持参数可配置化</li><li>支持多种数据类型任意实体类， list， map</li><li>支持原有sp数据存储 getObj putObj</li><li>支持数据迁移</li><li>可扩展性强，后续可支持加密</li><li>支持数据异步提交用apply并且兼容</li><li>支持多sharepref文件</li><li>支持项目可拆分多部分 动态配置, 基本库(sp+注解)</li></ul><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h3><p>1.引仓库</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>maven { url &#39;https://jitpack.io&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.加依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>implementation &#39;com.github.yinlingchaoliu:sharepref:1.0.0&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h3><h4 id="_1、增加注解配置" tabindex="-1"><a class="header-anchor" href="#_1、增加注解配置"><span>1、增加注解配置</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 初始化spname
 * 一个spname 映射 一个table
 */
@SPNAME(&quot;sharepref_table&quot;) //sharepref文件名
public interface ISharedPref {

    @KEY(&quot;username&quot;) //存储的key值
    @DEFAULT(&quot;&quot;)    //默认值
    Call&lt;String&gt; username(); //支持数据类型 String

    @KEY(&quot;isOk&quot;)
    @DEFAULT(&quot;false&quot;)
    Call&lt;Boolean&gt; isOk();//支持数据类型 boolean

    @KEY(&quot;age&quot;)
    @DEFAULT(&quot;0&quot;)
    Call&lt;Integer&gt; age();//支持数据类型 Integer

    @KEY(&quot;waitTime&quot;)
    @DEFAULT(&quot;0&quot;)
    Call&lt;Long&gt; waitTime();//支持数据类型 Long

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、继承sharepreffacade-如下实现即可" tabindex="-1"><a class="header-anchor" href="#_2、继承sharepreffacade-如下实现即可"><span>2、继承SharePrefFacade，如下实现即可</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SharePrefManager extends SharePrefFacade {

    private ISharedPref mISharedPrefDelegate;

    @Override
    public void create() {
        mISharedPrefDelegate = create(ISharedPref.class);
    }

    public static ISharedPref ISharedPref() {
        return getIns().mISharedPrefDelegate;
    }
    
    private SharePrefManager() {
    }

    private static class SingleHolder {
        private static final SharePrefManager sharePrefManager = new SharePrefManager();
    }

    public static SharePrefManager getIns() {
        return SingleHolder.sharePrefManager;
    }

} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、application初始化" tabindex="-1"><a class="header-anchor" href="#_3、application初始化"><span>3、application初始化</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SharePrefManager.getIns().init(this);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、使用" tabindex="-1"><a class="header-anchor" href="#_4、使用"><span>4、使用</span></a></h4><ol><li>存储</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SharePrefManager.ISharedPref().username().put(name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>取值</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>String name = SharePrefManager.ISharedPref().username().get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="感谢" tabindex="-1"><a class="header-anchor" href="#感谢"><span>感谢</span></a></h3><p>参考： https://github.com/orhanobut/hawk</p>`,26),r=[l];function s(d,c){return a(),i("div",null,r)}const u=e(t,[["render",s],["__file","简单易用sharepref存储工具.html.vue"]]),h=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/%E7%AE%80%E5%8D%95%E6%98%93%E7%94%A8sharepref%E5%AD%98%E5%82%A8%E5%B7%A5%E5%85%B7.html","title":"简单易用sharepref存储工具","lang":"zh-CN","frontmatter":{"title":"简单易用sharepref存储工具","date":"2024-03-24T11:47:50.000Z","category":["开源工具"],"tag":["archive"],"description":"简单sharepref存储工具，支持多sharepref表使用，支持参数化配置 源码 https://github.com/yinlingchaoliu/sharepref.git 演示 源码中有完整使用示例 功能 支持参数可配置化 支持多种数据类型任意实体类， list， map 支持原有sp数据存储 getObj putObj 支持数据迁移 可扩展...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/%E7%AE%80%E5%8D%95%E6%98%93%E7%94%A8sharepref%E5%AD%98%E5%82%A8%E5%B7%A5%E5%85%B7.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"简单易用sharepref存储工具"}],["meta",{"property":"og:description","content":"简单sharepref存储工具，支持多sharepref表使用，支持参数化配置 源码 https://github.com/yinlingchaoliu/sharepref.git 演示 源码中有完整使用示例 功能 支持参数可配置化 支持多种数据类型任意实体类， list， map 支持原有sp数据存储 getObj putObj 支持数据迁移 可扩展..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-260e0a4c86ab82ff.gif?imageMogr2/auto-orient/strip"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简单易用sharepref存储工具\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-260e0a4c86ab82ff.gif?imageMogr2/auto-orient/strip\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"源码","slug":"源码","link":"#源码","children":[]},{"level":3,"title":"演示","slug":"演示","link":"#演示","children":[]},{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":3,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":3,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":3,"title":"感谢","slug":"感谢","link":"#感谢","children":[]}],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.21,"words":363},"filePathRelative":"fe/android/框架编写/简单易用sharepref存储工具.md","localizedDate":"2024年3月24日","excerpt":"<p>简单sharepref存储工具，支持多sharepref表使用，支持参数化配置</p>\\n<h3>源码</h3>\\n<p>https://github.com/yinlingchaoliu/sharepref.git</p>\\n<h3>演示</h3>\\n<p><img src=\\"https://upload-images.jianshu.io/upload_images/5526061-260e0a4c86ab82ff.gif?imageMogr2/auto-orient/strip\\" alt=\\"\\" loading=\\"lazy\\">\\n源码中有完整使用示例</p>\\n<h3>功能</h3>\\n<ul>\\n<li>支持参数可配置化</li>\\n<li>支持多种数据类型任意实体类， list， map</li>\\n<li>支持原有sp数据存储 getObj putObj</li>\\n<li>支持数据迁移</li>\\n<li>可扩展性强，后续可支持加密</li>\\n<li>支持数据异步提交用apply并且兼容</li>\\n<li>支持多sharepref文件</li>\\n<li>支持项目可拆分多部分 动态配置, 基本库(sp+注解)</li>\\n</ul>","autoDesc":true}');export{u as comp,h as data};
