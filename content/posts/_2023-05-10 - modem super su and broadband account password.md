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
aDm8H%MdA
```  

```
admin
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

浙江/内蒙/河北/浙江: cuadmin 
辽宁：lnadmin  lnadmin
青海：qhuniadmin 
湖南：CUAdmin#HGU 
重庆：账号cqadmin 密码cqunicom
北京：123qweasdzxc 
海南：cu@HNunicom 
黑龙江：hljcuadmin，8MCU@HLJ

### 广东联通
广东省联通光猫超级密码汇总，广东联通用户可以自行测试超密。
全省智能网关（HGU）光猫自动开通实行路由模式，自动开通后无需拨号直接插网线使用，
如有不需要路由模式可以将光猫调测为桥接模式，
方式如下，
1. 根据光猫背面的账号密码进行调试，
2. 超管规律，cuadmin+mac前6位小写
3. 使用联通光猫统一账号密码，账号统一CUAdmin，密码

华为光猫联通维护帐号密码：cuadmin00259e

烽火光猫联通维护帐号密码：cuadmin741e93  

创维光猫联通维护帐号密码：cuadmin2c1875

中兴光猫联通维护帐号密码：cuadmin309935   cuadmin38e1aa

贝尔光猫联通维护帐号密码：cuadmin4cf2bf  

天邑光猫联通维护帐号密码：cuadmin9c32a9  

友华光猫联通维护帐号密码：cuadmin34e71c 

### 江苏联通CUAdmin

上海联通FF4610U重置后，telnet开不了，新建连接，不用注册，直接拨号成功。
浙江电信，中兴光猫，重置后，插光纤，会自动注册下发配置。


#### 中兴F607ZA
查看超级管理员密码
Telnet连接光猫，用户名root，密码Zte521，输入命令
```
sendcmd 1 DB p DevAuthInfo
```
即可查看所有的用户名密码，
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
搜索此配置文件telecomadmin

### 友华PT926G/E  PT921G
#### PT924G联通，提示成功但无法开启telnet。
#### pt921g
直接下载文件
```
http://192.168.1.1/romfile.cfg
```

#### 电信
法1：ftp  
普通管理员登录，打开powershell
输入 ftp 192.168.1.1

useradmin
输入密码（光猫后面贴出的登录密码）

输入 cd ..

输入 cd var

输入 cd config
``
输入 
```
get lastgood.xml c:\aa.xml
```

#### 移动联通电信
法2：telnet 三网
普通管理员登录，网页开启telnet，三网适用。
```
http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```
电信加8080
```
http://192.168.1.1:8080/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```
telnet用户名密码：普通账号命令残缺，输入目录后双击tap能补全显示目录
移动：
```
yhtcAdmin
```

```
Cec@YHfw
```
移动pt927G
```
Cm1@YHfw
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
1234
```
```
TeleCom_1234
```
su
```
TeleCom_mac后6位小写
```

```
cd /var/config
```

```
cat lastgood.xml|grep SUSER_PASSWORD
```
直接
```
cat /var/config/lastgood.xml | grep "SUSER_PASSWORD"
```

lastgood.xml  里的拨号密码是初始的，实时的在var/ppp/ppp.conf
```
var/ppp/ppp.conf
```

电信打开备份页：  
前提要从入口http://192.168.1.1:8080 超管登录，或者user
```
http://192.168.1.1:8080/bd/saveconf.asp
```
backup保存配置文件，搜索telecomadmin账号，telnet管理员密码

http://192.168.1.1/bd/vermod.asp 

> 资料
 [http://192.168.1.1/bd/hide.asp](http://192.168.1.1/bd/hide.asp)  
[http://192.168.1.1/bd/vermod.asp](http://192.168.1.1/bd/vermod.asp)  
[http://192.168.1.1/bd/saveconf.asp](http://192.168.1.1/bd/saveconf.asp)
http://192.168.1.1/bd/modify_hide.asp   临时开telnet  
http://192.168.1.1/bd/upload_sc.asp      升级固件
http://192.168.1.1/autorun/acccfg.asp  ADSL宽带上网账号密码填写  
http://192.168.1.1/cgi-bin/cgic_systeminfo.cgi   显示当前系统信息
http://192.168.1.1/bd/mbssid.asp         无线配置  
http://192.168.1.1/bd/vendorversion.asp 软硬件版本型号
http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi  永久telnet，既使重启也可以telnet  
本教程也适合PT926G，前提在地址中加冒号和8080。如http://192.168.1.1:8080/bd/upload_sc.asp  
telnet账号为：telecomadmin密码为:TeleCom_1234


### HG6201M
#### 法1
1. 开telnet
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1
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
Fh@AE63D0
```

3. 输入命令
```
cat /flash/cfg/agentconf/factory.conf
```

第一二行就是超管账户密码。宽带密码网页端可看。

#### 法2
192.168.1.1:8080  登录userdmin后打开
```
http://192.168.1.1:8080/cgi-bin/baseinfoSet.cgi
```

直接解密网站：https://www.iwanyx.com/abc/
在线跑java：https://www.bejson.com/runcode/java/
```java
import java.util.HashMap;
import java.util.Map;

public class Main {
       
        public static void main(String[] args) {

        Map<String, String> map = new HashMap<>();
        //  获取信息的方式 http://192.168.1.1:8080/cgi-bin/baseinfoSet.cgi
        // fixme,下面两行把从路由器拿到的信息放在这里
        map.put("telecomadmin", "120&105&112&105&103&115&113&101&104&113&109&114&57&56&57&50&56&54&55&49&");
        map.put("useradmin", "101&104&113&109&114&");
        for (Map.Entry<String, String> entry : map.entrySet()) {
            StringBuilder stringBuilder = new StringBuilder();
            String[] split = entry.getValue().split("&");
            for (String s : split) {
                int offset = 4;
                if (stringBuilder.toString().startsWith("telecomadmin")) {
                    offset = 0;
                }
                stringBuilder.append((char) (Integer.parseInt(s) - offset));
            }
            map.put(entry.getKey(), stringBuilder.toString());
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
}
```


### HG2543C1/HG2541C1电信

开启telnet  

telnet用户名 ：root   
密码是（默认无线网络密钥+默认终端配置密码）的组合
telnet密码：（每个光猫不一样）
```
cat /flash/cfg/agentconf/factory.conf
```



### HG2201U/

user登录后打开
```
http://192.168.1.1/servmngr.html
```
部分空白，ctrl+A显示，打开ftp，telnet，设置ftp和telnet账号密码

进入telnet输入完账号密码后出现<的符号，再次输入
```
gendefsettings
```
生成配置的备份文件，**很关键，** 否则backpresettings.conf是初始文件。 

**再输入sh进去shell**  

直接查
```
cat /fhconf/backpresettings.conf | grep Admin
```

进ftp下载 /fhconf/backpresettings.conf
搜索cuadmin，base64解码

### HG261GS/HG260 
（广西电信）

	192.168.1.1
	联通版进入维护账号
```
http://192.168.1.1/logoffaccount.html
```
用户名：fiberhomehg2x0  
密码：hg2x0

出厂设置保存一下即可

开telnet  
root  hg2x0

### HG6145F/HG6045F3/HG5143F
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
Fh@6A3FC4
这时将显示你的光猫MAC。  
Fh@D9C610
浏览器中录入  
移动
```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=ACC4A9E92480
```
联通
```
http://192.168.1.1/telnet?enable=1&key=C4F0EC6A3FC4
```
电信
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1&key=3A539CB55564
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
密码
```
nE7jA%5m
```

```
hg2x0
```

输su再输Fh@

第二部 获得超密  
打开CMD命令窗口录入：telnet 192.168.1.1  
链接成功后输入账号：admin 在北京天津这边用这个admin，其他地方如果不管用就试试  root  
录入密码为  Fh@644D90+你上面获得的MAC的后六位大写。  
```
Fh@FA5770
```
命令行输入：
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

### H60G/H61G/H80G/T66

移动联通均是，记录vlan id，loid，重置。

```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
设置telnet账号密码
```
admin
```

```
1234qwer@@
```

```
chzhdpl@246
```
su
```
aDm8H%MdA
```

设置修改密码并保存，账号可不动
```
sidbg 1 DB set DevAuthInfo 0 User CMCCAdmin
```

```
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save
```


吉比特CM115Z,CM113Z光猫破解超级权限教程
https://www.right.com.cn/forum/thread-2270800-1-1.html

### H3-1S/H3-2S/H3-2Sse/H3-2sa/H5-8/H5-9/GS8108/GM630/H2-2/H2-3e/T51G
获取超级密码方法 https://www.right.com.cn/forum/thread-8266942-1-1.html


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

```
http://192.168.1.1/system.cgi?telnet
```

```
http://192.168.1.1/tserver.gch
```

```
http://192.168.1.1/hidden_factory_switch.gch
```

```
http://192.168.1.1/hidden_factory_switch.html
```

```
http://192.168.1.1/hidden_version_switch.html
```

```
http://192.168.1.1/hidden_version_switch.gch
```
sk-d748s
```
http://192.168.1.1/cgi-bin/telnet.asp
```
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
UNG220Z（甘肃移动）
```
CMCCAdmin
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
  
输入上面的命令后将会显示下面的账号密码经过加密的内容：  
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
sidbg 1 DB save
```
find / -name 'debug-decry-cfg'
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

```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml && cat /var/tmp/debug-decry-cfg | sed -n '/DevAuthInfo/,/\<Tb.>/p' | grep -i "User\|Pass"
```
在查看状态下使用vi命令的查找命令进行查找超级管理账号：CMCCAdmin，英文状态下点击【/】后输入CMCCAdmin后，点击回车

> /CMCCAdmin  

找到对应的CMCCAdmin以及对应User及下面行的Pass的Val值，大功告成

完成后即可使用CMCCAdmin+更改后的密码即可登录光猫后台。

**ftp账密是相同的：e8ftp**

移动吉比特系列光猫均可参考。

广西GM630-R，重置后，下发配置，再去删除tr069和关闭上报，第二个地址开启telnet。

![](https://s3.bmp.ovh/imgs/2023/08/04/fbdb3ccf174e7fa0.png)

或者reset后，超密进去，在 安全 telnet配置，启用telnet，再注册loid。
H2-2部分测试失败，河南平顶山测试成功。
![](https://s3.bmp.ovh/imgs/2023/08/02/1b69319f6a712987.png)


### H2-3/H1s-3

蓝色页面。
查看设备信息含普通账号密码  
```
http://192.168.1.1/webcmcc/gui_device_info.html?password=!@qw34er&username=root
```
固件升级  
```
http://192.168.1.1/webcmcc/firm_upgrade.html?password=!@qw34er&username=root
``` 
备份配置 “有些有有些无“  
```
http://192.168.1.1/webcmcc/backup.html?password=!@qw34er&username=root
```  
配置更新 “有些有有些无“  
```
http://192.168.1.1/webcmcc/update.html?password=!@qw34er&username=root
```
证书升级  
```
http://192.168.1.1/webcmcc/certificate.html?password=!@qw34er&username=root
```
完全恢复出厂配置（慎重、慎重、慎重使用）  
```
http://192.168.1.1/webcmcc/gui_restore_factory.html?password=!@qw34er&username=root
```
强制注册 （强制注册  不打勾=已注册状态   打勾=会弹跳注册信息）  
对于一些需换猫有绑定SN MAC 注册卡30-40%可用此强制注册再去手动配置即可  
```
http://192.168.1.1/webcmcc/modeset.html?password=!@qw34er&username=root
```
开TELNET  自己设置 TELNET账号密码 建议设置 账号为 root  
```
http://192.168.1.1/webcmcc/telnet.html?password=!@qw34er&username=root
```



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

#### H2-3灰色页面，H2-3s蓝色页面在系统里恢复出厂，TEWA 272G


### 移动CM112   GS3101  GS2107（GS3202不同）GS8101用中兴工具

**测试：**
http://192.168.1.1/cgi-bin/tmp/ctromfile.cfg  


1. 登陆路由器之后打开这个地址  
```
http://192.168.1.1/cgi-bin/getGateWay.cgi
```
页面返回Yes字样一般即为成功，我这里返回的是：   
Family GateWay  
Yes  

2. 连接并登陆Telnet

打开成功后使用Telnet连接工具连接到路由器

telnet 192.168.1.1  

然后输入账号密码
```
admin
```

```
s2@We3%Dc#
```
四川GS2107的telnet账号：
```
CMCCAdmin
```

```
s2@We3%Dc#
```


如果登陆后界面一般显示# 就是成功

3. 接着查看密码

登陆成功后输入
```
cat /tmp/ctromfile.cfg | grep 'Admin'
```
就可以查看超级管理员的密码

如我这里返回
```
# cat /tmp/ctromfile.cfg | grep 'Admin'
<Entry0 Active="Yes" username="CMCCAdmin"
web_passwd="CMCCAdmin****"
```
其中的username=后面的就是管理员账号，一般为CMCCAdmin，web_passwd=后面的就是密码，这里对应的是CMCCAdmin****，注意不要带引号。

&amp;等于&

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

查找cmccadmin，supassword（telnet的root密码）解密。
解密，用python文件，nokia-router-cfg-tool.py文件夹下命令行运行语句，-d后面是加密的内容。
```
python nokia-router-cfg-tool.py -d c6hXbAjsbxg0U5JL6wZztQ==
```
telnet：
user或useradmin  
密码背部   
su密码  
G-140-MF
```
8tEETadDzUXc
```
G-1425-MB
```
GFdN2gMzTYC2
```

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



### 河南联通sk-d740

```
http://192.168.1.1/hidden_version_switch.html
```
开启telnet。

ftp软件登入，useradmin，useradmin，返回上层目录，进入userconfig/cfg/
下载db_user_cfg.xml，解码即可。

### 山东联通sk-d740

```
http://192.168.1.1/hidden_version_switch.html
```
开启telnet
默认版本telnet账号root，Pon521
山东的user，Pon521，记住注册码，重置或切换版本默认再切换回山东，  
开telnet，账号user，CUAdmin，su密码：CUAdmin  ，telnet密码为超密。先登录telnet后，在注册下发数据，更改超密，telnet保持一段时间在线。

```
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save
```

```
sidbg 1 DB set TelnetCfg 0 TS_Enable 1
sidbg 1 DB set TelnetCfg 0 Lan_Enable 1
sidbg 1 DB set TelnetUser 0 Password 123Qwe
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save
```

解密参照下面，xor，routerpass均不能解
```
sendcmd 1 DB decry /userconfig/cfg/db_user_cfg.xml
```
查看解密后的文件
```
vi /tmp/debug-decry-cfg
```

### 山东联通dt741-csf
打开，里面有loid
```
http://192.168.1.1/hidden_version_switch.html
```
切换版本，恢复出厂设置。
telnet账号root，密码是user密码+超密CUAdmin，恢复出厂设置，重新注册后，原来telnet也保持在线，退出后，telnet密码变为新的。


### 河南联通 dt741-csf  
记下LOID还有VID   
不插光纤按住光猫后边的重置键直到光猫重启，  
```
http://192.168.1.1/hidden_version_switch.html
```
 勾选开启telnet    
telnet登录root user密码+CUAdmin    
```
sendcmd 1 DB DevAuthInfo
sendcmd 1 DB set DevAuthInfo 0 User CUAdmin
sendcmd 1 DB set DevAuthInfo 0 Pass cuadmin131415
sendcmd 1 DB save
```

```
http://192.168.1.1/cu.html
```
账户CUAdmin 密码11223344 设置完插上光纤就行  

### GM630，GM232
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
待出现~$符号后，输入，超级密码一目了然。
```
sidbg 1 DB p DevAuthInfo
```
55jkh@vu@C1

### 北京移动SK-D746，SK740S，联通UNG310H
普通账户登录后，输下面，下载romfile.cfg文件，搜索admin  
```
http://192.168.1.1/cgi-bin/upgrade.asp
```

```
http://192.168.1.1/romfile.cfg
```

### 贵州SK-D748
开telnet，user不行的话，打开注册页，能看到注册码，然后恢复出厂。打开
```
http://192.168.1.1/cgi-bin/telnet.asp
```
打开，下载romfile.cfg
```
http://192.168.1.1/cgi-bin/upgrade.asp
```
telnet：
```
CMCCAdmin
```
  
```
s2@We3%Dc#
```
重新注册后进telnet，找到var/tmp/romfile.cfg



### 联通MSG2100E-UPON-4V

管理员192.168.1.1/cu.php   
CUAdmin   
CUAdmin   

### 联通KD-YUN-811G
```
http://192.168.1.1/backupsettings.conf
```

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
如果不对，捅光猫复位后即可恢复adminHW，loid数据还在。（福建电信hs8145xr）
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

elecomadmin18597177

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

```
sendcmd 1 DB p TelnetCfg  
sendcmd 1 DB set TelnetCfg 0 Lan_Enable 1  
sendcmd 1 DB set TelnetCfg 0 TS_UName root  
sendcmd 1 DB set TelnetCfg 0 TSLan_UName root  
sendcmd 1 DB set TelnetCfg 0 TS_UPwd 123Qwe  
sendcmd 1 DB set TelnetCfg 0 TSLan_UPwd 123Qwe  
sendcmd 1 DB set TelnetCfg 0 Max_Con_Num 99  
sendcmd 1 DB set TelnetCfg 0 ExitTime 999999  
sendcmd 1 DB set TelnetCfg 0 InitSecLvl 3  
sendcmd 1 DB set TelnetCfg 0 CloseServerTime 9999999  
sendcmd 1 DB set TelnetCfg 0 Lan_EnableAfterOlt 1  
sendcmd 1 DB set DevAuthInfo 0 Pass admin1234
sendcmd 1 DB save
```  

sidbg 1 DB set TelnetCfg 0 TSLan_UName root  
sidbg 1 DB set TelnetCfg 0 TS_UPwd 123Qwe


```
sidbg 1 DB set TelnetUser 0 Username 123Qwe
sidbg 1 DB set TelnetUser 0 Password 123Qwe
sendcmd 1 DB set DevAuthInfo 0 Pass cuadmin1234
sidbg 1 DB save
```

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
  
```
sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
sendcmd 1 DB set PDTCTUSERINFO 0 Result 1  
sendcmd 1 DB save  
sendcmd 1 DB reboot
```
   sidbg 1 DB delr WANC 0
   删除TR069，禁用RMS服务器使能  
   sendcmd 1 DB p WANC   查询TR069在第几个（0 1 2 3 4等）  
   sendcmd 1 DB delr WANC 0  0代表前面查询TR069在0这一项里面，如果查询是3，那就0改为3  
   sendcmd 1 DB set MgtServer 0 PeriodicInformEnable 0     RMS服务器不启用周期上报


### 联通sk-d740-c，SK-D748-C，SK-D742C，SK-D748
详情步骤：  
【1】保证正常访问光猫web  

【2】再打开这个链接，开启telnet功能。（打开隐藏配置界面：
```
http://192.168.1.1/hidden_version_switch.html
```
勾选telnet功能，一闪而过不用在意。）  

账户密码都是useradmin/useradmin  
【3】然后本地可以测试一下光猫telnet功能是否打开（开始-运行-cmd-telnet192.168.1.1，用户名user，密码随意，进不去也无所谓，这一步是确保光猫启用了telnet功能，配置中会留下明文密码）  
【4】ftp链接光猫。这里我使用的是winscp，ftp连接光猫，账户密码都是useradmin/useradmin（看下图），/var/tmp/目录下，找到telnet_su_passwd 文件，打开即可获得。

### 联通华为HN8145XR
记下loid，重置，登录CUAdmin，断开光猫，管理，配置文件，导出hw_ctree.xml，用华为解密工具解密，编辑，修改CUAdmin

### 江苏联通HN8145XR超密CUAdmin
tr069-45
vlan id：2205



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

### 宽带密码md5解密
电信和移动的光猫（华为制造）一般都使用`sha256(md5(明文密码))`作为加密手段（加密后是64位密文）
在线网站：
```
https://c.runoob.com/compile/9/
```
跑pyhton代码，暴力破解
```python
import hashlib

def sha256(todo):
    return hashlib.sha256(str(todo).encode()).hexdigest()


def md5(todo):
    return hashlib.md5(str(todo).encode()).hexdigest()


def find_secret(secret, max_len):
    for i in range(1, max_len):
        for v in range(0, 10**i):
            s = sha256(md5(str(v).zfill(i)))
            if s == secret:
                print(f'find: {s} = {v}')
                return v


# 8: 这里是最长到8位密码。可以将数字调大，获取更长的密码
find_secret('8567D4C66584D68D710E2728D22B3EDF0F0434F6C682A3BEAE184F5DC6241AD2', 8)
    
```

### 改sn，改地区

中兴光猫：
查看区域
```
cat /etc/init.d/regioncode
```
（更改地区数字）
```
upgradetest sdefconf 215
```

```
 # cat /etc/init.d/regioncode
300:Jiangsu
301:Xinjiang
302:Hainan
303:Tianjin
304:Anhui
305:Shanghai
306:Chongqing
307:Beijing
308:Sichuan
309:Shandong
310:Guangdong
311:Hubei
312:Fujian
313:Suzhou
314:Zhejiang
315:Shanxi
316:Hunan
317:Yunnan
318:Xizang
319:Heilongjiang
320:Guizhou
321:Shanxi2
322:Hebei
323:Ningxia
324:Guangxi
325:Jiangxi
326:Gansu
327:Qinghai
328:Xian
329:Liaoning
330:Jilin
331:Neimeng
332:Henan
334:Jicai
```

  
查询所有ID和SN  
```
setmac show
```


修改SN码：setmac 1 2177 xxxxxxxx [SN 为8字符]  
修改设备标识: setmac 1 512 xxxxxxxxxxxxxxxxx [设备标识位17位字符]  
修改SN:（也就是loid码光猫的入网sn码） setmac 1 2177 xxxxxxxx [SN为8字符]setmac 1 2178 xxxxxxxxx [SN为9字符]  
SN号其实有两个，2177是8位，还有个2178是9位，前面有个大写的G，就跟包装盒和设备上面条码印的一样。其实完整的loid（PONLOID[ID: 2180]）光猫的loid是由厂商代码（VENDORID[ID: 2176]4位数）+编码（GPONSN[ID: 2177]8位）组成的；  
修改MAC地址:  
    setmac 1 256 00:00:00:00:00:00  
  
    setmac 1 257 00:00:00:00:00:00  
  
    setmac 1 258 00:00:00:00:00:00  
  
    setmac 1 259 00:00:00:00:00:00  
  
    setmac 1 260 00:00:00:00:00:00  
  
SN和设备标识一定要输入大写字母，mac输入小写字母

### 中兴光猫设置telnet命令
```
Telnet光猫IP（192.168.1.1）输入用户名（root）和密码（Zte521）即可进入telnet界面，输入一下命令显示所有可以设置的参数：  
  
命令：sendcmd 1 DB p all 有些版本不现实，下面我把所有的可设置項列出来了，具体修改命令格式在最下面。  
  
0 sendcmd 1 DB p DBBase  
1 sendcmd 1 DB p WAND  
  
2 sendcmd 1 DB p WANCD  
#wan vlan  
  
3 sendcmd 1 DB p WANC  
#pppoe for wan  
  
4 sendcmd 1 DB p WANCServList  
5 sendcmd 1 DB p WANCIP  
6 sendcmd 1 DB p WANCIPOpts  
  
7 sendcmd 1 DB p WANCPPP  
#pppoe 信息  
  
8 sendcmd 1 DB p IPv6IP  
  
9 sendcmd 1 DB p LAND  
#LAN 口信息  
  
10 sendcmd 1 DB p BrGrp  
#端口桥接情况  
  
11 sendcmd 1 DB p BrGrp2ndIP  
12 sendcmd 1 DB p DHCP6SHostCfg  
  
13 sendcmd 1 DB p DHCPSHostCfg  
#dhcp服务器配置  
  
14 sendcmd 1 DB p DHCPSPoll  
15 sendcmd 1 DB p DHCPSOpts  
  
16 sendcmd 1 DB p DHCPSBind  
#dhcp地址绑定mac  
  
17 sendcmd 1 DB p DHCPSHostInfo  
#dhcp分配情况  
  
18 sendcmd 1 DB p DHCPSComm  
19 sendcmd 1 DB p DHCPCComm  
20 sendcmd 1 DB p WLANBase  
  
21 sendcmd 1 DB p WLANCfg  
#多SSID信息  
  
22 sendcmd 1 DB p WLANWMM  
23 sendcmd 1 DB p WLANWEP  
24 sendcmd 1 DB p WLANAD  
25 sendcmd 1 DB p WLANCountry  
26 sendcmd 1 DB p WLANWPS  
27 sendcmd 1 DB p WLANPSK  
28 sendcmd 1 DB p IGMPProxy  
  
29 sendcmd 1 DB p DevInfo  
#设备信息  
  
30 sendcmd 1 DB p UserIF  
#web登录超时  
  
31 sendcmd 1 DB p UserInfo  
#web用户信息  
  
32 sendcmd 1 DB p AccessDev  
33 sendcmd 1 DB p AclCfg  
34 sendcmd 1 DB p FWBase  
35 sendcmd 1 DB p FWLevel  
36 sendcmd 1 DB p FWALG  
37 sendcmd 1 DB p FWDMZ  
38 sendcmd 1 DB p FWIP  
39 sendcmd 1 DB p FWURL  
40 sendcmd 1 DB p FWSC  
41 sendcmd 1 DB p FWPM  
42 sendcmd 1 DB p FWPT  
43 sendcmd 1 DB p FWPURL  
44 sendcmd 1 DB p FWPMAPP  
45 sendcmd 1 DB p FWPMDEV  
  
46 sendcmd 1 DB p SNTP  
#SNTP设置  
  
47 sendcmd 1 DB p QOSBasic  
48 sendcmd 1 DB p QOSClassification  
49 sendcmd 1 DB p QOSPolicer  
50 sendcmd 1 DB p QOSQueue  
51 sendcmd 1 DB p MAC  
52 sendcmd 1 DB p L3Forwarding  
53 sendcmd 1 DB p L3ForwardingRT  
  
54 sendcmd 1 DB p MgtServer  
#cn远程控制选项  
  
55 sendcmd 1 DB p ParamAttr  
56 sendcmd 1 DB p DNSSettings  
57 sendcmd 1 DB p DNSHostsList  
58 sendcmd 1 DB p DNSDHCPHostsList  
59 sendcmd 1 DB p UPnPCfg  
60 sendcmd 1 DB p UPnPPortMap  
  
61 sendcmd 1 DB p DDNSClient  
62 sendcmd 1 DB p DDNSService  
63 sendcmd 1 DB p DDNSHostname  
#自带DDNS  
  
64 sendcmd 1 DB p WANDCommCfg  
65 sendcmd 1 DB p Log  
  
66 sendcmd 1 DB p FTPServerCfg  
67 sendcmd 1 DB p FTPUser  
#FTP配置  
  
68 sendcmd 1 DB p USBStorageParList  
  
69 sendcmd 1 DB p TelnetCfg  
  
70 sendcmd 1 DB p RouteSYSRT  
71 sendcmd 1 DB p L2BBridge  
72 sendcmd 1 DB p L2BFilter  
73 sendcmd 1 DB p L2BMarking  
74 sendcmd 1 DB p L2BAvailIF  
  
75 sendcmd 1 DB p PortBinding  
76 sendcmd 1 DB p PortControl  
#端口配置  
  
77 sendcmd 1 DB p Upgrade  
78 sendcmd 1 DB p MacFilter  
79 sendcmd 1 DB p RIPConf  
80 sendcmd 1 DB p RIPIf  
81 sendcmd 1 DB p UsbBakRst  
82 sendcmd 1 DB p USBBackup  
83 sendcmd 1 DB p APPList  
84 sendcmd 1 DB p PRoute  
85 sendcmd 1 DB p Tr069Queue  
86 sendcmd 1 DB p AttrInfo  
87 sendcmd 1 DB p VoIPPortCfg  
88 sendcmd 1 DB p VoIPVMediaCfg  
89 sendcmd 1 DB p VoIPFMediaCfg  
90 sendcmd 1 DB p VoIPMMediaCfg  
91 sendcmd 1 DB p VoIPPhyNumCfg  
92 sendcmd 1 DB p VoIPBearInfo  
93 sendcmd 1 DB p VoIPSIP  
94 sendcmd 1 DB p VoIPSLCTIMECfg  
95 sendcmd 1 DB p VoIPSLCINFCfg  
96 sendcmd 1 DB p VoIPVoiceProfile  
97 sendcmd 1 DB p VoIPVPCallTimer  
98 sendcmd 1 DB p VoIPVPService  
99 sendcmd 1 DB p VoIPVPCodec  
100 sendcmd 1 DB p VoIPVPDTMF  
101 sendcmd 1 DB p VoIPVPLine  
102 sendcmd 1 DB p VoIPCSLine  
103 sendcmd 1 DB p VoIPSIPServer  
104 sendcmd 1 DB p VoIPSIPTimer  
105 sendcmd 1 DB p VoIPDTMFADVCfg  
106 sendcmd 1 DB p VoIPFaxModemRptCtrlCfg  
107 sendcmd 1 DB p VoIPDSPCIDCfg  
108 sendcmd 1 DB p VoIPBGWCfg  
109 sendcmd 1 DB p VoIPDSPMISCCfg  
110 sendcmd 1 DB p VoIPRTPADVCfg  
111 sendcmd 1 DB p VoIPRTCPADVCfg  
112 sendcmd 1 DB p VoIPRTPREDCfg  
113 sendcmd 1 DB p VoIPTONECfg  
114 sendcmd 1 DB p VoIPTONEEventCfg  
115 sendcmd 1 DB p VoIPTONEDescrptCfg  
116 sendcmd 1 DB p VoIPTONEPatternCfg  
117 sendcmd 1 DB p VoIPT38ADVCfg  
118 sendcmd 1 DB p VoIPRingerCfg  
119 sendcmd 1 DB p VoIPRingerEventCfg  
120 sendcmd 1 DB p VoIPRingerDescrptCfg  
121 sendcmd 1 DB p VoIPRingerPatternCfg  
122 sendcmd 1 DB p VoIPVoiceProcCfg  
123 sendcmd 1 DB p VoIPPortStauts  
124 sendcmd 1 DB p VoIPSIPEventSubscribe  
125 sendcmd 1 DB p VoIPSIPLine  
126 sendcmd 1 DB p VoIPIADDiag  
127 sendcmd 1 DB p VoIPSRTermination  
128 sendcmd 1 DB p VoIPSRDigitCollect  
129 sendcmd 1 DB p VoIPSROfficeGroupPrefix  
130 sendcmd 1 DB p VoIPSROfficePrefix  
131 sendcmd 1 DB p VoIPSROfficeDigitMap  
132 sendcmd 1 DB p VoIPSRRouteDigitMap  
133 sendcmd 1 DB p VoIPSRBwList  
134 sendcmd 1 DB p VoIPSRPhyRefListEnable  
135 sendcmd 1 DB p VoIPLineCodec  
136 sendcmd 1 DB p VoIPDMTimerCfg  
137 sendcmd 1 DB p VoIPRTPCfg  
138 sendcmd 1 DB p VoIPRTCPCfg  
139 sendcmd 1 DB p VoIPSRTPCfg  
140 sendcmd 1 DB p VoIPFaxT38Cfg  
141 sendcmd 1 DB p VoIPFaxVBDCfg  
142 sendcmd 1 DB p VoIPModemVBDCfg  
143 sendcmd 1 DB p VoIPSessionCfg  
144 sendcmd 1 DB p VoIPLastSessionCfg  
145 sendcmd 1 DB p VoIPLineCfg  
146 sendcmd 1 DB p VoIPLineHistoryCfg  
147 sendcmd 1 DB p VoIPLineLastCfg  
148 sendcmd 1 DB p VoIPHook  
149 sendcmd 1 DB p VoIPHookVPCfg  
150 sendcmd 1 DB p VoIPIVRPsd  
151 sendcmd 1 DB p VoIPvirtual**P  
152 sendcmd 1 DB p VoIPvirtual**PPrefix  
153 sendcmd 1 DB p VOIPvirtual**UMBERPROC  
154 sendcmd 1 DB p VOIPVPSPEEDDIAL  
155 sendcmd 1 DB p VOIPVPCallFeature  
156 sendcmd 1 DB p VOIPVPSERVICEKEY  
157 sendcmd 1 DB p VoIPPoorQualityList  
158 sendcmd 1 DB p VoipCapabilitiesCodec  
159 sendcmd 1 DB p VOIPCAP  
160 sendcmd 1 DB p VOIPPhyInterface  
161 sendcmd 1 DB p VOIPPhyCallFeature  
162 sendcmd 1 DB p VOIPSLMTerm  
163 sendcmd 1 DB p VOIPSLMWAN  
164 sendcmd 1 DB p VOIPSLMGlobal  
165 sendcmd 1 DB p VOIPSLMAD  
166 sendcmd 1 DB p VOIPSLMSeviceKey  
167 sendcmd 1 DB p VOIPSLMMedia  
168 sendcmd 1 DB p VOIPSLMFaxMedia  
169 sendcmd 1 DB p VOIPSLMVOIPCfg  
170 sendcmd 1 DB p VOIPSrCommonConfigs  
171 sendcmd 1 DB p VOIPSrTidConfigs  
172 sendcmd 1 DB p VOIPSrGroupPrefix  
173 sendcmd 1 DB p VOIPSrOfficeDiMap  
174 sendcmd 1 DB p VOIPSrRouteDiMap  
175 sendcmd 1 DB p VOIPSrBwListInf  
176 sendcmd 1 DB p VOIPDRSLC  
177 sendcmd 1 DB p VOIPDSPToneRing  
178 sendcmd 1 DB p VOIPDSPT38Fax  
179 sendcmd 1 DB p VOIPDSPVoiceGainEc  
180 sendcmd 1 DB p VOIPDSPVadCng  
181 sendcmd 1 DB p VOIPDSPDTMF  
182 sendcmd 1 DB p VOIPDSPTone  
183 sendcmd 1 DB p VOIPDSPJitterBuffer  
184 sendcmd 1 DB p VOIPDSPFaxModemTone  
185 sendcmd 1 DB p VOIPDSPFaxT38More  
186 sendcmd 1 DB p VOIPDSPCID  
187 sendcmd 1 DB p VOIPDSPFaxModemCtrl  
188 sendcmd 1 DB p VOIPDSPFaxVbd  
189 sendcmd 1 DB p VOIPDSPModemVbd  
190 sendcmd 1 DB p VOIPDSPMisc  
191 sendcmd 1 DB p VOIPRcaCommon  
192 sendcmd 1 DB p VOIPSIPWANLine  
193 sendcmd 1 DB p VOIPSIPLANLine  
194 sendcmd 1 DB p VOIPSIPTimerCfg  
195 sendcmd 1 DB p VOIPSIPServerCfg  
196 sendcmd 1 DB p VOIPSIPCfg  
197 sendcmd 1 DB p VOIPSIPExtraCfg  
198 sendcmd 1 DB p VOIPSIPEventCfg  
199 sendcmd 1 DB p VOIPSIPSupportedCfg  
200 sendcmd 1 DB p VOIPCommTotal  
201 sendcmd 1 DB p VOIPCommTTY  
202 sendcmd 1 DB p VOIPCommPort  
203 sendcmd 1 DB p VOIPExt  
204 sendcmd 1 DB p VOIPCIDCfg  
205 sendcmd 1 DB p VOIPVoiceRecord  
206 sendcmd 1 DB p VOIPIVRPassword  
207 sendcmd 1 DB p VOIPHookCfg  
  
208 sendcmd 1 DB p WANDInstInfo  
209 sendcmd 1 DB p PortPriority  
#端口优先级  
  
210 sendcmd 1 DB p SambaCfg  
#samba  
  
211 sendcmd 1 DB p TimePolicy  
#定时策略  
  
212 sendcmd 1 DB p PrefixCfg  
213 sendcmd 1 DB p RaCfg  
  
214 sendcmd 1 DB p DMSCfg  
#DMS配置  
  
215 sendcmd 1 DB p MldProxyCfg  
216 sendcmd 1 DB p PingKeep  
217 sendcmd 1 DB p PingCfg  
218 sendcmd 1 DB p DHCP6SPool  
  
219 sendcmd 1 DB p UserBehaviorCfg  
#行为管理  
  
220 sendcmd 1 DB p UBApps  
221 sendcmd 1 DB p UBFlow  
222 sendcmd 1 DB p UBHttpGetDiag  
  
# sendcmd 1 DB set UBHttpGetDiag 0 HttpServerURL  
  
  
223 sendcmd 1 DB p UBTcpConnectDiag  
224 sendcmd 1 DB p UBDnsQueryDiag  
225 sendcmd 1 DB p NetMonitorDiagnostics  
226 sendcmd 1 DB p UBBasicInfo  
227 sendcmd 1 DB p UBClassification  
  
228 sendcmd 1 DB p VLANInfo  
229 sendcmd 1 DB p PONCfgProduct  
  
230 sendcmd 1 DB p BoardInfo  
#主板信息  
  
231 sendcmd 1 DB p LANInfo  
#端口信息  
  
232 sendcmd 1 DB p IGMPProduct  
233 sendcmd 1 DB p MultiGlobalProduct  
234 sendcmd 1 DB p MultiPortProduct  
235 sendcmd 1 DB p MultiWancConfProduct  
  
236 sendcmd 1 DB p ETHProduct  
237 sendcmd 1 DB p ETHCONFProduct  
  
238 sendcmd 1 DB p QOSCONFProduct  
239 sendcmd 1 DB p QOSProduct  
240 sendcmd 1 DB p QueueWeightProduct  
241 sendcmd 1 DB p TcToCosProduct  
242 sendcmd 1 DB p SvlanS2DtagProduct  
243 sendcmd 1 DB p SvlanMemberCfgProduct  
244 sendcmd 1 DB p RateChgTcProduct  
245 sendcmd 1 DB p AddTagProduct  
246 sendcmd 1 DB p RemoveTagProduct  
247 sendcmd 1 DB p RuleMacProduct  
248 sendcmd 1 DB p PortRuleMacProduct  
249 sendcmd 1 DB p TAGRuleMacProduct  
250 sendcmd 1 DB p UNTAGRuleMacProduct  
251 sendcmd 1 DB p DscpToTciProduct  
252 sendcmd 1 DB p PortQosProduct  
253 sendcmd 1 DB p EthQosACL  
254 sendcmd 1 DB p PortFilterProduct  
255 sendcmd 1 DB p SwitchMonitorProduct  
256 sendcmd 1 DB p PortDHCPServer  
  
257 sendcmd 1 DB print WEBCFG  
#WEB登陆端口  
  
258 sendcmd 1 DB p OMCICFG  
259 sendcmd 1 DB p ARPDETECTConfig  
260 sendcmd 1 DB p ARPAGEINGTIME  
261 sendcmd 1 DB p PdtMiddleWare  
262 sendcmd 1 DB p ALARMCONFIG  
263 sendcmd 1 DB p ALARMPARM  
264 sendcmd 1 DB p MONITORCONFIG  
265 sendcmd 1 DB p MONITORPARM  
266 sendcmd 1 DB p MonitorCollectorCfg  
267 sendcmd 1 DB p MonitorCollectorParm  
  
268 sendcmd 1 DB p CltLmt  
#电信限制  
  
269 sendcmd 1 DB p PDTCTUSERINFO  
270 sendcmd 1 DB p WancPortBindingProduct  
271 sendcmd 1 DB p DhcpcOption125Product  
272 sendcmd 1 DB p PDTWANCEXT  
273 sendcmd 1 DB p WANCPONCFGProduct  
274 sendcmd 1 DB p WancpppProduct  
275 sendcmd 1 DB p PDTE8COPT60S  
276 sendcmd 1 DB p PonCommonCfg  
277 sendcmd 1 DB p LoopBackCheck  
278 sendcmd 1 DB p LoopBackCheckAlarm  
279 sendcmd 1 DB p LoopBackCheckPara  
280 sendcmd 1 DB p LoopBackCheckVlan  
281 sendcmd 1 DB p LongLuminousDetect  
282 sendcmd 1 DB p SimCardInfo  
283 sendcmd 1 DB p HLTInfo  
284 sendcmd 1 DB p HLTLanStatInfo  
285 sendcmd 1 DB p HistoryHLTInfo  
286 sendcmd 1 DB p HistoryHLTLanStatInfo  
287 sendcmd 1 DB p DhcpV6Opt16S  
288 sendcmd 1 DB p Dhcp6cOpt17  
289 sendcmd 1 DB p Lanusb  
290 sendcmd 1 DB p Tr069InformParaExtend  
291 sendcmd 1 DB p PONPower  
292 sendcmd 1 DB p QosCvpA  
293 sendcmd 1 DB p QOSRule  
294 sendcmd 1 DB p QOSType  
295 sendcmd 1 DB p DOWNETHFLOW  
296 sendcmd 1 DB p DOWNGEMFLOW  
297 sendcmd 1 DB p DOWNVLANACTION  
  
298 sendcmd 1 DB p GPONCFG  
#GPON注册信息  
  
299 sendcmd 1 DB p OMCIFLOW  
300 sendcmd 1 DB p OUTINPORTUPETHFLOW  
301 sendcmd 1 DB p PONALARM  
302 sendcmd 1 DB p RATECTR  
303 sendcmd 1 DB p TCIPORTUPETHFLOW  
304 sendcmd 1 DB p TCI2GEMFLOW  
305 sendcmd 1 DB p TCI2TCI  
306 sendcmd 1 DB p TCONT  
307 sendcmd 1 DB p TCONTQUEUE  
308 sendcmd 1 DB p UPETHFLOW  
309 sendcmd 1 DB p UPGEMFLOW  
310 sendcmd 1 DB p UPVLANACTION  
311 sendcmd 1 DB p VID2DOWNETHFLOW  
312 sendcmd 1 DB p VIDPORT2UPETHFLOW  
313 sendcmd 1 DB p DownVidTci2EthflowProduct  
314 sendcmd 1 DB p UpVidTci2EthflowProduct  
315 sendcmd 1 DB p DownEthClassMethodProduct  
316 sendcmd 1 DB p QOSCONFProduct  
317 sendcmd 1 DB p QOSProduct  
318 sendcmd 1 DB p ETHFLOWCLASSMETHODProduct  
319 sendcmd 1 DB p GEMPORT  
320 sendcmd 1 DB p VLANTOUPGEMPORTProduct  
321 sendcmd 1 DB p CatvOpticalPara  
  
  
每一条代码中的“p”代表print，显示的意思，改成“set”，加上用“p”打印出来的表格号、变量名等可以直接修改光猫的所有设置参数。  
  
例如：sendcmd 1 DB p MgtServer  
显示如下内容：  
  
<Tbl name="MgtServer" RowCount="1">  
        <Row No="0">  
                <DM name="URL" val="http://10.0.0.1"/>  
                <DM name="UserName" val="hgw"/>  
                <DM name="Password" val="hgw"/>  
                <DM name="PeriodicInformEnable" val="1"/>  
                <DM name="PeriodicInformInterval" val="43200"/>  
                <DM name="PeriodicInformTime" val="0001-01-01T00:00:00Z"/>  
                <DM name="ParameterKey" val=""/>  
                <DM name="ConnectionRequestURL" val="58000"/>  
                <DM name="ConnectionRequestUsername" val="itms"/>  
                <DM name="ConnectionRequestPassword" val="itms"/>  
                <DM name="UpgradesManaged" val="0"/>  
                <DM name="Event" val=""/>  
                <DM name="DefaultWan" val="IGD.WD1.WCD1.WCIP1"/>  
                <DM name="SessionRetryTimes" val="10:10:10:30:60:300:600:3600"/>  
                <DM name="SupportCertAuth" val="0"/>  
                <DM name="Tr069Enable" val="0"/>  
                <DM name="MWSURL" val="http://0.0.0.0:9090"/>  
                <DM name="InfoStat" val="0"/>  
                <DM name="InfoDescption" val="3"/>  
                <DM name="AcsStat" val="0"/>  
                <DM name="AcsDescption" val="0"/>  
        </Row>  
</Tbl>  
  
其中，行号“0”，变量名“Tr069Enable”，原来的值是1，可以改成0，关闭运营商远程操控你的光猫，命令如下：  
  
命令：sendcmd 1 DB set MgtServer 0 Tr069Enable 0  
  
解释：sendcmd 1 DB 设置 表格名 行号 变量名    值  
  
      sendcmd 1 DB set WLANCfg 1 11iEncryptType 2  
  
      sendcmd 1 DB set WLANCfg 1 ESSID IPTV  
  
      sendcmd 1 DB set FTPServerCfg 0 FtpEnable 1  
  
      sendcmd 1 DB set PortControl 0 PortValue 88  
  
      sendcmd 1 DB set UserIF 0 Timeout 300
```

### 贝尔光猫改sn，mac
```
ritool set MfrID HWTC #生产厂商代码HWTC代表华为，NBEL代表贝尔，ZTEG代表中兴等等

ritool set Mnemonic HG8010C #设备型号

ritool set YPSerialNum NBELFBC1423D #设备SN码

ritool set G984Serial 0BF58729 #设备SN码后8位

ritool set MACAddress 74:88:2A:0B:F5:87 #MAC地址

ritool set SSID-1Name CMCC-bM4K #2.4G无线名称

ritool set SSID-1Password m9Vx2d76 #2.4G无线密码

ritool set SSID-2Name CMCC-2aGR-5G #5G无线名称

ritool set SSID-2Password 4wi2s2yj #5G无线密码

ritool set UserPassword y6jcr #设备标签纸上的USER登录密码

ritool set HardwareVersion 3FE47339BAAA #硬件版本号

以上就是一些参数设置的参考

设置完成后需要输入以下命令进行恢复出厂一次

cfgcli –r

然后输入reboot让光猫重启，完成后在用浏览器进管理页面就发现相关参数已经按照自己的要求改变了。
```

## 步骤
1.  光猫背部user进入，

2.  电脑网口直连光猫网口1，不要经过路由器，同时用手机<流量>热点给电脑供网（手机USB线或热点）

3.  注意要先拔光纤，除网线外，都拔，再拿个针捅reset孔60秒，所有灯闪灭2次再松开，重启，全程拔光纤。

4.  捅后光猫后台输入

192.168.1.1

CMCCAdmin，aDm8H%MdA登录进去说明捅成功了，联系我下一步

192.168.1.1/cu.html

CUAdmin，CUAdmin登录进去说明捅成功了，联系我下一步

5.  光纤等我说插再插

## 案例
 
##### 云南曲靖移动ZXHN F673AV9a
user
yt626u64

INTERNET_R_VID_41
OTHER_B_VID_43
loid
0874QLFb093edd836

#### 河南濮阳华龙 联通F677V9
user
736ys37p

INTERNET_R_VID_22
loid
0252768652

039308262916
123456

解决：用2，1报账号密码不对

#### 河南郑州金水 联通F657V9
user
uh7bs3y4
可以了
INTERNET_R_VID_22
2277743815

037102600592
123456

#### 辽宁沈阳沈河 联通G7615

3_INTERNET_R_VID_17
loid
2041627315
syl_36408873
123456

|---|---|
|运营商|中国联通|
|设备型号|ZXHN G7615|
|智能系统|C容器|
|设备标识号|A0092E-01210BGBCF88B10AB70|
|批次号|07e6P1N804ce|
|硬件版本号|V1.3|
|软件版本号|V2.0.5P1T2|
|区域码信息|区域码配置正常，区域：辽宁|

解决：成功

#### 吉林松原移动GS2105
loid
15284401
INTERNET_R_VID_4031 
user
d5jhr

#### 河南南阳卧龙 联通G7615
bkxu4ct7
INTERNET_R_VID_22
0179174441

037703024589

#### 山东青岛联通G7615

053203252498
_INTERNET_R_VID_3425
2_IPTV_B_VID_1119
HS33637080
【telnet开不起】


#### 辽宁大连甘联通G7615
user
zzsebbx5

INTERNET_R_VID_10
TR069_R_VID_46
loid
2100359060
V2.0.5P1T3

dl01010839@163

lnadmin
admin1234
【成功】

## 网站
恩山：https://www.right.com.cn
宽带技术网：https://www.chinadsl.net/
csdn：

## 失败


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
http://192.168.2.1/romfile.cfg

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
192.168.1.1 输入密码进去看到自动拨号页面  然后在原页面上打开http://192.168.1.1/backupsettings.conf

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