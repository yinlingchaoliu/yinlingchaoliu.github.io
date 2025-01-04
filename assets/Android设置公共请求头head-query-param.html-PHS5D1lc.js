import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as r}from"./app-CtvCwAmI.js";const a={},t=r(`<p>原理：通过okhttp intercept</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * @author chentong
 * @date 2019-2-20
 * 设置公共参数
 * head params query
 */
public class HttpBaseParamsInterceptor implements Interceptor {

    private Map&lt;String, String&gt; queryParamsMap = new HashMap&lt;&gt;();
    private Map&lt;String, String&gt; paramsMap = new HashMap&lt;&gt;();
    private Map&lt;String, String&gt; headerParamsMap = new HashMap&lt;&gt;();
    private List&lt;String&gt; headerLinesList = new ArrayList&lt;&gt;();

    private static final String X_WWW_FORM_URLENCODED = &quot;x-www-form-urlencoded&quot;;
    private Builder builder;
    private UpdateHandler updateHandler;

    public HttpBaseParamsInterceptor() {
    }

    @Override
    public Response intercept(Chain chain) throws IOException {

        //每次获取公共数据
        if (updateHandler != null) {
            builder = updateHandler.createNewBuilder();
            reloadBuilder( builder );
        }

        Request request = chain.request();
        Request.Builder requestBuilder = request.newBuilder();

        // 设置header
        Headers.Builder headerBuilder = request.headers().newBuilder();
        if (headerParamsMap.size() &gt; 0) {
            Iterator iterator = headerParamsMap.entrySet().iterator();
            while (iterator.hasNext()) {
                Map.Entry entry = (Map.Entry) iterator.next();
                headerBuilder.add( (String) entry.getKey(), (String) entry.getValue() );
            }
        }

        if (headerLinesList.size() &gt; 0) {
            for (String line : headerLinesList) {
                headerBuilder.add( line );
            }
        }

        requestBuilder.headers( headerBuilder.build() );

        // process queryParams inject whatever it&#39;s GET or POST
        if (queryParamsMap.size() &gt; 0) {
            injectParamsIntoUrl( request, requestBuilder, queryParamsMap );
        }

        // process header params end
        //设置param
        //请求体 可以为空
        RequestBody requestBody = request.body();
        boolean hasRequestBody = requestBody != null;

        String contentType = &quot;&quot;;

        if (hasRequestBody) {
            //contentType存在空
            if (requestBody.contentType() != null) {
                contentType = requestBody.contentType().toString();
            }
        }

        if (request.method().equals( &quot;POST&quot; ) &amp;&amp; contentType.contains( X_WWW_FORM_URLENCODED )) {
            FormBody.Builder formBodyBuilder = new FormBody.Builder();
            if (paramsMap.size() &gt; 0) {
                Iterator iterator = paramsMap.entrySet().iterator();
                while (iterator.hasNext()) {
                    Map.Entry entry = (Map.Entry) iterator.next();
                    formBodyBuilder.add( (String) entry.getKey(), (String) entry.getValue() );
                }
            }

            RequestBody formBody = formBodyBuilder.build();
            String formBodyString = bodyToString( formBody );
            String requestBodyString = bodyToString( requestBody );
            String postBodyString = &quot;&quot;;
            if (!TextUtils.isEmpty( requestBodyString ) &amp;&amp; !TextUtils.isEmpty( formBodyString )) {
                postBodyString = requestBodyString + &quot;&amp;&quot; + formBodyString;
            } else if (!TextUtils.isEmpty( requestBodyString ) || TextUtils.isEmpty( formBodyString )) {
                postBodyString = requestBodyString;
            } else if (TextUtils.isEmpty( requestBodyString ) &amp;&amp; !TextUtils.isEmpty( formBodyString )) {
                postBodyString = formBodyString;
            } else if (TextUtils.isEmpty( requestBodyString ) &amp;&amp; TextUtils.isEmpty( formBodyString )) {
                postBodyString = &quot;&quot;;
            }
            requestBuilder.post( RequestBody.create( MediaType.parse( &quot;application/x-www-form-urlencoded;charset=UTF-8&quot; ), postBodyString ) );
        } else {
            injectParamsIntoUrl( request, requestBuilder, paramsMap );
        }

        request = requestBuilder.build();
        return chain.proceed( request );
    }

    // func to inject params into url
    private void injectParamsIntoUrl(Request request, Request.Builder requestBuilder, Map&lt;String, String&gt; paramsMap) {
        HttpUrl.Builder httpUrlBuilder = request.url().newBuilder();
        if (paramsMap.size() &gt; 0) {
            Iterator iterator = paramsMap.entrySet().iterator();
            while (iterator.hasNext()) {
                Map.Entry entry = (Map.Entry) iterator.next();
                httpUrlBuilder.addQueryParameter( (String) entry.getKey(), (String) entry.getValue() );
            }
        }

        requestBuilder.url( httpUrlBuilder.build() );
    }

    private String bodyToString(final RequestBody requestBody) {
        if (requestBody == null) return &quot;&quot;;
        try {
            Buffer buffer = new Buffer();
            requestBody.writeTo( buffer );
            return buffer.readUtf8();
        } catch (Exception e) {
            return &quot;&quot;;
        }
    }

    /**
     * 设置刷新句柄
     * @param updateHandler
     */
    public void setUpdateHandler(UpdateHandler updateHandler) {
        this.updateHandler = updateHandler;
    }

    public interface UpdateHandler {
        Builder createNewBuilder();
    }

    /**
     * 重新加载数据
     * @param builder
     */
    private void reloadBuilder(Builder builder) {
        queryParamsMap.clear();
        paramsMap.clear();
        headerParamsMap.clear();
        headerLinesList.clear();

        queryParamsMap.putAll( builder.queryParamsMap );
        paramsMap.putAll( builder.paramsMap );
        headerParamsMap.putAll( builder.headerParamsMap );
        headerLinesList.addAll( builder.headerLinesList );
    }

    /**
     * 数据要刷新
     */
    public static class Builder {

        private Map&lt;String, String&gt; queryParamsMap = new HashMap&lt;&gt;();
        private Map&lt;String, String&gt; paramsMap = new HashMap&lt;&gt;();
        private Map&lt;String, String&gt; headerParamsMap = new HashMap&lt;&gt;();
        private List&lt;String&gt; headerLinesList = new ArrayList&lt;&gt;();

        public Builder() {
        }

        public Builder addParam(String key, String value) {
            paramsMap.put( key, value );
            return this;
        }

        public Builder addParamsMap(Map&lt;String, String&gt; paramsMap) {
            paramsMap.putAll( paramsMap );
            return this;
        }

        public Builder addHeaderParam(String key, String value) {
            headerParamsMap.put( key, value );
            return this;
        }

        public Builder addHeaderParamsMap(Map&lt;String, String&gt; headerParamsMap) {
            headerParamsMap.putAll( headerParamsMap );
            return this;
        }

        public Builder addHeaderLine(String headerLine) {
            int index = headerLine.indexOf( &quot;:&quot; );
            if (index == -1) {
                throw new IllegalArgumentException( &quot;Unexpected header: &quot; + headerLine );
            }
            headerLinesList.add( headerLine );
            return this;
        }

        public Builder addHeaderLinesList(List&lt;String&gt; headerLinesList) {
            for (String headerLine : headerLinesList) {
                int index = headerLine.indexOf( &quot;:&quot; );
                if (index == -1) {
                    throw new IllegalArgumentException( &quot;Unexpected header: &quot; + headerLine );
                }
                headerLinesList.add( headerLine );
            }
            return this;
        }

        public Builder addQueryParam(String key, String value) {
            queryParamsMap.put( key, value );
            return this;
        }

        public Builder addQueryParamsMap(Map&lt;String, String&gt; queryParamsMap) {
            queryParamsMap.putAll( queryParamsMap );
            return this;
        }

        public Builder build() {
            return this;
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /**
     * 设置http公共参数
     * head query param
     * @return
     */
    private HttpBaseParamsInterceptor getBaseParams(){
        HttpBaseParamsInterceptor interceptor = new HttpBaseParamsInterceptor();
        interceptor.setUpdateHandler( () -&gt; {
            //设置公共参数
            String versionCode =AppUtlis.getVersionCode(MyApplication.getInstance() ).toString();
            String userId = SharePreferenceUtill.getStringData(ContansUtils.USERID_KEY, &quot;&quot;);
            HttpBaseParamsInterceptor.Builder  builder = new HttpBaseParamsInterceptor.Builder()
                    .addParam( ContansUtils.USERID_KEY,userId )
                    .addParam(&quot;versionCode&quot;,versionCode).build();
            return builder;
        } );

        return interceptor;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[t];function s(l,u){return n(),i("div",null,d)}const p=e(a,[["render",s],["__file","Android设置公共请求头head-query-param.html.vue"]]),c=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Android%E8%AE%BE%E7%BD%AE%E5%85%AC%E5%85%B1%E8%AF%B7%E6%B1%82%E5%A4%B4head-query-param.html","title":"Android设置公共请求头head-query-param","lang":"zh-CN","frontmatter":{"title":"Android设置公共请求头head-query-param","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"原理：通过okhttp intercept 使用","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Android%E8%AE%BE%E7%BD%AE%E5%85%AC%E5%85%B1%E8%AF%B7%E6%B1%82%E5%A4%B4head-query-param.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android设置公共请求头head-query-param"}],["meta",{"property":"og:description","content":"原理：通过okhttp intercept 使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android设置公共请求头head-query-param\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.14,"words":641},"filePathRelative":"fe/android/Android相关/Android设置公共请求头head-query-param.md","localizedDate":"2024年3月24日","excerpt":"<p>原理：通过okhttp intercept</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * @author chentong\\n * @date 2019-2-20\\n * 设置公共参数\\n * head params query\\n */\\npublic class HttpBaseParamsInterceptor implements Interceptor {\\n\\n    private Map&lt;String, String&gt; queryParamsMap = new HashMap&lt;&gt;();\\n    private Map&lt;String, String&gt; paramsMap = new HashMap&lt;&gt;();\\n    private Map&lt;String, String&gt; headerParamsMap = new HashMap&lt;&gt;();\\n    private List&lt;String&gt; headerLinesList = new ArrayList&lt;&gt;();\\n\\n    private static final String X_WWW_FORM_URLENCODED = \\"x-www-form-urlencoded\\";\\n    private Builder builder;\\n    private UpdateHandler updateHandler;\\n\\n    public HttpBaseParamsInterceptor() {\\n    }\\n\\n    @Override\\n    public Response intercept(Chain chain) throws IOException {\\n\\n        //每次获取公共数据\\n        if (updateHandler != null) {\\n            builder = updateHandler.createNewBuilder();\\n            reloadBuilder( builder );\\n        }\\n\\n        Request request = chain.request();\\n        Request.Builder requestBuilder = request.newBuilder();\\n\\n        // 设置header\\n        Headers.Builder headerBuilder = request.headers().newBuilder();\\n        if (headerParamsMap.size() &gt; 0) {\\n            Iterator iterator = headerParamsMap.entrySet().iterator();\\n            while (iterator.hasNext()) {\\n                Map.Entry entry = (Map.Entry) iterator.next();\\n                headerBuilder.add( (String) entry.getKey(), (String) entry.getValue() );\\n            }\\n        }\\n\\n        if (headerLinesList.size() &gt; 0) {\\n            for (String line : headerLinesList) {\\n                headerBuilder.add( line );\\n            }\\n        }\\n\\n        requestBuilder.headers( headerBuilder.build() );\\n\\n        // process queryParams inject whatever it's GET or POST\\n        if (queryParamsMap.size() &gt; 0) {\\n            injectParamsIntoUrl( request, requestBuilder, queryParamsMap );\\n        }\\n\\n        // process header params end\\n        //设置param\\n        //请求体 可以为空\\n        RequestBody requestBody = request.body();\\n        boolean hasRequestBody = requestBody != null;\\n\\n        String contentType = \\"\\";\\n\\n        if (hasRequestBody) {\\n            //contentType存在空\\n            if (requestBody.contentType() != null) {\\n                contentType = requestBody.contentType().toString();\\n            }\\n        }\\n\\n        if (request.method().equals( \\"POST\\" ) &amp;&amp; contentType.contains( X_WWW_FORM_URLENCODED )) {\\n            FormBody.Builder formBodyBuilder = new FormBody.Builder();\\n            if (paramsMap.size() &gt; 0) {\\n                Iterator iterator = paramsMap.entrySet().iterator();\\n                while (iterator.hasNext()) {\\n                    Map.Entry entry = (Map.Entry) iterator.next();\\n                    formBodyBuilder.add( (String) entry.getKey(), (String) entry.getValue() );\\n                }\\n            }\\n\\n            RequestBody formBody = formBodyBuilder.build();\\n            String formBodyString = bodyToString( formBody );\\n            String requestBodyString = bodyToString( requestBody );\\n            String postBodyString = \\"\\";\\n            if (!TextUtils.isEmpty( requestBodyString ) &amp;&amp; !TextUtils.isEmpty( formBodyString )) {\\n                postBodyString = requestBodyString + \\"&amp;\\" + formBodyString;\\n            } else if (!TextUtils.isEmpty( requestBodyString ) || TextUtils.isEmpty( formBodyString )) {\\n                postBodyString = requestBodyString;\\n            } else if (TextUtils.isEmpty( requestBodyString ) &amp;&amp; !TextUtils.isEmpty( formBodyString )) {\\n                postBodyString = formBodyString;\\n            } else if (TextUtils.isEmpty( requestBodyString ) &amp;&amp; TextUtils.isEmpty( formBodyString )) {\\n                postBodyString = \\"\\";\\n            }\\n            requestBuilder.post( RequestBody.create( MediaType.parse( \\"application/x-www-form-urlencoded;charset=UTF-8\\" ), postBodyString ) );\\n        } else {\\n            injectParamsIntoUrl( request, requestBuilder, paramsMap );\\n        }\\n\\n        request = requestBuilder.build();\\n        return chain.proceed( request );\\n    }\\n\\n    // func to inject params into url\\n    private void injectParamsIntoUrl(Request request, Request.Builder requestBuilder, Map&lt;String, String&gt; paramsMap) {\\n        HttpUrl.Builder httpUrlBuilder = request.url().newBuilder();\\n        if (paramsMap.size() &gt; 0) {\\n            Iterator iterator = paramsMap.entrySet().iterator();\\n            while (iterator.hasNext()) {\\n                Map.Entry entry = (Map.Entry) iterator.next();\\n                httpUrlBuilder.addQueryParameter( (String) entry.getKey(), (String) entry.getValue() );\\n            }\\n        }\\n\\n        requestBuilder.url( httpUrlBuilder.build() );\\n    }\\n\\n    private String bodyToString(final RequestBody requestBody) {\\n        if (requestBody == null) return \\"\\";\\n        try {\\n            Buffer buffer = new Buffer();\\n            requestBody.writeTo( buffer );\\n            return buffer.readUtf8();\\n        } catch (Exception e) {\\n            return \\"\\";\\n        }\\n    }\\n\\n    /**\\n     * 设置刷新句柄\\n     * @param updateHandler\\n     */\\n    public void setUpdateHandler(UpdateHandler updateHandler) {\\n        this.updateHandler = updateHandler;\\n    }\\n\\n    public interface UpdateHandler {\\n        Builder createNewBuilder();\\n    }\\n\\n    /**\\n     * 重新加载数据\\n     * @param builder\\n     */\\n    private void reloadBuilder(Builder builder) {\\n        queryParamsMap.clear();\\n        paramsMap.clear();\\n        headerParamsMap.clear();\\n        headerLinesList.clear();\\n\\n        queryParamsMap.putAll( builder.queryParamsMap );\\n        paramsMap.putAll( builder.paramsMap );\\n        headerParamsMap.putAll( builder.headerParamsMap );\\n        headerLinesList.addAll( builder.headerLinesList );\\n    }\\n\\n    /**\\n     * 数据要刷新\\n     */\\n    public static class Builder {\\n\\n        private Map&lt;String, String&gt; queryParamsMap = new HashMap&lt;&gt;();\\n        private Map&lt;String, String&gt; paramsMap = new HashMap&lt;&gt;();\\n        private Map&lt;String, String&gt; headerParamsMap = new HashMap&lt;&gt;();\\n        private List&lt;String&gt; headerLinesList = new ArrayList&lt;&gt;();\\n\\n        public Builder() {\\n        }\\n\\n        public Builder addParam(String key, String value) {\\n            paramsMap.put( key, value );\\n            return this;\\n        }\\n\\n        public Builder addParamsMap(Map&lt;String, String&gt; paramsMap) {\\n            paramsMap.putAll( paramsMap );\\n            return this;\\n        }\\n\\n        public Builder addHeaderParam(String key, String value) {\\n            headerParamsMap.put( key, value );\\n            return this;\\n        }\\n\\n        public Builder addHeaderParamsMap(Map&lt;String, String&gt; headerParamsMap) {\\n            headerParamsMap.putAll( headerParamsMap );\\n            return this;\\n        }\\n\\n        public Builder addHeaderLine(String headerLine) {\\n            int index = headerLine.indexOf( \\":\\" );\\n            if (index == -1) {\\n                throw new IllegalArgumentException( \\"Unexpected header: \\" + headerLine );\\n            }\\n            headerLinesList.add( headerLine );\\n            return this;\\n        }\\n\\n        public Builder addHeaderLinesList(List&lt;String&gt; headerLinesList) {\\n            for (String headerLine : headerLinesList) {\\n                int index = headerLine.indexOf( \\":\\" );\\n                if (index == -1) {\\n                    throw new IllegalArgumentException( \\"Unexpected header: \\" + headerLine );\\n                }\\n                headerLinesList.add( headerLine );\\n            }\\n            return this;\\n        }\\n\\n        public Builder addQueryParam(String key, String value) {\\n            queryParamsMap.put( key, value );\\n            return this;\\n        }\\n\\n        public Builder addQueryParamsMap(Map&lt;String, String&gt; queryParamsMap) {\\n            queryParamsMap.putAll( queryParamsMap );\\n            return this;\\n        }\\n\\n        public Builder build() {\\n            return this;\\n        }\\n\\n    }\\n}\\n</code></pre></div>","autoDesc":true}`);export{p as comp,c as data};
