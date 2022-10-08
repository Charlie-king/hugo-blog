---
title: "js月份和日期前补0的一种简单实现方法"
subtitle: ""
date: 2022-10-08T15:43:42+08:00

lastmod: 2022-10-08T16:55:42+08:00
draft: false
description: ""
tags:
- JavaScript
categories:
- 编程语言
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

## 问题
我的博客创建是通过借助obisidian的插件和脚本来生成，创建名称是年月日加时间，国庆期间进行文件名统一重新管理，按【年月日+标题】来命名。

js脚本月日字段生成默认是没有补0的，也就是如果1位的话显示是这样的1月1号：1-1，而不是01-01，这样整体就不统一。

## js日期字段
查了一下资料，找到了一种简单的解决方法。

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。
 
 ```js

//用法
  var month = (d.getMonth() + 1).toString().padStart(2, '0'); //需要tosting转换；指头部需要俩位数，没有俩位数就补一个0


//调整后
  var month = (d.getMonth() + 1).toString().padStart(2, '0');

  var day = (d.getDate()).toString().padStart(2, '0');

```



## 参考
> https://blog.csdn.net/xiaokangna/article/details/122297412