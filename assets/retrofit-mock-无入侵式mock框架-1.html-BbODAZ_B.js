import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as s,a as t,b as e,d as r,f as c}from"./app-CtvCwAmI.js";const l={},d={href:"https://www.jianshu.com/p/52df6aa67a5f",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/9ef526b30b9c",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/48fa1ad00084",target:"_blank",rel:"noopener noreferrer"},v=c(`<h5 id="_1、retrofit-mock框架编写背景需求" tabindex="-1"><a class="header-anchor" href="#_1、retrofit-mock框架编写背景需求"><span>1、retrofit-mock框架编写背景需求</span></a></h5><p>项目采用的是MVPArms框架，用的dragger方式注入，retrofiit已经封装在底层了，就是给上层提供服务的。没有显著的点，来插入代码。例如</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var api = createMocker(service, retrofit) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样，项目早期，我们很难专门预留出位置，做这样的扩展，如果接手项目或项目中期，可能需要修改网络代码，引入mock，为线上很容易引入潜在问题， 此时，我们核心诉求：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、尽量不修改旧的网路代码。
2、通过反射等手段来hook，但不影响正式包效率
3、mock测试代码与生产代码一致，不需要动业务代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、编写思路" tabindex="-1"><a class="header-anchor" href="#_2、编写思路"><span>2、编写思路</span></a></h5><p>最初考虑是反射来hook，但是需要有hook点，插入代码 mvparms很难找出这样的点，而且修改create()函数，需要改动代码点很多。所以有没有一种方式在create()函数拦截的方法 我们可以采用新的思路 采用AspectJ插件来进行AOP拦截。 <code>经过实践，aspect 不能拦截接口方法</code> 我们可以拦截 create(service) 方法，在拦截方法注入代码进行我们需要的操作</p><h5 id="_3、retrofitmock-aop" tabindex="-1"><a class="header-anchor" href="#_3、retrofitmock-aop"><span>3、RetrofitMock aop</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Aspect
public class RetrofitMock {

    private String TAG = &quot;RetrofitMock&quot;;

    /** retrofit mock开关*/
    private static volatile boolean enabled = true;

    private static boolean isEnabled() {
        return enabled;
    }

    public static void setEnabled(boolean enabled) {
        RetrofitMock.enabled = enabled;
    }

    @Around(&quot;execution(* retrofit2.Retrofit.create(..))&quot;)
    public Object aroundJoinPoint(ProceedingJoinPoint joinPoint) throws Throwable {

//        Log.e( TAG, &quot;我终于hook了retrofit&quot; );
        if (!isEnabled()) {
            return joinPoint.proceed();//执行原方法
        }

        Object[] parameterValues = joinPoint.getArgs();
        Retrofit retrofit = (Retrofit) joinPoint.getThis();
        Class service = (Class) parameterValues[0];
        Object api = joinPoint.proceed();

        return Proxy.newProxyInstance( service.getClassLoader(), new Class&lt;?&gt;[]{service}, new MockerHandler( retrofit, api ) );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切点是（retrofit2.Retrofit.create()）在切点方法里注入代码，就可以实现不修改原有的网络代码实现效果。</p><p>如果使Aop失效，可以用RetrofitMock的空方法替换，又不损失效率，如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class RetrofitMock {
    /** retrofit mock开关*/
    private static volatile boolean enabled = true;
    private static boolean isEnabled() {
        return enabled;
    }
    public static void setEnabled(boolean enabled) {
        RetrofitMock.enabled = enabled;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如用法示例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>debugImplementation &#39;com.github.yinlingchaoliu:retrofit-mock:1.0.1&#39;
releaseImplementation &#39;com.github.yinlingchaoliu:retrofit-mock-no-op:1.0.1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>release版有注解的空实现，生产版本，引入会导致aop失效，又不损失效率</p>`,15),u={href:"https://www.jianshu.com/p/ef445d5e9be0",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,"本文代码 https://github.com/yinlingchaoliu/retrofitMock",-1);function f(h,k){const i=a("ExternalLinkIcon");return o(),s("div",null,[t("p",null,[e("####导航 "),t("a",d,[e("1、retrofit-mock用法"),r(i)]),t("a",m,[e("2、retrofit-mock编写思路(aop)"),r(i)]),t("a",p,[e("3 、retrofit-mock的动态代理及注解"),r(i)]),e(" 4、aspect 原理讲解与注解语法")]),v,t("p",null,[e("#####4、特别感谢 首先特别感谢"),t("a",u,[e("javalong"),r(i)]),e(",给retrofit-mock提供了好的思路")]),b])}const x=n(l,[["render",f],["__file","retrofit-mock-无入侵式mock框架-1.html.vue"]]),E=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/retrofit-mock-%E6%97%A0%E5%85%A5%E4%BE%B5%E5%BC%8Fmock%E6%A1%86%E6%9E%B6-1.html","title":"retrofit-mock-无入侵式mock框架-1","lang":"zh-CN","frontmatter":{"title":"retrofit-mock-无入侵式mock框架-1","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"####导航 1、retrofit-mock用法 2、retrofit-mock编写思路(aop) 3 、retrofit-mock的动态代理及注解 4、aspect 原理讲解与注解语法 1、retrofit-mock框架编写背景需求 项目采用的是MVPArms框架，用的dragger方式注入，retrofiit已经封装在底层了，就是给上层提供服务的。...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/retrofit-mock-%E6%97%A0%E5%85%A5%E4%BE%B5%E5%BC%8Fmock%E6%A1%86%E6%9E%B6-1.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"retrofit-mock-无入侵式mock框架-1"}],["meta",{"property":"og:description","content":"####导航 1、retrofit-mock用法 2、retrofit-mock编写思路(aop) 3 、retrofit-mock的动态代理及注解 4、aspect 原理讲解与注解语法 1、retrofit-mock框架编写背景需求 项目采用的是MVPArms框架，用的dragger方式注入，retrofiit已经封装在底层了，就是给上层提供服务的。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"retrofit-mock-无入侵式mock框架-1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.12,"words":635},"filePathRelative":"fe/android/框架编写/retrofit-mock-无入侵式mock框架-1.md","localizedDate":"2024年3月24日","excerpt":"<p>####导航\\n<a href=\\"https://www.jianshu.com/p/52df6aa67a5f\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1、retrofit-mock用法</a>\\n<a href=\\"https://www.jianshu.com/p/9ef526b30b9c\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2、retrofit-mock编写思路(aop)</a>\\n<a href=\\"https://www.jianshu.com/p/48fa1ad00084\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3 、retrofit-mock的动态代理及注解</a>\\n4、aspect 原理讲解与注解语法</p>","autoDesc":true}');export{x as comp,E as data};
