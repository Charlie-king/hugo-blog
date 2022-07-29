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
comment: false
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

为什么选择[hugo](https://gohugo.io/)，v站上留言推荐最多的博客建站框架，[GitHub](https://github.com/gohugoio/hugo)上star数60.5k ，广受欢迎。
它是一种用 Go 语言编写的静态网站生成器。简单、易用、高效、易扩展、快速部署。号称是世界上最快的框架，搭建静态网站，简单直接。

网站托管在GitHub pages(https://charlie-king.github.io)和vercel(https://kingpo.vercel.app)上，虽然服务器都在国外，但完全免费，且无需备案。

如果要配置到自己国内服务器上，需要购买服务器，并购买域名，进行域名备案。

### 建站工具
框架：hugo

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
（待续）






