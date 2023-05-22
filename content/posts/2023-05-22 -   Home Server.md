---
title: "家庭服务器打通最后一公里"
subtitle: ""
date: 2023-05-22T16:13:18+08:00

lastmod: 2023-05-22T17:13:18+08:00
draft: false
description: "家庭服务器折腾记"
keywords: ""
tags:
- linux
- ubuntu
- home server
categories:
- 服务器
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
## 家庭服务器

这半个多月来，用闲置的电脑和已有的家庭宽带，从wsl折腾到vmware，安装了Ubuntu系统，折腾搭建家庭服务器，安装一系列软件，折腾了无数个日夜，遇到了很多问题，并逐步解决，今天终于打通最后一公里，Nginx带端口反向代理完成，打通网络最后一公里，算是圆满了。先mark一下，接下来安排时间再细化记录。

## 折腾过程

### vmware安装ubuntu
### 终端工具
### docker
### portainer
### 青龙面板
### ddns-go
### nginx proxy manager 

Nginx Proxy Manager (NPM) 默认监听80和443端口，但如果你想修改为其他端口，如8000和9000，你需要更改NPM的配置。请按照以下步骤操作：

1.  首先，停止运行的Nginx Proxy Manager Docker容器：
    
    Copy
    
    ````
    docker-compose down
    ```
    
    或者
    
    ````
    
    docker stop <container_id>
    
    Copy
    
2.  打开`docker-compose.yml`文件（如果你使用Docker Compose），或者查找启动Docker容器的命令行参数。你需要找到映射到Nginx Proxy Manager容器内的端口。
    
    对于`docker-compose.yml`文件，它可能是这样的：
    
    yaml
    
    Copy
    
    ````
    services:
      app:
        image: 'jc21/nginx-proxy-manager:2.10.3'
        ports:
          - '80:80'
          - '443:443'
          - '81:81'
    ```
    
    如果你是通过命令行启动容器，它可能类似于:
    
    ````
    
    docker run -d --name nginx-proxy-manager -p 80:80 -p 443:443 -p 81:81 jc21/nginx-proxy-manager:2.10.3
    
    Copy
    
3.  修改端口映射。将`80:80`更改为`8000:80`，将`443:443`更改为`9000:443`。对于`docker-compose.yml`文件，修改后的内容应该是这样的：
    
    yaml
    
    Copy
    
    ````
    services:
      app:
        image: 'jc21/nginx-proxy-manager:2.10.3'
        ports:
          - '8000:80'
          - '9000:443'
          - '81:81'
    ```
    
    如果你是通过命令行启动容器，修改后的命令应该是：
    
    ````
    
    docker run -d --name nginx-proxy-manager -p 8000:80 -p 9000:443 -p 81:81 jc21/nginx-proxy-manager:2.10.3
    
    Copy
    
4.  重新启动Nginx Proxy Manager容器：
    
    Copy
    
    ````
    docker-compose up -d
    ```
    
    或者
    
    ````
    
    docker start <container_id>
    
    Copy
    

现在，你的Nginx Proxy Manager应该已经在8000和9000端口上监听了。请注意，由于更改了默认端口，你需要在访问NPM的管理界面时指定新的端口。例如，如果你的服务器IP是`example.com`，请使用`http://example.com:8000`访问HTTP网站，使用`https://example.com:9000`访问HTTPS网站。

另外，当你在NPM中添加新的代理主机时，确保将“Scheme”设置为“HTTP”或“HTTPS”，根据需要将“Forward Hostname/IP”设置为目标服务器的地址，并将“Forward Port”设置为目标服务器的端口。然后，在“Custom Locations”部分，可以根据需要添加自定义重写规则、访问控制等。


### cloudflare tunnel
### 光猫和路由器
桥接/开启IPV6
### alist
### 导航站homepage/tools
### zerorier和tailscale
### vaultwarden





https://zhuanlan.zhihu.com/p/595775684