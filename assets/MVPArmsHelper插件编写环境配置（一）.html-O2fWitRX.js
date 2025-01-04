import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as s,a as e,b as i,d as n,f as d}from"./app-CtvCwAmI.js";const o={},m={href:"https://www.jianshu.com/p/13006b034211",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.jianshu.com/p/35d40e172a63",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/cd0bd74f800b",target:"_blank",rel:"noopener noreferrer"},u=d(`<p>#####一、环境配置 1、IntelliJ IDE开发 https://www.jetbrains.com/idea/download/ 建议下载 Community 免费版 2、groovy下载 https://groovy.apache.org/download.html 配置 .bash_profile文件添加</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export PATH=$PATH:/Users/chentong/Android/groovy-2.5.6/bin
$ source .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新建插件项目 选择IntelliJ Platform Plugin<img src="https://upload-images.jianshu.io/upload_images/5526061-d025d879a494a9d5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>配置jdk<img src="https://upload-images.jianshu.io/upload_images/5526061-76433321391c3c7c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>运行项目报错 One of the two will be used. Which one is undefined. 解决方案：https://www.jianshu.com/p/26cefcc04fec</p><p>#####二、目录结构 <img src="https://upload-images.jianshu.io/upload_images/5526061-d7f75f6b81d8df66.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><ul><li>.idea: idea的一些配置信息。</li><li>out: 编译生成文件，</li><li>resources/META-INF/plugin.xml: 插件的一些描述信息</li><li>src: 这里就是我们要写代码的地方啦。</li><li>.iml: 项目的一些自动配置信息</li></ul><p>####配置插件信息</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;idea-plugin&gt;
  &lt;id&gt;com.network.helper.mvparmshelper&lt;/id&gt;
  &lt;name&gt;ArmMVPHelper&lt;/name&gt;
  &lt;version&gt;1.0&lt;/version&gt;
  &lt;vendor email=&quot;704514698@qq.com&quot; url=&quot;https://www.jianshu.com/u/bdcce32c05dd&quot;&gt;陈桐&lt;/vendor&gt;

  &lt;description&gt;ArmMVP框架 网络代码自动生成工具&lt;/description&gt;

  &lt;change-notes&gt;第一版&lt;/change-notes&gt;

  &lt;!-- please see http://www.jetbrains.org/intellij/sdk/docs/basics/getting_started/build_number_ranges.html for description --&gt;
  &lt;idea-version since-build=&quot;173.0&quot;/&gt;

  &lt;!-- please see http://www.jetbrains.org/intellij/sdk/docs/basics/getting_started/plugin_compatibility.html
       on how to target different products --&gt;
  &lt;!-- uncomment to enable plugin in all products
  &lt;depends&gt;com.intellij.modules.lang&lt;/depends&gt;
  --&gt;

  &lt;extensions defaultExtensionNs=&quot;com.intellij&quot;&gt;
    &lt;!-- Add your extensions here --&gt;
  &lt;/extensions&gt;


  &lt;!-- 类似android manifiest --&gt;
  &lt;actions&gt;
    &lt;!-- Add your actions here --&gt;
    &lt;!--&lt;action class=&quot;com.network.helper.armmvp&quot;/&gt;--&gt;
      &lt;action id=&quot;armnetwork&quot; class=&quot;com.network.helper.NetworkHelper&quot; text=&quot;ArmMVP Network Helper&quot; description=&quot;Arm MVP 网络代码自动生成工具&quot;&gt;
          &lt;add-to-group group-id=&quot;GenerateGroup&quot; anchor=&quot;last&quot;/&gt;
      &lt;/action&gt;
  &lt;/actions&gt;

&lt;/idea-plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>id： 插件唯一的id。</li><li>name： 插件显示的名字。</li><li>version： 插件版本</li><li>vendor： 里面分别是你的邮箱，公司网站或个人网站，公司名。</li><li>description： 插件的描述。</li><li>change-notes： 更新文档。</li><li>extensions defaultExtensionNs： 默认依赖的库。</li><li>actions： 注册动作Action类。</li></ul><p>####配置Action 新建Action <img src="https://upload-images.jianshu.io/upload_images/5526061-d212fa65e344adbd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><figure><img src="https://upload-images.jianshu.io/upload_images/5526061-2fb2dae91f08a263.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class NetworkHelper extends AnAction {
    @Override
    public void actionPerformed(AnActionEvent anActionEvent) {

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供两个方法 1、获得光标下单词</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static PsiElement getPsiElement(Editor editor, PsiFile psiFile) {
        if (editor == null || psiFile == null) {
            return null;
        }
        CaretModel caret = editor.getCaretModel();
        PsiElement psiElement = psiFile.findElementAt(caret.getOffset());
        return psiElement;
    }

psiElement.getText();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、获得当前复制内容</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static String getSelectedText(Editor editor) {
        if (editor == null) {
            return null;
        }
        return editor.getSelectionModel().getSelectedText();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####github 代码 https://github.com/yinlingchaoliu/MVPArmsNetworkHelper</p>`,18);function g(v,b){const t=l("ExternalLinkIcon");return r(),s("div",null,[e("p",null,[i("####导航 "),e("a",m,[i("MVPArmsHelper 网络代码自动生成插件"),n(t)]),e("a",c,[i("MVPArmsHelper插件编写环境配置（一）"),n(t)]),e("a",p,[i("MVPArmsHelper插件编写代码编写（二）"),n(t)])]),u])}const f=a(o,[["render",g],["__file","MVPArmsHelper插件编写环境配置（一）.html.vue"]]),_=JSON.parse('{"path":"/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/MVPArmsHelper%E6%8F%92%E4%BB%B6%E7%BC%96%E5%86%99%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%EF%BC%88%E4%B8%80%EF%BC%89.html","title":"MVPArmsHelper插件编写环境配置（一）","lang":"zh-CN","frontmatter":{"title":"MVPArmsHelper插件编写环境配置（一）","date":"2024-03-24T11:47:50.000Z","category":["框架编写分析"],"tag":["archive"],"description":"####导航 MVPArmsHelper 网络代码自动生成插件 MVPArmsHelper插件编写环境配置（一） MVPArmsHelper插件编写代码编写（二） #####一、环境配置 1、IntelliJ IDE开发 https://www.jetbrains.com/idea/download/ 建议下载 Community 免费版 2、groo...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E6%A1%86%E6%9E%B6%E7%BC%96%E5%86%99/MVPArmsHelper%E6%8F%92%E4%BB%B6%E7%BC%96%E5%86%99%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%EF%BC%88%E4%B8%80%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"MVPArmsHelper插件编写环境配置（一）"}],["meta",{"property":"og:description","content":"####导航 MVPArmsHelper 网络代码自动生成插件 MVPArmsHelper插件编写环境配置（一） MVPArmsHelper插件编写代码编写（二） #####一、环境配置 1、IntelliJ IDE开发 https://www.jetbrains.com/idea/download/ 建议下载 Community 免费版 2、groo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-d025d879a494a9d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MVPArmsHelper插件编写环境配置（一）\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-d025d879a494a9d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-76433321391c3c7c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-d7f75f6b81d8df66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-d212fa65e344adbd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-2fb2dae91f08a263.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"fe/android/框架编写/MVPArmsHelper插件编写环境配置（一）.md","localizedDate":"2024年3月24日","excerpt":"<p>####导航\\n<a href=\\"https://www.jianshu.com/p/13006b034211\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MVPArmsHelper 网络代码自动生成插件</a>\\n<a href=\\"https://www.jianshu.com/p/35d40e172a63\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MVPArmsHelper插件编写环境配置（一）</a>\\n<a href=\\"https://www.jianshu.com/p/cd0bd74f800b\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MVPArmsHelper插件编写代码编写（二）</a></p>","autoDesc":true}');export{f as comp,_ as data};
