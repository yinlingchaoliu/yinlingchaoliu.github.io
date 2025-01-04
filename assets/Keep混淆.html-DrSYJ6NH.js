import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as i}from"./app-CtvCwAmI.js";const a={},d=i(`<p>keep注解 支持变量、方法、构造方法、类、注解</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Retention(RetentionPolicy.CLASS)
@Target({ElementType.PACKAGE, ElementType.TYPE, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.FIELD})
public @interface Keep {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混淆文件proguard-rules.pro</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Understand the @Keep support annotation.
-dontwarn android.support.**
-keep class android.support.annotation.Keep

-keep @android.support.annotation.Keep class * {*;}

-keepclasseswithmembers class * {
    @android.support.annotation.Keep &lt;methods&gt;;
}

-keepclasseswithmembers class * {
    @android.support.annotation.Keep &lt;fields&gt;;
}

-keepclasseswithmembers class * {
    @android.support.annotation.Keep &lt;init&gt;(...);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>android代码，哪些类不需要混淆，就@Keep即可</p>`,5),r=[d];function s(l,o){return t(),n("div",null,r)}const m=e(a,[["render",s],["__file","Keep混淆.html.vue"]]),u=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Keep%E6%B7%B7%E6%B7%86.html","title":"Keep混淆","lang":"zh-CN","frontmatter":{"title":"Keep混淆","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"keep注解 支持变量、方法、构造方法、类、注解 混淆文件proguard-rules.pro android代码，哪些类不需要混淆，就@Keep即可","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Keep%E6%B7%B7%E6%B7%86.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Keep混淆"}],["meta",{"property":"og:description","content":"keep注解 支持变量、方法、构造方法、类、注解 混淆文件proguard-rules.pro android代码，哪些类不需要混淆，就@Keep即可"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Keep混淆\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":92},"filePathRelative":"fe/android/Android相关/Keep混淆.md","localizedDate":"2024年3月24日","excerpt":"<p>keep注解 支持变量、方法、构造方法、类、注解</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>@Retention(RetentionPolicy.CLASS)\\n@Target({ElementType.PACKAGE, ElementType.TYPE, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.FIELD})\\npublic @interface Keep {\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,u as data};
