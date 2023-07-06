---
title: "一键修改微软远程桌面的端口"
subtitle: ""
date: 2022-11-18T15:24:44+08:00

lastmod: 2023-07-06T15:34:44+08:00
draft: false
description: "通过批处理一键修改微软远程桌面端口"
tags:
- Microsoft
categories:
- 微软
featuredImage: ""
featuredImagePreview: ""

author: "Kingpo"
authorLink: ""
authorEmail: ""

keywords: 
- rdp
- Microsoft
- 远程桌面端口
comment: true
weight: 0


toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 前言

市面上有众多远程控制软件，他们有个好处是可以穿透内网，而如果你有公网ip或者会配置穿透的话，建议还是用微软自带的远程桌面连接工具rdp，流畅度和效果体验是最佳的。rdp默认端口是3389，直接暴露在外网的话容易有安全风险，因此一般建议修改该默认端口为其他端口。

## 批处理脚本

这里提供一个脚本，桌面新建一个txt，粘贴以下代码，`txt`后缀改为`bat`，双击运行修改默认端口为其他自定义端口：

直接云盘下载：[点击下载](https://toolkz.lanzouk.com/iNQBm11gvtkj)  
密码:toolkz

**注意：文本编码格式需要改为：GB18030，否则运行会显示乱码。**

```sh
@echo off 

echo ****修改远程桌面3389端口(支持Windows 2003 2008 2008R2 2012 2012R2 7 8 10 )****

echo.
::echo 自动添加防火墙规则

set /p c= 请输入端口号:

if "%c%"=="" goto end

goto edit

::【修改】
:edit 

echo 正在修改...
netsh advfirewall firewall add rule name="Remote PortNumber" dir=in action=allow protocol=TCP localport="%c%"

netsh advfirewall firewall add rule name="Remote PortNumber" dir=in action=allow protocol=TCP localport="%c%"

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\Wds\rdpwd\Tds\tcp" /v "PortNumber" /t REG_DWORD /d "%c%" /f 

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v "PortNumber" /t REG_DWORD /d "%c%" /f 

echo 修改成功
echo. 
echo 重启后生效，按任意键重启

echo. 
set /p ctrl= 输入1重启，其他不重启:

if "%ctrl%"=="1" ( goto restart )else ( goto end )


::【退出】
:end
pause

exit

::【重启】
:restart

shutdown /r /t 0

exit


```