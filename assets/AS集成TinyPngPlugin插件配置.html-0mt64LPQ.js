import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as t}from"./app-CtvCwAmI.js";const r={},a=t(`<p>####配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apply plugin: &#39;com.waynell.tinypng&#39;

buildscript {
    repositories {
        jcenter()
        google()
    }
    dependencies {
        classpath &#39;com.waynell.tinypng:TinyPngPlugin:1.0.5&#39;
    }
}

//命令：./gradlew tinyPng
tinyInfo {
    resourceDir = [
            // your res dir
            &quot;app/src/main/res&quot;,
            &quot;lib/src/main/res&quot;
    ]
    resourcePattern = [
            // your res pattern
            &quot;drawable[a-z-]*&quot;,
            &quot;mipmap[a-z-]*&quot;
    ]
    whiteList = [
            // your white list, support Regular Expressions
    ]
    apiKey = &#39;xxxxxx&#39;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令：gradle tinyPng</p><p>https://github.com/yinlingchaoliu/TinyPngPlugin</p>`,4),l=[a];function s(d,o){return e(),i("div",null,l)}const p=n(r,[["render",s],["__file","AS集成TinyPngPlugin插件配置.html.vue"]]),m=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/AS%E9%9B%86%E6%88%90TinyPngPlugin%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE.html","title":"AS集成TinyPngPlugin插件配置","lang":"zh-CN","frontmatter":{"title":"AS集成TinyPngPlugin插件配置","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####配置 命令：gradle tinyPng https://github.com/yinlingchaoliu/TinyPngPlugin","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/AS%E9%9B%86%E6%88%90TinyPngPlugin%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"AS集成TinyPngPlugin插件配置"}],["meta",{"property":"og:description","content":"####配置 命令：gradle tinyPng https://github.com/yinlingchaoliu/TinyPngPlugin"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AS集成TinyPngPlugin插件配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.25,"words":76},"filePathRelative":"fe/android/Android相关/AS集成TinyPngPlugin插件配置.md","localizedDate":"2024年3月24日","excerpt":"<p>####配置</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>apply plugin: 'com.waynell.tinypng'\\n\\nbuildscript {\\n    repositories {\\n        jcenter()\\n        google()\\n    }\\n    dependencies {\\n        classpath 'com.waynell.tinypng:TinyPngPlugin:1.0.5'\\n    }\\n}\\n\\n//命令：./gradlew tinyPng\\ntinyInfo {\\n    resourceDir = [\\n            // your res dir\\n            \\"app/src/main/res\\",\\n            \\"lib/src/main/res\\"\\n    ]\\n    resourcePattern = [\\n            // your res pattern\\n            \\"drawable[a-z-]*\\",\\n            \\"mipmap[a-z-]*\\"\\n    ]\\n    whiteList = [\\n            // your white list, support Regular Expressions\\n    ]\\n    apiKey = 'xxxxxx'\\n\\n}\\n</code></pre></div>","autoDesc":true}`);export{p as comp,m as data};
