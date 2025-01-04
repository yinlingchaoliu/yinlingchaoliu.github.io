import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as d,c as u,a as t,b as i,d as a,f as l}from"./app-CtvCwAmI.js";const r={},s=l(`<h6 id="_1、自动添加约束-不推荐" tabindex="-1"><a class="header-anchor" href="#_1、自动添加约束-不推荐"><span>1、自动添加约束(不推荐)</span></a></h6><ul><li>Autoconnect 针对单个控件 <img src="https://upload-images.jianshu.io/upload_images/5526061-17c342b453d094e3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></li><li>Inference 针对整个布局 <img src="https://upload-images.jianshu.io/upload_images/5526061-4858476574452cc4.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></li></ul><p>点击一下即可，推荐Inference</p><h6 id="二、手工写约束" tabindex="-1"><a class="header-anchor" href="#二、手工写约束"><span>二、手工写约束</span></a></h6><p>1、相对位置 <img src="https://upload-images.jianshu.io/upload_images/5526061-4be7f845416d2e59.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;android.support.constraint.ConstraintLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:app=&quot;http://schemas.android.com/apk/res-auto&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    android:orientation=&quot;vertical&quot;&gt;

    &lt;ImageView
        android:id=&quot;@+id/logoIv&quot;
        android:layout_width=&quot;140dp&quot;
        android:layout_height=&quot;86dp&quot;
        android:layout_marginStart=&quot;12dp&quot;
        android:layout_marginLeft=&quot;12dp&quot;
        android:layout_marginTop=&quot;12dp&quot;
        app:layout_constraintLeft_toLeftOf=&quot;parent&quot;
        app:layout_constraintTop_toTopOf=&quot;parent&quot;
        app:srcCompat=&quot;@color/colorAccent&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/infoTv&quot;
        android:layout_width=&quot;0dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_marginLeft=&quot;8dp&quot;
        android:layout_marginTop=&quot;12dp&quot;
        android:layout_marginRight=&quot;12dp&quot;
        android:text=&quot;马云:一年交税170多亿马云:一年交税170多亿马云:一年交税170多亿&quot;
        android:textColor=&quot;#000000&quot;
        android:textSize=&quot;16dp&quot;
        app:layout_constraintLeft_toRightOf=&quot;@id/logoIv&quot;
        app:layout_constraintRight_toRightOf=&quot;parent&quot;
        app:layout_constraintTop_toTopOf=&quot;parent&quot; /&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_marginStart=&quot;8dp&quot;
        android:layout_marginLeft=&quot;8dp&quot;
        android:text=&quot;8分钟前&quot;
        android:textColor=&quot;#333&quot;
        android:textSize=&quot;12dp&quot;
        app:layout_constraintBottom_toBottomOf=&quot;@id/logoIv&quot;
        app:layout_constraintLeft_toRightOf=&quot;@id/logoIv&quot;
        app:layout_constraintTop_toBottomOf=&quot;@id/infoTv&quot; /&gt;

&lt;/android.support.constraint.ConstraintLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手敲一遍，感受一下。 总结一句口诀 <code>先写margin , 后写constraint, to是相对控件起始位置</code> eg:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        //左边距是8dp
        android:layout_marginLeft=&quot;8dp&quot;
        //左边距在logoIv右侧开始
        app:layout_constraintLeft_toRightOf=&quot;@id/logoIv&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 、match失效 用“0dp”代替 ConstraintLayout中0代表：MATCH_CONSTRAINT</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> &lt;android.support.constraint.ConstraintLayout
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_marginTop=&quot;12dp&quot;
        android:background=&quot;@color/colorPrimary&quot;&gt;

        &lt;Button
            android:id=&quot;@+id/btn01&quot;
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;40dp&quot; /&gt;

        &lt;Button
            android:id=&quot;@+id/btn02&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;40dp&quot;
            android:layout_marginStart=&quot;12dp&quot;
            android:layout_marginLeft=&quot;12dp&quot;
            app:layout_constraintLeft_toRightOf=&quot;@id/btn01&quot;
            app:layout_constraintRight_toRightOf=&quot;parent&quot;/&gt;

    &lt;/android.support.constraint.ConstraintLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、设置宽高比 第一种写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;android.support.constraint.ConstraintLayout
        android:id=&quot;@+id/layout0&quot;
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;&gt;

        &lt;TextView
            android:layout_width=&quot;match_parent&quot;
            android:layout_height=&quot;0dp&quot;
            android:background=&quot;#765&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Banner&quot;
            app:layout_constraintDimensionRatio=&quot;H,16:6&quot; /&gt;

    &lt;/android.support.constraint.ConstraintLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;android.support.constraint.ConstraintLayout
        android:layout_marginTop=&quot;12dp&quot;
        app:layout_constraintTop_toBottomOf=&quot;@id/layout2&quot;
        android:id=&quot;@+id/layout3&quot;
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;&gt;

        &lt;TextView
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;0dp&quot;
            android:background=&quot;#765&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Banner&quot;
            app:layout_constraintTop_toTopOf=&quot;parent&quot;
            app:layout_constraintLeft_toLeftOf=&quot;parent&quot;
            app:layout_constraintRight_toRightOf=&quot;parent&quot;
            app:layout_constraintDimensionRatio=&quot;H,5:1&quot; /&gt;

    &lt;/android.support.constraint.ConstraintLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//宽高比设置
app:layout_constraintDimensionRatio=&quot;W,16:6&quot;
app:layout_constraintDimensionRatio=&quot;H,16:6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、设置权重 第一种写法</p><figure><img src="https://upload-images.jianshu.io/upload_images/5526061-fa3d92fb4d497bad.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;android.support.constraint.ConstraintLayout
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;
        app:layout_constraintBottom_toBottomOf=&quot;parent&quot;
        app:layout_constraintBottom_toTopOf=&quot;@id/layout3&quot;&gt;

        &lt;TextView
            android:id=&quot;@+id/tab01&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;30dp&quot;
            android:background=&quot;#f67&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Tab1&quot;
            app:layout_constraintHorizontal_weight=&quot;2&quot;
            app:layout_constraintLeft_toLeftOf=&quot;parent&quot;
            app:layout_constraintRight_toLeftOf=&quot;@id/tab02&quot; /&gt;

        &lt;TextView
            android:id=&quot;@+id/tab02&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;30dp&quot;
            android:background=&quot;#A67&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Tab2&quot;
            app:layout_constraintHorizontal_weight=&quot;1&quot;
            app:layout_constraintLeft_toRightOf=&quot;@id/tab01&quot;
            app:layout_constraintRight_toLeftOf=&quot;@id/tab03&quot; /&gt;

        &lt;TextView
            android:id=&quot;@+id/tab03&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;30dp&quot;
            android:background=&quot;#767&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Tab3&quot;
            app:layout_constraintHorizontal_weight=&quot;1&quot;
            app:layout_constraintLeft_toRightOf=&quot;@id/tab02&quot;
            app:layout_constraintRight_toRightOf=&quot;parent&quot; /&gt;

    &lt;/android.support.constraint.ConstraintLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种写法 <img src="https://upload-images.jianshu.io/upload_images/5526061-5af144f4c7f29a8b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;android.support.constraint.ConstraintLayout
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;
        app:layout_constraintBottom_toBottomOf=&quot;parent&quot;&gt;

        &lt;TextView
            android:id=&quot;@+id/tab1&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;30dp&quot;
            android:background=&quot;#f67&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Tab1&quot;
            app:layout_constraintLeft_toLeftOf=&quot;parent&quot;
            app:layout_constraintRight_toLeftOf=&quot;@id/tab2&quot; /&gt;

        &lt;TextView
            android:id=&quot;@+id/tab2&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;30dp&quot;
            android:background=&quot;#A67&quot;
            android:gravity=&quot;center&quot;
            android:text=&quot;Tab2&quot;
            app:layout_constraintLeft_toRightOf=&quot;@id/tab1&quot;
            app:layout_constraintRight_toLeftOf=&quot;@id/tab3&quot; /&gt;

        &lt;TextView
            android:id=&quot;@+id/tab3&quot;
            android:layout_width=&quot;0dp&quot;
            android:layout_height=&quot;30dp&quot;
            android:gravity=&quot;center&quot;
            android:background=&quot;#767&quot;
            android:text=&quot;Tab3&quot;
            app:layout_constraintLeft_toRightOf=&quot;@id/tab2&quot;
            app:layout_constraintRight_toRightOf=&quot;parent&quot; /&gt;

    &lt;/android.support.constraint.ConstraintLayout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>app:layout_constraintHorizontal_weight
app:layout_constraintVertical_weight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>app:layout_constraintHorizontal_chainStyle=&quot;spread&quot;
//配合宽度非0dp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、浮动按钮</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;TextView
        android:layout_width=&quot;60dp&quot;
        android:layout_height=&quot;60dp&quot;
        android:background=&quot;#612&quot;
        app:layout_constraintHorizontal_bias=&quot;0.9&quot;
        app:layout_constraintVertical_bias=&quot;0.9&quot;
        app:layout_constraintBottom_toBottomOf=&quot;parent&quot;
        app:layout_constraintLeft_toLeftOf=&quot;parent&quot;
        app:layout_constraintRight_toRightOf=&quot;parent&quot;
        app:layout_constraintTop_toTopOf=&quot;parent&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//两侧间隙比例
layout_constraintHorizontal_bias
layout_constraintVertical_bias
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Guideline</p><p>####演示代码 https://github.com/yinlingchaoliu/ConstraintLayoutDemo</p><figure><img src="https://upload-images.jianshu.io/upload_images/5526061-b11545851fe1a74b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="demo效果" tabindex="0" loading="lazy"><figcaption>demo效果</figcaption></figure>`,28),c={href:"http://blog.csdn.net/lmj623565791/article/details/78011599",target:"_blank",rel:"noopener noreferrer"},v={href:"http://blog.csdn.net/lmj623565791/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://blog.csdn.net/guolin_blog/article/details/53122387",target:"_blank",rel:"noopener noreferrer"};function p(g,b){const n=o("ExternalLinkIcon");return d(),u("div",null,[s,t("p",null,[i("####参考 "),t("a",c,[i("http://blog.csdn.net/lmj623565791/article/details/78011599"),a(n)]),i("  本文出自"),t("a",v,[i("张鸿洋的博客"),a(n)])]),t("p",null,[t("a",m,[i("Android新特性介绍，ConstraintLayout完全解析"),a(n)])])])}const h=e(r,[["render",p],["__file","ConstraintLayout实战.html.vue"]]),y=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/ConstraintLayout%E5%AE%9E%E6%88%98.html","title":"ConstraintLayout实战","lang":"zh-CN","frontmatter":{"title":"ConstraintLayout实战","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"1、自动添加约束(不推荐) Autoconnect 针对单个控件 Inference 针对整个布局 点击一下即可，推荐Inference 二、手工写约束 1、相对位置 手敲一遍，感受一下。 总结一句口诀 先写margin , 后写constraint, to是相对控件起始位置 eg: 2 、match失效 用“0dp”代替 ConstraintLayo...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/ConstraintLayout%E5%AE%9E%E6%88%98.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"ConstraintLayout实战"}],["meta",{"property":"og:description","content":"1、自动添加约束(不推荐) Autoconnect 针对单个控件 Inference 针对整个布局 点击一下即可，推荐Inference 二、手工写约束 1、相对位置 手敲一遍，感受一下。 总结一句口诀 先写margin , 后写constraint, to是相对控件起始位置 eg: 2 、match失效 用“0dp”代替 ConstraintLayo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-17c342b453d094e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConstraintLayout实战\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-17c342b453d094e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-4858476574452cc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-4be7f845416d2e59.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-fa3d92fb4d497bad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-5af144f4c7f29a8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-b11545851fe1a74b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.67,"words":800},"filePathRelative":"fe/android/Android相关/ConstraintLayout实战.md","localizedDate":"2024年3月24日","excerpt":"<h6>1、自动添加约束(不推荐)</h6>\\n<ul>\\n<li>Autoconnect 针对单个控件\\n<img src=\\"https://upload-images.jianshu.io/upload_images/5526061-17c342b453d094e3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240\\" alt=\\"\\" loading=\\"lazy\\"></li>\\n<li>Inference 针对整个布局\\n<img src=\\"https://upload-images.jianshu.io/upload_images/5526061-4858476574452cc4.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240\\" alt=\\"\\" loading=\\"lazy\\"></li>\\n</ul>","autoDesc":true}');export{h as comp,y as data};
