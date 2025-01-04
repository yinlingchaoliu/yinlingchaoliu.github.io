import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as t}from"./app-CtvCwAmI.js";const l={},s=t(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>状态模式：允许一个对象在其内部状态改变时改变它的行为 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface ITvStatus {
    public void nextChannel();
    public void prevChannel();
    public void turnUp();
    public void turnDown();
}

public interface IPowerController {
    void powerOn();
    void powerOff();
}

public class PowerOffState implements ITvStatus{
    @Override
    public void nextChannel() {
        System.out.println(&quot;----------&quot;);
    }

    @Override
    public void prevChannel() {
        System.out.println(&quot;----------&quot;);
    }

    @Override
    public void turnUp() {
        System.out.println(&quot;----------&quot;);
    }

    @Override
    public void turnDown() {
        System.out.println(&quot;----------&quot;);
    }
}

public class PowerOnState implements ITvStatus {

    @Override
    public void nextChannel() {
        System.out.println(&quot;下一频道&quot;);
    }

    @Override
    public void prevChannel() {
        System.out.println(&quot;上一频道&quot;);
    }

    @Override
    public void turnUp() {
        System.out.println(&quot;调高音量&quot;);
    }

    @Override
    public void turnDown() {
        System.out.println(&quot;调低音量&quot;);
    }

}

public class TVController implements ITvStatus,IPowerController{

    private ITvStatus mTvStatus = new PowerOffState();

    public void setmTvStatus(ITvStatus mTvStatus) {
        this.mTvStatus = mTvStatus;
    }

    @Override
    public void powerOn() {
        setmTvStatus( new PowerOnState() );
        System.out.println(&quot;开机&quot;);
    }

    @Override
    public void powerOff() {
        setmTvStatus( new PowerOffState() );
        System.out.println(&quot;关机&quot;);

    }

    @Override
    public void nextChannel() {
        mTvStatus.nextChannel();
    }

    @Override
    public void prevChannel() {
        mTvStatus.prevChannel();
    }

    @Override
    public void turnUp() {
        mTvStatus.turnUp();
    }

    @Override
    public void turnDown() {
        mTvStatus.turnDown();
    }
}

/**
 * 状态模式
 * 行为是平行关系，不可替换，自我状态改变
 */
public class TestMain {

    public static void main(String[] args){

        TVController tvController = new TVController();
        tvController.nextChannel();
        tvController.powerOff();
        tvController.powerOn();
        tvController.turnDown();

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),r=[s];function d(v,a){return e(),i("div",null,r)}const o=n(l,[["render",d],["__file","设计模式-行为型-状态模式.html.vue"]]),m=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-状态模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-状态模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 状态模式：允许一个对象在其内部状态改变时改变它的行为 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-状态模式"}],["meta",{"property":"og:description","content":"1、定义 状态模式：允许一个对象在其内部状态改变时改变它的行为 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-状态模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"basis/design-pattern/设计模式-行为型-状态模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>状态模式：允许一个对象在其内部状态改变时改变它的行为 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public interface ITvStatus {\\n    public void nextChannel();\\n    public void prevChannel();\\n    public void turnUp();\\n    public void turnDown();\\n}\\n\\npublic interface IPowerController {\\n    void powerOn();\\n    void powerOff();\\n}\\n\\npublic class PowerOffState implements ITvStatus{\\n    @Override\\n    public void nextChannel() {\\n        System.out.println(\\"----------\\");\\n    }\\n\\n    @Override\\n    public void prevChannel() {\\n        System.out.println(\\"----------\\");\\n    }\\n\\n    @Override\\n    public void turnUp() {\\n        System.out.println(\\"----------\\");\\n    }\\n\\n    @Override\\n    public void turnDown() {\\n        System.out.println(\\"----------\\");\\n    }\\n}\\n\\npublic class PowerOnState implements ITvStatus {\\n\\n    @Override\\n    public void nextChannel() {\\n        System.out.println(\\"下一频道\\");\\n    }\\n\\n    @Override\\n    public void prevChannel() {\\n        System.out.println(\\"上一频道\\");\\n    }\\n\\n    @Override\\n    public void turnUp() {\\n        System.out.println(\\"调高音量\\");\\n    }\\n\\n    @Override\\n    public void turnDown() {\\n        System.out.println(\\"调低音量\\");\\n    }\\n\\n}\\n\\npublic class TVController implements ITvStatus,IPowerController{\\n\\n    private ITvStatus mTvStatus = new PowerOffState();\\n\\n    public void setmTvStatus(ITvStatus mTvStatus) {\\n        this.mTvStatus = mTvStatus;\\n    }\\n\\n    @Override\\n    public void powerOn() {\\n        setmTvStatus( new PowerOnState() );\\n        System.out.println(\\"开机\\");\\n    }\\n\\n    @Override\\n    public void powerOff() {\\n        setmTvStatus( new PowerOffState() );\\n        System.out.println(\\"关机\\");\\n\\n    }\\n\\n    @Override\\n    public void nextChannel() {\\n        mTvStatus.nextChannel();\\n    }\\n\\n    @Override\\n    public void prevChannel() {\\n        mTvStatus.prevChannel();\\n    }\\n\\n    @Override\\n    public void turnUp() {\\n        mTvStatus.turnUp();\\n    }\\n\\n    @Override\\n    public void turnDown() {\\n        mTvStatus.turnDown();\\n    }\\n}\\n\\n/**\\n * 状态模式\\n * 行为是平行关系，不可替换，自我状态改变\\n */\\npublic class TestMain {\\n\\n    public static void main(String[] args){\\n\\n        TVController tvController = new TVController();\\n        tvController.nextChannel();\\n        tvController.powerOff();\\n        tvController.powerOn();\\n        tvController.turnDown();\\n\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{o as comp,m as data};
