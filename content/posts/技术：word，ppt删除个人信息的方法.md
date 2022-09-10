---
title: "word/excel/ppt/pdf删除文档个人信息的方式"
subtitle: ""
date: 2022-09-06T15:43:41+08:00
lastmod: 2022-09-06T15:43:41+08:00

author: "Kingpo"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
comment: true
weight: 0

draft: false
tags:
- Microsoft
categories:
- 技术问题

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

![](https://s3.bmp.ovh/imgs/2022/09/06/7983564a617c1fc0.png)

<!--more-->
### word，excel，ppt删除个人信息

office套件，word，excel，ppt 默认是会记录文档创建者，最后保存者，修改时间等个人信息的，有时我们不想要泄露这些信息时候，可以进行删除。

操作如下：

选中文档，**右键 =》属性，详细信息**，删除属性和个人信息，从此文件中删除以下属性，全选删除，确认即可。

  ![](https://s3.bmp.ovh/imgs/2022/09/06/2e6fc25a54e59723.webp "word")
  ![](https://s3.bmp.ovh/imgs/2022/09/06/14998ca66f37155f.webp " ")

  

**注意：** 如果对文档进行了加密，要先取消加密后，再删除属性才能生效，再加密后此时仅能看到windows登录账号名称

  
  

### pdf删除创建者信息

pdf文档默认记录的个人信息相对较少，但还是会有创建者名称信息。在浏览器打开查看设置属性信息可查。

  ![](https://s3.bmp.ovh/imgs/2022/09/06/4c5179395f4cbd8f.webp " ")
![](https://s3.bmp.ovh/imgs/2022/09/06/487e5f8957b42f19.webp " ")

  

目前测试到一种比较简单的处理方式如下。

pdf文件用**chrome，Firefox**浏览器打开，打印，另存为新pdf，会清除创建者等信息。

经测试用**edge**浏览器另存处理，创建者信息还是存在。

其他浏览器自行测试。
![](https://s3.bmp.ovh/imgs/2022/09/06/920aa889bfc9d590.webp " ")
