---
title: "光猫超密和宽带拨号账号密码查询资料"
subtitle: ""
date: 2023-05-10T10:57:27+08:00

lastmod: 2023-08-13T10:57:27+08:00
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

comment: false
weight: 0

toc:
  enable: true

seo:
  images: []
# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
 ## 通用账号密码
```账号
CMCCAdmin
```

```
admin
```

```
aDm8H%MdA
```  

```
Cmcc10086#
```

```
CUAdmin  
```
  
```
telecomadmin
```

```
nE7jA%5m
```  

```
admintelecom
``` 

HG烽火运维工厂账号: 
```
fiberhomehg2x0
```  

```
hg2x0
```

```开启烽火隐藏页面
http://192.168.1.1/logoffaccount.html
```

联通光猫超级管理员访问地址：192.168.1.1/cu.html
上海联通：用户名与超密同是 CUAdmin(本人测试成功登陆了)

浙江/内蒙/河北/浙江: cuadmin 
辽宁：lnadmin 
青海：qhuniadmin 
湖南：CUAdmin#HGU 
重庆：cqunicom 
北京：123qweasdzxc 
海南：cu@HNunicom 
黑龙江：8MCU@HLJ

广东省联通光猫超级密码汇总，广东联通用户可以自行测试超密。
全省智能网关（HGU）光猫自动开通实行路由模式，自动开通后无需拨号直接插网线使用，
如有不需要路由模式可以将光猫调测为桥接模式，
方式如下，
1:根据光猫背面的账号密码进行调试，

2使用联通光猫统一账号密码，账号统一CUAdmin，密码

华为光猫联通维护帐号密码：cuadmin00259e

烽火光猫联通维护帐号密码：cuadmin741e93  

创维光猫联通维护帐号密码：cuadmin2c1875

中兴光猫联通维护帐号密码：cuadmin309935   cuadmin38e1aa

贝尔光猫联通维护帐号密码：cuadmin4cf2bf  

天邑光猫联通维护帐号密码：cuadmin9c32a9  

友华光猫联通维护帐号密码：cuadmin34e71c 


中兴F607ZA查看超级管理员密码
Telnet连接光猫，用户名root，密码Zte521，输入命令sendcmd 1 DB p DevAuthInfo即可查看所有的用户名密码，
但是中兴F607ZA比较奇葩，普通用户和超级管理员登录的页面是不同的，超级管理员的登录页面是：http://192.168.1.1/cu.html

## 成功案例

### 天邑TEWA 700G
#### 电信
法1：192.168.1.1  普通管理员进入，关闭电脑防火墙。  
在“Windows PowerShell（管理员）”中按顺序输入命令

输入 ftp 192.168.1.1

输入 密码（光猫后面贴出的登录密码）

输入 cd ..

输入 cd var

输入 cd config
``
输入 
```
get lastgood.xml c:\aa.xml
```

以上完成之后会在C盘生成一个aa.xml文件。
搜索此配置文件

### 友华PT926G/E
#### 电信
法1：ftp  
普通管理员登录，打开powershell


法2：telnet
普通管理员登录，网页开启telnet，三网适用。
```
http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```
telnet用户名密码：普通账号命令残缺，输入目录后双击tap能补全显示目录
移动：
```
yhtcAdmin
```
```
Cec@YHfw
```
su
```
aDm8H%MdA
```
联通：
```
yhtcAdmin
```
```
Cuc@YHfw
```
su
```
CUAdmin
```
电信

```
admin
```
```
TeleCom_1234
```
su
```
TeleCom_mac后6位小写
```




### 烽火HG6201M

1. 开telnet，
```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1
```

2. telnet账户密码
```
root
```

```
hg2x0
```
或者Fh@MAC后6位大写
```
root/admin
```
```
Fh@21IY23
```

3. 输入命令
```
cat /flash/cfg/agentconf/factory.conf
```

第一二行就是超管账户密码。宽带密码网页端可看。


### H60G/H61G/H80G


```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
admin
```
1234qwer@@
```

```
sidbg 1 DB set DevAuthInfo 0 User CMCCAdmin
```

```
sidbg 1 DB set DevAuthInfo 0 Pass aDm8H%MdA
```
```shell
sidbg 1 DB save
```



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


### 移动H3-1S/H3-2S/H3-2Sse/H3-2sa/H5-8/H5-9/GS8108/GM630（H2-3，H2-3s重置非标密，H2-2广西可以，新疆移动H2-2新版本不行，南京H2-3e）
获取超级密码方法 https://www.right.com.cn/forum/thread-8266942-1-1.html

**（H2-3不同，下面方法不适用，福建移动标密）**

 1. 使用光猫背后的普通用户名登录进光猫，浏览器复制以下链接打开  
```
http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch
```

```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```

```
192.168.1.1/cgi-bin/getGateWay.cgi
```


江苏南京移动H2-3e（商宽测试成功），用第二个开启telnet，查看tn账密，进入后su提权，密码aDm8H%MdA，然后改超管密码。

广西GM630-R，重置后，下发配置，再去删除tr069和关闭上报，第二个地址开启telnet。

![](https://s3.bmp.ovh/imgs/2023/08/04/fbdb3ccf174e7fa0.png)


或者reset后，超密进去，在 安全 telnet配置，启用telnet，再注册loid。
H2-2部分测试失败，河南平顶山T51G测


试成功。
![](https://s3.bmp.ovh/imgs/2023/08/02/1b69319f6a712987.png)

  
2. 电脑启用 telnet  
  
3. 通过telnet进入光猫  
   
输入：  
  
telnet 192.168.1.1  
  
用户名、密码如下：  
```
CMCCAdmin
```  

```
aDm8H%MdA
```
联通telenet账户密码：
```
admin
```

```
chzhdpl@246
```

注意：密码默认不显示 不需要重复输入  

输su 提权，密码也是aDm8H%MdA，输入符由/$变成 /#，就成功登录了。

1. 查看一下登陆信息,可以看到账号密码全部进行了加密  

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

有些地区（广西）账号是admin

5. 修改CMCCAdmin用户的登录密码  
  
输入下面的命令更改CMCCAdmin的密码：  

```shell
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
```
  
Pass后面是CMCCAdmin的登录密码  
  
再输入下面的命令保存即可  

```shell
sidbg 1 DB save
```

6. 直接查询方式
输入这个命令看看在哪个文件夹
```
find / -name 'db_backup_cfg.xml'
```
![](https://pic1.zhimg.com/80/v2-96b04989bf847a0a0b8d04f6bfbafbd4_720w.webp)

进入这个文件夹
```
cd /userconfig/cfg
```

解密配置文件
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml
```

查看解密后的文件
```
vi /tmp/debug-decry-cfg
```

在查看状态下使用vi命令的查找命令进行查找超级管理账号：CMCCAdmin，英文状态下点击【/】后输入CMCCAdmin后，点击回车

> /CMCCAdmin  

找到对应的CMCCAdmin以及对应User及下面行的Pass的Val值，大功告成

完成后即可使用CMCCAdmin+更改后的密码即可登录光猫后台。

**ftp账密是相同的：e8ftp**

移动吉比特系列光猫均可参考。

### H2-3可尝试

特定版本的火狐浏览器插件，HTTP Header Live。  
打开`HTTP Header Live`插件，在页面上随便点击一个页面，再次查看`HTTP Header Live`插件，捕捉到了`post`信息，选择一个post。  
post修改为：
```
http://192.168.1.1/boaform/set_telenet_enabled.cgi
```

```
mode_name=set_telenet_enabled&amp;nonedata=0.3535281170047305&amp;user_name=root&amp;user_password=admin&amp;telenet_enabled=1&amp;default_flag=1
```
![](https://s3.bmp.ovh/imgs/2023/07/31/7d5aa2cbd30a618d.png)

send，开启的telnet，意思是将光猫的telnet账号密码分别设置为`root`与`admin`

https://www.5v13.com/mesh/26321.html

### 移动贝尔G-140-MD

Password：*****（移动的光认证密码，对应电信联通的loid）  
INTERNET_*_VID_**（上网的VLAN ID号）  
VOICE_*_VID_*（语音鉴权配置和密码）  
Other_*_VID_*（IPTV参数）  
（由于楼主没办理iptv和固话，所以我这里是空的，这两个参数请自行百度需要备份的内容）  
你的宽带账号  
你的宽带密码

**法一：直接查**
```
http://192.168.1.1/dumpdatamodel.cgi
```

查找cmccadmin，base64解密

**法二：重置**
开机正常上网状态，直接拔掉光纤！（不这样操作它会自动还原配置）  
用尖锐物品按住背面的复位孔十秒以上，直到自动重启！

重置后标密，注册后密码不会马上变更，可以删除069。

账号：CMCCAdmin  
密码：aDm8H%MdA  
个别地区可能是：  
账号：admin  
密码：Cmcc10086#
登录成功之后在地址栏访问这个地址，点击开启telnet：  
```
http://192.168.1.1/system.cgi?telnet
```
进入网络，远程管理菜单里找到password认证，填入你刚才备份的password，点应用。![](https://s1.ax1x.com/2020/03/17/8de8Te.jpg)  
接下来插上光纤，回到后台主页，如果没问题的话就会开始自动下发配置：

telnet登录的话并不需要输入用户名和密码就可以直接登录，实际上登陆的用户名是root，密码不得而知，hg2x0，但是可以用passwd命令修改。用修改后的密码和用户名root可以登录TTL。cfe的用户名密码为telecomadmin和nE7jA%5m

移动光猫帐号 CMCCAdmin密码 aDm8H%MdA
最后附上setttt大神发出的关于路由模式下弹注册提示的解决办法。

设备注册提示：1是关闭，0是开启
```
cfgcli -s InternetGatewayDevice.X_CT-COM_UserInfo.Status 0
```

```
cfgcli -s InternetGatewayDevice.X_CT-COM_UserInfo.Result 1
```



### 吉比特GM630，GM232
https://www.right.com.cn/forum/thread-4267874-1-1.html
请全部理解且做好足够心理准备再继续进行。重置光猫之后不能上网，如果你自己设置不成功，就得打电话叫装维上门修复。  
1、捅复位键，45～60秒。很关键，捅后，要断电重启。 
2、打开登录页面，用管理员帐号CMCCAdmin和初始密码aDm8H%MdA登录进去。  
3、在此页面  
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
开启telnet,LAN，保存  
4、退出登录，到主页“注册安装"，填入ONT密码，操作业务下发  
5、下发完成后，现在可以正常上网，然后再提供远程
6、使用windows自带的telnet，或者Xshell、SecureCRT等工具连接到光猫，登录用户CMCCAdmin，密码输入光猫反面写的user密码@C1，如xxxxxxxx@C1。（我这里是C1，如果不对请尝试省份首字母，比如@BJ）  
待出现~$符号后，输入sidbg 1 DB p DevAuthInfo，超级密码一目了然。


### 联通MSG2100E-UPON-4V

管理员192.168.1.1/cu.php   
CUAdmin   
CUAdmin   

### 河南联通HS8346V5，HS8346R5，上海移动 华为HS8546V5 山东联通HS8346X6
> https://www.right.com.cn/forum/thread-4092011-1-1.html
> https://www.xxshell.com/3387.html

**备份：**  
通过光猫背面user用户登录，记录光猫原有的 INTERNET的VLAN、LOID、MAC地址、宽带账号密码。

- 拔光纤，重置，CUAdmin进入，导出配置文件，解密，修改telnet，user提权，超密变化参数设0。注册，导入文件。

1. 拔掉光猫的光纤，并重启光猫

2. 使用工具开启光联通猫Telnet功能

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

telecomadmin18597177

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


```
http://192.168.1.1/bridge_route.gch
```

```

```


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

### 烽火吉比特 HG6145F/HG6045F3 移动联通 HG5143F电信
移动烽火-吉比特-JBT-HG6145F超密破解-TJ
https://www.right.com.cn/forum/thread-8252579-1-1.html
北京联通/移动 烽火HG6145D/HG6145D1 获取管理员密码 改省份 改桥接 破解 拆解
https://www.right.com.cn/forum/thread-8230876-1-1.html
电信烽火HG5143F光猫开启telnet获取超级密
https://think-me.github.io/post/2023/04/08/18531/index.html
第一步：打开telnet  
获得光猫的MAC地址  
电脑打开CMD界面，输入   
```
arp -a 192.168.1.1
```

这时将显示你的光猫MAC，红色位置就是。  
  
浏览器中录入  
移动
```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=54E0240007C0
```
联通
```
http://192.168.1.1/telnet?enable=1&key=ACC4A959D450
```
电信
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1&key=28F7D63F3A5C
```

```
root  或者  admin
```

```
Fh@0007C0
```
```
hg2x0
```


电信telnet账密是
```
telecom
```

```
nE7jA%5m
```
输su再输Fh@

这个等号后面写上你上面获得的MAC 字母大写去除横线然后回车，将会提示telnet已启用。  
  
第二部 获得超密  
打开CMD命令窗口录入：telnet 192.168.1.1  
链接成功后输入账号：admin 在北京天津这边用这个admin，其他地方如果不管用就试试  root  
录入密码为  Fh@644D90+你上面获得的MAC的后六位大写。  
链接成功后将会显示一个#  
Fh@FA5770
  
继续在#后录入  
```
load_cli factory
```
 
Config\factorydir#   
```
show admin_name
```

```
show admin_pwd
```

这时将显示你的超级账号名称  
Success! admin_name=CMCCAdmin  
  
继续录入  
Config\factorydir# show admin_pwd  
  
这时将显示你的超级密码  
Success! admin_pwd=CMCCAdminFa5&G3Pk

----------------------------
inter  88
069  57
*a3Cc6Eq5
NX02360718

k95120100884279
779200

### 中兴G7615
中兴G7615注册50%手动配置上网删除Tr069
https://www.right.com.cn/forum/thread-8279408-1-1.html
(出处: 恩山无线论坛)

先用开telnet工具开启临时账号密码，修改临时telnet为永久

  sendcmd 1 DB p TelnetCfg  
   sendcmd 1 DB set TelnetCfg 0 Lan_Enable 1  
   sendcmd 1 DB set TelnetCfg 0 TS_UName root  
   sendcmd 1 DB set TelnetCfg 0 TSLan_UName root  
   sendcmd 1 DB set TelnetCfg 0 TS_UPwd Zte521  
   sendcmd 1 DB set TelnetCfg 0 TSLan_UPwd Zte521  
   sendcmd 1 DB set TelnetCfg 0 Max_Con_Num 99  
   sendcmd 1 DB set TelnetCfg 0 ExitTime 999999  
   sendcmd 1 DB set TelnetCfg 0 InitSecLvl 3  
   sendcmd 1 DB set TelnetCfg 0 CloseServerTime 9999999  
   sendcmd 1 DB set TelnetCfg 0 Lan_EnableAfterOlt 1  
   sendcmd 1 DB save  
  
   /etc/init.d/regioncode       查询地区代码  
   upgradetest sdefcof 310     310代表广东，其他地区找对应代码  
设置国家地区代码：   upgradetest sdefconf [序号]  
查询国家地区代码：   upgradetest gdefconf
如果upgradetest命令不成功，请修改为siupgrade
  
   setmac show          查看MAC情况，里面显示16进制  
   setmac 3 2180        清除原注册信息2180项  
   setmac 3 2181        清除原注册信息2181项  
  
  
  
   setmac 1 768 XXXXXX      旧光猫MAC前6位大写8593B2  
   setmac 1 2176 XXXX        旧光猫SN序列号前4位，厂商代码大写，中兴ZTEG，华为HTWC  
   setmac 1 2177 XXXXXXXX       旧光猫SN序列号后8位大写  
   setmac 1 2178 XXXXXXXXXX    旧光猫SN大写  
   setmac 1 512 XXXX....XXXX      旧光猫后台联通设备标识代码大写如01FFFFF......  
  
  
  
   setmac 1 256 85:93:b2:ca:ea:39        旧光猫MAC，小写  
   setmac 1 257 85:93:b2:ca:ea:3a  
   setmac 1 258 85:93:b2:ca:ea:3b  
   setmac 1 259 85:93:b2:ca:ea:3c  
   setmac 1 260 85:93:b2:ca:ea:3d  
   setmac 1 261 85:93:b2:ca:ea:3e  
   setmac 1 262 85:93:b2:ca:ea:3f  
   setmac 1 263 85:93:b2:ca:ea:40  
  
  
   注册50%不能上网，telnet改注册为成功状态  
  
   sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
   sendcmd 1 DB set PDTCTUSERINFO 0 Result 1  
   sendcmd 1 DB save  
   sendcmd 1 DB reboot  
  
   删除TR069，禁用RMS服务器使能  
   sendcmd 1 DB p WANC   查询TR069在第几个（0 1 2 3 4等）  
   sendcmd 1 DB delr WANC 0  0代表前面查询TR069在0这一项里面，如果查询是3，那就0改为3  
   sendcmd 1 DB set MgtServer 0 PeriodicInformEnable 0     RMS服务器不启用周期上报


### 联通sk-d740-c，SK-D748-C，SK-D742C，SK-D748
详情步骤：  
【1】保证正常访问光猫web  

【2】再打开这个链接，开启telnet功能。（打开隐藏配置界面：http://192.168.1.1/hidden_version_switch.html
勾选telnet功能，一闪而过不用在意。）  

账户密码都是useradmin/useradmin  
【3】然后本地可以测试一下光猫telnet功能是否打开（开始-运行-cmd-telnet192.168.1.1，用户名user，密码随意，进不去也无所谓，这一步是确保光猫启用了telnet功能，配置中会留下明文密码）  
【4】ftp链接光猫。这里我使用的是winscp，ftp连接光猫，账户密码都是useradmin/useradmin（看下图），/var/tmp/目录下，找到telnet_su_passwd 文件，打开即可获得。

### 联通华为HN8145XR
记下loid，重置，登录CUAdmin，断开光猫，管理，配置文件，导出hw_ctree.xml，用华为解密工具解密，编辑，修改CUAdmin

### 江苏联通HN8145XR超密CUAdmin
tr069-45
vlan id：2205
![](https://s3.bmp.ovh/imgs/2023/08/01/de41a08a87e15728.png)


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

### 河南联通F657GV9改桥接

改桥接，先记录Loid，直接断光纤，重置，进超管CUAdmin，改好桥接后，注册即可。


### 中兴F650全系使能

https://www.jarvisw.com/?p=1460

下载链接：

[factorymode_crack-v2](https://www.jarvisw.com/wp-content/uploads/2021/11/factorymode_crack-1.rar)[下载](https://www.jarvisw.com/wp-content/uploads/2021/11/factorymode_crack-1.rar)

#### 使用方法：

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

#### TFTP提取法
接着打开TFTP软件 在telnet中输入 
```
tftp -p -l userconfig/cfg/db_user_cfg.xml -r db_user_cfg.xml 192.168.1.2
```
ip根据TFTP软件中的ip进行修改。

#### U盘拷贝：

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

### 中兴系列天翼4.0（浙江江苏）获取方法
https://www.right.com.cn/forum/thread-8163087-1-1.html

1. 第一步光猫拔掉光纤 然后恢复出厂设置 然后进行破解

factorymode_crack.exe工具所在位置自己修改  
然后输入
```
factorymode_crack.exe -l xxx open -i 192.168.1.1 -p 8080
```

这样我们就开启了telnet 并且获得了临时的telnet 帐号和密码  
  
接下来 我们打开另一个CMD窗口输入  

telnet 192.168.1.1

确保自己的Windows安装了telnet服务，使用临时的帐号密码登录telnet  

登录完成我们获取一下光猫的配置我们需要得到telnet的永久帐号和密码  
打开TFTP软件，在telnet中输入  

```
tftp -p -l userconfig/cfg/db_user_cfg.xml -r db_user_cfg.xml 192.168.1.2
```
ip根据TFTP软件中的ip进行修改  
  

这样我们就得到了光猫的配置文件但是这个配置是加密的，我们需要解密，此Telnet窗口不要关闭接下来还需要用到  
  
使用CMD 打开ztecfg.exe软件所在位置 ztecfg.exe 和光猫配置放在同一目录 
```
.\ztecfg.exe -d AESCBC -i .\db_user_cfg.xml -o break.cfg
```

完成后我们会得到一个break.cfg 文件 打开文件搜索 关键字找到TelnetCfg 
  
查看user得到Telnet 永久账户和密码

> user
> ZTEGC4813648

但是这个帐号和密码暂时还不能登录Telnet  
接下来需要打开 光猫的永久Telnet 回到Telnet窗口 输入命令

1. sendcmd 1 DB set TelnetCfg 0 Lan_Enable 1  
    
2. sendcmd 1 DB set TelnetCfg 0 InitSecLvl 3  
    
3. sendcmd 1 DB set TelnetCfg 0 Max_Con_Num 5  
    
4. sendcmd 1 DB save  
    
5. reboot


命令一行一个输入进去 然后光猫会重启 重启完成 然后插上光纤 注册光猫 提示 浙江地区不需要重新输入LOID 恢复出厂LOID会保留 如果重新输入会导致配置自动下发覆盖 导致Telnet端口封死  
  
现在光猫已经可以上网了并且已经把你的超级密码改掉了  
  
然后获取超级密码  
  
打开一个CMD窗口 输入  

1. Telnet 192.168.1.1

_复制代码_

使用刚才获取到的Telnet帐号密码登录 重新获取一遍光猫配置 这个配置里是包含修改过后的超级密码的

1. tftp -p -l userconfig/cfg/db_user_cfg.xml -r db_user_cfg.xml 192.168.1.2

解密方法看上面的步骤是一样的 这里就不再多说了 解密完成我们搜索 telecomadmin  
  
Pass就是超级密码了

### 电信小翼管家抓包 F系列

黄鸟：https://www.123pan.com/s/OTE9-HiKbd.html
管家：https://www.123pan.com/s/OTE9-AiKbd.html

1. 下载小翼管家并通过WiFi或其他绑定你的光猫，点中间 -网络  -网关设置绑定。
2. 下载HttpCanary，vpn配置同意，安装证书不用管，返回即可，打开点左上角在目标应用中选择小翼管家，返回主界面右下角开始抓包。
3. 打开小翼管家，依次点击：网络-网关设置-指示灯(开启或关闭都可以)。如果显示失败，用旧版本。
4. 回到抓包软件停止抓包，然后**长按**带有如图中POST字符的，弹出来的对话框选编辑重发，下拉最底点击【大小：xxxB】，清空原内容，替换为以下：
```
{ "Params": [], "MethodName": "GetTAPasswd", "RPCMethod": "CallMethod", "ObjectPath": "/com/ctc/igd1/Telecom/System", "InterfaceName": "com.ctc.igd1.SysCmd", "ServiceName": "com.ctc.igd1" }
```
![](https://s3.bmp.ovh/imgs/2023/08/01/0dce6227f03bdd9b.jpg)

![](https://s3.bmp.ovh/imgs/2023/08/01/7e5aca2f5e30b34e.png)
![](https://s3.bmp.ovh/imgs/2023/08/01/8ba5d06104d2cb1e.png)

5. 修改后，点右上角上交纸飞机发送，成功后返回compose这个，点开里面即可看到密码。
![](https://s3.bmp.ovh/imgs/2023/08/01/e3835ff2236cbaee.png)

![](https://s3.bmp.ovh/imgs/2023/08/01/f674545710e8b8f0.png)




### 尝试修改

先试一试最简单的步骤：  
1用user登录  
2进入到user修改密码页面  
3打开chrome F12 开发者工具  
4定位到用户名user框  
5看看value有没有值  
如果是0改成1，如果是1改成0，或者user 改为 root、CMCCAdmin
6输入user原密码，输入要修改的管理员密码


## 网站
恩山：https://www.right.com.cn
宽带技术网：https://www.chinadsl.net/
csdn：

## 失败
### [x]上海移动 中兴ZXHN F7610M
使能失败，重置后自动下发路由拨号，删除后监控69后无法注册。
有个py脚本可以使能。

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

超级用户名 : fiberhomehg2x0 超级密码 : hg2x0

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

50E24EBCB7D1
http://192.168.1.1/telnet?enable=1&key=50E24EBCB7D1

192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=28563AFA4BA0   （光猫mac，大写或小写）

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
http://192.168.1.1/romfile.cfg

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