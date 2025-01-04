import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,f as t}from"./app-CtvCwAmI.js";const s={},i=t(`<p>唤起三种方式：packagename , action, scheme ####1、通过包名唤醒</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
String packageName=&quot;com.chaoliu.wakeapp&quot;
Intent LaunchIntent = getPackageManager().getLaunchIntentForPackage(packageName);
intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
intent.setClassName(&quot;B应用包名&quot;, &quot;B应用包名.Activity&quot;);
startActivity(LaunchIntent);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####2、通过自定义action</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
String actionName=&quot;com.chaoliu.wakeapp.main&quot;
Intent intent = new Intent();
intent.setAction(actionName);
intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
startActivity(intent);

&lt; intent-filter&gt;
      &lt;action android:name=&quot;\${actionName}&quot; /&gt;
      &lt;category android:name=&quot;android.intent.category.DEFAULT&quot;/&gt;
&lt;/intent-filter&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####3、通过scheme</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
intent<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;scheme://host/path?xx=xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
intent<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;scheme://ssp?xx=xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
intent<span class="token punctuation">.</span><span class="token function">setFlags</span><span class="token punctuation">(</span><span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">FLAG_ACTIVITY_NEW_TASK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token operator">&lt;</span>intent<span class="token operator">-</span>filter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>data android<span class="token operator">:</span>scheme<span class="token operator">=</span><span class="token string">&quot;\${scheme}&quot;</span> 
                android<span class="token operator">:</span>host<span class="token operator">=</span><span class="token string">&quot;\${host}&quot;</span>
                android<span class="token operator">:</span>path<span class="token operator">=</span><span class="token string">&quot;\${path}&quot;</span>
                android<span class="token operator">:</span>ssp<span class="token operator">=</span><span class="token string">&quot;\${ssp}&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>action android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;android.intent.action.VIEW&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>category android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;android.intent.category.DEFAULT&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>category android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;android.intent.category.BROWSABLE&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>intent<span class="token operator">-</span>filter<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>&quot;ssp&quot; 是 &quot;scheme-specific part&quot;的缩写，也就是说 URI 中除了 scheme 以外的所有剩下的内容。</li></ul><p>通过包名判断是否安装该app</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
    public static boolean isApkInstalled(Context context, String packageName) {
        if (TextUtils.isEmpty(packageName)) {
            return false;
        }
        try {
            ApplicationInfo info = context.getPackageManager().getApplicationInfo(packageName, PackageManager.GET_UNINSTALLED_PACKAGES);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            return false;
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳转应用市场</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  /**
   * 启动到应用商店app详情界面
   *
   * @param appPkg    目标App的包名
   * @param marketPkg 应用商店包名
   */
   public void launchAppDetail(String appPkg, String marketPkg) {
      try {
          if (TextUtils.isEmpty(appPkg)) return;
          Uri uri = Uri.parse(&quot;market://details?id=&quot; + appPkg);
          Intent intent = new Intent(Intent.ACTION_VIEW, uri);
          if (!TextUtils.isEmpty(marketPkg)) {
              intent.setPackage(marketPkg);
          }
          intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
          startActivity(intent);
      } catch (Exception e) {
          e.printStackTrace();
      }
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>tip:切记：A应用拉起B应用的时候千万不要忘记添加：intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);</li></ul>`,12),o=[i];function p(c,l){return a(),e("div",null,o)}const u=n(s,[["render",p],["__file","Android中通过外部程序启动App三种方式.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Android%E4%B8%AD%E9%80%9A%E8%BF%87%E5%A4%96%E9%83%A8%E7%A8%8B%E5%BA%8F%E5%90%AF%E5%8A%A8App%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"Android中通过外部程序启动App三种方式","lang":"zh-CN","frontmatter":{"title":"Android中通过外部程序启动App三种方式","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"唤起三种方式：packagename , action, scheme ####1、通过包名唤醒 ####2、通过自定义action ####3、通过scheme \\"ssp\\" 是 \\"scheme-specific part\\"的缩写，也就是说 URI 中除了 scheme 以外的所有剩下的内容。 通过包名判断是否安装该app 跳转应用市场 tip:切记：...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Android%E4%B8%AD%E9%80%9A%E8%BF%87%E5%A4%96%E9%83%A8%E7%A8%8B%E5%BA%8F%E5%90%AF%E5%8A%A8App%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android中通过外部程序启动App三种方式"}],["meta",{"property":"og:description","content":"唤起三种方式：packagename , action, scheme ####1、通过包名唤醒 ####2、通过自定义action ####3、通过scheme \\"ssp\\" 是 \\"scheme-specific part\\"的缩写，也就是说 URI 中除了 scheme 以外的所有剩下的内容。 通过包名判断是否安装该app 跳转应用市场 tip:切记：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android中通过外部程序启动App三种方式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.09,"words":326},"filePathRelative":"fe/android/Android相关/Android中通过外部程序启动App三种方式.md","localizedDate":"2024年3月24日","excerpt":"<p>唤起三种方式：packagename , action, scheme\\n####1、通过包名唤醒</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>\\nString packageName=\\"com.chaoliu.wakeapp\\"\\nIntent LaunchIntent = getPackageManager().getLaunchIntentForPackage(packageName);\\nintent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);\\nintent.setClassName(\\"B应用包名\\", \\"B应用包名.Activity\\");\\nstartActivity(LaunchIntent);\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
