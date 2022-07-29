---
title: "hugo主题美化功能admonition"
subtitle: ""
date: 2022-07-26T14:43:36+08:00
draft: false
author: ""
authorLink: ""
authorEmail: ""
description: "12个精美admonition样式的介绍"
keywords: ""
license: ""
comment: true
weight: 0

tags:
- hugo
categories:
- hugo
posts:
- 

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
## admonition
admonition，有着炫酷的效果，可以美化文章笔记，但它并不是Markdown的标准语法，不能被Markdown正常渲染，需要额外的插件配置。

有人喜欢它的优美的展示效果，有人觉得它是对Markdown语法的污染，使用因人而异。

`admonition` shortcode 有以下命名参数：

* **type** *[必需]*（**第一个**位置参数）

    `admonition` 横幅的类型，默认值是 `note`。

* **title** *[可选]*（**第二个**位置参数）

    `admonition` 横幅的标题，默认值是 **type** 参数的值。（支持 markdown）

* **open** *[可选]*（**第三个**位置参数）

    横幅内容是否默认展开，默认值是 `true`。

hugo的LoveIt，FixIt主题都集成了admonition shorcode功能，可以比较方便的进行使用，语法和样式效果如下。
一个`admonition`示例：
```html
{{</* admonition type=tip title="This is a tip" open=false */>}}
一个 **提示** 横幅
{{</* /admonition */>}}
或者
{{</* admonition tip "This is a tip" false */>}}
一个 **提示** 横幅
{{</* /admonition */>}}
```
显示效果如下：
{{< admonition tip "Tip" >}}
一个 **提示** 横幅
{{< /admonition >}}
## **12种样式代码和效果**
### note
```html
{{</* admonition */>}}
一个 **注意** 横幅
{{</* /admonition */>}}
```
{{< admonition >}}
一个 **注意** 横幅
{{< /admonition >}}

### tip 
```html
{{</* admonition tip*/>}}
一个 **提示** 横幅
{{</* /admonition */>}}
```
{{< admonition tip "Tip" >}}
一个 **提示** 横幅
{{< /admonition >}}

### abstract
```html
{{</* admonition abstract*/>}}
一个 **摘要** 横幅
{{</* /admonition */>}}
```
{{< admonition abstract >}}
一个 **摘要** 横幅
{{< /admonition >}}
  
### info
```html
{{</* admonition info */>}}
一个 **信息** 横幅
{{</* /admonition */>}}
```
{{< admonition info >}}
一个 **信息** 横幅
{{< /admonition >}}
  
### success
```html
{{</* admonition success */>}}
一个 **成功** 横幅
{{</* /admonition */>}}
```
{{< admonition success >}}
一个 **成功** 横幅
{{< /admonition >}}
  
### question
```html
{{</* admonition question */>}}
一个 **问题** 横幅
{{</* /admonition */>}}
```
{{< admonition question >}}
一个 **问题** 横幅
{{< /admonition >}}
  
### warning
```html
{{</* admonition warning */>}}
一个 **警告** 横幅
{{</* /admonition */>}}
```
{{< admonition warning >}}
一个 **警告** 横幅
{{< /admonition >}}
  
### failure
```html
{{</* admonition failure */>}}
一个 **失败** 横幅
{{</* /admonition */>}}
```
{{< admonition failure >}}
一个 **失败** 横幅
{{< /admonition >}}
  
### danger
```html
{{</* admonition danger */>}}
一个 **危险** 横幅
{{</* /admonition */>}}
```
{{< admonition danger >}}
一个 **危险** 横幅
{{< /admonition >}}
  
### bug
```html
{{</* admonition bug */>}}
一个 **Bug** 横幅
{{</* /admonition */>}}
```
{{< admonition bug >}}
一个 **Bug** 横幅
{{< /admonition >}}

### example
```html
{{</* admonition example */>}}
一个 **示例** 横幅
{{</* /admonition */>}}
```
{{< admonition example >}}
一个 **示例** 横幅
{{< /admonition >}}
   
### quote
```html
{{</* admonition quote */>}}
一个 **引用** 横幅
{{</* /admonition */>}}
```
{{< admonition quote >}}
一个 **引用** 横幅
{{< /admonition >}}

