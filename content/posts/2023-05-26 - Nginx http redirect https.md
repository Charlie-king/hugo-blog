---
title: "Nginx实现http和https复用1个端口的2种解决方式" 
subtitle: ""
date: 2023-05-26T15:40:39+08:00

lastmod: 2023-06-15T15:40:39+08:00
draft: false
description: "在无法使用80,443标准端口情况下，通过Nginx复用1个端口实现访问http和https"
keywords: 
- Nginx
- 端口复用
- http重定向https
tags:
- Nginx
categories:
- Nginx
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

## http和https背景知识

http和https是两种常见的网络传输协议，它们的区别在于其安全性。

http是明文传输，数据在传输时没有加密，存在被读取和修改数据的风险，http传输敏感信息如密码等不够安全。

https使用SSL或TLS协议来加密传输过程中的数据，数据在传输过程不会被窃取和篡改。

http默认端口是80，https默认端口是443。

当你浏览器输入访问`http:example.com`时，实际访问的是`http:example.com:80`。

当你浏览器输入访问`https:example.com`时，实际访问的是`https:example.com:443`。

浏览器输入网址一般我们会简单只输入：`example.com`，此时默认是指向`http:example.com`，如果要通过https协议访问，需要完整输入前缀https：`https:example.com`。

为了安全，所以我们网站要设置只通过https模式访问，那么访问`example.com`和`http:example.com`时怎么办呢？答案就是设置重定向，http自动重定向到https。

`example.com` / `http:example.com` -> `https:example.com`

此时你访问网站，带不带http，都最终会指向https。

## 常规http重定向

当你的80和443端口都可用时，通过Nginx可以很方便的设置http重定向到https，只需在配置文件`nginx.conf`中进行以下配置即可。
```
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}
```

1.  `listen 80;` - 监听HTTP请求的默认端口80。
2.  `server_name example.com;` - 将请求的主机名设为example.com。
3.  `return 301 https://$server_name$request_uri;` - 将请求重定向到HTTPS的443端口，并将请求URI保持不变。
4.  `return 301` - 返回301状态码，表示永久性重定向。这将通知浏览器将HTTP请求重定向到HTTPS请求。


## 监听一个非标端口实现访问http和https

如果80和443端口不可用，比如在家庭宽带的公共ip这两端口是被封的，那么只能分配其他端口。

此时需要给http和https各自设置一个端口，这里以http:2222和https:3333为例。

此时我们访问网站时需要加上端口号，`http:example.com:2222`，`https:example.com:3333`。

因为指定了端口，每次输入访问地址时就会比较麻烦，主要是因为你要记住两个端口并区分，如果你只允许https，那对应访问会有下面的这些情况：

- 端口2222
 `http:example.com:2222`   只http访问，此时会报错，因为网站只允许https，需要设置重定向到`https:example.com:3333`，我们先设置它。`https:example.com:2222`会报错，因为2222是http的端口，不能用https访问。

- 端口3333
 `http:example.com:3333`  http访问的https，也会报错，提示需要用https访问。你得输入 `https:example.com:3333` 。

总结：
```
#2222和3333

http:example.com:2222  -> https:example.com:3333 （重定向后）
https:example.com:2222    无法访问

http:example.com:3333     无法访问
https:example.com:3333 -> https:example.com:3333 


#对比原来的标准端口

http:example.com  -> https:example.com （重定向后）
https:example.com    https:example.com

```

总之，繁琐的地方是要2个端口不好记，并且对应需要区分每个端口对应http和https。

那么能不能实现这种呢？
```
#只用一个非标准端口实现
http:example.com:3333  -> https:example.com:3333 
https:example.com:3333    https:example.com:3333
```

答案是可以的，这里提供两种方法。

### 方法1：利用497

利用错误码497进行重定向。

Nginx配置文件添加
```
server { 
	listen 3333 ssl; 
	server_name your.site.tld; 
	ssl on; 
	error_page 497 https://$host:3333$request_uri; 
	 }
```

这里实现的原理是利用了497错误码页面，我们设置https监听端口为3333后，如果用http访问`http:example.com:3333`，Nginx会返回错误码497页面，告诉你错误请求，纯 HTTP 请求已发送到 HTTPS 端口，我们直接修改497页面为我们https地址即可。此时http也能访问，因为触发了497错误码，重定向到了https地址。
```
#497错误码页面

400 Bad Request
The plain HTTP request was sent to HTTPS port
```

Nginx Proxy Manager里配置方式，在host代理advanced自定义填写以下代码即可。
`error_page 497 https://$host:3333$request_uri; 

![](https://s3.bmp.ovh/imgs/2023/06/15/6fddd0ec8fe27835.png)


### 方法2：stream_ssl_preread实现

Nginx里`stream_ssl_preread`可以直接实现http访问https，配置如下：

```
stream {  
upstream http {  
server 127.0.0.1:80;  
}  
upstream https {  
server 127.0.0.1:443;  
}  
  
map $ssl_preread_protocol $upstream {  
default https;  
"" http;  
}  
  
server {  
listen 3333;  
listen [::]:3333;  
proxy_pass $upstream;  
ssl_preread on;  
}  
}
```