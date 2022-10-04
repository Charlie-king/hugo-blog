---
title: "hugo博客增加赞赏功能，基于LoveIt/LeaveIt/FixIt主题"
subtitle: ""
date: 2022-10-04T16:44:58+08:00
lastmod: 2022-10-04T23:39:58+08:00

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
- 静态博客

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: true

seo:
  images: []

# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## 前言
博客赞赏，虽说打赏的人不一定会有很多，但这个功能不能少，赞赏是一种美德，有余力而为之。多数主题不自带赞赏功能，这篇文章的这套打赏支持方案，基于LoveIt，LeaveIt，FixIt这系列主题，他们本质都是由同一个主题演变迭代。其余博客主题可以自行尝试，区别不大，只要把主题中修改的模板直接改到hugo的模板里即可。

{{< admonition warning 特别提示>}}
赞赏功能需要用到.scss样式，hugo版本需要使用扩展版hugo_extended才能支持。大家编译时要选用对应系统的扩展版本。
{{< /admonition >}}

![](https://s3.bmp.ovh/imgs/2022/10/04/aef4aaadfe233606.png)


## 配置赞赏开关
### 全局配置
在 `config.toml` 配置文件中修改中文预演代码为小写的 `zh-cn`，如下：

```toml
defaultContentLanguage = "zh-cn"

```

在 `config.toml` 添加以下变量。这里配置的全局生效，即所有文章都会生效。
  ```toml
  [params.reward]                           # 文章打赏
    enable = true                           # true为开启 flase为关闭
    wechat = "/images/wechat.png"           # 微信二维码文件路径
    alipay = "/images/alipay.png"           # 支付宝二维码文件路径
```

### 单篇文章配置
也可对单篇文章单独配置，在文章的开头参数添加变量配置。

全局配置和单篇文章配置都设置的情况下，优先以文章的配置为生效依据。
```
reward: false  # true为开启 flase为关闭
``` 

![](https://s3.bmp.ovh/imgs/2022/10/04/cafb825149308838.png)


## 修改主题中的文件
### 1.修改国际化文件

在 `\themes\FixIt\i18n\zh-CN.toml` 配置文件中添加如下配置：
```
[reward]
other = "赞赏支持"                          #other中的文字可以自由更改

[rewardAlipay]
other = "支付宝打赏"

[rewardWechat]
other = "微信打赏"

```

### 2.添加页面模板文件
在 `\themes\FixIt\layouts\partials\single\` 中新建 `reward.html` html内容如下：
```html
{{ if or .Params.reward (and .Site.Params.reward.enable (ne .Params.reward false)) -}}
<div class="post-reward">
    <input type="checkbox" name="reward" id="reward" hidden/>
    <label class="reward-button" for="reward">{{ T "reward" }}</label>
    <div class="qr-code">
        {{ $qrCode := .Site.Params.reward }}
        {{- $cdnPrefix := .Site.Params.cdnPrefix -}}
        {{ with $qrCode.wechat -}}
        <label class="qr-code-image" for="reward">
            <img class="image" src="{{ $cdnPrefix }}{{ . }}">
            <span>{{ T "rewardWechat" }}</span>
        </label>
        {{- end }}
        {{ with $qrCode.alipay -}}
        <label class="qr-code-image" for="reward">
            <img class="image" src="{{ $cdnPrefix }}{{ . }}">
            <span>{{ T "rewardAlipay" }}</span>
        </label>
        {{- end }}
    </div>
</div>
{{- end }}

```


### 3.修改文章模板文件
修改 `/themes/FixIt/layouts/posts/single.html` 找到 `{{- /* Content */ -}}`，由于不同版本这里模块内容比较多，避免混淆，这里小技巧，找到 `{{- /* Content */ -}}`模块里的 `</div>`标签，在其前添加下面代码：

```
  {{- /* Reward */ -}}                 
  {{- partial "single/reward.html" . -}} 

```

修改后如下【（# 添加打赏模块）字眼需删除】：

```
  {{- /* Content */ -}}

  {{- $content := dict "Content" .Content "Ruby" $params.ruby "Fraction" $params.fraction "Fontawesome"

  $params.fontawesome | partial "function/content.html" | safeHTML -}}

  {{- if $params.password -}}

  {{- $saltLen := strings.RuneCount (trim $params.password "") -}}

  {{- $saltLen = cond (eq (mod $saltLen 2) 0) (add $saltLen 1) $saltLen -}}

  {{- $base64EncodeContent := $content | base64Encode -}}

  {{- $content = printf "%v%v%v"

  (substr $base64EncodeContent 0 $saltLen)

  (substr (sha256 $params.password) $saltLen)

  (substr $base64EncodeContent $saltLen)

  -}}

  {{- end -}}

  <div class="content" id="content" {{ with $params.password }}data-password="{{ md5 $params.password }}" {{ end }} {{

    with $params.password }}data-content="{{ $content }}" {{ end }}>

    {{- if not $params.password -}}

    {{- /* Expiration Reminder */ -}}

    {{- partial "single/expiration-reminder.html" . -}}

    {{- $content -}}

    {{- else -}}

    {{- partial "single/fixit-decryptor.html" . -}}

    {{- end -}}

    {{- /* promote */ -}}  

    {{- partial "single/promote.html" . -}}

    {{- /* Reward */ -}}                   #添加打赏模块

    {{- partial "single/reward.html" . -}} #添加打赏模块

  </div>

```


### 4.增加css样式代码
在`themes\FixIt\assets\css\_custom.scss`中，添加以下样式代码：
以下代码实现效果是赞赏码自动折叠，点击【赞赏支持】按钮，展开二维码，如果你想让赞赏码直接展示而不是折叠，注释掉`display: none`这行，代码里已有说明。

```css
/* 打赏 */

article .post-reward {

    margin-top: 20px;

    padding-top: 10px;

    text-align: center;

    border-top: 1px dashed #e6e6e6

}

  

article .post-reward .reward-button {

    margin: 15px 0;

    padding: 3px 7px;

    display: inline-block;

    color: #c05b4d;

    border: 1px solid #c05b4d;

    border-radius: 5px;

    cursor: pointer

}

  

article .post-reward .reward-button:hover {

    color: #fefefe;

    background-color: #c05b4d;

    transition: .5s

}

  

article .post-reward #reward:checked~.qr-code {

    display: block

}

  

article .post-reward #reward:checked~.reward-button {

    display: none  //如果要让赞赏码直接展示而不是折叠，这行直接注释掉

}

  

article .post-reward .qr-code {

    display: none //如果要让赞赏码直接展示而不是折叠，这行直接注释掉

}

  

article .post-reward .qr-code .qr-code-image {

    display: inline-block;

    min-width: 200px;

    width: 40%;

    margin-top: 15px

}

  

article .post-reward .qr-code .qr-code-image span {

    display: inline-block;

    width: 100%;

    margin: 8px 0

}

  

article .post-reward .qr-code .image {

    width: 200px;

    height: 200px

}

```

{{< admonition tips 小提示>}}
这里主题文件的修改，你可以完全拷贝一份复制到hugo站点框架里对应目录下，如果无此目录则直接新建，然后再做修改，这样不会影响主题里文件，避免你主题升级之类直接覆盖更新。hugo会优先从站点框架里调用模板文件，匹配不到再在主题模板文件里调用。
{{< /admonition >}}
![](https://s3.bmp.ovh/imgs/2022/10/04/2d0da5f24f8ba19c.png)


## 测试查看效果
翻到文章文末，查看效果，我这里还添加了关注公众号的二维码，添加过程和赞赏模式一样的。
![](https://s3.bmp.ovh/imgs/2022/10/04/f68ecc158a739250.png)

![](https://s3.bmp.ovh/imgs/2022/10/04/f6329b2e0dd338ff.png)



## 参考资料
https://cywhat.cn/Loveit%E4%B8%BB%E9%A2%98%E5%BC%80%E5%90%AF%E6%96%87%E7%AB%A0%E8%B5%9E%E8%B5%8F/#%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E6%89%93%E8%B5%8F%E5%8A%9F%E8%83%BD

