---
title: "valine评论设置邮件通知和valine-admin后台管理"
subtitle: ""
date: 2022-08-19T19:37:20+08:00

author: "Kingpo"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
comment: true
weight: 0

draft: false
tags:
- hugo
categories:
- hugo

summary: ""
resources:
- name: featured-image
  src: featured-image.jpg
- name: featured-image-preview
  src: featured-image-preview.jpg

toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 给valine评论系统升级
valine评论系统搭起来后，整体比较简洁，甚至，简单。

如果没限制的话，任何人都可以留言，数据会记录到leancloud管理端。但是因为没有后台，你查看评论只能在你博客页面查看或者去leancloud管理端去管理原始评论数据，就不是很方便。

## 基础版邮件提醒
如果不想太折腾的话，可以配置基础版的邮件提醒，但是它只能提醒有评论而已，无法查看评论内容和跳转评论页面。

这种方法实际是通过修改leancloud的密码重置邮件提醒来实现的，属于巧借力。

配置方式可参考：[valine邮件提醒](https://valine.js.org/notify.html)

![](https://s.imgkb.xyz/abcdocker/2022/08/30/76557fb677cd3/76557fb677cd3.png)

## 进阶版邮件提醒和评论后台管理
进阶版邮件提醒，可以自定义配置回复模板样式，直接查看评论内容，和直达评论页面。

并且搭配使用独立的评论后台管理，可以在浏览器直接登录管理。

这里就需要使用到`Valine-Admin`，这是valine的增强版本，当前在GitHub上有多个开源版本。配置也不会很复杂。

> 这里采用leancloud国际版演示。

### 1. 云引擎部署
leancloud国际版进入后台，【云引擎】-》【部署】-》选择Git部署，输入`Valine-Admin`项目地址，保存，手动部署。
```git
https://github.com/DesertsP/Valine-Admin
```

![](https://s.imgkb.xyz/abcdocker/2022/08/30/25a0565930021/25a0565930021.png)

### 2. 添加变量
添加一大批环境变量，这里有些要注意的点。

![](https://s.imgkb.xyz/abcdocker/2022/08/30/e068a055e993f/e068a055e993f.png)


详细说明如下：

|         变量          |                                               示例                                               |                                                              说明                                                               |
| :-------------------: | :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|      SITE\_NAME       |                                          六月长河的博客                                          |                                                        \[必填\] 博客名称                                                        |
|       SITE\_URL       |                    [https://kingpo.netlify.app/](https://kingpo.netlify.app/)                    |                                                        \[必填\] 首页地址                                                        |
|     SMTP\_SERVICE     |                                                QQ                                                |         \[必填\] 邮件服务提供商，参照 [Supported services](https://nodemailer.com/smtp/well-known/#supported-services)          |
|      SMTP\_USER       |                              [xxxxxx@qq.com](mailto:xxxxxx@qq.com)                               |                                                      \[必填\] SMTP 用户名                                                       |
|      SMTP\_PASS       |                                           ccxxxxxxxxch                                           | \[必填\] SMTP 授权码（非邮箱独立密码！），参照[客户端设置](https://service.mail.qq.com/cgi-bin/help?subtype=1&id=28&no=1001256) |
|     SENDER\_NAME      |                                             六月长河                                             |                                                         \[必填\] 发件人                                                         |
|     SENDER\_EMAIL     |                              [xxxxxx@qq.com](mailto:xxxxxx@qq.com)                               |                                                        \[必填\] 发件邮箱                                                        |
|     MAIL\_SUBJECT     |                       `${PARENT_NICK}，您在${SITE_NAME}上的评论收到了回复`                       |                                                \[必填\]@通知邮件主题（标题）模板                                                |
|    MAIL\_TEMPLATE     |                              [填下文MAIL_TEMPLATE代码块](/#jump1/)                               |                                                    \[必填\]@通知邮件内容模板                                                    |
| MAIL\_SUBJECT\_ADMIN  |                                    `${SITE_NAME}上有新评论了`                                    |                                                  \[必填\] 博主邮件通知主题模板                                                  |
| MAIL\_TEMPLATE\_ADMIN |                               [填下文MAIL_TEMPLATE_ADMIN代码块]()                                |                                                  \[必填\] 博主邮件通知内容模板                                                  |
|      SMTP\_HOST       |                                          `smtp.qq.com`                                           |                                      \[必填\] SMTP\_SERVICE 留空时，自定义 SMTP 服务器地址                                      |
|      SMTP\_PORT       | `465或587`，参照 [POP3 与 SMTP](https://service.mail.qq.com/cgi-bin/help?id=28&no=167&subtype=1) |                                         \[必填\] SMTP\_SERVICE 留空时，自定义 SMTP 端口                                         |
|     SMTP\_SECURE      |                                               true                                               |                                                \[选填\] SMTP\_SERVICE 留空时填写                                                |
|    BLOGGER\_EMAIL     |                            [xxxxx@gmail.com](mailto:xxxxx@gmail.com)                             |                                        \[选填\] 博主通知收件地址，默认使用 SENDER\_EMAIL                                        |
|       ADMIN_URL       |                                    https://lean.kinpo.eu.org/                                    |                                                          评论管理后台地址                                                               |
|        COMMENT        |                                                                                                  |                                                          新评论内容                                                                       |
|         NICK          |                                                                                                  |                                                          新评论者昵称                                                           |
|    PARENT_COMMENT     |                                                                                                  |                                                          父级评论内容                                                           |
|      PARENT_NICK      |                                                                                                  |                                                 收件人昵称（被@者，父级评论人）                                                 |
|       POST_URL        |                                                                                                  |                                                    评论文章地址（完整路径）                                                     |

- **`MAIL_TEMPLATE`代码块：**
```html
  <html>
<head></head> 
<body> 
  <div style="border-radius: 10px 10px 10px 10px;font-size:13px; color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);"> 
  <div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;"> 
    <p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;color:#257db9">您在<a style="text-decoration:none;color:#257db9" href="${SITE_URL}">「Kingpo's Note」</a>上的留言有新回复啦！</p>
  </div> 
  <div style="margin:40px auto;width:90%"> 
    <p>亲爱的 <span style="color:#7777ff">${PARENT_NICK}</span> 同学，您曾在该页面/文章：</p> 
    <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;"> 
    ${POST_URL}
    </div> 
    <p>发布了以下评论：</p>
    <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;"> 
    <b>${PARENT_COMMENT} </b> 
    </div> 
    <p>刚刚，用户 <span style="color:#7777ff">${NICK}</span> 给您的回复如下：</p>
    <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;"> 
    <b>${COMMENT}</b> 
    </div> 
    <p>您可以点击 <a style="text-decoration:none; color:#12addb" href="${POST_URL}#comments">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#9fefaf" href="${SITE_URL}"> ${SITE_NAME}</a>。</p>
    <style type="text/css">a:link{text-decoration:none}a:visited{text-decoration:none}a:hover{text-decoration:none}a:active{text-decoration:none}</style> 
  </div> 
  </div> 
  <center> 
  Powered by LeanCloud
</br>
  Copyright &copy; 2022 <a href="https://kingpo.netlify.app" style="color:auto;">六月长河</a>
  <br /> 
  <a href="https://kingpo.netlify.app"><img style="height:70px !important;" src="https://kingpo.netlify.app/images/avatar.png" /></a> 
  </center> 
  <br /> 
  <br />  
</body>
</html>
```

样式如下：

![](https://s.imgkb.xyz/abcdocker/2022/08/30/9fd8124a02846/9fd8124a02846.png)


- **`MAIL_TEMPLATE_ADMIN`代码块：**
```html
  <html>
<head></head>
<body>
  <div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"> 
  <h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 0px;">您在<a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">${SITE_NAME}</a>上的文章有了新的评论</h2> 
  <p><strong>${NICK}</strong>回复说：</p>
  <div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">
    ${COMMENT}
  </div>
  <p> 您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a><br /></p> 
  <p><strong>评论页面为</strong></p>
  <p><strong>${POST_URL}</strong></p>
  <br />
  </div>
</body>
</html>
```

样式如下图：

![](https://s.imgkb.xyz/abcdocker/2022/08/30/67d6c76cfb7aa/67d6c76cfb7aa.png)

 这里注意，**`MAIL_TEMPLATE_ADMIN`代码块：** 和 **`MAIL_TEMPLATE`代码块：** 两个模板的内容不要搞反，我参考[valine-admin-document/](https://deserts.io/valine-admin-document/)发现是填反了，会报错，报错日志如下
![](https://s.imgkb.xyz/abcdocker/2022/08/30/9c835599213b5/9c835599213b5.png)


### 3. 绑定自定义域名
这里需要绑定自定义域名一个域名，它是你后台评论管理的地址，在你定义的域名解析中添加一条CNAME记录。

![](https://s.imgkb.xyz/abcdocker/2022/08/30/3ffa42977f820/3ffa42977f820.png)


### 4. 评论管理
绑定自定义域名后，第1步也部署好后，即可进行评论管理。

首次使用需要先访问管理员注册页面`https://绑定的域名/sign-up`，注册管理员登录信息，如：[https://lean.kinpo.eu.org/sign-up](https://lean.kinpo.eu.org/sign-up)

然后直接使用域名就可以登录了。功能也比较简单，标记垃圾评论，删除，跳转查看。
![](https://s.imgkb.xyz/abcdocker/2022/08/30/ebe3c0eb13e3c/ebe3c0eb13e3c.png)

![](https://s.imgkb.xyz/abcdocker/2022/08/30/fcb094b0acb28/fcb094b0acb28.png)

### 5. 定时任务设置
因为leancloud免费版本提供的实例，有休眠策略，如果没有请求，会自动休眠。为了保持实例一直在线，我们可以设置定时任务函数来来唤醒。

![](https://s.imgkb.xyz/abcdocker/2022/08/31/84b8963c89ba4/84b8963c89ba4.png)

- **两个定时任务函数设置**

参看[Valine Admin 配置手册定时任务设置](https://deserts.io/valine-admin-document/#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E8%AE%BE%E7%BD%AE)

- **利用github actions设置定时**

设置定时任务函数，很多人运行几天后会遇到leancloud平台因为流控原因无法激活定时唤醒任务的问题。

另一种方式是利用github actions中的workflow定时执行命令访问leancloud的web域名，实现唤醒。
```
name: 'wake comment system'
on:
  push:
  schedule:
    - cron: '7,33,53 0-15,23 * * *'
    
jobs:
  bot:
    runs-on: ubuntu-latest
    steps:
      - run: curl -sLo /dev/null ${{ secrets.DOMAIN }}
```
仓库->settings->secrets->actions->New repository secret  
Name: DOMAIN  
Value: 你的web域名

--------------------------------------------

**参考资料：**
>Valine Admin 邮件回复提醒  https://xiabor.com/valine-admin.html#valine%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92
> 
>Valine Admin 配置手册  https://deserts.io/valine-admin-document/

