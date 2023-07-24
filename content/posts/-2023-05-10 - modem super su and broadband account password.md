---
title: "光猫超密和宽带拨号账号密码查询资料"
subtitle: ""
date: 2023-05-10T10:57:27+08:00

lastmod: 2023-07-22T10:57:27+08:00
draft: flase
description: "三个运营商的光猫超密和查看宽带账号密码的资料整理"
keywords: 
- 宽带账号密码
- 光猫
- 光猫超级密码
tags:
- 宽带
- 路由
- 光猫
categories:
- 网络
featuredImage: ""
featuredImagePreview: ""

password: "guangmao"
message: "个人资料"

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
## 通用账号密码
CMCCAdmin  aDm8H%MdA  
CMCCAdmin  Cmcc10086#  
admin  Cmcc10086#  

CUAdmin  CUAdmin  

telecomadmin  nE7jA%5m  
telecomadmin  admintelecom  
telecomadmin  admintelecom

运维工厂账号: fiberhomehg2×0  超级密码: hg2×0



## 成功案例

吉比特CM115Z,CM113Z光猫破解超级权限教程
https://www.right.com.cn/forum/thread-2270800-1-1.html

### 北京移动吉比特SK-D746，联通吉比特UNG310H
普通账户登录后，输下面，下载romfile.cfg文件，搜索admin  
```
http://192.168.1.1/cgi-bin/upgrade.asp
```

```
http://192.168.1.1/romfile.cfg
```
得出如：  
CMCCAdmin  
aDm8H%MdAPc7T#8Mq  


### 移动光猫GS3101（GS3202不同，试标密）

**测试：**
http://192.168.1.1/cgi-bin/tmp/ctromfile.cfg  

**浙江金华：GS3202尝试标密成功**  
CMCCAdmin  aDm8H%MdA  

1. 登陆路由器之后打开这个地址  
http://192.168.1.1/cgi-bin/getGateWay.cgi  
页面返回Yes字样一般即为成功，我这里返回的是：  
Family GateWay  
Yes  

2. 连接并登陆Telnet

打开成功后使用Telnet连接工具连接到路由器

telnet 192.168.1.1  

然后输入账号密码`admin` `s2@We3%Dc#`

如果登陆后界面一般显示# 就是成功

3. 接着查看密码

登陆成功后输入`cat /tmp/ctromfile.cfg | grep 'Admin'`就可以查看超级管理员的密码

如我这里返回
```

# cat /tmp/ctromfile.cfg | grep 'Admin'

<Entry0 Active="Yes" username="CMCCAdmin"

web_passwd="CMCCAdmin****"
```
其中的username=后面的就是管理员账号，一般为CMCCAdmin，web_passwd=后面的就是密码，这里对应的是CMCCAdmin****，注意不要带引号。

&amp;等于&


### 移动光猫-吉比特 H3-1S/H3-2S/H3-2Sse/H5-8（H2-3不同）
获取超级密码方法 https://www.right.com.cn/forum/thread-8266942-1-1.html

**（H2-3不同，下面方法不适用，福建移动标密）**

 1. 使用光猫背后的普通用户名登录进光猫，浏览器复制以下链接打开  
  
http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch  
  
2. 电脑启用 telnet  
  
3. 通过telnet进入光猫  
   
输入：  
  
telnet 192.168.1.1  
  
用户名、密码如下：  
CMCCAdmin  
aDm8H%MdA    
  
注意：密码默认不显示 不需要重复输入  
  
4. 查看一下登陆信息,可以看到账号密码全部进行了加密  
```
sidbg 1 DB p DevAuthInfo
```  
  
输入上面的命令后将会显示下面的内容：  
```
<Tbl name="DevAuthInfo" RowCount="2">
<Row No="0">
<DM name="ViewName" val="IGD.AU1"/>
<DM name="Enable" val="1"/>
<DM name="IsOnline" val="0"/>
<DM name="AppID" val="1"/>
<DM name="User" val="******"/>
<DM name="Pass" val="******"/>
<DM name="Level" val="1"/>
<DM name="Extra" val=""/>
<DM name="ExtraInt" val="0"/>
</Row>
<Row No="1">
<DM name="ViewName" val="IGD.AU2"/>
<DM name="Enable" val="1"/>
<DM name="IsOnline" val="0"/>
<DM name="AppID" val="1"/>
<DM name="User" val="******"/>
<DM name="Pass" val="******"/>
<DM name="Level" val="2"/>
<DM name="Extra" val=""/>
<DM name="ExtraInt" val="0"/>
</Row>
</Tbl> 
```


5. 修改CMCCAdmin用户的登录密码  
  
输入下面的命令更改CMCCAdmin的密码：  

```shell
sidbg 1 DB set DevAuthInfo 0 Pass admin  
```
  
Pass后面是CMCCAdmin的登录密码  
  
再输入下面的命令保存即可  

```shell
sidbg 1 DB save
```

完成后即可使用CMCCAdmin+更改后的密码即可登录光猫后台。

ftp账密是相同的：e8ftp

移动吉比特系列光猫均可参考。



### 联通MSG2100E-UPON-4V

管理员192.168.1.1/cu.php   
CUAdmin   
CUAdmin   

### 河南联通HS8346V5，HS8346R5，上海移动 华为HS8546V5
> https://www.right.com.cn/forum/thread-4092011-1-1.html
> https://www.xxshell.com/3387.html

**备份：**  
通过光猫背面user用户登录，记录光猫原有的 INTERNET的VLAN、LOID、MAC地址、宽带账号密码。

1. 拔掉光猫的光纤，并重启光猫

2. 使用工具开启光猫Telnet功能

电脑直接连接光猫，使用"ONT组播配置工具V3-V5_2.0.exe"选择V5版本，然后点击启动，启动后会配置光猫右侧状态栏显示success，然后光猫LED灯会全亮，然后**手动断电重启光猫**。

![](https://www.xxshell.com/wp-content/uploads/2021/05/1-1.jpg?v=1663209753)

3. 获取光猫超级用户密码

光猫启动后，telnet 192.168.1.1  
输入用户名:root   密码:adminHW  登录shell。其他可能密码：
- Hw8@CMCC
- Hw8@cMcc
- useradmin
- admin
- hg2x0
配置下面的命令获取密文密码：

```
su
shell
cp  /mnt/jffs2/hw_ctree.xml /mnt/jffs2/myhwcfg.xml.gz
cd /mnt/jffs2/
aescrypt2 1 myhwcfg.xml.gz tem
gzip -d myhwcfg.xml.gz
grep WebUserInfoInstance myhwcfg.xml
```

![](https://www.xxshell.com/wp-content/uploads/2021/05/2.jpg?v=1663209753)

4. 解密超级用户密文密码

使用"华为光猫配置加解密工具.exe"软件将密文复制到软件里面选择$2解密，则可以得到明文的超级密码。

![](https://www.xxshell.com/wp-content/uploads/2021/05/2.1.jpg?v=1663209752)

5. 配置光猫桥接

1) 登录光猫

使用链接http://192.168.1.1/cu.html输入解密的密码，然后登录，登录关闭无用功能，如关闭WIFI功能等。

2) 修改桥接

直接选择internet连接，将WAN类型修改为"桥接WAN"，然后就大功告成了，然后就可以使用路由器拨号了。

![](https://www.xxshell.com/wp-content/uploads/2021/05/3.jpg?v=1663209751)



### 广西电信 烽火HG261GS/HG260 
（广西电信）

	192.168.1.1
	进入维护账号
	http://192.168.1.1/logoffaccount.html 先刷一下，再进
用户名：fiberhomehg2x0  
密码：hg2x0

出厂设置保存一下即可

开telnet  
root  hg2x0

### 烽火吉比特 HG6145F/HG6045F3
移动烽火-吉比特-JBT-HG6145F超密破解-TJ
https://www.right.com.cn/forum/thread-8252579-1-1.html
北京联通/移动 烽火HG6145D/HG6145D1 获取管理员密码 改省份 改桥接 破解 拆解
https://www.right.com.cn/forum/thread-8230876-1-1.html

第一步：打开telnet  
获得光猫的MAC地址  
电脑打开CMD界面，输入   
```
arp -a 192.168.1.1
```

这时将显示你的光猫MAC，红色位置就是。  
  
浏览器中录入
```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=
```
这个等号后面写上你上面获得的MAC 字母大写去除横线然后回车，将会提示telnet已启用。  
  
第二部 获得超密  
打开CMD命令窗口录入：telnet 192.168.1.1  
链接成功后输入账号：admin 在北京天津这边用这个admin，其他地方如果不管用就试试  root  
录入密码为  Fh@+你上面获得的MAC的后六位大写。  
链接成功后将会显示一个#  
  
  
继续在#后录入  
load_cli factory  
Config\factorydir# show admin_name  

这时将显示你的超级账号名称  
Success! admin_name=CMCCAdmin  
  
继续录入  
Config\factorydir# show admin_pwd  
  
这时将显示你的超级密码  
Success! admin_pwd=CMCCAdminFa5&G3Pk






### 联通sk-d740-c，SK-D748-C，SK-D742C，SK-D748
详情步骤：  
【1】保证正常访问光猫web  

【2】再打开这个链接，开启telnet功能。（打开隐藏配置界面：http://192.168.1.1/hidden_version_switch.html，勾选telnet功能，一闪而过不用在意。）  

账户密码都是useradmin/useradmin  
【3】然后本地可以测试一下光猫telnet功能是否打开（开始-运行-cmd-telnet192.168.1.1，用户名user，密码随意，进不去也无所谓，这一步是确保光猫启用了telnet功能，配置中会留下明文密码）  
【4】ftp链接光猫。这里我使用的是winscp，ftp连接光猫，账户密码都是useradmin/useradmin（看下图），/var/tmp/目录下，找到telnet_su_passwd 文件，打开即可获得。

### 郑州联通 dt741-csf  
记下LOID还有VID   
不插光纤按住光猫后边的重置键直到光猫重启，  
```
http://192.168.1.1/hidden_version_switch.html
```
 勾选开启telnet    
telnet登录root CUAdmin    
```
sendcmd 1 DB DevAuthInfo
sendcmd 1 DB set DevAuthInfo 0 User CUAdmin
sendcmd 1 DB set DevAuthInfo 0 Pass 11223344
```

```
http://192.168.1.1/cu.html
```
账户CUAdmin 密码11223344 设置完插上光纤就行  

### 中兴F650全系使能

https://www.jarvisw.com/?p=1460

下载链接：

[factorymode_crack-v2](https://www.jarvisw.com/wp-content/uploads/2021/11/factorymode_crack-1.rar)[下载](https://www.jarvisw.com/wp-content/uploads/2021/11/factorymode_crack-1.rar)

使用方法：

连上光猫局域网后，打开cmd，输入：

factorymode_crack.exe -l xxx open -i 192.168.1.1

或者

factorymode_crack.exe -l xxx open -i 192.168.1.1 -p 8080

(有的光猫使用的是8080端口，IP地址默认是192.168.1.1如果你的光猫已经修改请指定自己的地址，另外-l参数已经无效，但仍然需要指定，随便填即可)

如果打开成功会出现：

Enter192.168.1.1

FactoryModeSuccess:FactoryModeAuth.gch?user=l0Fo18jP&pass=7N518I28

user=的值是telnet的用户名，pass=后面的是telnet的密码

在线解密（2元一次）：
https://www.jarvisw.com/onutools

#### 

插U盘，登录后浏览器输入：
http://192.168.1.1/cgi-bin/luci/admin/storage/copyMove?opstr=copy|/userconfig|/mnt/USB_disc1|cfg&fileLists=cfg/&_=0.5060406976503316

成功备份的话输出：
{"setRes":true,"filePath":"/userconfig","percent":100,"transId":0,"fileNum":0}

cfg里找
db_user_cfg.xml

      点击“网络”-“网络设置”-“网络连接”，选择带有TR069的这个连接，点击下面的删除。  
       点击“网络”-“远程管理”-“ITMS服务器”，如下图  

![](https://s3.bmp.ovh/imgs/2023/07/19/a1f507853a5c0aec.png)

         取消“启用周期上报”，将“ITMS认证地址”清空或改动几个数字。最后点下面的保存按钮，完成设置保存。到此破解完成，把密码记下来，以后再也不会变了。

### 尝试修改

先试一试最简单的步骤：  
1用user登录  
2进入到user修改密码页面  
3打开chrome F12 开发者工具  
4定位到用户名user框  
5看看value有没有值  
如果是0改成1，如果是1改成0，或者user 改为 root、CMCCAdmin
6输入user原密码，输入要修改的管理员密码

## 失败
### [x]上海移动 中兴ZXHN F7610M
使能失败，重置后自动下发路由拨号，删除后监控69后无法注册。
有个py脚本可以使能。


### [x]天翼HG2543C3不行，C2，C1可以
c1，c2的使能telnet在c3不生效

### [x]山东联通

### [x]中兴ZXHNG7615

### [x]云南移动TEWA-272G
新生产的旧方法已经不适用。

## 其他
例如HS8545M5的超级账户密码是（广东等地区）：CMCCAdmin aDm8H%MdA
还有一些其它可尝试的超级账户：

CMCCAdmin Cmcc10086#

telecomadmin nE7jA%5m

telecomadmin admintelecom

超级账号：CMCCAdmin 超级密码：aDm8H%MdA

超级用户名:telecomadmin 超级密码:nE7jA%5m

用户名 telecomadmin 密码 admintelecom

超级用户名 : fiberhomehg2×0 超级密码 : hg2×0

超级帐户名是：admin 密码：Cmcc10086#

1. 电信超级密码 telecomadmin nE7jA%5m
2. 移动超级密码 CMCCAdmin aDm8H%MdA
3. 联通超级密码 CUAdmin CUAdmin


账户
text
base64，md5加密

移动宽带账号
一般6位数：123123，账号后六位


电信和移动的光猫（华为制造）一般都使用sha256(md5(明文密码))作为加密手段（加密后是64位密文）
解密网站：md5.cn
https://blog.csdn.net/qq_26373925/article/details/112798210


## 移动
1./首先获取超级密码，网上查到  
账号：CMCCAdmin  
密码：aDm8H%MdA  
师傅设置的光猫拨号，浏览器输入192.168.1.1，试了下，可以登入  

2./找到”网络“-->宽带设置,可以看到一个PPPOE模式，将使能勾去掉，端口绑定也取消打勾，记下自己的VLAN ID 然后点击修改。

3./新建WAN连接， 
模式：“桥模式”，  
使能：打勾，  
LAN 1234可以全打勾，意思是四个LAN全可以拨号，  
DHCP服务去掉打勾，
桥类型，我选择的 IP BRIDGE，不知道和PPPOE BRIDGE有何区别  
业务模式选择INTERNET  
VLAN模式选择改写tag，VLAN ID填写刚才记下的VLAN  
其他默认即可，最后点击修改

4./路由器填入你的账号密码即可，一般即可拨号成功

5./TR069服务使能的钩子是灰色的，按F12搜索disable找到对应按钮，改为enable回车即可，
论坛有教程在此不再赘述。还有开启TTL服务，暂时不知道密码。

6./TELNET服务，在管理里边，打勾即可，查看密码也是F12的方法，把密码选项PASSAORD改为TEXT。

## 联通

192.168.2.1/hidden_version_switch.html

lnadmin

广东部分地区联通超密，账号：CUAdmin
密码：cuadmin加上光猫背面MAC前6位小写
cuadmin28563AFA4BA0


http://192.168.2.1/telnet?enable=1&key=40F4FD422CA9

192.168.2.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=28563AFA4BA0   （光猫mac，大写或小写）

lnadmin12643745

法1：
https://www.right.com.cn/forum/thread-8163087-1-1.html

联通光猫创维DT741-csf破解超级密码+桥接教程
telnet
https://www.right.com.cn/forum/thread-4057681-1-1.html

正式发布自编译中兴F7607P及7615光猫本地离线开Telnet工具及使用说明
https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8273857&highlight=7607P

河南联通7607P 获取超密
https://www.right.com.cn/forum/thread-8278412-1-1.html

中国联通sk-d740-c光猫超级密码获取
https://www.right.com.cn/FORUM/thread-8253868-1-1.html

天邑TEWA-707G光猫获取超密教程
https://www.right.com.cn/forum/thread-8257312-1-1.html


天邑TEWA-707G光猫获取超密教程
https://www.right.com.cn/forum/thread-8257312-1-1.html

ftp 192.168.1.1 \\到光猫 用普通用户身份登录

get userconfig/cfg/db_user_cfg.xml \\获取到C:\Users\你的登录名

解密此文件 (感谢楼下提供解密工具下载)
链接
直连
蓝奏云
https://c78.lanzoub.com/iH0qe08cbe9a  \\把db_user_cfg.xml拖到工具上，会生成一个解密好的文件

记事本打开 搜索 telecomadmin 即可

记得在光猫里删除电信下发链接TR069_R_VID_46



TEWA-766G等新款天邑光猫获取超密及开启telnet
https://www.right.com.cn/forum/thread-8234040-1-1.html


关于移动光猫吉比特GM220-S超级密码获得和移动自动改密
https://www.right.com.cn/forum/thread-4005957-1-1.html

联通光猫超级密码(无需繁琐获取)适用大部分地区(手机/P
https://www.bilibili.com/read/cv14851248/
```
北京地区：联通光猫TEWA-800E超级管理员(亲测有效)
document.getElementById('loginfrm').setAttribute('method','get');
document.getElementById('username').value = 'CUAdmin';
document.getElementById('password').value = 'CUAdmin';
document.getElementById('loginfrm').submit();
```

联通宽带光猫获取超级密码教程吉比特无源光纤接入用户端设备（GPON ONU）
型号：HG6543C
https://blog.csdn.net/Adam12321/article/details/108369917


吉比特CM115Z,CM113Z光猫破解超级权限教程
https://www.right.com.cn/forum/thread-2270800-1-1.html
```
直接访问
http://192.168.1.1/cgi-bin/upgrade.asp
下载romfile
搜索：
   注意看是这个0
<Entry0 Active="Yes" username="CMCCAdmin"
web_passwd="您的超级密码"

```


移动H2-3s破解Telnet
https://bbs.luobotou.org/thread-49853-1-1.html

本帖最后由 PencilNavigator 于 2022-4-5 01:55 编辑_  
  
继我GM232开启telnet成功但没有获取密码后（更新：已破解密码：

我又一光猫破解telnet，没错，那就是H2-3s  
方法很简单，使用CMCCAdmin（密码aDm8H%MdA）登录192.168.1.1，然后打开这个链接：http://192.168.1.1/bd/vermod.asp    
你就会进到这个界面：  
  
  
![](https://bbs.luobotou.org/forum.php?mod=attachment&aid=MjcyMzh8ODE3NmU0MjB8MTY4OTIxNjY5MHwwfDQ5ODUz)  
红框框里的telnet点开启（这里我已经事先开启了），在命令提示符里输入Telnet 192.168.1.1,（账密同CMCCAdmin），就可以进入Telnet后台  
![](https://bbs.luobotou.org/forum.php?mod=attachment&aid=MjcyMzl8NGE4ZTBiYTV8MTY4OTIxNjY5MHwwfDQ5ODUz)  
  
不得不说，某移真是煞费苦心，基本上每一款光猫开启telnet的方法都不一样（GM232的方法就没法用在H2-3s上），而且一些telnet账号是CMCCAdmin但密码不是aDm8H%MdA...  
如果有同款光猫想折腾的可以参照我的方法试试



移动吉比特H2-3s 光猫超级密码
https://www.right.com.cn/forum/thread-4051132-1-1.html



## 参考
> https://blog.csdn.net/weixin_39921904/article/details/124545471
> https://post.smzdm.com/p/apz3p8w0/

http://192.168.1.1/hidden_version_switch.gch
/userconfig/cfg/db_user_cfg.xml
/backpresettings.conf
/backupsettings.conf
fhconf/backpresettings.conf
http://192.168.1.1/servmngr.html
192.168.1.1 输入密码进去看到自动拨号页面  然后在原页面上打开http://192.168.100.1/backupsettings.txt

document.getElementById('loginfrm').setAttribute('method','get');  
document.getElementById('username').value = 'CUAdmin';  
document.getElementById('password').value = 'CUAdmin';  
document.getElementById('loginfrm').submit();


https://www.right.com.cn/FORUM/thread-8253868-1-1.html
【[https://blog.csdn.net/nordpol/article/details/124937187](https://blog.csdn.net/nordpol/article/details/124937187)】  
详情步骤：  
【1】保证正常访问光猫web  
  
  
【2】再打开这个链接，开启telnet功能。（打开隐藏配置界面：http://192.168.1.1/hidden_version_switch.html，勾选telnet功能，一闪而过不用在意。）  
  
  
【3】然后本地可以测试一下光猫telnet功能是否打开（开始-运行-cmd-telnet192.168.1.1，用户名user，密码随意，进不去也无所谓，这一步是确保光猫启用了telnet功能，配置中会留下明文密码）  
【4】ftp链接光猫。这里我使用的是winscp，ftp连接光猫，账户密码都是useradmin/useradmin（看下图），/var/tmp/目录下，找到telnet_su_passwd 文件，打开即可获得  
  
那么上面就是超级密码了。  
使用超级管理员登录就可以了~~！



### 查询账号密码

#### 登录光猫

忘了宽带账号密码，一种自己查询的途径是登录光猫超级管理员后台查。光猫超级管理员账号密码一般在光猫上贴纸有写。

![](https://s3.bmp.ovh/imgs/2023/05/10/636d5de805cbaa29.png)


#### 查看宽带账号密码方式

##### 方法1：框架源码查询

- 进到超管界面后，选 网络 - 网络设置 - 网络连接，连接名称切换到 41结尾的项，可以看到拨号账号密码页，右键 查看框架源代码。

![800](https://s3.bmp.ovh/imgs/2023/05/10/67cb8d4034a639fe.png)

**Tips：** 光猫拔了光纤，按reset键重置不会丢失LOID和上网的账号密码，但可以将超级管理员密码重置为默认密码，电信光猫常用的超级管理员账号密码: telecomadmin, nE7jA%5m（此法来源网络未经本人验证）


- 源代码中按ctrl+F搜索宽带账户名，一般后面紧跟的6位数字就是账号密码。（下图红色为账号，绿色为密码）
![](https://s3.bmp.ovh/imgs/2023/05/10/70584b784c5ae612.png)

- PS：如果看到不是6或8为数字或字符，说明此法不通。

##### 方法2：修改页面元素

法1不通时，可以尝试法2。

- 一样进到可以查看拨号账号密码页，edge或chrome按F12，调出开发者工具，点击element（元素），鼠标点击网页密码那列，在元素中将type="password"改为type="text"，在网页中就看到**密码那里变成了明文显示**，这串字符再用[base64解码](https://base64.us/)一下就是宽带密码了。
![](https://s3.bmp.ovh/imgs/2023/05/10/d6c53e43741b3cb4.jpg)