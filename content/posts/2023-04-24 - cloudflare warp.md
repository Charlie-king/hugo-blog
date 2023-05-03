---
title: "cloudflare WARP使用技巧"
subtitle: ""
date: 2023-04-24T11:39:12+08:00

lastmod: 2023-04-24T11:39:12+08:00
draft: false
description: "cloudflare WARP使用，获取key，刷流量，提取wireguard配置文件"
keywords: 
- cloudflare WARP
- wireguard
tags:
- cloudflare
categories:
- 研究学习
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
## WARP是什么

WARP是cloudflare推出的一款为所有人设计的应用，它使用我们的全球网络来保护你设备的所有互联网流量。它提供基于 WireGuard协议的网络流量安全及加速服务，能够让你通过连接到 Cloudflare 的边缘节点实现隐私保护及链路优化。可以理解为给你的设备上网加了一个保护壳，或者说是vpn服务，加密保护你的数据流量，同时隐藏你原始ip的作用，数据出口将使用是cloudflare全球服务器。

**官方介绍：**

>WARP 是基于 1.1.1.1 构建的可选应用程序。WARP 在个人设备（如计算机和智能手机）和您在互联网上访问的服务之间建立安全连接。1.1.1.1 仅保护 DNS 查询，而 WARP 保护来自您设备的所有流量。
>
>WARP 通过在 Cloudflare 网络而不是公共互联网上路由您的流量来做到这一点。Cloudflare 自动加密所有流量，并且通常通过 Cloudflare 的低延迟路径路由流量，从而加速流量。通过这种方式，WARP 提供了[虚拟公共网络](https://www.cloudflare-cn.com/learning/access-management/what-is-a-vpn/) (VPN) 服务的一些安全优势，而没有许多营利性 VPN 带来的性能损失和数据隐私问题。
>
>The Cloudflare WARP client **allows you to protect corporate devices by securely and privately sending traffic from those devices to Cloudflare's global network**, where Cloudflare Gateway can apply advanced web filtering

## WARP特点

1.  更安全：WARP使用的是最新的Wireguard协议，这种协议比现有的VPN协议更加安全可靠，并且具有更快的连接速度和更低的延迟。
2.  更快速：WARP提供了更快速的网络连接，它利用了Cloudflare的全球CDN网络来提供更快的数据传输速度和更好的用户体验。
3.  更可靠：WARP是专门为移动网络和Wi-Fi网络优化的，它可以帮助用户在连接不稳定的网络时保持稳定的网络连接状态。
4.  全球化：WARP可以连接到全球各地的服务器，并且可以通过点选连接，选择所需要的VPN服务节点。
5.  免费使用：WARP的基本版本是免费使用的，它提供了足够的保护和增强体验的功能。如果需要更高级的服务功能，则需要付费升级到专业版。

## WARP应用场景

1. 加密保护你的网络     
你上网的数据流量都经由cloudflare的全球边缘节点进行隐私保护和链路优化，你的网络出入口显示的都是cloudflare的节点。

2. IPV4&IPV6双栈连通支持     
WARP网络入出口均为IPV4&IPV6双栈，因此单栈服务器可以通过WARP来获取双栈的网络连通性支持。比如本来你机子网络为IPV4单栈，就只能访问IPV4网络，通过WARP就可访问IPV6服务。IPV6同理，并且WARP的IPV6网络质量很好。

3. 解除某些网站基于IP的封锁限制     
WARP对外访问网络IP是比较干净的，被很多网站视为真实用户即“原生”IP，可以解决某些网站基于IP的网络限制。    
	- 解锁Netflix非自制剧
	- 跳过google验证
	- 解除google学术访问限制
	- 解除YouTube Premium定位漂移和地区限制

4. 代理    
作为代理，访问一些特殊网络，当然，这不是它原本的目的，只是存在被这样使用的可能性。官方声明是这样的：
    > 从技术角度来看，WARP是一个VPN。但它是为与传统VPN截然不同的用户设计的。WARP不是用来让你在旅行时访问受地理限制的内容的。它不会在您访问的网站中隐藏您的IP地址。如果您正在寻找这种高安全性的保护，那么传统的VPN或[Tor之类的服务](https://www.torproject.org/)可能是更好的选择。
    > 
    > 相反，WARP是针对普通消费者构建的。它旨在确保您的数据在传输过程中得到保护。因此，您与正在使用的应用程序之间的网络无法监视您。当你在当地的咖啡店时，它将帮助你的数据免于被人嗅探。这也将有助于确保你的ISP不会收集你的浏览模式数据来卖给广告商。
    > 
    > WARP不是为那些想要精确指定他们的流量将通过什么服务器的超级技术人员设计的。WARP界面中基本上只有一个按钮：ON或OFF。它的目的很简单。它是为我的父母设计的，他们每次在节日晚餐时都会问我他们能做些什么来保证上网安全。我很高兴今年有一些简单的事情可以让他们去做：安装1.1.1.1应用程序，启用WARP，然后稍微休息一下。


## WARP、WARP+和Zero Trust

cloudflare WARP一共有三个服务版本，WARP、WARP+和Zero Trust

>- **WARP：** 基本的WARP服务是免费的，没有带宽上限或限制。实际使用和WARP+速度无差别。
>
>- **WARP+：** WARP+的无限制版本需要按月订阅付费。WARP+是WARP的更快版本，您可以选择付费。WARP+的费用因地区而异，旨在近似于[麦当劳巨无霸在该地区的价格](https://en.wikipedia.org/wiki/Big_Mac_Index)。在iOS上，截至本帖子发布之日，WARP+的价格仍在按区域进行调整，但此价格将在接下来的几天内稳定下来。WARP+使用Cloudflare虚拟专用主干网（[名为Argo](https://www.cloudflare.com/products/argo-smart-routing/)）来实现更高的速度，并确保您的连接在互联网长距离传输中得到加密。我们为此付费，因为它需要我们付出更多的代价。但是，为了帮助传播有关WARP的信息，您每推荐一个朋友注册WARP，就可以赚取1GB的WARP+使用流量。您推介的每个人也都可以免费获得1GB的WARP+使用流量。
>
>- **Zero Trust：** 原为WARP team，后面更名为Zero Trust，相当于WARP+无限流量版本，主要提供企业团队多设备服务，有免费和付费版，免费版50人以内使用。
![](https://s.imgkb.xyz/abcdocker/2023/04/24/a4d701f0fd9bc/a4d701f0fd9bc.png)


## WARP使用

目前cloudflare已经提供全平台的客户端，[https://1.1.1.1](https://1.1.1.1/)下载安装直接打开即可使用。使用非常简单。

WARP直接封装分配离你最近的节点使用，不幸的是，在国内，有些节点可能被阻断而无法使用，这就会导致你有时连接不上，无法直接使用WARP。

不过，不用担心，有很多工具可以修改WARP的端点IP，并且还有很多扫描脚本，自动扫描你当前设备连接最好的ip端口，然后你自由修改即可。

WARP界面如下图，右下角设置点击可查看常规，连接，账户，高级等信息，在常规里查看设备公用IPh和设备ID。注意查看设备ID如果为非0000的一串数字，说明你设备能连接注册到cloudflare的节点网络，是能正常连接的。如果首页无法连接，先启用一下其他全局代理，再连接，连上后关掉自己的代理，连上后它会使用离你最近的cloudflare服务节点，下次使用就不需要开代理。
![](https://s.imgkb.xyz/abcdocker/2023/04/25/7da2b2ee54aac/7da2b2ee54aac.png)


## WARP修改endpoint IP

WARP已经允许自定义修改endpoint IP端口，也有第三方脚本可以直接修改。当默认的连接不上时，只要修改endpoint IP端口找到可用的即可。

## WARP IP优选扫描

IP

## wireguard上使用WARP节点

WARP使用的wireguard协议，基于加密的UDP报文来封装所有数据。因此，更好的一种使用方式是，直接提取WARP的节点，在wireguard软件中直接使用，内存占用更低。

获取WARP+流量
https://replit.com/@aliilapro/WARP

在线生成WARP+key
https://replit.com/@gunethra/WarpKeyGen

在线生成wireguard配置文件




## loon上使用WARP节点

参考教程[Loon新手起步折腾WARP](https://github.com/getsomecat/GetSomeCats/blob/Surge/Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWARP.md)


## 参考

> 1. [WARP现已问世](https://blog.cloudflare.com/zh-cn/announcing-WARP-plus-zh-cn/)
> 2. [通过 Cloudflare Zero Trust 构建许多专用虚拟网络](https://blog.cloudflare.com/zh-cn/building-many-private-virtual-networks-through-cloudflare-zero-trust-zh-cn/)
> 3. [Loon新手起步折腾WARP](https://github.com/getsomecat/GetSomeCats/blob/Surge/Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWARP.md)
> 4. [Cloudflare WARP 给服务器额外添加“原生”IPv4/IPv6 网络](https://www.moeelf.com/archives/301.html)
> 5. [Cloudflare WARP免费网络加速服务裸连外网](https://jiemahao.com/cloudflare-WARP-vpn/)
> 6. [](https://p3terx.com/archives/use-cloudflare-WARP-to-add-extra-ipv4-or-ipv6-network-support-to-vps-servers-for-free.html)