import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as t}from"./app-CtvCwAmI.js";const l={},a=t(`<p>####使用方法 引用依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apply plugin: &#39;android-aspectjx&#39;

aspectjx {
    enabled true
}

classpath &#39;com.hujiang.aspectjx:gradle-android-plugin-aspectjx:2.0.4&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用范例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//从此就有去重功能
@ SingleClick
void testClick(){

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####代码示例</p><ul><li>SingleClick注解</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 防止View被连续点击
 */
@Retention(RetentionPolicy.CLASS)
@Target(ElementType.METHOD)
public @interface SingleClick {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SingleClickAspect</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 防止View被连续点击,间隔时间600ms
 *
 * @author chentong
 * @date 18/3/29
 */
@Aspect
public class SingleClickAspect {
    private static long lastClickTime;
   @Pointcut(&quot;execution(@com.xxx.app.aop.annotation.aspect.SingleClick * *(..))&quot;)
    //方法切入点
    public void methodAnnotated() {
    }

    @Around(&quot;methodAnnotated()&quot;)//在连接点进行方法替换
    public void aroundJoinPoint(ProceedingJoinPoint joinPoint) throws Throwable {
        if (!isFastDoubleClick()) {
            joinPoint.proceed();//执行原方法
        }
    }

    public  boolean isFastDoubleClick() {
        long time = System.currentTimeMillis();
        long timeD = time - lastClickTime;
        if (0 &lt; timeD &amp;&amp; timeD &lt; 600) {
            return true;
        }
        lastClickTime = time;
        return false;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[a];function s(c,r){return i(),n("div",null,d)}const u=e(l,[["render",s],["__file","aop-singleClick-双击去重.html.vue"]]),m=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/aop-singleClick-%E5%8F%8C%E5%87%BB%E5%8E%BB%E9%87%8D.html","title":"aop-singleClick-双击去重","lang":"zh-CN","frontmatter":{"title":"aop-singleClick-双击去重","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####使用方法 引用依赖 使用范例 ####代码示例 SingleClick注解 SingleClickAspect","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/aop-singleClick-%E5%8F%8C%E5%87%BB%E5%8E%BB%E9%87%8D.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"aop-singleClick-双击去重"}],["meta",{"property":"og:description","content":"####使用方法 引用依赖 使用范例 ####代码示例 SingleClick注解 SingleClickAspect"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"aop-singleClick-双击去重\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.58,"words":174},"filePathRelative":"fe/android/Android相关/aop-singleClick-双击去重.md","localizedDate":"2024年3月24日","excerpt":"<p>####使用方法\\n引用依赖</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>apply plugin: 'android-aspectjx'\\n\\naspectjx {\\n    enabled true\\n}\\n\\nclasspath 'com.hujiang.aspectjx:gradle-android-plugin-aspectjx:2.0.4'\\n</code></pre></div><p>使用范例</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>//从此就有去重功能\\n@ SingleClick\\nvoid testClick(){\\n\\n}\\n\\n</code></pre></div>","autoDesc":true}`);export{u as comp,m as data};
