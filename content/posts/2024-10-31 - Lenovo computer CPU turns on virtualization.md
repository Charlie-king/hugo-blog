---
title: "联想电脑开启cpu虚拟化"
subtitle: ""
date: 2024-10-28T10:42:29+08:00

lastmod: 2024-10-31T11:42:29+08:00
draft: false
description: "联想新旧款电脑bios开启cpu虚拟化"
keywords: ""
tags:
- 电脑
categories:
- 技术问题
featuredImage: ""
featuredImagePreview: ""

password: ""
message: "提示信息"

author: "Kingpo"
authorLink: ""
authorEmail: ""

comment: true
weight: 0

toc:
  enable: true

seo:
  images: []
# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->

系统下如果需要使用虚拟机，需要前往BIOS中提前开启虚拟化(VT-Virtualization Technology)

### 进bios

开机时基本同时F2，F8，F10，F12就行。

### 开启虚拟化

不同型号开启的位置不同，基本都在以下菜单，找到Virtualization，Intel是Intel(R)Virtualization Technology，AMD是AMD V(TM) Technology，选择启用enable。

security
configuration
advanced



### 参考
> https://iknow.lenovo.com.cn/detail/200366
> https://support.lenovo.com/us/zc/solutions/HT500006

