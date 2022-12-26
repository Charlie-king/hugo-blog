# 解决github过慢或无法访问的方法


<!--more-->
## 前言

github在国内，有时会遇到打不开或者过慢的问题。这么好的东西，竟然不给用，这就很过分了，经过测试，绝大多数是DNS解析的问题，有可能是DNS污染，也有可能是有意为之，尤其国内几个基础运营商默认的DNS，对于github和它的相关域名，解析结果大多数为 0.0.0.0 或 127.0.0.1，v站上众多开发者测试都是这个结果。我测试了自己广州电信的网络，[raw.githubusercontent.com](http://raw.githubusercontent.com/)也无法打开。参看（需要爬墙）[v站帖子](https://v2ex.com/t/896752)。

## 方法

DNS解析这个问题，最简单的方式修改本机hosts文件，通过直接指定域名对应ip来实现访问，需要注意的是，所有厂家服务器的ip都可能会变的，域名解析出来的ip不是永远不变的，因此需要及时检查。

### hosts作用：
我们访问一个网站时，系统会优先在hosts文件里检查是否有这个ip域名的地址映射关系，如有就直接使用这个ip地址，如无，才会去DNS服务器把查询其IP地址，以供计算机访问。

所以hosts里地址映射查询，是在DNS解析之前的。

### hosts文件所在位置：
-   `Linux / MacOS` hosts路径：`/etc/hosts`
-   `Windows` hosts路径：`C:\Windows\System32\drivers\etc\hosts`

## 工具推荐

### 查域名ip网站 www.ipaddress.com

通过查询域名对应的ip地址，手动添加ip域名到hosts文件。

比如我发现我电脑上 https://raw.githubusercontent.com/ 不能访问，在 www.ipaddress.com 查询发现，它有4个ipv4和4个ipv6，ipv4可以ping通，因此将ipv4的ip添加到hosts文件中，同个可以同时添加多个ip，访问时从第一个开始获取，解析失败时顺延第二个。添加格式：
```
185.199.108.133 raw.githubusercontent.com
185.199.109.133 raw.githubusercontent.com
```

![](https://s.imgkb.xyz/abcdocker/2022/11/22/5aadf3ace5fc8/5aadf3ace5fc8.png)

添加后，就可以直接访问 https://raw.githubusercontent.com/ 了。

### 检查是否被墙 https://www.vps234.com/ipchecker/

这是一个测试IP是否被封的网站工具，通过ICMP和TCP来检查，输入ip后查看测试结果ICMP和ping一样，TCP就好比是检测该IP的Linux VPS能否通过SSH连接。国内外都一致即说明没被墙。不过我测试111发现有时可以有时不行，不是很稳定。
![](https://s.imgkb.xyz/abcdocker/2022/11/22/3d8b224647387/3d8b224647387.png)


### 开源自动获取工具Fetch GitHub Hosts

[Fetch GitHub Hosts](https://hub.fastgit.xyz/Licoy/fetch-github-hosts/releases)是一个非常有用的工具，在[github](https://github.com/Licoy/fetch-github-hosts)上开源，它解决了实时监控和同步github hosts的问题。

它的原理是通过部署此项目本身的服务器来获取 `github.com` 的 `hosts`，而不是通过第三方ip地址接口来进行获取，例如 `ipaddress.com` 等。

值得注意的 Fetch GitHub Hosts获取的hosts 上github的ip和`ipaddress.com`上查的不一定一样，不同地区请求的github地址可能分发向不同的服务器。

Fetch GitHub Hosts 使用很简单，支持全平台，支持客户端和服务端运行，有运行界面，也可以做成服务在后台运行。可以设置自动获取hosts的时间间隔和或hosts源。因此非常方便。当然你可以复制他的hosts源[https://hosts.gitcdn.top/hosts.txt](https://hosts.gitcdn.top/hosts.txt)进行手动进行更新。
![](https://s.imgkb.xyz/abcdocker/2022/11/22/dd0d563277153/dd0d563277153.png)


## 参考

> Fetch GitHub Hosts[https://hosts.gitcdn.top/]
> [https://learnku.com/articles/43426](https://learnku.com/articles/43426)

---

> 作者: Kingpo  
> URL: https://ttzz.eu.org/posts/2022-11-21-ways-to-fix-github-being-too-slow/  

