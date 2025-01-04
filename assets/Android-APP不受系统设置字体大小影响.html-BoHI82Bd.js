import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,f as n}from"./app-CtvCwAmI.js";const c={},d=n(`<p>activity回调</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ActivityResourceLifecycleCallback implements Application.ActivityLifecycleCallbacks {

    @Override
    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
        getResources( activity );
        //注册fragment
        registerFragmentCallbacks(activity);
    }

    /**
     * 设置标准字体
     */
    public Resources getResources(Activity activity) {
        Resources res = activity.getResources();
        Configuration newConfig = new Configuration();
        newConfig.setToDefaults();//设置默认
        res.updateConfiguration(newConfig, res.getDisplayMetrics());
        return res;
    }

    @Override
    public void onActivityStarted(Activity activity) {
    }

    @Override
    public void onActivityResumed(Activity activity) {
    }

    @Override
    public void onActivityPaused(Activity activity) {
    }

    @Override
    public void onActivityStopped(Activity activity) {
    }

    @Override
    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
    }

    @Override
    public void onActivityDestroyed(Activity activity) {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function r(s,v){return e(),t("div",null,a)}const u=i(c,[["render",r],["__file","Android-APP不受系统设置字体大小影响.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Android-APP%E4%B8%8D%E5%8F%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E5%A4%A7%E5%B0%8F%E5%BD%B1%E5%93%8D.html","title":"Android-APP不受系统设置字体大小影响","lang":"zh-CN","frontmatter":{"title":"Android-APP不受系统设置字体大小影响","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"activity回调","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Android-APP%E4%B8%8D%E5%8F%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E5%A4%A7%E5%B0%8F%E5%BD%B1%E5%93%8D.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android-APP不受系统设置字体大小影响"}],["meta",{"property":"og:description","content":"activity回调"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android-APP不受系统设置字体大小影响\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.4,"words":121},"filePathRelative":"fe/android/Android相关/Android-APP不受系统设置字体大小影响.md","localizedDate":"2024年3月24日","excerpt":"<p>activity回调</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public class ActivityResourceLifecycleCallback implements Application.ActivityLifecycleCallbacks {\\n\\n    @Override\\n    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {\\n        getResources( activity );\\n        //注册fragment\\n        registerFragmentCallbacks(activity);\\n    }\\n\\n    /**\\n     * 设置标准字体\\n     */\\n    public Resources getResources(Activity activity) {\\n        Resources res = activity.getResources();\\n        Configuration newConfig = new Configuration();\\n        newConfig.setToDefaults();//设置默认\\n        res.updateConfiguration(newConfig, res.getDisplayMetrics());\\n        return res;\\n    }\\n\\n    @Override\\n    public void onActivityStarted(Activity activity) {\\n    }\\n\\n    @Override\\n    public void onActivityResumed(Activity activity) {\\n    }\\n\\n    @Override\\n    public void onActivityPaused(Activity activity) {\\n    }\\n\\n    @Override\\n    public void onActivityStopped(Activity activity) {\\n    }\\n\\n    @Override\\n    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {\\n    }\\n\\n    @Override\\n    public void onActivityDestroyed(Activity activity) {\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
