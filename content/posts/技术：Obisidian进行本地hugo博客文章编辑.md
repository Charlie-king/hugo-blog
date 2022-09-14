---
title: "Markdown博客文章写作最佳体验，hugo+Obisidian+Vscode"
subtitle: ""
date: 2022-09-11T00:44:43+08:00
lastmod: 2022-09-12T23:37:43+08:00

author: "Kingpo"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
comment: true
weight: 0

draft: false

tags:
- hugo
- Obisidian
categories:
- 博客

summary: ""
resources:
- name: featured-image
  src: featured-image.jpg
- name: featured-image-preview
  src: featured-image-preview.jpg

toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->

## 前言

hugo博客搭建后，博客写作和发布流程较为复杂，因为是静态博客，每次都需要重新编译。不过，通过GitHub action，我们已经把这步交给GitHub去做了。我们只需提交即可触发自动编译并发布到你部署的平台，我目前托管在GitHub pages，vercel，render，netlify这四个平台上，不过8月下旬起vercel提供*.vercel.app域名已经被墙，我开启了独立域名 https://zhjin.eu.org 。

现在我们的整体写作流程如下：
1. 通过命令`hugo new posts/文章名.md` 新建一篇文章。
2. 用Markdown编辑器进行写作，图片资源引入图床
3. 上传文章，自动发布


怎么把体验变得尤为重要，



## obisidian



## 参考资料

> Hugo 博客写作最佳实践  https://zhuanlan.zhihu.com/p/497671233
