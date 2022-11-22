---
title: "使用statcount做静态网站全平台访问统计"
subtitle: ""
date: 2022-10-05T09:22:13+08:00

lastmod: 2022-10-28T10:22:13+08:00
draft: false
description: "使用statcount提供的免费服务做静态网站全平台访问统计"
tags:
- hugo
- 访问统计
categories:
- 静态博客
featuredImage: ""
featuredImagePreview: ""

author: "Kingpo"
authorLink: ""
authorEmail: ""

keywords:
- statcount
- 访问量统计

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
hugo静态博客搭建后，我用的是FixIt主题，网站的访问统计采用不蒜子的统计方案，可以在底部开启访客数量和页面访问量，使用很方便。

但是存在三个问题：
1. 不蒜子时好时坏，经常间歇性不正常。尤其在文章页面访问量显示。
2. 无法查看所有访问统计明细，每天每月的访问量等。
3. 基于github pages多平台部署的站点访问量是分开统计的，不能合并显示。

对于第一个问题，我直接换用评论系统valine的访问量统计。
对于第二三个问题，我在[武大路飞的博客](https://whuwangyong.github.io/)里找到了解决方案，使用statcounter做访问量统计，经过一番讨教和研究，实现了这个方案，解决了这两个问题。


## statcounter
StatCounter是美国的一家著名网站流量统计服务商，其提供的免费版网站流量统计和收费版功能一样强大，只是限制每月统计页面访问量不超过100,000、日志尺寸不超过500，因此它采用免费网站流量统计服务仅适合访问量不大的网站，对于个人站点完全足够。你可StatCounter还可以当做计数器使用，你也可以隐藏统计图标，可以查看各种类型的访问报告，包括年月日访问量，访客ip国别等等。并且对于我基于github pages页面多平台部署的站点访问量是累计的，这点非常符合我的需求。

![](https://s3.bmp.ovh/imgs/2022/10/05/7367615351430187.png)

## 配置统计
statcounter官网：https://statcounter.com/

配置过程是比较简单的，本质是将statcounter提供的代码添加到你网站的所有页面中即可，但是有些坑要注意。

### 注册获取验证代码
1. statcounter注册账号
去官网注册账号，无需绑定信用卡等支付信息。

2. 添加项目，选择免费套餐，输入你网站地址，项目名称，选择电子邮件报告频次，设置时区Time Zone为上海，设置Counter/Button统计数据为是否可见。**这里要注意：** Counter/Button统计数据即你设置在网站页面是否显示，none为隐藏，我们可见要设置为【可见的计数器】，我就是因为前面这里没设好，默认是none隐藏，页面不显示访问数字，当时找了好久的原因，这个坑要规避。计数器可自定义显示样式和logo以及是否开启超链接，根据个人喜好去配置。
 ![](https://s3.bmp.ovh/imgs/2022/10/05/6f0000559434cb88.png)

3. 平台选择默认，继续，复制验证代码到你的静态网站，所有页面添加（找个模板页即可）。然后回到statcounter进行验证，验证通过即完成。
{{< admonition note >}}
在配置里，修改统计显示样式后，验证代码会更新重新生成，需要重新填写验证代码到发布站点里。
{{< /admonition >}}

![](https://s3.bmp.ovh/imgs/2022/10/05/7d37aa27d334b75f.png)
![](https://s3.bmp.ovh/imgs/2022/10/05/050ca223e5ca0bb3.png)

### 站点填写验证代码
我用hugo博客FixIt主题，验证代码直接添加在`config.toml`里的页面底部信息位置，参看以下自定义内容。这里注意，toml配置里，html验证代码段要用"""圈起来，你可以调整要显示文字信息。
```toml
# 页面底部信息配置

[params.footer]

enable = true

#  自定义内容（支持 HTML 格式）

custom = """

<!-- Default Statcounter code for blog https://zhjin.eu.org/

-->

<a href="https://statcounter.com/p12800592/?guest=1" target="_blank">全平台总访问统计</a>

<script type="text/javascript">

var sc_project=xxx;

var sc_invisible=0;

var sc_security="xxx";

var scJsHost = "https://";

document.write("<sc"+"ript type='text/javascript' src='" +

scJsHost+

"statcounter.com/counter/counter.js'></"+"script>");

</script>

<noscript><div class="statcounter"><a title="web stats"

href="https://statcounter.com/" target="_blank"><img

referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>

<!-- End of Statcounter Code -->
      """
```

## 查看效果
验证代码填写并回到statcounter验证生效后，回到你个人网站，即可看到效果。

![](https://s3.bmp.ovh/imgs/2022/10/05/a4f4c8ca7b3089f2.png)

我这个博客是通过上传github，触发github action自动部署到github pages，其余cloudflare，render，vercel，netlify都是从github pages同步过去，因此站点都是同一份页面，托管于不同平台，statcounter的统计是叠加的。

## 其他
statcounter管理端还有许多功能，页面访问统计显示你可以设置显示访客数或是访问量，查看各类统计报告等。

## 参考
> https://whuwangyong.github.io/2022-09-29-use-statcounter-to-get-access-statistics/