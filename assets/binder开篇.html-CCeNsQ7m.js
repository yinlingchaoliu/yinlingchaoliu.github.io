import{_ as e}from"./bpbinder-BweVx7vb.js";import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as r,f as a}from"./app-CtvCwAmI.js";const d="/assets/ipc-DY8-OhFd.png",t="/assets/binder-Bh4LPnTp.png",l={},c=a('<h3 id="ipc原理" tabindex="-1"><a class="header-anchor" href="#ipc原理"><span>IPC原理</span></a></h3><figure><img src="'+d+'" alt="ipc原理" tabindex="0" loading="lazy"><figcaption>ipc原理</figcaption></figure><p>进程空间分为用户空间和内核空间，用户空间是彼此不共享的，内核空间是可共享的, Client进程向Server进程通信，就是通过内核空间共享内存来实现的。</p><h3 id="binder原理" tabindex="-1"><a class="header-anchor" href="#binder原理"><span>binder原理</span></a></h3><figure><img src="'+t+'" alt="binder原理" tabindex="0" loading="lazy"><figcaption>binder原理</figcaption></figure><p>ServiceManager是整个Binder通信机制的大管家，是Android进程间通信机制Binder的守护进程</p><ol><li>启动serverManager</li><li>获取serviceManager</li></ol><p>binder通信</p><ul><li>注册服务(addService)：Server进程要先注册Service到ServiceManager</li><li>获取服务(getService)：Client进程使用某个Service前，须先向ServiceManager中获取相应的Service。</li><li>使用服务：Client与Service交互</li></ul><p>binder驱动，位于内核空间 Client,Server,Service Manager位于用户空间 开发人员自定义client server可进行ipc通信</p><h3 id="cs模式" tabindex="-1"><a class="header-anchor" href="#cs模式"><span>CS模式</span></a></h3><figure><img src="'+e+`" alt="C/S模式" tabindex="0" loading="lazy"><figcaption>C/S模式</figcaption></figure><ul><li>client端：BpBinder.transact()来发送事务请求；</li><li>server端：BBinder.onTransact()会接收到相应事务。</li></ul><h3 id="源码目录" tabindex="-1"><a class="header-anchor" href="#源码目录"><span>源码目录</span></a></h3><p>Binder架构所涉及的总共有以下5个目录:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/framework/base/core/java/               (Java)
/framework/base/core/jni/                (JNI)
/framework/native/libs/binder            (Native)
/framework/native/cmds/servicemanager/   (Native)
/kernel/drivers/staging/android          (Driver)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java framework</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/framework/base/core/java/android/os/  
    - IInterface.java
    - IBinder.java
    - Parcel.java
    - IServiceManager.java
    - ServiceManager.java
    - ServiceManagerNative.java
    - Binder.java  


/framework/base/core/jni/    
    - android_os_Parcel.cpp
    - AndroidRuntime.cpp
    - android_util_Binder.cpp (核心类)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Native framework</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/framework/native/libs/binder         
    - IServiceManager.cpp
    - BpBinder.cpp
    - Binder.cpp
    - IPCThreadState.cpp (核心类)
    - ProcessState.cpp  (核心类)

/framework/native/include/binder/
    - IServiceManager.h
    - IInterface.h

/framework/native/cmds/servicemanager/
    - service_manager.c
    - binder.c

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kernel</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/kernel/drivers/staging/android/
    - binder.c
    - uapi/binder.h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),s=[c];function v(o,p){return n(),r("div",null,s)}const g=i(l,[["render",v],["__file","binder开篇.html.vue"]]),h=JSON.parse('{"path":"/fe/framework/binder/binder%E5%BC%80%E7%AF%87.html","title":"binder开篇","lang":"zh-CN","frontmatter":{"title":"binder开篇","date":"2024-04-14T11:47:50.000Z","order":1,"category":["framework"],"tag":["binder"],"description":"IPC原理 ipc原理ipc原理 进程空间分为用户空间和内核空间，用户空间是彼此不共享的，内核空间是可共享的, Client进程向Server进程通信，就是通过内核空间共享内存来实现的。 binder原理 binder原理binder原理 ServiceManager是整个Binder通信机制的大管家，是Android进程间通信机制Binder的守护进...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/framework/binder/binder%E5%BC%80%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"binder开篇"}],["meta",{"property":"og:description","content":"IPC原理 ipc原理ipc原理 进程空间分为用户空间和内核空间，用户空间是彼此不共享的，内核空间是可共享的, Client进程向Server进程通信，就是通过内核空间共享内存来实现的。 binder原理 binder原理binder原理 ServiceManager是整个Binder通信机制的大管家，是Android进程间通信机制Binder的守护进..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-22T23:46:25.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"binder"}],["meta",{"property":"article:published_time","content":"2024-04-14T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-22T23:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"binder开篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-14T11:47:50.000Z\\",\\"dateModified\\":\\"2024-04-22T23:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"IPC原理","slug":"ipc原理","link":"#ipc原理","children":[]},{"level":3,"title":"binder原理","slug":"binder原理","link":"#binder原理","children":[]},{"level":3,"title":"CS模式","slug":"cs模式","link":"#cs模式","children":[]},{"level":3,"title":"源码目录","slug":"源码目录","link":"#源码目录","children":[]}],"git":{"createdTime":1713311958000,"updatedTime":1713829585000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":4}]},"readingTime":{"minutes":1.04,"words":312},"filePathRelative":"fe/framework/binder/binder开篇.md","localizedDate":"2024年4月14日","excerpt":"<h3>IPC原理</h3>\\n<figure><figcaption>ipc原理</figcaption></figure>\\n<p>进程空间分为用户空间和内核空间，用户空间是彼此不共享的，内核空间是可共享的, Client进程向Server进程通信，就是通过内核空间共享内存来实现的。</p>\\n<h3>binder原理</h3>\\n<figure><figcaption>binder原理</figcaption></figure>\\n<p>ServiceManager是整个Binder通信机制的大管家，是Android进程间通信机制Binder的守护进程</p>\\n<ol>\\n<li>启动serverManager</li>\\n<li>获取serviceManager</li>\\n</ol>","autoDesc":true}');export{g as comp,h as data};
