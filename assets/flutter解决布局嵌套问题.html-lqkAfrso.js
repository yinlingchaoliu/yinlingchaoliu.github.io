import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as d}from"./app-CtvCwAmI.js";const l={},s=d(`<p>思路：flutter的布局嵌套层次太多，改成链式调用会简单一些</p><p>原来的例子</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &#39;package:flutter/material.dart&#39;;
import &#39;package:flutter_easy/common/util/common.dart&#39;;

void main() {
  runApp(
    new MaterialApp(
      title: &#39;&#39;,
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new TestPage(),
    ),
  );
}

///author:chentong
///date:4/10/19
class TestPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text(&#39;demo&#39;),
      ),
      body: new Align(
          alignment: FractionalOffset.centerRight,
          child: new Padding(
              padding: CommonUtil.padding(left: 10), child: new Text(&quot;我是测试党&quot;))),
    );
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如再加上click事件，那么简直是太TMD的了</p><p><code>设计模式中有建造者模式，可以用链式调用，解决多层嵌套问题</code></p><p>调用如下，我还特意加上click事件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WidgetDecoration(new Text(&quot;我是测试党&quot;))
          .padding(left: 10)
          .align(alignment: FractionalOffset.centerRight)
          .onTap((){
            Fluttertoast.showToast(msg: &quot;你看我还能点击呢!&quot;)
      }).build(),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>这样写法你说优秀不优秀</code> 不用担心括号一层一层的问题</p><p>完整建造者代码，已应用于项目</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &#39;package:flutter/material.dart&#39;;

///widget装饰器
///
/// author:chentong
/// 层级调用改为链式调用，方便查看
/// 4/11/19
///
class WidgetDecoration {
  Widget _widget;

  WidgetDecoration(Widget widget) {
    this._widget = widget;
  }

  Function _onTapFunc;
  Function _onDoubleTapFunc;
  Function _onLongPressFunc;

  ///add padding属性
  WidgetDecoration padding(
      {Key key, double left = 0.0, double top = 0.0, double right = 0.0, double bottom = 0.0}) {
    var padding = EdgeInsets.only(left: left, top: top, right: right, bottom: bottom);
    _widget = new Padding(key: key, padding: padding, child: _widget);
    return this;
  }

  ///增加padingall
  WidgetDecoration paddAll({Key key, double all = 0.0}) {
    var padding = EdgeInsets.all(all);
    _widget = new Padding(key: key, padding: padding, child: _widget);
    return this;
  }

  ///增加align 当前布局相对位置
  ///FractionalOffset.centerRight
  WidgetDecoration align({Key key, AlignmentGeometry alignment = Alignment.center}) {
    _widget = new Align(key: key, alignment: alignment, child: _widget);
    return this;
  }

  ///位置
  WidgetDecoration positioned(
      {Key key,
      double left,
      double top,
      double right,
      double bottom,
      double width,
      double height}) {
    _widget = new Positioned(
        key: key,
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        width: width,
        height: height,
        child: _widget);
    return this;
  }

  ///stack 相当于frameLayout布局

  ///填充布局
  WidgetDecoration expanded({Key key, int flex = 1}) {
    _widget = new Expanded(key: key, flex: flex, child: _widget);
    return this;
  }

  ///是否显示布局 true为不显示 false为显示
  WidgetDecoration offstage({Key key, bool offstage = true}) {
    _widget = new Offstage(key: key, offstage: offstage, child: _widget);
    return this;
  }

  ///透明度 0 是完全透明 1 完全不透明
  WidgetDecoration opacity({Key key, @required double opacity, alwaysIncludeSemantics = false}) {
    _widget = new Opacity(
        key: key, opacity: opacity, alwaysIncludeSemantics: alwaysIncludeSemantics, child: _widget);
    return this;
  }

  ///基准线布局
  WidgetDecoration baseline({
    Key key,
    @required double baseline,
    @required TextBaseline baselineType,
  }) {
    _widget =
        new Baseline(key: key, baseline: baseline, baselineType: baselineType, child: _widget);
    return this;
  }

  ///设置宽高比
  WidgetDecoration aspectRatio({Key key, @required double aspectRatio}) {
    _widget = new AspectRatio(key: key, aspectRatio: aspectRatio, child: _widget);
    return this;
  }

  ///矩阵转换
  WidgetDecoration transform({
    Key key,
    @required Matrix4 transform,
    origin,
    alignment,
    transformHitTests = true,
  }) {
    _widget = new Transform(
        key: key,
        transform: transform,
        origin: origin,
        alignment: alignment,
        transformHitTests: transformHitTests,
        child: _widget);
    return this;
  }

  ///居中 todo: center
  WidgetDecoration center({Key key, double widthFactor, double heightFactor}) {
    _widget =
        new Center(key: key, widthFactor: widthFactor, heightFactor: heightFactor, child: _widget);
    return this;
  }

  ///布局容器
  WidgetDecoration container({
    Key key,
    alignment,
    padding,
    Color color,
    Decoration decoration,
    foregroundDecoration,
    double width,
    double height,
    BoxConstraints constraints,
    margin,
    transform,
  }) {
    _widget = new Container(
        key: key,
        alignment: alignment,
        padding: padding,
        color: color,
        decoration: decoration,
        foregroundDecoration: foregroundDecoration,
        width: width,
        height: height,
        constraints: constraints,
        margin: margin,
        transform: transform,
        child: _widget);
    return this;
  }

  ///设置具体尺寸
  WidgetDecoration sizedBox({Key key, double width, double height}) {
    _widget = new SizedBox(key: key, width: width, height: height, child: _widget);
    return this;
  }

  ///设置最大最小宽高布局
  WidgetDecoration constrainedBox({
    Key key,
    minWidth = 0.0,
    maxWidth = double.infinity,
    minHeight = 0.0,
    maxHeight = double.infinity,
  }) {
    BoxConstraints constraints = new BoxConstraints(
        minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight);
    _widget = new ConstrainedBox(key: key, constraints: constraints, child: _widget);
    return this;
  }

  ///限定最大宽高布局
  WidgetDecoration limitedBox({
    Key key,
    maxWidth = double.infinity,
    maxHeight = double.infinity,
  }) {
    _widget = new LimitedBox(key: key, maxWidth: maxWidth, maxHeight: maxHeight, child: _widget);
    return this;
  }

  ///百分比布局
  WidgetDecoration fractionallySizedBox(
      {Key key, alignment = Alignment.center, double widthFactor, double heightFactor}) {
    _widget = new FractionallySizedBox(
        key: key,
        alignment: alignment,
        widthFactor: widthFactor,
        heightFactor: heightFactor,
        child: _widget);
    return this;
  }

  ///缩放布局
  WidgetDecoration fittedBox({Key key, fit = BoxFit.contain, alignment = Alignment.center}) {
    _widget = new FittedBox(key: key, fit: fit, alignment: alignment, child: _widget);
    return this;
  }

  ///旋转盒子 1次是90度
  WidgetDecoration rotatedBox({
    Key key,
    @required int quarterTurns,
  }) {
    _widget = new RotatedBox(key: key, quarterTurns: quarterTurns, child: _widget);
    return this;
  }

  ///装饰盒子 细节往外抛 decoration 编写放在外面
  WidgetDecoration decoratedBox({
    Key key,
    @required Decoration decoration,
    position = DecorationPosition.background,
  }) {
    _widget =
        new DecoratedBox(key: key, decoration: decoration, position: position, child: _widget);
    return this;
  }

  ///圆形剪裁
  WidgetDecoration clipOval(
      {Key key, CustomClipper&lt;Rect&gt; clipper, Clip clipBehavior = Clip.antiAlias}) {
    _widget = new ClipOval(key: key, clipper: clipper, clipBehavior: clipBehavior, child: _widget);
    return this;
  }

  ///圆角矩形剪裁
  WidgetDecoration clipRRect(
      {Key key,
      @required BorderRadius borderRadius,
      CustomClipper&lt;RRect&gt; clipper,
      Clip clipBehavior = Clip.antiAlias}) {
    _widget = new ClipRRect(
        key: key,
        borderRadius: borderRadius,
        clipper: clipper,
        clipBehavior: clipBehavior,
        child: _widget);
    return this;
  }

  ///矩形剪裁  todo: 需要自定义clipper 否则无效果
  WidgetDecoration clipRect(
      {Key key, @required CustomClipper&lt;Rect&gt; clipper, Clip clipBehavior = Clip.hardEdge}) {
    _widget = new ClipRect(key: key, clipper: clipper, clipBehavior: clipBehavior, child: _widget);
    return this;
  }

  ///路径剪裁  todo: 需要自定义clipper 否则无效果
  WidgetDecoration clipPath(
      {Key key, @required CustomClipper&lt;Path&gt; clipper, Clip clipBehavior = Clip.antiAlias}) {
    _widget = new ClipPath(key: key, clipper: clipper, clipBehavior: clipBehavior, child: _widget);
    return this;
  }

  ///animatedOpacity 淡入淡出
  WidgetDecoration animatedOpacity({
    Key key,
    @required double opacity,
    Curve curve = Curves.linear,
    @required Duration duration,
  }) {
    _widget = new AnimatedOpacity(
        key: key, opacity: opacity, curve: curve, duration: duration, child: _widget);
    return this;
  }

  ///页面简单切换效果
  WidgetDecoration hero({Key key, @required Object tag}) {
    _widget = new Hero(key: key, tag: tag, child: _widget);
    return this;
  }

  ///点击事件
  WidgetDecoration onClick({Key key, onTap, onDoubleTap, onLongPress}) {
    _widget = new GestureDetector(
      key: key,
      child: _widget,
      onTap: onTap ?? _onTapFunc,
      onDoubleTap: onDoubleTap ?? _onDoubleTapFunc,
      onLongPress: onLongPress ?? _onLongPressFunc,
    );
    return this;
  }

  ///添加点击事件
  WidgetDecoration onTap(Function func, {Key key}) {
    _onTapFunc = func;
    _widget = new GestureDetector(
      key: key,
      child: _widget,
      onTap: _onTapFunc,
      onDoubleTap: _onDoubleTapFunc,
      onLongPress: _onLongPressFunc,
    );
    return this;
  }

  ///双击
  WidgetDecoration onDoubleTap(Function func, {Key key}) {
    _onDoubleTapFunc = func;
    _widget = new GestureDetector(
      key: key,
      child: _widget,
      onTap: _onTapFunc,
      onDoubleTap: _onDoubleTapFunc,
      onLongPress: _onLongPressFunc,
    );
    return this;
  }

  ///长按
  WidgetDecoration onLongPress(Function func, {Key key}) {
    _onLongPressFunc = func;
    _widget = new GestureDetector(
      key: key,
      child: _widget,
      onTap: _onTapFunc,
      onDoubleTap: _onDoubleTapFunc,
      onLongPress: _onLongPressFunc,
    );
    return this;
  }

  Widget build() {
    return _widget;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[s];function r(t,v){return e(),n("div",null,a)}const m=i(l,[["render",r],["__file","flutter解决布局嵌套问题.html.vue"]]),o=JSON.parse(`{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/flutter%E8%A7%A3%E5%86%B3%E5%B8%83%E5%B1%80%E5%B5%8C%E5%A5%97%E9%97%AE%E9%A2%98.html","title":"flutter解决布局嵌套问题","lang":"zh-CN","frontmatter":{"title":"flutter解决布局嵌套问题","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"思路：flutter的布局嵌套层次太多，改成链式调用会简单一些 原来的例子 假如再加上click事件，那么简直是太TMD的了 设计模式中有建造者模式，可以用链式调用，解决多层嵌套问题 调用如下，我还特意加上click事件 这样写法你说优秀不优秀 不用担心括号一层一层的问题 完整建造者代码，已应用于项目","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/flutter%E8%A7%A3%E5%86%B3%E5%B8%83%E5%B1%80%E5%B5%8C%E5%A5%97%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"flutter解决布局嵌套问题"}],["meta",{"property":"og:description","content":"思路：flutter的布局嵌套层次太多，改成链式调用会简单一些 原来的例子 假如再加上click事件，那么简直是太TMD的了 设计模式中有建造者模式，可以用链式调用，解决多层嵌套问题 调用如下，我还特意加上click事件 这样写法你说优秀不优秀 不用担心括号一层一层的问题 完整建造者代码，已应用于项目"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flutter解决布局嵌套问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":4.11,"words":1232},"filePathRelative":"fe/android/Android相关/flutter解决布局嵌套问题.md","localizedDate":"2024年3月24日","excerpt":"<p>思路：flutter的布局嵌套层次太多，改成链式调用会简单一些</p>\\n<p>原来的例子</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>import 'package:flutter/material.dart';\\nimport 'package:flutter_easy/common/util/common.dart';\\n\\nvoid main() {\\n  runApp(\\n    new MaterialApp(\\n      title: '',\\n      theme: new ThemeData(\\n        primarySwatch: Colors.blue,\\n      ),\\n      home: new TestPage(),\\n    ),\\n  );\\n}\\n\\n///author:chentong\\n///date:4/10/19\\nclass TestPage extends StatelessWidget {\\n  @override\\n  Widget build(BuildContext context) {\\n    return new Scaffold(\\n      appBar: new AppBar(\\n        title: new Text('demo'),\\n      ),\\n      body: new Align(\\n          alignment: FractionalOffset.centerRight,\\n          child: new Padding(\\n              padding: CommonUtil.padding(left: 10), child: new Text(\\"我是测试党\\"))),\\n    );\\n  }\\n}\\n\\n</code></pre></div>","autoDesc":true}`);export{m as comp,o as data};
