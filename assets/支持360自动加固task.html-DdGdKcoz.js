import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as a}from"./app-CtvCwAmI.js";const t={},s=a(`<p>支持360自动加固task</p><p>执行命令 <img src="https://upload-images.jianshu.io/upload_images/5526061-7eb1534d72a570dd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="执行命令 gradle jiaguDebug" loading="lazy"></p><p>引用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apply from: &quot;jiagu.gradle&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def executeCmd(cmd){
    def jiaGuPluginPath = getJiaGuProperty()
    println &quot;执行命令行:&quot; + cmd
    println &quot;jiagu.dir=&quot; + getJiaGuProperty()
    def p = cmd.execute(null, new File(jiaGuPluginPath))
    println p.text
    p.waitFor()  // 用以等待外部进程调用结束
    println p.exitValue()
}

def getJiaGuProperty(){
    File file = rootProject.file(&#39;local.properties&#39;)
    if(file.exists()){
        //加载资源
        InputStream inputStream = rootProject.file(&#39;local.properties&#39;).newDataInputStream()
        Properties properties = new Properties()
        properties.load(inputStream)

        if (properties.containsKey(&quot;jiagu.dir&quot;)){
            return properties.getProperty(&quot;jiagu.dir&quot;)
        }else {
            println &quot;请在local.properties 添加jiagu.dir 例子如下&quot;
            println &quot;jiagu.dir=/Users/chentong/Android/360jiagubao_mac/jiagu&quot;
            return &quot;&quot;
        }
    }
}

task jiaguDebug(dependsOn: &#39;assembleDebug&#39;) {
    group &quot;jiaguapk&quot;
    doLast {
        jiagu(&quot;debug&quot;)
    }
}

task jiaguRelease(dependsOn: &#39;assembleRelease&#39;) {
    group &quot;jiaguapk&quot;
    doLast {
        jiagu(&quot;release&quot;)
    }
}

def jiagu(buildType){

    println &quot;360加固--------begin---------&quot;

    //获得apk路径
    def appFilePath = getAppFilePath(buildType)

    if (!new File(appFilePath).exists()) {
        println &quot;apk not exist&quot;
        return
    }

    def cmdBase = &#39;java -jar jiagu.jar&#39;

    //获得加固宝输出路径
    def outPath = getJiaGuPath()

    File outFile = new File(outPath)
    if (!outFile.exists()){
        outFile.mkdirs()
    }

    def cmdJiaGu = cmdBase + &#39; -jiagu &#39; + appFilePath + &#39; &#39; + outPath + &#39; -autosign&#39; + &#39; -automulpkg&#39;

    executeCmd(cmdJiaGu)
    println &quot;360加固--------end---------&quot;
}

def getAppFilePath(buildType){
    // 生成的apk的路径
    def appFilePath = getRootDir().getAbsolutePath() + File.separator + &quot;app&quot; +
            File.separator + &quot;build&quot; + File.separator + &quot;outputs&quot; + File.separator + &quot;apk&quot; +File.separator + buildType + File.separator +
            &quot;app-&quot; + buildType + &quot;.apk&quot;
    println &quot;appFilePath=&quot; + appFilePath
    return appFilePath
}

def getJiaGuPath(){
    def outPath = getRootDir().getAbsolutePath() + File.separator + &quot;app&quot; + File.separator + &quot;360jiagu&quot;
    println &quot;jiaguPath=&quot; + outPath
    return outPath
}

//清理加固文件
tasks.whenTaskAdded { theTask -&gt;
    if (theTask.name == &quot;assembleRelease&quot; | theTask.name == &quot;assembleDebug&quot;) {
        theTask.dependsOn &quot;cleanJiaguDir&quot;
    }
}

task cleanJiaguDir {
    def jiaguPath = getJiaGuPath()
    new File(jiaguPath).deleteDir()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>感谢<a href="/u/2f479b1467f1">月亮的后羿</a>提出的问题 我的task命令的打印日志：可以看一下 https://www.jianshu.com/p/fb538da65d28</p><p>后续优化方向 https://www.githang.com/2019/01/23/jenkins-enhanced/</p>`,8),d=[s];function l(r,u){return i(),n("div",null,d)}const c=e(t,[["render",l],["__file","支持360自动加固task.html.vue"]]),m=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/%E6%94%AF%E6%8C%81360%E8%87%AA%E5%8A%A8%E5%8A%A0%E5%9B%BAtask.html","title":"支持360自动加固task","lang":"zh-CN","frontmatter":{"title":"支持360自动加固task","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"支持360自动加固task 执行命令 执行命令 gradle jiaguDebug 引用 配置 感谢月亮的后羿提出的问题 我的task命令的打印日志：可以看一下 https://www.jianshu.com/p/fb538da65d28 后续优化方向 https://www.githang.com/2019/01/23/jenkins-enhanced/","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/%E6%94%AF%E6%8C%81360%E8%87%AA%E5%8A%A8%E5%8A%A0%E5%9B%BAtask.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"支持360自动加固task"}],["meta",{"property":"og:description","content":"支持360自动加固task 执行命令 执行命令 gradle jiaguDebug 引用 配置 感谢月亮的后羿提出的问题 我的task命令的打印日志：可以看一下 https://www.jianshu.com/p/fb538da65d28 后续优化方向 https://www.githang.com/2019/01/23/jenkins-enhanced/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-7eb1534d72a570dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支持360自动加固task\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-7eb1534d72a570dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":344},"filePathRelative":"fe/android/框架编写/支持360自动加固task.md","localizedDate":"2024年3月24日","excerpt":"<p>支持360自动加固task</p>\\n<p>执行命令\\n<img src=\\"https://upload-images.jianshu.io/upload_images/5526061-7eb1534d72a570dd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240\\" alt=\\"执行命令 gradle jiaguDebug\\" loading=\\"lazy\\"></p>\\n<p>引用</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>apply from: \\"jiagu.gradle\\"\\n</code></pre></div>","autoDesc":true}');export{c as comp,m as data};
