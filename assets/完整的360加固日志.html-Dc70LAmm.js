import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as s}from"./app-CtvCwAmI.js";const a={},d=s(`<p>脚本的核心就是一句话，用gradle脚本方式写的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt;java\bin\\java -jar jiagu.jar -jiagu &lt;inputAPKpath&gt; &lt;outputpath&gt; -autosign - automulpkg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>先单独执行这句话，找打印日志的<code>执行命令行</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>执行命令行:java -jar jiagu.jar -jiagu /Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/build/outputs/apk/debug/app-debug.apk /Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/360jiagu -autosign -automulpkg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意点： 1、360加固登录账号密码要设置上，勾选自动登录 2、签名要在加固宝中配置好 3、加固时间长，需要联网，加固过程中需要1~2分钟等待</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>:app:packageDebug
:app:packageDebug spend 2540ms
:app:assembleDebug
:app:assembleDebug spend 0ms
:app:jiaguDebug
360加固--------begin---------
appFilePath=/Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/build/outputs/apk/debug/app-debug.apk
jiaguPath=/Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/360jiagu

执行命令行:java -jar jiagu.jar -jiagu /Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/build/outputs/apk/debug/app-debug.apk /Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/360jiagu -autosign -automulpkg
jiagu.dir=/Users/chentong/Android/360jiagubao_mac/jiagu

################################################
#                                              #
#        ## #   #    ## ### ### ##  ###        #
#       # # #   #   # #  #  # # # #  #         #
#       ### #   #   ###  #  # # ##   #         #
#       # # ### ### # #  #  ### # # ###        #
#                                              #
# Obfuscation by Allatori Obfuscator v5.6 DEMO #
#                                              #
#           http://www.allatori.com            #
#                                              #
################################################

/Users/chentong/Android/360jiagubao_mac/jiagu
cache cookie invalid
login success
warning:没有配置多渠道信息，无法自动多渠道打包
begin jiagu task
prepare to upload
上传进度0%
上传进度2%
上传进度4%
上传进度6%
上传进度8%
上传进度10%
上传进度10%
上传进度12%
上传进度14%
上传进度16%
上传进度18%
上传进度20%
上传进度22%
上传进度24%
上传进度26%
上传进度28%
上传进度30%
上传进度32%
上传进度34%
上传进度36%
上传进度38%
上传进度40%
上传进度42%
上传进度44%
上传进度46%
上传进度48%
上传进度50%
上传进度50%
上传进度52%
上传进度54%
上传进度56%
上传进度58%
上传进度60%
上传进度62%
上传进度64%
上传进度66%
上传进度68%
上传进度70%
上传进度72%
上传进度74%
上传进度76%
上传进度78%
上传进度80%
上传进度82%
上传进度84%
上传进度86%
上传进度88%
上传进度90%
上传进度92%
上传进度94%
上传进度96%
上传进度98%
上传进度100%
上传进度100%
上传成功
基础加固服务：DEX文件加密，防二次打包，APK大小优化，防DEX内存截取，盗版监测，DEX VMP保护
已选增强服务：  崩溃日志  X86架构  加固数据分析
加固中...
加固中...
加固中...
加固中...
加固中...
加固中...
加固中...
加固中...
部分加固服务不支持，已自动弃选： 消息推送
加固完成加固成功
下载开始
下载进度0%
下载进度11%
下载进度23%
下载进度32%
下载进度50%
下载进度63%
下载进度75%
下载进度82%
下载进度100%
下载成功
71FFCA54AE501119350017EF83DE8A60
开始签名
开始签名使用V2签名
delete v2 temp file
签名完成(1/1)
任务完成_已签名

0
360加固--------end---------
:app:jiaguDebug spend 70905ms

BUILD SUCCESSFUL in 3m 28s
76 actionable tasks: 12 executed, 64 up-to-date
Tasks spend time &gt; 50ms:
      01:10.90   :app:jiaguDebug
      00:40.01   :app:preDebugBuild
      00:22.20   :app:transformClassesAndResourcesWithProguardForDebug
      00:13.29   :app:transformClassesWithDexBuilderForDebug
      00:07.30   :app:javaPreCompileDebug
      00:06.31   :app:transformClassesWithDesugarForDebug
      00:03.14   :app:transformClassesWithMultidexlistForDebug
      00:02.71   :app:transformDexArchiveWithDexMergerForDebug
      00:02.54   :app:packageDebug
      00:01.67   :app:transformClassesWithStackFramesFixerForDebug
      00:01.58   :app:transformResourcesWithMergeJavaResForDebug
      00:01.49   :app:transformClassesWithAjxForDebug
      00:01.08   :app:transformNativeLibsWithMergeJniLibsForDebug
      00:00.24   :app:mergeDebugResources
      00:00.20   :app:compileDebugJavaWithJavac
      00:00.19   :idcardlibrary:javaPreCompileDebug
      00:00.07   :app:processDebugResources
      00:00.05   :idcardlibrary:generateDebugRFile
09:53:29: Task execution finished &#39;jiaguDebug&#39;.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[d];function r(v,u){return e(),n("div",null,l)}const m=i(a,[["render",r],["__file","完整的360加固日志.html.vue"]]),b=JSON.parse('{"path":"/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/%E5%AE%8C%E6%95%B4%E7%9A%84360%E5%8A%A0%E5%9B%BA%E6%97%A5%E5%BF%97.html","title":"完整的360加固日志","lang":"zh-CN","frontmatter":{"title":"完整的360加固日志","date":"2024-03-24T11:47:50.000Z","category":["日常问题锦集"],"tag":["archive"],"description":"脚本的核心就是一句话，用gradle脚本方式写的 先单独执行这句话，找打印日志的执行命令行 注意点： 1、360加固登录账号密码要设置上，勾选自动登录 2、签名要在加固宝中配置好 3、加固时间长，需要联网，加固过程中需要1~2分钟等待","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/archives/%E6%97%A5%E5%B8%B8%E9%97%AE%E9%A2%98%E9%94%A6%E9%9B%86/%E5%AE%8C%E6%95%B4%E7%9A%84360%E5%8A%A0%E5%9B%BA%E6%97%A5%E5%BF%97.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"完整的360加固日志"}],["meta",{"property":"og:description","content":"脚本的核心就是一句话，用gradle脚本方式写的 先单独执行这句话，找打印日志的执行命令行 注意点： 1、360加固登录账号密码要设置上，勾选自动登录 2、签名要在加固宝中配置好 3、加固时间长，需要联网，加固过程中需要1~2分钟等待"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T12:51:21.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-24T12:51:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"完整的360加固日志\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-24T12:51:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711284681000,"updatedTime":1711284681000,"contributors":[{"name":"陈桐","email":"tong.chen","commits":1}]},"readingTime":{"minutes":2.66,"words":799},"filePathRelative":"archives/日常问题锦集/完整的360加固日志.md","localizedDate":"2024年3月24日","excerpt":"<p>脚本的核心就是一句话，用gradle脚本方式写的</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>&gt;java\\bin\\\\java -jar jiagu.jar -jiagu &lt;inputAPKpath&gt; &lt;outputpath&gt; -autosign - automulpkg\\n</code></pre></div><p>先单独执行这句话，找打印日志的<code>执行命令行</code></p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>执行命令行:java -jar jiagu.jar -jiagu /Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/build/outputs/apk/debug/app-debug.apk /Users/chentong/Android/hexin/Android/XiaoFeiFenQi/app/360jiagu -autosign -automulpkg\\n</code></pre></div>","autoDesc":true}');export{m as comp,b as data};
