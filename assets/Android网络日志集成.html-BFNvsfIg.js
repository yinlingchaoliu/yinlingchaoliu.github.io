import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as i}from"./app-CtvCwAmI.js";const r={},o=i(`<p>依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//解决support库问题  android/support/design/widget/CoordinatorLayout
configurations.all {
    resolutionStrategy {
        force &#39;com.android.support:support-v4:28.0.0&#39;
        force &#39;com.android.support:design:28.0.0&#39;
    }
}

dependencies {
    //网络日志打印
    implementation &quot;com.squareup.okhttp3:logging-interceptor:3.10.0&quot;
    // https://github.com/jgilfelt/chuck
    debugImplementation (&quot;com.readystatesoftware.chuck:library:1.1.0&quot;){
        exclude group: &#39;com.android.support&#39; ,module: &#39;support-v4&#39;
    }
    releaseImplementation &quot;com.readystatesoftware.chuck:library-no-op:1.1.0&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//okhttp添加拦截器
//网络通知
okhttpBuilder.addInterceptor( new ChuckInterceptor( context1 ) );
//打印日志
okhttpBuilder.addInterceptor( getLogging() );

/**
     * 打印日志
     * @return
     */
    private HttpLoggingInterceptor getLogging(){
        HttpLoggingInterceptor.Logger logger = message -&gt; Platform.get().log(Platform.WARN, message, null);
        HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor( logger );
        if(BuildConfig.LOG_DEBUG){
            loggingInterceptor.setLevel( HttpLoggingInterceptor.Level.BODY );
        }else {
            loggingInterceptor.setLevel( HttpLoggingInterceptor.Level.NONE );
        }
        return loggingInterceptor;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[o];function a(l,s){return t(),n("div",null,d)}const u=e(r,[["render",a],["__file","Android网络日志集成.html.vue"]]),m=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Android%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97%E9%9B%86%E6%88%90.html","title":"Android网络日志集成","lang":"zh-CN","frontmatter":{"title":"Android网络日志集成","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"依赖 使用","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Android%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97%E9%9B%86%E6%88%90.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android网络日志集成"}],["meta",{"property":"og:description","content":"依赖 使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android网络日志集成\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.43,"words":130},"filePathRelative":"fe/android/Android相关/Android网络日志集成.md","localizedDate":"2024年3月24日","excerpt":"<p>依赖</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>//解决support库问题  android/support/design/widget/CoordinatorLayout\\nconfigurations.all {\\n    resolutionStrategy {\\n        force 'com.android.support:support-v4:28.0.0'\\n        force 'com.android.support:design:28.0.0'\\n    }\\n}\\n\\ndependencies {\\n    //网络日志打印\\n    implementation \\"com.squareup.okhttp3:logging-interceptor:3.10.0\\"\\n    // https://github.com/jgilfelt/chuck\\n    debugImplementation (\\"com.readystatesoftware.chuck:library:1.1.0\\"){\\n        exclude group: 'com.android.support' ,module: 'support-v4'\\n    }\\n    releaseImplementation \\"com.readystatesoftware.chuck:library-no-op:1.1.0\\"\\n}\\n</code></pre></div>","autoDesc":true}`);export{u as comp,m as data};
