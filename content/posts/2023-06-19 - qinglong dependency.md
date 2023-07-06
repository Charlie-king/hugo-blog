---
title: "青龙面板安装所有依赖"
subtitle: ""
date: 2023-06-19T22:38:06+08:00

lastmod: 2023-06-19T23:38:06+08:00
draft: false
description: "直接给青龙面板安装所有依赖，包括nodejs，Python，linux，解决脚本因为缺少依赖产生的错误。"
keywords: 
- 青龙面板
- 依赖
tags:
- linux
- 青龙面板
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
## 青龙面板脚本运行错误分析

青龙面板里脚本运行的常见错误有两种。

1. 缺少依赖的错误

日志提示错误格式：`Error: Cannot find module ‘xx’` 或 `'xxxx' module not found `

原因：青龙面板缺少相关的依赖。

2. 缺少文件的错误

日志提示错误格式：`Error: Cannot find module ‘./xx’`

原因：大概率是拉库命令不完整，检查或重新复制完整命令进行拉库。

## 安装依赖

### 一键安装所有依赖：

这里用的github仓库QLDependency的脚本。

ssh连接你的机子，输入以下命令。

国内版：
```
docker exec -it qinglong bash -c "$(curl -fsSL https://ghproxy.com/https://raw.githubusercontent.com/FlechazoPh/QLDependency/main/Shell/QLOneKeyDependency.sh | sh)"

```
国外版：
```
docker exec -it qinglong bash -c "$(curl -fsSL https://raw.githubusercontent.com/FlechazoPh/QLDependency/main/Shell/QLOneKeyDependency.sh | sh)"

```

版本号 2.12+ 的新版本青龙安装失败请尝试：
```
docker exec -it qinglong bash -c "$(curl -fsSL https://raw.githubusercontent.com/FlechazoPh/QLDependency/main/Shell/XinQLOneKey.sh | sh)"
```

### 无代码添加方法

直接进入青龙面板依赖菜单，添加依赖，分拆选择<是>，即可批量添加，等待安装完成就行了。

**1. Nodejs**

```node
crypto-js
prettytable
dotenv
jsdom
date-fns
MD5@1.3.0 
md5@2.x 
canvas
tough-cookie
tslib
ws@7.4.3
ts-md5
jsdom -g
jsrsasign
jsencrypt
jieba
fs
form-data
json5
global-agent
png-js
@types/node
require
typescript
js-base64
axios
moment
node-jsencrypt
node-rsa
node-fetch
qs
ds
yml2213-utils

```

**2. Python3**
```python
requests
canvas
ping3
jieba
PyExecJS
aiohttp
redis
pycryptodome
```

**3. Linux**
```
--no-cache
build-base
g++
cairo-dev
pango-dev
giflib-dev
```

## 参考
> https://blog.csdn.net/y19900113/article/details/127805099
> https://blog.csdn.net/xiaojing_yu/article/details/124141113