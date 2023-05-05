---
title: "密码管理和2FA管理软件"
subtitle: ""
date: 2023-04-26T14:02:04+08:00

lastmod: 2023-04-26T16:02:04+08:00
draft: false
description: "密码管理和2FA身份验证管理软件"
keywords: 
- 密码
- 2FA
- 身份验证
- authentication
tags:
- 密码管理
- 2FA
- authentication
categories:
- 研究学习
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
## 密码管理

现在网络上各种网站服务非常多，每个人至少都有注册过几十上百个网站，账号密码的管理显得尤为重要，很多人为了便于记忆，多种账号采用相同的密码，这种做法非常不安全，因为一旦有一个平台的密码泄露，就很容易被撞库攻击。
> 撞库是黑客通过收集互联网已泄露的用户和密码信息，生成对应的字典表，尝试批量登录其他网站后，得到一系列可以登录的用户。很多用户在不同网站使用的是相同的帐号密码，因此黑客可以通过获取用户在A网站的账户从而尝试登录B网址，这就可以理解为撞库攻击。

另一个普遍的现象就是设置过于简单的密码，比如123456等这些非常常见的简单密码，非常容易被暴力破解。每年都有一些机构公布最常用的密码列表，这些密码要避开。

密码管理工具 NordPass公布了 2022 年最常用密码列表，2022 年最常用密码相比过去几年差异并不大，排在榜首的是 password，有近 500 万人使用。其次分别为：123456、123456789、guest、qwerty、12345678、111111、12345、col123456 和 123123。


### 密码设置：

密码设置要注意以下要点：

1. 设置强密码  
密码设置要满足一定复杂性，最好是10位及以上，包含大小写字母+数字+符号，避开常用短语、键盘顺序键位、生日信息等。

2. 不要使用重复密码  
每个网站的密码都做区分，不要设置相同的密码。多个账户的单一密码如果有一个遭到入侵，所有的其他账户都将受到威胁。

3. 检查密码强度并定期更新  
定期评估密码健康情况，定期更新，像很多密码管理器或浏览器保持的密码都会提示此密码被使用的情况。

4. 开启多重验证  
重要账户开启多重验证，也就是除了密码校验后，还要再进行另外一重认证。主流的方式有：
	- 验证另一个账户所有权：邮件，短信，微信等
	- 验证生物特征：人脸，指纹，声纹等
	- 验证动态令牌：TOTP动态口令等
	- 验证硬件所有权：U盾等

### 密码分级： 

密码设置时，建议按账户重要性进行分级管理，比如涉及支付类的，为最高等级，要重点管理，密码设置和使用要加强验证。社交类软件，为一个等级，普通日常网站的为一个等级，不同级别的密码千万不要雷同，可按不同规则进行设置，确保不被撞库攻击。


### 密码记忆：  

密码记忆是一个重要的问题，很多人就是记不住才设置雷同的密码。那么这里有个设置密码的策略，可以比较方便的记忆密码。

设置密码时采用一套公式作为设置原则，跟对应产品名称关联挂钩。

举例：

8位固定字符+开发者第一个字第二个声调+第一个字笔画+开发者第二个字的拼音且第二个字母大写

以qq为例，8位固定字符!!6&3@1#（自己记忆好）+2（腾讯第一声）+13（腾笔画）+ xUn   
那么密码就是：!!6&3@1#213xUn   

这样，你就可以给每个网站设置唯一的密码，并且密码也足够复杂，而且还方便记忆，你只要记住了你的公式即可。建议多备几个公式，不同等级的用不同的公式。

### 密码存放：  

密码除了靠记忆，还是有必要记录下来的，否则忘记了就麻烦了。但是怎么放，是保证密码安全的重要因素。

**原则**：一个存放的重要原则，决不能明文保存，自己还要再用自己一套加密规则再加密一下。

写在纸上是不可取的做法，这是一些人会犯的低级错误。你的纸被人拿到你所有密码都泄露了。

**存放方法：**  
1. 文档记录，word，excel用非明文登记，整个文档再加密保存，word。
2. 手机自带备忘录保存，用大厂手机如苹果华为小米等自带的备忘录非明文登记，备忘录记得再加密。
3. 密码管理软件，市面上有很多比较知名的密码管理软件，专门帮你保存所有账户密码，支持全平台，也有开源可以自己自建服务端。

最安全的是文档加密记录后离线备份，相当于你存在U盘里，然后拔掉存放起来。

如果要上传云笔记云空间切记一定要先登记在文档上加密后再上传，不要直接使用云笔记记录。国内厂家云笔记云服务厂家要慎重，除了阿里，腾讯这几个大厂，小厂的坚决不能信，关停和信息泄露是常有的事。

## 密码管理软件

密码管理软件可能有些人比较陌生，这是专门管理密码的软件。

密码管理器（这里是包括了硬件的介绍）维基百科上是这样解释的：

> **密码管理器**或**密钥管理员**是一类用于生成、检索、保存及管理[复杂密码](https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A2%BC_(%E8%AA%8D%E8%AD%89) "密码 (认证)")、数字签名的措施，可以由[硬件](https://zh.wikipedia.org/wiki/%E7%A1%AC%E9%AB%94 "硬件")或[软件](https://zh.wikipedia.org/wiki/%E8%BB%9F%E9%AB%94 "软件")实现。复杂密码的生成一般按需要以[随机算法产生](https://zh.wikipedia.org/w/index.php?title=%E9%9A%A8%E6%A9%9F%E5%AF%86%E7%A2%BC%E7%94%9F%E6%88%90&action=edit&redlink=1)，而密码资料则保存于一个以密码、[数字签名](https://zh.wikipedia.org/wiki/%E6%95%B8%E4%BD%8D%E7%B0%BD%E7%AB%A0 "数字签名")等方式[加密](https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86 "加密")的[数据库](https://zh.wikipedia.org/wiki/%E8%B3%87%E6%96%99%E5%BA%AB "数据库")内。它的作用类似于[钥匙圈](https://zh.wikipedia.org/wiki/%E9%91%B0%E5%8C%99%E5%9C%88 "钥匙圈")，方便个人或企业组织集中管理密码、数字签名等身份管理要素。[[1]](https://zh.wikipedia.org/zh-my/%E5%AF%86%E7%A2%BC%E7%AE%A1%E7%90%86%E5%93%A1#cite_note-1)[[2]](https://zh.wikipedia.org/zh-my/%E5%AF%86%E7%A2%BC%E7%AE%A1%E7%90%86%E5%93%A1#cite_note-2)
> 
> 如今常见的密码管理器有三类：
> 
> - 本机安装并在本机访问的应用程序（如[KeePass](https://zh.wikipedia.org/wiki/KeePass "KeePass")）
> - 在线服务，通常经网站访问（如[客户端](https://zh.wikipedia.org/wiki/%E5%AE%A2%E6%88%B6%E7%AB%AF "客户端")、[网络应用程序](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F "网络应用程序")等）
> - 经本机访问的外挂硬件设备，如[U盾](https://zh.wikipedia.org/wiki/U%E7%9B%BE "U盾")、[FIDO](https://zh.wikipedia.org/wiki/FIDO%E8%81%94%E7%9B%9F "FIDO联盟")等USB Key。

> 它们的主要区别是保存密码及数字签名的加密数据库是保存在本机使用的，还是保存在在线存储服务的，还是保存在特定存储设备的。一些密码管理器，如[GNOME 钥匙圈](https://zh.wikipedia.org/wiki/GNOME_%E9%91%B0%E5%8C%99%E5%9C%88 "GNOME 钥匙圈")、[钥匙串](https://zh.wikipedia.org/wiki/%E9%92%A5%E5%8C%99%E4%B8%B2_(OS_X) "钥匙串 (OS X)")、大部分[浏览器](https://zh.wikipedia.org/wiki/%E7%80%8F%E8%A6%BD%E5%99%A8 "浏览器")内置的密码窗体存储功能等，既可在本机访问，也可在用户经过设置以后能使用[在线存储服务](https://zh.wikipedia.org/wiki/%E9%9B%B2%E5%84%B2%E5%AD%98)的。一般密码管理器会要求用户至少需要一个“主控密码”来解锁经过该主控密码加密的存有账号密码信息的数据库。[[3]](https://zh.wikipedia.org/zh-my/%E5%AF%86%E7%A2%BC%E7%AE%A1%E7%90%86%E5%93%A1#cite_note-3)[[4]](https://zh.wikipedia.org/zh-my/%E5%AF%86%E7%A2%BC%E7%AE%A1%E7%90%86%E5%93%A1#cite_note-4)

简单讲密码管理软件就是可以进行复杂密码生成，自动填充，密码安全存储，部分还支持TOTP等功能的安全应用软件。

密码管理在线服务最常见的莫如edge、chrome等浏览器内置的自动记住密码功能，苹果华为等智能手机上保存密码的钥匙链功能，这里我们常用到的密码管理功能是密码保存和自动填充，还有自动生成强密码，比如你注册某个网站的时候，浏览器会生成一个复杂的强密码，你只要点确认填充即可，基于自动生成的强密码是很难记住的，基本要依靠密码管理软件自动填充。

此外，还有很多独立本机安装的密码管理软件，包括开源的，付费的等，提供全平台的服务。

### KeePass

[KeePass](https://link.zhihu.com/?target=http%3A//keepass.info/) 是一款免费、小巧、绿色且开源的密码管理工具，多年来一直深受大众的好评。它能为用户提供一个足够安全的加密技术来保存各种各样的账号和密码。可以生成、存储你所有的密码（包括用户名），并备注信息。

密码数据库是加密后本地保存的，不过数据库文件可以用WebDAV进行同步，多设备使用起来会更加方便。

**【费用】** 官方 PC 端免费，移动端没有官方发布的版本，但由于是开源的应用，所有有很多优秀的第三方客户端，也都是免费使用（有的需要挂梯子，国内应用市场不一定可以下载）。

-   安卓：Keepass2Android
-   iOS：MiniKeePass，iKeePass，Passwordix 等


### LastPass

[LastPass](https://link.zhihu.com/?target=https%3A//www.lastpass.com/) 是一个优秀的在线密码管理器和页面过滤器，支持 Windows, Mac, Linux, iOS, Android, Windows Phone, 主流浏览器（IE, Chrome, FireFox, Opera, Safari）。与 KeePass 相比，**LastPass 在浏览器里使用功能更加强大。**

它的特点是以浏览器扩展的形式使用，当你登录任何一个网站，它就会提示你保存登录信息，并在云端自动同步，以后访问该网站时它就会自动为你填写登录表单。 由于 LastPass 是将用户的数据保存网络上的，虽然是在将用户的密码数据加密后才将其发送到服务器，但安全性也受到部分用户的质疑。

**【费用】** PC 端免费；手机端收费：每月 1 美元，按年收费。


### 1Password

[1Password](https://link.zhihu.com/?target=https%3A//1password.com/) 是一款来自加拿大开发商 agilebits 的跨平台密码管理应用，目前支持 Windows, Mac, Android, iPhone, iPad，浏览器扩展支持：Chrome, FireFox, Opera, Safari。口碑较好。Mac / iOS / Android版本已经支持中文，但是 Window 目前只有英文版。另外作为一款收费软件，价格相对较高，愿意付费使用的人并不普遍。

1Password 包含[密码管理器](https://www.zhihu.com/search?q=%E5%AF%86%E7%A0%81%E7%AE%A1%E7%90%86%E5%99%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A194898910%7D)与浏览器扩展两个部分，前文中我们介绍的 KeePass 和 LastPass 这两款软件，可以认为 1Password 是两者的完美合体。

**【费用】** 目前 1Password 是订阅式，分为个人版和家庭版：个人版每月 2.99 美元；家庭版每月4.99 美元，可以包含 5 个账号使用。购买后，一个账号可以在多个平台登录进行同步使用。

1Password 提供 30 天免费试用，可以体验后根据需求选择购买。

### Enpass

[Enpass](https://link.zhihu.com/?target=https%3A//www.enpass.io/) 中文版是一款安全可靠的跨平台密码管理器软件，它可以支持目前市面所有常用的平台：Windows, Mac, Linux 以及 iOS, Android, Blackberry, Windows UWP, ChromeBook 在内的客户端，并且提供主流浏览器的一键登录扩展，基本能覆盖你所有的密码应用场景。只需要记住一个主密码，就可以轻松管理所有的账号密码。

**【费用】** PC 端免费，手机端可以免费显示 20 个密码项目。

专业版目前费用是 68 元人民币一次性购买永久使用，解锁20个密码项目限制。相比较其他按月收费的还是比较划算的。可以作为 1Password 的替代品进行使用。


### Bitwarden

**Bitwarden**是一款[自由且开源](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E5%8F%8A%E5%BC%80%E6%94%BE%E6%BA%90%E4%BB%A3%E7%A0%81%E8%BD%AF%E4%BB%B6 "自由及开放源代码软件")的[密码管理服务](https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A2%BC%E7%AE%A1%E7%90%86%E5%93%A1 "密码管理员")，用户可在加密的保管库中存储敏感信息（例如[网站](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%AB%99 "网站")登录凭据）。Bitwarden平台提供有多种[客户端](https://zh.wikipedia.org/wiki/%E5%AE%A2%E6%88%B7%E7%AB%AF "客户端")[应用程序](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F "应用程序")，包括[网页](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5 "网页")[用户界面](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2 "用户界面")、[桌面应用](https://zh.wikipedia.org/wiki/%E6%A1%8C%E9%9D%A2%E5%BA%94%E7%94%A8 "桌面应用")，[浏览器扩展](https://zh.wikipedia.org/wiki/%E7%80%8F%E8%A6%BD%E5%99%A8%E6%93%B4%E5%85%85%E5%8A%9F%E8%83%BD "浏览器扩展")、[移动应用](https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8 "移动应用")以及[命令行界面](https://zh.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2 "命令行界面")。[[2]](https://zh.wikipedia.org/wiki/Bitwarden#cite_note-Downloads-2)Bitwarden提供[云端托管](https://zh.wikipedia.org/wiki/%E9%9B%B2%E7%AB%AF%E9%81%8B%E7%AE%97 "云计算")服务，并支持[自行部署](https://zh.wikipedia.org/w/index.php?title=On-premises_software&action=edit&redlink=1)解决方案。[[3]](https://zh.wikipedia.org/wiki/Bitwarden#cite_note-On-premise-3)

Bitwarden官方提供的服务有免费版和付费版，对多数人来说，个人免费版已经足够使用，不限制密码数量，不限制设备数，不过没有2FA功能。

如果你信不过厂家数据保存，可以自建服务端，目前我所了解到的，自建服务端使用开源bitwarden的是最多的，准确讲是民间大神用Rust重写的版本bitwarden_rs，现在更名[vaultwarden](https://github.com/dani-garcia/vaultwarden)，最受欢迎，解锁所有高级功能。


## 2FA双因素认证

### 2FA
双因素身份验证 (2FA) 是一种身份和访问管理安全方法，是指需要经过两种形式的身份验证才能访问资源和数据。提高身份认证的安全性。

2FA与MFA（Multi-Factor Authentication）多因素认证的区别是，用户需要使用两个或更多因素或流程来识别用户。

常见的验证方法如下：

-  #### 硬件令牌
    
    企业可以以密钥卡的形式向员工提供硬件令牌，该密钥卡每隔几秒到一分钟时间生成一次代码。这是最早的双因素身份验证形式之一。
    
-  #### 推送通知
    
    推送双因素身份验证方法不需要密码。这种类型的 2FA 向你的手机发送信号，以批准/拒绝或接受/拒绝访问网站或应用程序以验证身份的请求。
    
-   #### SMS 验证
    
    SMS（也称为短信）可用作一种双因素身份验证形式，具体方式是将短信发送到受信任的电话号码。系统会提示用户与短信交互或使用一次性代码来验证其在站点或应用上的身份。
    
-   #### 基于语音的身份验证
    
    语音身份验证的工作方式与推送通知类似，但身份是自动确认的。系统通过语音要求你按一个键或说出自己的名字以表明自己的身份。


### TOTP

TOTP（Time-Based One-Time Password）算法是基于时间的一次性密码算法，根据预共享的密钥与当前时间计算一次性密码。它已被互联网工程任务组接纳为RFC 6238标准，成为主动开放认证的基石，并被用于众多多因子/双因子认证系统当中。

简单讲TOTP是基于时间戳生成的一次性密码，生成的6位数字一般30秒更新一次，作为2FA的常用认证因素之一。网上很多说2FA或两步认证其实说的就是TOTP。


### 手机认证应用程序

认证应用程序可在没有互联网或手机网络连接的情况下生成令牌。 

用户通过扫描服务提供商显示的二维码将应用程序与帐户配对；然后，应用程序会为每个帐户持续生成基于时间的一次性密码 OTP (TOTP) 或其他软件令牌，通常每 30-60 秒生成一次。 

最常用的认证应用程序包括 Google Authenticator、Authy、Microsoft Authenticator、LastPass Authenticator 和 Duo，腾讯有个小程序腾讯身份验证器，这些认证程序都支持生成TOTP，有的 还支持推送通知功能，即你在一个新设备登录账号时，选择认证程序确认，这时手机认证程序会收到一个推送通知确认是否同意登录，点击确认即可，推送通知免去了输入TOTP一次性密码口令的过程，使得登录过程更加简单，推送通知还可直接实现免密码直接登录。

Microsoft Authenticator 目前使用效果还不错，无需科学上网，和edge结合使用，密码保存，自动填充，生成TOTP，推送通知，也支持云备份，不过只有移动端，并且网上有人反馈存在ios端和安卓端数据不通的情况，还有账号数据丢失的情况，我目前没遇到过，不过建议数据定期导出备份，再加多一个认证程序备份。

目前使用Microsoft Authenticator可直接设置无密码登录，微软账号体系直接采用推送通知登录，支持删除密码直接使用免密登录。

Microsoft Authenticator 安卓版需要Google play服务，我华为手机没有谷歌框架，不过在联想乐活商店里下载的版本是不需要Google play服务的，直接运行，推荐直接去联想乐活商店里下载。

Google Authenticator功能比较简单。原本不支持云同步，不支持多设备，只有移动端ios和安卓，只能手动从一个设备转到另一个设备，没有对app查看进行安全限制的功能，近期推出了云同步功能。

Google Authenticator身份认证功能：
- 没有OTP。 
- 在应用程序中生成TOTP。
- 在应用程序中生成HOTP。

Authy支持向您的移动或桌面设备发送一次性密码(OTP)来加强您的在线安全，直接与网站或服务同步以授予您访问权限。除了发送OTP到您的设备，Authy还使用软令牌或基于时间的一次性密码(TOTP)，即使在您的设备没有连接到数据网络时也可以生成。此外，Authy身份验证应用程序还支持更严格的安全措施，其推送身份验证解决方案，增加高级保护功能到您的帐户。

Authy提供多平台Android, iOS, macOS, Windows, Linux和Apple Watch，同时支持多设备使用。支持加密备份云同步。安全方面，Authy使用pin和生物识别认证系统来保护数据免受未经授权的使用。

Authy身份认证功能：
- OTP通过短信或语音呼叫双因素认证。  
- 在应用程序中生成TOTP。  
- 访问注册站点时触发的推送通知。


## 安全备份策略

1. 加密备份

密码库文件备份时使用密码进行加密，比如使用GPG 进行加密后。

2. 多地备份

多处备份，比如u盘，网盘（onedrive，google drive，坚果云等），电脑，手机，建议定时备份，不能只保留在一个地方。至少备份2个地方以上，否则一失尽失。


## 参考
> 1. [有什么值得推荐的密码管理软件？](https://www.zhihu.com/question/27338793/answer/194898910 )
> 2. [身份认证之双因素认证 2FA](https://zhuanlan.zhihu.com/p/351590048)
> 3. [Authy与谷歌Authenticator:双因素验证器比较](http://www.ukjuw.com/news/show-106652.html)