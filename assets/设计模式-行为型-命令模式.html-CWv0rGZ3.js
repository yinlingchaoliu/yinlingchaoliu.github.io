import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as d}from"./app-CtvCwAmI.js";const m={},l=d(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>命令模式：将命令请求封装成一个对象，可以将不同请求来进行参数化</code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface IReceive {

    void toLeft();
    void toRight();
    void toUp();
    void toDown();

}

/**
 * 真正引擎
 */
public class Receive implements IReceive{

    public void toLeft(){
        System.out.println(&quot;向左&quot;);
    }

    public void toRight(){
        System.out.println(&quot;向右&quot;);
    }

    public void toUp(){
        System.out.println(&quot;向上&quot;);
    }

    public void toDown(){
        System.out.println(&quot;向下&quot;);
    }

}

public interface ICommand {
    void execute();
}

public class UpCommand implements ICommand {

    private Receive receive;

    public UpCommand(Receive receive){
        this.receive = receive;
    }

    @Override
    public void execute() {
        receive.toUp();
    }
}
public class DownCommand implements ICommand {

    private Receive receive;

    public DownCommand(Receive receive){
        this.receive = receive;
    }

    @Override
    public void execute() {
        receive.toDown();
    }
}
public class LeftCommand implements ICommand {

    private Receive receive;

    public LeftCommand(Receive receive){
        this.receive = receive;
    }

    @Override
    public void execute() {
        receive.toLeft();
    }
}

public class RightCommand implements ICommand {

    private Receive receive;

    public RightCommand(Receive receive){
        this.receive = receive;
    }

    @Override
    public void execute() {
        receive.toRight();
    }
}

public class Button implements IReceive{

    private LeftCommand leftCommand;
    private RightCommand rightCommand;
    private UpCommand upCommand;
    private DownCommand downCommand;

    public void setLeftCommand(LeftCommand leftCommand) {
        this.leftCommand = leftCommand;
    }

    public void setRightCommand(RightCommand rightCommand) {
        this.rightCommand = rightCommand;
    }

    public void setUpCommand(UpCommand upCommand) {
        this.upCommand = upCommand;
    }

    public void setDownCommand(DownCommand downCommand) {
        this.downCommand = downCommand;
    }

    @Override
    public void toLeft() {
        leftCommand.execute();
    }

    @Override
    public void toRight() {
        rightCommand.execute();
    }

    @Override
    public void toUp() {
        upCommand.execute();
    }

    @Override
    public void toDown() {
        downCommand.execute();
    }
}

/**
 * 命令模式
 *
 * 添加一层命令，便于记录
 *
 * 多对一
 *
 */
public class Player {

    public static void main(String[] args) {

        //接收者
        Receive receive = new Receive();

        //命令
        LeftCommand leftCommand = new LeftCommand( receive );
        RightCommand rightCommand = new RightCommand( receive );
        UpCommand upCommand = new UpCommand( receive );
        DownCommand downCommand = new DownCommand( receive );

        //发送者
        Button button = new Button();
        button.setLeftCommand( leftCommand );
        button.setRightCommand( rightCommand );
        button.setDownCommand( downCommand );
        button.setUpCommand( upCommand );

        //调用
        button.toLeft();
        button.toRight();
        button.toDown();
        button.toUp();

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),v=[l];function s(a,t){return e(),i("div",null,v)}const o=n(m,[["render",s],["__file","设计模式-行为型-命令模式.html.vue"]]),u=JSON.parse('{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-命令模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-命令模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 命令模式：将命令请求封装成一个对象，可以将不同请求来进行参数化 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-命令模式"}],["meta",{"property":"og:description","content":"1、定义 命令模式：将命令请求封装成一个对象，可以将不同请求来进行参数化 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-命令模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":342},"filePathRelative":"basis/design-pattern/设计模式-行为型-命令模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>命令模式：将命令请求封装成一个对象，可以将不同请求来进行参数化</code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public interface IReceive {\\n\\n    void toLeft();\\n    void toRight();\\n    void toUp();\\n    void toDown();\\n\\n}\\n\\n/**\\n * 真正引擎\\n */\\npublic class Receive implements IReceive{\\n\\n    public void toLeft(){\\n        System.out.println(\\"向左\\");\\n    }\\n\\n    public void toRight(){\\n        System.out.println(\\"向右\\");\\n    }\\n\\n    public void toUp(){\\n        System.out.println(\\"向上\\");\\n    }\\n\\n    public void toDown(){\\n        System.out.println(\\"向下\\");\\n    }\\n\\n}\\n\\npublic interface ICommand {\\n    void execute();\\n}\\n\\npublic class UpCommand implements ICommand {\\n\\n    private Receive receive;\\n\\n    public UpCommand(Receive receive){\\n        this.receive = receive;\\n    }\\n\\n    @Override\\n    public void execute() {\\n        receive.toUp();\\n    }\\n}\\npublic class DownCommand implements ICommand {\\n\\n    private Receive receive;\\n\\n    public DownCommand(Receive receive){\\n        this.receive = receive;\\n    }\\n\\n    @Override\\n    public void execute() {\\n        receive.toDown();\\n    }\\n}\\npublic class LeftCommand implements ICommand {\\n\\n    private Receive receive;\\n\\n    public LeftCommand(Receive receive){\\n        this.receive = receive;\\n    }\\n\\n    @Override\\n    public void execute() {\\n        receive.toLeft();\\n    }\\n}\\n\\npublic class RightCommand implements ICommand {\\n\\n    private Receive receive;\\n\\n    public RightCommand(Receive receive){\\n        this.receive = receive;\\n    }\\n\\n    @Override\\n    public void execute() {\\n        receive.toRight();\\n    }\\n}\\n\\npublic class Button implements IReceive{\\n\\n    private LeftCommand leftCommand;\\n    private RightCommand rightCommand;\\n    private UpCommand upCommand;\\n    private DownCommand downCommand;\\n\\n    public void setLeftCommand(LeftCommand leftCommand) {\\n        this.leftCommand = leftCommand;\\n    }\\n\\n    public void setRightCommand(RightCommand rightCommand) {\\n        this.rightCommand = rightCommand;\\n    }\\n\\n    public void setUpCommand(UpCommand upCommand) {\\n        this.upCommand = upCommand;\\n    }\\n\\n    public void setDownCommand(DownCommand downCommand) {\\n        this.downCommand = downCommand;\\n    }\\n\\n    @Override\\n    public void toLeft() {\\n        leftCommand.execute();\\n    }\\n\\n    @Override\\n    public void toRight() {\\n        rightCommand.execute();\\n    }\\n\\n    @Override\\n    public void toUp() {\\n        upCommand.execute();\\n    }\\n\\n    @Override\\n    public void toDown() {\\n        downCommand.execute();\\n    }\\n}\\n\\n/**\\n * 命令模式\\n *\\n * 添加一层命令，便于记录\\n *\\n * 多对一\\n *\\n */\\npublic class Player {\\n\\n    public static void main(String[] args) {\\n\\n        //接收者\\n        Receive receive = new Receive();\\n\\n        //命令\\n        LeftCommand leftCommand = new LeftCommand( receive );\\n        RightCommand rightCommand = new RightCommand( receive );\\n        UpCommand upCommand = new UpCommand( receive );\\n        DownCommand downCommand = new DownCommand( receive );\\n\\n        //发送者\\n        Button button = new Button();\\n        button.setLeftCommand( leftCommand );\\n        button.setRightCommand( rightCommand );\\n        button.setDownCommand( downCommand );\\n        button.setUpCommand( upCommand );\\n\\n        //调用\\n        button.toLeft();\\n        button.toRight();\\n        button.toDown();\\n        button.toUp();\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{o as comp,u as data};
