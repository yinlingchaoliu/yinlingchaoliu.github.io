import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,f as i}from"./app-CtvCwAmI.js";const r={},a=i(`<ul><li><p>强引用（Strong Reference）：只要强引用在，即使在内存不足，也不会被回收。常见：创建新对象</p></li><li><p>软引用（SoftReference）:内存不足时会被回收。用于实现对内存敏感的高速缓存</p></li><li><p>弱引用（WeakReference）:只能生存到下一次垃圾回收之前，gc回收器发现它，就会被回收，用于引用占用内存空间较大的对象</p></li><li><p>虚引用（PhantomReference）:一个对象是否有虚引用存在，完全不会对其生存时间构成影响，也无法通过虚引用来取得对象实例，设置虚引用唯一目的能在这个对象被回收时收到一个系统通知</p></li></ul><p>虚引用示例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   void testPhantomReference(){
        String str = new String( &quot;test&quot; );
        System.out.println(str.getClass() + &quot;@&quot; + str.hashCode());
        final ReferenceQueue&lt;String&gt; referenceQueue = new ReferenceQueue&lt;String&gt;(  );
        Thread thread = new Thread( new Runnable() {
            @Override
            public void run() {

                while (!Thread.interrupted()){
                    Object obj = referenceQueue.poll();
                    if (obj!=null){
                        try {
                            Field referent = Reference.class
                                    .getDeclaredField(&quot;referent&quot;);
                            referent(true);
                            Object result = referent(obj);
                            System.out.println(&quot;gc will collect：&quot;+ result.getClass() + &quot;@&quot; + result.hashCode() + &quot;	&quot; + (String) result);
                        } catch (Exception e) {
                            System.out.println(e.getMessage());
                        }
                    }
                }
            }
        } );

        thread.start();
        PhantomReference&lt;String&gt; phantomReference = new PhantomReference&lt;String&gt;(str, referenceQueue);
        str = null;
        try {
            thread.join(3000);
            System.gc();
            Thread.currentThread().join(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        thread.interrupt();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[a];function c(s,d){return n(),t("div",null,l)}const v=e(r,[["render",c],["__file","java四种引用及使用场景.html.vue"]]),m=JSON.parse('{"path":"/basis/advanced/java%E5%9B%9B%E7%A7%8D%E5%BC%95%E7%94%A8%E5%8F%8A%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF.html","title":"java四种引用及使用场景","lang":"zh-CN","frontmatter":{"title":"java四种引用及使用场景","date":"2024-03-25T22:02:09.000Z","category":["知识进阶"],"tag":["archive"],"description":"强引用（Strong Reference）：只要强引用在，即使在内存不足，也不会被回收。常见：创建新对象 软引用（SoftReference）:内存不足时会被回收。用于实现对内存敏感的高速缓存 弱引用（WeakReference）:只能生存到下一次垃圾回收之前，gc回收器发现它，就会被回收，用于引用占用内存空间较大的对象 虚引用（PhantomRefe...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/advanced/java%E5%9B%9B%E7%A7%8D%E5%BC%95%E7%94%A8%E5%8F%8A%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"java四种引用及使用场景"}],["meta",{"property":"og:description","content":"强引用（Strong Reference）：只要强引用在，即使在内存不足，也不会被回收。常见：创建新对象 软引用（SoftReference）:内存不足时会被回收。用于实现对内存敏感的高速缓存 弱引用（WeakReference）:只能生存到下一次垃圾回收之前，gc回收器发现它，就会被回收，用于引用占用内存空间较大的对象 虚引用（PhantomRefe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:37:40.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-25T22:02:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java四种引用及使用场景\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-25T22:02:09.000Z\\",\\"dateModified\\":\\"2024-03-26T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711445860000,"updatedTime":1711445860000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"basis/advanced/java四种引用及使用场景.md","localizedDate":"2024年3月26日","excerpt":"<ul>\\n<li>\\n<p>强引用（Strong Reference）：只要强引用在，即使在内存不足，也不会被回收。常见：创建新对象</p>\\n</li>\\n<li>\\n<p>软引用（SoftReference）:内存不足时会被回收。用于实现对内存敏感的高速缓存</p>\\n</li>\\n<li>\\n<p>弱引用（WeakReference）:只能生存到下一次垃圾回收之前，gc回收器发现它，就会被回收，用于引用占用内存空间较大的对象</p>\\n</li>\\n<li>\\n<p>虚引用（PhantomReference）:一个对象是否有虚引用存在，完全不会对其生存时间构成影响，也无法通过虚引用来取得对象实例，设置虚引用唯一目的能在这个对象被回收时收到一个系统通知</p>\\n</li>\\n</ul>","autoDesc":true}');export{v as comp,m as data};
