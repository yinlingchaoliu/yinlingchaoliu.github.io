import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as s,a as i,b as n,d as a,f as v}from"./app-CtvCwAmI.js";const r={},c={href:"https://www.jianshu.com/p/f33988197f60",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/c86dce5a70b0",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/a4022db636d5",target:"_blank",rel:"noopener noreferrer"},b=v(`<p>####1、前言 对于程序员来讲，最简单方式给对方代码看 我这边项目循序渐进参考借鉴孤云，写了一套native方法，由易变难，当你用到那块方面时候，可以直接取用demo</p><p>我承认是站在巨人肩膀上coding的，我只是力求更简单理解</p><p>项目地址：https://github.com/yinlingchaoliu/HowToLearnNdk</p><p>####2、jni基本操作 代码位置 jniapp模块下NativeLib</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * jni代码编写 通过env特定转化函数
 * 建议jni调用用C封装好的函数，细节不要暴露在里面
 * 标准示例 包含各种写法
 */
public class NativeLib {

    static {
        System.loadLibrary( &quot;native-lib&quot; );
    }

    //示例demo
    public static native int plus(int a, int b);

    //字符串操作 hello world
    public static native String getNativeString(String str);

    //返回字符串
    public static native String getReturnString(String str);

    //打印字符串
    public static native void printf(String str);

    //获得源字符串的指针 只获得指针 用于读取 中间不能有阻塞操作
    public static native void printfCritical(String str);

    public static native int getLength(String str);

    public static native void printfRegion(String str);

    //操作数组
    public static native int intArraySum(int[] intArray, int size);

    //返回数组
    public static native int[] getIntArray(int num);

    //对象数组
    public static native int[][] getTwoDimensionalArray(int size);

    //java c++ 互相调用
    public static native void printAnimalsName(Animal[] animals);

    //访问类实例字段 set方法
    public static native void setAnimalName(Animal animal,String name);

    //访问静态字段
    public static native int getAnimalNum(Animal animal);

    //调用实例方法
    public static native void callInstanceMethod(Animal animal);

    //调用静态方法
    public static native String callStaticMethod(Animal animal);

    //构造方法 public String(char value[]) // Java String 类的其中一个构造方法
    public static native String newStringInstance();

    //构造方法 Animal(String name)
    public static native Animal invokeAnimalConstructor(String name);

    //构造方法 Animal(String name)  延迟初始化 AllocObject
    public static native Animal allocAnimalConstructor(String name);

    //调用父类方法
    public static native void callSuperMethod();

    //调用缓存字段 避免 FindClass GetFieldID ,GetMethodID重复调用

    //使用时缓存
    public static native void staticCacheField(Animal animal);

    //初始化缓存
    static {
        initCacheMethodId();
    }
    public static native void initCacheMethodId(); // 静态代码块中进行缓存

    public static native void callCacheMethod(Animal animal);

    // FindClass 是局部引用，不能static缓存
    //(*env)-&gt;DeleteLocalRef(env, jstr);

    //局部引用
    public static native void localRef();

    //全局引用
    public static native void gloablRef(Animal animal);

    //弱引用
    public static native void weakRef(Animal animal);

    //native 处理java异常
    public static native void nativeInvokeJavaException();

    //native 抛出java异常
    public static native void nativeThrowException() throws IllegalArgumentException;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####3、jni bitmap处理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class NativeBitmap {

    static {
        System.loadLibrary( &quot;native-lib&quot; );
    }

    // 顺时针旋转 90° 的操作
    public native Bitmap rotateBitmap(Bitmap bitmap);

    public native Bitmap convertBitmap(Bitmap bitmap);

    public native Bitmap mirrorBitmap(Bitmap bitmap);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####4、posix线程操作</p><p>线程是对上面的一个综合运用，为了以后方便使用，写了一个标准用法，传入java方法 要实现runnable</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 编写一个通用库 用作示例
 * 使用传入方法必须实现run方法
 */
public class NativeThread {

    static {
        System.loadLibrary( &quot;native-lib&quot; );
        nativeInit();
    }

    //初始化资源
    private static native void nativeInit();

    //创建线程 用native执行java方法
    public static native void createNativeThread(Runnable runObj);

    //创建多线程
    public static native void posixThreads(Runnable runObj,int threadnum);

    //释放内存
    private static native void nativeFree();

    /**
     * Native 回到到 Java 的方法，打印当前线程名字
     *
     * @param msg
     */
    public static void printNativeMsg(String msg) {
        Log.d(&quot;NativeThread&quot;, &quot;native msg is &quot; + msg);
        Log.d(&quot;NativeThread&quot;,&quot;print native msg current thread name is &quot; + Thread.currentThread().getName());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function o(p,g){const e=l("ExternalLinkIcon");return d(),s("div",null,[i("p",null,[n("####目录 "),i("a",c,[n("cmake快速实战"),a(e)])]),i("p",null,[i("a",m,[n("Android JNI基础知识讲解"),a(e)])]),i("p",null,[i("a",u,[n("Android JNI实战"),a(e)])]),b])}const N=t(r,[["render",o],["__file","Android-JNI实战用法.html.vue"]]),f=JSON.parse('{"path":"/fe/android/%E5%A6%82%E4%BD%95%E5%AD%A6%E4%B9%A0ndk/Android-JNI%E5%AE%9E%E6%88%98%E7%94%A8%E6%B3%95.html","title":"Android-JNI实战用法","lang":"zh-CN","frontmatter":{"title":"Android-JNI实战用法","date":"2024-03-24T11:47:50.000Z","category":["如何学习ndk"],"tag":["archive"],"description":"####目录 cmake快速实战 Android JNI基础知识讲解 Android JNI实战 ####1、前言 对于程序员来讲，最简单方式给对方代码看 我这边项目循序渐进参考借鉴孤云，写了一套native方法，由易变难，当你用到那块方面时候，可以直接取用demo 我承认是站在巨人肩膀上coding的，我只是力求更简单理解 项目地址：https://...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E5%A6%82%E4%BD%95%E5%AD%A6%E4%B9%A0ndk/Android-JNI%E5%AE%9E%E6%88%98%E7%94%A8%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android-JNI实战用法"}],["meta",{"property":"og:description","content":"####目录 cmake快速实战 Android JNI基础知识讲解 Android JNI实战 ####1、前言 对于程序员来讲，最简单方式给对方代码看 我这边项目循序渐进参考借鉴孤云，写了一套native方法，由易变难，当你用到那块方面时候，可以直接取用demo 我承认是站在巨人肩膀上coding的，我只是力求更简单理解 项目地址：https://..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android-JNI实战用法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.84,"words":851},"filePathRelative":"fe/android/如何学习ndk/Android-JNI实战用法.md","localizedDate":"2024年3月24日","excerpt":"<p>####目录\\n<a href=\\"https://www.jianshu.com/p/f33988197f60\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">cmake快速实战</a></p>\\n<p><a href=\\"https://www.jianshu.com/p/c86dce5a70b0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Android JNI基础知识讲解</a></p>\\n<p><a href=\\"https://www.jianshu.com/p/a4022db636d5\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Android JNI实战</a></p>","autoDesc":true}');export{N as comp,f as data};
