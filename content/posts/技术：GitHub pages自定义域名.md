---
title: "GitHub pages配置自定义域名利用Cloudflare全球CDN"
subtitle: ""
date: 2022-09-28T17:12:26+08:00
lastmod: 2022-09-28T17:12:26+08:00

author: "Kingpo"
authorLink: ""
authorEmail: ""
description: "GitHub pages提供域名可供使用，但是国内访问很慢，通过cloudflare域名解析配置自定义域名，可以利用其cdn加速访问。"
keywords: ""
comment: true
weight: 0

draft: false

tags:
- GitHub
categories:
- 静态博客

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 关于GitHub pages
GitHub pages是github提供免费静态站点托管服务，并提供域名`xxx.github.io`，xxx是你GitHub账户的名称。一个账户只能托管一个GitHub pages项目。

官方文档介绍如下：
>GitHub Pages 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。 可以在 [GitHub Pages 示例集合](https://github.com/collections/github-pages-examples)中看到 GitHub Pages 站点的示例。
>
>你可以在 GitHub 的 `github.io` 域或自己的自定义域上托管站点。 有关详细信息，请参阅“[将自定义域与 GitHub Pages 配合使用](https://docs.github.com/cn/articles/using-a-custom-domain-with-github-pages)”。

## 关于Cloudflare

>**Cloudflare**（Cloudflare, Inc.）是一家总部位于[旧金山](https://zh.wikipedia.org/wiki/%E8%88%8A%E9%87%91%E5%B1%B1 "旧金山")的美国跨国科技企业，以向客户提供基于[反向代理](https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86 "反向代理")的[内容分发网络](https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF "内容分发网络")（Content Delivery Network, CDN）及[分布式域名解析服务](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F "域名系统")（Distributed Domain Name Server）为主要业务。

我们主要用到他两个服务：

**域名服务器**
> [任一传播网络](https://zh.wikipedia.org/wiki/%E4%BB%BB%E6%92%AD "任播")的免费[域名服务器](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F "域名系统")（DNS）。根据[W3Cook](https://zh.wikipedia.org/w/index.php?title=W3Cook&action=edit&redlink=1 "W3Cook（页面不存在）")，Cloudflare的DNS服务目前所服务的对象超过受管理DNS网域的35%。[SolveDNS](https://zh.wikipedia.org/w/index.php?title=SolveDNS&action=edit&redlink=1 "SolveDNS（页面不存在）")发现Cloudflare能持续提供全球数一数二的 DNS 查阅速度，在2016年4月回报的查阅速度为8.66毫秒。[[23]](https://zh.wikipedia.org/wiki/Cloudflare#cite_note-23)

**内容分发网络(CDN)**
> Cloudflare的网络在全球拥有许多连线到互联网交换点的连线。Cloudflare会将内容缓存到其边缘位置，以扮演内容提供网络（CDN）的角色，所有要求接着会透过Cloudflare进行反向[Proxy](https://zh.wikipedia.org/wiki/Proxy "Proxy")处理，并直接从Cloudflare提供缓存的内容。

>Cloudflare推出了中国大陆地区的服务，帮助所有企业改善他们的互联网应用的性能及安全并扩展其全球业务。Cloudflare最初以[百度](https://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6 "百度")为合作伙伴，但之后转而与[京东](https://zh.wikipedia.org/wiki/%E4%BA%AC%E6%9D%B1_(%E7%B6%B2%E7%AB%99) "京东 (网站)")云合作。Cloudflare和[京东云](https://zh.wikipedia.org/w/index.php?title=%E4%BA%AC%E4%B8%9C%E4%BA%91&action=edit&redlink=1 "京东云（页面不存在）")的合作节点预计将在2023年扩展到中国大陆的150个地点。

## 准备工作
一个GitHub pages站点，一个自己的域名，并交由cloudflare提供域名解析服务。

## 自定义域名配置
1. 进到GitHub pages项目，setting设置，

2. cloudflare域名添加一条A记录，根域名指向`xxx.gitHub.io`的ip，目前GitHub pages的服务器为以下四个：
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

ping以下自己的`github.io`，即可查看，ip在四个里随机变化。

![](https://s3.bmp.ovh/imgs/2022/09/28/49163b5c22c497b1.png)

3. cloudflare里的域名添加一条www的CNAME记录，指向你自己的github.io域名`xxx.github.io`。


参考资料：
> github docs https://docs.github.com/cn/pages/getting-started-with-github-pages/about-github-pages   
> Cloudflare https://zh.wikipedia.org/wiki/Cloudflare
> 