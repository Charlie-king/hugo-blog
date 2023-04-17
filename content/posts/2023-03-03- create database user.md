---
title: "创建oracle数据库账户登录报错的一个原因"
subtitle: ""
date: 2023-03-03T14:59:50+08:00

lastmod: 2023-03-03T15:00:50+08:00
draft: true
description: "invalid username/password:logon denied"
keywords: ""
tags:
- oracle
categories:
- 数据库
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
给oracle数据库创建新用户的时候，用户名不能为小写，需要全为大写，否则登录会报错。

以下是用Navicat创建时遇到的问题截图。
![](https://s.imgkb.xyz/abcdocker/2023/03/03/3cf77e0e1ae81/3cf77e0e1ae81.png)
![](https://s.imgkb.xyz/abcdocker/2023/03/03/bcc9295ceb728/bcc9295ceb728.png)
