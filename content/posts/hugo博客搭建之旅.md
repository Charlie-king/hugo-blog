---
title: "hugo博客搭建之旅"
subtitle: ""
date: 2022-07-15T13:42:42+08:00
draft: false
author: "Kingpo"
authorLink: ""
authorEmail: ""
description: "我终于搭建了专属个人博客！"
keywords: ""
license: ""
comment: true
weight: 0

tags:
- hugo
categories:
- hugo

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""
resources:
- name: featured-image
  src: featured-image.jpg
- name: featured-image-preview
  src: featured-image-preview.jpg

toc:
  enable: true
math:
  enable: false
lightgallery: false
seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->

## hugo个人博客搭建
### 前言
记录一下，建站过程，采坑记录，随时更新。

一直以来都有搭建个人博客的想法，然而一直以来都没有开始行动。近来逛V站，又刷到了个人博客方面的内容，直接行动了。

GitHub上最主流的3大静态博客建站框架为：
- hugo
- hexo
- Jekyll 

为什么选择[hugo](https://gohugo.io/)，v站上留言推荐最多的博客建站框架，[GitHub](https://github.com/gohugoio/hugo)上star数60.5k ，广受欢迎。
它是一种用 Go 语言编写的静态网站生成器。简单、易用、高效、易扩展、快速部署。

号称是世界上编译最快的框架，搭建静态网站，简单直接。


我的这个网站托管在GitHub pages(https://charlie-king.github.io)和vercel(https://kingpo.vercel.app)上，虽然服务器都在国外，但完全免费，且无需备案。

如果要配置到自己国内服务器上，需要购买服务器，并购买域名，进行域名备案。

### 建站工具
框架：hugo

版本：hugo extended 0.101.0

主题：FixIt

托管：GitHub和vercel

### 目前配置实现的功能
使用到的主题是FixIt(https://github.com/Lruihao/FixIt)，是基于LoveIt(https://github.com/dillonzq/LoveIt)改进而来。

[FixIt文档](https://fixit.lruihao.cn/)  | [LoveIt文档](https://hugoloveit.com/)
1. 桌面端/移动端响应式布局
2. 深色/浅色主题模式
3. 搜索功能配置algolia
4. 配置评论功能valine
5. 总访问量，文章访问量，字数统计，文章预计阅读时间
6. 微信，支付宝赞赏支持
7. 添加社交账户，文章分享
8. 锁定/复制代码
9. 内嵌音乐播放器
10. 内嵌bilibili视频
11. 开启百度统计
12. 使用GitHub Action自动化部署到GitHub pages并同步托管到vercel
13. 结合obsidian插件quickadd本地快速创建文件
14. 搭建GitHub图创，配置picgo


### 搭建过程
#### 安装hugo
[hugo](https://gohugo.io/) 可以查看官方文档。

以下讲解均基于windows环境。

**下载安装**
- 方式1：

从[GitHub](https://github.com/gohugoio/hugo/)下载源码，自行编译成二进制文件，需要先安装go运行环境。


- 方式2：

从[GitHub](https://github.com/gohugoio/hugo/releases)
直接直接下载编译好的二进制文件`.exe`

这里用的是扩展版
[hugo_extended_0.101.0](https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_extended_0.101.0_Windows-64bit.zip)

**配置环境变量**

下载好后，解压到某个文件夹里，复制到bin层路径，添加到电脑的环境变量里。

恭喜你，你已经完成了hugo的安装。

测试：打开命令行，输入`hugo version`，确认，可以看到版本号，说明已经正确安装。
```
hugo v0.101.0-466fa43c16709b4483689930a4f9ac8add5c9f66+extended windows/amd64 BuildDate=2022-06-16T07:09:16Z VendorInfo=gohugoio
```


#### 创建网站
先建立一个目录，比如我这里d盘下project，等会生成的博客网站存放在里面

命令行
```
cd project
hugo new site hugo-blog

```
这时会提示祝贺你，你的hugo网站已经生成，然后提示你去下载主题。
```
Congratulations! Your new Hugo site is created in D:\project\hugo-blog.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>\<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".
```


这时你会在mywebsite文件夹里看到你刚生成blog文件夹。
blog文件夹里文件目录为
```
D:.
│  config.toml
│
├─archetypes
│      default.md
│
├─content
├─data
├─layouts
├─public
├─static
└─themes
```

到这里你的网站已经创建好了，再输入以下命令，网站就跑起来啦。
```
hugo server
```

在浏览器里，输入：localhost:1313
就可以访问了。

不过这时候网站还是空的，hugo初始生成的网站默认不带样式，我们需要选个主题安装。

#### 安装主题

安装主题

#### 修改config文件


#### 其他个性化设置





