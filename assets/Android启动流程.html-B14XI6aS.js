import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-CtvCwAmI.js";const t="/assets/init-start-Di2lgNgy.png",i="/assets/init-rc-DWnCBjPm.png",p="/assets/init-zygote-BVczzOw3.png",o="/assets/init-preload-Bvs4OJgT.png",c="/assets/init-boot-C0xhEkpg.png",l="/assets/init-app-DXG6x_63.png",r={},u=e('<h3 id="android启动流程" tabindex="-1"><a class="header-anchor" href="#android启动流程"><span>Android启动流程</span></a></h3><figure><img src="'+t+`" alt="Android启动核心模块" tabindex="0" loading="lazy"><figcaption>Android启动核心模块</figcaption></figure><ul><li>linux内核启动创建Init进程(pid=1)</li><li>init进程创建zygote进程(java孵化进程)和 servicemanager</li><li>zygote通过fork生成system_server进程</li><li>system_server通过zygote和servcemanager创建app进程</li></ul><h3 id="init进程" tabindex="-1"><a class="header-anchor" href="#init进程"><span>init进程</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">signal_handler_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//初始化子进程退出的信号处理过程</span>

    <span class="token function">init_parse_config_file</span><span class="token punctuation">(</span><span class="token string">&quot;/init.rc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解析init.rc文件</span>

    <span class="token comment">//执行rc文件中触发器为 on early-init的语句</span>
    <span class="token function">action_for_each_trigger</span><span class="token punctuation">(</span><span class="token string">&quot;early-init&quot;</span><span class="token punctuation">,</span> action_add_queue_tail<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//执行rc文件中触发器为 on init的语句</span>
    <span class="token function">action_for_each_trigger</span><span class="token punctuation">(</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">,</span> action_add_queue_tail<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//执行rc文件中触发器为 on late-init的语句</span>
    <span class="token function">action_for_each_trigger</span><span class="token punctuation">(</span><span class="token string">&quot;late-init&quot;</span><span class="token punctuation">,</span> action_add_queue_tail<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting_for_exec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">execute_one_command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">restart_processes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        epoll_event ev<span class="token punctuation">;</span>
        <span class="token comment">//循环 等待事件发生</span>
        <span class="token keyword">int</span> nr <span class="token operator">=</span> <span class="token function">TEMP_FAILURE_RETRY</span><span class="token punctuation">(</span><span class="token function">epoll_wait</span><span class="token punctuation">(</span>epoll_fd<span class="token punctuation">,</span> <span class="token operator">&amp;</span>ev<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nr <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">ERROR</span><span class="token punctuation">(</span><span class="token string">&quot;epoll_wait failed: %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">strerror</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nr <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> ev<span class="token punctuation">.</span>data<span class="token punctuation">.</span>ptr<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析和运行init.rc文件</li><li>创建zygote进程和system_server进程(通过rc文件创建)</li><li>处理子进程的终止(signal方式)</li></ul><h3 id="init-rc配置" tabindex="-1"><a class="header-anchor" href="#init-rc配置"><span>init.rc配置</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//启动zygote进程  后启动system_server进程</span>
service zygote <span class="token operator">/</span>system<span class="token operator">/</span>bin<span class="token operator">/</span>app_process <span class="token operator">-</span><span class="token class-name">Xzygote</span> <span class="token operator">/</span>system<span class="token operator">/</span>bin <span class="token operator">--</span>zygote <span class="token operator">--</span>start<span class="token operator">-</span>system<span class="token operator">-</span>server

<span class="token comment">//创建socket</span>
    socket zygote stream <span class="token number">660</span> root system   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>先创建zygote进程</li><li>后创建system_server进程</li><li>创建名为zygote socket</li></ul><figure><img src="`+i+'" alt="init.rc初始化" tabindex="0" loading="lazy"><figcaption>init.rc初始化</figcaption></figure><h3 id="zygote进程启动" tabindex="-1"><a class="header-anchor" href="#zygote进程启动"><span>zygote进程启动</span></a></h3><figure><img src="'+p+`" alt="zygote启动流程" tabindex="0" loading="lazy"><figcaption>zygote启动流程</figcaption></figure><h4 id="app-main-cpp" tabindex="-1"><a class="header-anchor" href="#app-main-cpp"><span>App_main.cpp</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>
int main(int argc, char* const argv[])
{
    AppRuntime runtime(argv[0], computeArgBlockSize(argc, argv));
    //设置进程名
    if (!niceName.isEmpty()) {
        runtime.setArgv0(niceName.string());
        set_process_name(niceName.string());
    }

    if (zygote) {
        // 启动AppRuntime
        runtime.start(&quot;com.android.internal.os.ZygoteInit&quot;, args, zygote);
    } else if (className) {
        runtime.start(&quot;com.android.internal.os.RuntimeInit&quot;, args, zygote);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在app_process进程启动过程，有两个分支：</p><ul><li>当zygote为true时，则执行ZygoteInit.main()</li><li>当zygote为false时，则执行RuntimeInit.main()</li></ul><h4 id="androidruntime" tabindex="-1"><a class="header-anchor" href="#androidruntime"><span>AndroidRuntime</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void AndroidRuntime::start(const char* className, const Vector&lt;String8&gt;&amp; options, bool zygote)
{
    // 虚拟机创建
    if (startVm(&amp;mJavaVM, &amp;env, zygote) != 0) {
        return;
    }
    onVmCreated(env);
    // JNI方法注册
    if (startReg(env) &lt; 0) {
        return;
    }
    //调用com.android.internal.os.ZygoteInit#main()方法
     env-&gt;CallStaticVoidMethod(startClass, startMeth, strArray);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建虚拟机</li><li>注册JNI方法</li><li>反射调用ZygoteInit#main方法</li></ul><h4 id="zygoteinit" tabindex="-1"><a class="header-anchor" href="#zygoteinit"><span>ZygoteInit</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">registerZygoteSocket</span><span class="token punctuation">(</span>socketName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//为Zygote注册socket</span>
        <span class="token function">preload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 预加载类和资源</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>startSystemServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//启动system_server走这个流程</span>
            <span class="token function">startSystemServer</span><span class="token punctuation">(</span>abiList<span class="token punctuation">,</span> socketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">runSelectLoop</span><span class="token punctuation">(</span>abiList<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//进入循环模式</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MethodAndArgsCaller</span> caller<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        caller<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//启动system_server中会讲到。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>为zygote注册socket</li><li>预加载类和资源(为fork创建做准备)</li><li>循环等待消息(等待AMS消息)</li><li>startSystemServer 启动进程</li></ul><figure><img src="`+o+`" alt="预加载资源为了fork做准备" tabindex="0" loading="lazy"><figcaption>预加载资源为了fork做准备</figcaption></figure><h4 id="接收ams消息进行处理" tabindex="-1"><a class="header-anchor" href="#接收ams消息进行处理"><span>接收AMS消息进行处理</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>private static void runSelectLoop(String abiList) throws MethodAndArgsCaller {
    while (true) {
        //多路复用 轮询等待消息
        runOnce();
    }
}

//ZygoteConnection.java
boolean runOnce() throws ZygoteInit.MethodAndArgsCaller {

        //读取socket客户端发送过来的参数列表
    args = readArgumentList();
    try {
        descriptors = mSocket.getAncillaryFileDescriptors();
    } catch (IOException ex) {
        ...
        return true;
    }

    try {
        //将binder客户端传递过来的参数，解析成Arguments对象格式
        parsedArgs = new Arguments(args);
        //创建App进程
        pid = Zygote.forkAndSpecialize(parsedArgs.uid, parsedArgs.gid, parsedArgs.gids,
                parsedArgs.debugFlags, rlimits, parsedArgs.mountExternal, parsedArgs.seInfo,
                parsedArgs.niceName, fdsToClose, parsedArgs.instructionSet,
                parsedArgs.appDataDir);
    }
    if (pid == 0) {
        //子进程执行
        //进入子进程流程
        handleChildProc(parsedArgs, descriptors, childPipeFd, newStderr);
    } else {
        //父进程执行
        handleParentProc(pid, descriptors, serverPipeFd, parsedArgs);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进入消息循环</li><li>通过socket读取消息，创建App进程</li></ul><h3 id="system-server进程启动" tabindex="-1"><a class="header-anchor" href="#system-server进程启动"><span>system_server进程启动</span></a></h3><h4 id="前置流程" tabindex="-1"><a class="header-anchor" href="#前置流程"><span>前置流程</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//前置流程</span>
app_process#main <span class="token operator">-&gt;</span> <span class="token class-name">AndroidRuntime</span>#<span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ZygoteInit</span>#<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ZygoteInit</span><span class="token punctuation">.</span><span class="token function">startSystemServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动参数 --start-system-server</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>private static boolean startSystemServer(String abiList, String socketName)
        throws MethodAndArgsCaller, RuntimeException {

    String args[] = {
        &quot;--setuid=1000&quot;,
        &quot;--setgid=1000&quot;,
        &quot;--setgroups=1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1018,1021,1032,3001,3002,3003,3006,3007&quot;,
        &quot;--capabilities=&quot; + capabilities + &quot;,&quot; + capabilities,
        &quot;--nice-name=system_server&quot;,
        &quot;--runtime-args&quot;,
        &quot;com.android.server.SystemServer&quot;,
    };

    // fork子进程system_server
    pid = Zygote.forkSystemServer(
            parsedArgs.uid, parsedArgs.gid,
            parsedArgs.gids,
            parsedArgs.debugFlags,
            null,
            parsedArgs.permittedCapabilities,
            parsedArgs.effectiveCapabilities);

    if (pid == 0) { //子进程
        if (hasSecondZygote(abiList)) {
            waitForSecondaryZygote(socketName);
        }
        //进入system_server进程
        handleSystemServerProcess(parsedArgs);
    }
    return true;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过zygote fork创建 system_server进程</li></ul><h4 id="启动system进程" tabindex="-1"><a class="header-anchor" href="#启动system进程"><span>启动system进程</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>private static void handleSystemServerProcess( ZygoteConnection.Arguments parsedArgs) throws ZygoteInit.MethodAndArgsCaller {
    ClassLoader cl = null;
    if (systemServerClasspath != null) {
        cl = new PathClassLoader(systemServerClasspath, ClassLoader.getSystemClassLoader());
        
        Thread.currentThread().setContextClassLoader(cl);
    }
    //RuntimeInit
    RuntimeInit.zygoteInit(parsedArgs.targetSdkVersion, parsedArgs.remainingArgs, cl);    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建PathClassLoader类加载器</li><li>RuntimeInit启动</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//RuntimeInit.zygoteInit
public static final void zygoteInit(int targetSdkVersion, String[] argv, ClassLoader classLoader) throws ZygoteInit.MethodAndArgsCaller {
    commonInit(); // 通用的一些初始化
    nativeZygoteInit(); // zygote初始化
    applicationInit(targetSdkVersion, argv, classLoader); // 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>commonInit 通用初始化</li><li>nativeZygoteInit 启动Binder线程池</li><li>applicationInit 调用SystemServer.main()</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>protected static Runnable applicationInit(int targetSdkVersion, String[] argv,
        ClassLoader classLoader) {
    //com.android.server.SystemServer 
    invokeStaticMain(args.startClass, args.startArgs, classLoader);
}

public static void main(String argv[]) {
    try {
        startSystemServer(abiList, socketName); //抛出MethodAndArgsCaller异常
    } catch (MethodAndArgsCaller caller) {
        caller.run(); //此处通过反射,会调用SystemServer.main()方法
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>采用抛出异常的方式,用于栈帧清空,提供利用率, 以至于现在大家看到的每个Java进程的调用栈如下:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    at com.android.server.SystemServer.main<span class="token punctuation">(</span>SystemServer.java:175<span class="token punctuation">)</span>
    at java.lang.reflect.Method.invoke<span class="token operator">!</span><span class="token punctuation">(</span>Native method<span class="token punctuation">)</span>
    at com.android.internal.os.ZygoteInit<span class="token variable">$MethodAndArgsCaller</span>.run<span class="token punctuation">(</span>ZygoteInit.java:738<span class="token punctuation">)</span>
    at com.android.internal.os.ZygoteInit.main<span class="token punctuation">(</span>ZygoteInit.java:628<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="system-main" tabindex="-1"><a class="header-anchor" href="#system-main"><span>System.main</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SystemServer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//先初始化SystemServer对象，再调用对象的run()方法</span>
        <span class="token keyword">new</span> <span class="token class-name">SystemServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
      <span class="token class-name">Looper</span><span class="token punctuation">.</span><span class="token function">prepareMainLooper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 准备主线程looper</span>

      <span class="token comment">//加载android_servers.so库，该库包含的源码在frameworks/base/services/目录下</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">loadLibrary</span><span class="token punctuation">(</span><span class="token string">&quot;android_servers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">createSystemContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//初始化系统上下文</span>

      <span class="token comment">//创建系统服务管理</span>
      mSystemServiceManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SystemServiceManager</span><span class="token punctuation">(</span>mSystemContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">LocalServices</span><span class="token punctuation">.</span><span class="token function">addService</span><span class="token punctuation">(</span><span class="token class-name">SystemServiceManager</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> mSystemServiceManager<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//启动各种系统服务</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">startBootstrapServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启动引导服务</span>
          <span class="token function">startCoreServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 启动核心服务</span>
          <span class="token function">startOtherServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 启动其他服务</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> ex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//一直循环执行</span>
    <span class="token class-name">Looper</span><span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Main thread loop unexpectedly exited&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token comment">//创建activityThread</span>
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">createSystemContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建system_server进程的上下文信息</span>
    <span class="token class-name">ActivityThread</span> activityThread <span class="token operator">=</span> <span class="token class-name">ActivityThread</span><span class="token punctuation">.</span><span class="token function">systemMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mSystemContext <span class="token operator">=</span> activityThread<span class="token punctuation">.</span><span class="token function">getSystemContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置主题</span>
    mSystemContext<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span></span>R</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>Theme_DeviceDefault_Light_DarkActionBar<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

   
       <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">startOtherServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//phase480 和phase500</span>
        mSystemServiceManager<span class="token punctuation">.</span><span class="token function">startBootPhase</span><span class="token punctuation">(</span><span class="token class-name">SystemService</span><span class="token punctuation">.</span><span class="token constant">PHASE_LOCK_SETTINGS_READY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mSystemServiceManager<span class="token punctuation">.</span><span class="token function">startBootPhase</span><span class="token punctuation">(</span><span class="token class-name">SystemService</span><span class="token punctuation">.</span><span class="token constant">PHASE_SYSTEM_SERVICES_READY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mActivityManagerService<span class="token punctuation">.</span><span class="token function">systemReady</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token annotation punctuation">@Override</span>
           <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token comment">//phase550</span>
               mSystemServiceManager<span class="token punctuation">.</span><span class="token function">startBootPhase</span><span class="token punctuation">(</span>
                       <span class="token class-name">SystemService</span><span class="token punctuation">.</span><span class="token constant">PHASE_ACTIVITY_MANAGER_READY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token comment">//phase600</span>
               mSystemServiceManager<span class="token punctuation">.</span><span class="token function">startBootPhase</span><span class="token punctuation">(</span>
                       <span class="token class-name">SystemService</span><span class="token punctuation">.</span><span class="token constant">PHASE_THIRD_PARTY_APPS_CAN_START</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">//启动home</span>
        <span class="token function">startHomeActivityLocked</span><span class="token punctuation">(</span>mCurrentUserId<span class="token punctuation">,</span> <span class="token string">&quot;systemReady&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//恢复栈顶的Activity</span>
        mStackSupervisor<span class="token punctuation">.</span><span class="token function">resumeTopActivitiesLocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建Looper消息循环</li><li>创建serviceManager</li><li>创建引导服务 ActivityManagerService, PowerManagerService, LightsService, DisplayManagerService， PackageManagerService， UserManagerService， sensor服务</li><li>创建核心服务 BatteryService，UsageStatsService，WebViewUpdateService</li><li>创建其他服务</li></ul><h4 id="服务启动" tabindex="-1"><a class="header-anchor" href="#服务启动"><span>服务启动</span></a></h4><figure><img src="`+c+'" alt="服务启动" tabindex="0" loading="lazy"><figcaption>服务启动</figcaption></figure><p>启动启动过程有采用过两种不同的方式来注册系统服务：</p><ul><li>ServiceManager的addService()</li><li>SystemServiceManager的startService()</li></ul><p>服务列表</p><ul><li>引导服务(7个)：ActivityManagerService、PowerManagerService、LightsService、DisplayManagerService、PackageManagerService、UserManagerService、SensorService；</li><li>核心服务(3个)：BatteryService、UsageStatsService、WebViewUpdateService；</li><li>其他服务(70个+)：AlarmManagerService、VibratorService等。</li></ul><h3 id="app启动流程" tabindex="-1"><a class="header-anchor" href="#app启动流程"><span>App启动流程</span></a></h3><figure><img src="'+l+`" alt="App启动" tabindex="0" loading="lazy"><figcaption>App启动</figcaption></figure><ul><li>App发起进程：当从桌面启动应用，则发起进程便是Launcher所在进程；当从某App内启动远程进程，则发送进程便是该App所在进程。发起进程先通过binder发送消息给system_server进程；</li><li>system_server进程：调用Process.start()方法，通过socket向zygote进程发送创建新进程的请求；</li><li>zygote进程：在执行ZygoteInit.main()后便进入runSelectLoop()循环体内，当有客户端连接时便会执行ZygoteConnection.runOnce()方法，再经过层层调用后fork出新的应用进程；</li><li>新进程：执行handleChildProc方法，最后调用ActivityThread.main()方法。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>startActivity-<span class="token operator">&gt;</span>AMS.startProceesLocked-<span class="token operator">&gt;</span>Procees.start-<span class="token operator">&gt;</span>Process.startViaZygote-<span class="token operator">&gt;</span>ZygoteInit.runOnce-<span class="token operator">&gt;</span>fork-<span class="token operator">&gt;</span>handleChildProc-<span class="token operator">&gt;</span>RuntimeInit.zygoteInit-<span class="token operator">&gt;</span>ActivityThread.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ActivityThread启动</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
    Environment.initForCurrentUser();
    Process.setArgV0(&quot;&lt;pre-initialized&gt;&quot;);
    //创建主线程looper
    Looper.prepareMainLooper();

    ActivityThread thread = new ActivityThread();
    //attach到系统进程
    thread.attach(false);

    if (sMainThreadHandler == null) {
        sMainThreadHandler = thread.getHandler();
    }

    //主线程进入循环状态
    Looper.loop();

    throw new RuntimeException(&quot;Main thread loop unexpectedly exited&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="源码路径" tabindex="-1"><a class="header-anchor" href="#源码路径"><span>源码路径</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//启动init.main入口</span>
<span class="token operator">/</span>system<span class="token operator">/</span>core<span class="token operator">/</span>init<span class="token operator">/</span><span class="token class-name">Init</span><span class="token punctuation">.</span>cpp
<span class="token comment">//init.rc配置 </span>
<span class="token operator">/</span>system<span class="token operator">/</span>core<span class="token operator">/</span>rootdir<span class="token operator">/</span>init<span class="token punctuation">.</span>rc

<span class="token comment">//zygote入口</span>
<span class="token operator">/</span>frameworks<span class="token operator">/</span>base<span class="token operator">/</span>cmds<span class="token operator">/</span>app_process<span class="token operator">/</span><span class="token class-name">App_main</span><span class="token punctuation">.</span>cpp
<span class="token comment">//启动类</span>
<span class="token operator">/</span>frameworks<span class="token operator">/</span>base<span class="token operator">/</span>core<span class="token operator">/</span>jni<span class="token operator">/</span><span class="token class-name">AndroidRuntime</span><span class="token punctuation">.</span>cpp

<span class="token comment">//初始化</span>
<span class="token operator">/</span>frameworks<span class="token operator">/</span>base<span class="token operator">/</span>core<span class="token operator">/</span>java<span class="token operator">/</span>com<span class="token operator">/</span>android<span class="token operator">/</span>internal<span class="token operator">/</span>os<span class="token operator">/</span>
  <span class="token operator">-</span> <span class="token class-name">ZygoteInit</span><span class="token punctuation">.</span>java
  <span class="token operator">-</span> <span class="token class-name">RuntimeInit</span><span class="token punctuation">.</span>java
  <span class="token operator">-</span> <span class="token class-name">Zygote</span><span class="token punctuation">.</span>java

<span class="token operator">/</span>frameworks<span class="token operator">/</span>base<span class="token operator">/</span>core<span class="token operator">/</span>services<span class="token operator">/</span>java<span class="token operator">/</span>com<span class="token operator">/</span>android<span class="token operator">/</span>server<span class="token operator">/</span>
  <span class="token operator">-</span> <span class="token class-name">SystemServer</span><span class="token punctuation">.</span>java

<span class="token operator">/</span>frameworks<span class="token operator">/</span>base<span class="token operator">/</span>core<span class="token operator">/</span>jni<span class="token operator">/</span>
  <span class="token operator">-</span> com_android_internal_os_Zygote<span class="token punctuation">.</span>cpp

  frameworks<span class="token operator">/</span>base<span class="token operator">/</span>services<span class="token operator">/</span>java<span class="token operator">/</span>com<span class="token operator">/</span>android<span class="token operator">/</span>server<span class="token operator">/</span>
  <span class="token operator">-</span> <span class="token class-name">SystemServer</span><span class="token punctuation">.</span>java

frameworks<span class="token operator">/</span>base<span class="token operator">/</span>services<span class="token operator">/</span>core<span class="token operator">/</span>java<span class="token operator">/</span>com<span class="token operator">/</span>android<span class="token operator">/</span>server<span class="token operator">/</span>
  <span class="token operator">-</span> <span class="token class-name">SystemServiceManager</span><span class="token punctuation">.</span>java
  <span class="token operator">-</span> <span class="token class-name">ServiceThread</span><span class="token punctuation">.</span>java
  <span class="token operator">-</span> am<span class="token operator">/</span><span class="token class-name">ActivityManagerService</span><span class="token punctuation">.</span>java

frameworks<span class="token operator">/</span>base<span class="token operator">/</span>core<span class="token operator">/</span>java<span class="token operator">/</span>android<span class="token operator">/</span>app<span class="token operator">/</span>
  <span class="token operator">-</span> <span class="token class-name">ActivityThread</span><span class="token punctuation">.</span>java
  <span class="token operator">-</span> <span class="token class-name">LoadedApk</span><span class="token punctuation">.</span>java
  <span class="token operator">-</span> <span class="token class-name">ContextImpl</span><span class="token punctuation">.</span>java

<span class="token operator">/</span>frameworks<span class="token operator">/</span>base<span class="token operator">/</span>core<span class="token operator">/</span>java<span class="token operator">/</span>android<span class="token operator">/</span>os<span class="token operator">/</span><span class="token class-name">Process</span><span class="token punctuation">.</span>java

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),d=[u];function v(k,m){return s(),a("div",null,d)}const y=n(r,[["render",v],["__file","Android启动流程.html.vue"]]),h=JSON.parse('{"path":"/fe/framework/init/Android%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B.html","title":"Android系统启动","lang":"zh-CN","frontmatter":{"title":"Android系统启动","date":"2024-03-24T11:47:50.000Z","order":1,"category":["framework"],"tag":["framework"],"description":"Android启动流程 Android启动核心模块Android启动核心模块 linux内核启动创建Init进程(pid=1) init进程创建zygote进程(java孵化进程)和 servicemanager zygote通过fork生成system_server进程 system_server通过zygote和servcemanager创建app...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/framework/init/Android%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android系统启动"}],["meta",{"property":"og:description","content":"Android启动流程 Android启动核心模块Android启动核心模块 linux内核启动创建Init进程(pid=1) init进程创建zygote进程(java孵化进程)和 servicemanager zygote通过fork生成system_server进程 system_server通过zygote和servcemanager创建app..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-04T02:43:59.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"framework"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-04T02:43:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android系统启动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2025-01-04T02:43:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"Android启动流程","slug":"android启动流程","link":"#android启动流程","children":[]},{"level":3,"title":"init进程","slug":"init进程","link":"#init进程","children":[]},{"level":3,"title":"init.rc配置","slug":"init-rc配置","link":"#init-rc配置","children":[]},{"level":3,"title":"zygote进程启动","slug":"zygote进程启动","link":"#zygote进程启动","children":[]},{"level":3,"title":"system_server进程启动","slug":"system-server进程启动","link":"#system-server进程启动","children":[]},{"level":3,"title":"App启动流程","slug":"app启动流程","link":"#app启动流程","children":[]},{"level":3,"title":"源码路径","slug":"源码路径","link":"#源码路径","children":[]}],"git":{"createdTime":1735958639000,"updatedTime":1735958639000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":5.57,"words":1670},"filePathRelative":"fe/framework/init/Android启动流程.md","localizedDate":"2024年3月24日","excerpt":"<h3>Android启动流程</h3>\\n<figure><figcaption>Android启动核心模块</figcaption></figure>\\n<ul>\\n<li>linux内核启动创建Init进程(pid=1)</li>\\n<li>init进程创建zygote进程(java孵化进程)和 servicemanager</li>\\n<li>zygote通过fork生成system_server进程</li>\\n<li>system_server通过zygote和servcemanager创建app进程</li>\\n</ul>\\n<h3>init进程</h3>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> argc<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">char</span><span class=\\"token operator\\">*</span><span class=\\"token operator\\">*</span> argv<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">signal_handler_init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">//初始化子进程退出的信号处理过程</span>\\n\\n    <span class=\\"token function\\">init_parse_config_file</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/init.rc\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//解析init.rc文件</span>\\n\\n    <span class=\\"token comment\\">//执行rc文件中触发器为 on early-init的语句</span>\\n    <span class=\\"token function\\">action_for_each_trigger</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"early-init\\"</span><span class=\\"token punctuation\\">,</span> action_add_queue_tail<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//执行rc文件中触发器为 on init的语句</span>\\n    <span class=\\"token function\\">action_for_each_trigger</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"init\\"</span><span class=\\"token punctuation\\">,</span> action_add_queue_tail<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//执行rc文件中触发器为 on late-init的语句</span>\\n    <span class=\\"token function\\">action_for_each_trigger</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"late-init\\"</span><span class=\\"token punctuation\\">,</span> action_add_queue_tail<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>true<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>waiting_for_exec<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">execute_one_command</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token function\\">restart_processes</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        epoll_event ev<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//循环 等待事件发生</span>\\n        <span class=\\"token keyword\\">int</span> nr <span class=\\"token operator\\">=</span> <span class=\\"token function\\">TEMP_FAILURE_RETRY</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">epoll_wait</span><span class=\\"token punctuation\\">(</span>epoll_fd<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>ev<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> timeout<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nr <span class=\\"token operator\\">==</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">ERROR</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"epoll_wait failed: %s\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">strerror</span><span class=\\"token punctuation\\">(</span>errno<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nr <span class=\\"token operator\\">==</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> ev<span class=\\"token punctuation\\">.</span>data<span class=\\"token punctuation\\">.</span>ptr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{y as comp,h as data};
