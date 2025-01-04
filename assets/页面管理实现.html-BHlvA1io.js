import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,f as n}from"./app-CtvCwAmI.js";const a={},c=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.hexin.wealth.app;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import com.hexin.wealth.utils.StringUtils;

import static com.hexin.wealth.app.ActivityStackManager.SOURCE;
import static com.hexin.wealth.app.ActivityStackManager.TARGET;

public class ActivityManagerLifeCallBack implements Application.ActivityLifecycleCallbacks {

    //后期考虑用拦截器编写
    @Override
    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
        String source = activity.getIntent().getStringExtra( SOURCE );
        String target = activity.getIntent().getStringExtra( TARGET );
        //计数栈开始
        if (StringUtils.isNotEmpty( source )){
            ActivityStackManager.getInstance().push();
            ActivityStackManager.getInstance().setSourcePage( source );
        }
        //跳转页面
        if (StringUtils.isNotEmpty( target )){
            ActivityStackManager.getInstance().setTargetPage( target );
        }
        ActivityStackManager.getInstance().addActivity( activity );
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
        ActivityStackManager.getInstance().removeActivity( activity );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[c];function r(v,l){return t(),e("div",null,d)}const m=i(a,[["render",r],["__file","页面管理实现.html.vue"]]),u=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/%E9%A1%B5%E9%9D%A2%E7%AE%A1%E7%90%86%E5%AE%9E%E7%8E%B0.html","title":"页面管理实现","lang":"zh-CN","frontmatter":{"title":"页面管理实现","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/%E9%A1%B5%E9%9D%A2%E7%AE%A1%E7%90%86%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"页面管理实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面管理实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"fe/android/Android相关/页面管理实现.md","localizedDate":"2024年3月24日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>package com.hexin.wealth.app;\\n\\nimport android.app.Activity;\\nimport android.app.Application;\\nimport android.os.Bundle;\\n\\nimport com.hexin.wealth.utils.StringUtils;\\n\\nimport static com.hexin.wealth.app.ActivityStackManager.SOURCE;\\nimport static com.hexin.wealth.app.ActivityStackManager.TARGET;\\n\\npublic class ActivityManagerLifeCallBack implements Application.ActivityLifecycleCallbacks {\\n\\n    //后期考虑用拦截器编写\\n    @Override\\n    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {\\n        String source = activity.getIntent().getStringExtra( SOURCE );\\n        String target = activity.getIntent().getStringExtra( TARGET );\\n        //计数栈开始\\n        if (StringUtils.isNotEmpty( source )){\\n            ActivityStackManager.getInstance().push();\\n            ActivityStackManager.getInstance().setSourcePage( source );\\n        }\\n        //跳转页面\\n        if (StringUtils.isNotEmpty( target )){\\n            ActivityStackManager.getInstance().setTargetPage( target );\\n        }\\n        ActivityStackManager.getInstance().addActivity( activity );\\n    }\\n\\n    @Override\\n    public void onActivityStarted(Activity activity) {\\n    }\\n\\n    @Override\\n    public void onActivityResumed(Activity activity) {\\n\\n    }\\n\\n    @Override\\n    public void onActivityPaused(Activity activity) {\\n\\n    }\\n\\n    @Override\\n    public void onActivityStopped(Activity activity) {\\n\\n    }\\n\\n    @Override\\n    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {\\n\\n    }\\n\\n    @Override\\n    public void onActivityDestroyed(Activity activity) {\\n        ActivityStackManager.getInstance().removeActivity( activity );\\n    }\\n}\\n</code></pre></div>"}');export{m as comp,u as data};
