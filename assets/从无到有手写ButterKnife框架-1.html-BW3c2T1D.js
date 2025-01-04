import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as a,c as l,a as n,b as e,d as t,f as d}from"./app-CtvCwAmI.js";const c={},v={href:"https://www.jianshu.com/p/a96de1aa4e29",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/f8856e913224",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.jianshu.com/p/cdf417e52cab",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/43eb69b2beeb",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/a91cbfb8b1a1",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/8418ef144b29",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.jianshu.com/p/2da1ca9d8ffa",target:"_blank",rel:"noopener noreferrer"},h=d(`<p>#####1、前言 反射解决了调用相同模板，调用方式统一的问题</p><p>如下代码:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> unbinder = new FirstActivity_ViewBinding(FirstActivity.this, getWindow().getDecorView());

 unbinder = new Demo1Activity_ViewBinding( Demo1Activity.this,getWindow().getDecorView() );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果代码命名非常规范的话，初始化控件的代码调用，项目中会频繁出现,如果不想这样重复的写来写去。可以考虑用到反射</p><p>butterknife解决方案通用写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>全部这样搞定
ButterKnife.bind( this );
ButterKnife.bind( this ,view);

ButterKnife.unbind(unbind);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般写法</p><ul><li>1、现写约束接口</li><li>2、反射调用初始化 由于初始化控件，构造方法就足够了。 约束接口，只关心释放即可</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//约束接口
public interface Unbinder {
    @UiThread
    void unbind();

    //空方法
    Unbinder EMPTY = new Unbinder() {
        @Override public void unbind() { }
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####2、震撼butterKnife核心代码不足100行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 精简的butterknife框架
 * @author chentong
 */
public class ButterKnife {
    //缓存模板类，键值对（模板类、对应构造方法）
    private static final Map&lt;Class&lt;?&gt;, Constructor&lt;? extends Unbinder&gt;&gt; BINDINGS = new LinkedHashMap&lt;&gt;();
    
    //对象不能new 
    private ButterKnife() {
        throw new AssertionError( &quot;No instances.&quot; );
    }

    //绑定方法
    @NonNull
    @UiThread
    public static Unbinder bind(@NonNull Activity target) {
        View sourceView = target.getWindow().getDecorView();
        return createBinding( target, sourceView );
    }

    @NonNull
    @UiThread
    public static Unbinder bind(@NonNull Object target, @NonNull View source) {
        return createBinding( target, source );
    }

    private static Unbinder createBinding(Object target, View source) {

        Class&lt;?&gt; targetClass = target.getClass();
        //寻找模板类的构造方法
        Constructor&lt;? extends Unbinder&gt; constructor = findBindingConstructorForClass( targetClass );
        if (constructor == null) {
            return Unbinder.EMPTY;
        }

        //实例化
        try {
            //实例化，就可以给控件赋值
            return constructor.newInstance( target, source);
        }catch (Exception e){
            throw new RuntimeException(&quot;Unable to invoke &quot; + constructor, e);
        }
    }

    private static Constructor&lt;? extends Unbinder&gt; findBindingConstructorForClass(Class&lt;?&gt; targetClass) {
        //查缓存 避免频繁用到反射
        Constructor&lt;? extends Unbinder&gt; binderConstructor = BINDINGS.get( targetClass );
        if (binderConstructor != null) {
            return binderConstructor;
        }

        String clazzName = targetClass.getName();
        if (clazzName.startsWith( &quot;android.&quot; ) || clazzName.startsWith( &quot;java.&quot; )) {
            //系统方法错误
            return null;
        }

        try {
            //反射类加载 加载模板
            Class&lt;?&gt; bindingClass = targetClass.getClassLoader().loadClass( clazzName + &quot;_ViewBinding&quot; );
            binderConstructor = (Constructor&lt;? extends Unbinder&gt;) bindingClass.getConstructor( targetClass, View.class );
        }catch (ClassNotFoundException e){
            binderConstructor = findBindingConstructorForClass(targetClass.getSuperclass());
        }catch (Exception e){
            return null;
        }

        if (binderConstructor!=null){
            BINDINGS.put( targetClass, binderConstructor );
        }
        return binderConstructor;
    }

    //释放函数
    @NonNull
    @UiThread
    public static void unbind(Unbinder target) {
        if (target != null &amp;&amp; target != Unbinder.EMPTY) {
            target.unbind();
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统一都可以写成这样</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    TextView helloTv;

    private Unbinder unbinder;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_main );

        unbinder = ButterKnife.bind( this );

        helloTv.setOnClickListener( v-&gt;{
            Toast.makeText( this,&quot;hello butterknife&quot;,Toast.LENGTH_SHORT ).show();
        } );

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ButterKnife.unbind( unbinder );
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####从无到有手写butterKnife框架 https://github.com/yinlingchaoliu/JavaPoetDemo</p>`,14);function f(w,_){const i=s("ExternalLinkIcon");return a(),l("div",null,[n("p",null,[e("#####导航 一、"),n("a",v,[e("代码的演进"),t(i)]),e(" 二、"),n("a",u,[e("butterKnife反射调用"),t(i)]),e(" 三、"),n("a",o,[e("javapoet自动生成模板代码"),t(i)]),e(" 四、"),n("a",b,[e("apt与注解"),t(i)]),e(" 五、"),n("a",m,[e("注解支持多层继承"),t(i)]),e(" 六、"),n("a",p,[e("apt调试"),t(i)]),e(" 七、"),n("a",g,[e("javapoet语法"),t(i)])]),h])}const x=r(c,[["render",f],["__file","从无到有手写ButterKnife框架-1.html.vue"]]),E=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/%E4%BB%8E%E6%97%A0%E5%88%B0%E6%9C%89%E6%89%8B%E5%86%99ButterKnife%E6%A1%86%E6%9E%B6-1.html","title":"从无到有手写ButterKnife框架-1","lang":"zh-CN","frontmatter":{"title":"从无到有手写ButterKnife框架-1","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"#####导航 一、代码的演进 二、butterKnife反射调用 三、javapoet自动生成模板代码 四、apt与注解 五、注解支持多层继承 六、apt调试 七、javapoet语法 #####1、前言 反射解决了调用相同模板，调用方式统一的问题 如下代码: 如果代码命名非常规范的话，初始化控件的代码调用，项目中会频繁出现,如果不想这样重复的写来写...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/%E4%BB%8E%E6%97%A0%E5%88%B0%E6%9C%89%E6%89%8B%E5%86%99ButterKnife%E6%A1%86%E6%9E%B6-1.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"从无到有手写ButterKnife框架-1"}],["meta",{"property":"og:description","content":"#####导航 一、代码的演进 二、butterKnife反射调用 三、javapoet自动生成模板代码 四、apt与注解 五、注解支持多层继承 六、apt调试 七、javapoet语法 #####1、前言 反射解决了调用相同模板，调用方式统一的问题 如下代码: 如果代码命名非常规范的话，初始化控件的代码调用，项目中会频繁出现,如果不想这样重复的写来写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从无到有手写ButterKnife框架-1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"fe/android/框架编写/从无到有手写ButterKnife框架-1.md","localizedDate":"2024年3月24日","excerpt":"<p>#####导航\\n一、<a href=\\"https://www.jianshu.com/p/a96de1aa4e29\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">代码的演进</a>\\n二、<a href=\\"https://www.jianshu.com/p/f8856e913224\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">butterKnife反射调用</a>\\n三、<a href=\\"https://www.jianshu.com/p/cdf417e52cab\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">javapoet自动生成模板代码</a>\\n四、<a href=\\"https://www.jianshu.com/p/43eb69b2beeb\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">apt与注解</a>\\n五、<a href=\\"https://www.jianshu.com/p/a91cbfb8b1a1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">注解支持多层继承</a>\\n六、<a href=\\"https://www.jianshu.com/p/8418ef144b29\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">apt调试</a>\\n七、<a href=\\"https://www.jianshu.com/p/2da1ca9d8ffa\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">javapoet语法</a></p>","autoDesc":true}');export{x as comp,E as data};
