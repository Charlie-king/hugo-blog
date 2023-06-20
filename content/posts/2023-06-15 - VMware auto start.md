---
title: "VMware pro 17设置虚拟机随宿主机开机自启动"
subtitle: ""
date: 2023-06-15T09:57:06+08:00

lastmod: 2023-06-15T10:30:06+08:00
draft: false
description: "VMware pro 17设置虚拟机随宿主机开机自启动的方法和注意事项"
keywords: 
- 虚拟机
- 开机自启
- 虚拟机自动启
tags:
- VMware
- 虚拟机
categories:
- 虚拟机
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

## VMware上虚拟机随宿主机开机自启

使用的是当前最新版本的VMware Workstation Pro 17版本，装了2个linux，需要设置随宿主机开机后自动开启2个linux机。之前设置后一直没生效。解决方法如下。

### 1. 设置自动启动虚拟机

网上教程旧版的，界面和新版有所差异。17版本设置如下：`VMware Workstation工作台 -> 文件 -> 配置自动启动虚拟机 -> 按顺序选择需要启动的虚拟机`
![](https://s3.bmp.ovh/imgs/2023/06/15/dfd825f49546cee1.png)
![](https://s3.bmp.ovh/imgs/2023/06/15/b2c05449089d139b.png)

这步骤设置后，发现每次开机还是没启动，进行下面设置。

### 2. 设置自动启动服务

查看服务VmwareAutostartService是否有自动启动，没有则开启来。

`任务管理器 -> 服务 -> 找到VmwareAutostartService右键打开服务 -> VMware自动启动服务 右键 常规 启动类型 设置为 自动启动 `

经过这步还不成功，则原因是你用了自己微软账户登录windows系统，需要再设置一下登录。还是在刚刚的服务属性页面设置。

`VMware自动启动服务 右键 登录 选择此账户，浏览添加你登录windows的账户` 

到这里就完成了，这里默认是用本地系统账户登录的，你如果不是用本地系统账户而是用其他微软账户登录，就要选择对应的登录账户。

![](https://s3.bmp.ovh/imgs/2023/06/15/b86c7720f158aa50.png)


![](https://s3.bmp.ovh/imgs/2023/06/15/6d71c94fd1e3b230.png)
