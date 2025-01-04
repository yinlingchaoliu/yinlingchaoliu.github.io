import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as a,a as i,b as e,d as n,f as d}from"./app-CtvCwAmI.js";const o={},c={href:"https://www.jianshu.com/p/52df6aa67a5f",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/9ef526b30b9c",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/48fa1ad00084",target:"_blank",rel:"noopener noreferrer"},u=d(`<p>#####1、retrofit-mock编写思路（动态代理基础上，再动态代理） retrofit核心代码 精简省略不必要代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public &lt;T&gt; T create(final Class&lt;T&gt; service) {
    return (T) Proxy.newProxyInstance(service.getClassLoader(), new Class&lt;?&gt;[] { service },
        new InvocationHandler() {
          private final Object[] emptyArgs = new Object[0];
              @Override public @Nullable Object invoke(Object proxy, Method method,
              @Nullable Object[] args) throws Throwable {
              return loadServiceMethod(method).invoke(args != null ? args : emptyArgs);
          }
        });
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>retrofit 核心是采用反向代理生成 T 的实体类</p><p>同样我们可以在这个生成实体类的基础上，再次动态代理，hook 调用函数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//获得值
T api = retrofit.create(Api.class);
//根据api实例，用反向代理，
Proxy.newProxyInstance( service.getClassLoader(), new Class&lt;?&gt;[]{service}, new MockerHandler( retrofit, api ) );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实例api的基础上，再次动态代理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MockerHandler&lt;T&gt; implements InvocationHandler {
    private Retrofit retrofit;
    private T api;
    public MockerHandler(Retrofit retrofit, T api) {
        this.retrofit = retrofit;
        this.api = api;
    }
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //method 方法就是对应的Api接口方法,
        //可以在此处一通骚操作，处理retrofit
        return method.invoke( api, args );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####2、运行时注解，避免不必要手写代码，配置化操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
public @interface MOCK {
    String value() default &quot;&quot;;
    boolean enable() default true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对retrofit对应Api.class 接口方法一通操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

        boolean isMockExist = method.isAnnotationPresent( MOCK.class );

        //如果注解不存在 正常走流程
        if (!isMockExist) {
            return invoke( method, args );
        }

        MOCK mock = method.getAnnotation( MOCK.class );

        //如果mock 设置为false 正常返回
        if (!mock.enable()) {
            return invoke( method, args );
        }

        String value = mock.value().trim();

        //如果http开头 替换成url 正常请求
        if (value.startsWith( &quot;http&quot; )) { //网络请求数据
            preLoadServiceMethod( method, value );
            return invoke( method, args );
        } else if (value.endsWith( &quot;.json&quot; )) { //本地数据
            String mockResponseJson = readAssets( value );
            Object responseObj = retrofit.nextResponseBodyConverter( null, getReturnTye( method ), method.getDeclaredAnnotations() ).convert( ResponseBody.create( MediaType.parse( &quot;application/json&quot; ), mockResponseJson ) );
            return (retrofit.nextCallAdapter( null, method.getGenericReturnType(), method.getAnnotations() )).adapt( new MockerCall( responseObj ) );
        } else { //其他情况正常请求
            return invoke( method, args );
        }
    }

  private Object invoke(Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        if (args == null) {
            return method.invoke( api );
        } else {
            return method.invoke( api, args );
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####3、修改网络请求地址</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//修改url地址
    private void preLoadServiceMethod(Method method, String relativeUrl) {
        try {
            Method loadServiceMethod = retrofit.getClass().getDeclaredMethod( &quot;loadServiceMethod&quot;, Method.class );
            loadServiceMethod.setAccessible( true );
            //获得serviceMethod的值
            Object serviceMethod = loadServiceMethod.invoke( retrofit, method );
            //反射修改实体类中的值
            fixRetrofit240( serviceMethod, relativeUrl );
            fixRetrofit250( serviceMethod, relativeUrl );
        } catch (Exception e) {

        }
    }

    //eg : serviceMethod.relativeUrl = relativeUrl
    //针对retrofit 2.4.0版本做适配
    private void fixRetrofit240(Object serviceMethod, String relativeUrl) {
        try {
            Field relativeUrlField = serviceMethod.getClass().getDeclaredField( &quot;relativeUrl&quot; );
            relativeUrlField.setAccessible( true );
            relativeUrlField.set( serviceMethod, relativeUrl );
        } catch (Exception e) {

        }
    }

    //eg: serviceMethod.requestFactory.relativeUrl = relativeUrl
    //针对retrofit 2.5.0版本做适配
    private void fixRetrofit250(Object serviceMethod, String relativeUrl) {
        try {
            Field requestFactoryField = serviceMethod.getClass().getDeclaredField( &quot;requestFactory&quot; );
            requestFactoryField.setAccessible( true );
            Object requestFactory = requestFactoryField.get( serviceMethod );
            Field relativeUrlField = requestFactory.getClass().getDeclaredField( &quot;relativeUrl&quot; );
            relativeUrlField.setAccessible( true );
            relativeUrlField.set( requestFactory, relativeUrl );
        } catch (Exception e) {

        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),b={href:"https://www.jianshu.com/p/ef445d5e9be0",target:"_blank",rel:"noopener noreferrer"},p=i("p",null,"本文代码 https://github.com/yinlingchaoliu/retrofitMock",-1);function h(f,g){const t=l("ExternalLinkIcon");return s(),a("div",null,[i("p",null,[e("####导航 "),i("a",c,[e("1、retrofit-mock用法"),n(t)]),i("a",v,[e("2、retrofit-mock编写思路(aop)"),n(t)]),i("a",m,[e("3 、retrofit-mock的动态代理及注解"),n(t)]),e(" 4、aspect 原理讲解与注解语法")]),u,i("p",null,[e("#####4、特别感谢 首先特别感谢"),i("a",b,[e("javalong"),n(t)]),e(",给retrofit-mock提供了好的思路")]),p])}const y=r(o,[["render",h],["__file","retrofit-mock-无入侵式mock框架-2.html.vue"]]),_=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/retrofit-mock-%E6%97%A0%E5%85%A5%E4%BE%B5%E5%BC%8Fmock%E6%A1%86%E6%9E%B6-2.html","title":"retrofit-mock-无入侵式mock框架-2","lang":"zh-CN","frontmatter":{"title":"retrofit-mock-无入侵式mock框架-2","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"####导航 1、retrofit-mock用法 2、retrofit-mock编写思路(aop) 3 、retrofit-mock的动态代理及注解 4、aspect 原理讲解与注解语法 #####1、retrofit-mock编写思路（动态代理基础上，再动态代理） retrofit核心代码 精简省略不必要代码 retrofit 核心是采用反向代理生成...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/retrofit-mock-%E6%97%A0%E5%85%A5%E4%BE%B5%E5%BC%8Fmock%E6%A1%86%E6%9E%B6-2.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"retrofit-mock-无入侵式mock框架-2"}],["meta",{"property":"og:description","content":"####导航 1、retrofit-mock用法 2、retrofit-mock编写思路(aop) 3 、retrofit-mock的动态代理及注解 4、aspect 原理讲解与注解语法 #####1、retrofit-mock编写思路（动态代理基础上，再动态代理） retrofit核心代码 精简省略不必要代码 retrofit 核心是采用反向代理生成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"retrofit-mock-无入侵式mock框架-2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"fe/android/框架编写/retrofit-mock-无入侵式mock框架-2.md","localizedDate":"2024年3月24日","excerpt":"<p>####导航\\n<a href=\\"https://www.jianshu.com/p/52df6aa67a5f\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">1、retrofit-mock用法</a>\\n<a href=\\"https://www.jianshu.com/p/9ef526b30b9c\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">2、retrofit-mock编写思路(aop)</a>\\n<a href=\\"https://www.jianshu.com/p/48fa1ad00084\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">3 、retrofit-mock的动态代理及注解</a>\\n4、aspect 原理讲解与注解语法</p>","autoDesc":true}');export{y as comp,_ as data};
