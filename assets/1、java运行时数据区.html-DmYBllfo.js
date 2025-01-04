import{_ as e}from"./markword-D8LSzPfX.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,f as l}from"./app-CtvCwAmI.js";const r="/assets/rtda-DjsIijaw.png",n="/assets/memlayout-CJm467Nb.png",o={},c=l('<h3 id="运行时数据区" tabindex="-1"><a class="header-anchor" href="#运行时数据区"><span>运行时数据区</span></a></h3><figure><img src="'+r+'" alt="运行时数据区" tabindex="0" loading="lazy"><figcaption>运行时数据区</figcaption></figure><ul><li>程序计数器 所执行字节码的当前执行号指示器，通过改变计数器值来指定下一条要执行的字节码指令</li><li>java虚拟机栈 存放虚拟机栈帧 stack frame 用于存放方法参数，局部变量，操作数栈，方法返回地址等</li><li>本地方法栈 存放本地方法栈帧 ,执行native方法</li><li>堆 存放对象实例</li><li>方法区 用于存储被虚拟机加载的类信息，常量池，静态变量，方法信息等</li><li>运行时常量池 存放常量信息 (属于方法区一部分)</li></ul><h3 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建"><span>对象的创建</span></a></h3><ol><li>new 指令创建对象</li><li>检查指令参数是否在常量池中定位到一个类的符号引用，如果没有，执行类加载过程</li><li>为新生对象分配内存,初始化为0值</li><li>对象头设置状态(类元数据信息，hashCode,对象分代年龄,锁信息)</li><li>执行<code>&lt;init&gt;</code>方法</li></ol><p>内存分配空间策略</p><ol><li>指针碰撞：Bump the Pointer 挪到指针 内存规整且连续</li><li>空闲列表：Free List 记录那块内存可用 场景 已使用内存和空间交错</li></ol><p>解决内存分配并发问题</p><ol><li>CAS加上重试</li><li>TLAB 每个线程一个独立分配空间</li></ol><h3 id="对象内存布局" tabindex="-1"><a class="header-anchor" href="#对象内存布局"><span>对象内存布局</span></a></h3><figure><img src="'+n+'" alt="对象内存布局" tabindex="0" loading="lazy"><figcaption>对象内存布局</figcaption></figure><p>对象内存区域分为3块区域：对象头、实例数据、对齐填充</p><ol><li>对象头： <ol><li>Mark Word: 存储对象自身运行时数据，如hashcode,分代年龄,锁状态标志,线程持有的锁，偏向线程ID,偏向时间戳 示例 32bit 25bit hashcode 4bit 分代年龄 2bit锁标志位 1bit 0</li><li>类型指针，指向类元数据class的指针，根据这个来确定那个对象实例的</li><li>数组length:数组对象特有</li></ol></li><li>实例数据：</li><li>对齐填充：补位效果</li></ol><p><img src="'+e+'" alt="markword" loading="lazy"> 根据标志位来设置对象头信息</p><h3 id="对象访问定位" tabindex="-1"><a class="header-anchor" href="#对象访问定位"><span>对象访问定位</span></a></h3><p>通过栈上reference访问对象，来操作堆上具体对象</p><p>方位方式2种</p><ol><li>使用句柄：Java堆分配句柄池，reference中存储的是对象的句柄</li><li>直接指针：reference中存储的是对象的地址,java对象布局考虑访问类型数据相关信息</li></ol><p>句柄优点：只改变句柄实例的指针，不改变句柄，即reference不会改变</p><p>直接指针：优点是快，节省指针定位开销</p><h3 id="内存溢出" tabindex="-1"><a class="header-anchor" href="#内存溢出"><span>内存溢出</span></a></h3><ol><li>堆溢出：java.lang.OutOfMemoryError: Java heap space 解决方案 如无内存泄漏，则 -Xms=100m -Xmx=100m 调参</li><li>虚拟机栈和本地方法栈溢出：java.lang.StackOverflowError 超出虚拟机最大栈深度，创建线程过多导致内存溢出</li><li>方法区溢出：java.lang.OutOfMemoryError: Permanent generation space</li><li>本地直接内存溢出：java.lang.OutOfMemoryError: Direct buffer memory</li></ol><p>通过减少最大堆和减少栈容量来换取更多线程</p><p>因为系统分配每个进程内存是有限制的,优先分配方法区和堆，剩下是线程私有空间，栈和堆越大，线程的可分配数量越小</p>',24),s=[c];function p(m,d){return i(),t("div",null,s)}const v=a(o,[["render",p],["__file","1、java运行时数据区.html.vue"]]),u=JSON.parse('{"path":"/basis/jvm/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA/1%E3%80%81java%E8%BF%90%E8%A1%8C%E6%97%B6%E6%95%B0%E6%8D%AE%E5%8C%BA.html","title":"1、java运行时数据区","lang":"zh-CN","frontmatter":{"title":"1、java运行时数据区","date":"2024-04-10T06:06:06.000Z","category":["深入理解java虚拟机"],"tag":["jvm"],"description":"运行时数据区 运行时数据区运行时数据区 程序计数器 所执行字节码的当前执行号指示器，通过改变计数器值来指定下一条要执行的字节码指令 java虚拟机栈 存放虚拟机栈帧 stack frame 用于存放方法参数，局部变量，操作数栈，方法返回地址等 本地方法栈 存放本地方法栈帧 ,执行native方法 堆 存放对象实例 方法区 用于存储被虚拟机加载的类信息，...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/jvm/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA/1%E3%80%81java%E8%BF%90%E8%A1%8C%E6%97%B6%E6%95%B0%E6%8D%AE%E5%8C%BA.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"1、java运行时数据区"}],["meta",{"property":"og:description","content":"运行时数据区 运行时数据区运行时数据区 程序计数器 所执行字节码的当前执行号指示器，通过改变计数器值来指定下一条要执行的字节码指令 java虚拟机栈 存放虚拟机栈帧 stack frame 用于存放方法参数，局部变量，操作数栈，方法返回地址等 本地方法栈 存放本地方法栈帧 ,执行native方法 堆 存放对象实例 方法区 用于存储被虚拟机加载的类信息，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-11T04:54:05.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"jvm"}],["meta",{"property":"article:published_time","content":"2024-04-10T06:06:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-11T04:54:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1、java运行时数据区\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-10T06:06:06.000Z\\",\\"dateModified\\":\\"2024-04-11T04:54:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"运行时数据区","slug":"运行时数据区","link":"#运行时数据区","children":[]},{"level":3,"title":"对象的创建","slug":"对象的创建","link":"#对象的创建","children":[]},{"level":3,"title":"对象内存布局","slug":"对象内存布局","link":"#对象内存布局","children":[]},{"level":3,"title":"对象访问定位","slug":"对象访问定位","link":"#对象访问定位","children":[]},{"level":3,"title":"内存溢出","slug":"内存溢出","link":"#内存溢出","children":[]}],"git":{"createdTime":1712797641000,"updatedTime":1712811245000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":2}]},"readingTime":{"minutes":2.75,"words":824},"filePathRelative":"basis/jvm/深入理解java虚拟机/1、java运行时数据区.md","localizedDate":"2024年4月10日","excerpt":"<h3>运行时数据区</h3>\\n<figure><figcaption>运行时数据区</figcaption></figure>\\n<ul>\\n<li>程序计数器 所执行字节码的当前执行号指示器，通过改变计数器值来指定下一条要执行的字节码指令</li>\\n<li>java虚拟机栈 存放虚拟机栈帧 stack frame 用于存放方法参数，局部变量，操作数栈，方法返回地址等</li>\\n<li>本地方法栈 存放本地方法栈帧 ,执行native方法</li>\\n<li>堆 存放对象实例</li>\\n<li>方法区 用于存储被虚拟机加载的类信息，常量池，静态变量，方法信息等</li>\\n<li>运行时常量池 存放常量信息 (属于方法区一部分)</li>\\n</ul>","autoDesc":true}');export{v as comp,u as data};
