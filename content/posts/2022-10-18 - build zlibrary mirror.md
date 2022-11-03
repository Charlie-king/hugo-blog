---
title: "2分钟免费自建你的专属z-library镜像站，找书没烦恼"
subtitle: ""
date: 2022-10-18T16:44:42+08:00

lastmod: 2022-11-02T22:44:42+08:00
draft: false
description: ""
tags:
- cloudflare
- book
categories:
- 工具
featuredImage: ""
featuredImagePreview: ""

author: "Kingpo"
authorLink: ""
authorEmail: ""

keywords: ""
comment: true
weight: 0


toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 前言
z-library是全球最大的电子书下载站，资源非常丰富。然而地址经常面临被封禁的问题，国内非常容易被墙，官方也在不断地变换地址。除了寻找别人所做的镜像站之外，另一种最方便的，就是自建镜像站。
![](https://s.imgkb.xyz/abcdocker/2022/10/18/08f91edc7aed9/08f91edc7aed9.png)

今天实操自建一个z-library的镜像站，摆脱被墙困扰，实现免翻下载。

## 准备工作

1. 一个自己的域名，可以申请免费域名。
2. 一个cloudflare账号，DNS解析托管到cloudflare。

## cloudflare配置
1. 登录cloudflare管理台后，选择worker，创建一个服务
![](https://s.imgkb.xyz/abcdocker/2022/11/02/64a01ee72d700/64a01ee72d700.png)

2. 选择http处理程序，服务名称你自定。这个服务名称xxx就是你这个cloudflare给你生成的三级域名，下面有行提示：您的服务将被部署到：https://xxx.aaaa.workers.dev，aaaa这里是你整个worker里定义名称。不过现在cloudflare提供的这个域名国内都被墙了，所以用不上，这也是我们要准备自己一个域名的原因。
![](https://s.imgkb.xyz/abcdocker/2022/11/02/1c2b93d3d6df0/1c2b93d3d6df0.png)

4. 创建完服务，进来点击【资源】--快速编辑，将下面代码替换原有代码，保存。
![](https://s.imgkb.xyz/abcdocker/2022/11/02/de3fef8bb7173/de3fef8bb7173.png)

![](https://s.imgkb.xyz/abcdocker/2022/11/02/726c961b3870d/726c961b3870d.png)

**覆盖添加的代码如下：**
```js

// 你要镜像的网站.
const upstream = 'zh.zlibrary.org'

// 镜像网站的目录，比如你想镜像某个网站的二级目录则填写二级目录的目录名，镜像 google 用不到，默认即可.
const upstream_path = '/'

// 镜像站是否有手机访问专用网址，没有则填一样的.
const upstream_mobile = 'zh.1lib.education'

// 屏蔽国家和地区.
const blocked_region = ['KP', 'SY', 'PK', 'CU']

// 屏蔽 IP 地址.
const blocked_ip_address = ['0.0.0.0', '127.0.0.1']

// 镜像站是否开启 HTTPS.
const https = true

// 文本替换.
const replace_dict = {
    '$upstream': '$custom_domain',
}

// 以下保持默认，不要动
addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})

async function fetchAndApply(request) {

    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const ip_address = request.headers.get('cf-connecting-ip');
    const user_agent = request.headers.get('user-agent');

    let response = null;
    let url = new URL(request.url);
    let url_hostname = url.hostname;

    if (https == true) {
        url.protocol = 'https:';
    } else {
        url.protocol = 'http:';
    }

    if (await device_status(user_agent)) {
        var upstream_domain = upstream;
    } else {
        var upstream_domain = upstream_mobile;
    }

    url.host = upstream_domain;
    if (url.pathname == '/') {
        url.pathname = upstream_path;
    } else {
        url.pathname = upstream_path + url.pathname;
    }

    if (blocked_region.includes(region)) {
        response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
            status: 403
        });
    } else if (blocked_ip_address.includes(ip_address)) {
        response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
            status: 403
        });
    } else {
        let method = request.method;
        let request_headers = request.headers;
        let new_request_headers = new Headers(request_headers);

        new_request_headers.set('Host', url.hostname);
        new_request_headers.set('Referer', url.hostname);

        let original_response = await fetch(url.href, {
            method: method,
            headers: new_request_headers
        })

        let original_response_clone = original_response.clone();
        let original_text = null;
        let response_headers = original_response.headers;
        let new_response_headers = new Headers(response_headers);
        let status = original_response.status;

        new_response_headers.set('access-control-allow-origin', '*');
        new_response_headers.set('access-control-allow-credentials', true);
        new_response_headers.delete('content-security-policy');
        new_response_headers.delete('content-security-policy-report-only');
        new_response_headers.delete('clear-site-data');

        const content_type = new_response_headers.get('content-type');
        if (content_type.includes('text/html') && content_type.includes('UTF-8')) {
            original_text = await replace_response_text(original_response_clone, upstream_domain, url_hostname);
        } else {
            original_text = original_response_clone.body
        }

        response = new Response(original_text, {
            status,
            headers: new_response_headers
        })
    }
    return response;
}

async function replace_response_text(response, upstream_domain, host_name) {
    let text = await response.text()

    var i, j;
    for (i in replace_dict) {
        j = replace_dict[i]
        if (i == '$upstream') {
            i = upstream_domain
        } else if (i == '$custom_domain') {
            i = host_name
        }

        if (j == '$upstream') {
            j = upstream_domain
        } else if (j == '$custom_domain') {
            j = host_name
        }

        let re = new RegExp(i, 'g')
        text = text.replace(re, j);
    }
    return text;
}


async function device_status(user_agent_info) {
    var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < agents.length; v++) {
        if (user_agent_info.indexOf(agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

```


5. 回到【触发器】--添加自定义域，添加自己的域名，这个域名需要先托管到cloudflare上。
![](https://s.imgkb.xyz/abcdocker/2022/11/02/09cb6d3997412/09cb6d3997412.png)

到此，镜像站已经完成，生效时间虽说24小时，实际一般很快，不到1分钟就生效。

## 其他
这里我们利用cloudflare提供的全球cdn，给我们做了代理。免费用户每天worker里服务可以有10万次请求，对于个人而言完全足够用。

需要注意，z-library对每个ip未登录用户每天有5次下载限制，如果你建立镜像站后出现过超过限制，很可能是cloudflare的代理ip的下载次数已经被人用完了。怎么解决呢，换个ip即可，或者最方便的找个修改ip的插件就可以继续用了。

### 改ip插件：
-  **PC浏览器插件（chrome，edge为主，chromium内核系列）：ModHeader。**

**使用：** ctrl+shift+h唤起插件，或者可以在插件主页里打开，修改请求头 `request headers`，选择`X-Forwarded-For`，后面自定义填写ip，ip在正确的IP地址范围即可 。

![](https://s.imgkb.xyz/abcdocker/2022/11/03/aa5c6ae0d05a1/aa5c6ae0d05a1.png)

- **安卓手机浏览器插件：** `Header Editor`，下载安装[Iceraven 浏览器](https://github.com/fork-maintainers/iceraven-browser)  ，附加组件搜索安装`Header Editor`，修改请求头，匹配类型填你的域名，执行类型`常规`，头名称选择`X-Forwarded-For`，后面自定义填写ip，保存，开启插件即可。

![](https://s.imgkb.xyz/abcdocker/2022/11/03/2258d6d08c242/2258d6d08c242.png)

这样你就拥有了自己的z-library镜像站，可以无限制的下载电子书资源了。

## 参考
> https://www.axutongxue.top/2022/09/8zlibrary.html