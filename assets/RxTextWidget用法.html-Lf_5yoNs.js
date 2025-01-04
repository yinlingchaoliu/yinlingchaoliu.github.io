import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,f as n}from"./app-CtvCwAmI.js";const d={},s=n(`<p>RxTextWidget用法</p><p>一组控件数据</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        textViewList.add( occupationTv );
        textViewList.add( regionTv );
        textViewList.add( workUnitEt );
        textViewList.add( detailedAddressEt );
        RxTextWidget.ObserveTv( textViewList, enable -&gt; {
            nextBtn.setEnabled( enable );
        } );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单个控件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        RxTextWidget.ObserveTv(smsCodeEt, enable -&gt; {
            nextBtn.setEnabled(enable);
        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 *
 * 基于RxAndroid的库
 * @author chentong
 * 监测多个edittextview
 *
 */
public class RxTextWidget {

    private static final BehaviorSubject&lt;String&gt; editTextOnTextChanged(final TextView editText) {
        final BehaviorSubject&lt;String&gt; subject = BehaviorSubject.create();

        editText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                subject.onNext(s.toString());
            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });
        // 初始化数据
        subject.onNext(editText.getText().toString());

        return subject;
    }

    @SuppressLint(&quot;CheckResult&quot;)
    private void Observon(BehaviorSubject&lt;String&gt; subject, Consumer&lt;String&gt; action) {
        subject.observeOn(AndroidSchedulers.mainThread()).subscribe(action);
    }

    private static List&lt;BehaviorSubject&lt;String&gt;&gt; getObsList(List&lt;TextView&gt; list) {
        List&lt;BehaviorSubject&lt;String&gt;&gt; obsList = new ArrayList&lt;BehaviorSubject&lt;String&gt;&gt;();
        for (TextView et : list) {
            TextView edittext = (TextView) et;
            obsList.add(editTextOnTextChanged(edittext));
        }
        return obsList;
    }

    @SuppressLint(&quot;CheckResult&quot;)
    private static void Observe(List&lt;BehaviorSubject&lt;String&gt;&gt; obsList, Consumer&lt;Boolean&gt; action) {

        Observable.combineLatest(obsList, new Function&lt;Object[],Boolean&gt;() {
            @Override
            public Boolean apply(Object[] objects) throws Exception {
                for (Object obj : objects) {
                    String s = (String) obj;
                    if (TextUtils.isEmpty(s)) {
                        return false;
                    }
                }
                return true;
            }

        }).observeOn(AndroidSchedulers.mainThread()).subscribe(action);

    }

    /**
     * 监测edittext  list
     * @param list
     * @param action
     */
    public static void ObserveTv(List&lt;TextView&gt; list, Consumer&lt;Boolean&gt; action){
        List&lt;BehaviorSubject&lt;String&gt;&gt;  behaviorSubjectList =  RxTextWidget.getObsList(list);
        RxTextWidget.Observe(behaviorSubjectList, action);
    }

    public static void ObserveTv(TextView textView, Consumer&lt;Boolean&gt; action){
        List&lt;TextView&gt; editTextList = new ArrayList&lt;&gt;(  );
        editTextList.add( textView );
        ObserveTv(editTextList , action);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[s];function a(r,v){return i(),t("div",null,l)}const o=e(d,[["render",a],["__file","RxTextWidget用法.html.vue"]]),b=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/RxTextWidget%E7%94%A8%E6%B3%95.html","title":"RxTextWidget用法","lang":"zh-CN","frontmatter":{"title":"RxTextWidget用法","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"RxTextWidget用法 一组控件数据 单个控件 实现代码","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/RxTextWidget%E7%94%A8%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"RxTextWidget用法"}],["meta",{"property":"og:description","content":"RxTextWidget用法 一组控件数据 单个控件 实现代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RxTextWidget用法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"fe/android/Android相关/RxTextWidget用法.md","localizedDate":"2024年3月24日","excerpt":"<p>RxTextWidget用法</p>\\n<p>一组控件数据</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>        textViewList.add( occupationTv );\\n        textViewList.add( regionTv );\\n        textViewList.add( workUnitEt );\\n        textViewList.add( detailedAddressEt );\\n        RxTextWidget.ObserveTv( textViewList, enable -&gt; {\\n            nextBtn.setEnabled( enable );\\n        } );\\n</code></pre></div>","autoDesc":true}');export{o as comp,b as data};
