import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,f as d}from"./app-CtvCwAmI.js";const l={},s=d(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>中介者模式:用一个中介对象来封装一系列对象交互</code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 中介
 */
public interface Mediaor {

    void change(Colleague colleague);

}

public abstract class Colleague {

    protected Mediaor mediaor;

    public Colleague(Mediaor mediaor) {
        this.mediaor = mediaor;
    }

    public abstract void action();
}

/**
 * Cd设备
 */
public class CDDevice extends Colleague {
    private String cd;

    public CDDevice(Mediaor mediaor) {
        super( mediaor );
    }

    @Override
    public void action() {
        mediaor.change( this );
    }

    public void setCd(String cd) {
        this.cd = cd;
    }

    public void loadCD(){
        System.out.println( &quot;load CD&quot; + cd );
    }

}

/**
 * CPU
 */
public class CPU extends Colleague {

    private String branch;

    public CPU(Mediaor mediaor) {
        super( mediaor );
    }

    @Override
    public void action() {
        mediaor.change( this );
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public void loadCPU(){
        System.out.println( &quot;CPU&quot; + branch );
    }

}

/**
 * 声卡
 */
public class SoundCard extends Colleague {

    private String sound;

    public SoundCard(Mediaor mediaor) {
        super( mediaor );
    }

    @Override
    public void action() {
        mediaor.change( this );
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public void loadSoundCard(){
        System.out.println( &quot;load sound&quot; + sound );
    }

}

/**
 * 中介者模式
 * 多对多转化为一对多
 */
public class MainBoard implements Mediaor {

    private CDDevice cdDevice; //光驱设备
    private CPU cpu; //CPU
    private SoundCard soundCard; //声卡设备

    public void setCdDevice(CDDevice cdDevice) {
        this.cdDevice = cdDevice;
    }

    public void setCpu(CPU cpu) {
        this.cpu = cpu;
    }

    public void setSoundCard(SoundCard soundCard) {
        this.soundCard = soundCard;
    }

    @Override
    public void change(Colleague colleague) {
        if (colleague instanceof CDDevice) {
            ((CDDevice) colleague).loadCD();
        } else if (colleague instanceof CPU) {
            ((CPU) colleague).loadCPU();
        } else if (colleague instanceof SoundCard) {
            ((SoundCard) colleague).loadSoundCard();
        }
    }

}

/**
 * 从多对多网状关系
 * 变成一对多
 *
 */
public class TestMain {

    public static void main(String[] args){

        MainBoard mediator = new MainBoard();

        CPU cpu = new CPU( mediator );
        CDDevice cdDevice = new CDDevice( mediator );
        SoundCard soundCard = new SoundCard( mediator );

        mediator.setCdDevice( cdDevice );
        mediator.setCpu( cpu );
        mediator.setSoundCard( soundCard );

        cdDevice.action();

    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),a=[s];function c(r,v){return i(),e("div",null,a)}const o=n(l,[["render",c],["__file","设计模式-行为型-中介模式.html.vue"]]),m=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E4%B8%AD%E4%BB%8B%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-中介模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-中介模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 中介者模式:用一个中介对象来封装一系列对象交互 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E4%B8%AD%E4%BB%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-中介模式"}],["meta",{"property":"og:description","content":"1、定义 中介者模式:用一个中介对象来封装一系列对象交互 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-中介模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"basis/design-pattern/设计模式-行为型-中介模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>中介者模式:用一个中介对象来封装一系列对象交互</code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 中介\\n */\\npublic interface Mediaor {\\n\\n    void change(Colleague colleague);\\n\\n}\\n\\npublic abstract class Colleague {\\n\\n    protected Mediaor mediaor;\\n\\n    public Colleague(Mediaor mediaor) {\\n        this.mediaor = mediaor;\\n    }\\n\\n    public abstract void action();\\n}\\n\\n/**\\n * Cd设备\\n */\\npublic class CDDevice extends Colleague {\\n    private String cd;\\n\\n    public CDDevice(Mediaor mediaor) {\\n        super( mediaor );\\n    }\\n\\n    @Override\\n    public void action() {\\n        mediaor.change( this );\\n    }\\n\\n    public void setCd(String cd) {\\n        this.cd = cd;\\n    }\\n\\n    public void loadCD(){\\n        System.out.println( \\"load CD\\" + cd );\\n    }\\n\\n}\\n\\n/**\\n * CPU\\n */\\npublic class CPU extends Colleague {\\n\\n    private String branch;\\n\\n    public CPU(Mediaor mediaor) {\\n        super( mediaor );\\n    }\\n\\n    @Override\\n    public void action() {\\n        mediaor.change( this );\\n    }\\n\\n    public void setBranch(String branch) {\\n        this.branch = branch;\\n    }\\n\\n    public void loadCPU(){\\n        System.out.println( \\"CPU\\" + branch );\\n    }\\n\\n}\\n\\n/**\\n * 声卡\\n */\\npublic class SoundCard extends Colleague {\\n\\n    private String sound;\\n\\n    public SoundCard(Mediaor mediaor) {\\n        super( mediaor );\\n    }\\n\\n    @Override\\n    public void action() {\\n        mediaor.change( this );\\n    }\\n\\n    public void setSound(String sound) {\\n        this.sound = sound;\\n    }\\n\\n    public void loadSoundCard(){\\n        System.out.println( \\"load sound\\" + sound );\\n    }\\n\\n}\\n\\n/**\\n * 中介者模式\\n * 多对多转化为一对多\\n */\\npublic class MainBoard implements Mediaor {\\n\\n    private CDDevice cdDevice; //光驱设备\\n    private CPU cpu; //CPU\\n    private SoundCard soundCard; //声卡设备\\n\\n    public void setCdDevice(CDDevice cdDevice) {\\n        this.cdDevice = cdDevice;\\n    }\\n\\n    public void setCpu(CPU cpu) {\\n        this.cpu = cpu;\\n    }\\n\\n    public void setSoundCard(SoundCard soundCard) {\\n        this.soundCard = soundCard;\\n    }\\n\\n    @Override\\n    public void change(Colleague colleague) {\\n        if (colleague instanceof CDDevice) {\\n            ((CDDevice) colleague).loadCD();\\n        } else if (colleague instanceof CPU) {\\n            ((CPU) colleague).loadCPU();\\n        } else if (colleague instanceof SoundCard) {\\n            ((SoundCard) colleague).loadSoundCard();\\n        }\\n    }\\n\\n}\\n\\n/**\\n * 从多对多网状关系\\n * 变成一对多\\n *\\n */\\npublic class TestMain {\\n\\n    public static void main(String[] args){\\n\\n        MainBoard mediator = new MainBoard();\\n\\n        CPU cpu = new CPU( mediator );\\n        CDDevice cdDevice = new CDDevice( mediator );\\n        SoundCard soundCard = new SoundCard( mediator );\\n\\n        mediator.setCdDevice( cdDevice );\\n        mediator.setCpu( cpu );\\n        mediator.setSoundCard( soundCard );\\n\\n        cdDevice.action();\\n\\n    }\\n\\n}\\n\\n</code></pre></div>","autoDesc":true}');export{o as comp,m as data};
