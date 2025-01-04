import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as r,c as g,a as e,b as a,d as t,f as n}from"./app-CtvCwAmI.js";const s={},d=n('<p>简单🍳读懂UML类图</p><p>#####<strong>一、类的表示方式</strong> 在UML类图中，类使用包含类名、属性(field) 和方法(method)，用带有分割线的矩形划分</p><p><strong>1、类的属性表示方式</strong></p><ul><li><strong>可见性  名称 ：类型 [ = 缺省值]</strong> 中括号中的内容表示是可选的 其中可见性的三种符号表示： 1、 <code>+</code> ：表示public 2、<code>-</code> ：表示private 3、<code>#</code>：表示protected（default）</li></ul><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-312c565497f4a562.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示：一个Employee类，它包含name,age和email这3个属性，以及modifyInfo()方法，其中3个属性是私有的，方法是公有的</p><p><strong>2、类的方法的表示方式</strong></p><ul><li><strong>可见性  名称(参数列表) [ ： 返回类型]</strong> 中括号中的内容表示是可选的</li></ul><figure><img src="https://upload-images.jianshu.io/upload_images/5526061-9ca28bb1a0d75bb5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示的Demo类中，定义了3个方法： 1、public方法method1接收一个类型为Object的参数，返回值类型为void 2、protected方法method2无参数，返回值类型为String 3、private方法method3接收类型分别为int、int[]的参数，返回值类型为int</p><p>#####二、类与类之间关系的表示方式</p><p>1、关联关系</p><p>关联关系又可进一步分为单向关联、双向关联和自关联。</p><p>（1）单向关联（带箭头的直线表示） 一方单向持有成员变量 <img src="http://upload-images.jianshu.io/upload_images/5526061-dbfd47882d1c80b6.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>上图表示每个顾客都有一个地址，这通过让Customer类持有一个类型为Address的成员变量类实现。</p><p>（2）双向关联（不带箭头的直线表示） 双方各自持有对方类型的成员变量 <img src="http://upload-images.jianshu.io/upload_images/5526061-dc0c32827941f943.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>上图中在Customer类中维护一个Product[]数组，表示一个顾客购买了那些产品；在Product类中维护一个Customer类型的成员变量表示这个产品被哪个顾客所购买。</p><p>（3）自关联（带有箭头且指向自身的直线表示） 自己包含自己</p><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-bffd34b86dc0d8c3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图的意思就是Node类包含类型为Node的成员变量</p><p>2、聚合关系（带空心菱形和箭头的直线） 聚合关系强调是“整体”包含“部分”，但是“部分”可以脱离“整体”而单独存在</p><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-c61e7cc1cfa977a9.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>比如上图中汽车包含了发动机，而发动机脱离了汽车也能单独存在。</p><p>3、组合关系（带实心菱形和箭头的直线表示） 组合关系与聚合关系见得最大不同在于：这里的“部分”脱离了“整体”便不复存在</p><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-4aa9b7daf4a02aaf.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图，嘴是头的一部分且不能脱离了头而单独存在</p><p>4、依赖关系（带有箭头的虚线）</p><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-0fa239b9a052f0e9.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上图所示，Driver的drive方法只有传入了一个Car对象才能发挥作用，因此我们说Driver类依赖于Car类。</p><p>5、继承关系（带空心三角形的直线表示）</p><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-0afd3532d91d690a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图，Student类与Teacher类继承了Person类</p><p>6、接口实现关系（带空心三角形的虚线表示）</p><figure><img src="http://upload-images.jianshu.io/upload_images/5526061-f403a584a158cf5f.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图，Car类与Ship类都实现了Vehicle接口</p><p>#####三、参考资料</p>',36),m={href:"https://www.cnblogs.com/shindo/p/5579191.html",target:"_blank",rel:"noopener noreferrer"},c={href:"http://www.uml.org.cn/oobject/201211231.asp",target:"_blank",rel:"noopener noreferrer"};function l(u,h){const i=p("ExternalLinkIcon");return r(),g("div",null,[d,e("p",null,[e("a",m,[a("五分钟读懂UML类图"),t(i)]),e("a",c,[a("深入浅出UML类图"),t(i)])])])}const w=o(s,[["render",l],["__file","五分钟读懂UML类图.html.vue"]]),b=JSON.parse('{"path":"/basis/architect/%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99/%E4%BA%94%E5%88%86%E9%92%9F%E8%AF%BB%E6%87%82UML%E7%B1%BB%E5%9B%BE.html","title":"五分钟读懂UML类图","lang":"zh-CN","frontmatter":{"title":"五分钟读懂UML类图","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"简单🍳读懂UML类图 #####一、类的表示方式 在UML类图中，类使用包含类名、属性(field) 和方法(method)，用带有分割线的矩形划分 1、类的属性表示方式 可见性 名称 ：类型 [ = 缺省值] 中括号中的内容表示是可选的 其中可见性的三种符号表示： 1、 + ：表示public 2、- ：表示private 3、#：表示protec...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/architect/%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99/%E4%BA%94%E5%88%86%E9%92%9F%E8%AF%BB%E6%87%82UML%E7%B1%BB%E5%9B%BE.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"五分钟读懂UML类图"}],["meta",{"property":"og:description","content":"简单🍳读懂UML类图 #####一、类的表示方式 在UML类图中，类使用包含类名、属性(field) 和方法(method)，用带有分割线的矩形划分 1、类的属性表示方式 可见性 名称 ：类型 [ = 缺省值] 中括号中的内容表示是可选的 其中可见性的三种符号表示： 1、 + ：表示public 2、- ：表示private 3、#：表示protec..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://upload-images.jianshu.io/upload_images/5526061-312c565497f4a562.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"五分钟读懂UML类图\\",\\"image\\":[\\"http://upload-images.jianshu.io/upload_images/5526061-312c565497f4a562.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"https://upload-images.jianshu.io/upload_images/5526061-9ca28bb1a0d75bb5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-dbfd47882d1c80b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-dc0c32827941f943.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-bffd34b86dc0d8c3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-c61e7cc1cfa977a9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-4aa9b7daf4a02aaf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-0fa239b9a052f0e9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-0afd3532d91d690a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\",\\"http://upload-images.jianshu.io/upload_images/5526061-f403a584a158cf5f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":2.87,"words":860},"filePathRelative":"basis/architect/设计原则/五分钟读懂UML类图.md","localizedDate":"2024年3月24日","excerpt":"<p>简单🍳读懂UML类图</p>\\n<p>#####<strong>一、类的表示方式</strong>\\n在UML类图中，类使用包含类名、属性(field) 和方法(method)，用带有分割线的矩形划分</p>\\n<p><strong>1、类的属性表示方式</strong></p>\\n<ul>\\n<li><strong>可见性 &nbsp;名称 ：类型 [ = 缺省值]</strong>\\n中括号中的内容表示是可选的\\n其中可见性的三种符号表示：\\n1、 <code>+</code> ：表示public\\n2、<code>-</code> ：表示private\\n3、<code>#</code>：表示protected（default）</li>\\n</ul>","autoDesc":true}');export{w as comp,b as data};
