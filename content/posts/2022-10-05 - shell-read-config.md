---
title: "shell中read在控制台不能删除内容的解决方式"
subtitle: ""
date: 2022-10-05T00:02:36+08:00
lastmod: 2022-10-07T15:02:36+08:00

author: "Kingpo"
authorLink: ""
authorEmail: ""
description: "解决shell中read在控制台不能删除内容的方法"
keywords: 
- 脚本
- read
- shell
comment: true
weight: 0

draft: false

tags:
- shell
categories:
- 脚本

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 问题
因为静态博客创建，上传提交需要进行多个git命令，操作起来比较麻烦，于是沿用主题开发者的shell脚本命令，将多个命令直接通过一个脚本封装，双击一键运行即可，非常方便。

但是，在使用时遇到一个问题：运行上传脚本时，输入commit信息，输错了 backspace 删除键无法全部删除，只删除一个字符，然后就无法删除了。

```bash
#!/bin/bash

cd ..
git add .
read -p "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: Kingpo update $(date +'%F %a %T')"
fi
git commit -m ":pencil: $commitMsg"
git push
```

网上查了一下，问题应该出在read命令这里。

## read命令
Shell中内置read命令，功能是读取从键盘输入的数据。

read命令用法
``` 
read [-options] [variables]
```

`options`表示选项，如下表所示；`variables`表示用来存储数据的变量，可以有一个，也可以有多个。

Shell read 命令支持的选项
|选项 | 说明|
|---|---|
|-a array|把读取的数据赋值给数组 array，从下标 0 开始。|
|-d delimiter|用字符串 delimiter 指定读取结束的位置，而不是一个换行符（读取到的数据不包括 delimiter）。|
|-e|在获取用户输入的时候，对功能键进行编码转换，不会直接显式功能键对应的字符。|
|-n num|读取 num 个字符，而不是整行字符。|
|-p prompt|显示提示信息，提示内容为 prompt。|
|-r|原样读取（Raw mode），不把反斜杠字符解释为转义字符。|
|-s|静默模式（Silent mode），不会在屏幕上显示输入的字符。当输入密码和其它确认信息的时候，这是很有必要的。|
|-t seconds|设置超时时间，单位为秒。如果用户没有在指定时间内输入完成，那么 read 将会返回一个非 0 的退出状态，表示读取失败。|
|-u fd|使用文件描述符 fd 作为输入源，而不是标准输入，类似于重定向。|

## 问题解决
我是在windows系统上，运行.sh脚本遇到这个问题，这里应该是read在获取用户输入的时候，第一次进行了编码转换，第二次就不转换了，直接将功能键对应显式成其字符。致使在输入删除功能键时只能删除一位。

相同的问题会出现在你按这些功能键backspace键、↑、↓、←、→、F1、F2、F3、F4
输入后显示结果如下：
```
^H^H^H^[[A^[[B^[[D^[[C^[OP^[OQ^[OR^[OS
```

**解决方式：**
运用 -e 参数解决。

直接在p前加e即可。
```
read -ep 
```

我这里修改后的脚本如下：
```bash
#!/bin/bash

cd ..
git add .
read -ep "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: Kingpo update $(date +'%F %a %T')"
fi
git commit -m ":pencil: $commitMsg"
git push
```

现在功能键就完全正常，删除键执行的删除的功能。

## 参考
> https://blog.csdn.net/lcm_linux/article/details/102899524    
> http://c.biancheng.net/view/2991.html