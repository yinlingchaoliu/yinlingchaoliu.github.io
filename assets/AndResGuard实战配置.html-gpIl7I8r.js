import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as t}from"./app-CtvCwAmI.js";const r={},s=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apply plugin: &#39;AndResGuard&#39;

buildscript {
    repositories {
        jcenter()
        google()
    }
    dependencies {
        classpath &#39;com.tencent.mm:AndResGuard-gradle-plugin:1.2.15&#39;
    }
}

andResGuard {
    // mappingFile = file(&quot;./resource_mapping.txt&quot;)
    mappingFile = null
    use7zip = true
    useSign = true
    // it will keep the origin path of your resources when it&#39;s true
    keepRoot = false

    whiteList = [
            // your icon
            &quot;R.drawable.icon&quot;,
            &quot;R.mipmap.ic_launcher&quot;,
            // for fabric
            &quot;R.string.com.crashlytics.*&quot;,
            // for google-services
            &quot;R.string.google_app_id&quot;,
            &quot;R.string.gcm_defaultSenderId&quot;,
            &quot;R.string.default_web_client_id&quot;,
            &quot;R.string.ga_trackingId&quot;,
            &quot;R.string.firebase_database_url&quot;,
            &quot;R.string.google_api_key&quot;,
            &quot;R.string.google_crash_reporting_api_key&quot;,
            &quot;R.dimen.rc_*&quot;,
            //国内第三方
            // for umeng update
            &quot;R.string.umeng*&quot;,
            &quot;R.string.UM*&quot;,
            &quot;R.string.tb_*&quot;,
            &quot;R.string.rc_*&quot;,
            &quot;R.layout.umeng*&quot;,
            &quot;R.layout.tb_*&quot;,
            &quot;R.layout.rc_*&quot;,
            &quot;R.drawable.umeng*&quot;,
            &quot;R.drawable.tb_*&quot;,
            &quot;R.drawable.rc_*&quot;,
            &quot;R.drawable.u1*&quot;,
            &quot;R.drawable.u2*&quot;,
            &quot;R.anim.umeng*&quot;,
            &quot;R.color.umeng*&quot;,
            &quot;R.color.tb_*&quot;,
            &quot;R.color.rc_*&quot;,
            &quot;R.style.*UM*&quot;,
            &quot;R.style.umeng*&quot;,
            &quot;R.style.rc_*&quot;,
            &quot;R.id.umeng*&quot;,
            &quot;R.id.rc_*&quot;,
            // umeng share for sina
            &quot;R.drawable.sina*&quot;,
    ]
    compressFilePattern = [
            &quot;*.png&quot;,
            &quot;*.jpg&quot;,
            &quot;*.jpeg&quot;,
            &quot;*.gif&quot;,
            &quot;resources.arsc&quot;
    ]
    sevenzip {
        artifact = &#39;com.tencent.mm:SevenZip:1.2.15&#39;
        //path = &quot;/usr/local/bin/7za&quot;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####git地址</p><p>命令： gradle resguardDebug gradle resguardRelease gradle resguardUseApk</p><p>选文件 https://github.com/shwenzhang/AndResGuard</p>`,4),a=[s];function d(l,u){return n(),i("div",null,a)}const m=e(r,[["render",d],["__file","AndResGuard实战配置.html.vue"]]),v=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/AndResGuard%E5%AE%9E%E6%88%98%E9%85%8D%E7%BD%AE.html","title":"AndResGuard实战配置","lang":"zh-CN","frontmatter":{"title":"AndResGuard实战配置","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####git地址 命令： gradle resguardDebug gradle resguardRelease gradle resguardUseApk 选文件 https://github.com/shwenzhang/AndResGuard","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/AndResGuard%E5%AE%9E%E6%88%98%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"AndResGuard实战配置"}],["meta",{"property":"og:description","content":"####git地址 命令： gradle resguardDebug gradle resguardRelease gradle resguardUseApk 选文件 https://github.com/shwenzhang/AndResGuard"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AndResGuard实战配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":149},"filePathRelative":"fe/android/Android相关/AndResGuard实战配置.md","localizedDate":"2024年3月24日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>apply plugin: 'AndResGuard'\\n\\nbuildscript {\\n    repositories {\\n        jcenter()\\n        google()\\n    }\\n    dependencies {\\n        classpath 'com.tencent.mm:AndResGuard-gradle-plugin:1.2.15'\\n    }\\n}\\n\\nandResGuard {\\n    // mappingFile = file(\\"./resource_mapping.txt\\")\\n    mappingFile = null\\n    use7zip = true\\n    useSign = true\\n    // it will keep the origin path of your resources when it's true\\n    keepRoot = false\\n\\n    whiteList = [\\n            // your icon\\n            \\"R.drawable.icon\\",\\n            \\"R.mipmap.ic_launcher\\",\\n            // for fabric\\n            \\"R.string.com.crashlytics.*\\",\\n            // for google-services\\n            \\"R.string.google_app_id\\",\\n            \\"R.string.gcm_defaultSenderId\\",\\n            \\"R.string.default_web_client_id\\",\\n            \\"R.string.ga_trackingId\\",\\n            \\"R.string.firebase_database_url\\",\\n            \\"R.string.google_api_key\\",\\n            \\"R.string.google_crash_reporting_api_key\\",\\n            \\"R.dimen.rc_*\\",\\n            //国内第三方\\n            // for umeng update\\n            \\"R.string.umeng*\\",\\n            \\"R.string.UM*\\",\\n            \\"R.string.tb_*\\",\\n            \\"R.string.rc_*\\",\\n            \\"R.layout.umeng*\\",\\n            \\"R.layout.tb_*\\",\\n            \\"R.layout.rc_*\\",\\n            \\"R.drawable.umeng*\\",\\n            \\"R.drawable.tb_*\\",\\n            \\"R.drawable.rc_*\\",\\n            \\"R.drawable.u1*\\",\\n            \\"R.drawable.u2*\\",\\n            \\"R.anim.umeng*\\",\\n            \\"R.color.umeng*\\",\\n            \\"R.color.tb_*\\",\\n            \\"R.color.rc_*\\",\\n            \\"R.style.*UM*\\",\\n            \\"R.style.umeng*\\",\\n            \\"R.style.rc_*\\",\\n            \\"R.id.umeng*\\",\\n            \\"R.id.rc_*\\",\\n            // umeng share for sina\\n            \\"R.drawable.sina*\\",\\n    ]\\n    compressFilePattern = [\\n            \\"*.png\\",\\n            \\"*.jpg\\",\\n            \\"*.jpeg\\",\\n            \\"*.gif\\",\\n            \\"resources.arsc\\"\\n    ]\\n    sevenzip {\\n        artifact = 'com.tencent.mm:SevenZip:1.2.15'\\n        //path = \\"/usr/local/bin/7za\\"\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}`);export{m as comp,v as data};
