import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as s}from"./app-CtvCwAmI.js";const t={},d=s(`<p>###EventBus源码分析 ####1、源码分析要点 EventBus是观察者模式，是一对多，一般源码分析的重点在register方法上，分析的核心应在在消息队列上PendingPostQueue</p><p>1、消息队列</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PendingPostQueue{
    void enqueue(PendingPost pendingPost)//加入消息
    PendingPost poll()//取出消息
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、处理消息核心 五种策略</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface Poster {
    void enqueue(Subscription subscription, Object event);//加入消息    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####1、Poster消息队列存取</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class XXXPoster implements Runnable, Poster {

    public void enqueue(Subscription subscription, Object event) {
        //插入消息
        PendingPost pendingPost = PendingPost.obtainPendingPost(subscription, event);
        queue.enqueue(pendingPost);
        //运行
        eventBus.getExecutorService().execute(this);
    }

    @Override
    public void run() {
        //取出消息
        PendingPost pendingPost = queue.poll();
        //处理消息
        eventBus.invokeSubscriber(pendingPost);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####2、register消费者注册列表</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void register(Object subscriber) {
        Class&lt;?&gt; subscriberClass = subscriber.getClass();
        //获得该类注解信息列表
        List&lt;SubscriberMethod&gt; subscriberMethods = subscriberMethodFinder.findSubscriberMethods(subscriberClass);
        synchronized (this) {
            for (SubscriberMethod subscriberMethod : subscriberMethods) {
                subscribe(subscriber, subscriberMethod);
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private void subscribe(Object subscriber, SubscriberMethod subscriberMethod) {
        Class&lt;?&gt; eventType = subscriberMethod.eventType;
        Subscription newSubscription = new Subscription(subscriber, subscriberMethod);
        //注册事件列表
        CopyOnWriteArrayList&lt;Subscription&gt; subscriptions = subscriptionsByEventType.get(eventType);
        if (subscriptions == null) {
            subscriptions = new CopyOnWriteArrayList&lt;&gt;();
            subscriptionsByEventType.put(eventType, subscriptions);
        }
        
        //注册该类
        List&lt;Class&lt;?&gt;&gt; subscribedEvents = typesBySubscriber.get(subscriber);
        if (subscribedEvents == null) {
            subscribedEvents = new ArrayList&lt;&gt;();
            typesBySubscriber.put(subscriber, subscribedEvents);
        }
        subscribedEvents.add(eventType);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找该类所有注解方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    List&lt;SubscriberMethod&gt; findSubscriberMethods(Class&lt;?&gt; subscriberClass) {
        List&lt;SubscriberMethod&gt; subscriberMethods = METHOD_CACHE.get(subscriberClass);
        subscriberMethods = findUsingReflection(subscriberClass);
        return subscriberMethods;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//寻找注解实现</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private void findUsingReflectionInSingleClass(FindState findState) {
        Method[] methods;
        try {
            // This is faster than getMethods, especially when subscribers are fat classes like Activities
            methods = findState.clazz.getDeclaredMethods();
        } catch (Throwable th) {
            methods = findState.clazz.getMethods();
            findState.skipSuperClasses = true;
        }
        for (Method method : methods) {
            int modifiers = method.getModifiers();
            if ((modifiers &amp; Modifier.PUBLIC) != 0 &amp;&amp; (modifiers &amp; MODIFIERS_IGNORE) == 0) {
                Class&lt;?&gt;[] parameterTypes = method.getParameterTypes();
                if (parameterTypes.length == 1) {
                    Subscribe subscribeAnnotation = method.getAnnotation(Subscribe.class);
                    if (subscribeAnnotation != null) {
                        Class&lt;?&gt; eventType = parameterTypes[0];
                        if (findState.checkAdd(method, eventType)) {
                            ThreadMode threadMode = subscribeAnnotation.threadMode();
                            findState.subscriberMethods.add(new SubscriberMethod(method, eventType, threadMode,
                                    subscribeAnnotation.priority(), subscribeAnnotation.sticky()));
                        }
                    }
                }
            }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####3、post放入消息流程</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>post(event)--&gt;postSingleEvent()--&gt;postSingleEventForEventType()--&gt;postToSubscription()--&gt;XXXPoster.enqueue(subscription, event)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、通过event寻找注册类</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private void postSingleEvent(Object event, PostingThreadState postingState) throws Error {
        Class&lt;?&gt; eventClass = event.getClass();
        boolean subscriptionFound = false;
            List&lt;Class&lt;?&gt;&gt; eventTypes = lookupAllEventTypes(eventClass);
            int countTypes = eventTypes.size();
            for (int h = 0; h &lt; countTypes; h++) {
                Class&lt;?&gt; clazz = eventTypes.get(h);
                subscriptionFound |= postSingleEventForEventType(event, postingState, clazz);
            }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过event寻找该注册类函数清单，发送</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private boolean postSingleEventForEventType(Object event, PostingThreadState postingState, Class&lt;?&gt; eventClass) {
        CopyOnWriteArrayList&lt;Subscription&gt; subscriptions;
        synchronized (this) {
            //通过发送事件类型寻找注册表
            subscriptions = subscriptionsByEventType.get(eventClass);
        }
            //遍历整个列表发送消息
            for (Subscription subscription : subscriptions) {
                postingState.event = event;
                postingState.subscription = subscription;
                //处理消息
                postToSubscription(subscription, event, postingState.isMainThread); 
            }
            return true;
        }
        return false;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####4、普通post与postSticky区别 1、postSticky 缓存最新的一个事件 2、register后，postSticky 自动触发一遍该类的缓存的事件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void postSticky(Object event) {
        synchronized (stickyEvents) {
            stickyEvents.put(event.getClass(), event);
        }
        post(event);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private void subscribe(Object subscriber, SubscriberMethod subscriberMethod) {
    if (subscriberMethod.sticky) {
        Object stickyEvent = stickyEvents.get(eventType);
        checkPostStickyEventToSubscription(newSubscription, stickyEvent);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####定制化RxBus #####设计rxbus重点 1、调用方式与EventBus一致，降低使用成本 2、rxjava是观察者模式，可以替换Eventbus消息队列和处理消息的策略模式 3、支持线程安全 4、支持黏性事件</p>`,24),r=[d];function l(a,v){return i(),n("div",null,r)}const b=e(t,[["render",l],["__file","EventBus源码分析.html.vue"]]),o=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/EventBus%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html","title":"EventBus源码分析","lang":"zh-CN","frontmatter":{"title":"EventBus源码分析","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"###EventBus源码分析 ####1、源码分析要点 EventBus是观察者模式，是一对多，一般源码分析的重点在register方法上，分析的核心应在在消息队列上PendingPostQueue 1、消息队列 2、处理消息核心 五种策略 ####1、Poster消息队列存取 ####2、register消费者注册列表 找该类所有注解方法 //寻找...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/EventBus%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"EventBus源码分析"}],["meta",{"property":"og:description","content":"###EventBus源码分析 ####1、源码分析要点 EventBus是观察者模式，是一对多，一般源码分析的重点在register方法上，分析的核心应在在消息队列上PendingPostQueue 1、消息队列 2、处理消息核心 五种策略 ####1、Poster消息队列存取 ####2、register消费者注册列表 找该类所有注解方法 //寻找..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EventBus源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.19,"words":656},"filePathRelative":"fe/android/框架编写/EventBus源码分析.md","localizedDate":"2024年3月24日","excerpt":"<p>###EventBus源码分析\\n####1、源码分析要点\\nEventBus是观察者模式，是一对多，一般源码分析的重点在register方法上，分析的核心应在在消息队列上PendingPostQueue</p>\\n<p>1、消息队列</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>PendingPostQueue{\\n    void enqueue(PendingPost pendingPost)//加入消息\\n    PendingPost poll()//取出消息\\n}\\n</code></pre></div>","autoDesc":true}');export{b as comp,o as data};
