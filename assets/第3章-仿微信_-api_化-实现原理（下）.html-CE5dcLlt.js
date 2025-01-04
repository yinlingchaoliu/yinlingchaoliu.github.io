import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c as l,a as i,b as e,d as n,f as o}from"./app-CtvCwAmI.js";const s={},c={href:"https://www.jianshu.com/p/20108abc1dd6",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/b5b8afd008b3",target:"_blank",rel:"noopener noreferrer"},u=i("p",null,"#####1、思考路径 将原本下沉到base模块的通用性不高的代码，被重新申领到各个业务模块，运行时动态放入到base模块，在项目不断扩大时，避免了base在后期开发时急速膨胀，约束好代码边界",-1),m={href:"https://mp.weixin.qq.com/s/6Q818XA5FaHd7jJMFBG60w",target:"_blank",rel:"noopener noreferrer"},v=o(`<h5 id="_2、代码实现的核心逻辑" tabindex="-1"><a class="header-anchor" href="#_2、代码实现的核心逻辑"><span>2、代码实现的核心逻辑</span></a></h5><p>1、将项目中所有module中&quot;.api&quot;文件拷贝至指定ApiModule 2、因为java jvm不识别&quot;.api&quot;文件，将ApiModule中“.api”文件后缀改为&quot;.java&quot; 3、同理，将原来所有module中&quot;.api&quot;文件编译时移除使用（exclude） 4、清理ApiModule中空文件夹，使该项目显得更加清晰</p><h5 id="_3、示例核心代码-gradle脚本编写" tabindex="-1"><a class="header-anchor" href="#_3、示例核心代码-gradle脚本编写"><span>3、示例核心代码 gradle脚本编写</span></a></h5><p>1、删除api_module中所有java代码 做项目初始化</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>task cleanApiLib() {
    delete project.rootProject.project(&#39;:module_api&#39;).projectDir.path + &quot;/src/main/java&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、api文件拷贝指定api_module ,且文件后缀改为&quot;.java&quot;</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>task copyApiForCommLib(type: Copy) {

    group &#39;api&#39;
    //遍历所有项目 将api文件
    for (Project mProject : project.rootProject.getAllprojects()) {
        println(mProject.projectDir.path + &quot;/src/main/java&quot;)
        from(mProject.projectDir.path + &quot;/src/main/java&quot;) {
            include &#39;**/**.api&#39;
        }
    }

    println(project.rootProject.project(&#39;:module_api&#39;).projectDir.path + &quot;/src/main/java&quot;)
    into file(project.rootProject.project(&#39;:module_api&#39;).projectDir.path + &quot;/src/main/java&quot;)

    //将&quot;.api&quot;改名为&quot;.java&quot;
    rename { String filename -&gt;
        int index = filename.indexOf(&quot;.api&quot;)
        String name = filename[0..index] + &quot;java&quot;
        return name
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、api_module空文件夹清理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>task clearApiEmptyDir() {
    String filePath = project.rootProject.project(&#39;:module_api&#39;).projectDir.path + &quot;/src/main/java&quot;
    println(&quot;show all filePath:&quot; + filePath)
    clear(new File(filePath))
}

public static void clear(File dir) {
    File[] dirs = dir.listFiles()
    for (File file : dirs) {
        if (file.isDirectory()) {
            clear(file)
        }
    }

    if (dir.isDirectory() &amp;&amp; dir.delete())
        println(dir.name + &quot;清理成功&quot;)

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、项目编译时移除原有module中“.api”文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //删除api文件
    sourceSets {
        main {
            java {
                exclude(&#39;**/**.api&#39;)
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####4、 采用groovy编写weixinApi插件 本插件采用groovy编写，难点在中间的一些语法差异，和细节优化，请大家给我一个star， 主要考虑三点：</p><ul><li>1、有利于开发者用户快速集成</li><li>2、减少不必要gradle脚本，干扰到用户，重点在于业务</li><li>3、增强weixinapi通用性</li></ul><p>groovy 编写其中有很多技术难点，想要学习的朋友，可以我写的插件源码component/weixinApi</p><p>#####5、喜欢的朋友们记得给我的项目一个star https://github.com/yinlingchaoliu/AndroidComponent 具体代码位置去&quot;.api&quot;插件 component/weixinApi</p>`,15);function b(h,_){const a=r("ExternalLinkIcon");return d(),l("div",null,[i("p",null,[e("####导航 "),i("a",c,[e('第3章 组件声明式编程 仿微信".api"化(上)'),n(a)]),i("a",p,[e('第3章 仿微信".api"化 实现原理（下）'),n(a)])]),u,i("p",null,[e("反复参考"),i("a",m,[e("微信Android模块化架构重构实践"),n(a)]),e('思想，忽然有一个灵感，“.api”文件是java JVM不识别的，可不可以在编译之前，将这些".api"文件变成系统可识别的。weixinapi，是这个插件由来的原因')]),v])}const j=t(s,[["render",b],["__file","第3章-仿微信_-api_化-实现原理（下）.html.vue"]]),f=JSON.parse('{"path":"/fe/android/Android%E7%BB%84%E4%BB%B6%E5%8C%96/%E7%AC%AC3%E7%AB%A0-%E4%BB%BF%E5%BE%AE%E4%BF%A1_-api_%E5%8C%96-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%EF%BC%88%E4%B8%8B%EF%BC%89.html","title":"第3章-仿微信\\"-api\\"化-实现原理（下）","lang":"zh-CN","frontmatter":{"title":"第3章-仿微信\\"-api\\"化-实现原理（下）","date":"2024-03-24T11:47:50.000Z","category":["Android组件化"],"tag":["archive"],"description":"####导航 第3章 组件声明式编程 仿微信\\".api\\"化(上) 第3章 仿微信\\".api\\"化 实现原理（下） #####1、思考路径 将原本下沉到base模块的通用性不高的代码，被重新申领到各个业务模块，运行时动态放入到base模块，在项目不断扩大时，避免了base在后期开发时急速膨胀，约束好代码边界 反复参考微信Android模块化架构重构实践思想...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%BB%84%E4%BB%B6%E5%8C%96/%E7%AC%AC3%E7%AB%A0-%E4%BB%BF%E5%BE%AE%E4%BF%A1_-api_%E5%8C%96-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%EF%BC%88%E4%B8%8B%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"第3章-仿微信\\"-api\\"化-实现原理（下）"}],["meta",{"property":"og:description","content":"####导航 第3章 组件声明式编程 仿微信\\".api\\"化(上) 第3章 仿微信\\".api\\"化 实现原理（下） #####1、思考路径 将原本下沉到base模块的通用性不高的代码，被重新申领到各个业务模块，运行时动态放入到base模块，在项目不断扩大时，避免了base在后期开发时急速膨胀，约束好代码边界 反复参考微信Android模块化架构重构实践思想..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第3章-仿微信\\\\\\"-api\\\\\\"化-实现原理（下）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"fe/android/Android组件化/第3章-仿微信\\"-api\\"化-实现原理（下）.md","localizedDate":"2024年3月24日","excerpt":"<p>####导航\\n<a href=\\"https://www.jianshu.com/p/20108abc1dd6\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">第3章 组件声明式编程 仿微信\\".api\\"化(上)</a>\\n<a href=\\"https://www.jianshu.com/p/b5b8afd008b3\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">第3章 仿微信\\".api\\"化 实现原理（下）</a></p>\\n<p>#####1、思考路径\\n将原本下沉到base模块的通用性不高的代码，被重新申领到各个业务模块，运行时动态放入到base模块，在项目不断扩大时，避免了base在后期开发时急速膨胀，约束好代码边界</p>","autoDesc":true}');export{j as comp,f as data};
