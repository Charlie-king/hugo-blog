---
title: "windows远程桌面rdp连接ubuntu图形桌面"
subtitle: ""
date: 2023-05-07T20:30:43+08:00

lastmod: 2023-05-07T21:30:43+08:00
draft: false
description: "windows远程桌面rdp连接ubuntu图形桌面的配置方法"
keywords: "远程桌面，ubuntu，rdp，ssh"
tags:
- ubuntu
- linux
categories:
- linux
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

## ubuntu ssh远程

ubuntu版本可归为两类，桌面版和服务器版。
- 桌面版（desktop）主要针对个人pc使用，带有GNOME桌面环境图形化界面，和windows类似，可以浏览网页，编辑文档，看视频等，占用系统资源较高，至少需要4GB运行内存，磁盘空间至少20GB。SSH服务需要手动开启。
- 服务器版，无头方式(headless)运行，无图形化界面，需要通过终端ssh远程连接。它主要是为运行网络服务而定制的。默认启用SSH，占用系统资源少，512MB运行内存和5GB磁盘空间就可以运行。

服务器版也可以安装图形化界面，命令如下：
```sh
sudo apt update
sudo apt install ubuntu-desktop
```

1. 开启SSH服务

```sh
# 查看是否安装openssh
dpkg -l|grep -i openssh-server
# 如果没有安装
sudo apt install openssh-server
# 确认
systemctl status sshd
sudo apt install net-tools
netstat -luntp|grep -i 22

```

## windows远程桌面rdp连接ubuntu

ubuntu一般被远程连接是通过ssh命令行，也可以通过vnc，rdp来连接图形化桌面。windows远程桌面采用的rdp协议，连接效果极佳。

1. ubuntu安装xrdp
```sh
#执行系统更新
sudo apt update
#安装xrdp
sudo apt install xrdp

#启动它
sudo systemctl start xrdp
#开机启用
sudo systemctl enable xrdp
#检查状态
sudo systemctl status xrdp
```

2. 将xrdp用户加入组
```sh
sudo adduser xrdp ssl-cert 
sudo systemctl restart xrdp

#注意防火墙放行3389端口
sudo ufw allow from any to any port 3389 proto tcp
#查看ubuntu系统ip
ip a
```

3. 重启ubtuntu系统
4. window打开远程桌面rdp，输入ubuntu的ip地址连接，session选择xorg，账号密码连接。
![](https://s.imgkb.xyz/abcdocker/2023/05/07/03a6439b04a75/03a6439b04a75.png)



## 参考

> [Windows远程Ubuntu](https://www.cnblogs.com/monkey6/p/16860153.html)
> [Ubuntu22.04远程桌面配置（RDP，VNC）](https://www.cnblogs.com/pipci/p/16377032.html)
