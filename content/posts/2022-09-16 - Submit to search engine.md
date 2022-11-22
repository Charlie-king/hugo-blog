---
title: "个人博客或网站提交搜索引擎收录"
subtitle: ""
date: 2022-09-16T08:04:59+08:00
lastmod: 2022-09-16T18:04:59+08:00

author: "Kingpo"
authorLink: ""
authorEmail: ""
description: "把个人博客或网站提交给百度，必应，谷歌，360搜索收录"
keywords: 
- 搜索引擎收录
- 博客
- 网站
comment: true
weight: 0

draft: false

tags:
- hugo
- 搜索
categories:
- 静态博客

toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 前言
个人博客或网站搭建好后，要想有更多的曝光量，最好是让各大搜索引擎收录，，这样就能直接在搜索引擎上搜索到你的博客或网站的内容，检测是否被收录的方式：`site:你的网站域名`，比如我的`site:zhjin.eu.org`。一般新网站，搜索引擎自动收录的时间是比较长的，有的甚至不会被收录。解决方式是我们自动提交我们的站点给搜索引擎，搜索引擎都有收录链接提交入口。

这里我们以百度，谷歌，必应和360为例。

## 百度收录提交
百度提交入口：[https://ziyuan.baidu.com/linksubmit/url](https://ziyuan.baidu.com/linksubmit/url)

登录百度账号，输入站点提交，提交的站点需要验证，有三种方式可选。我的hugo博客主题里带有这个网站验证功能的，即这里的第二种模式的验证，不料设置后验证失败，最后我采取方式一。
1. 上传对应文件到站点根目录
2. 在首页标头加入百度这里提供的一段链接
3. 根据提示设置dns的cname指向

网站验证后，建议在普通收录里，添加一下自己sitemaps，也就是你站点里的网站地图，所有页面链接集合，这样相当于提交全站的内容给到搜索引擎。比如我的hugo博客在编译后是有直接生成这个文件的，位于根目录，(https://zhjin.eu.org/sitemap.xml)
![](https://s3.bmp.ovh/imgs/2022/09/16/d116791cc734b379.png)


## 必应收录提交
bing提交入口：[https://www.bing.com/toolbox/webmaster/](https://www.bing.com/toolbox/webmaster/)

bing收录过程和百度基本一样，选择手动添加网站，也是需要验证，验证模式和百度一样。

添加网站地图sitemaps，和百度类似。

![](https://s3.bmp.ovh/imgs/2022/09/16/320d3eb9c0f50ff2.png)


## 谷歌收录提交
google提交入口：[https://www.google.com/webmasters/tools/submit-url?hl=zh-CN](https://www.google.com/webmasters/tools/submit-url?hl=zh-CN)

**谷歌提交入口需要搭梯子才能访问。**

谷歌收录也是需要验证，方式和百度bing类似。
![](https://s3.bmp.ovh/imgs/2022/09/16/91bc360e4fc34fbc.png)


## 360收录提交
360提交入口：[https://info.so.com/site_submit.html](https://info.so.com/site_submit.html)

360直接输入相关信息提交就行，不需要验证。
![](https://s3.bmp.ovh/imgs/2022/09/16/1cd61daf864b9fda.png)


## 其他收录入口
更多搜索引擎收录入口：[https://www.sousuoyinqingtijiao.com/google/](https://www.sousuoyinqingtijiao.com/google/)

## 参考资料
> https://blog.csdn.net/csdn_lijun/article/details/118959082
> https://blog.takagisan.top/2022/01daa7ea61.html