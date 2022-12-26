# hugo博客搭建之旅


<!--more-->

## hugo个人博客搭建
### 前言
记录一下，建站过程，采坑记录，随时更新。

一直以来都有搭建个人博客的想法，然而一直以来都没有开始行动。近来逛V站，又刷到了个人博客方面的内容，直接行动了。

GitHub上最主流的3大静态博客建站框架为：
- hugo
- hexo
- Jekyll

为什么选择[hugo](https://gohugo.io/)，v站上留言推荐最多的博客建站框架，[GitHub](https://github.com/gohugoio/hugo)上star数60.5k ，广受欢迎。
它是一种用 Go 语言编写的静态网站生成器。简单、易用、高效、易扩展、快速部署。

号称是世界上编译最快的框架，搭建静态网站，简单直接。


我的这个网站托管在GitHub pages(https://charlie-king.github.io)和vercel(https://kingpo.vercel.app)上，虽然服务器都在国外，但完全免费，且无需备案。

如果要配置到自己国内服务器上，需要购买服务器，并购买域名，进行域名备案。

### 建站工具
框架：hugo

版本：hugo extended 0.101.0

主题：FixIt

托管：GitHub和vercel

### 目前配置实现的功能
使用到的主题是FixIt(https://github.com/Lruihao/FixIt)，是基于LoveIt(https://github.com/dillonzq/LoveIt)改进而来。

[FixIt文档](https://fixit.lruihao.cn/)  | [LoveIt文档](https://hugoloveit.com/)
1. 桌面端/移动端响应式布局
2. 深色/浅色主题模式
3. 搜索功能配置algolia（独立配置）
4. 配置评论功能valine（独立配置）
5. valine开启邮箱回复提醒和配置后台valine-admin管理（独立配置）
6. 总访问量，文章访问量，字数统计，文章预计阅读时间
7. 微信，支付宝赞赏支持（独立配置）
8. 添加社交账户，文章分享
9. 锁定/复制代码
10. 内嵌音乐播放器
11. 内嵌bilibili视频
12. 开启百度统计（独立配置）
13. 使用GitHub Action自动化部署到GitHub pages并同步托管到vercel（独立配置）
14. 结合obsidian插件quickadd本地快速创建文件（独立配置）
15. 搭建GitHub、sm.ms图床，配置picgo插件（独立配置）


### 搭建过程
#### 安装hugo
[hugo](https://gohugo.io/) 可以查看官方文档。

以下讲解均基于windows环境。

**下载安装**
- 方式1：

从[GitHub](https://github.com/gohugoio/hugo/)下载源码，自行编译成二进制文件，需要先安装go运行环境。


- 方式2：

从[GitHub](https://github.com/gohugoio/hugo/releases)
直接直接下载编译好的二进制文件`.exe`

这里用的是扩展版
[hugo_extended_0.101.0](https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_extended_0.101.0_Windows-64bit.zip)

**配置环境变量**

下载好后，解压到某个文件夹里，复制到bin层路径，添加到电脑的环境变量里。

 `控制面板 > 系统和安全 > 系统 > 高级系统设置 > 高级 > 环境变量`
 
在用户变量和系统变量里，都点击`path`新建，复制你（hugo.exe所在目录）`D:xxx/hugo/bin`填进去。
 
恭喜你，你已经完成了hugo的安装。

测试：打开命令行，输入`hugo version`，确认，可以看到版本号，说明已经正确配置好了hugo环境。
```
hugo v0.101.0-466fa43c16709b4483689930a4f9ac8add5c9f66+extended windows/amd64 BuildDate=2022-06-16T07:09:16Z VendorInfo=gohugoio
```


#### 创建网站
先建立一个目录，比如我这里d盘下project，等会生成的博客网站存放在里面

命令行
```
cd project
hugo new site hugo-blog

```
这时会提示祝贺你，你的hugo网站已经生成，然后提示你去下载主题。
```
Congratulations! Your new Hugo site is created in D:\project\hugo-blog.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>\<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".
```


这时你会在mywebsite文件夹里看到你刚生成blog文件夹。
blog文件夹里文件目录为
```
D:.
│  config.toml   #全局参数配置文件
│
├─archetypes   #模板文件所在文件夹
│      default.md  #模板文件，hugo new 新建Markdown文件自动生成部分
│
├─content  #存放网页内容的目录
├─data  #存放数据文件，一般json文件，hugo提供相关命令可从data中读取数据，渲染到html页面，实 
│        现业务数据与模板分离
│
├─layouts  #存放自定义的模板文件，hugo优先使用此目录下模板，未发现再去themes同目录下查找
├─public #编译生成的静态文件存放目录
├─static #存放静态文件，如css，js，img等文件目录，hugo直接复制到public目录下，不会做渲染
└─themes #存放网站主题，可存多个主题，在config.toml全局文件中配置指定，也可在执行渲染是加参 
		  数–theme=xx指定
```

到这里你的网站已经创建好了，再输入以下命令，网站就跑起来啦。
```
hugo server
```

在浏览器里，输入：localhost:1313
就可以访问了。

不过这时候网站还是空的，hugo初始生成的网站默认不带样式，我们需要选个主题安装。

#### 安装主题

主题要下载到`themes`这个目录下，使用`git clone` ，如没配置git ，参看我的git安装配置文章。

进到`themes`目录，初始化`git init` 

下载主题：
`git clone https://github.com/dillonzq/LoveIt` 
或
`git clone https://github.com/dillonzq/FixIt`

下载完后，里面一般都会有一个`exampleSite\`文件夹，里面放的是主题的样式，你可以直接把里面的`config.toml`中的内容复制到你的博客主目录的`config.toml`中。

下一步，开始个性化配置config文件。

#### 修改config文件

`config.toml`文件是全局配置参数文件，是博客页面**功能控制的总开关**。

每个主题都有他特有的一些功能，都在其提供的`config.toml`里面开关修改。

我选择这个的主题FixIt为例，在其官方站点有详细的主题说明，示例配置如下：
```toml
[params]
  #  FixIt 主题版本
  version = "0.2.X" # 例如："0.2.X", "0.2.15", "v0.2.15" 等
  # 网站描述
  description = "这是我的全新 Hugo FixIt 网站"
  # 网站关键词
  keywords = ["Hugo", "FixIt"]
  # 网站默认主题样式 ["light", "dark", "auto"]
  defaultTheme = "auto"
  # 公共 git 仓库路径，仅在 enableGitInfo 设为 true 时有效
  gitRepo = ""
  #  哪种哈希函数用来 SRI, 为空时表示不使用 SRI
  # ["sha256", "sha384", "sha512", "md5"]
  fingerprint = ""
  #  日期格式
  dateFormat = "2006-01-02"
  # 网站图片，用于 Open Graph 和 Twitter Cards
  images = ["/logo.png"]
  #  开启 PWA 支持
  enablePWA = true
  #  是否自动显示外链图标
  externalIcon = false
  #  默认情况下，FixIt 只会在主页的 HTML 头中注入主题元标记
  # 您可以将其关闭，但如果您不这样做，我们将不胜感激，因为这是观察 FixIt 受欢迎程度上升的好方法
  disableThemeInject = false

  #  应用图标配置
  [params.app]
    # 当添加到 iOS 主屏幕或者 Android 启动器时的标题，覆盖默认标题
    title = "FixIt"
    # 是否隐藏网站图标资源链接
    noFavicon = false
    # 更现代的 SVG 网站图标，可替代旧的 .png 和 .ico 文件
    svgFavicon = ""
    # Safari 图标颜色
    iconColor = "#5bbad5"
    # Windows v8-10 磁贴颜色
    tileColor = "#da532c"
    #  Android 浏览器主题色
    [params.app.themeColor]
      light = "#f8f8f8"
      dark = "#252627"

  #  搜索配置
  [params.search]
    enable = true
    # 搜索引擎的类型 ["lunr", "algolia"]
    type = "lunr"
    # 文章内容最长索引长度
    contentLength = 4000
    # 搜索框的占位提示语
    placeholder = ""
    #  最大结果数目
    maxResultLength = 10
    #  结果内容片段长度
    snippetLength = 50
    #  搜索结果中高亮部分的 HTML 标签
    highlightTag = "em"
    #  是否在搜索索引中使用基于 baseURL 的绝对路径
    absoluteURL = false
    [params.search.algolia]
      index = ""
      appID = ""
      searchKey = ""

  # 页面头部导航栏配置
  [params.header]
    #  桌面端导航栏模式 ["sticky", "normal", "auto"]
    desktopMode = "sticky"
    #  移动端导航栏模式 ["sticky", "normal", "auto"]
    mobileMode = "auto"
    #  页面头部导航栏标题配置
    [params.header.title]
      # LOGO 的 URL
      logo = "/fixit.min.svg"
      # 标题名称
      name = ""
      # 你可以在名称（允许 HTML 格式）之前添加其他信息，例如图标
      pre = ""
      # 你可以在名称（允许 HTML 格式）之后添加其他信息，例如图标
      post = ""
      #  是否为标题显示打字机动画
      typeit = false
    #  页面头部导航栏副标题配置
    [params.header.subtitle]
      # 副标题名称
      name = ""
      # 是否为副标题显示打字机动画
      typeit = false

  # 页面底部信息配置
  [params.footer]
    enable = true
    #   自定义内容（支持 HTML 格式）
    # custom = ""
    #  是否显示 Hugo 和主题信息
    hugo = true
    #  是否显示版权信息
    copyright = true
    #  是否显示作者
    author = true
    # 网站创立年份
    since = 2021
    #  网站创立时间
    siteTime = "" # 例："2021-12-18T16:15:22+08:00"
    #  是否显示网站内容总字数
    wordCount = true
    #  公网安备信息，仅在中国使用（支持 HTML 格式）
    gov = ""
    #  ICP 备案信息，仅在中国使用（支持 HTML 格式）
    icp = ""
    # 许可协议信息（支持 HTML 格式）
    license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'

  #  Section（所有文章）页面配置
  [params.section]
    # section 页面每页显示文章数量
    paginate = 20
    # 日期格式（月和日）
    dateFormat = "01-02"
    # RSS 文章数目
    rss = 10
    #  最近更新文章设置
    [params.section.recentlyUpdated]
      enable = false
      rss = false
      days = 30
      maxCount = 10

  #  List（目录或标签）页面配置
  [params.list]
    # list 页面每页显示文章数量
    paginate = 20
    # 日期格式（月和日）
    dateFormat = "01-02"
    # RSS 文章数目
    rss = 10

  #  标签云配置
  [params.tagcloud]
    enable = false
    min = 14 # 最小字体大小，单位：px
    max = 32 # 最大字体大小，单位：px
    peakCount = 10 # 每个标签的最大文章数
    orderby = "name" # 标签排序方式，可选值：["name", "count"]

  # 主页配置
  [params.home]
    #  RSS 文章数目
    rss = 10
    # 主页个人信息
    [params.home.profile]
      enable = true
      # Gravatar 邮箱，用于优先在主页显示的头像
      gravatarEmail = "xx@xx.com"
      # 主页显示头像的 URL
      avatarURL = ""
      #  头像菜单链接的 identifier
      avatarMenu = ""
      #  主页显示的网站标题（支持 HTML 格式）
      title = ""
      # 主页显示的网站副标题
      subtitle = "这是我的全新 Hugo FixIt 网站"
      # 是否为副标题显示打字机动画
      typeit = true
      # 是否显示社交账号
      social = true
      #  免责声明（支持 HTML 格式）
      disclaimer = ""
    # 主页文章列表
    [params.home.posts]
      enable = true
      # 主页每页显示文章数量
      paginate = 6

  #  作者的社交信息设置
  [params.social]
    GitHub = "Lruihao"
    Linkedin = ""
    Twitter = ""
    Instagram = ""
    Facebook = ""
    Telegram = ""
    Medium = ""
    Gitlab = ""
    Youtubelegacy = ""
    Youtubecustom = ""
    Youtubechannel = ""
    Tumblr = ""
    Quora = ""
    Keybase = ""
    Pinterest = ""
    Reddit = ""
    Codepen = ""
    FreeCodeCamp = ""
    Bitbucket = ""
    Stackoverflow = ""
    Weibo = ""
    Odnoklassniki = ""
    VK = ""
    Flickr = ""
    Xing = ""
    Snapchat = ""
    Soundcloud = ""
    Spotify = ""
    Bandcamp = ""
    Paypal = ""
    Fivehundredpx = ""
    Mix = ""
    Goodreads = ""
    Lastfm = ""
    Foursquare = ""
    Hackernews = ""
    Kickstarter = ""
    Patreon = ""
    Steam = ""
    Twitch = ""
    Strava = ""
    Skype = ""
    Whatsapp = ""
    Zhihu = ""
    Douban = ""
    Angellist = ""
    Slidershare = ""
    Jsfiddle = ""
    Deviantart = ""
    Behance = ""
    Dribbble = ""
    Wordpress = ""
    Vine = ""
    Googlescholar = ""
    Researchgate = ""
    Mastodon = ""
    Thingiverse = ""
    Devto = ""
    Gitea = ""
    XMPP = ""
    Matrix = ""
    Bilibili = ""
    ORCID = ""
    Liberapay = ""
    Ko-Fi = ""
    BuyMeaCoffee = ""
    Linktree = ""
    QQ = ""
    QQGroup = "awbwdTtSQ_-H5QGzeJxdWgv6JMbNehNM" # https://qun.qq.com/join.html
    Diaspora = ""
    CSDN = ""
    Discord = ""
    DiscordInvite = ""
    Lichess = ""
    Pleroma = ""
    Kaggle = ""
    MediaWiki= ""
    Plume = ""
    HackTheBox = ""
    RootMe = ""
    Feishu = ""
    TryHackMe = ""
    Phone = ""
    Email = ""
    RSS = true

  #  文章页面配置
  [params.page]
    #  是否在主页隐藏一篇文章
    hiddenFromHomePage = false
    #  是否在搜索结果中隐藏一篇文章
    hiddenFromSearch = false
    #  是否使用 twemoji
    twemoji = false
    # 是否使用 lightgallery
    lightgallery = false
    #  是否使用 ruby 扩展语法
    ruby = true
    #  是否使用 fraction 扩展语法
    fraction = true
    #  是否使用 fontawesome 扩展语法
    fontawesome = true
    # 许可协议信息（支持 HTML 格式）
    license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
    # 是否在文章页面显示原始 Markdown 文档链接
    linkToMarkdown = true
    #  是否在 RSS 中显示全文内容
    rssFullText = false
    #  页面样式 ["narrow", "normal", "wide", ...]
    pageStyle = "normal"
    #  强制使用 Gravatar 作为作者头像
    gravatarForce = true
    #  开启自动书签支持
    # 如果为 true，则在关闭页面时保存阅读进度
    autoBookmark = false
    #  是否使用 字数统计
    wordCount = true
    #  是否使用 预计阅读
    readingTime = true
    #  文章结束标志
    endFlag = ""

    #  转载配置
    [params.page.repost]
      enable = false
      url = ""
    #  目录配置
    [params.page.toc]
      # 是否使用目录
      enable = true
      #  是否保持使用文章前面的静态目录
      keepStatic = false
      # 是否使侧边目录自动折叠展开
      auto = true
      #  目录位置 ["left", "right"]
      position = "right"
    #  在文章开头显示提示信息，提醒读者文章内容可能过时
    [params.page.expirationReminder]
      enable = false
      # 如果文章最后更新于这天数之前，显示提醒
      reminder = 90
      # 如果文章最后更新于这天数之前，显示警告
      warning = 180
      # 如果文章到期是否关闭评论
      closeComment = false
    #  代码配置
    [params.page.code]
      # 是否显示代码块的复制按钮
      copy = true
      #  是否显示代码块的编辑按钮
      edit = true
      # 默认展开显示的代码行数
      maxShownLines = 10
    #  文章编辑
    [params.page.edit]
      enable = false
      #  编辑的基础链接
      # url = "/edit/branch-name/subdirectory-name" # 相对于 `params.gitRepo`
      # url = "https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name" # 完整链接
      url = ""
    #  KaTeX 数学公式 (https://katex.org)
    [params.page.math]
      enable = true
      # 默认行内定界符是 $ ... $ 和 \( ... \)
      inlineLeftDelimiter = ""
      inlineRightDelimiter = ""
      # 默认块定界符是 $$ ... $$, \[ ... \],  \begin{equation} ... \end{equation} 和一些其它的函数
      blockLeftDelimiter = ""
      blockRightDelimiter = ""
      # KaTeX 插件 copy_tex
      copyTex = true
      # KaTeX 插件 mhchem
      mhchem = true
    #  Mapbox GL JS 配置 (https://docs.mapbox.com/mapbox-gl-js)
    [params.page.mapbox]
      # Mapbox GL JS 的 access token
      accessToken = ""
      # 浅色主题的地图样式
      lightStyle = "mapbox://styles/mapbox/light-v9"
      # 深色主题的地图样式
      darkStyle = "mapbox://styles/mapbox/dark-v9"
      # 是否添加 NavigationControl
      navigation = true
      # 是否添加 GeolocateControl
      geolocate = true
      # 是否添加 ScaleControl
      scale = true
      # 是否添加 FullscreenControl
      fullscreen = true
    #  赞赏设置
    [params.page.reward]
      enable = false
      animation = false
      # 相对于页脚的位置，可选值：["before", "after"]
      position = "after"
      # comment = "Buy me a coffee"
      [params.page.reward.ways]
        # wechatpay = "/images/wechatpay.png"
        # alipay = "/images/alipay.png"
        # paypal = "/images/paypal.png"
        # bitcoin = "/images/bitcoin.png"
    #  文章页面的分享信息设置
    [params.page.share]
      enable = true
      Twitter = true
      Facebook = true
      Linkedin = false
      Whatsapp = true
      Pinterest = false
      Tumblr = false
      HackerNews = false
      Reddit = false
      VK = false
      Buffer = false
      Xing = false
      Line = true
      Instapaper = false
      Pocket = false
      Digg = false
      Stumbleupon = false
      Flipboard = false
      Weibo = true
      Renren = false
      Myspace = true
      Blogger = true
      Baidu = false
      Odnoklassniki = false
      Evernote = true
      Skype = false
      Trello = false
      Mix = false
    #  评论系统设置
    [params.page.comment]
      enable = false
      #  Artalk 评论系统设置 (https://artalk.js.org/)
      [params.page.comment.artalk]
        enable = false
        server = "https://yourdomain/api/"
        site = "默认站点"
        placeholder = ""
        noComment = ""
        sendBtn = ""
        editorTravel = true
        flatMode = "auto"
        maxNesting = 3
        # 当 `params.page.lightgallery` 启用时生效
        lightgallery = false
        locale = "" # 
      #  Disqus 评论系统设置 (https://disqus.com)
      [params.page.comment.disqus]
        enable = false
        # Disqus 的 shortname，用来在文章中启用 Disqus 评论系统
        shortname = ""
      #  Gitalk 评论系统设置 (https://github.com/gitalk/gitalk)
      [params.page.comment.gitalk]
        enable = false
        owner = ""
        repo = ""
        clientId = ""
        clientSecret = ""
      # Valine 评论系统设置 (https://github.com/xCss/Valine)
      [params.page.comment.valine]
        enable = false
        appId = ""
        appKey = ""
        placeholder = ""
        avatar = "mp"
        meta= ""
        pageSize = 10
        lang = ""
        visitor = true
        recordIP = true
        highlight = true
        enableQQ = false
        serverURLs = ""
        #  emoji 数据文件名称，默认是 "google.yml"
        # ["apple.yml", "google.yml", "facebook.yml", "twitter.yml"]
        # 位于 "themes/FixIt/assets/lib/valine/emoji/" 目录
        # 可以在你的项目下相同路径存放你自己的数据文件：
        # "assets/lib/valine/emoji/"
        emoji = ""
        commentCount = true # 
      #  Waline 评论系统设置 (https://waline.js.org)
      [params.page.comment.waline]
        enable = false
        serverURL = ""
        pageview = false # 
        emoji = ["//unpkg.com/@waline/emojis@1.1.0/weibo"]
        meta = ["nick", "mail", "link"]
        requiredMeta = []
        login = "enable"
        wordLimit = 0
        pageSize = 10
        imageUploader = false # 
        highlighter = false # 
        comment = false # 
        texRenderer = false # 
        search = false # 
        recaptchaV3Key = "" # 
      # Facebook 评论系统设置 (https://developers.facebook.com/docs/plugins/comments)
      [params.page.comment.facebook]
        enable = false
        width = "100%"
        numPosts = 10
        appId = ""
        languageCode = "zh_CN"
      #  Telegram Comments 评论系统设置 (https://comments.app)
      [params.page.comment.telegram]
        enable = false
        siteID = ""
        limit = 5
        height = ""
        color = ""
        colorful = true
        dislikes = false
        outlined = false
      #  Commento 评论系统设置 (https://commento.io)
      [params.page.comment.commento]
        enable = false
      #  Utterances 评论系统设置 (https://utteranc.es)
      [params.page.comment.utterances]
        enable = false
        # owner/repo
        repo = ""
        issueTerm = "pathname"
        label = ""
        lightTheme = "github-light"
        darkTheme = "github-dark"
      #  Twikoo 评论系统设置 (https://twikoo.js.org/)
      [params.page.comment.twikoo]
        enable = false
        envId = ""
        region = ""
        path = ""
        visitor = true
        commentCount = true
        # 当 `params.page.lightgallery` 启用时生效
        lightgallery = false
      #  Giscus 评论系统设置
      [params.page.comment.giscus]
        enable = false
        repo = ""
        repoId = ""
        category = ""
        categoryId = ""
        mapping = ""
        reactionsEnabled = "1"
        emitMetadata = "0"
        inputPosition = "bottom" # top, bottom
        lightTheme = "light"
        darkTheme = "dark"
        lazyLoad = true
    #  第三方库配置
    [params.page.library]
      [params.page.library.css]
        # someCSS = "some.css"
        # 位于 "assets/"
        # 或者
        # someCSS = "https://cdn.example.com/some.css"
      [params.page.library.js]
        # someJavascript = "some.js"
        # 位于 "assets/"
        # 或者
        # someJavascript = "https://cdn.example.com/some.js"
    #  页面 SEO 配置
    [params.page.seo]
      # 图片 URL
      images = []
      # 出版者信息
      [params.page.seo.publisher]
        name = ""
        logoUrl = ""

  #  TypeIt 配置
  [params.typeit]
    # 每一步的打字速度（单位是毫秒）
    speed = 100
    # 光标的闪烁速度（单位是毫秒）
    cursorSpeed = 1000
    # 光标的字符（支持 HTML 格式）
    cursorChar = "|"
    # 打字结束之后光标的持续时间（单位是毫秒，"-1" 代表无限大）
    duration = -1

  #  Mermaid 配置
  [params.mermaid]
    # 取值详见 https://mermaid-js.github.io/mermaid/#/Setup?id=theme
    themes = ["neutral", "dark"]
  
  #  盘古之白配置
  [params.pangu]
    # 适用于中文写作用户
    enable = false
  
  #  水印配置
  # 详细参数见 https://github.com/Lruihao/watermark#readme
  [params.watermark]
    enable = false
    # 水印内容（允许 HTML 格式）
    content = ""
    # 水印透明度
    opacity = 0.1
    # 水印父节点
    appendTo = ".wrapper>main"
    # 单水印宽度 单位：px
    width = 150
    # 单水印高度 单位：px
    height = 20
    # 水印行间距 单位：px
    rowSpacing = 60
    # 水印列间距 单位：px
    colSpacing = 30
    # 水印旋转角度 单位：deg
    rotate = 15
    # 水印字体大小，单位：rem
    fontSize = 0.85
    #  水印字体
    fontFamily = "inherit"

  #  不蒜子统计
  [params.ibruce]
    enable = true
    # 在文章中开启
    enablePost = false
    #   网站创立时间
    # 参数 `ibruce.siteTime` 自 v0.2.14 起已弃用，请改用 `footer.siteTime`
    # siteTime = "" # 例："2021-12-18T16:15:22+08:00"

  # 网站验证代码，用于 Google/Bing/Yandex/Pinterest/Baidu/360/Sogou
  [params.verification]
    google = ""
    bing = ""
    yandex = ""
    pinterest = ""
    baidu = ""
    so = ""
    sogou = ""

  #  网站 SEO 配置
  [params.seo]
    # 图片 URL
    image = ""
    # 缩略图 URL
    thumbnailUrl = ""

  #  网站分析配置
  [params.analytics]
    enable = false
    # Google Analytics
    [params.analytics.google]
      id = ""
      # 是否匿名化用户 IP
      anonymizeIP = true
    # Fathom Analytics
    [params.analytics.fathom]
      id = ""
      # 自行托管追踪器时的主机路径
      server = ""

  #  Cookie 许可配置
  [params.cookieconsent]
    enable = true
    # 用于 Cookie 许可横幅的文本字符串
    [params.cookieconsent.content]
      message = ""
      dismiss = ""
      link = ""

  #  第三方库文件的 CDN 设置
  [params.cdn]
    # CDN 数据文件名称，默认不启用 ["jsdelivr.yml", "unpkg.yml", ...]
    # 位于 "themes/FixIt/assets/data/cdn/" 目录
    # 可以在你的项目下相同路径存放你自己的数据文件："assets/data/cdn/"
    # data = "unpkg.yml"

  #  兼容性设置
  [params.compatibility]
    # 是否使用 Polyfill.io 来兼容旧式浏览器
    polyfill = false
    # 是否使用 object-fit-images 来兼容旧式浏览器
    objectFit = false

  #  在左上角或者右上角显示 GitHub 开源链接
  [params.githubCorner]
    enable = false
    permalink = "https://github.com/hugo-fixit/FixIt"
    title = "在 GitHub 上查看源代码"
    position = "right" # ["left", "right"]

  #  Gravatar 设置
  [params.gravatar]
    # Gravatar 主机，默认：“www.gravatar.com”
    host = "www.gravatar.com" # ["cn.gravatar.com", "gravatar.loli.net", ...]
    style = "" # ["", "mp", "identicon", "monsterid", "wavatar", "retro", "blank", "robohash"]

  #  返回顶部
  [params.backToTop]
    enable = true
    # 在 b2t 按钮中显示滚动百分比
    scrollpercent = false

  #  阅读进度条
  [params.readingProgress]
    enable = false
    # 可用值：["left", "right"]
    start = "left"
    # 可用值：["top", "bottom"]
    position = "top"
    reversed = false
    light = ""
    dark = ""
    height = "2px"

  #  定义自定义文件路径
  # 在站点目录 `layouts/partials/custom` 中创建您的自定义文件，并取消注释下面需要的文件
  [params.customFilePath]
    # aside = "custom/aside.html"
    # profile = "custom/profile.html"
    # footer = "custom/footer.html"

  #  开发者选项
  [params.dev]
    enable = false
    # 检查更新
    c4u = false
    # 请勿公开展示！
    githubToken = ""
    # 移动端开发者工具配置
    [params.dev.mDevtools]
      enable = false
      # 支持 "vConsole", "eruda"
      type = "vConsole"

# Hugo 解析文档的配置
[markup]
  # 语法高亮设置 (https://gohugo.io/content-management/syntax-highlighting)
  [markup.highlight]
    ################## 必要的配置 ##################
    # https://github.com/hugo-fixit/FixIt/issues/43
    codeFences = true
    lineNos = true
    lineNumbersInTable = true
    noClasses = false 
    ################## 必要的配置 ##################
    guessSyntax = true
  # Goldmark 是 Hugo 0.60 以来的默认 Markdown 解析库
  [markup.goldmark]
    [markup.goldmark.extensions]
      definitionList = true
      footnote = true
      linkify = true
      strikethrough = true
      table = true
      taskList = true
      typographer = true
    [markup.goldmark.renderer]
      # 是否在文档中直接使用 HTML 标签
      unsafe = true
  # 目录设置
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 6

# 作者配置
[author]
  name = "xxxx"
  email = ""
  link = ""

# 网站地图配置
[sitemap]
  changefreq = "weekly"
  filename = "sitemap.xml"
  priority = 0.5

# Permalinks 配置 (https://gohugo.io/content-management/urls#permalinks)
[Permalinks]
  # posts = ":year/:month/:filename"
  posts = ":filename"

# 隐私信息配置 (https://gohugo.io/about/hugo-and-gdpr/)
[privacy]
  [privacy.twitter]
    enableDNT = true
  [privacy.youtube]
    privacyEnhanced = true

# 
[mediaTypes]
  # 用于输出 Markdown 格式文档的设置
  [mediaTypes."text/markdown"]
    suffixes = ["md"]
  # 用于输出 txt 格式文档的设置
  [mediaTypes."text/plain"]
    suffixes = ["txt"]

# 
[outputFormats]
  # 用于输出 Markdown 格式文档的设置
  [outputFormats.MarkDown]
    mediaType = "text/markdown"
    isPlainText = true
    isHTML = false
  #  用于输出 baidu_urls.txt 文件的设置
  [outputFormats.BaiduUrls]
    baseName = "baidu_urls"
    mediaType = "text/plain"
    isPlainText = true
    isHTML = false

#  用于 Hugo 输出文档的设置
[outputs]
  home = ["HTML", "RSS", "JSON", "BaiduUrls"]
  page = ["HTML", "MarkDown"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]
  taxonomyTerm = ["HTML"]

```

直接复制到你`config.toml`中，然后再对于其中的功能进行个性化的配置修改即可。toml文件按以上更新后，你再`hugo server` 运行一下，打开：localhost:1313，即可以看到网站样式了。

需要对配置功能参数过一遍，很多参数修改并不复杂，大多是通用的，你只需开启或关闭或根据个人喜好进行其他修改即可，少数功能需要结合其他平台进行深度配置。下面简单展开讲讲。

#### 自定义深度配置

1. **搜索配置**
搜索配置需要自定义修改，这里提供了两种搜索模式，如果


#### hugo常用命令说明

【待续】







---

> 作者: Kingpo  
> URL: https://ttzz.eu.org/posts/2022-07-15-hugo-blog-build/  

