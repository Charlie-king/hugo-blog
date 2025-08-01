---
title: "Windows 11 Bluetooth cannot recognize Bluetooth speakers (Xiaomi Xiao Ai, Baidu Duer and Tmall Genie) as audio devices: a simple solution"
subtitle: ""
date: 2025-07-23T10:42:29+08:00

lastmod: 2025-07-23T10:45:29+08:00
draft: false
description: "更新win11后蓝牙无法将蓝牙音箱（小米小爱、小度和天猫精灵）识别为音频设备极简解决方法"
keywords: ""
tags:
- 电脑
categories:
- 电脑
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


**首先**，需要排除你的蓝牙设备和PC是否存在以下问题：

1. 设备已配对其他无关设备；
2. 设备未正确开启蓝牙（需确认可以被PC或新设备发现）；
3. 设备存在故障（不能正常链接如手机之类的设备）；
4. 2.4GWifi或其他蓝牙的干扰强烈（蓝牙断连也是同理）；
5. PC端蓝牙已配对其他音频设备（某些显示器或者其他什么设备可能也会连接PC蓝牙且显示为音频设备）；
6. PC端未正确开启蓝牙；
7. PC端蓝牙存在故障（不能正常链接其他的设备）；
8. 如果PC端有2.4GWifi链接，可以先关掉避免干扰（通常情况不需要）。

**然后**，如果上述问题都没有，你还是不能正常链接你的蓝牙音箱，尤其是无法被识别为音频设备。  
请按以下步骤操作：

0. 如果有用，请赞同评分，这样可以帮助的更多用win11的朋友
1. 设置→蓝牙和其他设备→设备
2. 设备设置→蓝牙设备发现→（改为）高级
3. （重新）添加设备→蓝牙→（找到你要的设备）连接——注意：设备连接的弹窗会被其他窗口覆盖，包括浏览器窗口，点了没反应就是没有确认配对连接的弹窗，请在桌面上进行以上步骤，如果没有弹窗，请移开其他窗口看看！
4. 如果上述方案没解决问题，设置→蓝牙和其他设备→设备→相关设置→更多蓝牙设置→发现→允许蓝牙设备查找这台电脑（打开）→应用后确定→从2开始（重试）
5. 设备已连接，愉快玩耍



> https://learn.microsoft.com/zh-cn/answers/questions/4136169/win11?forum=windows-all&referrer=answers