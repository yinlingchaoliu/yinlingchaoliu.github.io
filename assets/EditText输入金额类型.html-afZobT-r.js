import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,f as n}from"./app-CtvCwAmI.js";const s={},d=n(`<p>别废话，优雅解决</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class EditTextUtils {
    /**
     *  设置edittext只能输入小数点后两位
     */
    public static void afterDotTwo(final EditText editText) {
        editText.addTextChangedListener(new TextWatcher() {
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                // 限制最多能输入9位整数
                if (s.toString().contains(&quot;.&quot;)) {
                    if (s.toString().indexOf(&quot;.&quot;) &gt; 9) {
                        s = s.toString().subSequence(0,9) + s.toString().substring(s.toString().indexOf(&quot;.&quot;));
                        editText.setText(s);
                        editText.setSelection(9);
                    }
                }else {
                    if (s.toString().length() &gt; 9){
                        s = s.toString().subSequence(0,9);
                        editText.setText(s);
                        editText.setSelection(9);
                    }
                }
                // 判断小数点后只能输入两位
                if (s.toString().contains(&quot;.&quot;)) {
                    if (s.length() - 1 - s.toString().indexOf(&quot;.&quot;) &gt; 2) {
                        s = s.toString().subSequence(0,
                                s.toString().indexOf(&quot;.&quot;) + 3);
                        editText.setText(s);
                        editText.setSelection(s.length());
                    }
                }
                //如果第一个数字为0，第二个不为点，就不允许输入
                if (s.toString().startsWith(&quot;0&quot;) &amp;&amp; s.toString().trim().length() &gt; 1) {
                    if (!s.toString().substring(1, 2).equals(&quot;.&quot;)) {
                        editText.setText(s.subSequence(0, 1));
                        editText.setSelection(1);
                        return;
                    }
                }
            }
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }
            @Override
            public void afterTextChanged(Editable s) {
                if (editText.getText().toString().trim() != null &amp;&amp; !editText.getText().toString().trim().equals(&quot;&quot;)) {
                    if (editText.getText().toString().trim().substring(0, 1).equals(&quot;.&quot;)) {
                        editText.setText(&quot;0&quot; + editText.getText().toString().trim());
                        editText.setSelection(1);
                    }
                }
            }
        });
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function l(a,o){return t(),i("div",null,r)}const v=e(s,[["render",l],["__file","EditText输入金额类型.html.vue"]]),m=JSON.parse('{"path":"/fe/android/Android%E7%9B%B8%E5%85%B3/EditText%E8%BE%93%E5%85%A5%E9%87%91%E9%A2%9D%E7%B1%BB%E5%9E%8B.html","title":"EditText输入金额类型","lang":"zh-CN","frontmatter":{"title":"EditText输入金额类型","date":"2024-03-24T11:47:50.000Z","category":["Android相关"],"tag":["archive"],"description":"别废话，优雅解决","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/Android%E7%9B%B8%E5%85%B3/EditText%E8%BE%93%E5%85%A5%E9%87%91%E9%A2%9D%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"EditText输入金额类型"}],["meta",{"property":"og:description","content":"别废话，优雅解决"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EditText输入金额类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"fe/android/Android相关/EditText输入金额类型.md","localizedDate":"2024年3月24日","excerpt":"<p>别废话，优雅解决</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public class EditTextUtils {\\n    /**\\n     *  设置edittext只能输入小数点后两位\\n     */\\n    public static void afterDotTwo(final EditText editText) {\\n        editText.addTextChangedListener(new TextWatcher() {\\n            @Override\\n            public void onTextChanged(CharSequence s, int start, int before, int count) {\\n                // 限制最多能输入9位整数\\n                if (s.toString().contains(\\".\\")) {\\n                    if (s.toString().indexOf(\\".\\") &gt; 9) {\\n                        s = s.toString().subSequence(0,9) + s.toString().substring(s.toString().indexOf(\\".\\"));\\n                        editText.setText(s);\\n                        editText.setSelection(9);\\n                    }\\n                }else {\\n                    if (s.toString().length() &gt; 9){\\n                        s = s.toString().subSequence(0,9);\\n                        editText.setText(s);\\n                        editText.setSelection(9);\\n                    }\\n                }\\n                // 判断小数点后只能输入两位\\n                if (s.toString().contains(\\".\\")) {\\n                    if (s.length() - 1 - s.toString().indexOf(\\".\\") &gt; 2) {\\n                        s = s.toString().subSequence(0,\\n                                s.toString().indexOf(\\".\\") + 3);\\n                        editText.setText(s);\\n                        editText.setSelection(s.length());\\n                    }\\n                }\\n                //如果第一个数字为0，第二个不为点，就不允许输入\\n                if (s.toString().startsWith(\\"0\\") &amp;&amp; s.toString().trim().length() &gt; 1) {\\n                    if (!s.toString().substring(1, 2).equals(\\".\\")) {\\n                        editText.setText(s.subSequence(0, 1));\\n                        editText.setSelection(1);\\n                        return;\\n                    }\\n                }\\n            }\\n            @Override\\n            public void beforeTextChanged(CharSequence s, int start, int count, int after) {\\n\\n            }\\n            @Override\\n            public void afterTextChanged(Editable s) {\\n                if (editText.getText().toString().trim() != null &amp;&amp; !editText.getText().toString().trim().equals(\\"\\")) {\\n                    if (editText.getText().toString().trim().substring(0, 1).equals(\\".\\")) {\\n                        editText.setText(\\"0\\" + editText.getText().toString().trim());\\n                        editText.setSelection(1);\\n                    }\\n                }\\n            }\\n        });\\n    }\\n\\n}\\n</code></pre></div>","autoDesc":true}');export{v as comp,m as data};
