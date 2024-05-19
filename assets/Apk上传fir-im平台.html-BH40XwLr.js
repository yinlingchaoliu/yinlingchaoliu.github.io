import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as t}from"./app-B6plLX71.js";const o={},a=t(`<p>#####亲测可用 脚本如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash
#author chentong 20190312

##json解析函数
function jsonParse() { # $1 $2  json lable

     JSON_CONTENT=$1
     KEY=&#39;&quot;&#39;$2&#39;&quot;:&#39;

     echo \${JSON_CONTENT} | awk -F  \${KEY}  &#39;{print $2}&#39; | awk -F &#39;&quot;&#39; &#39;{print $2}&#39;
}

##replace函数
function TrimAnd(){
    TEXT=$1
    echo \${TEXT//&#39;\\u0026&#39;/&#39;&amp;&#39;}
}

# Get API Token from http://fir.im/apps
API_TOKEN=&quot;77ec123979f83f7caef71c4ca70abeeb&quot;
fileName=\`basename ./app/build/outputs/apk/debug/*.apk\`
apkPath=&quot;./app/build/outputs/apk/debug/$fileName&quot;

# ios or android
TYPE=&quot;android&quot;
# App 的 bundleId
BUNDLE_ID=&quot;你的AppId&quot;

# Get upload_url
credential=$(curl -X &quot;POST&quot; &quot;http://api.fir.im/apps&quot; \\
-H &quot;Content-Type: application/json&quot; \\
-d &quot;{\\&quot;type\\&quot;:\\&quot;\${TYPE}\\&quot;, \\&quot;bundle_id\\&quot;:\\&quot;\${BUNDLE_ID}\\&quot;, \\&quot;api_token\\&quot;:\\&quot;\${API_TOKEN}\\&quot;}&quot; \\
2&gt;/dev/null)

SHORT_NAME=$(jsonParse &quot;\${credential}&quot; &quot;short&quot;)
fir_id=$(jsonParse &quot;\${credential}&quot; &quot;id&quot;)
binary_response=$(echo \${credential} | grep -o &quot;binary[^}]*&quot;)
KEY=$(jsonParse &quot;\${binary_response}&quot; &quot;key&quot;)
TOKEN=$(jsonParse &quot;\${binary_response}&quot; &quot;token&quot;)
UPLOAD_URL=$(jsonParse &quot;\${binary_response}&quot; &quot;upload_url&quot;)

# Upload package
echo &#39;Uploading...&#39;
echo &#39;✈ -------------------------------------------- ✈&#39;
response=$(curl -F &quot;key=\${KEY}&quot; \\
-F &quot;token=\${TOKEN}&quot; \\
-F &quot;file=@\${apkPath}&quot; \\
-F &quot;x:build=1&quot; \\
\${UPLOAD_URL}
)

release_id=$(jsonParse &quot;\${response}&quot; &quot;release_id&quot;)
download_url=$(jsonParse &quot;\${response}&quot; &quot;download_url&quot;)

echo APP  名字:      你的APP
echo APP  包名:       &quot;\${BUNDLE_ID}&quot;
echo APP  类型:       &quot;\${TYPE}&quot;
echo 应用 ID:         &quot;\${fir_id}&quot;
echo 上传apk路径:      &quot;\${apkPath}&quot;
echo 通用二维码地址:    https://fir.im/&quot;\${SHORT_NAME}&quot;
echo APP二维码地址:    https://fir.im/&quot;\${SHORT_NAME}&quot;?release_id=&quot;\${release_id}&quot;
echo 下载地址如下:
echo $(TrimAnd &quot;\${download_url}&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function s(r,l){return n(),i("div",null,d)}const p=e(o,[["render",s],["__file","Apk上传fir-im平台.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Apk%E4%B8%8A%E4%BC%A0fir-im%E5%B9%B3%E5%8F%B0.html","title":"Apk上传fir-im平台","lang":"zh-CN","frontmatter":{"title":"Apk上传fir-im平台","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"#####亲测可用 脚本如下","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Apk%E4%B8%8A%E4%BC%A0fir-im%E5%B9%B3%E5%8F%B0.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Apk上传fir-im平台"}],["meta",{"property":"og:description","content":"#####亲测可用 脚本如下"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apk上传fir-im平台\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":236},"filePathRelative":"fe/android/Android相关/Apk上传fir-im平台.md","localizedDate":"2024年3月24日","excerpt":"<p>#####亲测可用\\n脚本如下</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#!/bin/bash\\n#author chentong 20190312\\n\\n##json解析函数\\nfunction jsonParse() { # $1 $2  json lable\\n\\n     JSON_CONTENT=$1\\n     KEY=\'\\"\'$2\'\\":\'\\n\\n     echo ${JSON_CONTENT} | awk -F  ${KEY}  \'{print $2}\' | awk -F \'\\"\' \'{print $2}\'\\n}\\n\\n##replace函数\\nfunction TrimAnd(){\\n    TEXT=$1\\n    echo ${TEXT//\'\\\\u0026\'/\'&amp;\'}\\n}\\n\\n# Get API Token from http://fir.im/apps\\nAPI_TOKEN=\\"77ec123979f83f7caef71c4ca70abeeb\\"\\nfileName=`basename ./app/build/outputs/apk/debug/*.apk`\\napkPath=\\"./app/build/outputs/apk/debug/$fileName\\"\\n\\n# ios or android\\nTYPE=\\"android\\"\\n# App 的 bundleId\\nBUNDLE_ID=\\"你的AppId\\"\\n\\n# Get upload_url\\ncredential=$(curl -X \\"POST\\" \\"http://api.fir.im/apps\\" \\\\\\n-H \\"Content-Type: application/json\\" \\\\\\n-d \\"{\\\\\\"type\\\\\\":\\\\\\"${TYPE}\\\\\\", \\\\\\"bundle_id\\\\\\":\\\\\\"${BUNDLE_ID}\\\\\\", \\\\\\"api_token\\\\\\":\\\\\\"${API_TOKEN}\\\\\\"}\\" \\\\\\n2&gt;/dev/null)\\n\\nSHORT_NAME=$(jsonParse \\"${credential}\\" \\"short\\")\\nfir_id=$(jsonParse \\"${credential}\\" \\"id\\")\\nbinary_response=$(echo ${credential} | grep -o \\"binary[^}]*\\")\\nKEY=$(jsonParse \\"${binary_response}\\" \\"key\\")\\nTOKEN=$(jsonParse \\"${binary_response}\\" \\"token\\")\\nUPLOAD_URL=$(jsonParse \\"${binary_response}\\" \\"upload_url\\")\\n\\n# Upload package\\necho \'Uploading...\'\\necho \'✈ -------------------------------------------- ✈\'\\nresponse=$(curl -F \\"key=${KEY}\\" \\\\\\n-F \\"token=${TOKEN}\\" \\\\\\n-F \\"file=@${apkPath}\\" \\\\\\n-F \\"x:build=1\\" \\\\\\n${UPLOAD_URL}\\n)\\n\\nrelease_id=$(jsonParse \\"${response}\\" \\"release_id\\")\\ndownload_url=$(jsonParse \\"${response}\\" \\"download_url\\")\\n\\necho APP  名字:      你的APP\\necho APP  包名:       \\"${BUNDLE_ID}\\"\\necho APP  类型:       \\"${TYPE}\\"\\necho 应用 ID:         \\"${fir_id}\\"\\necho 上传apk路径:      \\"${apkPath}\\"\\necho 通用二维码地址:    https://fir.im/\\"${SHORT_NAME}\\"\\necho APP二维码地址:    https://fir.im/\\"${SHORT_NAME}\\"?release_id=\\"${release_id}\\"\\necho 下载地址如下:\\necho $(TrimAnd \\"${download_url}\\")\\n</code></pre></div>","autoDesc":true}');export{p as comp,m as data};
