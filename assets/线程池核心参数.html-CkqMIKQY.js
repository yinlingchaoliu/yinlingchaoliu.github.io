import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as t}from"./app-CtvCwAmI.js";const a={},r=t(`<p>线程池核心参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue&lt;Runnable&gt; workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）corePoolSize（线程池基本大小）</p><p>2）maximumPoolSize（线程池最大数量）</p><p>3）keepAliveTime（空闲线程活动保持时间）：线程池工作线程空闲后，保持存活时间</p><p>4）TimeUnit（时间单位）</p><p>5）workQueue（任务队列）：用于保存等待执行任务的阻塞队列 1、ArrayBlockQueue 2、LinkedBlockQueue 3、SynchronousQueue(不存储元素阻塞队列) 4、PriorityBlockingQueue(优先级无限阻塞队列)</p><p>6） threadFactory(线程工厂)</p><p>7） handler（饱和策略） 1、AbortPolicy:直接抛出异常 2、CallerRunsPolicy:调用者所在线程来运行任务 3、DiscardOrderestPolicy:丢队列最近一个任务，并执行 4、DiscardPolicy:不处理，丢掉</p><h4 id="四种线程池" tabindex="-1"><a class="header-anchor" href="#四种线程池"><span>四种线程池</span></a></h4><p>固定线程池 newFixedThreadPool 缓存线程池 newCachedThreadPool 单个线程 newSingleThreadExecutor 定时线程池 newScheduledThreadPool</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //固定线程池
    public static ExecutorService newFixedThreadPool(int nThreads) {
        return new ThreadPoolExecutor( nThreads, nThreads,
                0L, TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue&lt;Runnable&gt;() );
    }

    //缓存线程池
    public static ExecutorService newCachedThreadPool() {
        return new ThreadPoolExecutor( 0, Integer.MAX_VALUE,
                60L, TimeUnit.SECONDS,
                new SynchronousQueue&lt;Runnable&gt;() );
    }


    //单个线程池
    public static ExecutorService newSingleThreadExecutor() {
        return new ThreadPoolExecutor( 1, 1,
                0L, TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue&lt;Runnable&gt;() );
    }

    //定时线程池
    public static ExecutorService newScheduledThreadPoolExecutor(int corePoolSize) {
        return new ThreadPoolExecutor( corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS,
                new ScheduledThreadPoolExecutor.DelayedWorkQueue() );
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务性质分类" tabindex="-1"><a class="header-anchor" href="#任务性质分类"><span>任务性质分类</span></a></h4><p>获得cpu个数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        int cpu = Runtime.getRuntime().availableProcessors();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPU密集型：Ncpu+1 IO密集型：2* Ncpu 混合型：线程池分解</p><h4 id="示例代码pool" tabindex="-1"><a class="header-anchor" href="#示例代码pool"><span>示例代码pool</span></a></h4><p>https://github.com/yinlingchaoliu/juc.git</p>`,18),l=[r];function d(o,c){return i(),n("div",null,l)}const m=e(a,[["render",d],["__file","线程池核心参数.html.vue"]]),p=JSON.parse('{"path":"/basis/advanced/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%A0%B8%E5%BF%83%E5%8F%82%E6%95%B0.html","title":"线程池核心参数","lang":"zh-CN","frontmatter":{"title":"线程池核心参数","date":"2024-03-25T22:02:09.000Z","category":["知识进阶"],"tag":["archive"],"description":"线程池核心参数 1）corePoolSize（线程池基本大小） 2）maximumPoolSize（线程池最大数量） 3）keepAliveTime（空闲线程活动保持时间）：线程池工作线程空闲后，保持存活时间 4）TimeUnit（时间单位） 5）workQueue（任务队列）：用于保存等待执行任务的阻塞队列 1、ArrayBlockQueue 2、L...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/advanced/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%A0%B8%E5%BF%83%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"线程池核心参数"}],["meta",{"property":"og:description","content":"线程池核心参数 1）corePoolSize（线程池基本大小） 2）maximumPoolSize（线程池最大数量） 3）keepAliveTime（空闲线程活动保持时间）：线程池工作线程空闲后，保持存活时间 4）TimeUnit（时间单位） 5）workQueue（任务队列）：用于保存等待执行任务的阻塞队列 1、ArrayBlockQueue 2、L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:37:40.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-25T22:02:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程池核心参数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-25T22:02:09.000Z\\",\\"dateModified\\":\\"2024-03-26T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711445860000,"updatedTime":1711445860000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.17,"words":352},"filePathRelative":"basis/advanced/线程池核心参数.md","localizedDate":"2024年3月26日","excerpt":"<p>线程池核心参数</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>    ThreadPoolExecutor(int corePoolSize,\\n                              int maximumPoolSize,\\n                              long keepAliveTime,\\n                              TimeUnit unit,\\n                              BlockingQueue&lt;Runnable&gt; workQueue,\\n                              ThreadFactory threadFactory,\\n                              RejectedExecutionHandler handler)\\n</code></pre></div>","autoDesc":true}');export{m as comp,p as data};
