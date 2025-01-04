import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c as o,a as n,b as a,d as e,f as c}from"./app-CtvCwAmI.js";const l={},u=n("p",null,"####webview input说明 安卓webview禁用input，网上查看各种方案，都存在弊端。 经过实践，完整可用调研了支持拍照和图片选择上传。",-1),d={href:"https://www.jianshu.com/p/19084bbc0747",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.jianshu.com/p/40670b459e56",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>####1、webview 初始化和销毁</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //webview初始化
    @SuppressLint(&quot;SetJavaScriptEnabled&quot;)
    public static void initX5Web(WebView x5Webview) {
        Context context = x5Webview.getContext();
        WebSettings webSetting = x5Webview.getSettings();
        webSetting.setJavaScriptEnabled( true );
        webSetting.setAllowFileAccess( true );
        webSetting.setLayoutAlgorithm( WebSettings.LayoutAlgorithm.NARROW_COLUMNS );
        webSetting.setSupportZoom( false );
        webSetting.setBuiltInZoomControls( false );
        webSetting.setDisplayZoomControls(false);   //不显示webview缩放按钮
        webSetting.setUseWideViewPort( true );
        //多窗口问题
        webSetting.setSupportMultipleWindows( false );
        webSetting.setJavaScriptCanOpenWindowsAutomatically( true );

        //h5数据存储
        webSetting.setAppCacheEnabled( true );
        webSetting.setDomStorageEnabled( true );
        webSetting.setDatabaseEnabled(true);
        webSetting.setAppCachePath(context.getDir(&quot;appcache&quot;, 0).getPath());

        webSetting.setGeolocationEnabled( true );
        webSetting.setAppCacheMaxSize( Long.MAX_VALUE );
        webSetting.setDatabasePath(context.getDir(&quot;databases&quot;, 0).getPath());
        webSetting.setGeolocationDatabasePath(context.getDir(&quot;geolocation&quot;, 0).getPath());
        webSetting.setPluginState( WebSettings.PluginState.ON_DEMAND );
        webSetting.setRenderPriority( WebSettings.RenderPriority.HIGH );
        webSetting.setCacheMode( WebSettings.LOAD_NO_CACHE );
        //sonic
        x5Webview.removeJavascriptInterface(&quot;searchBoxJavaBridge_&quot;);
        webSetting.setAllowContentAccess(true);
        webSetting.setSavePassword(false);
        webSetting.setSaveFormData(false);
        webSetting.setLoadWithOverviewMode(true);
        webSetting.setDefaultTextEncodingName(&quot;utf-8&quot;);
        webSetting.setLoadsImagesAutomatically(true);
    }

    //webview销毁方法
    public static void onDestroy(WebView mWebView){
        if (mWebView != null) {
            mWebView.clearHistory();
            ((ViewGroup) mWebView.getParent()).removeView(mWebView);
            mWebView.loadUrl(&quot;about:blank&quot;);
            mWebView.stopLoading();
            mWebView.setWebChromeClient(null);
            mWebView.setWebViewClient(null);
            mWebView.loadDataWithBaseURL(null, &quot;&quot;, &quot;text/html&quot;, &quot;utf-8&quot;, null);
            mWebView.clearHistory();
            mWebView.destroy();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####2、webchrome特别支持</p><ul><li>1、 initWebChrome</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //webview input 特别支持帮助类
    private WebViewUploadFileHelper helper = new WebViewUploadFileHelper(this);

    private void initWebChrome() {
        webview.setWebChromeClient( new InputFileWebChromeClient() );
    }

public class InputFileWebChromeClient extends WebChromeClient {
    //设置 进度条
    @Override
    public void onProgressChanged(WebView view, int newProgress) {
        super.onProgressChanged( view, newProgress );
    }

    // For Android &lt; 3.0
    public void openFileChooser(ValueCallback&lt;Uri&gt; uploadMsg) {
        helper.setUploadMessage( uploadMsg );
        permission( () -&gt; {
            helper.openImageActivity();
        } );
    }

    // For Android 3.0+
    public void openFileChooser(ValueCallback&lt;Uri&gt; uploadMsg, String acceptType) {
        helper.setUploadMessage( uploadMsg );
        permission( () -&gt; {
            helper.openImageActivity( acceptType );
        } );
    }

    // For Android  &gt; 4.1.1
    public void openFileChooser(ValueCallback&lt;Uri&gt; uploadMsg, String acceptType, String capture) {
        helper.setUploadMessage( uploadMsg );
        permission( () -&gt; {
            helper.openImageActivity( acceptType, capture );
        } );
    }

    // For Android  &gt;= 5.0
    public boolean onShowFileChooser(com.tencent.smtt.sdk.WebView webView,
                                     ValueCallback&lt;Uri[]&gt; filePathCallback,
                                     WebChromeClient.FileChooserParams fileChooserParams) {
        helper.setUploadMessageAboveL( filePathCallback );
        permission( () -&gt; {
            helper.openImageActivity( fileChooserParams.getAcceptTypes(), fileChooserParams.isCaptureEnabled() );
        } );
        return true;
    }

    //==多窗口的问题
    @Override
    public boolean onCreateWindow(WebView view, boolean isDialog,
                                  boolean isUserGesture, Message resultMsg) {
        WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
        transport.setWebView( view );
        resultMsg.sendToTarget();
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2 、回调</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
       //回调支持
        super.onActivityResult(requestCode, resultCode, data);
        helper.onActivityResult(requestCode, resultCode, data);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3 、权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @SuppressLint(&quot;CheckResult&quot;)
    public void permission(CallBack callBack){
       // 权限支持
        RxPermissions rxPermissions = new RxPermissions( this );
        rxPermissions.request(Manifest.permission.CAMERA, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE)
                .subscribe(grant -&gt; {
                    if (grant) {
                        //全部通过
                        try {
                            if (callBack!=null){
                                callBack.onSucess();
                            }
                        } catch (Throwable throwable) {
                            throwable.printStackTrace();
                        }
                    } else {
                            ToastUtils.show(&quot;请同意权限&quot;);
                    }
                });
    }

    public interface CallBack{
        void onSucess();
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、webviewuploadfilehelper-帮助类" tabindex="-1"><a class="header-anchor" href="#_3、webviewuploadfilehelper-帮助类"><span>3、WebViewUploadFileHelper 帮助类</span></a></h4><p>将input相关方法封装在一个帮助类中，便于多处复用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebViewUploadFileHelper</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ValueCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Uri</span><span class="token punctuation">&gt;</span></span> uploadMessage<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ValueCallback</span><span class="token operator">&lt;</span><span class="token class-name">Uri</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> uploadMessageAboveL<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">FILE_CHOOSER_RESULT_CODE</span> <span class="token operator">=</span> <span class="token number">10011</span><span class="token punctuation">;</span><span class="token comment">//文件选择</span>
    <span class="token keyword">private</span> <span class="token class-name">Uri</span> imageUri<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Activity</span> activity<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">WebViewUploadFileHelper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">WebViewUploadFileHelper</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>activity <span class="token operator">=</span> activity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUploadMessage</span><span class="token punctuation">(</span><span class="token class-name">ValueCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Uri</span><span class="token punctuation">&gt;</span></span> uploadMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uploadMessage <span class="token operator">=</span> uploadMessage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUploadMessageAboveL</span><span class="token punctuation">(</span><span class="token class-name">ValueCallback</span><span class="token operator">&lt;</span><span class="token class-name">Uri</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> uploadMessageAboveL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uploadMessageAboveL <span class="token operator">=</span> uploadMessageAboveL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityResult</span><span class="token punctuation">(</span><span class="token keyword">int</span> requestCode<span class="token punctuation">,</span> <span class="token keyword">int</span> resultCode<span class="token punctuation">,</span> <span class="token class-name">Intent</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>requestCode <span class="token operator">!=</span> <span class="token constant">FILE_CHOOSER_RESULT_CODE</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token comment">// 经过上边(1)、(2)两个赋值操作，此处即可根据其值是否为空来决定采用哪种处理方法</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uploadMessage <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">chooseBelow</span><span class="token punctuation">(</span> resultCode<span class="token punctuation">,</span> data <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>uploadMessageAboveL <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">chooseAbove</span><span class="token punctuation">(</span> resultCode<span class="token punctuation">,</span> data <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openImageActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">chooseImage</span><span class="token punctuation">(</span> <span class="token string">&quot;image/*&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openImageActivity</span><span class="token punctuation">(</span><span class="token class-name">String</span> acceptType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">chooseImage</span><span class="token punctuation">(</span> acceptType <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openImageActivity</span><span class="token punctuation">(</span><span class="token class-name">String</span> acceptType<span class="token punctuation">,</span> <span class="token class-name">String</span> capture<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span> capture<span class="token punctuation">,</span> <span class="token string">&quot;camera&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">chooseImage</span><span class="token punctuation">(</span> acceptType <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openImageActivity</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> acceptType<span class="token punctuation">,</span> <span class="token keyword">boolean</span> isCaptureEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isCaptureEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">chooseImage</span><span class="token punctuation">(</span> acceptType <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">chooseBelow</span><span class="token punctuation">(</span><span class="token keyword">int</span> resultCode<span class="token punctuation">,</span> <span class="token class-name">Intent</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">RESULT_OK</span> <span class="token operator">==</span> resultCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">updatePhotos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 这里是针对文件路径处理</span>
                <span class="token class-name">Uri</span> uri <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>uri <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    uploadMessage<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> uri <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    uploadMessage<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 以指定图像存储路径的方式调起相机，成功后返回data为空</span>
                uploadMessage<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> imageUri <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            uploadMessage<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        uploadMessage <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">chooseAbove</span><span class="token punctuation">(</span><span class="token keyword">int</span> resultCode<span class="token punctuation">,</span> <span class="token class-name">Intent</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">RESULT_OK</span> <span class="token operator">==</span> resultCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">updatePhotos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 这里是针对从文件中选图片的处理</span>
                <span class="token class-name">Uri</span><span class="token punctuation">[</span><span class="token punctuation">]</span> results<span class="token punctuation">;</span>
                <span class="token class-name">Uri</span> uriData <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>uriData <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uri</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>uriData<span class="token punctuation">}</span><span class="token punctuation">;</span>
                    uploadMessageAboveL<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> results <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    uploadMessageAboveL<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                uploadMessageAboveL<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">Uri</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>imageUri<span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            uploadMessageAboveL<span class="token punctuation">.</span><span class="token function">onReceiveValue</span><span class="token punctuation">(</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        uploadMessageAboveL <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">updatePhotos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 该广播即使多发（即选取照片成功时也发送）也没有关系，只是唤醒系统刷新媒体文件</span>
        <span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">ACTION_MEDIA_SCANNER_SCAN_FILE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        intent<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span> imageUri <span class="token punctuation">)</span><span class="token punctuation">;</span>
        activity<span class="token punctuation">.</span><span class="token function">sendBroadcast</span><span class="token punctuation">(</span> intent <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//调用相机</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token string">&quot;IMG_&quot;</span> <span class="token operator">+</span> <span class="token class-name">DateFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span> <span class="token string">&quot;yyyyMMdd_hhmmss&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">CHINA</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 步骤一：创建存储照片的文件</span>
        <span class="token class-name">String</span> imagePath <span class="token operator">=</span> activity<span class="token punctuation">.</span><span class="token function">getFilesDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> <span class="token string">&quot;images&quot;</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> fileName<span class="token punctuation">;</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span> imagePath <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建文件夹</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            file<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">VERSION</span><span class="token punctuation">.</span><span class="token constant">SDK_INT</span> <span class="token operator">&gt;=</span> <span class="token class-name">Build<span class="token punctuation">.</span>VERSION_CODES<span class="token punctuation">.</span>N</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//步骤二：Android 7.0及以上获取文件 Uri</span>
            imageUri <span class="token operator">=</span> <span class="token class-name">FileProvider</span><span class="token punctuation">.</span><span class="token function">getUriForFile</span><span class="token punctuation">(</span> activity<span class="token punctuation">,</span> activity<span class="token punctuation">.</span><span class="token function">getPackageName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.fileprovider&quot;</span><span class="token punctuation">,</span> file <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//步骤三：获取文件Uri</span>
            imageUri <span class="token operator">=</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">fromFile</span><span class="token punctuation">(</span> file <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        intent<span class="token punctuation">.</span><span class="token function">addFlags</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">FLAG_GRANT_READ_URI_PERMISSION</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        intent<span class="token punctuation">.</span><span class="token function">setAction</span><span class="token punctuation">(</span> <span class="token class-name">MediaStore</span><span class="token punctuation">.</span><span class="token constant">ACTION_IMAGE_CAPTURE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置Action为拍照</span>
        intent<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span> <span class="token class-name">MediaStore</span><span class="token punctuation">.</span><span class="token constant">EXTRA_OUTPUT</span><span class="token punctuation">,</span> imageUri <span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将拍取的照片保存到指定URI</span>
        activity<span class="token punctuation">.</span><span class="token function">startActivityForResult</span><span class="token punctuation">(</span> intent<span class="token punctuation">,</span> <span class="token constant">FILE_CHOOSER_RESULT_CODE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//图片选择器</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> acceptType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Intent</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">ACTION_GET_CONTENT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">addCategory</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">CATEGORY_OPENABLE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span> <span class="token string">&quot;*/*&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">EXTRA_MIME_TYPES</span><span class="token punctuation">,</span> acceptType <span class="token punctuation">)</span><span class="token punctuation">;</span>
        activity<span class="token punctuation">.</span><span class="token function">startActivityForResult</span><span class="token punctuation">(</span> i<span class="token punctuation">,</span> <span class="token constant">FILE_CHOOSER_RESULT_CODE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//图片选择器</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token class-name">String</span> acceptType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Intent</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">ACTION_GET_CONTENT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token punctuation">.</span><span class="token function">addCategory</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">CATEGORY_OPENABLE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">TextUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span> acceptType <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span> <span class="token string">&quot;*/*&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            i<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span> acceptType <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        activity<span class="token punctuation">.</span><span class="token function">startActivityForResult</span><span class="token punctuation">(</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token function">createChooser</span><span class="token punctuation">(</span> i<span class="token punctuation">,</span> <span class="token string">&quot;Image Chooser&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">FILE_CHOOSER_RESULT_CODE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(m,b){const s=p("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[n("a",d,[a("1、webview支持input标签"),e(s)]),n("a",r,[a("2、安卓拍照支持适配7.0 takePhoto"),e(s)])]),k])}const y=t(l,[["render",v],["__file","webview支持input标签.html.vue"]]),h=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/webview%E6%94%AF%E6%8C%81input%E6%A0%87%E7%AD%BE.html","title":"webview支持input标签","lang":"zh-CN","frontmatter":{"title":"webview支持input标签","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####webview input说明 安卓webview禁用input，网上查看各种方案，都存在弊端。 经过实践，完整可用调研了支持拍照和图片选择上传。 1、webview支持input标签 2、安卓拍照支持适配7.0 takePhoto ####1、webview 初始化和销毁 ####2、webchrome特别支持 1、 initWebChrom...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/webview%E6%94%AF%E6%8C%81input%E6%A0%87%E7%AD%BE.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"webview支持input标签"}],["meta",{"property":"og:description","content":"####webview input说明 安卓webview禁用input，网上查看各种方案，都存在弊端。 经过实践，完整可用调研了支持拍照和图片选择上传。 1、webview支持input标签 2、安卓拍照支持适配7.0 takePhoto ####1、webview 初始化和销毁 ####2、webchrome特别支持 1、 initWebChrom..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webview支持input标签\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"fe/android/Android相关/webview支持input标签.md","localizedDate":"2024年3月24日","excerpt":"<p>####webview input说明\\n安卓webview禁用input，网上查看各种方案，都存在弊端。\\n经过实践，完整可用调研了支持拍照和图片选择上传。</p>\\n<p><a href=\\"https://www.jianshu.com/p/19084bbc0747\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1、webview支持input标签</a>\\n<a href=\\"https://www.jianshu.com/p/40670b459e56\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2、安卓拍照支持适配7.0 takePhoto</a></p>","autoDesc":true}');export{y as comp,h as data};
