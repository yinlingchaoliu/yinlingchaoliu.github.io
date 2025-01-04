import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as a}from"./app-CtvCwAmI.js";const l={},d=a(`<h4 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h4><p>SpannableStringBuilder三方库，github怎么看都不满意，用法不够简洁。 我这边用建造者方式重新写一个，来让写法简答起来。</p><h4 id="二、spanlite让你so-easy编写spanbuilder" tabindex="-1"><a class="header-anchor" href="#二、spanlite让你so-easy编写spanbuilder"><span>二、SpanLite让你so easy编写spanBuilder</span></a></h4><h5 id="_1、引用依赖" tabindex="-1"><a class="header-anchor" href="#_1、引用依赖"><span>1、引用依赖</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>allprojects {
    repositories {
        maven { url &#39;https://www.jitpack.io&#39; }
    }
}

dependencies {
    implementation &#39;com.github.yinlingchaoliu:spanLite:0.0.1&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、构造spannablestringbuilder" tabindex="-1"><a class="header-anchor" href="#_2、构造spannablestringbuilder"><span>2、构造SpannableStringBuilder</span></a></h5><p>SpanBuilder提供支持方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SpannableStringBuilder spanBuilder = SpanBuilder.Builder( &quot;spanBuilder方法&quot; ) //传入文字
                .drawTextBackgroundColor( Color.YELLOW )//设置文字背景色
                .drawTextBackgroundColor( &quot;#000000&quot; )
                .drawTextColor( Color.RED )//设置文字颜色
                .drawTextColor( &quot;#000000&quot; )
                .drawTypeFaceBold()//设置粗体
                .drawTypeFaceItalic()//设置斜体
                .drawTypeFaceNormal()//设置正常
                .drawTypeFaceBoldItalic()//设置粗体斜体
                .drawStrikethrough()//设置删除线
                .drawUnderline()//设置下划线
                .drawScaleX( 2 )//设置x倍数
                .drawBlurMaskFilter( 3, BlurMaskFilter.Blur.INNER )//设置模糊
                .drawDynamicDrawable( new DynamicDrawableSpan() {//设置图片
                    @Override
                    public Drawable getDrawable() {
                        Drawable drawable = getResources().getDrawable( R.mipmap.ic_launcher );
                        drawable.setBounds( 0, 0, 50, 50 );
                        return drawable;
                    }
                } )
                .drawSubscript()//设置下标
                .drawSuperscript()//设置上标
                .drawTextSizeAbsolute( 30 )//设置绝对字体大小
                .drawTextSizeRelative( 40 )//设置相对字体大小
                .drawImage( this, R.mipmap.ic_launcher )//设置图片
                .drawTextAppearance( this, R.style.AppTheme )//设置文字style
                .drawTypeface( &quot;serif&quot; )//设置字体
                .drawURL( &quot;tel:18601986749&quot; )//设置url
                .setOnClick( new SpanBuilder.Listerner() {//设置监听点击事件
                                 @Override //点击事件
                                 public void onClick(View widget) {
                                     Toast.makeText( MainActivity.this, &quot;kakak&quot;, Toast.LENGTH_SHORT ).show();
                                 }

                                 @Override //设置更新属性
                                 public void updateDrawState(TextPaint ds) {
                                     super.updateDrawState( ds );
                                 }
                             }
                ).build();//创建
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例demo</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SpanBuilder.Builder( &quot;你好小妹&quot; ).setOnClick( new SpanBuilder.Listerner() {
                    @Override
                    public void onClick(View widget) {
                        Toast.makeText( MainActivity.this, &quot;张三丰也会下山&quot;, Toast.LENGTH_SHORT ).show();
                    }
                } ).drawTypeFaceBold().build()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、链式拼装spanbuilder" tabindex="-1"><a class="header-anchor" href="#_3、链式拼装spanbuilder"><span>3、链式拼装SpanBuilder</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SpanLite.with( spanTextView )
.append(spanBuilder1)
.append(spanBuilder2)
.append(spanBuilder3)
.active()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、实战演示" tabindex="-1"><a class="header-anchor" href="#_4、实战演示"><span>4、实战演示</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SpanLite.with( spanTv )
                .append( SpanBuilder.Builder( &quot;你好小妹&quot; ).setOnClick( new SpanBuilder.Listerner() {
                    @Override
                    public void onClick(View widget) {
                        Toast.makeText( MainActivity.this, &quot;张三丰也会下山&quot;, Toast.LENGTH_SHORT ).show();
                    }
                } ).drawTypeFaceBold().build() )
                .append( SpanBuilder.Builder( &quot;kakakakak&quot; ).setOnClick( new SpanBuilder.Listerner() {
                    @Override
                    public void onClick(View widget) {
                        Toast.makeText( MainActivity.this, &quot;kakak&quot;, Toast.LENGTH_SHORT ).show();
                    }
                } ).drawTypeFaceItalic().build() )
                .append(SpanBuilder.Builder( &quot;《开户协议》&quot; ).setOnClick( new SpanBuilder.Listerner() {
                    @Override
                    public void onClick(View widget) {
                        Toast.makeText( MainActivity.this, &quot;协议就要花钱&quot;, Toast.LENGTH_SHORT ).show();
                    }
                } ).drawTextColor( Color.BLUE ).drawTextBackgroundColor( Color.YELLOW ).drawTypeFaceBold().drawTextSize( 60 )
                        .build()  )
                .active();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、编写框架方法" tabindex="-1"><a class="header-anchor" href="#三、编写框架方法"><span>三、编写框架方法</span></a></h4><h5 id="_1、编写思考路径" tabindex="-1"><a class="header-anchor" href="#_1、编写思考路径"><span>1、编写思考路径</span></a></h5><p>单一职责：不要将两步封装融为一步，这样耦合在一起的编写不简洁</p><h5 id="_2、收集所有相关主要的方法" tabindex="-1"><a class="header-anchor" href="#_2、收集所有相关主要的方法"><span>2、收集所有相关主要的方法</span></a></h5><ul><li><p>SpannableStringBuilder和SpannableString主要通过使用</p></li><li><p>setSpan(Object what, int start, int end, int flags) 对应的参数：</p></li><li><p>start： 指定Span的开始位置</p></li><li><p>end： 指定Span的结束位置，并不包括这个位置。</p></li><li><p>flags：取值有如下四个</p></li><li><p>Spannable. SPAN_INCLUSIVE_EXCLUSIVE：前面包括，后面不包括，即在文本前插入新的文本会应用该样式，而在文本后插入新文本不会应用该样式</p></li><li><p>Spannable. SPAN_INCLUSIVE_INCLUSIVE：前面包括，后面包括，即在文本前插入新的文本会应用该样式，而在文本后插入新文本也会应用该样式</p></li><li><p>Spannable. SPAN_EXCLUSIVE_EXCLUSIVE：前面不包括，后面不包括</p></li><li><p>Spannable. SPAN_EXCLUSIVE_INCLUSIVE：前面不包括，后面包括</p></li><li><p>what： 对应的各种Span，不同的Span对应不同的样式。已知的可用类有：</p></li><li><p>BackgroundColorSpan : 文本背景色</p></li><li><p>ForegroundColorSpan : 文本颜色</p></li><li><p>MaskFilterSpan : 修饰效果，如模糊(BlurMaskFilter)浮雕</p></li><li><p>RasterizerSpan : 光栅效果</p></li><li><p>StrikethroughSpan : 删除线</p></li><li><p>SuggestionSpan : 相当于占位符</p></li><li><p>UnderlineSpan : 下划线</p></li><li><p>AbsoluteSizeSpan : 文本字体（绝对大小）</p></li><li><p>DynamicDrawableSpan : 设置图片，基于文本基线或底部对齐。</p></li><li><p>ImageSpan : 图片</p></li><li><p>RelativeSizeSpan : 相对大小（文本字体）</p></li><li><p>ScaleXSpan : 基于x轴缩放</p></li><li><p>StyleSpan : 字体样式：粗体、斜体等</p></li><li><p>SubscriptSpan : 下标（数学公式会用到）</p></li><li><p>SuperscriptSpan : 上标（数学公式会用到）</p></li><li><p>TextAppearanceSpan : 文本外貌（包括字体、大小、样式和颜色）</p></li><li><p>TypefaceSpan : 文本字体</p></li><li><p>URLSpan : 文本超链接</p></li><li><p>ClickableSpan : 点击事件</p></li></ul><h5 id="_3、抽象出span简单-工具类" tabindex="-1"><a class="header-anchor" href="#_3、抽象出span简单-工具类"><span>3、抽象出span简单 工具类</span></a></h5><p>目的：封装就是为了简写，减少不必要重复代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * span支持工具类
 * @author chentong
 * @date:2020-1-2
 */
final class Util {
    public static void setSpan(){
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、用建造者模式对单一spanbuilder进行模型简化" tabindex="-1"><a class="header-anchor" href="#_4、用建造者模式对单一spanbuilder进行模型简化"><span>4、用建造者模式对单一spanBuilder进行模型简化</span></a></h5><p>目的：在工具类基础上简单组合方式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * span建造者模式，职责建造一个子build,便于用户清晰
 * @author chentong
 * @date:2020-1-2
 *
 */
public class SpanBuilder {
    private SpannableStringBuilder spanBuilder;
    private String content;

    private SpanBuilder() {
    }

    private SpanBuilder(String content) {
        this.content = content;
        spanBuilder = new SpannableStringBuilder( content );
    }

    public static SpanBuilder Builder(String content) {
        return new SpanBuilder( content );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、spanlite链式调用拼装" tabindex="-1"><a class="header-anchor" href="#_5、spanlite链式调用拼装"><span>5、spanLite链式调用拼装</span></a></h5><p>目的：在build基础上，整体拼装方式，为了开发者简单链式调用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 建造者模式,用于组装完整spanBuild 为textview使用
 *  @author chentong
 *  @date:2020-1-2
 */
public class SpanLite {

    private TextView spanTv;
    private SpannableStringBuilder spanBuilder;

    private SpanLite() {
    }

    private SpanLite(TextView textView) {
        this.spanTv = textView;
        spanBuilder = new SpannableStringBuilder();
    }

    //加入环境
    public static SpanLite with(TextView spanTv) {
        return new SpanLite( spanTv );
    }

    //拼接
    public SpanLite append(SpannableStringBuilder spanBuilder) {
        this.spanBuilder.append( spanBuilder );
        return this;
    }

    //设置超级span，用来特殊处理
    public SpanLite setSpan(Object what, int start, int end, int flags) {
        Util.setSpan( spanBuilder, what, start, end, flags );
        return this;
    }

    //生效
    public void active() {
        Util.setMovementMethod( spanTv );
        spanTv.setText( spanBuilder );
        Util.setHighlightColor( spanTv );
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6、github开源代码" tabindex="-1"><a class="header-anchor" href="#_6、github开源代码"><span>6、github开源代码</span></a></h5><p>https://github.com/yinlingchaoliu/spanLite</p>`,30),s=[d];function r(t,v){return i(),n("div",null,s)}const c=e(l,[["render",r],["__file","Android-SpanLite-让SpannableStringBuilder更简单-用法so-easy.html.vue"]]),o=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/Android-SpanLite-%E8%AE%A9SpannableStringBuilder%E6%9B%B4%E7%AE%80%E5%8D%95-%E7%94%A8%E6%B3%95so-easy.html","title":"Android-SpanLite-让SpannableStringBuilder更简单-用法so-easy","lang":"zh-CN","frontmatter":{"title":"Android-SpanLite-让SpannableStringBuilder更简单-用法so-easy","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"一、前言 SpannableStringBuilder三方库，github怎么看都不满意，用法不够简洁。 我这边用建造者方式重新写一个，来让写法简答起来。 二、SpanLite让你so easy编写spanBuilder 1、引用依赖 2、构造SpannableStringBuilder SpanBuilder提供支持方法 示例demo 3、链式拼装S...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/Android-SpanLite-%E8%AE%A9SpannableStringBuilder%E6%9B%B4%E7%AE%80%E5%8D%95-%E7%94%A8%E6%B3%95so-easy.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Android-SpanLite-让SpannableStringBuilder更简单-用法so-easy"}],["meta",{"property":"og:description","content":"一、前言 SpannableStringBuilder三方库，github怎么看都不满意，用法不够简洁。 我这边用建造者方式重新写一个，来让写法简答起来。 二、SpanLite让你so easy编写spanBuilder 1、引用依赖 2、构造SpannableStringBuilder SpanBuilder提供支持方法 示例demo 3、链式拼装S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android-SpanLite-让SpannableStringBuilder更简单-用法so-easy\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":3.85,"words":1154},"filePathRelative":"fe/android/Android相关/Android-SpanLite-让SpannableStringBuilder更简单-用法so-easy.md","localizedDate":"2024年3月24日","excerpt":"<h4>一、前言</h4>\\n<p>SpannableStringBuilder三方库，github怎么看都不满意，用法不够简洁。\\n我这边用建造者方式重新写一个，来让写法简答起来。</p>\\n<h4>二、SpanLite让你so easy编写spanBuilder</h4>\\n<h5>1、引用依赖</h5>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>allprojects {\\n    repositories {\\n        maven { url 'https://www.jitpack.io' }\\n    }\\n}\\n\\ndependencies {\\n    implementation 'com.github.yinlingchaoliu:spanLite:0.0.1'\\n}\\n</code></pre></div>","autoDesc":true}`);export{c as comp,o as data};
