import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as l,a as e,b as t,d as s,f as r}from"./app-CtvCwAmI.js";const o={},c=r(`<p>####Android App启动流程：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>冷启动app：Application:attachBaseContext()------&gt;Application:onCreate()-----&gt;Activity:onCreate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>Application:attachBaseContext()</strong></em></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MultiDex.install();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>Application:onCreate()</strong></em> *第三方sdk初始化放在异步线程中 方案： 1、Thread 、AsyncTask、Handler 2、IntentService初始化</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 第三方sdk启动
 */
public class InitializeService extends IntentService {

    private static final String ACTION_INIT_WHEN_APP_CREATE = &quot;com.app.start&quot;;
    private static String TAG = InitializeService.class.getSimpleName();

    public InitializeService() {
        super(TAG);
    }

    public InitializeService(String name) {
        super(name);
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        if (intent != null) {
            final String action = intent.getAction();
            if (ACTION_INIT_WHEN_APP_CREATE.equals(action)) {
                performInit();
            }
        }
    }

    private void performInit() {
        //此处进行第三方sdk初始化
        //融360
        Context applicationContext = MyApplication.getInstance();
        CrawlerManager.initSDK(applicationContext);//初始化SDK
        CrawlerManager.getInstance().setDebug(true);
        /**
         * webView 内核初始化
         * 说明WebView 初处初始化耗时 250ms 左右。
         */
//        WebView mWebView=new WebView(new MutableContextWrapper(applicationContext));
    }

    public static void start(Context context) {
        Intent intent = new Intent(context, InitializeService.class);
        intent.setAction(ACTION_INIT_WHEN_APP_CREATE);
        context.startService(intent);
    }
}

//xml
        &lt;service
            android:name=&quot;.app.service.InitializeService&quot;
            android:exported=&quot;false&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Activity:onCreate()</strong></em> 在onCreate之前设置透明主题或者闪屏页 给用户秒开的视觉效果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   &lt;!-- 透明主题 --&gt;
   &lt;style name=&quot;No_Splash_Light&quot; parent=&quot;Theme.AppCompat.Light&quot;&gt;
       &lt;item name=&quot;android:windowBackground&quot;&gt;@android:color/transparent&lt;/item&gt;
       &lt;item name=&quot;android:windowIsTranslucent&quot;&gt;true&lt;/item&gt;
       &lt;item name=&quot;android:windowContentOverlay&quot;&gt;@null&lt;/item&gt;
   &lt;/style&gt;

   &lt;!-- 闪屏页主题 --&gt;
   &lt;style name=&quot;SplashTheme&quot; parent=&quot;AppTheme&quot;&gt;
       &lt;item name=&quot;android:windowBackground&quot;&gt;@mipmap/flash_icon&lt;/item&gt;
       &lt;item name=&quot;android:windowIsTranslucent&quot;&gt;false&lt;/item&gt;
       &lt;item name=&quot;android:windowFullscreen&quot;&gt;true&lt;/item&gt;
   &lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Activiy.onCreate()方法中加载视图之前设置回原来主题</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>setTheme( R.style.AppTheme );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),v={href:"https://github.com/JakeWharton/hugo",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"####参考 https://blog.csdn.net/u012811342/article/details/77568718 https://blog.csdn.net/u012124438/article/details/56340949 https://www.jianshu.com/p/f5514b1a826c",-1);function m(u,b){const n=a("ExternalLinkIcon");return d(),l("div",null,[c,e("p",null,[t("####性能测试工具 项目地址："),e("a",v,[t("https://github.com/JakeWharton/hugo"),s(n)])]),p])}const A=i(o,[["render",m],["__file","Android-app冷启动.html.vue"]]),x=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Android-app%E5%86%B7%E5%90%AF%E5%8A%A8.html","title":"Android-app冷启动","lang":"zh-CN","frontmatter":{"title":"Android-app冷启动","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####Android App启动流程： Application:attachBaseContext() Application:onCreate() *第三方sdk初始化放在异步线程中 方案： 1、Thread 、AsyncTask、Handler 2、IntentService初始化 Activity:onCreate() 在onCreate之前设...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Android-app%E5%86%B7%E5%90%AF%E5%8A%A8.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android-app冷启动"}],["meta",{"property":"og:description","content":"####Android App启动流程： Application:attachBaseContext() Application:onCreate() *第三方sdk初始化放在异步线程中 方案： 1、Thread 、AsyncTask、Handler 2、IntentService初始化 Activity:onCreate() 在onCreate之前设..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android-app冷启动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"fe/android/Android相关/Android-app冷启动.md","localizedDate":"2024年3月24日","excerpt":"<p>####Android App启动流程：</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>冷启动app：Application:attachBaseContext()------&gt;Application:onCreate()-----&gt;Activity:onCreate()\\n</code></pre></div><p><em><strong>Application:attachBaseContext()</strong></em></p>","autoDesc":true}');export{A as comp,x as data};
