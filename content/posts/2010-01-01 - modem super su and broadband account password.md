---
title: "光猫"
subtitle: ""
date: 2023-05-10T10:57:27+08:00

lastmod: 2023-08-13T10:57:27+08:00
draft: flase
description: "光猫"
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
DC18m%619
<!--more-->
## 通用账号密码
```账号
CMCCAdmin
```
1234qwer!@#$
```
aDm8H%MdA
```  
湖南移动超级账号 CMCCAdmin 超级密码:（光猫SN开头第三位开始取3位）+8m%（光猫SN结尾取3位）;
DCB8m%B0B
```
admin
```
3cnfp9u6CUAdmin
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

湖南移动：（光猫SN开头第三位开始取3位）+8m%（光猫SN结尾取3位）

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

浙江/内蒙/河北/浙江: cuadmin，cuadmin
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
方式如下， ^c1096e
1. 根据光猫背面的账号密码进行调试，
2. 超管规律，cuadmin+mac前6位小写或者标识码头部6位
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

### 中兴1.6

网卡地址
```
000729553557
```

联通
新版固件要改网卡
```
./6 -i 192.168.1.1 --port 80 --user CUAdmin --pass CUAdmin --new --telnet
```


电信
```
./6 -i 192.168.1.1 --new --telnet
```

```
ZteONU 0.0.6 (github.com/thank243/zteOnu) 
-----------------------------------
step [0] reset factory: ok
step [1] request factory mode: ok
step [2] send sq: Your request has bad syntax or is inherently impossible to satisfy. Attempt retrying..(1/10)
-----------------------------------
step [0] reset factory: ok
step [1] request factory mode: ok
step [2] send sq: ok
step [3] check login auth: ok
step [4] enter factory mode: ok
-----------------------------------
user: hkjWI6P8
pass: 80a77zy6


ZteONU 0.0.6 (github.com/thank243/zteOnu) 
-----------------------------------
step [0] reset factory: ok
step [1] request factory mode: ok
step [2] send sq: Your request has bad syntax or is inherently impossible to satisfy. Attempt retrying..(1/10)
-----------------------------------
step [0] reset factory: ok
step [1] request factory mode: ok
step [2] send sq: ok
step [3] check login auth: ok
step [4] enter factory mode: ok
-----------------------------------
user: root
pass: Zte521
```


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

### TEWA 1006E
TEWA 1006E
su:RwkkmxAw
TEWA 766G
su:bWVXTFDx

下载我之前发布的《天邑SU工具》在里面输入对应地区码切换地区，
也可以命令行下输入输入，如，切换湖北地区命令：
echo 0x2A00>/proc/nvram/LocationCode
改mac
echo xx xx xx xx xx xx>/proc/nvram/BaseMacAddr

回车，光猫重启，搞定

北京    0x0B00
天津    0x0C00
河北    0x0D00
山西    0x0E00
内蒙古  0x0F00
辽宁    0x1500
吉林    0x1600
黑龙江  0x1700
上海    0x1F00
江苏    0x2000
浙江    0x2100
安徽    0x2200
福建    0x2300
江西    0x2400
山东    0x2500
河南    0x2900
湖北    0x2A00
湖南    0x2B00
广东    0x2C00
广西    0x2D00
海南    0x2E00
重庆    0x3200
四川    0x3300
贵州    0x3400
云南    0x3500
西藏    0x3600
陕西    0x3D00
甘肃    0x3E00
青海    0x3F00
宁夏    0x4000
新疆    0x4100
福建旁边    0x4700
深圳旁边    0x5100
澳门    0x5200

获取超密步骤：  
1. U盘插入光猫，打开光猫登录页面  192.168.1.1:8080  用光猫后面的账号密码登录光猫  
2. 依次点开 管理→设备管理，在“设备管理”上单击右键选择检查
3. 点击右侧“Elements” 利用快捷键 Ctrl+F  打开搜索，输入：set3_sessionKey  ，得到途中序号3所指向的数值，并替换下方链接中修改恢复usb那里的token数值
```
http://192.168.1.1:8080/usbbackup.cmd?action=backupeble&set3_sessionKey=set3_sessionKey_768
```
4. 打开页面，保存到U盘。
5. U盘插入电脑，U盘里会有一个“e8_Config_Backup”文件夹，打开文件夹，同时打开软件RouterPassView,将文件夹里面的 .cfg 文件拖入软装RouterPassView中，在软件中利用快捷键 Ctrl+F 搜索：telecomadmin，得到telecomadmin后面带8位数字的值就是超级密码，如本教程得到的密码为telecomadmin56719830
6. 超管登录后，进入以下链接，打开telnet，ftp
```
192.168.1.1:8080/enableTelnet.html
```

### 移动TEWA 272G/270G

需要先知道loid，进超管，才能打开telnet
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```

### TEWA 708G

192.168.1.1:8080
useradmin

插入U盘。
点开设备，F12
源码：


构造命令
```
location.assign("/usbbackup.cmd?action=backupeble&set2_sessionKey=set2_sessionKey_304")
```

### 联通TEWA 1206e

```
http://192.168.1.1/backupsettings.html
```


### 联通TEWA 870G（河南）
```
http://192.168.1.1/backupsettings.conf
```


### 友华PT926G/E  PT921G

PT924G联通，提示成功但无法开启telnet。
换种方法用资料的部分。

#### PT952G联通

user登录后，点几次返回，再点管理员登录，直接进入，然后再开telnet。

#### 电信友华PT928E-NP

浏览器打开192.168.1.1:8080，输入光猫的用户名和密码登录  
  
登录后打开
```
192.168.1.1:8080/backupsettings.conf
```
下载光猫备份配置文件  
用记事本或其他文本编辑器打开下载的文件，搜索
```
<X_CT-COM_TeleComAccount>
```
这一行下面的一行就是超级密码


#### PT924g，927，928
记录loid，复位登记，

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
账号telecomadmin、admin、telecom
pt926G   admin，TeleCom_1234
pt926E    admin  user的密码被改过，就是改后的密码，
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
TeleCom_mac  后6位小写
```

```
TeleCom_0c2c36
```

查看配置文件和超密
```
cat /var/config/lastgood.xml | grep SUSER_PASSWORD
```

- 友华光猫的lastgood.xml  里的拨号密码是初始的，实时的在var/ppp/ppp.conf
```
cat /var/ppp/ppp.conf
```
电信PT928E
```
192.168.1.1:8080
```
浏览器打开，输入光猫的用户名和密码登录  
  
登录后打开
```
192.168.1.1:8080/backupsettings.conf
```

下载光猫备份配置文件  
用记事本或其他文本编辑器打开下载的文件，搜索
```
<X_CT-COM_TeleComAccount>
```


移动PT939G看超密，里面一般第一个
grep 关键字 -A 5  含后5行
grep 关键字 -B 5  含前5行

```
cat /var/romfile.cfg | grep web_passwd -A 5
```


电信打开备份页：  
前提要从入口http://192.168.1.1:8080 超管登录，或者user
```
http://192.168.1.1:8080/bd/saveconf.asp
```
backup保存配置文件，搜索telecomadmin账号，telnet管理员密码

#### 移动PT939G 3.0（电信界面）

两个版本，博通版和高通版。博通版电信界面，软件版本3.0，原有telnet开启不了。
恢复出厂设置后，输入
```
http://192.168.1.1/dumpmdmd.cmd
```
看到telnet关闭，有账号密码。

下载配置
```
http://192.168.1.1/backupsettings.html
```

在82行左右，device位置加入telnet开关
```
 <DeviceInfo>  
<FirstUseDate>2019-01-26T09:53:57+08:00</FirstUseDate> 
 <VendorConfigFileNumberOfEntries>0</VendorConfigFileNumberOfEntries>
     <X_CMCC_CustomiseName>SmartGateway</X_CMCC_CustomiseName>  
     
  <X_CMCC_ServiceManage>  
       <TelnetEnable>TRUE</TelnetEnable>  
  </X_CMCC_ServiceManage>

```
加入内容为
```
<X_CMCC_ServiceManage> 
 <TelnetEnable>TRUE</TelnetEnable>  
</X_CMCC_ServiceManage>
```

在上传配置，重启猫
```
http://192.168.1.1/updatesettings.html
```


改地区直接用，广东深圳直接注册，不需要观察sn
```
http://192.168.1.1/register_prov.html
```


#### 辽宁联通PT927G
需要先恢复出厂，设置，loid在注册页f12找。
然后打开这个开telnet
```
http://192.168.1.1/bd/vermod.asp
```

#### 福建联通PT928E
页面记逻辑id，恢复出厂设置，进配置页开启telnet，su密码为超密，注册会自动重启猫，配置文件里SUSER_PASSWORD加密。

需要先删除tr069，在配置文件里开启可编辑tr069，或者，在命令行改tr069代码。先修改找注册状态，下发数据状态为成功。再填好拨号账号密码，注册loid，30%即可拨上号。
```
http://192.168.1.1/bd/vermod.asp
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

##### 友华光猫命令行里修改tr069为可编辑
1. 输入 ，回车运行。
```
cp /home/httpd/web/net_eth_links.asp /var/
```
	- 我们准备修改这个文件，但这个文件放在一个只读的分区上，所以先把它复制一份到可以读写的地方。

2. 输入编辑这个文件。`vi` 是著名的非常难用的编辑器，因此我们一步步来：
```
vi /var/net_eth_links.asp
```

    1. 输入，然后回车，
```
/is_configurable
```
    也就是查找 `is_configurable` 这个字符串。光标应该会跳转到这个位置：

```javascript
        //If connection type is TR069 return false, else return true
        function is_configurable()
        {
          var lk = document.forms[0].lkname.value;
          var province= <%checkWrite("PROVINCE");%>;
          /* 中间略去一些 */
          return true;
        }
```

    2. 按上下键把光标定位到 `var lk` 一行，然后按两次 D 键。这样这一行就被删掉了。

    3. 不停按 D 键删除，删到 `return true;` 的上一行为止（`return true;` 这一行不要删），整个函数看起来就像这样：

```javascript
        //If connection type is TR069 return false, else return true
        function is_configurable()
        {
          return true;
        }
```

    4. 输入 `:wq` 回车，保存文件并退出编辑器。

3. 输入 ，回车运行。
```
mount --bind /var/net_eth_links.asp /home/httpd/web/net_eth_links.asp
```

    - 虽然我们没法修改原文件，但我们可以用新文件「取代」老文件的位置，让系统访问时自动走到新文件上。
    - 上面这一行就是干的这个事。

4. 用浏览器进入 8080 端口的光猫后台，此时 WAN 设置里的 TR069 连接已经可以编辑了。
    - 你可以选择删了它，或者把它的类型改成 Internet 或者 Other，或者把它也改桥接，都可以。
    - 这样光猫的 TR069 连接就失效了，连不上电信的管理后台了。

> https://lantian.pub/article/random-notes/youhua-pt926g-disable-tr069.lantian/


**资料**
修改mac，sn，注册状态，telnet，下发状态，tr069等配置页面，需要超管环境下
```
http://192.168.1.1/bd/vermod.asp
```
隐藏的功能
```
http://192.168.1.1/bd/hide.asp
```
下载上传配置文件
```
http://192.168.1.1/bd/saveconf.asp
```
开启临时telnet
```
http://192.168.1.1/bd/modify_hide.asp
```
升级固件
```
http://192.168.1.1/bd/upload_sc.asp
```
ADSL宽带上网账号密码填写
```
http://192.168.1.1/autorun/acccfg.asp
```
软硬件版本型号
```
http://192.168.1.1/bd/vendorversion.asp
```
显示当前系统信息
```
http://192.168.1.1/cgi-bin/cgic_systeminfo.cgi
```
无线配置
```
http://192.168.1.1/bd/mbssid.asp
```
永久telnet
```
http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```



### 烽火HG6201M
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
Fh@7E47AC
```
账号
```
telnetadmin
```
FH-nE7jA%5m
```
FH-nE7jA%5m + mac后6位大写
```

```
FH-nE7jA%5m9EE9C4
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
74&117&119&84&76&78&118&113&54&78&
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
        map.put("telecomadmin", "74&117&119&84&76&78&118&113&54&78&");
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

### HG6201T电信
开telnet
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1&key=ACCB366753C0
```
telnet账户密码root，
```
Fh@9EE9C4
```

输入命令，第二行就是超密
```
cat /flash/cfg/agentconf/factory.conf
```


### HG2543C1/HG2541C1电信

开启telnet  

telnet用户名 ：root   
密码是（默认无线网络密钥+默认终端配置密码）的组合
telnet密码：（每个光猫不一样）
```
cat /flash/cfg/agentconf/factory.conf
```
jqkcrba7jqkcrba7
takfpucybijxg

s3pudcwa5tcd3
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

### HG261GS/HG260/HG5143F
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

### 联通HG221G
telnet
admin
admin
进入后
```
> get telnetpwd   注册，输入命令获取超密
```


### 河南联通HG6201F
备份配置文件 
```
http://192.168.1.1/backupsettings.conf
```
还原配置文件
```
http://192.168.1.1/updatesettings.html
```

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
takfpucy
这时将显示你的光猫MAC。  
```
Fh@E96C2C
```
浏览器中录入  
移动
```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=90837E9DECB0
```
联通
```
http://192.168.1.1/telnet?enable=1&key=7CFCFD921CF0
```
电信
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1&key=98EDCA9EE9C4
```

```
root  或者  admin
```
Fh@2FCB00
```
Fh@9EE9C4
```
FH-nE7jA%5m9EE9C4
```
hg2x0
```
7qGmg9xBmw39
FH-nE7jA%5m9EE9C4
电信telnet账号可能root，admin
```
telecom
```
密码
```
nE7jA%5m
```
telecomadmin77910910
```
TeleCom_1234
```
CUAdmin
```
hg2x0
```
lnadmin72191117
输su再输Fh@

TeleCom_1234
第二部 获得超密  
打开CMD命令窗口录入：telnet 192.168.1.1  
链接成功后输入账号：admin 在北京天津这边用这个admin，其他地方如果不管用就试试  root  
录入密码为  Fh@644D90+你上面获得的MAC的后六位大写。  
```
Fh@EE9C4
```
命令行输入：
```
load_cli factory
```

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

### 广东HG6145A2

然后发现了[这个帖子](https://www.right.com.cn/FORUM/thread-8283798-1-1.html)  
用cfg_cmd get来读，加密的也能读到，直接cfg_cmd get试了一下，有这个命令，能用，然后就是找密码在哪里了  
直接进fhdata，cat usrconfig_conf一大堆东西，看得眼花  
把内容粘贴到记事本ctrl+f，搜password，发现好几个，config interface 'InternetGatewayDevice__DeviceInfo__X_CMCC_TeleComAccount__'这个看起来最像，先验证一下，cfg_cmd get InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Username  
提示get success!value=CMCCAdmin  
那就是你了，然后

开telnet后，查超密命令
```
cfg_cmd get InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Password
```

，get success!value=xxxx



### 锐捷H60G/H61G/H80G/T66

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
sidbg 1 DB set DevAuthInfo 0 User C
```

```
sidbg 1 DB set DevAuthInfo 1 Level 1
sidbg 1 DB save
```
C9iid%SC

吉比特CM115Z,CM113Z光猫破解超级权限教程
https://www.right.com.cn/forum/thread-2270800-1-1.html

### H3-1S/H3-2S/H3-2Sse/H3-2sa/H5-8/H5-9/GS8108/GM630/H2-2/H2-3e/T51G/UNG430Z/UNG300Z/UNG301Z
获取超级密码方法 https://www.right.com.cn/forum/thread-8266942-1-1.html


 1. 使用光猫背后的普通用户名登录进光猫，浏览器复制以下链接打开  
```
http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch
```
5jifg@f4@C1
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
find / -name 'backupsettings.conf'
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

```
aDm8H%MdA
```  

解密配置文件
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml
```

```
sendcmd 1 DB decry userconfig/cfg/db_user_cfg.xml
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

浅蓝或灰蓝色页面。
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

2.使用Telnet 连接光猫，账户和密码均为刚设置的(root账户,否则编辑文件显示只读文件)

输入以下命令
Telnet 192.168.1.1
输入Telnet账户密码登陆，登陆成功后
输入cd  /config/work
输入
```
grep aucTelnetPassword lastgood.xml  /config/work
```
然后复制粘贴保存一下aucTelnetPassword值
输入vim lastgood.xml
找到aucTeleAccountPassword(Win可以用PgUp,PgDn翻页)
找到后吧找到aucTeleAccountPassword的Value值(英文输入状态按i进入编辑)将值替换成aucTelnetPassword的值
(由于Value值太长显示不出全部,所以先把aucTeleAccountPassword的Value里面的内容删了然后复制aucTelnetPassword值,在cmd命令里右键一下张贴进去)
然后按Esc在按:wq回车
:wq退出后输入reboot重启一下,然后你就可以使用之前设置的TELNET密码访问了

telnet密码
```
a2#We4%Dc2
```



#### H2-3鲜蓝色界面和深蓝
user登录后，直接console输入
H2-3（2020-07）跟 H1s-3 $.PATH='/aoaform/'   H2-3  $.PATH='/'
```
TMP_PATH=$.PATH
$.PATH='/'
obj={}
obj.telenet_enabled = '1';
obj.user_name='root'
obj.user_password='admin'
        setAppDataurl('save','set_telenet_enabled',obj,function(data){      
                init_telnet_set();
        });
$.PATH=TMP_PATH
```
H2-3 因版本不同 开启也不一样 差别与 PATH
```
TMP_PATH=$.PATH
$.PATH='/boaform/'
obj={}
obj.telenet_enabled = '1';
obj.user_name='root'
obj.user_password='admin'
        setAppDataurl('save','set_telenet_enabled',obj,function(data){      
                init_telnet_set();
        });
$.PATH=TMP_PATH
```
H1s-3
```
TMP_PATH=$.PATH
$.PATH='/aoaform/'
obj={}
obj.telenet_enabled = '1';
obj.user_name='root'
obj.user_password='admin'
        setAppDataurl('save','set_telenet_enabled',obj,function(data){      
                init_telnet_set();
        });
$.PATH=TMP_PATH
```

![](https://s3.bmp.ovh/imgs/2023/12/26/1a21fb632d5f7a0d.png)
![](https://s3.bmp.ovh/imgs/2023/12/26/c23109aa2bc88f2b.png)

此版本无法复位和重置，用火狐浏览器开启telnet，
特定版本的火狐浏览器插件，HTTP Header Live。  
打开`HTTP Header Live`插件，在页面上随便点击一个页面，再次查看`HTTP Header Live`插件，捕捉到了`post`信息，选择一个post。  
post修改为：
```
http://192.168.1.1/boaform/set_telenet_enabled.cgi
```

```
mode_name=set_telenet_enablednonedata=0.3535281170047305&user_name=root&user_password=admin&telenet_enabled=1&default_flag=1
```

```
mode_name=set_telenet_enabled&nonedata=0.3535281170047305&user_name=root&user_password=admin&telenet_enabled=1&default_flag=1
```
![](https://s3.bmp.ovh/imgs/2023/07/31/7d5aa2cbd30a618d.png)

send，然后点击右下角的`send`确认，会返回一个成功的页面`[success]`，代表已经成功打开光猫的`telnet`，语句的意思是将光猫的telnet账号密码分别设置为`root`与`admin`
查看lastgood.xml，用vi把里面的超密TeleAccountPassword的值替换为UserAccountPassword，保存reboot
查看config目录的所有文件：命令为： ls -lR /config

https://www.5v13.com/mesh/26321.html

#### H2-3灰色页面，H2-3s蓝色页面在系统里恢复出厂，TEWA 272G

### 内蒙H2-2鲜蓝色，注册会重启关闭telnet
user进去隐藏恢复出厂设置，用下面开telnet
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```

```
CMCCAdmin
```

```
aDm8H%MdA
```
重新注册会重启猫，需要快速提交命令修改



### H3-2r ，H3-1r lite，H-PON01

需要超管进，打开
```
http://192.168.1.1/bd/hide.asp
```
一些隐藏的配置，开telnet
如果404，直接导出config.xml
```
http://192.168.1.1/bd/saveconf.asp
```
修改telnet enable为1，所有telnet项改为1，上传上去后，要再重启一下光猫才生效。telnet账户密码CMCCAdmin   
```
aDm8H%MdA
```  

注册后，telnet不会掉线，进config，查看config.xml里的超密。



https://www.right.com.cn/forum/thread-8285997-1-1.html

https://blog.csdn.net/qq_42294237/article/details/132025846


### 移动SK-D848，SK742，SK-M724

江苏企业宽带，一网通注册码a+账号后8位。

user页面开启telnet
4u2f42fpaDm8H%MdA
telnet
root
无线wifi密码+超密aDm8H%MdA，无wifi密码的直接就超密。

开启telnet。使用网上的几种方式都打不开。F12方法：使用user用户登录 ，点用户，按F12 ，将telnet display:none 改为1，是出现启用telnet 选项，但是钩了没用。  没用的话就得用CMCCAdmin超级用户登录，然后打开：
```
http://192.168.1.1/web/cmcc/gch/template_user.gch?nextpage=web/cmcc/gch/iot_advance_setting_t.gch
```
ahynm3mkaDm8H%MdA


### 贵州移动SK-D748/江苏移动ZN800
浅蓝色页面，地址带/cgi-bin/，开telnet，user不行的话，打开注册页，能看到注册码，然后恢复出厂。打开
```
http://192.168.1.1/cgi-bin/telnet.asp
```
打开，下载**romfile.cfg**，里面可以查telnet
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

```
admin
```
```
aDm8H%MdA
```
重新注册后进telnet，找到var/tmp/romfile.cfg，查看对应行和后面2行
```
cat var/tmp/romfile.cfg | grep 'CMCCAdmin' -A 2
```
或者
```
cat tmp/ctromfile.cfg | grep 'CMCCAdmin' -A 2
```
或者
```
cat var/romfile.cfg | grep 'CMCCAdmin' -A 2
```

### 江苏创维SK-D848，SK742

查password
```
192.168.1.1/ajax_user_register.gch
```
user页面开启telnet

telnet
root
无线wifi密码+超密ykh36cfgaDm8H%MdA

开启telnet。使用网上的几种方式都打不开。F12方法：使用user用户登录 ，点用户，按F12 ，将telnet display:none 改为1，是出现启用telnet 选项，但是钩了没用。  没用的话就得用CMCCAdmin超级用户登录，然后打开：
```
http://192.168.1.1/web/cmcc/gch/template_user.gch?nextpage=web/cmcc/gch/iot_advance_setting_t.gch
```


### 安徽移动skd745S（绿色界面）
江苏的方法不行
超管进去，安全，访问添加一个telent，然后即可，root
root
无线wifi密码+超密ykh36cfgaDm8H%MdA

34551308254460000000
41
76482230
### 江苏SK-M424-ZQ融合企业网关
sn自动认证，user进去后台复位，
超管进去，安全，访问添加一个telent，然后即可，root
root
无线wifi密码+超密ykh36cfgaDm8H%MdA

### 移动CM112   GS3101  GS2107（GS3202不同）GS8101用中兴工具

**测试：**
http://192.168.1.1/cgi-bin/tmp/ctromfile.cfg  

ZDdWY@C1
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

### 内蒙古移动ZN-M142G，M180（先绿色）
user登录，直接打开telnet
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
默认的账户密码登录


### H10g-32ac企业网关（江苏、内蒙移动）S-Box8L94，telnet默认开！
sn认证
捅复位后，重新注册，密码保持不变，删除tr069
S-Box8L94，F12查看loid，需在网页里重置，复位键没用。

贵州企业宽带H10g-32ac不会自动下发数据，telnet默认开的
telnet 192.168.1.1
用户名admin密码

H51e   用上面
telnet：CMCCAdmin，密码
```
UM@Pon521
```


```
chzhdpl@246
```

```
sidbg 1 DB printall 1
```

```
sidbg 1 DB p DevAuthinfo
```
su
```
aDm8H%MdA
```

解密配置文件
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml
```

查看解密后的文件
```
vi /tmp/debug-decry-cfg
```
按n跳转下一个匹配的内容

### 移动SU6100
锐捷猫，江苏
user进去，开telnet，账号密码同锐捷，su：aDm8H%MdA
只有user账号，没有超管，界面功能有限。


### 上海移动HG550G企宽

标密aDm8H%MdA

界面同TEWE 272g，蓝色，菜单底部，移动企宽蓝色页面可参考此种模式。有的需要用超管进去。
配置文件下载
```
http://192.168.1.1/bd/hide.asp
```

![](https://s3.bmp.ovh/imgs/2023/12/02/ff5e99cdc39a2d67.png)

https://blog.csdn.net/qq_42294237/article/details/132025846

### 贝尔移动G-140-MD

Password：（移动的光认证密码，对应电信联通的loid）  
INTERNET__VID_（上网的VLAN ID号）  
VOICE__VID_（语音鉴权配置和密码）  
Other__VID_（IPTV参数）  
（由于楼主没办理iptv和固话，所以我这里是空的，这两个参数请自行百度需要备份的内容）  
你的宽带账号  
你的宽带密码

**法一：直接查**
```
http://192.168.1.1/dumpdatamodel.cgi
```
telnet密码搜supassword
```
<CLIPrompt ml="256" rw="RW" t="string" v="\\\\$"></CLIPrompt>
 
<SuPassword ml="64" rw="RW" t="string" v="FyoWiA9ebVq8Wcr5t1T+Zg==" ealgo="ab"></SuPassword>
``` 

查找cmccadmin，supassword（telnet的root密码）解密。
解密，用python文件，nokia-router-cfg-tool.py文件夹下命令行运行语句，-d后面是加密的内容。
```
python nokia-router-cfg-tool.py -d JOJRRY9meEECkC1KP/Qsjg==
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
AWYqE5qKJxxV
JVGYsGxK2UaW
```
G-140W-MD
```
gp5mSww4zrzh
```
bnyparhbCUAdmin

```
ritool set Custom AH  这是切换电信界面  
ritool set Custom CM  这是切换移动界面 
cfgcli -r  恢复出厂设置，再reboot重启生效。
```
升级固件地址
```
http://192.168.1.1/upgrade.cgi
```
修改sn，mac
```
ritool set YPSerialNum HWTCBA89D089  
ritool set MACAddress HW:TC:BA:89:D0:89
cfgcli -r
reboot  

修改无线名称SSID  
ritool set SSID-1Name niyaodemingzi
cfgcli -r
reboot
```
设备注册提示：1是关闭，0是开启
```
cfgcli -s InternetGatewayDevice.X_CT-COM_UserInfo.Status 0  
cfgcli -s InternetGatewayDevice.X_CT-COM_UserInfo.Result 1  
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

### 贝尔联通G-140W-UG

user里直接恢复出厂设置
开启telnet和cgi页

telnet密码是user密码，重新注册后超密不变（辽宁）

### 江苏福建联通创维SK-D848，SK-D742

绿色登录页
user页面开启telnet

telnet
账号
root
无线wifi密码+超密aDm8H%MdA
su
aDm8H%MdA
或超密

### 河南移动驻马店dt720-csf
192.168.1.1/ajax_user_registe.gch
6016356310201030000IGDSUCCSUCC-1312374208
4031
17657919835
绿色登录页
user页面开启telnet

telnet
账号
root
aDm8H%MdA

### 内蒙古联通创维SKd745【无telnet按扭】

恢复出厂，设置里，开启ftp，useradmin，useradmin
注册，从ftp进去，下载配置文件解密。



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
bnyparhbCUAdmin
```
 
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml
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

### 辽宁联通dt741-csf
打开，里面有loid
```
http://192.168.1.1/hidden_version_switch.html
```
切换版本，恢复出厂设置。
telnet账号root，密码是user密码+超密lnadmin，恢复出厂设置，重新注册后，原来telnet也保持在线，退出后，telnet密码变为新的。

### 天津山东联通DT541、DT541-csf 
打开，里面有loid
```
http://192.168.18.1/hidden_version_switch.html
```
切换版本，恢复出厂设置。
telnet账号root，密码是user密码+超密CUAdmin，恢复出厂设置，重新注册后，原来telnet也保持在线，退出后，telnet密码变为新的。

### 安徽电信创维DT720-cs【注册下发】
开telnet
```
http://192.168.1.1:8080/hidden_version_switch.html
```

telnet账密都是telnetadmin
```
telnetadmin
```
其他用sidbg命令，su密码不是默认超密


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

### GM630，GM232，GM219S
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

GM219S，telnet为
用户名 root，密码 Pon521


### 北京移动SK-D746，SK740S，联通UNG310H
普通账户登录后，输下面，下载romfile.cfg文件，搜索admin  
```
http://192.168.1.1/cgi-bin/upgrade.asp
```

```
http://192.168.1.1/romfile.cfg
```


### TEWA 800G 830G

备份配置文件 
```
http://192.168.1.1/backupsettings.conf
```
还原配置文件
```
http://192.168.1.1/updatesettings.html
```


### 电信TEWA 1102E
用魔尊的计算su开启telnet
登录后su进去
再输入exit退出Busybox，命令提示符变成>，
telecomadmin get
CUAdmin get

### 电信ZN600
https://www.right.com.cn/forum/thread-4146855-1-1.html

ZN601
先通过192.168.1.1:8080登录后台
然后把 content 改成 telnet 再回车
用户名 admin  
密码 1234
有的光猫的telnet账户名不是admin而是useradmin密码同1234  


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


### 电信瑞斯达康AC-8

此系列的，基本配置，接口，pon，记好loid，和对应各网络连接，有的静态ip，需要记好。

然后拔光纤捅复位，标密进去，系统管理，新建一个超管，密码要足够复杂!QAZ2wsx#EDC，插回光纤，注册即可。


### 联通瑞斯达康MSG2100E-UPON-4V

管理员192.168.1.1/cu.php   
CUAdmin   
CUAdmin   

防火墙关掉，开telnet，新建一个管理员账号，用它账号密码进telnet

telnet或ttl连上  输入enable  testnode 密码rcios.test，再接着输入bn ct01  回车后输入end 再回车输入reboot 按y确认，切换公版。


这货的uboot密码也很奇葩就在uboot下按ctrl+u键提示输入密码:uboot!

### 联通KD-YUN-811G

user登录后下载，搜索cuadmin，河南。
```
http://192.168.1.1/backupsettings.conf
```

### 华为光猫河南联通HS8346V5，HS8346R5，上海移动 华为HS8546V5 山东联通HS8346X6
> https://www.right.com.cn/forum/thread-4092011-1-1.html
> https://www.xxshell.com/3387.html

**备份：**  
通过光猫背面user用户登录，记录光猫原有的 INTERNET的VLAN、LOID、MAC地址、宽带账号密码。

- 拔光纤，重置，CUAdmin进入，导出配置文件，解密，修改telnet，user提权，超密变化参数设0。注册，导入文件。

1. 拔掉光猫的光纤，并重启光猫

2. 使用工具开启光联通猫Telnet功能

电脑直接连接光猫，使用"ONT组播配置工具V3-V5_2.0.exe"选择V5版本，然后点击启动，启动后会配置光猫右侧状态栏显示success，然后光猫LED灯会全亮，然后**手动断电重启光猫**。

![](https://www.xxshell.com/wp-content/uploads/2021/05/1-1.jpg?v=1663209753)

3. 获取光猫超级用户密码，华为光猫

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
cp /mnt/jffs2/hw_ctree.xml /mnt/jffs2/myhwcfg.xml.gz
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


```
http://192.168.1.1/bridge_route.gch
```

```

```

换猫后注册不上，弹出强制注册的解决方式，超管登录后导出配置文件hw_tree.xml，修改下面：

改rms，扰乱端口和密码，
```
<X_HW_UserInfo UserName="$24Y`P;n_0(49&lt;s-%sZXu1&amp;du3#4IP=&amp;QOJZKLOSiE$" 【这是loid，在网页上先填写后保存】UserId="" Status="0【这里99改为0】" Limit="10" Times="0" Result="1【这里99改为1】" ForceSupport="1【这里99改为1】" X_HW_InformStatus="0" X_HW_AcsCnnctSatus="0"/>
```
禁用tr069 wan使能，WANIPConnectionInstance
```xml
<WANIPConnectionInstance InstanceID="1" Enable="1"【这里改为0，关闭使能】 Reset="0" PossibleConnectionTypes="" ConnectionType="IP_Routed" Name="" LastConnectionError="ERROR_NONE" AutoDisconnectTime="0" IdleDisconnectTime="0" WarnDisconnectDelay="0" RSIPAvailable="0" NATEnabled="1" AddressingType="DHCP" DNSEnabled="1" DNSOverrideAllowed="0" DNSServers="" MaxMTUSize="1500" MACAddressOverride="0" ConnectionTrigger="" RouteProtocolRx="" ShapingRate="0" ShapingBurstSize="0" PortMappingNumberOfEntries="0" PortTriggerNumberOfEntries="0" X_HW_SERVICELIST="TR069" X_HW_VLAN="46" X_HW_PRI="0" X_HW_MultiCastVLAN="4294967295" X_HW_VenderClassID="" X_HW_E8C_LanInterface="" X_HW_TR069FLAG="0" X_HW_IPv4Enable="1" X_HW_IPv6Enable="0" X_HW_IPv6MultiCastVLAN="-1" X_HW_MacId="1">
<X_HW_6RDTunnel Enable="0" RdMode="Dynamic" RdPrefix="" RdPrefixLen="40" RdBRIPv4Address="" RdIPv4MaskLen="10"/>
</WANIPConnectionInstance>
```


### 华为万兆猫HN8145X6使能+补全AllShell+修改SN+E改XG+切换华为界面
```

第0部分 准备工作  
1、查询老光猫上的 LOID (电信、联通)、Password(移动)。  
1.1 用光猫默认账号密码(详见光猫底部铭牌)访问光猫；  
状态-状态总览：宽带识别码（LOID）:  
网络-远程管理-宽带识别码（LOID）认证-宽带识别码（LOID）:  
2、记录老光猫的互联网、IPTV的默认配置数据，截图存档(建议项，一般情况下非必需)；  
2.1 使用超级管理员账号和密码(建议自行上网搜索获取方法或咨询运维师傅获取)，登陆管理页面；  
2.2 网络-网络设置；连接名称选中后可切换 TR069(光猫运营商远程控制配置)、INTERNET_R(光猫路由模式配置)、INTERNET_B(光猫桥接模式配置)、OTHER_B(光猫IPTV配置)。分别截图留存；  
4、电脑安装好 Notepad++ 或 Visual Studio Code 等第三方记事本软件。  
  
  
  
第一部分 检查光模信号  
1、光猫连接光纤，LAN1连接电脑，接通光猫电源并按开机键开机；  
   注：也可以在光猫通电后，电脑连接光猫的 SSID ，默认 SSID 和密码详见光猫底部铭牌。  
  
2、使用超级管理员或默认账号和密码登陆；  
超级管理员账号：telecomadmin  
超级管理员密码：nE7jA%5m  
  
3、状态-状态-状态总览-PON信息。如果“连接状态: ”是未连接，表示当前光猫的工作模式与线路不符，需要更改光猫光模的工作模式，教程后附。  
   例如 HN8145X6 默认工作在 10G EPON 模式，而线路可能是 GPON 或 XGPON 模式；或者 HN8145X6 已经改成 XGPON 模式，但是线路只支持 GPON 模式；  
  
  
  
第二部分 使能 Telnet 和补全 AllShell  
1、光猫拔除光纤，LAN1 连接电脑，接通光猫电源并按开机键开机；  
   注：也可以在光猫通电后，电脑连接光猫的 SSID ，默认 SSID 和密码详见光猫底部铭牌。  
  
2、打开 ONT.exe ，刷入补丁  
2.1 选中“升级”；  
2.2 网卡选择当前连接光猫的网卡，IP地址为 192.168.1.x。本文以 192.168.1.2 为例；  
2.3 ONT版本包，浏览选中文件 echo20_Telnet_Shell.bin；  
注： echo20_Telnet_Shell.bin 是补全并使能 Telnet、打开 Telnet 所需的端口 23 、补全 AllShell 一体补丁。感谢网友 anjing8800 提供。  
2.4 点击“启动”，发送进度条绿色光条出现。光猫所有灯全亮、全闪烁数次、全灭，使能Telnet 和 AllShell 补全即完成；  
注：① 如果光猫指示灯没有上述反应，表示数据发送异常。这时重新按光猫电源开关，重新给猫通电，待光纤指示灯红灯亮起后，一般就会出现光猫所有灯全亮、全闪烁数次、全灭；  
    ② 如果光猫仍旧没有上述反应，建议更换电脑或连接方式(有线连接改无线连接、无线连接改有线连接)重试；  
    ③ AllShell 补充完成后，光猫处于全部灯长亮且没有任何反应的状态。需要重按开关键启动光猫。  
  
补充说明：使能 Telnet 和补全 AllShell 的教程，可以部分参考以下视频：  
[https://www.bilibili.com/video/BV1N54y1h7vt/](https://www.bilibili.com/video/BV1N54y1h7vt/)  
另，视频中的恢复华为界面，除非你是联通或移动用户，又或者遇到非要使用原华为界面的情况，否则千万不要轻易尝试！！！！  
非要使用华为界面的情况包括：1、光猫 LOID 注册后，部分地区限制了默认配置的删改，主要表现为一旦删改配置并保存/应用后就退出管理界面；2、当地管理界面屏蔽了太多功能导致自定义功能较少。  
  
  
  
第三部分 设备注册  
1、返回光猫登陆页面，点击“设备注册”，如果是电信宽带，则将老猫中查询到的逻辑 ID 填入后，点击注册；待 OLT 认证和 ITMS 配置下发完成后，光猫的运营商认证即已完成；  
注：如果是联通、移动宽带，需要修改光猫的界面，将电信界面切换成华为界面后再进行注册和手动网络连接、IPTV配置等。无损切换华为界面的教程后附；  
    有些地区运营商除了验证 LOID 和 Password，还会验证光猫的设备标识号、主 LAN 口的 MAC 地址、 SN 码等。  
    因此，如果 LOID 、Password 填写后无法完成设备注册，则可能需要修改以上内容中的一项或多项。相关教程后附；  
  
第四部分 光模工作模式、MAC 地址、设备识别码、SN 码的修改  
0、确保电脑的 Telnet 功能已开启。详见 Windows操作系统-控制面板-程序和功能-启用或关闭 Windows 功能，勾选 Telnet 客户端；  
  
1、光猫连接光纤，LAN1 连接电脑，接通光猫电源并按开机键开机；  
   注：也可以在光猫通电后，电脑连接光猫的 SSID ，默认 SSID 和密码详见光猫底部铭牌。  
  
2、打开 Tftpd32 文件夹中的 tftpd32.exe ；服务器地址选中电脑本机网卡的 IP 地址。如果默认 IP 地址不对，则下拉右侧的下三角选中正确的 IP 地址。IP地址为 192.168.1.x，本文以 192.168.1.2 为例；  
  
3、Windows 8 及以上系统，使用 PoweShell 或 CMD (Windows 7及以下系统使用 CMD )按步骤运行以下命令：  
telnet 192.168.1.1  
Login:root  
Password:adminHW  
su  
shell  
cd /mnt/jffs2  
ls  
罗列 /mnt/jffs2 路径下各种配置文件；  
如果提示 COMMEND NOT EXIT，则表示 AllShell 未能补全。请返回上文补全后重试；  
  
4 备份原版 hw_boardinfo 和 hw_boardinfo.bak 文件(非常重要)  
tftp -p -l hw_boardinfo -r hw_boardinfo 192.168.1.2  
tftp -p -l hw_boardinfo.bak -r hw_boardinfo.bak 192.168.1.2  
hw_boardinfo 和 hw_boardinfo.bak 会出现在你的 Tftpd32 文件夹中。复制一份到别的路径悉心保存好。  
  
5 解密 hw_boardinfo 文件并另存为 hw_boardinfo_bak；解密 hw_boardinfo.bak 文件并另存为 hw_boardinfo.bak_bak  
decrypt_boardinfo -s /mnt/jffs2/hw_boardinfo -d /mnt/jffs2/hw_boardinfo_bak1  
decrypt_boardinfo -s /mnt/jffs2/hw_boardinfo.bak -d /mnt/jffs2/hw_boardinfo.bak_bak  
  
6、将 hw_boardinfo_bak 和 hw_boardinfo.bak_bak 通过 tftpd32.exe 上传到 tftpd32 文件夹根目录  
tftp -p -l hw_boardinfo_bak -r hw_boardinfo_bak 192.168.1.2  
tftp -p -l hw_boardinfo.bak_bak -r hw_boardinfo.bak_bak 192.168.1.2  
hw_boardinfo_bak 和 hw_boardinfo.bak_bak 会出现在你的 Tftpd32 文件夹中。复制一份到别的路径悉心保存好。  
  
7、电脑上用 Notepad++ 或 Visual Studio Code 打开修改 hw_boardinfo_bak 文件：  
7.1 把 10G EPON 改成 XGPON，修改参数  
obj.id = "0x00000001" ; obj.value = "5";  
obj.id = "0x0000001d" ; obj.value = "5";  
obj.id = "0x00000059" ; obj.value = "5";  
  
7.1 还原 10G EPON，修改参数  
obj.id = "0x00000001" ; obj.value = "6";  
obj.id = "0x0000001d" ; obj.value = "3";  
obj.id = "0x00000059" ; obj.value = "6";  
  
7.2 将光猫主 LAN 口的 MAC 地址改成老光猫的 MAC 地址(部分地区需要，如果设备注册无障碍，则跳过)：  
注：改完后尝试注册设备成功的话，跳过 设备标识号和 SN 码的修改  
obj.id = "0x0000000a" ; obj.value = "5C:XX:57:7B:5A:74";  
obj.id = "0x00000025" ; obj.value = "5C:XX:57:7B:5A:74";  
  
7.3 将光猫设备标识号改成老光猫的设备标识号(少数地区需要，以设备标识号 5C9157-43XXXXC91577B5A74 为例，其前 6 位字符串其实是主 LAN 口 MAC 地址的前 6 位，因此需要 MAC 一并修改才能完成全部设备识别码的修改)：  
注：改完后尝试注册设备成功的话，跳过 SN 码的修改  
obj.id = "0x00000019" ; obj.value = "43XX05C91577B5A74";  
  
7.4、将光猫 SN 码改成老光猫的 SN 码 (极少数地区需要)：  
obj.id = "0x00000002" ; obj.value = "48XX5443CE88DDA6";  
  
8、将电信界面切换至华为界面(无损、可逆)，使联通、移动宽带可以手动配置使用光猫：  
8.1 切换成华为界面  
obj.id = "0x0000001a" ; obj.value = "COMMON";  
obj.id = "0x0000001b" ; obj.value = "COMMON";  
obj.id = "0x00000031" ; obj.value = "NOCHOOSE";  
  
8.2 切换回电信界面  
obj.id = "0x0000001a" ; obj.value = "E8C";  
obj.id = "0x0000001b" ; obj.value = "AHCT";  
obj.id = "0x00000031" ; obj.value = "CHOOSE_XINAN";  
其中，AHCT 为安徽电信地区代码。其他地区代码请自行搜索。  
  
9、修改完成并保存后，用 HW Dollar2.exe 软件打开 hw_boardinfo_bak 文件，选择 “V5” 再点击“计算”，形成加密文档后，保存为 hw_boardinfo 文件；  
  
10、使用 tftpd32.exe 将刚才修改后的 hw_boardinfo 文件上传到光猫；  
tftp -g -l hw_boardinfo -r hw_boardinfo 192.168.1.2  
cd /mnt/jffs2   
11、重启光猫。  
reboot  
  
tftp -g -l hw_ctree.xml -r hw_ctree.xml 192.168.1.2
  
第六部分 超级管理员密码的读取、修改；添加超级管理员账号  
1 超级密码的读取(适用于超级管理员账号密码被运营商 TR069 配置远程篡改的情况)  
1.1 超级管理员账号和密码在 hw_ctree.xml 文件里。将其通过 tftpd32.exe 上传到 Tftpd32 文件夹根目录；  
tftp -p -l hw_ctree.xml -r hw_ctree.xml 192.168.1.2  
  
1.2、用 华为配置加解密工具 1.0 正式版.exe XML 解密 hw_ctree.xml 文件后，用 Notepad++ 或 Visual Studio Code 打开并修改文件；  
  
1.3、搜索超级管理员账号关键词 telecomadmin ，定位到 Password 得到一串乱码，这是超级管理员密码的加密形态。例如：  
UserName="telecomadmin" Password="$2$2DA.CXxv'Im"qVMN",0>)]1T[iyQS66@Q82,eR=$"  
  
1.4、将加密字符串完整复制到 华为配置加解密工具 1.0 的 密文解密对话框中，点击 $2 解密，密码就破译出来了。  
  
2、超级密码的修改。有时候，Password="" 双引号中的字符串可能经过特殊加密，使之破译出来的密码仍旧是乱码。这时，你可以修改 Password="你的密码" 并保存；  
  
3、超级管理员账号的添加。  
<X_HW_WebUserInfo NumberOfInstances="3"> 此处表示账号数量，与下方账号配置的行数相同。默认是 2，改成 3。  
<X_HW_WebUserInfoInstance InstanceID="1" ModifyPasswordFlag="0" UserName="useradmin" Password="$2_kDt2%`N30Cp]L/+E__RH%3;,r~<FG{>BnTL(RVF$" UserLevel="1" Enable="1" Alias="cpe-1" PassMode="0"/>  
<X_HW_WebUserInfoInstance InstanceID="2" ModifyPasswordFlag="0" UserName="telecomadmin" Password="$2$2DA.CXxv'Im"qVMN",0>)]1T[iyQS66@Q82,eR=$" UserLevel="0" Enable="1" Alias="cpe-2" PassMode="0"/>  
<X_HW_WebUserInfoInstance InstanceID="3" ModifyPasswordFlag="0" UserName="新账号" Password="密码" UserLevel="0" Enable="1" Alias="cpe-3" PassMode="0"/> 新添加行  
  
4、华为配置加解密工具 1.0 正式版.exe XML 加密 hw_ctree.xml 后，用 tftpd32.exe 上传到光猫；  
tftp -g -l hw_ctree.xml -r hw_ctree.xml 192.168.1.2  
  
5、重启光猫后，配置生效。  
reboot  
  
  
  
第七部分 设备注册卡在 40% ITMS 下发的解决办法  
如果 MAC 地址、设备标识号、SN 码均修改后仍旧无法通过设备注册，卡在 40% ITMS 下发，修改 hw_ctree.xml 文件  
定位至  
<X_HW_UserInfo UserName="LOID 的加密字符串" UserId="" Status="99" Limit="5" Times="0" Result="99" X_HW_InformStatus="0" X_HW_AcsCnnctSatus="0" ForceSupport="1" SameWithPonInfo="1" X_HW_RegisterMode="1" />  
整行改成  
<X_HW_UserInfo UserName="" UserId="" Status="0" Limit="10" Times="0" Result="1" X_HW_InformStatus="0" X_HW_AcsCnnctSatus="0" ForceSupport="1" SameWithPonInfo="1" X_HW_RegisterMode="1" />  
加密 hw_ctree.xml 文件并上传至光猫，重启光猫后生效。  
  
  
第八部分 部分地区 SSID 的前缀 ChinaNet 限制修改的解决办法  
1、同第六部分修改 hw_ctree.xml 文件，搜索 ChinaNet ，找到 SSID 名称修改后保存，加密文档，上传配置，重启光猫后生效；  
  
  
第九部分 恢复有损转华为界面后，还原为原始的电信定制版界面  
1 解压 HN8145X6_E8C_jffs2 压缩包  
  
  
2、修改 customizepara.txt 文件  
2.1 将 customizepara.txt 修改扩展名为 customizepara.xml ，并用 华为配置加解密工具 1.0 XML 解密该文件；  
2.2 328505C91577B7724 改成你的设备识别码的 - 以后的 17 位字符串；  
2.3 sq45f 改成你的设备 useradmin 的密码；  
2.4 ChinaNet-euuK 改成你的设备默认 SSID 名称；  
2.5 wga99xg9 改成你的设备默认 SSID 的密码；  
注：以上信息在光猫底部的铭牌上均有记载。  
2.6 用 华为配置加解密工具 1.0 XML 加密该文件，并修改扩展名为 customizepara.txt；  
2.7 将文件上传至光猫的 /mnt/jffs2 对应路径。  
  
3、将文件上传至光猫的 /mnt/jffs2 对应路径  
cd /mnt/jffs2  
tftp -g -l choose_xml.tar.gz -r choose_xml.tar.gz 192.168.1.2  
tftp -g -l customize.txt -r customize.txt 192.168.1.2  
tftp -g -l customizepara.txt -r customizepara.txt 192.168.1.2  
  
  
cd /mnt/jffs2/customize  
tftp -g -l CHOOSE_XINAN.xml -r CHOOSE_XINAN.xml 192.168.1.2  
tftp -g -l choose_config.xml -r choose_config.xml 192.168.1.2  
tftp -g -l choose_result.xml -r choose_result.xml 192.168.1.2  
-- 以广东原始配置文件为例  
tftp -g -l hw_default_gdct.xml -r hw_default_gdct.xml 192.168.1.2  
tftp -g -l hw_default_gdct.xml.crc -r hw_default_gdct.xml.crc 192.168.1.2  
tftp -g -l hw_default_gdgct.xml -r hw_default_gdgct.xml 192.168.1.2  
tftp -g -l hw_default_gdgct.xml.crc -r hw_default_gdgct.xml.crc 192.168.1.2  
  
  
cd /mnt/jffs2/choose  
tftp -g -l CHOOSE.xml -r CHOOSE.xml 192.168.1.2  
tftp -g -l choose_config.xml -r choose_config.xml 192.168.1.2  
tftp -g -l files -r files 192.168.1.2  
  
2 上传完成后，按照第四部分 8.2 设置本地电信界面代码；  
  
3 重启光猫，超级访问光猫，再恢复出厂设置一次。即可恢复对应地区的完整电信界面。  
  
各地区GPON、EPON工作模式下的电信定制界面代码  
  
各电信定制界面代码兼容的最低固件版本号  
  
各电信定制界面代码对应的配置文件  
  
  
  
第十部分 其他修改  
1、华为光猫修改 SSID 地区的方法：hw_ctree.xml 和 hw_default_ctree.xml 中，搜索 RegulatoryDomain，将 CN 改成其他国家或地区代码，例如  
CN：中国  
AU：澳大利亚  
US：美利坚合众国  
其中，澳大利亚 AU 的理论信号最强。  
  
2、为光猫修改 SSID 最大连接设备数目 的方法：hw_ctree.xml 和 hw_default_ctree.xml 中，搜索 X_HW_AssociateNum，将数字改成 64  
X_HW_AssociateNum="64"  
  
3、为光猫修改 连接数 的方法：hw_ctree.xml 和 hw_default_ctree.xml 中，搜索 TotalTerminalNumber，将数字改成 0  
<X_HW_AccessLimit Mode="GlobalLimit" TotalTerminalNumber="16"/>  
改成  
<X_HW_AccessLimit Mode="Off" TotalTerminalNumber="0"/>

https://www.chinadsl.net/forum.php?mod=viewthread&tid=170109

```

### 中兴F412/F460/F612/F660/F623等23端口被关闭处理方法：  
中兴下面是解决23端口被关闭的方法。
1，开个dos窗口一直ping，用如下命令  
```
ping 192.168.1.1 -l 128 -t
```  

2，   再开一个dos窗口  
    输入：
```
telnet 192.168.1.1 10128  
```
  
    账号：root  
    密码：Zte521  

3，输入  
```
sendcmd 1 DB p DevAuthInfo
```
  获取管理员密码 用于网页登录


### 中兴系列G7615
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

```
sidbg 1 DB set TelnetCfg 0 TSLan_UName root  
sidbg 1 DB set TelnetCfg 0 TS_UPwd 123Qwe
```


```
sidbg 1 DB set TelnetUser 0 Username 123Qwe
sidbg 1 DB set TelnetUser 0 Password 123Qwe
sidbg 1 DB set DevAuthInfo 0 Pass cuadmin1234
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
   
```
ebtfee4gaDm8H%MdA
```

```
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save   
```

```
sidbg 1 DB delr WANC 0
```

   注册50%不能上网，telnet改注册为成功
   
```
sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
sendcmd 1 DB set PDTCTUSERINFO 0 Result 1  
sendcmd 1 DB save
sendcmd 1 DB reboot
```
删除TR069，禁用RMS服务器使能  
```
sendcmd 1 DB delr WANC 0
```

```
sidbg 1 DB delr WANC 0
```

查询TR069在第几个（0 1 2 3 4等）  
```
sendcmd 1 DB p WANC
```
0代表前面查询TR069在0这一项里面，如果查询是3，那就0改为3 
```
sendcmd 1 DB delr WANC 0
```
RMS服务器不启用周期上报
```
sendcmd 1 DB set MgtServer 0 PeriodicInformEnable 0 
sendcmd 1 DB set MgtServer 0 Tr069Enable 0

```

```
sendcmd 1 DB set WANC 1 WANCType 0
```

### 联通华为HN8145XR
记下loid，重置，登录CUAdmin，断开光猫，管理，配置文件，导出hw_ctree.xml，用华为解密工具解密，编辑，修改CUAdmin


### 河南联通F657GV9改桥接

改桥接，先记录Loid，直接断光纤，重置，进超管CUAdmin，改好桥接后，注册即可。


###  上海电信F450G
#### V1.0版本
useradmin登录后，直接在该页面地址（不需删除内容）后添加
```
/dumpmdmd.conf
```
下载文件，后搜索，password
字母加数字的部分即是：Ncqrvlcr36
Password&gt;Ncqrvlcr36&lt;/Password&gt;
#J@b8S?%&lt
#### V2.0.0P1T1sh，T后面是1不是2就可以用下面的方法，2的话已禁用该法！
据说捅复位，不会清除loid，不过最好在useradmin里记一下。
不插光纤，捅复位后，默认开telnet。
root
Zte521

捅了无效，拔了光纤浏览器输入
```
http://192.168.1.1/return2factory.html
```
复位后默认开启telnet，
root
Zte521

3、以下命令都要在输入后，都要使用以下命令保存配置  
```
sendcmd 1 DB save  
sendcmd 1 DB reboot
```

4、    插上光纤后不自动关闭telnet
```
sendcmd 1 DB set TelnetCfg 0 Lan_EnableAfterOlt 1
sendcmd 1 DB save  
sendcmd 1 DB reboot
```
5、     最多能够登录5个用户，避免被锁死
```
sendcmd 1 DB set TelnetCfg 0 Max_Con_Num 5
sendcmd 1 DB save  
sendcmd 1 DB reboot
```

6、破解打开网页自动跳转LOID注册页面  
```
sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
sendcmd 1 DB set PDTCTUSERINFO 0 Result 1
sendcmd 1 DB save  
sendcmd 1 DB reboot
```


7、破解最大用户数(本例设置为66，当然你可以直接把这个限制关了)  
        设置66用户     sendcmd 1 DB set CltLmt 8 Enable 0    直接关闭限制最大用户数
```
sendcmd 1 DB set CltLmt 8 Max 66
sendcmd 1 DB save  
sendcmd 1 DB reboot
```
8、  查看telecomadmin帐号的密码
```
sendcmd 1 DB p DevAuthInfo
```
9、重启光猫，进192.168.1.1的页面，点设备注册，输入宽带识别号后点下一步，完成设备注册！！！

10、再次telnet进光猫，禁用电信远程控制（此项必须在以上步骤完成后进行！！！切记！！！否则无法注册LOID成功！）  
```
sendcmd 1 DB set MgtServer 0 URL [http://127.0.0.1](https://ayw.ink/?golink=aHR0cDovLzEyNy4wLjAuMS8=)  
sendcmd 1 DB set MgtServer 0 PeriodicInformEnable 0  
sendcmd 1 DB set MgtServer 0 Tr069Enable 0
```

11、用telecomadmin的密码进192.168.1.1的页面，把“网络-网络设置”里连接名称带internet字样（下拉可见）的配置删除，再“新建wan连接”，直接把连接模式从“路由”改成“桥接”就点最下面的“添加”，再点“保存”，重启光猫完工！

12、参考帖子：[http://www.chinadsl.net/forum.ph … 666&_dsign=a2aedfd5](https://ayw.ink/?golink=aHR0cDovL3d3dy5jaGluYWRzbC5uZXQvZm9ydW0ucGhwP21vZD12aWV3dGhyZWFkJmFtcDt0aWQ9MTI3NjY2JmFtcDtfZHNpZ249YTJhZWRmZDU=)  
[http://www.chinadsl.net/thread-127664-1-1.html](https://ayw.ink/?golink=aHR0cDovL3d3dy5jaGluYWRzbC5uZXQvdGhyZWFkLTEyNzY2NC0xLTEuaHRtbA==)  

所有用得到的telnet命令：  
A、设置telnet用户名密码、端口和登录等  
     sendcmd 1 DB set TelnetCfg 0 TS_Enable 1     打开telnet  
     sendcmd 1 DB set PortControl 3 PortEnable 1   打开23端口  
     sendcmd 1 DB set PortControl 6 PortEnable 0   关闭58000端口-Tr069服务  
     sendcmd 1 DB set TelnetCfg 0 Lan_Enable 1    局域网登录允许  
     sendcmd 1 DB set TelnetCfg 0 Lan_EnableAfterOlt 1     插上光纤后不自动关闭telnet  
     sendcmd 1 DB set TelnetCfg 0 Max_Con_Num 5     最多能够登录5个用户，避免被锁死  
     破解打开网页自动跳转LOID注册页面（适用于手工配置，无法LOID注册的同学），此项本人没有尝试过，照搬过来供参考。  
     sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
     sendcmd 1 DB set PDTCTUSERINFO 0 Result 1

     破解最大用户数(本例设置为32，当然你可以直接把这个限制关了)  
     sendcmd 1 DB set CltLmt 8 Max 32    设置32用户  
     sendcmd 1 DB set CltLmt 8 Enable 0    直接关闭限制

     查看telecomadmin帐号的密码  
     sendcmd 1 DB p DevAuthInfo

E、无论进行了任何指令设置，需要使用以下命令保存配置  
     sendcmd 1 DB save  
     sendcmd 1 DB reboot

F、折腾TR069：  
     方案一：把Tr069设置ITMS服务器页面的东西乱改：  
```

                  sendcmd 1 DB p MgtServer  
                  sendcmd 1 DB set MgtServer 0 URL [http://127.0.0.1](https://ayw.ink/?golink=aHR0cDovLzEyNy4wLjAuMS8=)     把ITMS认证地址改掉  
                  sendcmd 1 DB set MgtServer 0 PeriodicInformEnable 0     不启用周期上报  
                  sendcmd 1 DB set MgtServer 0 Tr069Enable 0     禁用Tr069远程控制  
                  sendcmd 1 DB set MgtServer 0 UserName xxx     这里的*改成随便什么当ITMS认证用户名 
                  sendcmd 1 DB set MgtServer 0 Password **********     这里的*改成随便什么当ITMS认证密码  
                  sendcmd 1 DB set MgtServer 0 PeriodicInformInterval 15768000000     把间隔时间弄成500年  
                  sendcmd 1 DB set MgtServer 0 ConnectionRequestUsername *****     这里的*改成随便什么当反向认证用户名  
                  sendcmd 1 DB set MgtServer 0 ConnectionRequestPassword ********     这里的改成随便什么当反向认证密码 

```

                  
     方案二：个人感觉这个结合方案一最好：  
```
sendcmd 1 DB p WANC        
                  查看网络连接设置，确认row 0是修改目标：1_TR069_VOICE_R_VID_46，如果不是row 0而是row 1或row 2，下面的 WANC 0 改成 WANC 1 或者 WANC 2  
                  
sendcmd 1 DB set WANC 0 VLANID 64        修改Tr069连接的VLAN  
sendcmd 1 DB save  
sendcmd 1 DB reboot  
```
                  此修改如同修改telenet密码，必须重启光猫才能生效。  
      方案三：强迫症患者福音，彻底清除：  
                  光猫默认4条连接数据，TR069就是第一条 也就是 <Row No=”0″>  
                  直接使用命令 sendcmd 1 DB delr WANC 0  删除WANC 表 Row 0 数据  
                  delr 参数就是删除表内数据条目的命令。  
                  登录telcomadmin，查看网络连接情况，TR069已经被删除。  
  
G、最后，把一级超级用户telecomadmin和二级普通用户useradmin的密码改掉：  
```
     sendcmd 1 DB p DevAuthInfo 查看设备所有用户名和密码  
     sendcmd 1 DB set DevAuthInfo 0 Pass **********     这里的*改成你自己希望的teleadmin用户的密码，执行完就在网页上试试登录  
     sendcmd 1 DB set DevAuthInfo 1 Pass *****     这里的*改成你自己希望的useradmin用户的密码，执行完就在网页上试试登录
```
XXX、路由接4k iptv盒子的设置：  
       到光猫的设置界面——网络——网络设置——网络连接里的连接名称选Other_B_VID_85  
       确认：1、勾选了“启用VLAN”  
                 2、VlanID填85  
                 3、802.1p选0 —默认好像是5，造成4k的认证异常，看一会儿就报错  
                 4、LAN端口绑定：只勾选iTV（这个是为了我的标清iptv选的，如果你没有就把勾去掉，这样光猫4个lan口的就都能接路由了）  
                 5、SSID端口绑定：全部不勾选  
                 6、到左侧选VLAN绑定，默认应该是有两条规则，网口3和4，用户侧VLAN=85，绑定wan连接名称“Other_B_VID_85”，点击表格最后一行空白行，照着这两条规则，再添加一条网口1的就行了（如果上面第4点没有勾选iTV，那就再加一条iTV的），记得点保存  
                 7、最后到应用——IGMP设置里确认宽带连接是选了“Other_B_VID_85”，组播VLAN是填了51                 8、保存后重启光猫就完成光猫部分的设置了！  
                 9、本条只针对刷了**koolshare改版固件的华硕路由！！！进路由开启jffs空间并重启路由，telnet进路由，运行一键脚本后等待路由再次重启之后就行。

                      脚本有两种，一种是4k盒子直接接路由的，另一种是仍然接光猫上的网口的，脚本内容如下：  
                       第一个脚本：
  ```
  cd /jffs/scripts/ && rm -rf SHiptv.sh && wget –no-check-certificate [https://raw.githubusercontent.co … TV/master/SHiptv.sh](https://ayw.ink/?golink=aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Fycm9uWWluLzRLLUlQVFYvbWFzdGVyL1NIaXB0di5zaA==) && chmod +x SHiptv.sh && sh SHiptv.sh  
  ```
                       第二个脚本：
   ```
cd /jffs/scripts/ && rm -rf iptv7x.sh && wget –no-check-certificate [https://raw.githubusercontent.co … TV/master/iptv7x.sh](https://ayw.ink/?golink=aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Fycm9uWWluLzRLLUlQVFYvbWFzdGVyL2lwdHY3eC5zaA==) && chmod +x iptv7x.sh && sh iptv7x.sh
```
                       关于第二个脚本，特别说明一下：主要目的是为了省一个路由的口，并且万一路由死机，只要盒子和光猫不重启就还能继续看，缺点是认证速度慢，而且需要关闭光猫的DHCP功能，而且我家里还会有认证异常看不了的情况，所以推荐第一个脚本。


这些隐藏的页面大多数设备都通用，有兴趣的可以试试，呵呵~<br><br>注意：F450G必须超级用户登录，有些设备普通用户登录也行。 
导出配置页面：http://192.168.1.1/backupsettings.html 
导入配置页面：http://192.168.1.1/updatesettings.html
服务访问控制：[http://192.168.1.1/scsrvcntr.html
工厂模式页面：http://192.168.1.1/factorymode.html(工厂模式下可修改MAC等参数)  
版本信息页面：http://192.168.1.1/test_version.html
显示当前配置：http://192.168.1.1/dumpmdm.cmd

### 中兴F650全系使能


 中兴F412/F460/F612/F660等方法：
1，开个dos窗口一直ping，用如下命令
    ping 192.168.1.1 -l 128 -t

2，   再开一个dos窗口
    输入：telnet 192.168.1.1 10128

    账号：root
    密码：Zte521
输入 sendcmd 1 DB p CltLmt （注意空格和大小写）解释：查看一下当前的用户数量
 
输入 sendcmd 1 DB set CltLmt 8 Max 9 （注意空格和大小写）解释：修改最大用户数为9，原来是5，可以改成其他数目，建议最大数目不超过255
输入 sendcmd 1 DB set CltLmt 8 Enable 0  (注意空格和大小写）解释：去掉限制，部分地区可能有这个检查，为安全起见建议大家将这个值改成0
输入 sendcmd 1 DB save  (注意空格和大小写）解释：修改保存

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
upgradetest sdefconf 309
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
sismac 1 2177 ZTEGCA777B58
sismac 1 512 80B07B-ZTEGCAC4A65C
sismac 1 256 F4:B5:AA:19:D2:A8
sismac 1 258 80:B0:7B:AE:87:00

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

关闭强制自动注册页（中兴系）gm232
sendcmd 1 DB set PDTCTUSERINFO 0 Status 0
sendcmd 1 DB set PDTCTUSERINFO 0 Result 1
sendcmd 1 DB save

sidbg 1 DB set PDTCTUSERINFO 0 Status 0  
sidbg 1 DB set PDTCTUSERINFO 0 Result 1  
sidbg 1 DB save
  
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

ritool set YPSerialNum HWTCBA89D089 #设备SN码

ritool set G984Serial BA89D089 #设备SN码后8位

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

### GS3101改sn，mac


### 烽火改sn，mac

提升权限时会提示输入密码，密码为：Fh@ABCDEF，其中ABCDEF为光猫设备标识后六位，去掉分隔符，全部大写。

load_cli factory                                                       进入工程模式
set factorymode enable                                          开启写入模式
set device_oui ABCDEF                                           设置OUI
set device_sn CIOT04985D68                      设置sn
set gpon_sn FHTT04985D68
set onu_mac C0:98:DA:98:5D:68                            设置mac
set factorymode disable                                         退出写入模式
exit                                                                        退出工程模式。
reboot                                                                   重启光猫生效。


load preconfig Guangdong     改省份（要注意：有些省份文件缺少，可能会出现访问不了。那就要又重新加别的省份了，直接能打开主页，而且跳出注册面。有风险，自己担风险。）如果改自己省用不了。就网上找下与自己省份参数一样的省份重新load preconfig 省份  
show area_code （此命令为显示当前加载的省份）  
现已知参数   广东=广西
```
0. add internet_bridge <0-4095>  
1. calibration 2.4G_wifi <OEM_FACTORY>  
2. calibration 5G_wifi <OEM_FACTORY>  
3. cd [..|device|service|switch|codec|dsp|protocol|pon|gpon|omci|wlan|tr069|       wan|igmp|gponl3|oam|ntp|mld|factorydir]  
4. check preconfig exist <province>  
  
5. check preconfig valid <PROVINCE_NAME>  
6. check sdn_iv  
7. clear  
8. clear reboot_num  
9. clr current_ponmode  
  
10. exit  
11. help  
12. list  
13. load preconfig <PROVINCE_NAME>  
14. restoredefault  
15. set [batterylight|ponlight|loslight|lan1light|lan2light| lan3light|lan4light|voiplight|post1light|post2light|usblight| wifilight|wpslight|internetlight|usb2light|powerlight] [on|off]  
16. set alllight [on|off]  
17. set current_ponmode <PONMODE>  
  
18. set default_ponmode <PONMODE>  
  
19. set device_oui <DEVICEOUI>  
20. set device_sn <SERIALNUMBER>  
21. set factorymode [enable|disable]  
22. set gpon_sn <GPONSN>  
23. set mac_num <MACNUM>  
  
24. set odminfo <ODMINFO>  
  
25. set onu_mac <onumac>  
26. set pcba_sn <PCBASN>  
27. set pon_prbs [prbs7|prbs15|prbs23|prbs31]  
28. set rogue [on|off]  
29. set sdn_iv  
30. set set_wifi_calibration_2g  
31. set set_wifi_calibration_5g  
32. set ssid2g_name <WIFISSID>  
33. set ssid2g_pwd <WIFISSIDPWD>  
34. set ssid5g_name <WIFISSID>  
35. set ssid5g_pwd <WIFISSIDPWD>  
36. set ssid_name <SSIDINDEX> <WIFISSID>  
37. set ssid_pwd <SSIDINDEX> <SSIDPASSWORD>  
38. set test_ssid2g_name <WIFISSID>  
39. set test_ssid5g_name <WIFISSID>  
40. set transceiver_serial <transceiver_serial>  
  
41. set transceiver_type <transceiver_type>  
  
42. set user_pwd <USERPASSWORD>  
43. set vendor_id <VENDOR_ID>  
  
44. set wifi map <org_file> <dest_file>  
45. set wifi_security open  
46. set xvr_tx [on|off]  
47. show  factorymode  
48. show acsurl  
  
49. show admin_name  
  
50. show admin_pwd  
  
51. show allinfo  
52. show area_code  
  
53. show br0_mac  
54. show build_num  
55. show build_time  
  
56. show current_ponmode  
  
57. show custom  
  
58. show default_ponmode  
  
59. show device_model  
60. show device_oui  
61. show device_sn  
62. show frameworkinfo_ct  
63. show ftp_enable  
  
64. show gpon_sn  
65. show gponpassword  
66. show history  
67. show internet_mac  
68. show mac_num  
  
69. show odminfo  
  
70. show onu_mac  
71. show optical_param  
72. show pcba_sn  
73. show pon_mac  
74. show pon_prbs  
75. show reboot_num  
76. show reg_info  
77. show ssid2g_name  
78. show ssid2g_pwd  
79. show ssid5g_name  
80. show ssid5g_pwd  
81. show ssid_name <SSIDINDEX>  
82. show ssid_number  
  
83. show ssid_pwd <SSIDINDEX>  
84. show telnet_enable  
  
85. show test_ssid2g_name  
86. show test_ssid5g_name  
87. show tr069_enable  
  
88. show tr069_mac  
89. show transceiver_serial  
  
90. show transceiver_type  
  
91. show user_pwd  
92. show vendor_id  
  
93. show version  
94. show voice_protocol  
95. show voip_mac  
96. test sd  
97. test table  
98. test usb  
99. upgrade <FILENAME> <IPADDRESS>  
100. voice_test [on|off]
```

### h2-2修改sn，mac等教程
首先感谢论坛的资料，打开[http://192.168.1.1/hidden_version_switch.gch](http://192.168.1.1/hidden_version_switch.gch)，选择“Default Version”并确定，光猫自动重启，（恢复出厂设置）  
直接打开这个网页[http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch](http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch) 出现 success（成功）的字样（打开telnet）  
然后telnet 192.168.1.1 用户名我这是  

- 移动光猫账号： CMCCAdmin 密码：aDm8H%MdA
- 登录以后输入sismac show

- h2-2打开telnet新网址 http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch

然后就可以看到sn，mac等数据。  
下面参考中兴光猫修改命令  
setmac show  
setmac 1 256 36:36:36:36:c0:36  
setmac 1  2182 2150083714AGJC514975  
setmac 1  768 9C1D36  
setmac 1  512 428519C1D3636C0AC  
setmac命令------修改硬件信息  
-------------------------------------------------------------------------  
1.查看编码的ID号setmac show  
2.修改MAC地址:setmac 1 256 00:00:00:00:00:00  
3.修改SN: setmac 1 2177 xxxxxxxx [SN为8字符]。  
4.修改设备标识号（后17位）: setmac 1 512 xxxxxxxxxxxxxxxxx [设备标识位17位字符]  
5.修改设备标识号（前6位）以为666999例，从第1步看id代码为768，修改命令setmac 1 768 666999  
4.修改MAC地址:setmac 1 256 00:00:00:00:00:00  
5.以上命令输入 setmac 2 xxx 为查看（此处xxx为编码的ID号如256、512、2177，第1步查看）。  
注意mac输入小写字母  
修改完成后success，然后输入reboot重启光猫即可。  
End!

来源
https://www.right.com.cn/FORUM/thread-4958877-1-1.html

###  TEWA 800改sn，mac
天邑Mac和SN后8位一致，改Mac就是改sn.运用天邑TelnetClient工具，
用：echo xx xx xx xx xx xx>/proc/nvram/BaseMacAddr  命令即可

### 中兴光猫查看宽带密码
开telnet后，执行命令，拷贝到mnt目录，然后去管理员后台开ftp，useradmin，useradmin，下载配置文件，再解密
```
cp /userconfig/cfg/db_user_cfg.xml /mnt/
cd /mnt/
chmod 777 db_user_cfg.xml
```

## 关闭防火墙

telnet命令:  关闭防火墙 
```
sidbg 1 DB set FWLevel 0 Level 0
sidbg 1 DB save
```

```
sendcmd 1 DB set FWLevel 0 Level 0
sendcmd 1 DB save
```


关闭防火墙并发连接数最大限制 
```
sidbg 1 DB set FWBase 0 FwConnMaxEnable 0
sidbg 1 DB save 
```

```
sendcmd 1 DB set FWBase 0 FwConnMaxEnable 0
sendcmd 1 DB save 
```
更改最大并发连接数 (按需修改，最后数字我改的是65535,原来16000+也够用)
```
sidbg 1 DB set FWBase 0 ConntrackMax 65535
sidbg 1 DB save
```

```
sendcmd 1 DB set FWBase 0 ConntrackMax 65535
sendcmd 1 DB save
```
### 换猫

#### 山东联通换猫直接用loid注册即可，没有绑定
#### 安徽移动，loid改sn，mac还不行，拨号上，
#### 湖南移动认sn，mac，改完拨号屏蔽注册页即可
```
sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
sendcmd 1 DB set PDTCTUSERINFO 0 Result 1  
sendcmd 1 DB save
```
#### 广东移动、广东电信，光猫改广东地区即可注册
#### 广西电信，光猫改广西地区即可注册
#### 湖南联通、上海电信没有vlan id
#### 北京联通mac认证，不需要loid
#### 河北联通mac认证，不需要loid，不会自动下发
#### 山西移动，联通mac认证
#### 天津电信，直接loid注册
#### 云南联通，注册不会下发上网账号密码



### 宽带密码
123456，123123，321321,12345678，后6位，888888，666666
#### 北京移动，应该是装机日期，格式：20220202，loid：Bj开头
#### 辽宁移动，12345678或后8位
#### 黑龙江移动，后6位
#### 辽宁联通，后6位或8位数字或123456
#### 河南联通、湖北联通、天津联通、上海联通，123456
#### 四川移动（账号不是手机号的话，取手机后6位），广东移动东莞移动，后6位
#### 山东联通、江苏联通，后6位
#### 浙江移动，后6位
#### 江苏移动，112233，企宽123123（手动设置）
#### 山西太原联通 1234567890
#### 海南移动手机号，密码kd123456


### 注册码
#### 江苏移动
江苏家宽账号/手机号后10位，企业宽带：a+账号后9位

#### 广东移动
广东，每个城市1个字母+账号后8位+2（移机过就是3，4，5，6累加），15768226708，e682267082
中山移动 e
东莞移动 c
广州移动 a
深圳移动 b
揭阳移动 m
汕头移动  f
潮州移动  
佛山移动  d
肇庆移动  u
湛江移动  k
茂名移动  n
惠州移动  j
珠海移动  h
韶关移动  p
河源移动 q
梅州移动 r
江门移动  g
阳江移动
清远移动 v
云浮移动
汕尾移动 s

#### 湖南联通
loid和账号一样
073800292846

#### 河北联通，山西联通，贵州联通，江西联通无loid，mac自动认证



3_IPTV_B_VID_30

联通：
1.  电脑网口直连光猫网口1，不要经过路由器，同时用手机<流量>热点给电脑供网（手机USB线或热点）

2.  注意要先拔光纤（猫底下方形的那个），拿个针捅reset复位孔持续捅40秒左右，一般看到所有灯闪灭2次再松开就差不多了，如果一直没闪烁就每40秒松开一下，再捅40秒，重复4次；最后拔电重启猫，全程拔光纤，等我说插再插。

3.  捅后光猫后台输入
192.168.1.1/cu.html
CUAdmin，CUAdmin登录进去说明捅成功了，联系我下一步


## 步骤

联通：
1.  光猫背部user登录，【状态】-网络侧，找到internet_xx那个拍照，认证注册里，loid拍照，

2.  电脑网口直连光猫网口1，不要经过路由器，同时用手机<流量>热点给电脑供网（手机USB线或热点）

3.  注意要先拔光纤（猫底下方形的那个），拿个针捅reset复位孔持续捅40秒左右，一般看到所有灯闪灭2次再松开就差不多了，如果一直没闪烁就每40秒松开一下，再捅40秒，重复4次；最后拔电重启猫，全程拔光纤，等我说插再插。

4.  捅后光猫后台输入
192.168.1.1/cu.html
CUAdmin，CUAdmin登录进去说明捅成功了，联系我下一步


------------
移动：

2.  电脑网口直连光猫网口1，不要经过路由器，同时用手机<流量>热点给电脑供网（手机USB线或热点）

3.  注意要先拔光纤（猫底下方形的那个），拿个针捅reset复位孔持续捅40秒左右，一般看到所有灯闪灭2次再松开就差不多了，如果一直没闪烁就每40秒松开一下，再捅40秒，重复4次；最后拔电重启猫，全程拔光纤，等我说插再插。

4.  捅后光猫后台输入
192.168.1.1
CMCCAdmin，aDm8H%MdA登录进去说明捅成功了，联系我下一步


-----------------------

手机开usb热点（注意不是无线热点，另外不要接任何WiFi，要使用流量上网）

即：手机和电脑之间接个数据线（台式机接机箱背后usb口），然后手机上开启usb热点（一般在设置-移动共享网络里面找或者有的叫个人热点，然后更多共享设置里面），另外如果接数据线出现让你选充电或者传文件或照片这请取消和这个无关

弄下很简单的，不会可以百度下





## 案例
 
##### 云南曲靖移动ZXHN F673AV9a
user
yt626u64

INTERNET_R_VID_41
OTHER_B_VID_43
loid
0874QLFb093edd836

#### 河南濮阳华龙联通F677V9
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

#### 河南南阳卧龙联通G7615
bkxu4ct7
INTERNET_R_VID_22
0179174441

037703024589

#### 河南南阳联通G7615
0151886222
037703801367
3319


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

#### 江苏苏州移动H60G
INTERNET_R_VID_38
5006234219
15006234219

#### 山东联通济南 g-140-
JN56177752
3610
053105741967

#### 上海联通 F4610
上海联通
NTERNET_R_VID_1600
000000000000000012923650
02100722575
v1.2p1t2

telnet开启，但连不通
删除tr69，注册40%，手动输账号登录。

#### 河北移动G-140W-MD
387
4136083594

#### 河南商丘联通 F657G
user
x72zuu73

22

037008480453
123456

#### 山东济南
3143
JN81247570

053107485917

#### 福建移动SK742
5913043048
400
start.ghtml
telnet
root
aDm8H%MdA

#### 辽宁联通HN8145xr
2010
wf85141136@163
5141136

loid
2043846913

#### 辽宁联通G7615
loid：2157628946
10
dlls01304243@163
304243【@前6位】


#### 天津联通HN8345
user
321654aaa

143
宽带
02205152773
123456
loid：


#### 江苏移动H50G
user
x2@hh7ud
a505148891
61

CMCCAdmin
admin1234

#### 河南联通F677V2
user
hkhfqsde
loid
5275569873
2_INTERNET_R_VID_22
037303025906
123456

#### 辽宁联通HS8346R5
loid：1775712098
10
hl5151018
5151018

#### 辽宁联通葫芦岛F677
loid
2029006572
10
hl01033881
033881

#### 湖北联通F657
user：
2633zs39
T009282C0G0110000I

49
071800131665

#### 福建移动skd742
loid
5923271784

#### 江苏电信tewa 707
121216549CB97D68
1011
051243394118

#### 山东潍坊联通F657
3427
053606229184

iptv：43
loid
WF49077169

#### 天津联通Dt541（不会自动下发数据）
bnyparhb
TJTG0005978866 
135
02201530102
123456

#### 江苏移动F603
73
5050243736


#### 湖南联通
没有vlan id，loid和宽带账号同
073800292846
073800292846
f07h3il0

#### 北京移动F7610T
user
XZ26d7xk

BJ19uxg42t
iptv1010
10
231010145658

#### 山东联通HN8345
H502988980


#### 辽宁联通PT927G
user
52746225
loid：
2126177358

lnadmin04743371
vlanid：10
宽带账户密码
dsq01057774
01057774

#### 福建联通pt928
140	
059306040428
loid
5930120425318


#### 山东淄博联通F607za
user
gyjvqht3
loid
ZBZD05400533015967577252

3279
IPTV_B_VID_43
053301596757

#### 江西移动F673
user
dAt24#aH
sn：ZTEGD48735B5
47
3_OTHER_B_VID_46
看不到loid，此款开不起telnet

#### 北京移动F673va

BJ1n5rycai
INTERNET_R_VID_10
OTHER_B_VID_1010
231010126885

192.168.1.1
CMCCAdmin，aDm8H%MdA
宽带帐号密码
user:231010126885
psw:19960323

#### 辽宁葫芦岛联通F677

loid
2107016915
10
hl21207163

#### 广东东莞移动T50（动态）
loid
c436389422
41

#### 江苏电信PT926G
loid
1993C07A37E4B7E4
11

#### 江西赣州于都移动F613
password
l8620705oo
宽带：
13803573144
577328



#### 江西南昌移动F613V9（首页f12查loid）
eEb9T%kE

INTERNET_R_VID_47
OTHER_B_VID_46
loid：nc37777827

15079020829
656624

#### 广西移动H61G
66
loid
7486313009

e4qst3ng
66
loid
7486313009

#### 广东中山移动F663
e116989022


#### 湖北联通F657
user
2633zs39
VLAN ID:49
T009282C0G0110000I
071800131665


#### 江苏SK-D742企宽
user
T734nMT?

43
JTD13515264846
123123
loid
a515264846

#### 江苏集客H50G
user
v9@pk5yv

49
tr4015
a040936917
超密
CMCCAdmin
admin1234
宽带：
jtnj25040936917
123123


#### 福建移动F663
400
tr69 401
3_OTHER_B_VID_431
loid
5962836955
宽带账号：
18350602860

#### 浙江移动SK-D742
user
k5bnugkt

4031
tztta34005446

#### 湖北恩施移动F657
6fbuedkx
49
tr48
tv59
loid
T007881FNAG0112001K
宽带
071803864968
123456


#### 四川移动G-1426-MB

loid
711947399
101
15984882527@cmcc
other102 bridge

#### 上海电信G7615
loid
0053333624
vlanid，0透传

#### 内蒙古移动HS8345
loid
q841z59x

41
tr069-4005

#### 河南平顶山移动F6145

CMCCAdminRp7Mi8N*
LOID
6033516719
4031
13782408818
408818

#### 山东联通F477V9
user
loid
H006475878
3709
IPTV_B_VID_2811
053904238618
238618

#### 江苏移动F613
user
hA269%yz

35
13915697009
112233

#### 河南联通
267
037604691767


#### 重庆移动H62G
loid
RCZ12C2BA1
INTERNET_R_VID_1011


#### 浙江移动HG6145F
4031
CMCCAdminQk#Fg7Us

#### 上海联通TEWA 1208E
834
02107724303
123456

CUAdmin67084507

#### 广西移动TEWA 861
7319263944
2_VOIP_INTERNET_B_VID_66
19877379811
200378

#### 辽宁联通HS8345
2080338001
_INTERNET_R_VID_10
fxl20234827


#### 湖北宽带拨号密码888888

#### 辽宁联通F657
ts645ftz
10
2127058192
fxad01047132

#### 福建联通F657
140
5940510509794
059407012195

#### 辽宁朝阳联通H80
user
q6gsk5vv

_INTERNET_R_VID_10
ly05167783
2159399296

#### 辽宁联通DT741-csf
utph9cey

_INTERNET_R_VID_10
asx2193608
LOID
2080159279

####  浙江移动SK-D746（自动注册）
loid
t10378444b


#### 山东联通DT541
user
7gnm6dec
053903903656
H006120742

#### 辽宁联通HN8145xr
2010
wf85141136@163
141136
loid
2043846913

#### 辽宁葫芦岛联通F657
2152859374
10
hldx3240436

#### 辽宁葫芦岛联通F657
9x2bu7xt
2151629347
10
hl22371119

#### 山东联通SK-D742

H006651345

#### 辽宁葫芦岛联通F677
loid
2149569286
10
hl21195119

#### 山西联通F657（无loid，自动注册）
a97y6xsf
2_INTERNET_R_VID_1524
035701423818

#### 山东联通F677
user
36xg9h42

3_INTERNET_R_VID_3225
053804671202
TA02444034

#### 江苏移动集客S-GTA86G0A
a962492269

JTE13962492269
158158
INTERNET_R_VID_47
R069_R_VID_4015

#### 江苏苏州联通PT924G

loid
0512050630732056
2025
051205063073
063073


|1_TR069_R_VID_45|45|IPoE|禁用|已连接|9.39.2.81|255.255.248.0|c0:7c:90:06:ed:b7||
|2_INTERNET_R_VID_2025|2025|PPPoE|启用|已连接|100.126.62.224|255.255.255.255|c0:7c:90:06:ed:b8|ERROR_ISP_DISCONNECT_IPv4|
|3_VOICE_R_VID_42|42|IPoE|禁用|未连接|INIT||c0:7c:90:06:ed:b9|ERROR_ISP_DISCONNECT_IPv4|
4_IPTV_B_VID_43

#### 浙江杭州移动SKD748
loid
n3340060mc
4031
hzxia68446189
123456

#### 河南平顶山移动H62
6033711532
4031
18337557339

#### 辽宁葫芦岛联通F657G
2055257792
10
hlw244415

#### 云南联通PT927G（不会自动下发）
loid和密码
CU53D01H00190000G09001B
CUAdmin

1_TR069_R_VID_140	140	IPoE	禁用	已连接	10.135.67.235	255.255.252.0	88:ac:9e:cb:0b:bf
2_INTERNET_R_VID_21	21	PPPoE	禁用	已连接	10.136.122.172	255.255.255.255	88:ac:9e:cb:0b:c0
3_VOICE_R_VID_25	25	IPoE	启用	已连接	18.4.70.202	255.255.252.0	88:ac:9e:cb:0b:c1


#### 辽宁葫芦岛移动h3-1r lite

jun?t5nf
HLCM23345316

INTERNET_R_VID_1115
_TR069_R_VID_4011

15242906021@net
12345678

#### 山东联通HS8345
账号053904075705
宽带密码 030616
超级密码030616

超级密码呢
cuadmin030616

3_INTERNET_R_VID_1702
H006906260


#### 内蒙古联通G140-W
user
h7sgpf4w
HL00968770007836144
047000968770
1_TR069_R_VID_887	已连接	DHCP	启用	887	120.63.124.229
2_INTERNET_R_VID_47	已连接	PPPoE	启用	47	10.101.216.200
3_IPTV_R_VID_46	已连接	DHCP	启用	46	172.115.248.53

#### 湖北联通
loid
T001785C0G0815001C
49
071503558992

#### 辽宁联通h8245
zbtq7zpc

2143089353
10
hl01122763

#### 辽宁电信
2888
loid
5297983736
5297983736

#### 山东联通
H502219076
2879
43  iptv

#### 深圳联通PT928G
user
3krqxusf

46
41
loid
7555678353
宽带
SZFTH9252622289567744@16900.gd

#### 江苏联通v173
45
2097inter
43iptv
loid
0527050192046679
052705019204
019204

#### 江苏联通PT924G（超密未加密）
loid
0527022442721958
宽带账号密码：
052702244272
244272
2_INTERNET_R_VID_2045	

#### 浙江移动H3-8S
4031
qzqca19003241
003241

#### 辽宁联通F657V9-C
tz9u766h
10
hl5865988
2134537574

#### 辽宁移动H3-2r
HLCM23617905
INTERNET_R_VID_1070

#### 四川移动UNG430Z
loid
711838548
101
宽带账号
21711838548
1356886889
密码为886889

#### 山东联通F477
INTERNET_R_VID_3594
TR069_R_VID_50
IPTV_B_VID_43
053904084322
loid：H006352780

#### 云南h2-3
0875LYZj7976797hv
41
other43
45

火狐开telnet

#### 广东东莞移动TEWA 272
1312373760
```
192.168.1.1/ajax_user_register.gch
```
打开后前10位是注册码
c180351642 2010100001IGDSUCCSUCC-1312373760
41
18218035164@139.gd
密码后6位

#### 广东深圳移动TEWA 270
user
2U~H~hyy
b0042812622010100001IGDSUCCSUCC
41
13600428126@139.gd


#### 四川移动HS8545M5
10
13438050567a
050567
e5e5ec5331cb130d4d5556848cfd95f875439e37b35b52c6ee4b145242815371

#### 内蒙古联通V173
1_TR069_R_VID_887	887/6	IPv4
2_INTERNET_B_VID_47	47/0	IPv4/IPv6
3_INTERNET_B_VID_48	48/0	IPv4/IPv6
8_TR069_B_VID_887	887/6	IPv4
loid：WL08132242011039508

#### 江苏移动一网通SK-M724
79
VJTwx51039797417005
http://192.168.1.1/ajax_user_register.gch
a797417005 201010002INTERNET,iptv0IGDSUCCSUCC-1313478808

#### 浙江移动HS8546

tr4034
4031
m2107966st
hunxa35119162

#### 河南联通HG8321R
iak6v6u8
22
loid
2649826390

#### 河南联通F677V9
INTERNET_R_VID_296
VOICE_R_VID_1370
039502373222
loid
0367395318

#### 山西联通H
4059
2
035201457970

#### 山东联通ISCOM HT821-GP【未破】
CQ85060222
3_INTERNET_R_VID_3103

#### 辽宁联通SKD742
dlx2864040@163
2012
2125257817


#### 北京移动SKD746
BJ1lve0zlp
2_INTERNET_R_VID_10
3_IPTV_B_VID_1010
1_TR069_R_VID_4003

#### 江苏联拓 F657
2_INTERNET_R_VID_2049
1_TR069_R_VID_45
4_IPTV_B_VID_43
02505040558
040558
loid
025050405585094

#### 四川联通v173
ZG606666520X0101006
081300407554
241015
1_TR069_R_VID_4040	4040/7	IPv4
2_VOICE_R_VID_3500	3500/6	IPv4
3_INTERNET_R_VID_106	100/0	IPv4/IPv6
4_IPTV_B_VID_3300	3300/5	IPv4
8_TR069_B_VID_4040	4040/7

#### 四川联通F677
1_TR069_R_VID_4040
4_VOICE_R_VID_3500
6_INTERNET_B_VID_100
loid
LE604653901X1509005

#### 河南联通TEWA870
loid
0761771917
037008679382

#### 天津联通华为HG8347R（root密码不是标准）
1_TR069_R_VID_4000	Disconnected	--	4000/7	AlwaysOn
2_INTERNET_R_VID_151	Disconnected	--	151/0	AlwaysOn
3_IPTV_R_VID_2046

02201033534
033534
TJHD0006527707

#### 湖北联通F657
3_IPTV_R_VID_59
2_INTERNET_B_VID_49
T000140C0G0601000Z
  
#### 新疆联通华为HS8345
991300337831
41
1_TR069_R_VID_800	Disconnected	--	800/7	AlwaysOn
2_INTERNET_B_VID_41	Disconnected	--	41/0	AlwaysOn
3_VOICE_R_VID_44	Disconnected	--	44/6	AlwaysOn
4_IPTV_B_VID_43	Disconnected	--	43/0	AlwaysOn


#### 山东联通SK-D849（ftp不行）
INTERNET_R_VID_294
039507601645
0780911645

293
039507728694
0780911622

#### 华为
1_TR069_R_VID_180	Connected	79.81.4.116	180/6	AlwaysOn
2_INTERNET_R_VID_290
039507221312
0780444647

#### 山东联通SK-D740（配置文件无法解密）
7fne6bth
291
039507603307
0780444791

#### 内蒙移动h2-3（未破）
loid：
k6j7i5hf
41
15148382677
809740

#### 山东联通v173
WF81604687
053606234493
1_TR069_R_VID_50	Connected	10.201.196.10	50/6	AlwaysOn
2_IPTV_B_VID_2340	Connected	--	2340/3	AlwaysOn
3_INTERNET_R_VID_3142	Connected	112.244.50.33	3142/0	AlwaysOn
8_TR069_B_VID_50	Connected	--	50/6	Alway

#### 山东联通PT952（telnet su密码是超密，需复位）
JN75639712
3_INTERNET_R_VID_3032
_IPTV_B_VID_580

#### 湖北联通F657
2_INTERNET_R_VID_49
072804818487
T010308ZNAG0508000V


#### 新疆移动F7000M
WL018755206
2_INTERNET_R_VID_2
4_VOIP_R_VID_30
3_OTHER_B_VID_91


#### 山东联通F457
3_INTERNET_R_VID_3284
2_IPTV_B_VID_43
rz74374799
063300768931

#### 辽宁PT928G
user
94699466

2_INTERNET_R_VID_1463
1_TR069_R_VID_46
fs_gp02404078514
loid
2159408561

#### 山西移动F613（sn注册，插光纤直接注册）
INTERNET_R_VID_41
1_TR069_R_VID_46

#### 浙江联通F657
2_INTERNET_R_VID_12
057400534088
loid
GNB029ZX2140H24018875800

#### 辽宁移动T66（loid认证，不需要密码）
loid：
HLCM23043201  
 2_INTERNET_R_VID_1073
 1_TR069_R_VID_4011        

#### 辽宁联通TEWA 830C
user
fgk6k442
10
2138218246
fsgp_04102193

#### 湖北联通F677V2（捅复位无反应）
ZQ33987589
053101600037
3_INTERNET_R_VID_3258
1_TR069_R_VID_50
2_IPTV_B_VID_510

####  浙江移动T65（插光纤自动注册）
loid
t0180107q1
 zsdhg05806660
 806660
2_INTERNET_R_VID_4031
1_TR069_R_VID_4034
4_IPTV_R_VID_4033

#### 山西联通HG5585F（自动注册）
2
035401188495

#### 辽宁联通F657
1_TR069_R_VID_46
2_INTERNET_B_VID_8
loid：2154569732

#### 山东联通sk-d740
3_INTERNET_R_VID_2885
2_IPTV_B_VID_731
054302016339

#### 山东联通sk-d740
3_INTERNET_R_VID_2895
1_TR069_R_VID_50
2_IPTV_B_VID_43
054302004257
BZ95818128

#### 山东联通sk-d740
2_IPTV_B_VID_43
3_INTERNET_R_VID_2889
BZ98180949
054302006595


#### 江苏移动S-Box8L94（网页重置）
a452933005
VJTwx51034452933
789789
设备接入类型：Gpon
设备型号：S-Box8L94
设备标识号：204B22SUNN22888652
厂家信息：SUNNIWELL
硬件版本：V1.0
软件版本：V1.0.1.5
设备MAC：204b22888652
设备SN：SUNN22888652
1_TR069_R_VID_4015	nas0_0	DHCP	0	6	关闭	up	10.43.114.69
2_INTERNET_R_VID_35	ppp0	PPPoE	0	0	启用	up	100.88.16.168
3_OTHER_R_VID_2030	nas0_2	DHCP	0	4	启用	connecting	
4_VOIP_R_VID_3951	nas0_3	DHCP	0	5	关闭	up	10.189.75.140
5_OTHER_R_VID_2030	ppp1	PPPoE	0	0	关闭	up	10.30.202.170

#### 山西移动F613
INTERNET_R_VID_41
1_TR069_R_VID_46

#### 湖北联通H80
2_INTERNET_R_VID_49	ppp0	PPPoE	49	0	启用	已连接	100.127.48.188
1_TR069_R_VID_48	nbif0	DHCP	48	0	关闭	已连接	10.83.179.248
3_IPTV_R_VID_59	nbif2	DHCP	59	
loid
T008419ZNAG0305002Q

#### 山东联通F657
3_INTERNET_R_VID_3263
1_TR069_R_VID_50
2_IPTV_B_VID_43
053107742929
SH86780664

#### 上海联通
CUAdmin08651674
02107111656
000000000000000011870848

#### 山西联通HS
1_TR069_R_VID_4059	4059/7	IPv4
2_IPTV_B_VID_4057	4057/0	IPv4
3_INTERNET_R_VID_2205	2205/0	IPv4/IPv6
8_TR069_B_VID_4059
035200426151
123123

#### 山西联通
2
035702481276

#### 甘肃移动TEWA 222(重置后注册)
ajax_user_register.gch
AQ71RUPK5J-2010100001IGDSUCCSUCC
3106324387814
246810
56



#### 天津联通HS8345（重置）
02205595126
595126
loid
TJDL0007532940
1_TR069_R_VID_4000	Connected	10.190.36.41	4000/7	AlwaysOn
2_INTERNET_R_VID_18	Connected	111.162.120.170	18/0	AlwaysOn
3_IPTV_R_VID_2504	Connected	10.15.5.192	2504/3


#### 贵州h2-3（403）
8RZa853884
1_TR069_R_VID_3950	开启	已连接	dhcp	100.90.63.31	255.255.128.0	100.90.0.1	10.198.2.166	
2_OTHER_B_VID_3850	开启	已连接						
3_VOIP_R_VID_3750	开启	未连接	dhcp					
4_INTERNET_R_VID_41	开启	已连接	pppoe	10.81.55.191	255.255.255.255	10.81.0.1	211.139.5.30	211.139.5.2

#### 山西联通SK-D748-C
267
035902250102
123456

#### 江苏联通HG6142A
2005
iptv43
loid
0523050041613398
CUAdminJnJkdqCy

#### 山西联通HG6142A
2
035401186531
1234567890

#### 辽宁联通G7615
2076426797
2_INTERNET_R_VID_10
dl21023265@163

#### 沈阳移动GM630【重置】
user
^69X3t9^@C1
id
1514
loid
SYCM12474314
完成，重置多次

#### 山东联通华为
p7946yx8
display current-configuration
3320
iptv1221
tr069-50

loid
ZBLZ05310533025306680113

#### 安徽移动GM630【重置telnet密码不对】
user
pAGF9

41
开启telnet后，root密码非pAGF9@C1
直接改桥接地址（电信页面）
[http://192.168.1.1/bridge_route.gch](http://192.168.1.1/bridge_route.gch)

#### 广州增城联通HG261G
tr069-46
41
iptv45
loid
2041616537
宽带
GZ1234734694@16900.gd

#### 辽宁联通

loid
2022649054
2_INTERNET_B_VID_2645
无法重置为标密

#### 浙江移动TEWE 272（复位闪灭4次才生效）
t5488343sn2010100001IGDSUCCSUCC2499064
4031
user
D4DJu9dR

#### 山西移动GM620
41
15035144254

#### 浙江杭州移动F663
2_INTERNET_R_VID_4031
1_TR069_R_VID_4034
3_VOIP_R_VID_4035
loid
n75265259d


#### 辽宁移动HG6145
HLCM24504771
tr069-4011
1128
18009885551@net
12345678

#### 辽宁移动HG6145
HLCM24504771
tr069-4011
1128
18009885551@net
12345678


#### 山西联通pt929
xfe2r5zh
2
035501503538
__ENC__2218E30901D0B216E6C6F44875352373


#### 山东联通HG521
063202412542
ZZ72060392

1_TR069_R_VID_50	已连接	11.214.119.16	255.255.240.0
2_IPTV_B_VID_2172	已连接	-	-
3_INTERNET_R_VID_4002	已连接


#### 河南联通华为HS8346
039202416078
cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac
0851672725
1_TR069_R_VID_180 Connected 81.131.65.19 180/6 AlwaysOn 
4_IPTV_R_VID_20 Connected 10.70.234.223 20/0 AlwaysOn 
5_INTERNET_R_VID_1236 Connected 42.230.27.127 1236/0 AlwaysOn 
039202416078IPTV@iptv.ha
cdf4a007e2b02a0c49fc9b7ccfbb8a10c644f635e1765dcf2a7ab794ddc7edac

#### 山东济宁微山联通TEWA 800

JI20092040826538
053703025910

1_TR069_R_VID_50|启用|已连接|DHCP|11.39.136.59|255.255.0.0|11.39.0.1|60.217.44.33
IPTV_B_VID_43|启用|已连接
3_INTERNET_R_VID_3217|

#### 河北联通G-140-W
031503297559@adsl
1_TR069_R_VID_3998	已连接	DHCP	启用	3998	25.86.39.216
2_INTERNET_R_VID_2695	已连接	PPPoE	启用	2695	60.3.73.196

#### 天津联通DT541
TJTG0006561924
02201064602
2_INTERNET_R_VID_44
DHCP
连接名称	3_IPTV_R_VID_2010
NAT	启用
IP	10.86.45.107/255.255.128.0
DNS1	202.99.96.68
DNS2	202.99.104.68``
DNS3	0.0.0.0
WAN MAC	28:c0:1b:d5:95:47
网关	10.86.0.1

#### 河南联通F677
1167
037008971154
123456
loid：0778468411

#### 陕西移动sk-d747
18406510664001
41

#### 山西移动
15035544830002
41

#### 浙江移动TEWA 272
t5488343sn2010100001IGDSUCCSUCC2499064

#### 广东中山移动GM219s
41
13715550996@139.gd
137996
e1555099632020100001IGDSUCCSUCC

#### 江苏移动sk742
66
JTF19895463782
a895463782
68
JTF18a795737390

#### 河北联通
1_TR069_R_VID_3998	Connected	27.31.19.163	3998/7	AlwaysOn
2_IPTV_B_VID_9	Connected	--	9/4	AlwaysOn
3_INTERNET_R_VID_7	Connected	172.17.217.96	7/0	AlwaysOn
031702338286@adsl
000000
e6439a6595c5c94f775c64a408fad73164ed674291261e202d1c714a1eb87332

#### 广东移动F663
v205771222
5_INTERNET_R_VID_41
1_TR069_R_VID_46
4_OTHER_B_VID_50

#### 辽宁联通HS8346
loid
2095016857
448
jz041622620593

#### 广东惠州移动SKd746
j695832462
2_INTERNET_R_VID_41	已连接 	172.28.248.80 	255.255.255.255 
3_OTHER_B_VID_48	已连接 	- 	- 
4_OTHER_B_VID_50	已连接 	

#### 黑龙江移动sk-D768
ji6hdc217a

#### 辽宁联通v173
1_TR069_R_VID_46	Connected	102.67.51.44	46/7	AlwaysOn
2_INTERNET_R_VID_10	Connected	113.235.217.28	10/0	AlwaysOn
3_VOICE_R_VID_20	Connected	19.180.215.66	20/0	AlwaysOn
8_TR069_B_VID_46
2116087462
dlx2663951@163

#### 内蒙古联通v173
WL03135414011052754
047403135414
1_TR069_R_VID_887	Connected	104.235.123.173	887/6	AlwaysOn
2_INTERNET_R_VID_47	Connected	10.43.84.80	47/0	AlwaysOn
3_INTERNET_B_VID_48	Connected	--	48/0	AlwaysOn
8_TR069_B_VID_887	Connected	

#### 河南联通hs8346v5
user
u4jegf4x
1_TR069_R_VID_180	Connected	65.78.86.109	180/6	AlwaysOn
2_IPTV_R_VID_23	Connected	10.20.96.249	23/0	AlwaysOn
3_INTERNET_R_VID_22	Connected	61.52.139.59	
loid:
1356188548
037105518994

#### 河南联通HG5585F
NTERNET_R_VID_335
037103618687
loid
2981294861

#### 河南联通F677
1167
037008971154
123456
loid：0778468411

#### 山东联通skd740
BZ09305237
3_INTERNET_R_VID_3868
054302010782

#### 山东联通skd740
1_TR069_R_VID_50
2_IPTV_B_VID_43
3_INTERNET_R_VID_3869
BZ56206567
054302008310


#### 河北联通贝尔140
p0rF0ViYr6D4+IuGlo7uFA==
p0rF0ViYr6D4+IuGlo7uFA==
ZNUnS8fuIu5IX7guihqpzA==
C51j2ar3YnFzGcF8lycAiw
FtRyCgnkPZlH9C78AIAhaQ

#### 辽宁联通F677
2_INTERNET_R_VID_10
3_OTHER_B_VID_40
2165528524
fxx3334137

#### 北京移动skd747
10
231010823383
192.168.1.1/ajax_user_register.gch
BJ17ve10ub2010100000IGDSUCCSUCC-1287280736

#### 山东联通HS8346X6
loid
JI22100293594652
053702038030
|1_TR069_R_VID_50|Connected|11.39.2.238|50/6|AlwaysOn|
|2_IPTV_B_VID_2116|Connected|--|2116/3|AlwaysOn|
|3_INTERNET_R_VID_3212|

#### 北京移动Skd747
BJ11fbgor02010100000IGDSUCCSUCC

#### 山西HN8145XR
035109224268
1_TR069_R_VID_4059	Connected	100.84.85.184	4059/7	AlwaysOn
2_INTERNET_R_VID_2	Connected	183.191.173.200	2/0	AlwaysOn
3_TR069_B_VID_4059

#### 广东惠州移动sk748
j006737352
2_INTERNET_R_VID_41 已连接  172.21.27.151  255.255.255.255  
3_OTHER_B_VID_48 已连接  -  -  
4_OTHER_B_VID_50 

#### 黑龙江移动
user TSC4%#sX

2_INTERNET_R_VID_57
5240321213

15240321213

#### 广东移动
19806408897@139.gd
408897



#### 山东联通hs8145
ly20026112

1_TR069_R_VID_50	50/6	IPv4
2_IPTV_B_VID_2581	2581/3	IPv4
3_INTERNET_R_VID_3107	3107/0	IPv4/IPv6
8_TR069_B_VID_50

053501049964
宽带密码 007008

8673ONkHwQ7f9d5xBz5T

MTU 1492
VLAN ID设置：140
公共组播VLAN设置：-1
LAN 端口绑定：LAN1
059106158238 158238

loid 5910320609729 ztepon  
5910320600335

#### 江苏一网通
43
JTL15722844204

#### 山东联通DT541-csf
JI21032538254677


#### 山西太原联通G7610
2
035102488768
1234567890

#### 江苏集客
a795558988
31
JTG18795558988

#### 内蒙古联通B866-S1-4E1P3W1
HH08977033011112176
1_TR069_R_VID_887	Connected	101.52.77.37	887/6	AlwaysOn
2_INTERNET_R_VID_47

#### 河南联通741-csf
180-tr069
275
037104676475

loid
5245860434
user
b767gn3p

#### 河南联通F7610U【】
user
efayt3t2
0781621444
039507828711
123456
2_INTERNET_R_VID_295

#### 河南联通F7610U【注册40 删tr069】
0781621480
039507156379
2_INTERNET_R_VID_296
1_TR069_R_VID_180

#### 河南移动驻马店dt720-csf，陕西移动dt720【无pass】
192.168.1.1/ajax_user_register.gch
6016356310201030000IGDSUCCSUCC-1312374208
4031
17657919835

#### 山西联通TEWA 1208G
2
035102494865

#### 辽宁联通F677
2166329600
10
3_OTHER_B_VID_40
fxx3343918

#### 吉林联通PT928【】
user
m2e6uy2s
43101HW529884575

043102663700

1_TR069_R_VID_41	41	IPoE	禁用	up	172.33.215.254	255.255.224.0	c0:7c:90:66:7a:07	ERROR_NONE
2_INTERNET_R_VID_44	44	PPPoE	启用	up	119.53.59.253	255.255.255.255	c0:7c:90:66:7a:08	
3_IPTV_B_VID_45	45	br1483	启用	up			


#### 山东联通sk-d540
H007141447 
user 
kmk5cd6g

1195
tr069-43
053904625339

#### 广东茂名移动h3-2r
n788638262
2_INTERNET_R_VID_41	已连接	172.22.160.64	255.255.255.255
3_OTHER_B_VID_48	已连接	
4_OTHER_B_VID_50

#### 广东茂名移动GM220s
9Umus9a$
15768226708
n682267082

#### 北京移动sk-d747
BJ11fbgor02010100000IGDSUCCSUCC

#### 山西HN8145XR
035109224268
1_TR069_R_VID_4059	Connected	100.84.85.184	4059/7	AlwaysOn
2_INTERNET_R_VID_2	Connected	183.191.173.200	2/0	AlwaysOn
3_TR069_B_VID_4059

#### 广东惠州移动sk748
j006737352
2_INTERNET_R_VID_41 已连接  172.21.27.151  255.255.255.255  
3_OTHER_B_VID_48 已连接  -  -  
4_OTHER_B_VID_50 

#### 山东联通G7615
3791
50
1_TR069_R_VID_50
2_IPTV_B_VID_1367
053302769217
ZBJQ05100533027692173530

#### 广东惠州746
13928389071@139.gd
j2838907122010100000IGDSUCCSUCC


#### 内蒙古联通F697
2_INTERNET_R_VID_47
1_TR069_R_VID_887
4_INTERNET_B_VID_48
5_IPTV_B_VID_46
047203360954
BT03360954011114322
BT03360954011114322
TeleCom_586986

#### 山西联通7610
2
2
035102488768

#### 甘肃移动h10-1g
CMDC9E00BC7D
A19TJSE6ES
2_INTERNET_R_VID_56	ppp0	PPPoE	56	0
1_TR069_R_VID_57	nbif0	DHCP	57	7
4_VOIP_R_VID_58	nbif3	DHCP	58	6
3_IPTV_B_VID_51	nbif2	桥接	51


#### 惠州移动gm232
Password
nj24t7mk
41
13532121638@139.gd


#### 北京移动skd748
pap2m6u5
10
068880191833


#### 广东湛江移动TEWA 272
k2820375822010100001IGDSUCCSUCC2898736
13828203758@139.gd
41

#### 山西联通741
de9pamk5CUAdmin
_TR069_R_VID_4059
2
035701153595

下载
tftp -p -l hw_ctree.xml -r hw_ctree.xml 192.168.1.5
上传
tftp -g -l hw_ctree.xml -r hw_ctree.xml 192.168.1.5 


#### 江苏移动GM220s
3_OTHER_R_VID_2030
40
13952168548
643829

#### 广东肇庆移动TEWA 272
u2722297222010100001IGDSUCCSUCC2604944
33
13727222972@139.gd


#### 江苏集客H60
a426095094
INTERNET_R_VID_68
OTHER_R_VID_2030

#### 内蒙古联通F677
HH04547506006245629
47
047104547506
113023
1_TR069_R_VID_887
3_IPTV_R_VID_46

#### 吉林联通PT928
user
m2e6uy2s
43101HW529884575

043102663700

1_TR069_R_VID_41	41	IPoE	禁用	up	172.33.215.254	255.255.224.0	c0:7c:90:66:7a:07	ERROR_NONE
2_INTERNET_R_VID_44	44	PPPoE	启用	up	119.53.59.253	255.255.255.255	c0:7c:90:66:7a:08	
3_IPTV_B_VID_45	45	br1483	启用	up		

#### 河南联通G7615【v2辽宁，河南可删069，山东不行】
1038056673
1_TR069_R_VID_180
22
037106512487


#### 安徽联通g-140w-ug
5570336380
1009
055709598847
_IPTV_B_VID_282
tr069-999

#### 山西华为联通HS8345
2
035902226054
yc5521622

#### 沈阳移动GM630【重置】

user
^69X3t9^@C1

1514
loid
SYCM12474314
完成，重置多次

#### 山东联通华为
p7946yx8
display current-configuration

3320
iptv1221
tr069-50
loid
ZBLZ05310533025306680113

g42w7tc8

注册后重新下发覆盖。。。

#### 安徽移动GM630【重置telnet密码不对】

user
pAGF9

41
开启telnet后，root密码非pAGF9@C1
直接改桥接地址（电信页面）
[http://192.168.1.1/bridge_route.gch](http://192.168.1.1/bridge_route.gch)


#### 广州增城换猫HG261G换华为HG8247

user
CUAdmin

cuadmin741e93
069-46
41
iptv45

loid
2041616537

GZ1234734694@16900.gd

#### 辽宁联通

loid
2022649054
2_INTERNET_B_VID_2645

无法重置为标密

#### 河南联通HS8346X6

loid
1155500047

user
zyl0107

3_INTERNET_B_VID_22
2_IPTV_R_VID_23
1_TR069_R_VID_180

#### 河南联通G7615
user
d7c2sfff
5281527244
2_INTERNET_R_VID_280
1_TR069_R_VID_180
037104971145
5281527244

#### 贵州移动sk-D849
56
tr069-57
iptv-51
voip-58
loid
ARTM08G8IL
2010100001IGDSUCCSUCC-233463408

#### 内蒙联通
1_TR069_R_VID_887	Connected	101.59.118.72	887/6	AlwaysOn
2_INTERNET_R_VID_47	Connected	10.14.230.31
HH08976476011143501

047108976476
054555
HH08976476011143501

#### 福建移动skd742
loid
5981703552
400-
tr069-401
13850811696

#### 山西移动GM232
13903424391002


#### 山西联通HS8345
nmp2vdav
2
035801060645
IPTV_B_VID_4057

#### 河北联通G7610
5afsf446
2_INTERNET_R_VID_3385
031101271393@adsl
3998-tr069
3_IPTV_B_VID_2501


#### 广西友华pt939
4001
2_INTERNET_R_VID_666
5922100174494899
18593231956
123456

#### 山西华为HS8345
035701288157
1234567890
1_TR069_R_VID_4059
2_INTERNET_R_VID_1077


#### 辽宁联通F677
NTERNET_R_VID_10
OTHER_B_VID_40
TR069_R_VID_46
fxx3353481

2166880887

2166880984
fxx3353512
10

#### 吉林电信AC-8 
|1_Internet_B_41|IPv4|桥模式（桥接口：bvi0）|暂无设置|-|-|连接
|3_Management_R_46|IPv4|路由模式|DHCP获取IP地址|10.223.197.2|10.
loid
4381LO05473240


#### 河南联通HS8345
zcu4xxjj
5258082277
312


#### 内蒙古联通B665
HH08961719011151727
2_INTERNET_R_VID_47
tr069_887

047108771296
771296


HH08771296011151561
2_INTERNET_R_VID_47

#### 河南开封HG6345
CUAdmin71527473
3359
037806462544
123456
5281761765

#### 云南移动
loid
0874XWZ0edefcfb0c
sn
ZTEGD24AA539

#### 北京移动gm232
loid
BJ1l1fk5kd

a66fhhfj
10

#### 河南联通
0177065332
22

#### 天津联通
loid
TJXQ0003712479
282

#### 新疆电信
uu5xu
41

#### 北京联通TEWA-861E
user
g4p4p9e2
id 3961

宽带账号密码
990007071277
B5t4f0b8

#### 云南移动
41
loid
0871CGH58aa1fbdb0

#### 河南联通
loid
0876674339
vlanid 22
宽账号密
039205876624
123456




广东湛江移动272
k4801690a22020100001IGDSUCCSUCC-1313509112
13794801690a@139.gd

41

广西桂林联通pt928
5923020276850408

77350861708
123456

1_TR069_R_VID_4001	4001	IPoE	禁用	up	10.144.38.67	255.255.192.0
2_INTERNET_R_VID_666	666	PPPoE	启用	up	172.17.192.86	255.255.255.255
3_IPTV_B_VID_3500	


__ENC__2218E30901D0B216E6C6F44875352373

18721172735


广东联通TEWA 800
2041463522


山东联通华为
1_TR069_R_VID_50	Connected	10.226.58.77	50/6	AlwaysOn
2_IPTV_B_VID_43	Connected	--	43/3	AlwaysOn
优先级3，组播80
3_INTERNET_B_VID_3264
H005507169


浙江移动F663
t4289306ic
jhjda57904908
CMCCAdminYt*Ir6Hb

广东茂名232
41
n660614992
15766061499@139.gd
CMCCAdminPy2*i9En
i5htH2P#@C1


7Tfn7!6*

河南联通F677
2924
039605125241

0839263491

连接名称	3_IPTV_R_VID_20
NAT	启用
IP	10.45.174.108/255.255.248.0
DNS1	10.253.224.68
DNS2	10.253.227.68
DNS3	0.0.0.0
WAN MAC	e8:b5:41:af:f1:62
网关	10.45.168.1
连接状态	连接
剩余租期	8408秒


江苏企宽带skm724
ahynm3mkaDm8H%MdA
79
a797417005201010002INTERNET

河南联通F657
22
23-iptv，桥
1232707800

湖北联通F657
T008526C0G1314004G
48tr069
58iptv
49
071704808172

四川联通
pn3anmdeCUAdmin

山西联通F477
e47e9acf3452
3_INTERNET_R_VID_2233
035103272034
4_IPTV_B_VID_4057

广东江门移动h3-2r
41
g761644652


--------------------------------------------
湖北联通v173
1_TR069_R_VID_48	Connected	10.43.178.156	48/7	AlwaysOn
2_INTERNET_R_VID_49	Connected	100.66.35.159	49/0	AlwaysOn
3_IPTV_B_VID_	Connected	--	-/-	AlwaysOn
4_IPTV_R_VID_59	Connecting	--	59/0	AlwaysOn
8_TR069_B_VID_48	Connected

02704596487
T008539C0G1315001G

13651675316
768814



2
91iptv
WL028310766

--------------------------------------------
深圳联通pt928g
755567835


山西联通5588
4059
1839
035401102529
666888

福建联通F170

1_TR069_R_VID_130	Connected	172.44.137.53	130/7	AlwaysOn
2_INTERNET_R_VID_140	Connected	
059503504267

5951010065560

山东联通sk740
BZ00154319
67gb9kb3


黑龙江移动skd746s
ji6hdc217a2010100000IGDSUCCSUCC
41
yd13946674268

江西
i9520543ge
49  tr069
47
15970276568

-----------------------=---
#### F657
0749399949
266	
039507862665
123456

模式	DHCP
连接名称	2_IPTV_R_VID_20



#### 甘肃移动GM630
ALHY1BQ316
n4gj6YUw@C1
3115192011406
56


731X15973002
2001


#### 广东珠海移动
h269276885
18926927688@139.gd
模式	PPPoE
连接名称	2_INTERNET_R_VID_41
连接名称	3_OTHER_B_VID_48
连接名称	4_OTHER_B_VID_50

#### 内蒙古v173
1_TR069_R_VID_887	Connected	109.197.188.46	887/6	AlwaysOn
2_INTERNET_R_VID_47	Connected	10.90.106.211	47/0	AlwaysOn
8_TR069_B_VID_887
XL08419322009847582
047908419322

#### 湖北移动zn173
7132015148
13995927522
888888

#### 山东联通F457
43iptv
3620
053805866870
TA03566181


#### 山东华为
JI22012466699972

053703460319
80zubo
1_TR069_R_VID_50	50/6	IPv4
2_IPTV_B_VID_2092	2092/3	IPv4
3_INTERNET_R_VID_3248

shanxi liantong   7610
035400646930

#### 广东汕头移动H2-3s
f705193532
INTERNET_R_VID_41	

#### 黑龙江移动F6610
41
37

a5fu1h2e98

#### 四川联通dt741
NC605973665X0116003
103
081702258412

3300-iptvbrid


#### 辽宁联通F677
2123628354
syl_13238823979@rhrzk
2

#### 广东汕尾移动H2-3
2xq9bs7#
loid
s529988063

#### 新疆电信TEWA 1006G【可改桥接】
099681457600
9960562301C

#### 内蒙古联通znhg605
WH03040005010567982
1_TR069_R_VID_887	已连接	103.7.137.13	255.255.224.0
2_INTERNET_R_VID_47	已连接	10.31.27.7	255.255.255.255
3_IPTV_B_VID_46

#### 山东联通sk740
JN28845100
053107717019
3221

iptv43

n3fpu9dh
CUAdmin

#### 福建联通

5950610188418
140
059507571577


#### 辽宁联通dt741

2112717806 
user 
u5bpherplnadmin



#### 广州移动272
13802731648@139.gd
41


#### 山东联通sk740
JN28845100

053107717019
3221

iptv43

n3fpu9dh
CUAdmin

#### 山东联通f657
LC05529090
063508715194
3622

#### 内蒙古联通V173
HH08961711011174671
47


#### 福建联通TEWA 1206
140
059505066062
5950510761875


#### 河北移动GM219S
3139171965
537
13613227653


#### 江西移动贝尔GW-140-G
l0117231ca
47

#### 惠州移动
j
j995100232
SCTY15AE24DD

#### 山东联通F607z
0554723578
037306532412
22


#### 新疆移动TEWA 272
KS0437169982010100002IGDSUCCSUCC2504736


#### 佛山移动t66
d285588565

#### 汕头移动272
f1727805922010100001IGDSUCCSUCC2521376
15017278059@139.gd
41

#### 内蒙古联通skd745
tr069-887
3_IPTV_B_VID_46
HH08987132011085801
HH08987132011085801
047108987132
47
npuguk2c

#### 天津联通F30
TJBC0007573036
2_INTERNET_R_VID_134
02205595004

#### 福建移动F663
5913895360

#### 韶关移动F663
p197379542

#### 江苏移动一网通M724
37
jtczjssd661607
assd661607
ykh36cfgadmin1234

#### 深圳移动skd742
b2853266a22020100000IGDSUCCSUCC2702576
41
13922853266a@139.gd


#### 广东汕尾移动H2-3
2xq9bs7#

s529988063


#### 安徽联通H8145
5580362054
1136
055809556636

282-iptv
优先级4桥接
iptv组播281

####  深圳移动skd841
b895726642
41
15889572664@139.gd


#### 福建联通PT928G
jxbwsqq
5950510034440

140
059505086750
086750

#### 山东联通
BZ56954641
3142
054301625452


#### 福建联通HS8345
5920110043088
140
iptv136
4000


#### 河南联通F677
0633273753
3636
037707265793

山东烟台联通PT952
zf99949056
3566	


黑龙江移动sk742
actm35p1k6
41
yd15244615358


山东联通V170
H503385380
iptv43
组播80
优先级3
2567
063102869982



#### 山东联通sk740
HS42271425
3280
u6np3em6


#### 内蒙古联通
47
HH08773344011193047


浙江电信
ha4D48Y7b6
5755SN209566519
41
46tr
057584414056

山东联通F677
zf85657994

053501898995
3578
2_IPTV_B_VID_2522

内蒙古联通
4857544366EC8BAD (HWTC66EC8BAD)
loid 
HH08773344011193047 注册id
047108773344宽带号
210617 密码


4857544366F053AD (HWTC66F053AD)
HH08775109011193068 注册id
047108775109 宽带号
210617 密码

HH05407437010858329 注册id
047105407437 宽带号
104622 密码


辽宁联通741
2159298587 
bp7bdpcclnadmin 

山东联通sk740
HS42271425
3280
u6np3em6

#### 山东联通PT927G
ZQ71615880
053105905108

1_TR069_R_VID_50	50	IPoE	禁用	已连接	10.76.120.91	255.255.240.0	88:ac:9e:5f:7d:05
2_IPTV_B_VID_564	564	br1483	禁用	已连接			88:ac:9e:5f:7d:06
3_INTERNET_R_VID_3030	3030	PPPoE	禁用	已连接	10.181.222.189	255.255.255.255	88:ac:9e:5f:7d:07
4_INTERNET_B_VID_3030	3030	br1483	禁用	已连接



#### 山西联通TEWA 1206G
2170
035102229757
1234567890

#### 吉林移动F653
LOID 15598130

Password 15598130

SN ZTEGD05F892C

2_INTERNET_R_VID_4031

VLAN 4031

用户名 10512134667

密码 112233

#### 江西移动GM220-s
47
CIOT08E6A4E8
k1355773lf
XfvNe!Xf
15979997238
809510
CMCCAdmin06@R^NwM


#### 辽宁联通B665
46
10
40other

2080159279


1_TR069_R_VID_46	Connected	103.11.38.186	46/0	AlwaysOn
2_INTERNET_R_VID_10	Connected	116.138.116.218	10/0	AlwaysOn
3_OTHER_B_VID_40	Connected	--	40/0	



#### 贵州联通V173

085105609523
1_TR069_R_VID_46	Connected	10.170.161.127	46/7	AlwaysOn
2_INTERNET_R_VID_41	Connected	10.51.123.160	41/0	AlwaysOn
3_IPTV_B_VID_43	Connected	--	43/4	AlwaysOn   组播3701
8_TR069_B_VID_46


#### 河南联动DT741-csg

040159353737
273
037502030624
123456
55tm92ufCUAdmin

内蒙古联通v173
ER04239212010255997
47
047704239212

46
组播3800
Sx32K*j7ya
sismac 1 512 CIOT24C127C8
39
15961201320
102030

sidbg 1 DB set PDTCTUSERINFO 0 Status 0  
sidbg 1 DB set PDTCTUSERINFO 0 Result 1  
sidbg 1 DB save

甘肃移动H3-2s
F4BFBB-CMDCA47FA388
ADRIY1PB10
56
5000376164179
401171
tr069 57

苏州电信
D8F50704B4C8

江苏一网通H2-3e
38
JTB15852574316
a852574316

山东联通F457
TA03566181
3620 
_IPTV_B_VID_43 
053805866870


江苏F631
a043742859
2_INTERNET_R_VID_38
WJTnj25034043742859

山西联通
384
035902245099

广东联通F677
2040811941
41
GZFTH9368768882704384@16900.gd
123456
46-tr069

IPTV_B_VID_45

上海移动
51383733

江西移动GM220-s
47
CIOT08E6A4E8
k1355773lf
XfvNe!Xf@C1
15979997238



辽宁联通B665
46
10
40other

2080159279


1_TR069_R_VID_46	Connected	103.11.38.186	46/0	AlwaysOn
2_INTERNET_R_VID_10	Connected	116.138.116.218	10/0	AlwaysOn
3_OTHER_B_VID_40	Connected	--	40/0	



贵州联通V173

085105609523
1_TR069_R_VID_46	Connected	10.170.161.127	46/7	AlwaysOn
2_INTERNET_R_VID_41	Connected	10.51.123.160	41/0	AlwaysOn
3_IPTV_B_VID_43	Connected	--	43/4	AlwaysOn   组播3701
8_TR069_B_VID_46	


河北移动F
6030413389


广东联通
2041216235
GZFTH3244914212192256@16900.gd

上海电信F450G
0075586819

上海移动HX3-5
82622118
tr110
voip1102
other1103
1101
15921568390

山东联通F437
HZ08161510
tr50
3227
053003520212
IPTV_B_VID_43

山西联通
405-tr069

1111
035501172203
1234567890


68DECE3608D0
1139
035501590618

68DECE357B20
1123
035501582807

fwmnyggw
3086F18BB2D0
1072	
035501603771

hhf53bwq
3086F18BCFB01148	
1148	
035501582798
-------------
rvsg5p2a
3086F18BB290
2_INTERNET_R_VID_1112
035501578932

nk9fapyr
68DECE361070
1076
035501602469

cuj3p3vj
1137
035501582179

ts92566u
68DECE35C4F0
035501178684
1022

zqgrtqun
68DECE35B550
1024
035501591180

惠州移动ZN M160
j3352640242010100000IGDSUCCSUCC
41
13433526402@139.gd


天津联通hx8145
TJHP0000983486
396

1_TR069_R_VID_4000	4000/7	IPv4
2_VOICE_R_VID_3312	3312/5	IPv4
3_INTERNET_R_VID_396	396/0	IPv4/IPv6
4_IPTV_R_VID_2165	2165/3	IPv4
8_TR069_B_VID_4000	4000/7

吉林h2-3s
691403
1_TR069_R_VID_192	已连接	10.0.87.231	255.255.128.0
2_INTERNET_R_VID_4031	已连接	100.127.150.127	255.255.255.255
3_OTHER_B_VID_4033	连接中	-	-
4_VOIP_R_VID_4032


山东联通V173
JI21061959145659
3301
053703209844
1_TR069_R_VID_50	50/6	IPv4
2_IPTV_B_VID_2066	2066/3	IPv4
3_INTERNET_R_VID_3301	3301/0	IPv4/IPv6
8_TR069_B_VID_50	50/6	IPv4


山东联通F477
TA03566181
3620
053805866870
50 tr
43

四川联通SG617

LS604360680X0402006
ztepon

106
083401715936

iptv3300  brid，ip 组播4075
voice3500
tr6060
LS604360680X0402006


#### 河南电信TEWA 1102E【su工具计算正确】
3711XE102388194

46tr069
41
637141279986
telecomadmin20867957

#### 天津联通dt541
397
02201822871
123456
TJBC0000828457

模式	Static
连接名称	5_VOICE_R_VID_3574
NAT	启用
IP	172.18.238.74/255.255.255.0
DNS1	10.30.1.10
DNS2	0.0.0.0
DNS3	0.0.0.0
WAN MAC	30:91:76:8f:0a:2c
网关	172.18.238.1
连接状态	连接
模式	DHCP
连接名称	4_IPTV_R_VID_2551
NAT	启用
IP	10.40.66.58/255.255.224.0
DNS1	202.99.96.68
DNS2	202.99.104.68
DNS3	0.0.0.0
WAN MAC	30:91:76:8f:0a:2e
网关	10.40.64.1
连接状态	连接
剩余租期	39263秒

湖南联通F657

074600083887
168168
iptv

苏州联通PT925【注册不会下发，40%】
0512051087689974
2077
051205108768

#### 广州联通F607z

  2041874728
  3_IPTV_B_VID_45
  41
  GZFTH9603361964318720@16900.gd
  12345
  
#### 山东联通F457
 LC39685072
 3659
 lc90091329

#### 安徽电信DT720-cs
loid：340563TI77923
41
【开telent】

#### 河南联通F7610
0782470921
2_INTERNET_R_VID_277
039507667622

#### 河南联通sk840
0781665630
275
039507150502

#### 河南联通F7610
0782463356
276
039507665026

#### 河南联通sk840
0781665572 
274
039507716773


#### 贵州换猫
68AE04-ZNXT0412CB48 
INTERNET_R_VID_41 
17885513854

#### 云南移动H3-2s
41
w18469134967
宽带密码100861

#### 河南联通友华PT
0783331981
280
039507781539


0782470889
278
039507228820

0778165637
273
039507665736


0783323349
279
039507758316

内蒙古sk d745
BT03634481010773880
47
047203634481

#### 山东烟台联通HN8145XR
zf96628587
tr 50
iptv 2648  优先级3，组播80，桥接
3010
053502196602


#### 内蒙古联通F677
BT03255407006021508
047203255407
47

#### 河南联通F7610
0982210348
22
039402711757

山东联通V173
JN70235132
_VID_3611
053101717460
iptv43 3  80

辽宁dt741
2112827487
10
fxl01024652
PMsqPtst4J
河南
0169621828
22
039404269371
lnadmin71189191

山东G7615
DZ86582935
3118
053402660140
FE9192EECABB

山西华为h
2
035901198675
iptv 4057、组播4060

山西联通F677
2
jst355093375
ZTEGCCBB26DB


黑龙江联通dt741
451000036294023
451000036294023 
2528
chmnthft8MCU@HLJ

内蒙古联通7615
TL03319022011465659
47
047503319022

辽宁联通F657
2096638985
2007
dl24844071@163
434D 8566 7F39 F
CMCCAdmin6k874Q52

山西联通华为
ghn686ya
2
035702879388

上海联通华为
000000000000000013221053
2_INTERNET_R_VID_979
02100355749

河南联通
2979672803
1065
037106987639
2_IPTV_R_VID_99

福建联通TEWA 1206
140
059108093354
MTIzNDU2=2

辽宁联通
2153281379
36
syl_00414627
ZTEGD3F8C61B

江西联通
ZTEGD259961E
3_IPTV_B_VID_20
10
079700812519

安徽联通H80
5510585456
1626
055109009567
282  组播281

内蒙古联通贝尔140
BT03317001011347707
47
047203317001
iptv46

山东联通F657
HZ02203425
iptv1084
3400
053002843906

河南联通联通F7610
0783331981
280
039507781539


0782470889
278
039507228820

0778165637
273
039507665736


0783323349
279
039507758316

山东潍坊联通G7615V2
WF35659037
3611
053606648643
iptv43 bridge

#### 山东联通g7615V2
ZBND05920533028755805848
3017
053302875580
3999

iptv1275

福建联通F477
5960920042762
3372
059607506434


安徽联通
5580433371
1194
055809272611


福建联通HS8345
5910320166093
2_INTERNET_R_VID_2316
059107818601
123456


山东烟台联通
mp93613790
3602
053504345154
2_IPTV_B_VID_43


安徽电信TEWA 707G
340552PR64983
41


上海联通
000000000000000013539837
853

山东联通
H005614414
181
lyys000033774

上海联通F4610
000000000000000012892552
829
02100576780


浙江台州移动
m7349054r1
4031
tzlqb86068298

#### 安徽联通F677
5580433371
1194
055809272611

模式	DHCP
连接名称	4_VOICE_R_VID_47
NAT	关闭
IP	10.160.151.229/255.255.252.0
DNS1	255.255.255.255
DNS2	255.255.255.255
DNS3	0.0.0.0
WAN MAC	94:28:6f:89:ca:69
网关	10.160.148.1
连接状态	连接
最近一次失败原因	未知原因
剩余租期	3687秒
模式	Bridge
连接名称	2_IPTV_B_VID_282

四川移动UNG301Z
719865169
tr104
101
15708394523
934510

辽宁联通G7615
2143099748
1205
tslan_08110669

上海联通PT1250
000000000000000013511880
2_INTERNET_R_VID_811
02101170665
tr28


江西联通F677V2
tr30
10
079606091554

江西联通F657
宽带账号：079502221607
密码：123456 
10
4CAC0A-01FFFFFFFF011FFF23
ZTEGD67F9E4EAA
CUAdminD67F9E4E

河南联通HS8145XR
5766388131
22
037102221469

1_TR069_R_VID_180	Connected	65.97.146.214	180/6	AlwaysOn
2_INTERNET_R_VID_22	Connected	125.46.238.45	22/0	AlwaysOn
3_IPTV_R_VID_23	Connected	10.6.244.62	23/0	AlwaysOn
8_TR069_B_VID_180	Con


037102221469IPTV@iptv.ha
组播96

江苏sk-m424
SKYWA8E761DD
3_OTHER_R_VID_2030	0	0	0	0
1_TR069_R_VID_4015	194719	2845	180540	2858
4_VOIP_R_VID_3951	0	0	0	0
5_OTHER_R_VID_1031	0	0	822690	1385
6_INTERNET_B_VID_


1	1601	VJTwx51041445817aaaj	789789
2	1602	VJTwx51041445817aaai	789789
3	1603	VJTwx51041445817aaah	789789
4	1604	VJTwx51041445817aaag	789789
5	1605	VJTwx51041445817aaaf	789789
6	1606	VJTwx51041445817aaae	789789
7	1607	VJTwx51041445817aaad	789789
8	1608	VJTwx51041445817aaac	789789
9	1609	VJTwx51041445817aaab	789789
10	1610	VJTwx51041445817aaaa	789789

辽宁联通
2181939266
10
fxl09938613

#### 甘肃联通HS8346V5
83387580174
000000
1_TR069_R_VID_4046	4046/6	IPv4
2_INTERNET_R_VID_4041	4041/0	IPv4/IPv6
3_VOICE_R_VID_4045	4045/5	IPv4
4_IPTV_B_VID_4043	4043/4	IPv4
宽带
093310011720

CUAdmin%**K?mf8

上海电信AC-8
1_Internet_R_
 IPv4
 路由模式
 虚拟拨号(PPPOE)
 180.171.190.216 
 116.228.111.118, 180.168.255.18 
连接
修改
 2_Management_Voice_R_46
 IPv4
 路由模式
 DHCP获取IP地址
 29.2.124.227 
 15.192.252.188, 15.192.251.188 
连接

loid：0075718785
mac：98-00-74-2b-40-7a
宽带账号：ad85079218

内蒙联通G7615
TL03218190009402014
47
047503218190

陕西西安移动H3-8s
XA04460141
100
13572010428

山东联通F457
H503530269
2027
wh4406657

河南濮阳联通dt-741csf
loid：1185429673
loid密码216811（实际不用）
1334
039303929170
123456

山东联通F457
H007710108
3517
053905508177

2_IPTV_B_VID_43  bridge

内蒙古移动GM620
who9q1xz
13848854442
41

h9ux74JW@C1

内蒙古联通F677
CF08693935008645478
47
047608693935

内蒙古移动H2-2，注册会重启
x31thq6b
41

山东联通
TA01105135
4_INTERNET_R_VID_3672
053805168126

5_INTERNET_B_VID_3671

IPv4信息
WAN名称	状态	IP地址	VLAN/优先级	连接
1_TR069_R_VID_50	Connected	11.150.108.253	50/6	AlwaysOn
2_IPTV_B_VID_43	Connected	--	43/4	AlwaysOn
3_VOICE_R_VID_1120	Connected	11.28.64.103	1120/0


山东联通
JN65052174

3026
053102119867

内蒙古移动ZN-M142G
ozfh4y2m
41
157547503020001
750302

山东济南联通DT741
JN12222932 
3_INTERNET_R_VID_3309
053105497093
3cnfp9u6





--------

## 网站
恩山：https://www.right.com.cn
宽带技术网：https://www.chinadsl.net/
csdn：

## 失败


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
d
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
北京地区：联通光猫TEWA-800E超级管理员(亲测有效)
```
document.getElementById('loginfrm').setAttribute('method','get');
document.getElementById('username').value = 'CUAdmin';
document.getElementById('password').value = 'CUAdmin';
document.getElementById('loginfrm').submit();
```
document.getElementById('loginForm').setAttribute('method','post');
document.getElementById('loginUsername').value = 'lndmin';
document.getElementById('loginPassword').value = 'lndmin';
document.getElementById('loginForm').submit();


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
192.168.1.1/userconfig/cfg/db_user_cfg.xml
192.168.1.1/backpresettings.conf
192.168.1.1/backupsettings.conf
192.168.1.1/fhconf/backpresettings.conf
http://192.168.1.1/servmngr.html
192.168.1.1 输入密码进去看到自动拨号页面  然后在原页面上打
```
192.168.1.1/backupsettings.conf
```
192.168.1.1/

#### 北京联通绕过超管TEWA，注意修改id名
```
document.getElementById('loginfrm').setAttribute('method','get');  
document.getElementById('username').value = 'CUAdmin';  
document.getElementById('password').value = 'CUAdmin';  
document.getElementById('loginfrm').submit();
```


https://www.right.com.cn/FORUM/thread-8253868-1-1.html
【[https://blog.csdn.net/nordpol/article/details/124937187](https://blog.csdn.net/nordpol/article/details/124937187)】  
详情步骤：  
【1】保证正常访问光猫web  
  
  
【2】再打开这个链接，开启telnet功能。（打开隐藏配置界面：
```
192.168.1.1/hidden_version_switch.html
```
勾选telnet功能，一闪而过不用在意。）  
  
  
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

```
cp /home/httpd/web/net_eth_links.asp /var/
```

2. 输入编辑这个文件。`vi` 是著名的非常难用的编辑器，因此我们一步步来：
```
vi /var/net_eth_links.asp
```

    1. 输入，然后回车，
```
/is_configurable
```


3. 输入 ，回车运行。
```
mount --bind /var/net_eth_links.asp /home/httpd/web/net_eth_links.asp
```