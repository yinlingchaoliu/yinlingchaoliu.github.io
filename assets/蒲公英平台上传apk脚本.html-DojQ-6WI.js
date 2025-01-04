import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as t}from"./app-CtvCwAmI.js";const o={},a=t(`<p>经典上传蒲公英平台脚本</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/usr/bin/env bash
##author chentong
##date 2019/2/12

##json解析函数
function jsonParse() { # $1 $2  json lable

     JSON_CONTENT=$1
     KEY=&#39;&quot;&#39;$2&#39;&quot;:&#39;

     echo \${JSON_CONTENT} | awk -F  \${KEY}  &#39;{print $2}&#39; | awk -F &#39;&quot;&#39; &#39;{print $2}&#39;
}

##删除斜杠&#39;\\&#39;
function trimSlash() {
    TEXT=$1
    echo \${TEXT//&#39;\\&#39;/&#39;&#39;}
}

##解析返回报文
function showApkInfo() {
    CONTENT=$1
    echo &quot;App的名称:&quot;    $(jsonParse &quot;\${CONTENT}&quot; &quot;appName&quot;)
    echo &quot;AppId   :&quot;    $(jsonParse &quot;\${CONTENT}&quot; &quot;appIdentifier&quot;)
    echo &quot;App版本名:&quot;    $(jsonParse &quot;\${CONTENT}&quot; &quot;appVersion&quot;)
    echo &quot;App版本号:&quot;    $(jsonParse &quot;\${CONTENT}&quot; &quot;appVersionNo&quot;)
    echo &quot;AppBuild:&quot;    $(jsonParse &quot;\${CONTENT}&quot; &quot;appBuildVersion&quot;)
    echo &quot;App包体积:&quot;    $(jsonParse &quot;\${CONTENT}&quot; &quot;appFileSize&quot;)
    echo &quot;App短链接:&quot;    &quot;https://www.pgyer.com/&quot;$(jsonParse &quot;\${CONTENT}&quot; &quot;appShortcutUrl&quot;)
    echo &quot;App下载页地址:&quot; &quot;https://www.pgyer.com/&quot;$(jsonParse &quot;\${CONTENT}&quot; &quot;appKey&quot;)
    echo &quot;App二维码地址:&quot; $(trimSlash $(jsonParse &quot;\${CONTENT}&quot; &quot;appQRCodeURL&quot;))
    echo &quot;App上传时间:&quot;   $(jsonParse &quot;\${CONTENT}&quot; &quot;appCreated&quot;)
}

####上传蒲公英

API_KEY=&quot;xxx&quot;
USER_KEY=&quot;xxx&quot;

##获得apk全路径
fileName=\`basename ./app/build/outputs/apk/debug/*.apk\`
APK_PATH=&quot;./app/build/outputs/apk/debug/$fileName&quot;

##上传apk 获得返回报文

echo &#39;Uploading...&#39;
echo &#39;✈ -------------------------------------------- ✈&#39;

RESPONSE=$(curl -F &quot;file=@\${APK_PATH}&quot; \\
        -F &quot;uKey=\${USER_KEY}&quot; \\
        -F &quot;_api_key=\${API_KEY}&quot; \\
        https://qiniu-storage.pgyer.com/apiv1/app/upload)

##显示apk信息
showApkInfo &quot;\${RESPONSE}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[a];function u(d,p){return n(),i("div",null,s)}const c=e(o,[["render",u],["__file","蒲公英平台上传apk脚本.html.vue"]]),v=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0%E4%B8%8A%E4%BC%A0apk%E8%84%9A%E6%9C%AC.html","title":"蒲公英平台上传apk脚本","lang":"zh-CN","frontmatter":{"title":"蒲公英平台上传apk脚本","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"经典上传蒲公英平台脚本","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0%E4%B8%8A%E4%BC%A0apk%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"蒲公英平台上传apk脚本"}],["meta",{"property":"og:description","content":"经典上传蒲公英平台脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"蒲公英平台上传apk脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"fe/android/Android相关/蒲公英平台上传apk脚本.md","localizedDate":"2024年3月24日","excerpt":"<p>经典上传蒲公英平台脚本</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#!/usr/bin/env bash\\n##author chentong\\n##date 2019/2/12\\n\\n##json解析函数\\nfunction jsonParse() { # $1 $2  json lable\\n\\n     JSON_CONTENT=$1\\n     KEY='\\"'$2'\\":'\\n\\n     echo \${JSON_CONTENT} | awk -F  \${KEY}  '{print $2}' | awk -F '\\"' '{print $2}'\\n}\\n\\n##删除斜杠'\\\\'\\nfunction trimSlash() {\\n    TEXT=$1\\n    echo \${TEXT//'\\\\'/''}\\n}\\n\\n##解析返回报文\\nfunction showApkInfo() {\\n    CONTENT=$1\\n    echo \\"App的名称:\\"    $(jsonParse \\"\${CONTENT}\\" \\"appName\\")\\n    echo \\"AppId   :\\"    $(jsonParse \\"\${CONTENT}\\" \\"appIdentifier\\")\\n    echo \\"App版本名:\\"    $(jsonParse \\"\${CONTENT}\\" \\"appVersion\\")\\n    echo \\"App版本号:\\"    $(jsonParse \\"\${CONTENT}\\" \\"appVersionNo\\")\\n    echo \\"AppBuild:\\"    $(jsonParse \\"\${CONTENT}\\" \\"appBuildVersion\\")\\n    echo \\"App包体积:\\"    $(jsonParse \\"\${CONTENT}\\" \\"appFileSize\\")\\n    echo \\"App短链接:\\"    \\"https://www.pgyer.com/\\"$(jsonParse \\"\${CONTENT}\\" \\"appShortcutUrl\\")\\n    echo \\"App下载页地址:\\" \\"https://www.pgyer.com/\\"$(jsonParse \\"\${CONTENT}\\" \\"appKey\\")\\n    echo \\"App二维码地址:\\" $(trimSlash $(jsonParse \\"\${CONTENT}\\" \\"appQRCodeURL\\"))\\n    echo \\"App上传时间:\\"   $(jsonParse \\"\${CONTENT}\\" \\"appCreated\\")\\n}\\n\\n####上传蒲公英\\n\\nAPI_KEY=\\"xxx\\"\\nUSER_KEY=\\"xxx\\"\\n\\n##获得apk全路径\\nfileName=\`basename ./app/build/outputs/apk/debug/*.apk\`\\nAPK_PATH=\\"./app/build/outputs/apk/debug/$fileName\\"\\n\\n##上传apk 获得返回报文\\n\\necho 'Uploading...'\\necho '✈ -------------------------------------------- ✈'\\n\\nRESPONSE=$(curl -F \\"file=@\${APK_PATH}\\" \\\\\\n        -F \\"uKey=\${USER_KEY}\\" \\\\\\n        -F \\"_api_key=\${API_KEY}\\" \\\\\\n        https://qiniu-storage.pgyer.com/apiv1/app/upload)\\n\\n##显示apk信息\\nshowApkInfo \\"\${RESPONSE}\\"\\n</code></pre></div>","autoDesc":true}`);export{c as comp,v as data};
