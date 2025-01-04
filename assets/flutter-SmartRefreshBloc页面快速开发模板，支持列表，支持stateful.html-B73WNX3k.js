import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as l}from"./app-CtvCwAmI.js";const d={},s=l(`<p>项目地址：https://github.com/yinlingchaoliu/SmartRefreshBloc</p><p>#####编写项目的思路 flutter处处体现widget，我们开发过程中，核心放在的是业务层面逻辑，减少不必要的widget编写，减少不必要重复劳动，减少不必要代码层级，作为提高效率的切入点</p><ul><li>解决问题方式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、用View与Logic解耦方式，增加代码清晰度
2、用模板的方式，给提供统一开发规范方案（普通页面和列表页面）
3、用快捷键方式，一键式快速开发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####1、先实现View与logic解耦</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &#39;package:flutter/material.dart&#39;;

/// Created by chentong
///
/// 相当于MVP
///
class BlocProvider&lt;T extends BlocBase&gt; extends StatefulWidget {
  BlocProvider({
    Key key,
    @required this.child, //View
    @required this.bloc, //logic
  }) : super(key: key);

  final T bloc;
  final Widget child;

  @override
  _BlocProviderState&lt;T&gt; createState() =&gt; _BlocProviderState&lt;T&gt;();
///核心代码
  static T of&lt;T extends BlocBase&gt;(BuildContext context) {
    final type = _typeOf&lt;BlocProvider&lt;T&gt;&gt;();
    BlocProvider&lt;T&gt; provider = context.ancestorWidgetOfExactType(type);
    return provider.bloc;
  }

  static Type _typeOf&lt;T&gt;() =&gt; T;
}

class _BlocProviderState&lt;T&gt; extends State&lt;BlocProvider&lt;BlocBase&gt;&gt; {

  @override
  void initState() {
    super.initState();
    widget.bloc.initState();
  }

  @override
  Widget build(BuildContext context) {
    return widget.child;
  }

  @override
  void dispose() {
    widget.bloc.dispose();
    super.dispose();
  }
}

abstract class BlocBase {
  void initState();

  void dispose();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是核心模板，可以解耦当前flutter页面中Widget与业务逻辑混合在一起的问题。</p><p>现在开发一个页面范例，将逻辑层迁移到DefaultBloc当中，而DefaultPage 专注于写widget，减少不必要的耦合。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &#39;package:flutter/cupertino.dart&#39;;
import &#39;package:flutter/material.dart&#39;;

import &#39;base_bloc.dart&#39;;

///@author: chentong
///2019-4-9
///视图层
class DefaultPage extends StatefulWidget {
  ///路由跳转
  static void pushDefaultPage(BuildContext context) {
    Navigator.push(
        context,
        new CupertinoPageRoute&lt;void&gt;(
            builder: (ctx) =&gt; new BlocProvider&lt;DefaultBloc&gt;(
                  child: new DefaultPage(),
                  bloc: new DefaultBloc(),
                )));
  }

  ///获得当前页面实例
  static StatefulWidget newInstance() {
    return new BlocProvider&lt;DefaultBloc&gt;(
      child: new DefaultPage(),
      bloc: new DefaultBloc(),
    );
  }

  @override
  _DefaultPageState createState() =&gt; new _DefaultPageState();
}

///
/// 页面实现
///
class _DefaultPageState extends State&lt;DefaultPage&gt; {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final DefaultBloc bloc = BlocProvider.of&lt;DefaultBloc&gt;(context);

    return new Scaffold(
      appBar: new AppBar(
        title: new Text(&#39;demo&#39;),
        centerTitle: true,
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}

///
///逻辑层
///todo:此处逻辑建议迁移出去 分离开解耦
///
class DefaultBloc extends BlocBase {
  @override
  void initState() {}

  @override
  void dispose() {}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####2、增加高频适配模板</p><p><code>因为listview列表在APP中是高频使用的存在，基于pull_to_refresh编写列表页面，便于快速开发</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &#39;package:flutter/cupertino.dart&#39;;
import &#39;package:flutter/material.dart&#39;;
import &#39;package:flutter/scheduler.dart&#39;;
import &#39;package:pull_to_refresh/pull_to_refresh.dart&#39;;

import &#39;base_bloc.dart&#39;;

///
///list列表
///author:chentong
///
abstract class SmartRefreshBloc extends PullToRefreshBloc {
  RefreshController refreshController;
  ScrollController scrollController;

  ///初始化
  void initState() {
    scrollController = new ScrollController();
    refreshController = new RefreshController();
    SchedulerBinding.instance.addPostFrameCallback((_) {
      refreshController.requestRefresh(true);
    });
  }

  void scrollTop() {
    scrollController.animateTo(0.0,
        duration: new Duration(microseconds: 1000), curve: ElasticInCurve());
  }

  void onRefreshCallBack(bool up) {
    if (up) {
      onRefresh();
    } else {
      onLoadMore();
    }
  }

  ///默认方法
  void onOffsetCallback(bool isUp, double offset) {
    // if you want change some widgets state ,you should rewrite the callback
    if (isUp) {
    } else {}
  }

  ///请求
  void refreshRequest({bool up = true}) {
    refreshController.requestRefresh(up);
  }

  ///完成
  void refreshCompleted() {
    refreshController.sendBack(true, RefreshStatus.completed);
  }

  ///空闲
  void refreshIdle() {
    refreshController.sendBack(false, RefreshStatus.idle);
  }

  ///失败
  void refreshFailed() {
    refreshController.sendBack(false, RefreshStatus.failed);
  }

  ///自定义头部
  Widget headerCreate(BuildContext context, RefreshStatus mode) {
    return new ClassicIndicator(mode: mode);
  }

  ///自定义脚部
  Widget footerCreate(BuildContext context, RefreshStatus mode) {
    return new ClassicIndicator(mode: mode);
  }

  @override
  void dispose() {}
}

///下拉刷新Bloc
abstract class PullToRefreshBloc extends BlocBase {
  ///加载数据
  Future getData({String labelId, int page});

  ///刷新
  Future onRefresh({String labelId});

  ///更多
  Future onLoadMore({String labelId, int page});
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####3、快捷键一键式开发 导入livesettings.jar 地址：https://github.com/yinlingchaoliu/SmartRefreshBloc/blob/master/livesettings.jar</p><p>快捷命令 fstatefulmvp 快速构建stateful页面 flistviewmvp 快速构建listview列表页面</p><p>快速实现一键化开发</p><p>其中还有flutter其他快捷命令 均是f开头,可以快捷名利可以快速唤起 <img src="https://upload-images.jianshu.io/upload_images/5526061-763dfb4138b77da5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>####项目中示例 核心模板代码在此路径 https://github.com/yinlingchaoliu/SmartRefreshBloc/tree/master/example/lib/base</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>///核心模板两个文件
base_bloc.dart
pulltofresh_bloc.dart

///一键化生成代码示例，帮助你快速开发
default_bloc.dart
default_list_bloc.dart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目中重构实战示例在 https://github.com/yinlingchaoliu/SmartRefreshBloc/tree/master/example/lib/ui</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>TestExample.dart
TestExample1.dart
TestExample2.dart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[s];function a(r,v){return i(),n("div",null,t)}const o=e(d,[["render",a],["__file","flutter-SmartRefreshBloc页面快速开发模板，支持列表，支持stateful.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/flutter-SmartRefreshBloc%E9%A1%B5%E9%9D%A2%E5%BF%AB%E9%80%9F%E5%BC%80%E5%8F%91%E6%A8%A1%E6%9D%BF%EF%BC%8C%E6%94%AF%E6%8C%81%E5%88%97%E8%A1%A8%EF%BC%8C%E6%94%AF%E6%8C%81stateful.html","title":"flutter-SmartRefreshBloc页面快速开发模板，支持列表，支持stateful","lang":"zh-CN","frontmatter":{"title":"flutter-SmartRefreshBloc页面快速开发模板，支持列表，支持stateful","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"项目地址：https://github.com/yinlingchaoliu/SmartRefreshBloc #####编写项目的思路 flutter处处体现widget，我们开发过程中，核心放在的是业务层面逻辑，减少不必要的widget编写，减少不必要重复劳动，减少不必要代码层级，作为提高效率的切入点 解决问题方式 #####1、先实现View与l...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/flutter-SmartRefreshBloc%E9%A1%B5%E9%9D%A2%E5%BF%AB%E9%80%9F%E5%BC%80%E5%8F%91%E6%A8%A1%E6%9D%BF%EF%BC%8C%E6%94%AF%E6%8C%81%E5%88%97%E8%A1%A8%EF%BC%8C%E6%94%AF%E6%8C%81stateful.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"flutter-SmartRefreshBloc页面快速开发模板，支持列表，支持stateful"}],["meta",{"property":"og:description","content":"项目地址：https://github.com/yinlingchaoliu/SmartRefreshBloc #####编写项目的思路 flutter处处体现widget，我们开发过程中，核心放在的是业务层面逻辑，减少不必要的widget编写，减少不必要重复劳动，减少不必要代码层级，作为提高效率的切入点 解决问题方式 #####1、先实现View与l..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://upload-images.jianshu.io/upload_images/5526061-763dfb4138b77da5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flutter-SmartRefreshBloc页面快速开发模板，支持列表，支持stateful\\",\\"image\\":[\\"https://upload-images.jianshu.io/upload_images/5526061-763dfb4138b77da5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.95,"words":885},"filePathRelative":"fe/android/Android相关/flutter-SmartRefreshBloc页面快速开发模板，支持列表，支持stateful.md","localizedDate":"2024年3月24日","excerpt":"<p>项目地址：https://github.com/yinlingchaoliu/SmartRefreshBloc</p>\\n<p>#####编写项目的思路\\nflutter处处体现widget，我们开发过程中，核心放在的是业务层面逻辑，减少不必要的widget编写，减少不必要重复劳动，减少不必要代码层级，作为提高效率的切入点</p>\\n<ul>\\n<li>解决问题方式</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>1、用View与Logic解耦方式，增加代码清晰度\\n2、用模板的方式，给提供统一开发规范方案（普通页面和列表页面）\\n3、用快捷键方式，一键式快速开发\\n</code></pre></div>","autoDesc":true}');export{o as comp,m as data};
