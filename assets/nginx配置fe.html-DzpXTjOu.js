import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,f as i}from"./app-CtvCwAmI.js";const a={},t=i(`<h3 id="本文未验证" tabindex="-1"><a class="header-anchor" href="#本文未验证"><span>本文未验证</span></a></h3><p>Nginx配置fe</p><p>本文为大家介绍了<em>CentOS</em> 7 64位 安装 <em>nginx</em>与跨域配置 的详细步骤</p><p>Nginx官方提供了Yum源</p><h2 id="_1、安装nginx" tabindex="-1"><a class="header-anchor" href="#_1、安装nginx"><span>1、安装nginx</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、启动nginx并设置开机自动运行" tabindex="-1"><a class="header-anchor" href="#_2、启动nginx并设置开机自动运行"><span>2、启动Nginx并设置开机自动运行</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start nginx.service
systemctl <span class="token builtin class-name">enable</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、配置nginx" tabindex="-1"><a class="header-anchor" href="#_3、配置nginx"><span>3、配置nginx</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用上面的命令编辑nginx的配置文件，先把配置文件中的server注释掉，然后添加下面的语句</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>#小程序接口的域名配置，小程序规定要https，填写对应域名，并把https证书上传至服务器
server {
        listen 443;
        server_name mall4j-api.gz-yami.com;
        ssl on;
        ssl_certificate     /usr/share/nginx/cert/xxxxxxxxxxxxxxxx.pem;
		ssl_certificate_key /usr/share/nginx/cert/xxxxxxxxxxxxxxxx.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        location / {
            proxy_pass http://127.0.0.1:8112;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }

#后台域名配置，后台vue页面代码上传至 /usr/share/nginx/admin
server {
    listen       80;
	server_name  mall4j-admin.gz-yami.com;
    root         /usr/share/nginx/admin;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
    }
        
	# 跨域配置
	location /apis {
		rewrite  ^/apis/(.*)$ /$1 break;
		proxy_pass   http://127.0.0.1:8111;
    }
        
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、重启nginx-让配置生效" tabindex="-1"><a class="header-anchor" href="#_4、重启nginx-让配置生效"><span>4、重启nginx，让配置生效</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5、配置vue项目" tabindex="-1"><a class="header-anchor" href="#_5、配置vue项目"><span>5、配置vue项目</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name cloud-platform.mall4j.com<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /<span class="token punctuation">;</span>
        root /usr/share/nginx/html/dist<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /404-light.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[t];function r(d,c){return e(),s("div",null,l)}const p=n(a,[["render",r],["__file","nginx配置fe.html.vue"]]),u=JSON.parse('{"path":"/server/env/nginx%E9%85%8D%E7%BD%AEfe.html","title":"Nginx配置fe","lang":"zh-CN","frontmatter":{"title":"Nginx配置fe","date":"2024-03-24T11:47:50.000Z","order":14,"category":["server"],"tag":["env"],"description":"本文未验证 Nginx配置fe 本文为大家介绍了CentOS 7 64位 安装 nginx与跨域配置 的详细步骤 Nginx官方提供了Yum源 1、安装nginx 2、启动Nginx并设置开机自动运行 3、配置nginx 使用上面的命令编辑nginx的配置文件，先把配置文件中的server注释掉，然后添加下面的语句 4、重启nginx，让配置生效 5、...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/server/env/nginx%E9%85%8D%E7%BD%AEfe.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"Nginx配置fe"}],["meta",{"property":"og:description","content":"本文未验证 Nginx配置fe 本文为大家介绍了CentOS 7 64位 安装 nginx与跨域配置 的详细步骤 Nginx官方提供了Yum源 1、安装nginx 2、启动Nginx并设置开机自动运行 3、配置nginx 使用上面的命令编辑nginx的配置文件，先把配置文件中的server注释掉，然后添加下面的语句 4、重启nginx，让配置生效 5、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T06:23:39.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"env"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T06:23:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx配置fe\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-04-27T06:23:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[{"level":3,"title":"本文未验证","slug":"本文未验证","link":"#本文未验证","children":[]},{"level":2,"title":"1、安装nginx","slug":"_1、安装nginx","link":"#_1、安装nginx","children":[]},{"level":2,"title":"2、启动Nginx并设置开机自动运行","slug":"_2、启动nginx并设置开机自动运行","link":"#_2、启动nginx并设置开机自动运行","children":[]},{"level":2,"title":"3、配置nginx","slug":"_3、配置nginx","link":"#_3、配置nginx","children":[]},{"level":2,"title":"4、重启nginx，让配置生效","slug":"_4、重启nginx-让配置生效","link":"#_4、重启nginx-让配置生效","children":[]},{"level":2,"title":"5、配置vue项目","slug":"_5、配置vue项目","link":"#_5、配置vue项目","children":[]}],"git":{"createdTime":1714199019000,"updatedTime":1714199019000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"server/env/nginx配置fe.md","localizedDate":"2024年3月24日","excerpt":"<h3>本文未验证</h3>\\n<p>Nginx配置fe</p>\\n<p>本文为大家介绍了<em>CentOS</em> 7 64位 安装 <em>nginx</em>与跨域配置 的详细步骤</p>\\n<p>Nginx官方提供了Yum源</p>\\n<h2>1、安装nginx</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token function\\">install</span> <span class=\\"token parameter variable\\">-y</span> nginx\\n</code></pre></div>","autoDesc":true}');export{p as comp,u as data};
