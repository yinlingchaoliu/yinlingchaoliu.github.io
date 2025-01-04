import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,f as n}from"./app-CtvCwAmI.js";const t={},s=n(`<p>####总结</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  1、本地编译编译aar
  2、创建Maven 仓库 ,并生成可用aar 类库
  3、若远程依赖失效，引用增加{{transitive=true}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读音： transitive 英 [ˈtrænsətɪv] 传递 archives 英[&#39;ɑ:kaɪvz] 存档</p><p>####1、aar打包发布</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gradle clean build            //本地打包
gradle uploadArchives    //上传aar库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>maven-push.gradle 文件 <em><strong>生成aar包含源码、注释</strong></em></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apply plugin: &#39;maven&#39;

task androidJavadocs(type: Javadoc) {
    source = android.sourceSets.main.java.srcDirs
    classpath += project.files(android.getBootClasspath().join(File.pathSeparator))
}

task androidJavadocsJar(type: Jar, dependsOn: androidJavadocs) {
    classifier = &#39;javadoc&#39;
    from androidJavadocs.destinationDir
}

task androidSourcesJar(type: Jar) {
    classifier = &#39;sources&#39;
    from android.sourceSets.main.java.srcDirs
}

artifacts {
    //aar包增加源码
    archives androidSourcesJar
    //aar包增加注释
    archives androidJavadocsJar
}

uploadArchives {
    repositories {
        mavenDeployer {
            repository(url: &quot;http://IP_Address:PORT/nexus/content/repositories/snapshots/&quot;) {
                authentication(userName: &quot;账号&quot;, password: &quot;密码&quot;)
            }
            pom.project {
                groupId = &quot;com.android&quot; //包名
                artifactId = &quot;utils&quot;             //名称
                version = &quot;0.0.1-SNAPSHOT&quot;  //版本

                licenses {
                    license {
                        name &#39;The Apache Software License, Version 2.0&#39;
                        url &#39;http://www.apache.org/licenses/LICENSE-2.0.txt&#39;
                    }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>本地仓库
url: &quot;file://localhost/&quot; + System.getenv(&quot;ANDROID_HOME&quot;)
                    + &quot;/extras/android/m2repository/&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####2、aar引用</p><p>问题：解决远程依赖传递失效问题</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>增加{transitive=true}  //可选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、本地引用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>api(name: &#39;aarlibrary&#39;, ext: &#39;aar&#39;){transitive=true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、远程依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>allprojects {
    repositories {
        maven { url &#39;http://IP:PORT/nexus/content/repositories/snapshots&#39; }
        //支持arr包
        flatDir {
            dirs &#39;libs&#39;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>compile(&#39;com.android:util:0.0.1&#39;){transitive=true} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),r=[s];function d(l,v){return a(),i("div",null,r)}const u=e(t,[["render",d],["__file","解决aar包发布到maven问题.html.vue"]]),m=JSON.parse(`{"path":"/fe/tools/git%E7%9B%B8%E5%85%B3/%E8%A7%A3%E5%86%B3aar%E5%8C%85%E5%8F%91%E5%B8%83%E5%88%B0maven%E9%97%AE%E9%A2%98.html","title":"解决aar包发布到maven问题","lang":"zh-CN","frontmatter":{"title":"解决aar包发布到maven问题","date":"2024-03-24T11:47:50.000Z","category":["git相关"],"tag":["archive"],"description":"####总结 读音： transitive 英 [ˈtrænsətɪv] 传递 archives 英['ɑ:kaɪvz] 存档 ####1、aar打包发布 maven-push.gradle 文件 生成aar包含源码、注释 ####2、aar引用 问题：解决远程依赖传递失效问题 1、本地引用 2、远程依赖","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/tools/git%E7%9B%B8%E5%85%B3/%E8%A7%A3%E5%86%B3aar%E5%8C%85%E5%8F%91%E5%B8%83%E5%88%B0maven%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"解决aar包发布到maven问题"}],["meta",{"property":"og:description","content":"####总结 读音： transitive 英 [ˈtrænsətɪv] 传递 archives 英['ɑ:kaɪvz] 存档 ####1、aar打包发布 maven-push.gradle 文件 生成aar包含源码、注释 ####2、aar引用 问题：解决远程依赖传递失效问题 1、本地引用 2、远程依赖"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解决aar包发布到maven问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":278},"filePathRelative":"fe/tools/git相关/解决aar包发布到maven问题.md","localizedDate":"2024年3月24日","excerpt":"<p>####总结</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>  1、本地编译编译aar\\n  2、创建Maven 仓库 ,并生成可用aar 类库\\n  3、若远程依赖失效，引用增加{{transitive=true}}\\n</code></pre></div><p>读音：\\ntransitive 英 [ˈtrænsətɪv]  传递\\narchives   英['ɑ:kaɪvz]  存档</p>\\n<p>####1、aar打包发布</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>gradle clean build            //本地打包\\ngradle uploadArchives    //上传aar库\\n</code></pre></div>","autoDesc":true}`);export{u as comp,m as data};
