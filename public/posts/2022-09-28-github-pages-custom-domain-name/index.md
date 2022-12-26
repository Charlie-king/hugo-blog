# GitHub pages配置自定义域名利用Cloudflare全球CDN


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
- 一个GitHub pages站点。
- 一个自己的域名，并交由cloudflare提供域名解析服务。

个人域名可以购买国内外域名服务商的域名，区别是国内的域名的需要备案，国外不用。

免费的域名注册，目前据我收集到的市面有两个渠道，一个**freenom**，一个**eu.org**。

**freenom**可以注册.tk、.ml、.ga、.cf、.gq这些免费顶级域名，有效期1年，一年到期前一周可续，否则会被回收。

**eu.org** 是欧盟推出的免费域名服务，从1996年至今，虽是二级域名，但完全可以当一级域名使用，永久免费。我回头再整理一个教程。

## 自定义域名配置
### DNS解析配置
ping自己的github pages域名`xxx.github.io`，可查看它的ip，当前github io服务器为以下4个，ip在四个里随机变化。

![](https://s3.bmp.ovh/imgs/2022/09/28/49163b5c22c497b1.png)

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

进到cloudflare管理平台，域名管理添加一条www的CNAME记录，指向你自己的github.io域名`xxx.github.io`。这一步可以将你的个人域名转向`xxx.github.io`，io域名再去解析到那4个ip中的一个。

或者直接添加4条A记录，将你跟域名直接指向上面4个ip。这步使你个人域名直接转向github.io的ip。

github官方的建议是采用添加CNAME记录，这样github.io的ip变化后不会不会受影响。
![](https://s3.bmp.ovh/imgs/2022/10/04/9f3ad9f96fb55a20.png)


### github配置

1.  在你github pages项目根目录，添加一个文件名为CNAME文件（注意文件不要有后缀），
文件里输入你DNS配置的个人域名。即可完成。
![](https://s3.bmp.ovh/imgs/2022/10/03/948e4b01e19aabcf.png)


2.  你也可以直接进到个人GitHub pages那个项目，GitHub pages -> setting设置，custom domain里添加保存你个人域名。这个操作实际对应也是生成1步骤的CNAME文件。效果一样的。
![](https://s3.bmp.ovh/imgs/2022/10/03/7ba48e38c264d283.png)



**注意：** 如果你github pages静态网站是通过github action自动编译生成的话，需要在编译前的项目对应的生成pages的根目录里添加这个CNAME文件，因为每次编译生成都会清空你原GitHub pages项内容，主流静态博客（hugo，hexo等）的话基本是static目录，这个目录的文件编译后全部都在生成的静态网站根目录里。

通过以上配置，等域名配置生效后，一般需要24小时，不过我设置后一会就直接生效，即可通过个人域名访问，cloudflare配置域名默认启用cdn代理，速度会比直接访问github.io快很多。

我们可以ping一下配置后个人域名的地址，会发现已经不是github.io的那4个了，而是cloudflare的cdn代理服务器。

![](https://s3.bmp.ovh/imgs/2022/10/03/af31c01ce6029d6d.png)

{{< admonition tip "关于无法Enforce HTTPS">}}
配置到这里，大家会发现无法启用github的强制https，这是因为cloudflare默认启用了http/dns代理功能，也就是cdn代理，导致github无法查看生成https证书所需的dns记录，对于指向github的任何dns记录，都要禁用该选项，才能启用Enforce HTTPS。

不过你在的cloudflare上直接启用https即可，这里本来就要利用它的cdn来进行访问加速。
{{< /admonition >}}


## 参考资料：
> github docs https://docs.github.com/cn/pages/getting-started-with-github-pages/about-github-pages   
> Cloudflare https://zh.wikipedia.org/wiki/Cloudflare
> GitHub Pages自定义域名使用Cloudflare无法Enforce HTTPS解决方法 https://blog.imfang.net/web/118.html

---

> 作者: Kingpo  
> URL: https://ttzz.eu.org/posts/2022-09-28-github-pages-custom-domain-name/  

