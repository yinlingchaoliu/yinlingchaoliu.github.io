import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as d,c as e,f as i}from"./app-CtvCwAmI.js";const n={},r=i(`<p>####1、目的 建立UI和开发人员规范认知的一致性，便于高效团队合作 ####2、ios规范 ######2.1 UI交付给开发者资料 2x切图（以640为宽度尺寸为基准切图）<strong>640*960</strong> 3x切图（以1280为宽度尺寸为基准切图）<strong>1280*1920</strong><code>若提供一张切图，ios必须是2x</code></p><p>######2.2 ios logo系统标准要求（尺寸规定严格）且提供对应1x 2x 3x</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>20*20 通知logo
29*29 设置
40*40 搜索icon
60*60 app icon
1024*1024 app store

76*76 ipad
83.5*83.5 ipad pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>######2.3 闪屏业界标准</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>640x960  iPhone 4S
640x1136  iPhone 5S
750x1334   iPhone 8
1242x2208  iPhone 8 Plus
1125x2436  iPhoneX
828 x 1792 iPhone XR
1242 x 2688 iPhone XS Max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####3、android规范</p><p>######3.1 UI交付给开发者资料</p><table><thead><tr><th>图片类型</th><th>屏幕</th></tr></thead><tbody><tr><td>mdpi</td><td>320*480</td></tr><tr><td>hdpi</td><td>480*800</td></tr><tr><td>xhdpi</td><td>720*1280</td></tr><tr><td>xxhdpi</td><td>1080*1920</td></tr><tr><td>xxxhdpi</td><td>2160*3840</td></tr></tbody></table><p>######3.2 app logo 系统标准要求（尺寸规定严格）</p><table><thead><tr><th>DEBSITY</th><th>SIZE</th><th>RATIO</th><th>SCREEN</th><th>MARGIN</th><th>CONTENT</th><th>Padding</th></tr></thead><tbody><tr><td>XXXHDPI</td><td>192*192</td><td>4</td><td>640DPI</td><td>12-16</td><td>170*170</td><td>16</td></tr><tr><td>XXHDPI</td><td>144*144</td><td>3</td><td>480DPI</td><td>8-12</td><td>128*128</td><td>8</td></tr><tr><td>XHDPI</td><td>96*96</td><td>2</td><td>320DPI</td><td>6-8</td><td>88*88</td><td>4</td></tr><tr><td>HDPI</td><td>72*72</td><td>1.5</td><td>240DPI</td><td>4-6</td><td>68*68</td><td>2</td></tr><tr><td>MDPI</td><td>48*48</td><td>1</td><td>160DPI</td><td>3-4</td><td>46*46</td><td>1</td></tr><tr><td>N/A</td><td>512*512</td><td>Google play</td><td>NA</td><td>NA</td><td>As Required</td><td></td></tr></tbody></table><p>安卓建议： <code>提供MDPI~XXXHDPI, 图标有正常和圆角两种</code> 若圆角为android切，须UI产品确认最终样式</p><p>######3.3 应用市场提交logo 应用市场logo</p><table><thead><tr><th>应用市场</th><th>图片尺寸</th><th>体积</th><th>格式</th><th>特别建议</th></tr></thead><tbody><tr><td>应用宝</td><td>16*16</td><td>20k以内</td><td>png</td><td></td></tr><tr><td>应用宝</td><td>512*512</td><td>200K以内</td><td>png</td><td>直角图标</td></tr><tr><td>华为</td><td>216*216</td><td></td><td>Png</td><td>正方形图片 圆角32px</td></tr><tr><td>VIVO</td><td>512*512</td><td>小于50K</td><td>png</td><td>正方形图片，直角图标</td></tr><tr><td>阿里分发平台</td><td>512*512</td><td></td><td>Png</td><td>背景透明带圆角</td></tr><tr><td>小米</td><td>216*216</td><td></td><td>png</td><td>正方形图片</td></tr><tr><td>######3.4 应用市场提交截图</td><td></td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>市场</th><th>截图要求</th><th>特殊要求</th></tr></thead><tbody><tr><td>应用宝</td><td>480*800 4张 1M PNG</td><td></td></tr><tr><td>阿里分发平台</td><td>480*800 4张 1M PNG</td><td>不可上传ios截图</td></tr><tr><td>百度</td><td>480*800 4张 1M PNG</td><td>通知栏不含有与app自身无关的应用图标</td></tr><tr><td>华为</td><td>450*800 4张 1M PNG</td><td></td></tr><tr><td>小米</td><td>720*1280 4张 1M PNG</td><td>若截图含有手机外观，必须使用小米手机外观素材</td></tr><tr><td>OPPO</td><td>1080*1920 4张 1M PNG</td><td>去除顶部通知栏，不得使用其他品牌手机作为边框或宣传图</td></tr><tr><td>VIVO</td><td>480*800 4张 1M PNG</td><td></td></tr><tr><td>######3.5 应用截图要求</td><td></td><td></td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>体积 小于1M 4 张 png
尺寸
480*800
450*800
720*1280
1080*1920 
特别要求：
1、无ios截图
2、无通知栏
3、无手机外观
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>######3.6 闪屏页图片要求 app冷启动</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>一整张图片 1080*1920 jpg 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),a=[r];function o(s,l){return d(),e("div",null,a)}const h=t(n,[["render",o],["__file","移动端UI开发规范.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/%E7%A7%BB%E5%8A%A8%E7%AB%AFUI%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.html","title":"移动端UI开发规范","lang":"zh-CN","frontmatter":{"title":"移动端UI开发规范","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"####1、目的 建立UI和开发人员规范认知的一致性，便于高效团队合作 ####2、ios规范 ######2.1 UI交付给开发者资料 2x切图（以640为宽度尺寸为基准切图）640*960 3x切图（以1280为宽度尺寸为基准切图）1280*1920 若提供一张切图，ios必须是2x ######2.2 ios logo系统标准要求（尺寸规定严格）...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/%E7%A7%BB%E5%8A%A8%E7%AB%AFUI%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"移动端UI开发规范"}],["meta",{"property":"og:description","content":"####1、目的 建立UI和开发人员规范认知的一致性，便于高效团队合作 ####2、ios规范 ######2.1 UI交付给开发者资料 2x切图（以640为宽度尺寸为基准切图）640*960 3x切图（以1280为宽度尺寸为基准切图）1280*1920 若提供一张切图，ios必须是2x ######2.2 ios logo系统标准要求（尺寸规定严格）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"移动端UI开发规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"fe/android/Android相关/移动端UI开发规范.md","localizedDate":"2024年3月24日","excerpt":"<p>####1、目的\\n建立UI和开发人员规范认知的一致性，便于高效团队合作\\n####2、ios规范\\n######2.1 UI交付给开发者资料\\n2x切图（以640为宽度尺寸为基准切图）<strong>640*960</strong>\\n3x切图（以1280为宽度尺寸为基准切图）<strong>1280*1920</strong>\\n<code>若提供一张切图，ios必须是2x</code></p>\\n<p>######2.2 ios logo系统标准要求（尺寸规定严格）且提供对应1x 2x 3x</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>20*20 通知logo\\n29*29 设置\\n40*40 搜索icon\\n60*60 app icon\\n1024*1024 app store\\n\\n76*76 ipad\\n83.5*83.5 ipad pro\\n</code></pre></div>","autoDesc":true}');export{h as comp,m as data};
