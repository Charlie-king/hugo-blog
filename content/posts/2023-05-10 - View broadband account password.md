---
title: "查看宽带拨号账号密码"
subtitle: ""
date: 2023-05-10T10:57:27+08:00

lastmod: 2023-05-10T10:57:27+08:00
draft: flase
description: "登录光猫后台后查看宽带账号密码"
keywords: 
- 宽带账号密码
- 光猫
tags:
- 宽带
- 路由
- 光猫
categories:
- 网络
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

## 登录光猫

忘了宽带账号密码，一种自己查询的途径是登录光猫超级管理员后台查。光猫超级管理员账号密码一般在光猫上贴纸有写。

![](https://s3.bmp.ovh/imgs/2023/05/10/636d5de805cbaa29.png)


## 查看宽带账号密码方式

### 方法1：框架源码查询

- 进到超管界面后，选 网络 - 网络设置 - 网络连接，连接名称切换到 41结尾的项，可以看到拨号账号密码页，右键 查看框架源代码。

![800](https://s3.bmp.ovh/imgs/2023/05/10/67cb8d4034a639fe.png)

**Tips：** 光猫拔了光纤，按reset键重置不会丢失LOID和上网的账号密码，但可以将超级管理员密码重置为默认密码，电信光猫常用的超级管理员账号密码: telecomadmin, nE7jA%5m（此法来源网络未经本人验证）


- 源代码中按ctrl+F搜索宽带账户名，一般后面紧跟的6位数字就是账号密码。（下图红色为账号，绿色为密码）
![](https://s3.bmp.ovh/imgs/2023/05/10/70584b784c5ae612.png)

- PS：如果看到不是6或8为数字或字符，说明此法不通。

### 方法2：修改页面元素

法1不通时，可以尝试法2。

- 一样进到可以查看拨号账号密码页，edge或chrome按F12，调出开发者工具，点击element（元素），鼠标点击网页密码那列，在元素中将type="password"改为type="text"，在网页中就看到**密码那里变成了明文显示**，这串字符再用[base64解码](https://base64.us/)一下就是宽带密码了。
![](https://s3.bmp.ovh/imgs/2023/05/10/d6c53e43741b3cb4.jpg)



## 参考
> https://blog.csdn.net/weixin_39921904/article/details/124545471
> https://post.smzdm.com/p/apz3p8w0/