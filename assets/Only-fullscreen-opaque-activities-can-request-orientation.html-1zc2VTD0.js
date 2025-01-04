import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as n}from"./app-CtvCwAmI.js";const a={},r=n(`<p>####问题原因 安卓8.0版本时为了支持全面屏，增加了一个限制：如果是透明的Activity，则不能固定它的方向，因为它的方向其实是依赖其父Activity的（因为透明）。然而这个bug只有在8.0中有，8.1中已经修复</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        if (getApplicationInfo().targetSdkVersion &gt; O &amp;&amp; mActivityInfo.isFixedOrientation()) {
            final TypedArray ta = obtainStyledAttributes(com.android.internal.R.styleable.Window);
            final boolean isTranslucentOrFloating = ActivityInfo.isTranslucentOrFloating(ta);
            ta.recycle();
 
            if (isTranslucentOrFloating) {
                throw new IllegalStateException(
                        &quot;Only fullscreen opaque activities can request orientation&quot;);
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方案 : 1、把方向省掉（建议这种方式） 2、改为不透明 3、反射方式不建议 4、改target版本</p>`,3),o=[r];function c(l,s){return e(),i("div",null,o)}const p=t(a,[["render",c],["__file","Only-fullscreen-opaque-activities-can-request-orientation.html.vue"]]),m=JSON.parse('{"path":"/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/Only-fullscreen-opaque-activities-can-request-orientation.html","title":"Only-fullscreen-opaque-activities-can-request-orientation","lang":"zh-CN","frontmatter":{"title":"Only-fullscreen-opaque-activities-can-request-orientation","date":"2024-03-24T11:47:50.000Z","category":["日常问题锦集"],"tag":["archive"],"description":"####问题原因 安卓8.0版本时为了支持全面屏，增加了一个限制：如果是透明的Activity，则不能固定它的方向，因为它的方向其实是依赖其父Activity的（因为透明）。然而这个bug只有在8.0中有，8.1中已经修复 解决方案 : 1、把方向省掉（建议这种方式） 2、改为不透明 3、反射方式不建议 4、改target版本","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/Only-fullscreen-opaque-activities-can-request-orientation.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Only-fullscreen-opaque-activities-can-request-orientation"}],["meta",{"property":"og:description","content":"####问题原因 安卓8.0版本时为了支持全面屏，增加了一个限制：如果是透明的Activity，则不能固定它的方向，因为它的方向其实是依赖其父Activity的（因为透明）。然而这个bug只有在8.0中有，8.1中已经修复 解决方案 : 1、把方向省掉（建议这种方式） 2、改为不透明 3、反射方式不建议 4、改target版本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T12:51:21.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-24T12:51:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Only-fullscreen-opaque-activities-can-request-orientation\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-24T12:51:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711284681000,"updatedTime":1711284681000,"contributors":[{"name":"陈桐","email":"tong.chen","commits":1}]},"readingTime":{"minutes":0.54,"words":163},"filePathRelative":"archives/日常问题锦集/Only-fullscreen-opaque-activities-can-request-orientation.md","localizedDate":"2024年3月24日","excerpt":"<p>####问题原因\\n安卓8.0版本时为了支持全面屏，增加了一个限制：如果是透明的Activity，则不能固定它的方向，因为它的方向其实是依赖其父Activity的（因为透明）。然而这个bug只有在8.0中有，8.1中已经修复</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>        if (getApplicationInfo().targetSdkVersion &gt; O &amp;&amp; mActivityInfo.isFixedOrientation()) {\\n            final TypedArray ta = obtainStyledAttributes(com.android.internal.R.styleable.Window);\\n            final boolean isTranslucentOrFloating = ActivityInfo.isTranslucentOrFloating(ta);\\n            ta.recycle();\\n \\n            if (isTranslucentOrFloating) {\\n                throw new IllegalStateException(\\n                        \\"Only fullscreen opaque activities can request orientation\\");\\n            }\\n        }\\n</code></pre></div>","autoDesc":true}');export{p as comp,m as data};
