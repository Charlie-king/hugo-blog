---
title: "docker运行报错Job for docker.service failed because the control process exited with error code的一种原因"
subtitle: ""
date: 2023-07-04T09:16:06+08:00

lastmod: 2023-07-04T09:25:06+08:00
draft: false
description: "Job for docker.service failed because the control process exited with error code.
See "systemctl status docker.service" and "journalctl -xeu docker.service" for details."
keywords: 
- docker
- linux
- docker.service failed 

tags:
- linux
- docker
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
## docker 运行报错

报错提示为：
```
Job for docker.service failed because the control process exited with error code. See "systemctl status docker.service" and "journalctl -xeu docker.service" for details.
```

## 一种原因

添加下载源时候，符号出错。

最后一个地址后不能加逗号，所有逗号均为英文符号。

`/etc/docker/deamon.json`
```
{
"registry-mirrors": [
"https://dockerproxy.com",
"https://docker.nju.edu.cn",
"https://mirror.baidubce.com",
"https://mirror.gcr.io"
]
}
```