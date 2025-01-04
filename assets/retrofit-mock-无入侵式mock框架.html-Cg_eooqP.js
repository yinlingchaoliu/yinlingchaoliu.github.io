import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as l,a as t,b as e,d as n,f as s}from"./app-CtvCwAmI.js";const d={},c={href:"https://www.jianshu.com/p/52df6aa67a5f",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/9ef526b30b9c",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/48fa1ad00084",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>#####1、前言 retrofit作为网络核心框架，作为基础库。 针对retrofit有很多封装，并不会有很多机会，稳定项目进行二次封装，添加mock代码，这样会造成程序的整体不稳定，增加测试难度，通常如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var api = createMocker(service, retrofit) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以需要开发一款无入侵式mock工具，随时挂载mock和卸载mock的框架</p><p>目前retrofit-mock框架功能</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、mock框架无入侵式注入，不需要修改原有网络代码
2、mock框架正式生产包，不会有效率影响
3、支持注解配置，不需要额外代码，生产代码与测试代码一致
4、支持http，本地json，同时兼容适配retrofit2.5.0版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>######问题反馈解答：</p><ul><li><p>1、mock库在debug包生效，release包失效，想使用mock效果，请用debug包</p></li><li><p>2、写mock库目的：生产包和测试包用同一份代码，不需要额外修改</p></li><li><p>3、mock在debug生效，release包失效原理：retrofit-mock库是mock真正实现代码，retrofit-mock-no-op库是空实现。如果你希望release包生效，请引用retrofit-mock库</p></li></ul><p>#####2、retrofit-mock用法</p><ul><li>1、用法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * MOCK 有两种写法
 * mock http地址
 * mock 本地json数据
 */
public interface Api {

    @MOCK(value = &quot;appversion/update.json&quot;,enable = true)
    @GET(Urls.UPDATE_INTERFACENAME)
    Observable&lt;BaseDataBean&lt;IsUpdateBean&gt;&gt; getUpdateInfo();

    @MOCK(value = &quot;https://www.baidu.com&quot;, enable = false)
    @GET(Urls.UPDATE_INTERFACENAME)
    Observable&lt;BaseDataBean&lt;IsUpdateBean&gt;&gt; getUpdateInfo2();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上两种用法</p><p>enable 是当前接口是否mock的开关</p><p>为了便于易用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//RetrofitMock 是mock的所有接口的总开关
RetrofitMock.setEnabled( true ); 
//针对于debugRelease
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2、retrofit-mock的依赖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dependencies{
    debugImplementation &#39;com.github.yinlingchaoliu:retrofit-mock:1.0.1&#39;
    releaseImplementation &#39;com.github.yinlingchaoliu:retrofit-mock-no-op:1.0.1&#39;
}

//aop开启
aspectjx {
    enabled true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>allprojects {
    repositories {
        maven { url &#39;https://www.jitpack.io&#39; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用aop插件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//引入插件
buildscript {
    dependencies {
        classpath &#39;com.hujiang.aspectjx:gradle-android-plugin-aspectjx:2.0.4&#39;
    }
}
添加对应依赖
apply plugin: &#39;android-aspectjx&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加混淆</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>####retrofit-mock
-keep class retrofit2.** {*;}
-keep class com.chaoliu.mock.** {*;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),v={href:"https://www.jianshu.com/p/ef445d5e9be0",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,"本文代码 https://github.com/yinlingchaoliu/retrofitMock",-1);function f(g,k){const i=r("ExternalLinkIcon");return o(),l("div",null,[t("p",null,[e("####导航 "),t("a",c,[e("1、retrofit-mock用法"),n(i)]),t("a",m,[e("2、retrofit-mock编写思路(aop)"),n(i)]),t("a",p,[e("3 、retrofit-mock的动态代理及注解"),n(i)]),e(" 4、aspect 原理讲解与注解语法")]),u,t("p",null,[e("#####4、特别感谢 首先特别感谢"),t("a",v,[e("javalong"),n(i)]),e(",给retrofit-mock提供了好的思路")]),b])}const _=a(d,[["render",f],["__file","retrofit-mock-无入侵式mock框架.html.vue"]]),E=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/retrofit-mock-%E6%97%A0%E5%85%A5%E4%BE%B5%E5%BC%8Fmock%E6%A1%86%E6%9E%B6.html","title":"retrofit-mock-无入侵式mock框架","lang":"zh-CN","frontmatter":{"title":"retrofit-mock-无入侵式mock框架","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"####导航 1、retrofit-mock用法 2、retrofit-mock编写思路(aop) 3 、retrofit-mock的动态代理及注解 4、aspect 原理讲解与注解语法 #####1、前言 retrofit作为网络核心框架，作为基础库。 针对retrofit有很多封装，并不会有很多机会，稳定项目进行二次封装，添加mock代码，这样会造...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/retrofit-mock-%E6%97%A0%E5%85%A5%E4%BE%B5%E5%BC%8Fmock%E6%A1%86%E6%9E%B6.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"retrofit-mock-无入侵式mock框架"}],["meta",{"property":"og:description","content":"####导航 1、retrofit-mock用法 2、retrofit-mock编写思路(aop) 3 、retrofit-mock的动态代理及注解 4、aspect 原理讲解与注解语法 #####1、前言 retrofit作为网络核心框架，作为基础库。 针对retrofit有很多封装，并不会有很多机会，稳定项目进行二次封装，添加mock代码，这样会造..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"retrofit-mock-无入侵式mock框架\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"fe/android/框架编写/retrofit-mock-无入侵式mock框架.md","localizedDate":"2024年3月24日","excerpt":"<p>####导航\\n<a href=\\"https://www.jianshu.com/p/52df6aa67a5f\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1、retrofit-mock用法</a>\\n<a href=\\"https://www.jianshu.com/p/9ef526b30b9c\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2、retrofit-mock编写思路(aop)</a>\\n<a href=\\"https://www.jianshu.com/p/48fa1ad00084\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3 、retrofit-mock的动态代理及注解</a>\\n4、aspect 原理讲解与注解语法</p>","autoDesc":true}');export{_ as comp,E as data};
