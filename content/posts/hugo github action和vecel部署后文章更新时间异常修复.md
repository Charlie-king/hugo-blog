---
title: "hugo github action|vecel部署后文章更新时间异常修复"
subtitle: ""
date: 2022-08-14T14:35:18+08:00
draft: false
author: "Kingpo"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
comment: true
weight: 0

tags:
- hugo
categories:
- hugo

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""
resources:
- name: featured-image
  src: featured-image.jpg
- name: featured-image-preview
  src: featured-image-preview.jpg

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
### 困扰的问题

hugo博客搭建好后，陆陆续续发现一些问题。大都成功进行了处理。

其中一个最头大的问题就是：文章更新时间异常。

{{< admonition question 文章更新时间异常>}}
文章更新时间，本地和远程部署的不同，远程通过`github action|vecel`部署，远程部署后的时间不对，会把**所有文章**时间都更为最新。
{{< /admonition >}}


每次更新文章后，本地显示所有文章更新时间正常，没有修改的还是保留旧的更新日期，而通过`github action|vecel`自动部署后，所有文章更新时间都会改为最新此次更新时间，那些此次没有做修改的文章也一并全部更新。

注意，不是发表时间，发表时间没有问题。

这个bug，花费了我很多时间精力才找到原因，终于解决了这个问题。

### hugo时间字段

解决这个问题，我们先说hugo博客的几个时间字段说起。

**hugo全局配置文件为`config.toml/yaml/json`**

在hugo中日期（时间）是非常重要的字段，hugo的官方配置文件`configuration`(https://gohugo.io/getting-started/configuration/#configure-dates)提供一个配置日期的section `[frontmatter]`
```toml
[frontmatter]
  date = ['date', 'publishDate', 'lastmod'] #取值生效按括号里顺序
  expiryDate = ['expiryDate']
  lastmod = [':git', 'lastmod', 'date', 'publishDate']
  publishDate = ['publishDate', 'date']

```
- `publishDate`: 变量，发表日期
- `expiryDate`：变量，有效期
- `lastmod`：变量，最后修改日期
- `:git`：git文件提交修改时间

这是官方列举的字段和基本配置，不过说明不是很详细。

**这里说明一下，` = `左边的是变量，右边中括号的是变量值，需要在对应模板里添加后才生效。**

### 最后更新时间

这里我们只探讨最后更新时间 `lastmod`

一般主题里的配置方式是这样：

```toml
[frontmatter]
  lastmod = [":git", ":fileModTime", "lastmod", ":defalut"]

```
- `:git`：git文件提交修改时间
- `:fileModTime`：文件修改时间
- `lastmod`：文章里lastmod字段
- `:defalut`：默认时间

这里`lastmod`变量获取，以git文件提交修改时间，文件修改时间这样排，文章里"`lastmod`"字段可不加，这样是没问题的。

我的博客就是以此配置为准，本地运行时，**更新时间显示正常**。

<br>

1.  如果要加"`lastmod`"字段，在创建文章模板里添加以下一行。添加"`lastmod`"，有个好处就是可自由修改这个字段的时间。

hugo默认位置为`archetypes/default.md`或者主题下目录下`xx主题/archetypes/posts.md`，主题目录下如果有增加模板，创建时会以主题目录下的模板来创建。

```markdown
lastmod: {{ .Date }}
```

2. 然后再去`config.toml/yaml/json`

调整这里顺序即可：
```toml
[frontmatter]
  lastmod = [":git", "lastmod", ":fileModTime", ":defalut"]

```


### 问题解决

好了，按以上配置，本地运行时，**更新时间显示正常**，这没有任何问题。

问题来了，通过GitHub action 部署后（我的verccel从GitHub直接同步过去），就出现问题了，每次一提交更新，会把**所有文章**时间都更为最新。

本地端没问题，说明问题就出在GitHub action 部署过程了。

> 补充提示一下，有一个坑 ：
> GitHub action的Schedule 运行不准时

GitHub action上的默认配置时间有个坑，设定的 **schedule** 是**UCT**时间的08:00，比北京时间快8个小时。因此运行环境要改为北京时间。

**解决方法：**

#### 0. 填坑

   在`.github/workflows/xx.yml`

yml文件中添加 2行设置当前环境时区

```yml
name: Hugo build and deploy
on:
	push:

env:
	TZ: Asia/Shanghai # 设置当前环境时区
```

####  1. 开启gitinfo
`config.toml/yaml/json`  
```toml
#获取git信息
enableGitInfo = true  #设为true

```

#### 2.  gihutb action里yaml上配置

建构前新增以下配置，主要是quotePath，默认情况下，文件名包含中文时，git会使用引号吧文件名括起来，这会导致action中无法读取`:GitInfo`变量，所以要设置`Disable quotePath`
```
- name: Git Configuration
        run: |
          git config --global core.quotePath false
          git config --global core.autocrlf false
          git config --global core.safecrlf true
          git config --global core.ignorecase false
```

使用`checkout`的话
`fetch-depth` 需要设为0，depth默认是为1，默认只拉取分支最近一次commit，可能会导致一些文章的`GitInfo`变量无法获取，设为0代表拉去所有分支所有提交。

```yml
	uses: actions/checkout@v2
		  fetch-depth: 0   #设为0
```

以下是我最终的yml配置文件

```yml
name: Hugo build and deploy
on:
  push:

env:
  TZ: Asia/Shanghai # 设置当前环境时区

jobs:
  Actions-Hugo-Deploy:
    runs-on: ubuntu-latest
    steps:

      - name: Check out repository code
        uses: actions/checkout@v2
        with:
          submodules: recursive  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0         # Fetch all history for .GitInfo and .Lastmod

      - name: Git Configuration
        run: |
          git config --global core.quotePath false
          git config --global core.autocrlf false
          git config --global core.safecrlf true
          git config --global core.ignorecase false
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: latest
          extended: true
      - name: Build Hugo static files
        run: hugo -v --gc --minify
      - name: Deploy to Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
          external_repository: Charlie-king/Charlie-king.github.io
          publish_branch: main
          publish_dir: ./public

  
      - name: NPM install
        run: npm install
      - name: Update Algolia index
        env:
          ALGOLIA_APP_ID: B6R922P6DD
          ALGOLIA_ADMIN_KEY: ${{ secrets.ALGOLIA_ADMIN_KEY }}
          ALGOLIA_INDEX_NAME: 'dev_hugo'
          ALGOLIA_INDEX_FILE: './public/index.json'
        run: npm run algolia
  

```



> 参考：
> 
> [# Github Action 自动修改文章的更新日期](https://www.dianbanjiu.com/post/github-action-%E8%87%AA%E5%8A%A8%E4%BF%AE%E6%94%B9%E6%96%87%E7%AB%A0%E7%9A%84%E6%9B%B4%E6%96%B0%E6%97%A5%E6%9C%9F/)
> 
> [# [BUG] 目录所有文章-最近更新，本地与远程打包不同，数据不对](https://github.com/hugo-fixit/FixIt/discussions/91)




