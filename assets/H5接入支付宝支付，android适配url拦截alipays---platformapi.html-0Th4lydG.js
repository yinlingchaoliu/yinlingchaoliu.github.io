import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as t}from"./app-CtvCwAmI.js";const a={},l=t(`<p>####1、问题背景： 问题：商城H5接入支付宝支付，点击白屏 解决方案：需要移动端配合拦截指定url(alipays://platformapi)，并唤起支付宝</p><p>####2、代码实现 webview拦截</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>       //覆盖WebView默认通过第三方或者是系统浏览器打开网页的行为，使得网页可以在WebView中打开
        webview.setWebViewClient( new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView webView, String url) {
                //调用
                if (AlipayUtil.isAlipay( url )){
                    AlipayUtil.goAlipays( getActivity(), url );
                    return true;
                }
                return super.shouldOverrideUrlLoading( webView, url );
            }
        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装工具</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Keep
public class AlipayUtil {

    //拦截特定支付标识
    public static boolean isAlipay(String url) {
        if (StringUtils.startsWith( url, &quot;alipays:&quot; ) || StringUtils.startsWith( url, &quot;alipay&quot; )) {
            return true;
        }
        return false;
    }

    public static void goAlipays(Activity activity, String url) {
        //判断是否安装支付宝
        if (checkAliPayInstalled( activity )){
            goUrl( activity, url );
        }else {
            //安装下载支付宝
            updateAlipayDialog(activity);
        }
    }

  //直接隐式调用
    private static void goUrl(Activity activity, String url){
        Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( url ) );
        activity.startActivity( intent );
    }

    //判断是否安装支付宝app
    private static boolean checkAliPayInstalled(Context context) {
        Uri uri = Uri.parse( &quot;alipays://platformapi/startApp&quot; );
        Intent intent = new Intent( Intent.ACTION_VIEW, uri );
        ComponentName componentName = intent.resolveActivity( context.getPackageManager() );
        return componentName != null;
    }

    private static volatile CustomDialog updateDialog = null;

    //安装alipay支付宝  弹框和文案根据实际情况定制
    private static synchronized void updateAlipayDialog(Context context) {
        updateDialog = new CustomDialog.Builder( context ).setMessage( &quot;未检测到支付宝客户端，请安装后重试&quot; )
                .setNegativeButton( &quot;取消&quot;, (dialogInterface, i) -&gt; {
                    updateDialog.dismiss();
                    updateDialog = null;
                } ).setPositiveButton( &quot;立即安装&quot;, (dialogInterface, i) -&gt; {
                    Uri alipayUrl = Uri.parse(&quot;https://d.alipay.com&quot;);
                    context.startActivity(new Intent(Intent.ACTION_VIEW, alipayUrl));
                    updateDialog.dismiss();
                    updateDialog = null;
                } ).build();

        if (updateDialog != null) {
            updateDialog.show();
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[l];function d(s,v){return e(),n("div",null,r)}const c=i(a,[["render",d],["__file","H5接入支付宝支付，android适配url拦截alipays---platformapi.html.vue"]]),p=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/H5%E6%8E%A5%E5%85%A5%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98%EF%BC%8Candroid%E9%80%82%E9%85%8Durl%E6%8B%A6%E6%88%AAalipays---platformapi.html","title":"H5接入支付宝支付，android适配url拦截alipays---platformapi","lang":"zh-CN","frontmatter":{"title":"H5接入支付宝支付，android适配url拦截alipays---platformapi","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####1、问题背景： 问题：商城H5接入支付宝支付，点击白屏 解决方案：需要移动端配合拦截指定url(alipays://platformapi)，并唤起支付宝 ####2、代码实现 webview拦截 封装工具","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/H5%E6%8E%A5%E5%85%A5%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98%EF%BC%8Candroid%E9%80%82%E9%85%8Durl%E6%8B%A6%E6%88%AAalipays---platformapi.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"H5接入支付宝支付，android适配url拦截alipays---platformapi"}],["meta",{"property":"og:description","content":"####1、问题背景： 问题：商城H5接入支付宝支付，点击白屏 解决方案：需要移动端配合拦截指定url(alipays://platformapi)，并唤起支付宝 ####2、代码实现 webview拦截 封装工具"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"H5接入支付宝支付，android适配url拦截alipays---platformapi\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.2,"words":361},"filePathRelative":"fe/android/Android相关/H5接入支付宝支付，android适配url拦截alipays---platformapi.md","localizedDate":"2024年3月24日","excerpt":"<p>####1、问题背景：\\n问题：商城H5接入支付宝支付，点击白屏\\n解决方案：需要移动端配合拦截指定url(alipays://platformapi)，并唤起支付宝</p>\\n<p>####2、代码实现\\nwebview拦截</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>       //覆盖WebView默认通过第三方或者是系统浏览器打开网页的行为，使得网页可以在WebView中打开\\n        webview.setWebViewClient( new WebViewClient(){\\n            @Override\\n            public boolean shouldOverrideUrlLoading(WebView webView, String url) {\\n                //调用\\n                if (AlipayUtil.isAlipay( url )){\\n                    AlipayUtil.goAlipays( getActivity(), url );\\n                    return true;\\n                }\\n                return super.shouldOverrideUrlLoading( webView, url );\\n            }\\n        });\\n</code></pre></div>","autoDesc":true}');export{c as comp,p as data};
