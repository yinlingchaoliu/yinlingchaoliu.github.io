import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,f as n}from"./app-CtvCwAmI.js";const a={},d=n(`<p>报错</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>objc[56644]: Class JavaLaunchHelper is implemented in both /Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/bin/java (0x10d52e4c0) 
and /Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/libinstrument.dylib (0x10d5b24e0). 
One of the two will be used. Which one is undefined.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、配置环境变量</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_151.jdk/Contents/Home
CLASSPAHT=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
PATH=$JAVA_HOME/bin:$PATH:
export JAVA_HOME
export CLASSPATH
export PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>plan A 配置Intellij Idea 1.打开idea.properties文件 help-&gt;edit custom properties 添加一句：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>idea.no.launcher=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、重启idea</p><p>plan B 如果修改Idea配置不生效的话</p><p>在Finder 的应用程序中找到IDEA的图标，右键，显式包内容，contents-》bin里面</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>目录
/Applications/Android Studio.app/Contents/bin/idea.properties
添加
idea.no.launcher=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启</p>`,11),l=[d];function s(o,r){return t(),i("div",null,l)}const u=e(a,[["render",s],["__file","One-of-the-two-will-be-used--Which-one-is-undefined-.html.vue"]]),h=JSON.parse('{"path":"/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/One-of-the-two-will-be-used--Which-one-is-undefined-.html","title":"One-of-the-two-will-be-used--Which-one-is-undefined-","lang":"zh-CN","frontmatter":{"title":"One-of-the-two-will-be-used--Which-one-is-undefined-","date":"2024-03-24T11:47:50.000Z","category":["日常问题锦集"],"tag":["archive"],"description":"报错 1、配置环境变量 plan A 配置Intellij Idea 1.打开idea.properties文件 help->edit custom properties 添加一句： 2、重启idea plan B 如果修改Idea配置不生效的话 在Finder 的应用程序中找到IDEA的图标，右键，显式包内容，contents-》bin里面 重启","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/One-of-the-two-will-be-used--Which-one-is-undefined-.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"One-of-the-two-will-be-used--Which-one-is-undefined-"}],["meta",{"property":"og:description","content":"报错 1、配置环境变量 plan A 配置Intellij Idea 1.打开idea.properties文件 help->edit custom properties 添加一句： 2、重启idea plan B 如果修改Idea配置不生效的话 在Finder 的应用程序中找到IDEA的图标，右键，显式包内容，contents-》bin里面 重启"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T12:51:21.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-24T12:51:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"One-of-the-two-will-be-used--Which-one-is-undefined-\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-24T12:51:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711284681000,"updatedTime":1711284681000,"contributors":[{"name":"陈桐","email":"tong.chen","commits":1}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"archives/日常问题锦集/One-of-the-two-will-be-used--Which-one-is-undefined-.md","localizedDate":"2024年3月24日","excerpt":"<p>报错</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>objc[56644]: Class JavaLaunchHelper is implemented in both /Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/bin/java (0x10d52e4c0) \\nand /Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/libinstrument.dylib (0x10d5b24e0). \\nOne of the two will be used. Which one is undefined.\\n</code></pre></div>","autoDesc":true}');export{u as comp,h as data};