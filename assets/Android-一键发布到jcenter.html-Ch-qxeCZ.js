import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,f as n}from"./app-CtvCwAmI.js";const l={},a=n(`<p>######前言 本打算用groovy脚本写一个插件来实现， groovy 引用classpath 其他插件时临时遇到瓶颈 先按照网络上流行方法解决</p><p>#####1、使用方式</p><ul><li><p>1、下载脚本，并放在根目录 https://raw.githubusercontent.com/yinlingchaoliu/android-library-publish-to-jcenter/master/upload.gradle</p></li><li><p>2、在gradle.properties 引入公共配置</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>####github地址
siteUrl=https://github.com/yinlingchaoliu/robolectric-plugin
gitUrl=https://github.com/yinlingchaoliu/robolectric-plugin.git

//开发者信息
developerId=yinlingchaoliu
developerName=tong.chen
developerEmail=704514698@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、在需要打aar库下引入特定配置</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ext {
    publishedGroupId=&#39;com.chaoliu.abcdef&#39;
    artifact = &#39;plugin&#39;
    publishedVersion = &quot;0.2.2&quot;
    libraryDescription = &#39;A Robolectric Plugin for android unit&#39;
} 

//引入 需要打aar的module下build.gradle
apply from &#39;../upload.gradle&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根目录下 build.gradle</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>buildscript {

    repositories {
        google()
        jcenter()
    }
    dependencies {
        // 增加classpath
        classpath &#39;com.jfrog.bintray.gradle:gradle-bintray-plugin:1.2&#39;
        classpath &#39;com.github.dcendents:android-maven-gradle-plugin:1.5&#39;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在local.properties 设置对应的参数即可</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>bintray.user=xxx
bintray.apikey=xxx
bintray.gpg.password=xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、upload.gradle经过优化的，将公共的抽取出来。 不会导致每个脚本写的很乱。</p><p>2、建议artifact和moudle名字是一样的，减少很多不必要的麻烦和配置</p><p>3、上传代码需要vpn支持 执行命令 gradle :module:install gradle :module:bintray</p><p>#####源代码地址 https://github.com/yinlingchaoliu/android-library-publish-to-jcenter</p><p>参考 https://github.com/panpf/android-library-publish-to-jcenter</p><p>注册bintray https://blog.csdn.net/wzgiceman/article/details/53707042</p><p>脚本问题修复 参考 https://www.cnblogs.com/dream-sky/p/5640533.html</p>`,17),r=[a];function d(o,s){return i(),t("div",null,r)}const u=e(l,[["render",d],["__file","Android-一键发布到jcenter.html.vue"]]),m=JSON.parse('{"path":"/fe/tools/git%E7%9B%B8%E5%85%B3/Android-%E4%B8%80%E9%94%AE%E5%8F%91%E5%B8%83%E5%88%B0jcenter.html","title":"Android-一键发布到jcenter","lang":"zh-CN","frontmatter":{"title":"Android-一键发布到jcenter","date":"2024-03-24T11:47:50.000Z","category":["git相关"],"tag":["archive"],"description":"######前言 本打算用groovy脚本写一个插件来实现， groovy 引用classpath 其他插件时临时遇到瓶颈 先按照网络上流行方法解决 #####1、使用方式 1、下载脚本，并放在根目录 https://raw.githubusercontent.com/yinlingchaoliu/android-library-publish-to-...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/tools/git%E7%9B%B8%E5%85%B3/Android-%E4%B8%80%E9%94%AE%E5%8F%91%E5%B8%83%E5%88%B0jcenter.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android-一键发布到jcenter"}],["meta",{"property":"og:description","content":"######前言 本打算用groovy脚本写一个插件来实现， groovy 引用classpath 其他插件时临时遇到瓶颈 先按照网络上流行方法解决 #####1、使用方式 1、下载脚本，并放在根目录 https://raw.githubusercontent.com/yinlingchaoliu/android-library-publish-to-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android-一键发布到jcenter\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":312},"filePathRelative":"fe/tools/git相关/Android-一键发布到jcenter.md","localizedDate":"2024年3月24日","excerpt":"<p>######前言\\n本打算用groovy脚本写一个插件来实现，\\ngroovy 引用classpath 其他插件时临时遇到瓶颈\\n先按照网络上流行方法解决</p>\\n<p>#####1、使用方式</p>\\n<ul>\\n<li>\\n<p>1、下载脚本，并放在根目录\\nhttps://raw.githubusercontent.com/yinlingchaoliu/android-library-publish-to-jcenter/master/upload.gradle</p>\\n</li>\\n<li>\\n<p>2、在gradle.properties 引入公共配置</p>\\n</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>####github地址\\nsiteUrl=https://github.com/yinlingchaoliu/robolectric-plugin\\ngitUrl=https://github.com/yinlingchaoliu/robolectric-plugin.git\\n\\n//开发者信息\\ndeveloperId=yinlingchaoliu\\ndeveloperName=tong.chen\\ndeveloperEmail=704514698@qq.com\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
