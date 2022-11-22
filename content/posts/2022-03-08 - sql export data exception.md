---
title: "SQL复制(导出)数据到excel行数缺失解决方案"
subtitle: ""
date: 2022-03-08T15:27:47+08:00
lastmod: 2022-09-01T16:41:35+08:00

draft: false
author: ""
authorLink: ""
authorEmail: ""
description: "SQL server复制(导出)数据到excel/csv后行数缺失数据缺失解决方案"
keywords: 
- sql
- 数据导出
- 数据缺失
license: ""
comment: true
weight: 0

tags:
- sql
categories:
- 技术问题


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
# sql导数据出来缺失

之前在导数据时，从sql server数据库表中导出数据到excel表，数据量有几十到百万的量级。

### 导的方式：
1. 直接复制，粘贴到excel表
2. 右键导出成csv格式表

### 遇到问题

**问题1：** 数据缺失，整行数据丢失

**问题2：** 行数缺失，数据和其他行混乱

### 原因和解决方案
经过检查，发现存在两种原因，并找到了两种解决的方法。

**1.** sql表里字段有特殊编码格式的内容，导致复制粘贴或右键导出csv时数据无法正确识别，出现问题1，数据缺失，整行数据丢失

**解决方法：** 导出时把字段数据类型转换为`nvarchar`，SQL Server `NVARCHAR` 数据类型用于存储可变长度的Unicode字符串数据，如：`'【数据名】' = convert(nvarchar(500),title)`

**2.** sql表里字段里有引号，复制数据到excel表，如果字段里含有引号，会引起串行，导致问题2，行数缺失，数据和其他行混乱，而通过右键导出csv是不受影响，csv单元格分隔符是逗号 。

**解决方法：**  
1)通过右键先导出csv，再另存为excel
2)导出前去除字段里的引号（会影响字段值），引号替换为空，如：`'书名' =  Replace(Title,'"','')`