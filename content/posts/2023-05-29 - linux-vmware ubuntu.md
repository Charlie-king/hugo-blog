---
title: "linux系列之vmware安装ubuntu及常见问题"
subtitle: ""
date: 2023-05-29T17:03:48+08:00

lastmod: 2023-05-31T17:03:48+08:00
draft: false
description: "window下虚拟机vmware安装Ubuntu以及常见的问题解决方案"
keywords: 
- vmware
- ubuntu
- 虚拟机
tags:
- linux
- Ubuntu
- vmware
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

## 安装VMware Workstation

官网下载地址：
[vmware官网](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

下载后运行安装，一路向下点即可。

使用激活码激活，搜集于网上，自行测试：
```

MA491-6NL5Q-AZAM0-ZH0N2-AAJ5A

5A6F6-88247-XZH59-HL0Q6-8CD2V

HF6QX-20187-2Z391-522NH-9AELT

5F29M-48312-8ZDF9-A8A5K-2AM0Z

15

UY758-0RXEQ-M81WP-8ZM7Z-Y3HDA

VF750-4MX5Q-488DQ-9WZE9-ZY2D6

UU54R-FVD91-488PP-7NNGC-ZFAX6

YC74H-FGF92-081VZ-R5QNG-P6RY4

YC34H-6WWDK-085MQ-JYPNX-NZRA2

16
------------------------------------------------------
VMware Workstation Pro 16 许可证：
------------------------------------------------------
ZF3R0-FHED2-M80TY-8QYGC-NPKYF

YF390-0HF8P-M81RQ-2DXQE-M2UT6

ZF71R-DMX85-08DQY-8YMNC-PPHV8
------------------------------------------------------
vmware workstation 17 pro激活密钥，通用批量永久激活许可
------------------------------------------------------
17：JU090-6039P-08409-8J0QH-2YR7F

16：ZF3R0-FHED2-M80TY-8QYGC-NPKYF

15：FC7D0-D1YDL-M8DXZ-CYPZE-P2AY6

12：ZC3TK-63GE6-481JY-WWW5T-Z7ATA

10：1Z0G9-67285-FZG78-ZL3Q2-234JG
------------------------------------------------------
vmware workstation 17 pro密匙最新
------------------------------------------------------
4A4RR-813DK-M81A9-4U35H-06KND

NZ4RR-FTK5H-H81C1-Q30QH-1V2LA

JU090-6039P-08409-8J0QH-2YR7F

4Y09U-AJK97-089Z0-A3054-83KLA

4C21U-2KK9Q-M8130-4V2QH-CF810

MC60H-DWHD5-H80U9-6V85M-8280D

```



## 下载Ubuntu镜像文件

Ubuntu是linux的发行版之一，界面友好，受众较广。使用国内镜像网站下载，速度快，这里以清华大学镜像站为例。

https://mirrors.tuna.tsinghua.edu.cn/

-----------------------------------------------
找到右侧  
下载链接  
常用发行版 iso 和应用工具安装包直接下载  
【点击下载iso文件】
![](https://s3.bmp.ovh/imgs/2023/06/01/70889adad041bb78.png)

---------------------------------------------------------------------------------------------------
找到ubuntu对应desktop版本，这里选amd64，22.04，amd和arm根据你的cpu架构选择。
![](https://s3.bmp.ovh/imgs/2023/06/01/b153c4aa504e8806.png)

## vmware安装ubuntu

此部分基本引用教程[史上最全最新Ubuntu20.04安装教程（图文）](https://zhuanlan.zhihu.com/p/355314438) 做了少量修改。

step1：打开第一步所下载的VMware Workstation。在主界面中，选择【创建新的虚拟机】。

![](https://pic1.zhimg.com/80/v2-664841d9a67ca9454e00d5c3d6a1fee0_720w.webp)

step2：如图，会自动弹出【新建虚拟向导】，选择【自定义（高级）】后，点击【下一步】。

![](https://pic2.zhimg.com/80/v2-fafffe673b9d0063101fa3e68ad7e111_720w.webp)

step3：这一步选择默认值即可，点击【下一步】。

![](https://pic2.zhimg.com/80/v2-c8b1fe0af892908ac59f055481d1dd95_720w.webp)

step4：选择【稍后安装操作系统】，点击【下一步】

![](https://pic4.zhimg.com/80/v2-c0add466c9a042e5c301fc0dae95628f_720w.webp)

step5：选择【Linux】，其下方版本将默认更改为【Ubuntu】。

![](https://pic3.zhimg.com/80/v2-686c9353ab253e8e27ae8e57c0658e8e_720w.webp)

step6：填写【虚拟机名称】及【位置】，点击【下一步】。【虚拟机名称】即虚拟机的名字。【位置】可以选择容量较大的硬盘位置。

![](https://pic1.zhimg.com/80/v2-a66c27c64cf5a61ad416590647fa045c_720w.webp)

step7：【处理器数量】与【每个处理器的内核数量】选择2后，点击【下一步】。

![](https://pic1.zhimg.com/80/v2-7761d36e4159f758107bbb4281a55a48_720w.webp)

step8：选择【此虚拟机的内存】，此值应依据电脑本身情况酌情调整。常用值为1G（1024MB）、2G（2048MB）、4G（4096MB）等等。在这里选择4G。

![](https://pic2.zhimg.com/80/v2-b1451057fe66bd28428d8318e525a5d9_720w.webp)

step9：选择【使用网络地址转换】，点击【下一步】。

![](https://pic3.zhimg.com/80/v2-d306494b310a289e5ab6261d5e65ab1a_720w.webp)

step10：选择推荐的【LSI Logic】即可，点击【下一步】。

![](https://pic2.zhimg.com/80/v2-a9a667530f95480874aa804466dbc8e5_720w.webp)

step11：选择推荐的【SCSI】即可，点击【下一步】。

![](https://pic4.zhimg.com/80/v2-dd12fedbeb60eb92cbb7405fc7d9d8a7_720w.webp)

step12：选择【创建新虚拟磁盘】，点击【下一步】。

![](https://pic4.zhimg.com/80/v2-0245d744806f157502698e2a2d9485f3_720w.webp)

step13：设置【最大磁盘大小】为40，并选择【将虚拟磁盘拆分成多个文件】后，点击【下一步】。最大磁盘大小默认为20GB，磁盘剩余空间较大的话该数值可以往上加。

![](https://pic3.zhimg.com/80/v2-97e1a58eb7220e3b5ad93a5c852c08c6_720w.webp)

step14：点击【下一步】。

![](https://pic1.zhimg.com/80/v2-6901e8ce40884bd6f47f444bea3366e8_720w.webp)

step15：点击【完成】。

![](https://pic3.zhimg.com/80/v2-3203cd7c895747c2b95b6897d8fcb97a_720w.webp)

step16：回到VMware Station界面，单机界面左侧【编辑虚拟机位置】。

![](https://pic4.zhimg.com/80/v2-2013d82e34cca6f5f2a796e2e9f8fd0b_720w.webp)

step17-19：点击左侧的CD/DVD选项卡，右侧点击【使用ISO映像文件】，找到第二步在你清镜像中下载的Ubuntu镜像即可，点击【下一步】。

![](https://pic2.zhimg.com/80/v2-29903e1d66f603693f72e78ce63e84a1_720w.webp)

step20：回到VMware Station界面，点击【开启此虚拟机】。

![](https://pic4.zhimg.com/80/v2-efc3fe136856e9fd2f8cf1f4d1ea25c7_720w.webp)

【注】：此时若出现【此主机支持Intel VT-x，但Intel VT-x处于禁用状态】的提示。请进入BIOS，将【Intel Virtual Technology】设为【Enabled】即可，具体方法可百度。

![](https://pic2.zhimg.com/80/v2-dff8c7ccde2c3e4829a7de5f248d0d79_720w.webp)

step21：此时可以看到虚拟机画面，点击右侧【Install Ubuntu】。这里也可以选中文Chinese。

![](https://pic4.zhimg.com/80/v2-0e15ec1bccfa34cd13808dd5f2269a3f_720w.webp)

step22：此时我们使用美国键盘布局【English（US）】，点击【Continue】。或中文的。

![](https://pic2.zhimg.com/80/v2-28ec99ddcafe65f41492647b20790591_720w.webp)

step23：点击【Minimal installation】，点击【Continue】。由于Ubuntu虚拟机大多做学习研发使用，所以选择最小化安装。若是有用Ubuntu网上冲浪和打游戏的需求，请选择【Normal installation】。

![](https://pic2.zhimg.com/80/v2-c483f78a2ce6b6d83fea6bdbfdf57d75_720w.webp)

step24：选择【Erase disk and install Ubuntu】，点击【Install Now】。

![](https://pic3.zhimg.com/80/v2-01f9b78c75fd3b2965769e099b9a1a0e_720w.webp)

step25：点击【Continue】确认。

![](https://pic1.zhimg.com/80/v2-316bd86afe2568e6468670ab8a924ccc_720w.webp)

step26：点击地图上【中国】的位置，会默认出现Shanghai，点击【Continue】。

![](https://pic3.zhimg.com/80/v2-789159b1e838b30f25e9418d29b338be_720w.webp)

step27：输入【Your name】【Your computer's name】【Pick a username】【Choose a password】【Confirm your password】后，点击【Continue】。这里建议密码设置的简单一些，因为Ubuntu后续很多操作需要验证密码，设置复杂的密码后期会比较麻烦。

![](https://pic4.zhimg.com/80/v2-77abbe1480e9ca807b245f9b1321ada3_720w.webp)

等待安装。

![](https://pic2.zhimg.com/80/v2-015911a10c67cf581c6db267e89dcc05_720w.webp)

点击【Restart Now】重新启动。

![](https://pic2.zhimg.com/80/v2-2e5b71ea445f4e1fa71620fe672eb3dd_720w.webp)

重新启动后，可以看到Ubuntu已经安装完成，点击出现的【用户名】。

![](https://pic4.zhimg.com/80/v2-755e6a48a3f625feccfadea2f59e97af_720w.webp)

输入密码即可以进入Ubuntu啦！

![](https://pic1.zhimg.com/80/v2-b0defe34ef9465880c984396853d7e80_720w.webp)

![](https://pic1.zhimg.com/80/v2-caf0ff1a1cbf1515aa2f8f966faa0928_720w.webp)


## 异常处理

### 安装时Ubuntu页面显示不全

页面过小，显示不全，无法点击下一步，此时先不要安装，选择试用Try Ubuntu，进入桌面
![](https://s3.bmp.ovh/imgs/2023/06/01/e436a4f6551a961b.png)

设置 -> 搜索 display或显示器（中文版）
![](https://s3.bmp.ovh/imgs/2023/06/01/bc3327b0e37939cd.png)

调整分辨率rotation为你机子比例，一般1920x1080或1280x768，点击应用。

再双击桌面的 install Ubuntu 22.04 LTS，进入安装。

## 安装完成后桌面不能全屏自适应虚拟机界面

此时已经不是调整分辨率的问题了，你调整分辨率会发现要么显示偏大要么偏小，这是因为没有安装vm-tools的原因。

安装命令，此命令会将vmware所有工具都安装：  
```
sudo apt-get install -y open-vm*
```

执行完毕后，你会发现ubuntu能全屏适应了页面了，并且剪切板、文件夹也能和宿主机共享了。

## 参考

> 1. https://blog.csdn.net/Passerby_Wang/article/details/124075121
> 2. https://zhuanlan.zhihu.com/p/91028357
