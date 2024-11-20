---
title: "PVE安装和初始设置"
subtitle: "笔记本安装PVE后的设置"
date: 2024-11-19T10:08:20+08:00

lastmod: 2023-07-05T11:08:20+08:00
draft: false
description: "笔记本安装pve过程，注意事项和初始环境设置"
keywords: 
- pve
- nano
- pve合盖不休眠
- pve换软件源
- 去除无效订阅
tags:
- pve
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

## PVE安装

PVE：
全称Proxmox Virtual Environment，开源的虚拟化管理平台。它基于Debian Linux操作系统，并集成了KVM和LXC两种虚拟化技术，可以帮助用户快速搭建和管理虚拟化环境。

1. 直接官网下载最新[镜像iso](https://pve.proxmox.com/wiki/Main_Page)，选择iso images。
![](https://s3.bmp.ovh/imgs/2023/07/07/f94d45ba6b9ae6e7.png)

2. 用U盘做一个启动盘，注意如果用rufus工具的话，记得用**dd模式**，否则下个步骤会无法识别。
	其他工具[balenaEtcher](https://www.balena.io/etcher)，使用也很简单，选择镜像，选择u盘，制作即可，注意制作过程可能会有弹窗，点取消就行。
![](https://s3.bmp.ovh/imgs/2023/07/07/d34ba2dea988931a.png)

3. 主板Bios选择U盘的UEFI启动。

4. 进入界面，选第一个install promox VE，选择安装位置，选择地区（china），设置密码和邮箱，设置网络，设置和路由器同个网段，开始安装。安装后会启动进入系统，用户root，密码为刚才设置的密码。启动后会显示IP，在同个局域网内可通过浏览器访问，注意是https而非http。
![](https://s3.bmp.ovh/imgs/2023/07/07/bc1b38bbcaf904a1.png)


## 笔记本pve合盖子不休眠设置

浏览器进入pve管理后台，shell，命令行界面，

编辑文件：nano /etc/systemd/logind.conf
```
**参数说明**
#HandlePowerKey 按下电源键后的行为，默认power off

#HandleSleepKey 按下挂起键后的行为，默认suspend

#HandleHibernateKey按下休眠键后的行为，默认hibernate

#HandleLidSwitch合上笔记本盖后的行为，默认suspend（改为ignore；即合盖不休眠）在原文件中，还要去掉前面的#
```


下面是修改后的pve源文件
```

#  This file is part of systemd.

#  systemd is free software; you can redistribute it and/or modify it

#  under the terms of the GNU Lesser General Public License as published by

#  the Free Software Foundation; either version 2.1 of the License, or

#  (at your option) any later version.

#

# Entries in this file show the compile time defaults.

# You can change settings by editing this file.

# Defaults can be restored by simply deleting this file.

#

# See logind.conf(5) for details.

  

[Login]

#NAutoVTs=6

#ReserveVT=6

#KillUserProcesses=no

#KillOnlyUsers=

#KillExcludeUsers=root

#InhibitDelayMaxSec=5

#UserStopDelaySec=10

#HandlePowerKey=poweroff

#HandleSuspendKey=suspend

#HandleHibernateKey=hibernate

HandleLidSwitch=ignore   #改这行

#HandleLidSwitch=suspend

#HandleLidSwitchExternalPower=suspend

#HandleLidSwitchDocked=ignore

#HandleRebootKey=reboot

#PowerKeyIgnoreInhibited=no

#SuspendKeyIgnoreInhibited=no

#HibernateKeyIgnoreInhibited=no

#LidSwitchIgnoreInhibited=yes

#RebootKeyIgnoreInhibited=no

#HoldoffTimeoutSec=30s

#IdleAction=ignore

#IdleActionSec=30min

#RuntimeDirectorySize=10%

#RuntimeDirectoryInodes=400k

#RemoveIPC=yes

#InhibitorsMax=8192

#SessionsMax=8192
```

## 设置pve每次重启后立即进入系统

pve每次重启后停留在 进入pve/高级选项/进入boot页等选项页，而不是直接进入系统的解决方法。

编辑GRUB配置文件并更新GRUB引导程序：
1.  以root用户身份登录到PVE服务器。
2.  打开GRUB配置文件（/etc/default/grub）并使用文本编辑器进行编辑。例如，您可以使用nano编辑器打开该文件：
```
nano /etc/default/grub
```

3.  在GRUB配置文件中找到`GRUB_TIMEOUT`选项，并将其值设置为0，以使系统在启动时自动选择默认内核并立即启动。例如：
```
GRUB_TIMEOUT=0
```
4.  更新GRUB引导程序以使更改生效。运行以下命令：
```
update-grub
```
5. 重启测试
```
reboot
```

## 更换国内软件源


### 更新通用软件源为清华源

`nano /etc/apt/sources.list`

添加以下，同时注释原有的，在其前面加#
```

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free

#deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

### 更新企业订阅为免费源

`nano /etc/apt/sources.list.d/pve-enterprise.list`

添加以下，同时注释原有的，在其前面加#
```
deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bullseye pve-no-subscription
```

apt install apt-transport-https ca-certificates

### 更换CT Templates(LXC容器)源

将 /usr/share/perl5/PVE/APLInfo.pm 文件中默认的源地址 http://download.proxmox.com 替换为 https://mirrors.tuna.tsinghua.edu.cn/proxmox 即可。

可以使用如下命令修改：
```

cp /usr/share/perl5/PVE/APLInfo.pm /usr/share/perl5/PVE/APLInfo.pm_back
sed -i 's|http://download.proxmox.com|https://mirrors.tuna.tsinghua.edu.cn/proxmox|g' /usr/share/perl5/PVE/APLInfo.pm

```
针对 `/usr/share/perl5/PVE/APLInfo.pm` 文件的修改，重启后生效。
```
systemctl restart pvedaemon.service
```


![](https://s3.bmp.ovh/imgs/2023/07/07/d18cd8770007be48.png)

## 去除无效订阅弹窗

![](https://s3.bmp.ovh/imgs/2023/07/07/1bd5889ca3f83dbb.png)

修改文件在这个路径：`/usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js`

可以通过ssh

用nano命令直接修改
```
nano /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js
```

![](https://s3.bmp.ovh/imgs/2023/07/07/3c142a1a5f456f8b.png)

按ctrl+w或F6搜索“data.status”，将整个if条件改为false，注意需要保证这两快捷键不被其他软件占用，edge浏览器占用了ctrl+w(关闭当前串口)。

```
if(false)

```
![](https://s3.bmp.ovh/imgs/2023/07/07/e9a8daf415ce64d3.png)





## 其他：nano编辑器简单介绍

一般linux发行版都内置了nano，vi编辑器，对新手而言nano更友好，vi的使用习惯不太一样。

如系统没内置自行安装一下。

CentOS 系统：
```javascript
yum install -y nano
```

Debian/Ubuntu 系统：

```javascript
apt-get install -y nano
```


**nano编辑器语法简单介绍：**

1. 语法：
```
nano <文件名或文件绝对路径>
```
打开文件，文件不存在则新建

```
示例：
nano  xx.conf
nano  /xxx/xxx/xx.conf

```

打开后即可直接编辑，上下左右方向键可直接移动光标，选中可以进行复制，编辑，粘贴等，注意pve浏览器管理台中shell只能通过鼠标右键复制粘贴，不支持ctrl+c/v。

底部有快捷键说明，^G 即为 Ctrl+G ，功能为显示帮助文本。
-   Ctrl+G，显示帮助文本
-   Ctrl+O，保存当前文件
-   Ctrl+R，读取其他文件并插入光标位置
-   Ctrl+Y，跳至上一屏幕
-   Ctrl+K，剪切当前一行
-   Ctrl+C，显示光标位置
-   Ctrl+X，退出编辑文本
-   Ctrl+J，对其当前段落（以空格为分隔符）
-   Ctrl+W，搜索文本位置
-   Ctrl+V，跳至下一屏幕
-   Ctrl+U，粘贴文本至光标处
-   Ctrl+T，运行拼写检查
-   Ctrl+_，跳转到某一行
-   ALT+U，撤销
-   ALT+E，重做
-   ALT+Y, 语法高亮
-   ALT+#，显示行号

编辑修改后，保存`ctrl+o`，退出`ctrl+X`，如没有保存直接退出`ctrl+x`时会弹出提示是否保存，按y或n进行保存退出或不保存退出。

## 一些问题

注意：r8168网卡驱动新版存在问题，旧笔记本经常遇到遇到网络断的情况

## 参考

> https://www.wanuse.com/2022/01/proxmox-ve.html
> https://blog.csdn.net/kuaile_0509/article/details/130273930
> [nano 使用教程](https://cloud.tencent.com/developer/article/1935086)