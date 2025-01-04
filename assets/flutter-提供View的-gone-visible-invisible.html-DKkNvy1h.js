import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as t}from"./app-CtvCwAmI.js";const l={},s=t(`<p>安卓一般View有三种显示方式gone visible invisible fultter也要提供相应的支持，这个是验证可用的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &#39;package:flutter/widgets.dart&#39;;
import &#39;package:meta/meta.dart&#39;;

enum VisibilityFlag {
  visible,
  invisible,
  offscreen,
  gone,
}

class Visibility extends StatelessWidget {
  final VisibilityFlag visibility;
  final Widget child;
  final Widget removeChild;

  Visibility({
    @required this.child,
    @required this.visibility,
  }) : this.removeChild = Container();

  @override
  Widget build(BuildContext context) {
    if (visibility == VisibilityFlag.visible) {
      return child;
    } else if (visibility == VisibilityFlag.invisible) {
      return new IgnorePointer(
          ignoring: true, child: new Opacity(opacity: 0.0, child: child));
    } else if (visibility == VisibilityFlag.offscreen) {
      return new Offstage(offstage: true, child: child);
    } else {
      return removeChild;
    }
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[s];function d(a,c){return e(),n("div",null,r)}const u=i(l,[["render",d],["__file","flutter-提供View的-gone-visible-invisible.html.vue"]]),b=JSON.parse(`{"path":"/fe/cross-end/flutter/flutter-%E6%8F%90%E4%BE%9BView%E7%9A%84-gone-visible-invisible.html","title":"flutter-提供View的-gone-visible-invisible","lang":"zh-CN","frontmatter":{"title":"flutter-提供View的-gone-visible-invisible","date":"2024-03-25T22:02:09.000Z","category":["flutter学习"],"tag":["archive"],"description":"安卓一般View有三种显示方式gone visible invisible fultter也要提供相应的支持，这个是验证可用的","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/cross-end/flutter/flutter-%E6%8F%90%E4%BE%9BView%E7%9A%84-gone-visible-invisible.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"flutter-提供View的-gone-visible-invisible"}],["meta",{"property":"og:description","content":"安卓一般View有三种显示方式gone visible invisible fultter也要提供相应的支持，这个是验证可用的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-25T22:02:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"flutter-提供View的-gone-visible-invisible\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-25T22:02:09.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.42,"words":127},"filePathRelative":"fe/cross-end/flutter/flutter-提供View的-gone-visible-invisible.md","localizedDate":"2024年3月26日","excerpt":"<p>安卓一般View有三种显示方式gone visible invisible\\nfultter也要提供相应的支持，这个是验证可用的</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>import 'package:flutter/widgets.dart';\\nimport 'package:meta/meta.dart';\\n\\nenum VisibilityFlag {\\n  visible,\\n  invisible,\\n  offscreen,\\n  gone,\\n}\\n\\nclass Visibility extends StatelessWidget {\\n  final VisibilityFlag visibility;\\n  final Widget child;\\n  final Widget removeChild;\\n\\n  Visibility({\\n    @required this.child,\\n    @required this.visibility,\\n  }) : this.removeChild = Container();\\n\\n  @override\\n  Widget build(BuildContext context) {\\n    if (visibility == VisibilityFlag.visible) {\\n      return child;\\n    } else if (visibility == VisibilityFlag.invisible) {\\n      return new IgnorePointer(\\n          ignoring: true, child: new Opacity(opacity: 0.0, child: child));\\n    } else if (visibility == VisibilityFlag.offscreen) {\\n      return new Offstage(offstage: true, child: child);\\n    } else {\\n      return removeChild;\\n    }\\n  }\\n}\\n\\n\\n</code></pre></div>","autoDesc":true}`);export{u as comp,b as data};
