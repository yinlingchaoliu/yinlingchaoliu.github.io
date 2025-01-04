import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as s}from"./app-CtvCwAmI.js";const r={},t=s(`<h4 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义"><span>1、定义</span></a></h4><p><code>解释器模式：定义一个语言，定义它的文法的一种表示，并定义一个解释器 </code></p><h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 计算
 */
public interface IArithemticExpression {
    //计算
    int interpreter();
}

/**
 * 数字
 */
public class NumExpression implements IArithemticExpression{

    private int num;

    public NumExpression(int num){
        this.num = num;
    }

    @Override
    public int interpreter() {
        return num;
    }

}

/**
 * 加法
 */
public class AdditionExpression implements IArithemticExpression{

    private IArithemticExpression exp1,exp2;

    public AdditionExpression(IArithemticExpression exp1,IArithemticExpression exp2){
        this.exp1 = exp1;
        this.exp2 = exp2;
    }

    @Override
    public int interpreter() {
        return exp1.interpreter() + exp2.interpreter();
    }
}

/**
 * 减法
 */
public class SubtractionExpression implements IArithemticExpression{

    private IArithemticExpression exp1,exp2;

    public SubtractionExpression(IArithemticExpression exp1, IArithemticExpression exp2){
        this.exp1 = exp1;
        this.exp2 = exp2;
    }

    @Override
    public int interpreter() {
        return exp1.interpreter() - exp2.interpreter();
    }
}

public class Calculator implements IArithemticExpression{

    private Stack&lt;IArithemticExpression&gt; mExpStack = new Stack&lt;&gt;();

    public Calculator(String expression){

        String[] elements = expression.split(&quot; &quot;);

        for(int i= 0 ;i &lt; elements.length;i++){

            switch (elements[i].charAt(0)){

                case &#39;+&#39;:
                    IArithemticExpression exp1 = mExpStack.pop();
                    IArithemticExpression exp2 = new NumExpression(Integer.parseInt(elements[++i]));
                    mExpStack.push( new AdditionExpression( exp1,exp2 ) );
                    break;

                case &#39;-&#39;:
                    IArithemticExpression exp3 = mExpStack.pop();
                    IArithemticExpression exp4 = new NumExpression(Integer.parseInt(elements[++i]));
                    mExpStack.push( new SubtractionExpression( exp3,exp4 ) );
                    break;

                default:
                    mExpStack.push(new NumExpression(Integer.valueOf(elements[i])));
                    break;

            }

        }

    }

    /**
     * 计算
     * @return
     */
    @Override
    public int interpreter() {
        int tmp = 0;
        for (IArithemticExpression exp : mExpStack){
            tmp = tmp + exp.interpreter();
        }
        return tmp;
    }
}

/**
 *
 * 解释器模式
 * 计算器 文法分析
 * 1、词法分析
 * 2、计算策略
 * 解释与执行分离
 *
 */
public class TestMain {

    public static void main(String[] args) {

        //计算器
        Calculator calculator = new Calculator( &quot;1 + 2 - 5 + 6 + 7&quot; );
        calculator.interpreter();

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><p>https://github.com/yinlingchaoliu/23-design-pattern</p>`,6),l=[t];function d(a,c){return e(),i("div",null,l)}const m=n(r,[["render",d],["__file","设计模式-行为型-解释器模式.html.vue"]]),u=JSON.parse(`{"path":"/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html","title":"设计模式-行为型-解释器模式","lang":"zh-CN","frontmatter":{"title":"设计模式-行为型-解释器模式","date":"2024-03-24T11:47:50.000Z","category":["设计模式"],"tag":["archive"],"description":"1、定义 解释器模式：定义一个语言，定义它的文法的一种表示，并定义一个解释器 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/basis/design-pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"设计模式-行为型-解释器模式"}],["meta",{"property":"og:description","content":"1、定义 解释器模式：定义一个语言，定义它的文法的一种表示，并定义一个解释器 写法 代码示例 https://github.com/yinlingchaoliu/23-design-pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式-行为型-解释器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"basis/design-pattern/设计模式-行为型-解释器模式.md","localizedDate":"2024年3月24日","excerpt":"<h4>1、定义</h4>\\n<p><code>解释器模式：定义一个语言，定义它的文法的一种表示，并定义一个解释器 </code></p>\\n<h4>写法</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>/**\\n * 计算\\n */\\npublic interface IArithemticExpression {\\n    //计算\\n    int interpreter();\\n}\\n\\n/**\\n * 数字\\n */\\npublic class NumExpression implements IArithemticExpression{\\n\\n    private int num;\\n\\n    public NumExpression(int num){\\n        this.num = num;\\n    }\\n\\n    @Override\\n    public int interpreter() {\\n        return num;\\n    }\\n\\n}\\n\\n/**\\n * 加法\\n */\\npublic class AdditionExpression implements IArithemticExpression{\\n\\n    private IArithemticExpression exp1,exp2;\\n\\n    public AdditionExpression(IArithemticExpression exp1,IArithemticExpression exp2){\\n        this.exp1 = exp1;\\n        this.exp2 = exp2;\\n    }\\n\\n    @Override\\n    public int interpreter() {\\n        return exp1.interpreter() + exp2.interpreter();\\n    }\\n}\\n\\n/**\\n * 减法\\n */\\npublic class SubtractionExpression implements IArithemticExpression{\\n\\n    private IArithemticExpression exp1,exp2;\\n\\n    public SubtractionExpression(IArithemticExpression exp1, IArithemticExpression exp2){\\n        this.exp1 = exp1;\\n        this.exp2 = exp2;\\n    }\\n\\n    @Override\\n    public int interpreter() {\\n        return exp1.interpreter() - exp2.interpreter();\\n    }\\n}\\n\\npublic class Calculator implements IArithemticExpression{\\n\\n    private Stack&lt;IArithemticExpression&gt; mExpStack = new Stack&lt;&gt;();\\n\\n    public Calculator(String expression){\\n\\n        String[] elements = expression.split(\\" \\");\\n\\n        for(int i= 0 ;i &lt; elements.length;i++){\\n\\n            switch (elements[i].charAt(0)){\\n\\n                case '+':\\n                    IArithemticExpression exp1 = mExpStack.pop();\\n                    IArithemticExpression exp2 = new NumExpression(Integer.parseInt(elements[++i]));\\n                    mExpStack.push( new AdditionExpression( exp1,exp2 ) );\\n                    break;\\n\\n                case '-':\\n                    IArithemticExpression exp3 = mExpStack.pop();\\n                    IArithemticExpression exp4 = new NumExpression(Integer.parseInt(elements[++i]));\\n                    mExpStack.push( new SubtractionExpression( exp3,exp4 ) );\\n                    break;\\n\\n                default:\\n                    mExpStack.push(new NumExpression(Integer.valueOf(elements[i])));\\n                    break;\\n\\n            }\\n\\n        }\\n\\n    }\\n\\n    /**\\n     * 计算\\n     * @return\\n     */\\n    @Override\\n    public int interpreter() {\\n        int tmp = 0;\\n        for (IArithemticExpression exp : mExpStack){\\n            tmp = tmp + exp.interpreter();\\n        }\\n        return tmp;\\n    }\\n}\\n\\n/**\\n *\\n * 解释器模式\\n * 计算器 文法分析\\n * 1、词法分析\\n * 2、计算策略\\n * 解释与执行分离\\n *\\n */\\npublic class TestMain {\\n\\n    public static void main(String[] args) {\\n\\n        //计算器\\n        Calculator calculator = new Calculator( \\"1 + 2 - 5 + 6 + 7\\" );\\n        calculator.interpreter();\\n\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}`);export{m as comp,u as data};
