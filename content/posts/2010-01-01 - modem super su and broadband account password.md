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

湖南移动：（光猫SN开头第三位开始取3位）+ 8m% +（光猫SN结尾取3位）
江西联通：CUAdmin + SN后8位大写
北京电信：bj + mac后6位大写

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
海南：cuadmin，cu@HNunicom 
黑龙江：hljcuadmin，8MCU@HLJ

#### 广东联通
广东省联通光猫超级密码汇总，广东联通用户可以自行测试超密。
全省智能网关（HGU）光猫自动开通实行路由模式，自动开通后无需拨号直接插网线使用，
如有不需要路由模式可以将光猫调测为桥接模式，
方式如下，
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

### 广东广电

```
operator
```

```
operator123
```

### 贵州广电

初始
```
admin
```

```
aDm8H%MdA
```

### 福建广电

初始
```
FJGDAdmin
```

```
96311.com
```


动态
DT741，NL-5200(新大陆)，类似友华界面。

先登录背部admin，然后F12，控制台，输入确认
```
fetch('/boaform/formSaveConfig', {  
  method: 'POST',  
  headers: {  
    'Content-Type': 'application/x-www-form-urlencoded'  
  },  
  body: 'save_cs=1'  
})  
  .then(response => response.text())  
  .then(result => {  
    if (result.includes('userreg.asp')) {  
      alert('特么请先登录啊！')  
    } else {  
      prompt('您的 FJGDAdmin 密码为', getField(result, 'SUSER_PASSWORD'))  
    }  
  })  
  
  
function getField(str, name) {  
  let valueLine = str.split('\n').find(x => { return x.includes(name) })  
  return valueLine.trim().split('" Value="')[1].replace('"/>', '')  
}
```


### 陕西广电

HGU B1型家庭网关 型号: GL3100B1
登录后，打开下载，搜索，超密为四位数字
```
192.168.1.1/romfile.cfg
```

### 四川广电

```
SCCNmadmin
```

```
DK@5ui%9
```


#### 中兴F607ZA
查看超级管理员密码
Telnet连接光猫，用户名root，密码Zte521，输入命令
```
sendcmd 1 DB p DevAuthInfo
```
即可查看所有的用户名密码，

### 中兴猫复位

关机，重新开机，等红灯闪时迅速捅下复位孔，保持，直到所有灯亮。

### 中兴1.6

#### 中兴开telnet 6

网卡地址
```
000729553557
```
tftp下载文件
```
tftp -p -l userconfig/cfg/db_user_cfg.xml -r db_user_cfg.xml 192.168.1.2
```
老版
```
.\2.exe -l xxx open -i 192.168.1.1
```

```
.\1.exe --user CMCCAdmin --pass aDm8H%MdA -- 192.168.1.1 80 telnet open
```
.\1.exe --user CUAdmin --pass CUAdmin -- 192.168.18.1 80 telnet open
执行命令
新版固件要改网卡

```
./7.exe -i 192.168.1.1 --port 80 --user factorymode --pass nE%jA@5b --new --telnet
```

```
./7.exe -i 192.168.1.1 --port 80 --user CMCCAdmin --pass aDm8H%MdA --new --telnet
```

```
./7.exe -i 192.168.18.1 --port 80 --user CUAdmin --pass CUAdmin --new --telnet
```

```
./7.exe -i 192.168.2.1 --port 80 --user lnadmin --pass lnadmin --new --telnet
```

电信
```
./6.exe -i 192.168.1.1 --new --telnet
```
执行结果，如果一直报异常错，可能网卡没改，网卡不行。
```
ZteONU 0.0.6 (github.com/thank243/zteOnu) 
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
step [2] send sq: ok
step [3] check login auth: ok
step [4] enter factory mode: ok
-----------------------------------
user: root
pass: Zte521
```

#### 电信光猫查看账号密码命令
查telnet账号(第一个账号密码)
```
gdbus call -y -d com.ctc.igd1 -o /com/ctc/igd1/Network/Telnetserver/Accounts/0 -m com.ctc.igd1.Properties.Get com.ctc.igd1.TelnetAccount UserName
```
查telnet密码(第一个账号密码)
```
gdbus call -y -d com.ctc.igd1 -o /com/ctc/igd1/Network/Telnetserver/Accounts/0 -m com.ctc.igd1.Properties.Get com.ctc.igd1.TelnetAccount Password
```

查看超密
```
gdbus call -y -d com.ctc.igd1 -o /com/ctc/igd1/Network/HTTPServer -m com.ctc.igd1.Properties.Get com.ctc.igd1.HTTPServer AdminPassword
```

查看普管账号密码
```
setmac show2 | grep USERNAME
```

```
setmac show2 | grep USERPASSWD
```

### 中兴ttl开telnet方法6611 7611 7615全系和v2

https://www.right.com.cn/forum/thread-8385678-1-1.html

原理就是把mtd5格式化后，重启一下就行了，这样Telnet就开好了  
  
帐号：root  密码： Zte521  上面是正常情况，如果Telnet端口没  
  
开启，用论坛Telnet工具开一下，会卡在永久开启Telnet那个  
  
代码那，不用管，Telnet是开好了，帐号密码还是上面那个。  
  
移动版  
  
TTL里输入以下命令（复制时别少0）  
  
第一条：nand erase 0x900000 0x800000  
  
第二条：reset  
  
电信版  
  
TTL里输入以下命令  
  
  
第一条：nand erase 0xd00000 0x800000（复制时别少0）  
  
  
第二条：reset  
  
7615V2电信版  
  
TTL里输入以下命令（复制时别少0）  
  
  
第一条：nand erase 0x900000 0x800000  
  
  
第二条：reset  
  
其它版本自己验证，因为我开的多的就是这两种猫


## 成功案例

### 电信小翼管家8.15

https://www.eiahk.com/news/4649.html

老接口，已失效：
```
{ "Params": [], "MethodName": "GetTAPasswd", "RPCMethod": "CallMethod", "ObjectPath": "/com/ctc/igd1/Telecom/System", "InterfaceName": "com.ctc.igd1.SysCmd", "ServiceName": "com.ctc.igd1" }
```

#### 超密查询
抓包后搜索
```
GetPropertyValues
```

选一个，更改
"InterfaceName"
```
com.ctc.igd1.HTTPServer
```
"ObjectPath"
```
/com/ctc/igd1/Network/HTTPServer
```
返回抓包

抓包格式
```json
{  
    "Params": [  
        {  
            "InterfaceName": "com.ctc.igd1.HTTPServer",  
            "ObjectPath": "/com/ctc/igd1/Network/HTTPServer",  
            "Properties": [  
  
            ]  
        }  
    ],  
    "RPCMethod": "GetPropertyValues",  
    "SequenceId": "30134",  
    "ServiceName": "com.ctc.igd1"  
}
```
压缩一行显示：
```json
{"Params":[{"InterfaceName":"com.ctc.igd1.HTTPServer","ObjectPath":"/com/ctc/igd1/Network/HTTPServer","Properties":[]}],"RPCMethod":"GetPropertyValues","SequenceId":"30134","ServiceName":"com.ctc.igd1"}
```

返回数据
```json
{
  "Ack": "GetPropertyValues",
  "ID": "4c5f37f0-1278-7b99-8112-66d6d926d104",
  "Status": "0",
  "Params": [
    {
      "ObjectPath": "/com/ctc/igd1/Network/HTTPServer",
      "InterfaceName": "com.ctc.igd1.HTTPServer",
      "Properties": [
        {
          "AdminPassword": "CUAdminX4h~t7SJ"
        }
      ]
    }
  ],
  "SequenceId": "30134"
}
```

#### 远程绑定

ios版小翼管家，对无wifi的猫，直接二维码能绑定光猫，无需联猫网络。带wifi的也能发起请求，改写一下请求接口名称即可。

用proxy pin，直接配置请求自动重写。

第一条请求重写：绑定光猫

规则如下：
URL
```
https://gwsmarthome.189cube.com:9443/device/sc/gw_scan_bind
```
行为，重定向
```
https://gwsmarthome.189cube.com:9443/device/sc/gw_bind
```


第二条请求重写：查询超密

URL
```
https://nos*.189cube.com/device/api
```
行为，替换请求：
```
{"Params":[{"InterfaceName":"com.ctc.igd1.HTTPServer","ObjectPath":"/com/ctc/igd1/Network/HTTPServer","Properties":[]}],"RPCMethod":"GetPropertyValues","ServiceName":"com.ctc.igd1"}
```

请求重写：查loid和密码
```
{"ServiceName":"com.ctc.igd1","Params":[{"InterfaceName":"com.ctc.igd1.PONInfo","Properties":[],"ObjectPath":"/com/ctc/igd1/Info/PON"}],"RPCMethod":"GetPropertyValues"}
```

请求重写：查vlan id：
```


```




### 电信直接改桥接

TEWA，TCGC 511 特艺直接打开
```
http://192.168.1.1:8080/SO_Wizard.html
```

```
http://192.168.1.1:8080/bridge_route.gch
```

```
http://192.168.1.1/bridge_route.gch
```

### 复制下载配置文件

中兴F660
复制到web根页面
```
cp /tmp/db_backup_cfg.xml /home/httpd
```

直接访问下载
```
http://192.168.1.1/db_backup_cfg.xml
```

### 天邑TEWA

### su密码计算

python在线运行网站：
https://www.bejson.com/runcode/python3/
https://www.json.cn/run/python3/
https://www.w3cschool.cn/tryrun/runcode?lang=python3

```python
def generate_a1(hex_str):
    ct1 = 'QbNUTaMecPWVSKdCgXIJRrsfYXwyqpvnDHWzQuPmAGtAxRTphBcwBnNkjbFmvVMqaFkEutSrDCxsCKjBzEyDEUJTZfHZghMHYFdeASGNaUgFtdbYRkshJHkFNXMcKdfw'
    ct2 = 'NXMcKdfwRkshJHkFaUgFtdbYYFdeASGNZfHZghMHzEyDEUJTDCxsCKjBaFkEutSrjbFmvVMqhBcwBnNkAGtAxRTpDHWzQuPmYXwyqpvngXIJRrsfcPWVSKdCQbNUTaMe'
    ct3 = 'eMaTUNbQCdKSVWPcfsrRJIXgnvpqywXYmPuQzWHDpTRxAtGAkNnBwcBhqMVvmFbjrStuEkFaBjKCsxCDTJUEDyEzHMhgZHfZNGSAedFYYbdtFgUaFkHJhskRwfdKcMXN'
    hex_clean = ''.join(c for c in hex_str.upper() if c in '0123456789ABCDEF')
    if len(hex_clean) < 12: return "MAC错误"
    v19 = [ord(c) for c in reversed(hex_clean[-8:])]
    v10 = next(((c-48|j) for j,c in enumerate(v19) if 49<=c<=57), 5)
    a1, a2, a3 = [], [], []
    for k in range(len(v19)):
        v15 = v19[k] & v19[7-k] if k <4 else v19[k] | v19[k-4]
        v16 = v15 + v10
        if v16 > 127: v16, v10 = k, k
        a1.append(ct1[v16])
        a2.append(ct2[v16])
        a3.append(ct3[v16])
        v10 += max(k, 1)
    return ''.join(a1) + '  ' + ''.join(a2) + '  ' + ''.join(a3)

if __name__ == "__main__":
    print(generate_a1('AAAAAAAAAAAA'))
    #AAAAAAAAAAAA为mac地址，不区分大小写，格式随意，AA-AA-AA-AA-AA-AA 或者 AA:AA:AA:AA:AA:AA都可以

```


#### 电信700G/707G/708G

直接打开ftp软件，进ftp，账号密码是useradmin普通管理员账密，/var/config/lastgood.xml或db_user_cfg.xml，解码，用708G解码，拖拽过去

法1：192.168.1.1  普通管理员进入，关闭电脑防火墙。  
在“Windows PowerShell（管理员）”中按顺序输入命令

输入 ftp 192.168.1.1

输入useradmin 账号密码

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


法1：ftp法
默认开ftp的，账号密码位useradmin背部密码，登录进去后，找到配置文件
海南是 /userconfig/cfg/db_user_cfg.xml
文件和decode.exe放同级目录，运行生成解密文件。

法2：开telnet

1、用su工具开启并计算su

2、光猫复位，用默认超密登录打开以下：

```
http://192.168.1.1:8080/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```

3、可通过ftp修改配置文件后加密后上传实现。

命令如下：
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml
```

配置文件解密算法：
```python
from Crypto.Cipher import AES
from binascii import a2b_hex
KEY = b'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
def decrypt(text):
    cryptor = AES.new(KEY, AES.MODE_ECB)
    plain_text = cryptor.decrypt(a2b_hex(text))
    return plain_text
cfg_file = open("db_user_cfg.xml", "rb")
dec_file = open("db_user_cfg.decode.xml", "w")
file_header = cfg_file.read(60)
while 1:
    trunk_info = cfg_file.read(12)
    trunk_data = cfg_file.read(65536)
    trunk_real_size = int.from_bytes(trunk_info[0:4], byteorder='big', signed=False)
    trunk_size = int.from_bytes(trunk_info[4:8], byteorder='big', signed=False)
    next_trunk = int.from_bytes(trunk_info[8:12], byteorder='big', signed=False)
    print(trunk_real_size, trunk_size, next_trunk)
    dec_file.write(decrypt(trunk_data.hex()).decode(encoding="utf-8"))
    if next_trunk==0:
        break
```

直接改桥接：
```
http://192.168.1.1:8080/bridge_route.gch
```

设备管理选项里 有一个 **扭转注册状态** 的选项按钮 可以将 管理（ITMS）注册状态 扭转为注册成功

![[Pasted image 20250426183919.png]]

#### 电信TEWA 1008V

ftp默认开启，useradmin和他的密码

超管登录后
telnet
```
http://192.168.1.1:8080/enableTelnet.html
```

```
http://192.168.1.1/enableTelnet.html
```

卡bug进root
打一个;并回车，此时会报错：sh: syntax error: unexpected ";"，不用管它，这时执行命令
```
echo $USER
```
就发现我们是root了

#### 电信1100G(博通)

博通方案，开telnet

```
http://192.168.1.1:8080/telandftpcfg.cmd?action=add&telusername=admin&telpwd=admin&telport=23&telenable=1
```
#### 电信TEWA 1006E
TEWA 1006E
telnet

TEWA 766G

《天邑SU工具》在里面输入对应地区码切换地区，开启telnet
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


#### 电信TEWA 708G

192.168.1.1:8080
useradmin

插入U盘。
点开设备，F12
源码：

构造命令
```
location.assign("/usbbackup.cmd?action=backupeble&set2_sessionKey=set2_sessionKey_304")
```

#### 电信TEWA 1102E
用魔尊的计算su开启telnet
登录后su进去
再输入exit退出Busybox，命令提示符变成>，
telecomadmin get
CUAdmin get
输入get查看提示，有的get telepwd

#### 电信TEWA 600AGM(悦me)

useradmin登录后，直接在该页面地址（不需删除内容）后添加
```
/dumpmdmd.conf
```
下载文件，后搜索，password或搜telecomadmin账号
字母加数字的部分即是：Ncqrvlcr36
`Password&gt;Ncqrvlcr36&lt;/Password&gt;#j@b8S?%&lt`

#### 电信TEWA 750E/700G

8080，useradmin登录后，在新地址打开
```
192.168.1.1:8080/dumpmdmd.conf
```

```
http://192.168.1.1:8080/backupsettings.conf
```

下载文件，后搜索，password或搜telecomadmin账号
字母加数字的部分即是：Ncqrvlcr36
`Password&gt;Ncqrvlcr36&lt;/Password&gt;#j@b8S?%&lt`


#### 联通TEWA 800/830/1206e（河南）/870G（江苏）

后缀不同
登录user后，打开连接。
1206e
```
http://192.168.1.1/backupsettings.html
```
870G
```
http://192.168.1.1/backupsettings.conf
```

还原上传配置文件
```
http://192.168.1.1/updatesettings.html
```

直接打开这个可看到详细信息，超密等。
```
http://192.168.1.1/dumpmdmd.cmd
```


#### 联通TEWA 800E（北京地区绕过）

北京地区：联通光猫TEWA-800E超级管理员（亲测有效），TEWA系列都可以，注意根据实际页面修改id值
```
document.getElementById('loginfrm').setAttribute('method','get');
document.getElementById('username').value = 'CUAdmin';
document.getElementById('password').value = 'CUAdmin';
document.getElementById('loginfrm').submit();
```

```
document.getElementById('loginForm').setAttribute('method','post');
document.getElementById('loginUsername').value = 'lndmin';
document.getElementById('loginPassword').value = 'lndmin';
document.getElementById('loginForm').submit();
```



#### 移动TEWA 272G/270G

需要先知道loid，进超管，才能打开telnet
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
并非所有版本都可以用这个方法

#### 移动TEWA-86X，TEWA-7100A系列（江苏）
油猴脚本，直接登录user即可，直接超管

1. 在登录页面，按F12键打开浏览器控制台，选择 网络；
2. 选中控制台，按 ctrl+f 搜索字段 "isAdmin"，双击搜索结果跳转到指定代码，右键在源代码中打开；
3. 单击 "isAdmin" 所在行前面的行号，打上断点，然后用user账号登录光猫；
4. 登录后页面会暂停，并且代码停止到刚才断点处；
5. 在 "isAdmin" 行下方增加一行语句 "return;", 按 ctrl+s 保存修改后，按 F8 继续运行即可；
6. 网页会定期刷新去判断权限，当页面自动暂停时重复上面 4、5 步骤操作即可。


### 友华PT

#### 移动联通电信telnet

telnet 三网
普通管理员登录，网页开启telnet，移动联通，有的联通无效。
```
http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```
电信加8080
```
http://192.168.1.1:8080/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```

电信打开获取配置文件
```
http://192.168.1.1:/bd/saveconf.aspBackup
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
su，超密
```
CUAdmin
```

电信
账号telecomadmin、admin、telecom
pt926G，pt924G
admin，TeleCom_1234
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
su，mac是后6位小写
```
TeleCom_mac  后6位小写
```

```
TeleCom_
```
江苏电信pt926E，admin，TeleCom_1234，TeleCom_mac  后6位小写，注意复制右键异常问题

查看配置文件和超密
```
cat /var/config/lastgood.xml | grep SUSER_PASSWORD
```
上海企宽，目录
```
cat /config/config.xml | grep SUSER_PASSWORD
```
查看宽带密码
```
cat /config/config.xml | grep ppp
```

友华光猫的 lastgood.xml 里的拨号密码是初始的，也可能是base64加密过的，实时的在var/ppp/ppp.conf
```
cat /var/ppp/ppp.conf
```

电信打开备份页：  
前提要从入口http://192.168.1.1:8080 超管登录，或者user
```
http://192.168.1.1:8080/bd/saveconf.asp
```
backup保存配置文件，搜索telecomadmin账号，telnet管理员密码


##### 电信一个方法：ftp下载  
普通管理员登录，打开powershell
输入 ftp 192.168.1.1

useradmin
输入密码（光猫后面贴出的user登录密码）

输入 cd ..

输入 cd var

输入 cd config
``
输入下载到本地 
```
get lastgood.xml c:\aa.xml
```


#### 联通友华PT（通用）

##### 方法1：直接改user
user登录上去，找到账户修改，看user有个三角形符号都可以改，F12，选中元素user，把 =0，改为1，
修改密码即直接改到超管密码。

##### 方法2：出厂，改配置页

需要先恢复出厂，loid在注册页f12找。

需登录超管后，打开这个开telnet
```
http://192.168.1.1/bd/vermod.asp
```

注册改为0，下发不动99，再输入loid注册，超管不会被退出。有宽带账号密码可以直接配置。

打开back下载文件config.xml，查找超密，宽带密码

```js
http://192.168.1.1/bd/saveconf.asp
```
打开telnet后，配置文件 /var/config/lastgoot.xml
如果加密了，查看超密执行命令为：
```
xmlconfig -os | grep SUSER
```

##### 方法1：控制台

要从8080登入，橙色页面，useradmin登录后
F12 打开，点控制台console，输入一下
```
options[10]
```
即可获取


或者粘贴以下：
```
console.log(`超级管理员 账号为：${options[MENU_OPTION_SYSUSER]}, 密码为：${options[MENU_OPTION_SYSPWD]}`);
```

若无法复制粘贴则手动依次输入下面简短代码然后回车也是一样的，第一条为超管账号，第二条为超管密码，可能有base64编码

```
options[MENU_OPTION_SYSUSER]options[MENU_OPTION_SYSPWD]
```


##### 方法2：下载配置文件
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

·#### 电信PT924

telnet， TeleCom_1234
```
cat /var/romfile.cfg | grep web_passwd -A 5
```

#### 电信PT928E-NP|R3/PT104E/PT1570-h10（通用）

#### 电信PT928E

一种方法
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


#### 电信PT923G

telnet
看超密，里面一般第一个
开telnet  admin，1234
或TeleCom_1234
grep 关键字 -A 5  含后5行
grep 关键字 -B 5  含前5行

```
cat /var/romfile.cfg | grep web_passwd -A 5
```


#### 电信PT925G

光猫普通账号密码。浏览器输入网关地址登录。之后修改地址
```
192.168.1.1/cgi-bin/luci/admin/storage/settings

```

在光猫插入 U 盘后， 通过 Chrome 浏览器开发者调试工具种（F12），点击控制台选项（Console），输入：
```
get_path_files("/mnt/usb1_2/../../")
```

然后进入以下文件路径，将其复制到 U 盘中。

var/config/lastgood.xml

通过光猫网络可以直接在电脑访问 U 盘，打开查询超级密码关键字
```
SUSER_PASSWORD
```

宽带密码：
```
\var\config\ppp\ppp.conf
```


#### 电信PT622/PT632/PT921G
四川电信
老猫，登录useradmin，下载文件
```
http://192.168.1.1/romfile.cfg
```

搜
web_passwd
就是超级密码

开telnet，
```
http://192.168.1.1/cgi-bin/telnet.asp
```
telnet账户密码
admin/123456

#### 移动政企BG1460-R40(上海)

蓝色页面，方法标准，开telnet
超密
```
cat /config/config.xml | grep  SUSER
```
宽带账号密码
```
cat /config/config.xml | grep  ppp
```

#### 移动PT939G/PT104E

telnet
看超密，里面一般第一个
grep 关键字 -A 5  含后5行
grep 关键字 -B 5  含前5行

telnet登录
```
cat /var/romfile.cfg | grep web_passwd -A 5
```

#### 移动PT939G 3.0（电信橙色界面）

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


改地区直接用，广东深圳直接注册，不需要改sn
```
http://192.168.1.1/register_prov.html
```


#### 移动HG550(上海企宽)
友华方案，通用开telnet

24281355
1101
21023371860180@jt.com
588325

#### 联通PT924G/PT927G

山东联通PT924实践。
无需登录。要连续刷新打开这个，同时打开命令行telnet登录，连续刷和登录，这个过程会短暂打开telnet，借机登录。
```
http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi
```



#### 联通PT952G

法1：user登录后，点几次返回，再点管理员登录，直接进入，然后再开telnet。

法2：打开下载配置文件
```
http://192.168.1.1/backupsettings.conf
```


#### 联通PT928E
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

#### 联通兆能ZNHG605（友华界面，内蒙）

界面友华，采用他的方案

记录三要素，看不到宽带账号，复位后，

```jsx
http://192.168.1.1/bd/vermod.asp
```

注册改为0，下发不动99，再输入loid注册，超管不会被退出。

打开back下载文件config.xml，查找超密，宽带密码

```jsx
http://192.168.1.1/bd/saveconf.asp
```

telnet账号密码

```jsx
e8telnet
```

#### 联通PT（北京地区）

应用—FTP配置，启用ftp，用户名密码都设为user，保存，然后点右上角退出管理界面（重要）。ftp登录光猫ftp，默认会进入/mnt目录（挂载U盘存储的路径），一定要直接在远端地址里输入/var/config回车，即可强行切换到配置文件目录，而且有写权限。
**注意ftp不能直接点击上层目录，否则都无法读取，而是要直接输入/var/config回车进入。**

如果安装了Notepad3，可以直接在远端窗格里右键点config.xml，选查看/编辑，用Notepad3打开配置文件。如果没有安装，也可以把config.xml下载到本地，改完后覆盖回去。

1、对于北京联通，需要先解除管理界面的屏蔽，搜
```
<Value Name="PROVINCE_BEIJING_ACCOUNT_ADMIN_DISABLE"
```

把后面的值改成0。非北京版直接看下一步。

2、搜
```
<Value Name="SUSER_PASSWORD"
```
，后面的值为当前超管密码。

3、搜
```
<Value Name="MIB_TELNET_ENABLE"
```
把后面的值改成1，开启telnet。下面的TELNET_USER和TELNET_PASSWD即为默认telnet用户名（yhtcAdmin）和密码（Cuc@YHfw）。
还有一处要改的是
```
<Value Name="PROVINCE_TELNETCLI_ENABLE"
```
，把后面的值改成1。

4、搜
```
<Value Name="telnet"
```
，把后面的值改成3，让telnet直接进入su权限。

5、搜
```
<Value Name="MIB_SERIAL_USERNAME"
```
，这个和下面的MIB_SERIAL_PASSWD即为默认TTL用户名（admin）和密码（yhtc）。

6、搜
```
<Value Name="pppUser"
```
，第一处一般是TR069连接的用户名，第二处是宽带账号，下面的pppPasswd就是宽带密码。在宽带账号密码的下面不远处还有一行<Value Name="enableIGMP" Value="0"/>，改成1可对WAN拨号连接启用IGMP代理（北京版白嫖IPTV的必要条件）。

7、搜
```
Value Name="PROXY_PASSWORD"
```
，后面的值即为固话密码。

> https://www.right.com.cn/forum/thread-8383645-1-1.html

#### 电信pt921g（悦me界面）

useradmin登录后，直接下载文件
```
http://192.168.1.1/romfile.cfg
```

搜索telecomadmin



#### PT926G/E  PT921G

PT924G联通，提示成功但无法开启telnet。
换种方法用资料的部分。


#### 友华改tr069可编辑

##### 法1：
直接复位后，超管登录进去，打开以下链接，
```
http://192.168.1.1/bd/vermod.asp
```
直接修改 锁定远程控制的参数即可。

##### 法2：
改源码部分
1. 输入 ，回车运行。
```
cp /home/httpd/web/net_eth_links.asp /var/
```
 我们准备修改这个文件，但这个文件放在一个只读的分区上，所以先把它复制一份到可以读写的地方。

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


#### 友华通用资料
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



### 烽火HG


#### 烽火通用

#### HG6145F/HG6045F3/HG5143F

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

这时将显示你的光猫MAC。  
```
Fh@B45A9A
```
浏览器中录入  
移动
```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1&key=7CC74A201FD8
```
联通
```
http://192.168.1.1/telnet?enable=1&key=7CFCFDB3BCE0
```
电信
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1&key=7CC74A201FD8
```

```
root  或者  admin
```

```
Fh@919BD8
```

```
telnetadmin
```
Fh@4C47A0
```
FH-nE7jA%5mFh@4C47A0
```

```
hg2x0
```

电信telnet账号可能root，admin，telnetadmin
```
telecom
```

```
telnetadmin
```

密码
```
nE7jA%5m
```

```
TeleCom_1234
```
root
```
abcd
```

```
FH-nE7jA%5m
```
HG5140A，广东电信HG6143D1，telnetadmin，[mac后6位大写]
```
FH-nE7jA%5mA78034
```
CUAdmin
```
hg2x0
```
输su再输Fh@
TeleCom_1234

第二部 获得超密  
打开CMD命令窗口录入：telnet 192.168.1.1  
链接成功后输入账号：admin 在北京天津这边用这个admin，其他地方如果不管用就试试  root  
录入密码为  Fh@ +你上面获得的MAC的后六位大写。  
```
Fh@40D2E0
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
直接查超密
```
cat /var/InternetGatewayDevice/DeviceInfo/X_CT-COM_TeleComAccount/value.conf
```

移动查超密命令
```
cfg_cmd get InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Password
```

电信查超密命令
```
cfg_cmd showvalue InternetGatewayDevice. 1 | grep -i 'password'
```

这时将显示你的超级账号名称  
Success! admin_name=CMCCAdmin   
  
继续录入  
Config\factorydir# show admin_pwd   
这时将显示你的超级密码  
Success! admin_pwd=CMCCAdminFa5&G3Pk  

#### 烽火删除tr069

1、
删除的时候提示“不允许修改含有TR069的连接”。  
根据这个提示，我们能知道挺多信息的吧。  
chrome浏览F12打开开发者工具  
点一下最左上角的含有鼠标的图标，再点一下下拉框，找到tr069一行，双击并删除 TR069 字样回车之后，就可以做修改了

2、先记好loid，vlanid，宽带账号密码，进telnet改地区，为下面，重新注册配置好数据上网

telnet登录后，按这步骤操作，切换地区
```
load_cli factory
set factorymode enable
load preconfig CH_CT Temp
set factorymode disable
exit
reboot
```



#### 电信HG6201M/HG2201T

浙江电信

##### 法1：开telnet
1. 开telnet
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1
```

2. telnet账户密码

```
root
```
2201T 江苏电信
```
abcd
```
移动root，hg2x0 
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
FH-nE7jA%5m7F229C
```

3. 输入命令
```
cat /flash/cfg/agentconf/factory.conf
```

```
head 2 /flash/cfg/agentconf/factory.conf
```

第一二行就是超管账户密码。宽带密码网页端可看。

##### 法2：解码
192.168.1.1:8080  登录userdmin后打开
```
http://192.168.1.1:8080/cgi-bin/baseinfoSet.cgi
```

ASCII码HTML实体编码数字，存在三种情况：
1、不位移
2、大小写字母循环偏移-4，数字和其他不偏移

复制这一行
 "baseinfoSet_TELECOMPASSWORD"

74&117&119&84&76&78&118&113&54&78&

**如果无字符的可以用以下代码：**

在线跑python：
```
https://www.jyshare.com/compile/9/
```

**大小写字母循环内偏移-4，非字母不位移**
```python
def convert_text(input_text):
    result = ""
    codes = input_text.split("&")
    for code in codes:
        if code:  # 判断是否为空字符串，为空则跳过
            num = int(code)
            if 65 <= num <= 90:  # 大写字母
                num -= 4
                if num < 65:
                    num += 26
                result += chr(num)
            elif 97 <= num <= 122:  # 小写字母
                num -= 4
                if num < 97:
                    num += 26
                result += chr(num)
            else:
                result += chr(num)

    return result

input_text = "126&46&80&70&69&35&122&53&"
print(convert_text(input_text))
```

102&108&102&121&121&110&55&100&52&69&65&76&
5PsFwzmEUT


```java
import java.util.HashMap;
import java.util.Map;

public class Main {
       
        public static void main(String[] args) {

        Map<String, String> map = new HashMap<>();
        //  获取信息的方式 http://192.168.1.1:8080/cgi-bin/baseinfoSet.cgi
        // fixme,下面两行把从路由器拿到的信息放在这里
        map.put("telecomadmin", "53&84&119&74&97&100&113&73&89&88&");
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



#### 电信HG6201T
开telnet
```
http://192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1&key=3CFB5CA8CBDC
```
telnet账户密码root， 安徽电信也有root，Fh@3142CC的
```
Fh@3142CC
```

```
abcd
```
安徽电信、江苏电信HG6201T，root，FH-nE7jA%5m
```
FH-nE7jA%5m
```


输入命令，第二行就是超密
```
cat /flash/cfg/agentconf/factory.conf
```

```
head -2 /flash/cfg/agentconf/factory.conf
```

#### 电信HG5040A/HG6540A
telnetadmin
常规开启
黑龙江电信，江苏电信6540A
账户
```
telnetadmin
```
密码，
```
FH-nE7jA%5m + MAC后6位
```

FH-nE7jA%5m483A48

#### 电信HG2543C1/HG2541C1
广东电信，湖北电信
开启telnet  
```
192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1
```
telnet用户名 ：root   
密码是（默认无线网络密钥+默认终端配置密码）的组合
注意只认猫背部的，wifi密码改过无关



#### 电信HG6543C1/HG220GS
```
192.168.1.1:8080/cgi-bin/telnetenable.cgi?telnetenable=1
```

telnet用户名 ：root  
telnet密码：默认无线网络密钥+默认终端配置密码 的组合，要用pt才能上翻页

湖北电信HG6543C3
telnet
```
telecom
```

```
nE7jA%5m
```

```
cat /flash/cfg/agentconf/factory.conf
```

四川电信HG220GS，root，hg2x0
```
cat /flash/cfg/agentconf/factory.conf
```

或直接输入下面命令查
```查看前2行
head -2 /flash/cfg/agentconf/factory.conf
```

或直接编辑修改第二行超密保存reboot重启
```
vi  /flash/cfg/agentconf/factory.conf
```
:wq


#### 电信HG3142F/HG5585F/HG5382A (fttr主ONU),HG558*,HG6371F(从光猫)

8080先登录普通管理员，打开下面页面，如果打不开，就复位猫超管进去

打开页面
```
http://192.168.1.1:8080/html/upnp.html
```
F12查源码改upnp.js 中的 saveApply 函数，右键粘贴替换为下面，ctrl+s，点击页面upnp  保存。

```js
function saveApply() {
    var postdata = {
        // ftp: 0,
        telnet: 1,
        // dnsrelay: 1,
        // portal: 0,
        action: "telnet"
        // terminal_number: 255,
    };
    postdata.sessionid = sessionidstr; // sessionidstr已经在其他地方定义
    XHR.post("set_services", postdata, initPage);
    showOrHideLoadingWindowFromIframe("show");
}
```

HG3124F
telnet
账户
```
telnetadmin
```
密码，安徽不用MAC后6位
```
FH-nE7jA%5m + MAC后6位
```
SU密码:Fh@MAC后6

```
load_cli factory
```

```
show admin_pwd
```

#### 联通电信HG261GS/HG260/HG5143F
（广西电信）
（四川移动HG260GT）
192.168.1.1
联通版进入维护账号，启用隐藏，跳到登录页，登录
```
http://192.168.1.1/logoffaccount.html
```
用户
```
fiberhomehg2x0
```
密码
```
hg2x0
```

出厂设置保存一下即可

开telnet ，默认 
admin
admin
或者
root  hg2x0

#### 联通HG2543C1（北京）

user登录后，打开以下地址，查看所有配置信息，base64
```
http://192.168.1.1/backupsettings.txt
```


#### 联通HG2201U/

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
或者直接 输入get命令
直接获取超密 
```
get telpwd
```

**再输入sh进去shell**  

直接查
```
cat /fhconf/backpresettings.conf | grep Admin
```

进ftp下载 /fhconf/backpresettings.conf
搜索cuadmin，base64解码

#### 联通HG221G

telnet
账户密码都是admin

进入后
```
> get telnetpwd   注册，输入命令获取超密
```

#### 联通HG6201F（河南）

备份配置文件 
```
http://192.168.1.1/backupsettings.conf
```
还原配置文件
```
http://192.168.1.1/updatesettings.html
```


#### 移动HG6145A2

然后发现了[这个帖子](https://www.right.com.cn/FORUM/thread-8283798-1-1.html)  
用cfg_cmd get来读，加密的也能读到，直接cfg_cmd get试了一下，有这个命令，能用，直接进fhdata，cat usrconfig_conf一大堆东西，看得眼花  
把内容粘贴到记事本ctrl+f，搜password，发现好几个，config interface 'InternetGatewayDevice__DeviceInfo__X_CMCC_TeleComAccount__'这个看起来最像，先验证一下，cfg_cmd get InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Username  
提示get success!value=CMCCAdmin  


开telnet后，查超密命令
```
cfg_cmd get InternetGatewayDevice.DeviceInfo.X_CMCC_TeleComAccount.Password
```



### 锐捷H/T

#### H60G/H61G/H80G/T66/T51/SG631Z（通用）

**移动是，记录vlan id，loid，重置，超管登录。**

```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
设置telnet账号密码
```
admin
```

telnet默认密码是
```
chzhdpl@246
```
移动su
```
aDm8H%MdA
```

设置修改密码并保存，账号可不动
```
sidbg 1 DB set DevAuthInfo 0 User CMCCAdmin
```

user提权
```
sidbg 1 DB set DevAuthInfo 1 Level 1
sidbg 1 DB save
```

直接修改超密：
```shell
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save
```

**联通vlan id，loid，宽带账号密码，复位，登录超管打开：安全，telnet开启**
```
admin
```
telnet默认密码是
```
chzhdpl@246
```
注册下发时，马上命令改超密，福建联通有几秒间隔，猫会自动重启。
```shell
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save
```
卡注册
```
sidbg 1 DB set PDTCTUSERINFO 0 Status 0  
sidbg 1 DB set PDTCTUSERINFO 0 Result 1  
sidbg 1 DB save
```
dyc92uktgQtJK2#T

#### 移动SU6100
锐捷猫，江苏
user进去，开telnet，账号密码同锐捷，su：aDm8H%MdA
只有user账号，没有超管，界面功能有限。



### 创维SK

#### 移动SK-D848/SK-D742/

鲜绿色页面，查password，2010前面部分，有的看不了。
```
192.168.1.1/ajax_user_register.gch
```

恢复出厂，超管登录，打开telnet，F12方法：将telnet display:none 改为1，是出现启用telnet 选项，但是钩了没用。  没用的话就得用CMCCAdmin超级用户登录，然后打开：
```
http://192.168.1.1/web/cmcc/gch/template_user.gch?nextpage=web/cmcc/gch/iot_advance_setting_t.gch
```

telnet
root
【无线wifi密码+超密】，无wifi密码的直接就超密
su
aDm8H%MdA  或超密


#### 移动SK-D840(浙江)/SK-d745S（安徽绿色界面）

绿色和蓝色页面，复位后，超管菜单，安全，添加telnet，插光纤会重启，注册会重启。
telnet
root
aDm8H%MdA

超管进去，安全，访问添加一个telent，然后即可，root
root
无线wifi密码+超密


#### 移动SK-D748浅蓝色(贵州)/移动ZN800(江苏)/SK-D746/SK740S(北京)

浅蓝色页面，地址带/cgi-bin/，开telnet，user不行的话，打开注册页，能看到注册码，然后恢复出厂。打开
```
http://192.168.1.1/cgi-bin/telnet.asp
```

打开，下载**romfile.cfg**，里面可以查telnet
```
http://192.168.1.1/cgi-bin/upgrade.asp
```

江苏移动ZN800，集客，自动注册。

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


#### 移动SK-D848N（江苏）

新版，telnet旧版方法已经关闭，无法开启

复位后，插光纤，关闭周期上报，填入password，会自动注册，并更改超密，但是不会退出登录。

#### 移动dt720-csf(河南)
```
192.168.1.1/ajax_user_register.gch
```

6016356310201030000IGDSUCCSUCC-1312374208
4031
17657919835
绿色登录页
user页面开启telnet

telnet
账号
root
aDm8H%MdA

#### 联通SK-D740/SK-d740-c/SK-D748-C/SK-D742C/SK-D748

```
http://192.168.1.1/hidden_version_switch.html
```
开启telnet。默认版本telnet账号root，Pon521

- **【河南】**
ftp软件登入，useradmin，useradmin。
法1：打开一下telnet，输入user或root，随便数一下6位密码确认（一定要做），进入/var/tmp/，可以看到生成telnet_su_passwd，下载查看超密。

法2：输入/userconfig/cfg/    下载db_user_cfg.xml，xor，routerpass解码即可。有的不能解码。

- **【山东】**
user，Pon521，记住注册码，重置或切换版本默认再切换回山东，  
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

解密参照下面，xor，routerpass均不能解，user密码+超密（待确认）
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

#### 联通dt741-csf/DT541/DT541-csf 

记下LOID还有VID
```
http://192.168.1.1/hidden_version_switch.html
```
清除复位后，勾选开启telnet
- **【河南】【山东】【辽宁】【天津】**
telnet登录root或user      密码：  user密码+CUAdmin    

#### 联通SK-D740/745【无telnet按扭】

```
http://192.168.1.1/hidden_version_switch.html
```
【内蒙古】
无telnet都按此

法1：
恢复出厂，设置里，开启ftp，useradmin，useradmin
注册，从ftp进去，下载配置文件解密。

法2：山东可，
上面telnet链接打开，切换默认版本，注册40%，手动配置。

#### 电信SK-M724(合肥政企)

```
http://192.168.1.1/hidden_version_switch.html
```
点开telnet，ftp账户密码是背部普通账密useradmin
ftp登录后切换，成功后切到`/userconfig`目录下，查看`loid_file`文件，里面是光猫的loid注册信息，去telnet登录一下，/var/tmp/中下载`telnet_su_passwd`。telnet密码是wifi密码+超管密码。
超密直接下载配置文件，或者去telnet里。
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml
```

查看解密后的文件
```
vi /tmp/debug-decry-cfg
```




#### 电信DT741（政企悦me）

【内蒙古电信】
|运营商|中国电信|
|设备型号|DT741-zhengqi|
|设备标识号|34AA31-4E61534AA310C8AC0|
|硬件版本号|V1.0|
|软件版本号|V1.0.1|

useradmin登录，输入下面开启telnet
```
http://192.168.1.1/usr=telecomadmin&psw=nE7jA%5m&cmd=1&telnet.gch
```
telnet账密都是telnetadmin，su也是一样
```
telnetadmin
```
命令需要su

ftp账户密码为useradmin账密


#### 电信DT720-cs【注册下发】

【安徽山西】
开telnet
```
http://192.168.1.1:8080/hidden_version_switch.html
```

telnet账密都是telnetadmin
```
telnetadmin
```
其他用sidbg命令，su密码不是默认超密




吉比特CM115Z,CM113Z光猫破解超级权限教程
https://www.right.com.cn/forum/thread-2270800-1-1.html


#### 移动SK-M424-ZQ融合企业网关

【江苏】
sn自动认证，user进去后台复位，
超管进去，安全，访问添加一个telent，然后即可，root
root
无线wifi密码+超密ykh36cfgaDm8H%MdA

### 移动HG550G企宽

【上海】
标密aDm8H%MdA

界面同TEWE 272g，蓝色，菜单底部，移动企宽蓝色页面可参考此种模式。有的需要用超管进去。
配置文件下载
```
http://192.168.1.1/bd/hide.asp
```

![](https://s3.bmp.ovh/imgs/2023/12/02/ff5e99cdc39a2d67.png) 


https://blog.csdn.net/qq_42294237/article/details/132025846


### 特艺

#### 电信TG1608CT_A8-G

打开telenet，用超级密码进入后

可能没有8080
```
http://192.168.1.1:8080/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```

用户名telnetuser，密码光猫背面标签
命令
sidbg


### H10g-32ac企业网关（江苏、内蒙移动）S-Box8L94，telnet默认开

sn认证，集客可能password
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

### P22-2c(企业)上海移动

password认证，普通登录，状态页底下，激活码就是注册码
在网页端，设备管理，F12找到开启，深恢复出厂
超管登录后，安全，开启telenet：CMCCAdmin，密码普通账号@C1，可重改。

```
刚登录telnet
>
输入sh
#
```
查看超管
```
cat /var/romfile.cfg | grep  CMCCAdmin
```
查看宽带账户密码
```
cat /var/tmp/ppp1.conf
```


### H3-1S/H3-2S/H3-2Sse/H3-2sa/H5-8/H5-9/

无需登录，直接打开
```
http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch
```
telnet
```
CMCCAdmin
```
sxcgs0hp
```
aDm8H%MdA
```

### H2-3/H1s-3/H2-3s/H2-2

H2-3灰色页面，H2-3s蓝色页面在系统里恢复出厂，登录超管，直接注册不会被退出。

##### 浅蓝或灰蓝色页面

**开TELNET  自己设置 TELNET账号密码 建议设置 账号为 root**  
```
http://192.168.1.1/webcmcc/telnet.html?password=!@qw34er&username=root
```
或者
```
http://192.168.1.1/webcmcc/rc_telnet_debug.html?password=!@qw34er&username=root
```

直接重置猫，一打开就重置！
```
http://192.168.1.1/webcmcc/gui_restore_factory.html?password=!@qw34er&username=root
```


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

##### 鲜蓝色界面和深蓝
user登录后，直接F12，console输入
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

切换到配置文件目录
```
cd /config/worka
```

另外：
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


##### 超密法1：改为user密

使用Telnet 连接光猫，账户和密码均为刚设置的root和admin(root账户,否则编辑文件显示只读文件)

输入以下命令
Telnet 192.168.1.1
输入Telnet账户密码登陆，登陆成功后

输入进入config路径
```
cd /config/worka
```

输入
先复制user密码
```
grep aucUserAccountPassword lastgood.xml /config/worka
```

```
grep aucTeleAccountPassword lastgood.xml /config/worka
```

```
grep aucTelnetPassword lastgood.xml /config/worka
```
然后复制粘贴保存一下aucTelnetPassword值
输入
```
vim /config/worka/lastgood.xml
```
找到aucTeleAccountPassword(Win可以用PgUp,PgDn翻页)
找到后吧找到aucTeleAccountPassword的Value值(英文输入状态按i进入编辑)将值替换成aucTelnetPassword的值
(由于Value值太长显示不出全部,所以先把aucTeleAccountPassword的Value里面的内容删了然后复制aucTelnetPassword值,在cmd命令里右键一下张贴进去)
然后按Esc在按 :wq 回车
退出后输入reboot重启一下,然后你就可以使用之前设置的TELNET密码访问了，有的user和telecount加密方法不同了不能用user的密码直接替代

telnet密码
```
a2#We4%Dc2
```

##### 超密法2：解码

查看，复制出来密码串
```
grep aucTeleAccountPassword lastgood.xml /config/worka
```
十六进制转换字符串在线网站：
```
https://www.bejson.com/convert/ox2str/
```
密码是ASCII的十六进制数字，在线跑python解码转换一下即可，也可能是64位加密，无解。
```python

hex_codes_str = "直接输入：64,68,66,67,23,36,76,64,00,00"

hex_codes = hex_codes_str.split(",")

result = ""
for hex_code in hex_codes:
    if hex_code == "00":
        break
    char_code = int(hex_code, 16)
    result += chr(char_code)

print("转换结果为：")
print(result)

```

**输入切换省份（省份名称用全称，有的版本是简称如广东是gd01，有些区域版本省份代码是省份全拼如河北：hebei）；**
```
hi_cfm set sysinfo.province gd01
```

```
hi_cfm set sysinfo.province hebei
```

**输入使用配置生效，重启。**

```
hi_cfm config
```

```
reboot
```


#### H2-2（内蒙）鲜蓝色，注册会重启关闭telnet
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

### HX5-9hLite/HX5-9haLite

[来源](https://github.com/wuben007/hx5-9hLite#%E7%A7%BB%E5%8A%A8%E5%85%89%E7%8C%ABhx5-9hlite-%E8%8E%B7%E5%8F%96%E8%B6%85%E7%BA%A7%E5%AF%86%E7%A0%81)

1. 开启telnet curl --location --request POST '[http://192.168.1.1/boaform/set_telenet_enabled_mod.cgi](http://192.168.1.1/boaform/set_telenet_enabled_mod.cgi)'  
    --header 'Content-Type: application/x-www-form-urlencoded'  
    --data-urlencode 'mode_name=/boaform/set_telenet_enabled_mod'  
    --data-urlencode 'nonedata=0.8681615761763514'  
    --data-urlencode 'telenet_enabled=1'  
    --data-urlencode 'user_name=root'  
    --data-urlencode 'user_password=nE7jA%5m' 
2. telnet 测试 telnet 192.168.1.1 出现登录 登录 用户名root ,密码为上面设置的密码
3. 查找超级账号的密码 ，进入 路径： /config/work vi lastgood.xml 输入：/CMCCAdmin 则下一行则为 超级密码
4. 超级密码有有效期，具体多久没有测试，以及telnet 也会关机，需要的时候，可以重复操作

### GS8108/GM630/UNG430Z/UNG300Z通用

获取超级密码方法 https://www.right.com.cn/forum/thread-8266942-1-1.html

 1. 使用光猫背后的普通用户名登录进光猫，浏览器复制以下链接打开  
```
http://192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch
```
这部分型号多数要复位进去超管打开下面这个
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

```
http://192.168.1.1/bd/hide.asp
```

  
3. 通过telnet进入光猫  
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
cd到根目录，遍历所有文件按内容搜索，比较久
```
cd /
find -type f -name '*'|xargs grep '你的宽带账号'
```

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
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml && cat /var/tmp/debug-decry-cfg | sed -n '/DevAuthInfo/,/\<Tb.>/p' | grep -i "User\|Pass" | grep -i "UserName\|Password"
```
查宽带密码
```
sidbg 1 DB decry /userconfig/cfg/db_user_cfg.xml && cat /var/tmp/debug-decry-cfg | awk '/15906211406/{print; for(i=1;i<=5;i++){getline; print}}'
```

```
<Tbl name="WANCPPP" RowCount="1">
<Row No="0">
<DM name="ViewName" val="IGD.WD1.WCD2.WCPPP1"/>
<DM name="UserName" val="01016575656"/>
<DM name="Password" val="806743"/>
```


在查看状态下使用vi命令的查找命令进行查找超级管理账号：CMCCAdmin，英文状态下点击【/】后输入CMCCAdmin后，点击回车

> /CMCCAdmin  

直接改桥接命令：注意要row 数值 =  wanc 后的
```
sidbg 1 DB set WANC 1 ConnType 4
```

**ftp账密是相同的：e8ftp**

广西GM630-R，重置后，下发配置，再去删除tr069和关闭上报，第二个地址开启telnet。

或者reset后，超密进去，在 安全 telnet配置，启用telnet，再注册loid。

H2-2部分测试失败，河南平顶山测试成功。
![](https://s3.bmp.ovh/imgs/2023/08/02/1b69319f6a712987.png)

### CM112z /GS3101/GS2107（GS3202不同）

**测试：**
http://192.168.1.1/cgi-bin/tmp/ctromfile.cfg  

cm112z（北京移动）http://192.168.1.1/cgi-bin/content.asp
1. 登陆user之后打开这个地址  
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

#### GS3101

浏览器进入光猫后台192.168.1.1，光猫背面普通账号密码登录

**然后新开网页输入下列网址，第一个要是不行，换第二个网址**，开telnet

```
http://192.168.1.1/cgi-bin/getGateWay.cgi
```

```
http://192.168.1.1/cgi-bin/telnetenable.cgi?telnetenable=1
```

```
admin
```

```
s2@We3%Dc#
```

**然后输入下列两行命令的任意一行就可以得到超管账号和密码了**

```
cat ctromfile.cfg | grep 'user'
```

**查询地区命令**

```
cd /userfs
```

**修改地区命令**

```
prolinecmd romfileselect set 地区代码
```

**修改SN命令**

```
prolinecmd serialnum set 要修改成的SN码
```

prolinecmd serialnum set FHTT18BB8B50
**修改MAC命令**

```
sys mac 要修改成的MAC码 -n
```

**修改相关参数后执行下列命令保存生效**

```
prolinecmd restore default
```


#### GS8101

GS系列猜测是中兴方案。
复位，用中兴工具开telnet，GS8101恢复出厂后，用中兴2.exe直接开启临时telnet

#### GS2107（四川）
telnet账号：
```
CMCCAdmin
```

```
s2@We3%Dc#
```


#### UNG220Z（甘肃移动）

telnet
```
CMCCAdmin
```

```
chzhdpl@246
```

### GM630/GM232/GM219S
https://www.right.com.cn/forum/thread-4267874-1-1.html
请全部理解且做好足够心理准备再继续进行。重置光猫之后不能上网，如果你自己设置不成功，就得打电话叫装维上门修复。  
1、捅复位键，45～60秒。闪灭2次，捅后要断电重启。 
2、打开登录页面，用管理员帐号CMCCAdmin和初始密码aDm8H%MdA登录进去。  
3、在此页面  
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
开启telnet,LAN，保存  
4、退出登录，到主页“注册安装"，填入ONT密码，操作业务下发  

6、使用windows自带的telnet，或者Xshell、SecureCRT等工具连接到光猫，登录用户CMCCAdmin，密码输入光猫反面写的user密码@C1，如xxxxxxxx@C1。（我这里是C1，如果不对请尝试省份首字母，比如@BJ）  
待出现~$符号后，输入，超级密码一目了然。
```
sidbg 1 DB p DevAuthInfo
```
55jkh@vu@C1

GM219S，telnet为
用户名 root，密码 Pon521

### GM219S 多版本
http://www.8fe.com/jiaocheng/6041.html
1、开telnet，旧版本
```
192.168.1.1/usr=CMCCAdmin&psw=aDm8H%25MdA&cmd=1&telnet.gch
```

2、法2，浅绿色后台
```
192.168.1.1/telnet-config.asp
```
admin 密码：与普通账号密码相同

3、类江苏创维
F12里开。

常见telnet账号密码
组合1：admin 密码：与普通账号密码相同（大概率）、1234、chzhdpl
组合2：root 密码：Pon521
组合3：CMCCAdmin 密码：aDm8H%MdA、Cmcc10086

```
cat /tmp/var/romfile.cfg | grep CMCCAdmin
```

### GM220-S(天津移动)
天津移动
所有方法都不行，恢复出厂后，u盘可以到处配置文件。

记录password，删除tr069，注册到60%手动配置。

福建移动GM220-S
恢复出厂，设备管理关闭强制推送，设备管理，备份配置confine.bin，注册后，一直下载，此时没退出，下载最新配置文件。


### GM620(湖南移动)
开telnet
```
http://192.168.1.1/telnet.gch
```

以上某个链接打开
admin
默认超密

### H3-2r/H3-1r lite/H-PON01

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

#### 移动S-GTA86G0A(江苏)

复位后，进超管后台开telnet


### 兆能ZN

#### 移动ZN-M142G/M180（浅绿色）

【内蒙古】
user登录，直接打开telnet
```
http://192.168.1.1/getpage.gch?pid=1002&nextpage=tele_sec_tserver_t.gch
```
默认的账户密码登录
​23m9kf76CUAdmin

#### 移动ZN-173

登录user后，打开telnet
```
http://192.168.1.1/cgi-bin/getGateHide.cgi
```

telnet
用户名是admin  
密码是aDm8H%MdA

查看超管
```
cat /tmp/ctromfile.cfg | grep "CMCCAdmin"
```

su CMCCAdmin
切换到su密码就是超管密码



#### 电信ZN600
https://www.right.com.cn/forum/thread-4146855-1-1.html

ZN601
先通过192.168.1.1:8080登录后台
然后把 content 改成 telnet 再回车
用户名 admin  
密码 1234
有的光猫的telnet账户名不是admin而是useradmin密码同1234  

#### ZN600/ZNHG600

法1：
192.168.1.1:8080登录
接在http://192.168.1.1:8080/cgi-bin/login.asp使用普通账户登录，登录后地址栏输入

```
http://192.168.1.1:8080/romfile.cfg
```

回车就可以把romfile.cfg下载到本地

法2：
将 U 盘插到光猫的 USB 口上，再在[电脑](https://www.smzdm.com/ju/sp4x11p/)上访问 `http://192.168.1.1/cgi-bin/luci/admin/storage/settings` 来到存储页面，通过 F12 输入 `get_path_files("/mnt/usb1_1/../..")` 跳转到根目录后，将 `root/config.rom` 复制到 U 盘中查看文件就能获取到超级密码了。

法3：
使用光猫底下的普通密码登录到 FTP，然后访问 `/var/config`或者`root/config.rom`，找到 `lastgood.xml` 复制到电脑上（访问目录可能提示权限不足，F5 刷新后就能进去），下载搜索

法4：
点击底下的“快速装维入口”，再点击右上角的“返回登录页面”，在新的登录页面中，尝试登录，F12 的网络请求中返回的 `telecomStatus.cgi` 中有明文的超级密码。

后来这个请求返回的密码经过了 MD5 加密，但我们知道以前的超级密码都是以 telecomadmin + 8 位数字组成的，获得加密后的密码也可以反推出原密码。

#### 电信ZN-XG120(安徽)

useradmin普通登录
```
http://192.168.1.1:8080/cgi-bin/login.asp
```
下载搜索 web_passwd=
```
http://192.168.1.1:8080/romfile.cfg
```

telnet
```xml
<TelnetEntry Active="No" telnet_username="telnetadmin" telnet_passwd="telnetadmin" telnet_admin_username="telnetadmin_super" telnet_admin_passwd="telnetadmin" telnet_port="23" /> 
```

#### 电信ZN504XG-D(广东)

背部useradmin直接登录，绿色界面没关系。
打开
```
192.168.1.1:8080/cgi-bin/getGateWay.cgi
```

页面直接显示telnet账号密码都是telnetadmin和超密，telnet  状态YES为开启。
telnet的su也是telnetadmin。
```
Family GateWay
telnetadmin
telnetadmin
No
nE7jA%5m
```

gbus查超密即可。配置文件var/romfile.cfg
也可用这个命令查
```
tcapi show Account
```

### 九联

#### 移动UNG903H/UNG853H/HG51(广东)

移动

```
http://192.168.1.1/aoaform/web_query_user_show.cgi
```

UNG953H-S 是加密的，查看源代码： aes_1.js 使用的是 aes 加密，key 的动态取的，网页控制台输入 Crypto_aes_g_key 就可以拿到。然后用常规的 CryptoJS 就可以解密。

超级密码

登录user，打开，telnet账号密码和user一致
```
http://192.168.1.1/webcmcc/telnet.html
```

cd /返回根目录，或者直接进配置文件目录
```
cd /config/workb
```
编辑查看超密和宽带密码
```
vi /config/workb/backup_lastgood.xml
```

/CMCCAdmin

#### 电信UNG310H(广东)
 
1. 拿大头针捅复位键，一直压住大概20秒，光猫会重置出厂设置并恢复原始超密。  
2. 管理页面192.168.1.1，用户名telecomadmin，密码nE7jA%5m登录。  
3. 在维护页面里面点备份ROMFILE，通过浏览器下载romfile.cfg。  
4. 用编辑器打开romfile.cfg，搜索telnet，找到下面这行  
```
TelnetEntry Active="No" telnet_username="telnetadmin" telnet_passwd="telnetadmin" telnet_admin_username="telnetadmin_super" telnet_admin_passwd="telnetadmin" telnet_port="23" 
```
把Active=”No“，改为“Yes”。修改后保存。  
改参数2处屏蔽注册。
```
registerStatus="0",registerResult="1"
```
5. 重新登录光猫管理页面，在维护页面通过更新ROMFILE，把修改后的romfile.cfg上传。光猫更新ROMFILE后就会重启，重启后telnet就会打开。  
6. 之后可以用系统自带telnet工具，用户名和密码都是telnetadmin，用SU命令可以提权，密码telnetadmin



#### 电信UNG00A(广东)
复位后，超管登录地址格式如下
```
http://192.168.1.1:8080/cgi-bin/content.asp
```
打开telnet
```
http://192.168.1.1:8080/cgi-bin/telnet.asp
```

telnet账号密码和su都是
```
telnetadmin
```

配置文件
var/romfile.cfg

gbus命令查。



### 贝尔

#### G-140-MD

##### 河南内蒙古联通G-140-UD
user登录，点击管理，用户管理，修改密码，右键查看框架源代码，搜索CUAdmin可查到明文超密。

##### 北京联通G-140W-UD

1、chrome浏览器访问[http://192.168.1.1](http://192.168.1.1/)，修改密码页面上，F12，打开开发者工具，搜索到超级密码。  
2、chrome登录页面，>>按钮上右键检查元素，F12，打开开发者工具，将login.cgi修改为cu.html，用超级密码登录。  
3、在快速设置中可以修改为桥接。个人意见，没啥子必要。  
4、在地址栏访问 [http://192.168.1.1/system.cgi?telnet](http://192.168.1.1/system.cgi?telnet)  开启telnet。  
5、终端窗口 telnet 192.168.1.1，就进入系统root账号了。

**法一：直接查**

需超管登录，三网通
```
http://192.168.1.1/dumpdatamodel.cgi
```

```
http://192.168.1.1/system.cgi?telnet
```

telnet密码搜supassword解密
```
<CLIPrompt ml="256" rw="RW" t="string" v="\\\\$"></CLIPrompt>
 
<SuPassword ml="64" rw="RW" t="string" v="FyoWiA9ebVq8Wcr5t1T+Zg==" ealgo="ab"></SuPassword>
``` 

搜超密cmccadmin，cuadmin，supassword（telnet的root密码）解密。

解密，用python文件，nokia-router-cfg-tool.py文件夹下命令行运行语句，-d后面是加密的内容。
```
python nokia-router-cfg-tool.py -d RVkz0RuODMYtV5p8XwG4RQ==
```
telnet：
user或useradmin  
密码背部   
su密码  

解密算法：
```python
import base64

class RouterCrypto:
    def __init__(self):
        from Crypto.Cipher import AES
        # key and IV for AES
        key = '3D A3 73 D7 DC 82 2E 2A 47 0D EC 37 89 6E 80 D7 2C 49 B3 16 29 DD C9 97 35 4B 84 03 91 77 9E A4'
        iv  = 'D0 E6 DC CD A7 4A 00 DF 76 0F C0 85 11 CB 05 EA'
        # create AES-128-CBC cipher
        self.cipher = AES.new(bytes(bytearray.fromhex(key)), AES.MODE_CBC, bytes(bytearray.fromhex(iv)))

    def decrypt(self, data):
        output = self.cipher.decrypt(data)
        # remove PKCS#7 padding
        return output[:-ord(output[-1:])]


encrypted = input('请输入密码字串：')
print('解密密码为：', RouterCrypto().decrypt(base64.b64decode(encrypted)).decode('UTF-8'))

```

```
cfgcli -a &gt; /tmp/config.xml
```

```
cat /tmp/config.xml
```
自行查看这个文件的内容

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

改地区
XG-040G-MD超密登录后
```
http://192.168.1.1/opid_setting.cgi?set
```

**法二：重置**

重置后标密，注册后密码不会马上变更，可以删除069。
telnet密码是user密码，重新注册后超密不变

账号：CMCCAdmin  
密码：aDm8H%MdA  
个别地区可能是：  
账号：admin  
密码：Cmcc10086#
登录成功之后在地址栏访问这个地址，点击开启telnet：  
```
http://192.168.1.1/system.cgi?telnet
```
进入网络，远程管理菜单里找到password认证，接下来插上光纤，回到后台主页，如果没问题的话就会开始自动下发配置：

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

```
设置超级登录用户名  
cfgcli -s InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.UserName 要修改的用户名
设置超级密码  
cfgcli -s InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.Password 要修改的密码  
修改路由器无线名字  
cfgcli -s InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID 要修改的名称  
修改路由器无线5G名称:
cfgcli -s InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID 要修改的名称)
```
直接改超密密码
```
cfgcli -s InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.Password admin1234
```

修改默认超密 
```
cfgcli -g InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.Password
```


进入Telnet查看宽带账号密码 
```
cat /configs/etc/ppp/options_ppp131
```

```
一、互刷运营商
要先选中国电信的介面,Telnet命令
ritool set Custom AH 切换电信界面
ritool set Custom CU 切换联通界面
直接命令 reboot 重启
再刷入移动或联通固件，这时再恢复出厂 cfgcli -r
二、telnet 常用修改  
（1）修改超级用户名称和密码  
cfgcli -s InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.UserName ***
cfgcli -s InternetGatewayDevice.DeviceInfo.X_CT-COM_TeleComAccount.Password ***
（2）修改MAC命令
ritool set YPSerialNum 8300012110BC046384
ritool set MACAddress f8:8c:e8:88:ad:88 (MAC的英文要小写)
ritool set G984Serial 5A01B711（这个位置是设备识别号的后8位 )
（3）关闭注册提示
cfgcli -s InternetGatewayDevice.X_CT-COM_UserInfo.Status 0
cfgcli -s InternetGatewayDevice.X_CT-COM_UserInfo.Result 1

（4）开启 ipv6
cfgcli -f -s InternetGatewayDevice.DeviceInfo.X_CT-COM_IPProtocolVersion.Mode 3
（5）修改设备基本信息
ritool set MfrID HWTC (:把 生产厂家标识 NBEL 改为HWTC）
ritool set Mnemonic G-140W-ME (设备型号G-140W-ME）
（6）修改2.5G和5G名称
cfgcli -s InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID ***
cfgcli -s InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID ***-5G
ritool set SSID-1Name ***
ritool set SSID-2Name ***-5G
（7）修改上网设备数量限制
原来配置文件最多只能3台设备上网，必须修改
cfgcli set InternetGatewayDevice.Services.X_CT-COM_MWBAND.TotalTerminalNumber 10
改完后，输入：ritool dump ，看一下改了没
cfgcli -r 恢复出厂 ，等命令走结束
reboot 或 reset 重启设备
三、常用配置网页网址

选省份介面http://192.168.1.1/opid_setting.cgi
固件升级路径：[http://192.168.1.1/upgrade.cgi](http://192.168.1.1/upgrade.cgi)
插件配置卸载路径：[http://192.168.1.1/upgrade_plugin.cgi?](http://192.168.1.1/upgrade_plugin.cgi?)
Upnp功能开启：[http://192.168.1.1/upnp.cgi?](http://192.168.1.1/upnp.cgi?)
usb备份、恢复：[http://192.168.1.1/usb.cgi?backup](http://192.168.1.1/usb.cgi?backup)
TR069 RMS平台认证：[http://192.168.1.1/tr69.cgi](http://192.168.1.1/tr69.cgi)
AWIFI激活管理平台：[http://192.168.1.1/awifi_config.cgi](http://192.168.1.1/awifi_config.cgi)
设备ma等信息查看：[http://192.168.1.1/bucpe.cgi](http://192.168.1.1/bucpe.cgi)
设定password密码： [http://192.168.1.1/gpon_config.cgi](http://192.168.1.1/gpon_config.cgi)
设定LAN端IPV6： [http://192.168.1.1/lan_cu.cgi](http://192.168.1.1/lan_cu.cgi)
配置文件查看：[http://192.168.1.1/dumpdatamodel.cgi](http://192.168.1.1/dumpdatamodel.cgi)

```

解密算法：

```python
import base64

class RouterCrypto:
    def __init__(self):
        from Crypto.Cipher import AES
        # key and IV for AES
        key = '3D A3 73 D7 DC 82 2E 2A 47 0D EC 37 89 6E 80 D7 2C 49 B3 16 29 DD C9 97 35 4B 84 03 91 77 9E A4'
        iv  = 'D0 E6 DC CD A7 4A 00 DF 76 0F C0 85 11 CB 05 EA'
        # create AES-128-CBC cipher
        self.cipher = AES.new(bytes(bytearray.fromhex(key)), AES.MODE_CBC, bytes(bytearray.fromhex(iv)))

    def decrypt(self, data):
        output = self.cipher.decrypt(data)
        # remove PKCS#7 padding
        return output[:-ord(output[-1:])]


encrypted = input('请输入密码字串：')
print('解密密码为：', RouterCrypto().decrypt(base64.b64decode(encrypted)).decode('UTF-8'))

```


### 瑞斯达康
#### 联通MSG2100E-UPON-4V

注意要点上面菜单的保存配置
管理员192.168.1.1/cu.php   
CUAdmin   
CUAdmin   

防火墙关掉，开telnet，新建一个管理员账号，用它账号密码进telnet

telnet或ttl连上  输入enable  testnode 密码rcios.test，再接着输入bn ct01  回车后输入end 再回车输入reboot 按y确认，切换公版。


这货的uboot密码也很奇葩就在uboot下按ctrl+u键提示输入密码:uboot!

#### 电信AC-8

此系列的，基本配置，接口，pon，记好loid，和对应各网络连接，有的静态ip，需要记好。

然后拔光纤捅复位，标密进去，系统管理，新建一个超管，密码要足够复杂!QAZ2wsx#EDC，插回光纤，注册即可。


### 吉视传媒

吉林的宽带192.168.0.1
普通账号admin/admin
超管root/root

机顶盒密码四位数一般为
0000 1234 6666 9999 8888

### 中兴

#### 中兴换猫

详细教程
https://zhuanlan.zhihu.com/p/7384412244

#### 北京中兴开telnet工具  用user账密，不需超管

直接改桥接命令
https://www.right.com.cn/forum/thread-8225766-1-1.html
```
**第二步：**  
输入命令：  
sendcmd 1 DB p WANC  
并将显示的内容复制下来备用。你大概会得到以下内容：  
<Tbl name="WANC" RowCount="5">  
        <Row No="0">  
                <DM name="ViewName" val="IGD.WD1.WCD2.WCPPP1"/>  
                <DM name="WANCDViewName" val="IGD.WD1.WCD2"/>  
                <DM name="Enable" val="1"/>  
                <DM name="WANCType" val="0"/>  
                <DM name="ConnType" val="1"/>  
                <DM name="TriggerEnable" val="0"/>  
                <DM name="LANDViewName" val=""/>  
                <DM name="WANCName" val="2_INTERNET_R_VID_3961"/>  
……  
        </Row>  
        <Row No="1">  
                <DM name="ViewName" val="IGD.WD1.WCD3.WCIP1"/>  
                <DM name="WANCDViewName" val="IGD.WD1.WCD3"/>  
……  
        </Row>  
  
请记住 2_INTERNET_R_VID_3961 出现在哪个Row No里。比如上面的例子，就是Row 0  
接下来输入：  
sendcmd 1 DB set WANC 0 ConnType 4
意思是将  WANC 表的 0 行 ConnType 字段值改为 4：sendcmd 1 DB set 表名(WANC) 行数(0) 字段名(ConnType) 字段值(4)  
万一你看到的 2_INTERNET_R_VID_3961 出现在了其他row里，将 WANC后面的数字0改成相应的Row no就可以。  
然后输入以下命令保存设置：  
_sendcmd 1 DB save_  
  
到这里理论上就已经将模式改成桥接了，重启光猫，然后把光纤插回去。  
用光猫的Lan1口连接路由器，就可以使用路由器拨号了。  
  
今后如果想改回路由模式，用命令：  
_sendcmd 1 DB set WANC 0 ConnType 0_  
就可以  
  
以下内容不做也可以：  
如果有兴趣可以顺手把telnet功能打开，方便以后折腾：  
方法如下，分别输入一下五个命令，复制一条命令执行一次：  
_sendcmd 1 DB set TelnetCfg 0 TS_Enable 1__sendcmd 1 DB set PortControl 3 PortEnable 1_  
_sendcmd 1 DB set TelnetCfg 0 Lan_Enable 1_  
_sendcmd 1 DB set TelnetCfg 0 Lan_EnableAfterOlt 1_  
_sendcmd 1 DB save_  
以后你就可以插上光纤用telnet登陆了。
```


#### F632（悦me界面）


F632电信，登录默认，打开下载配置文件，解密

```
http://192.168.1.1/common_page/File_Download_lua.lua?downtype=0&IF_FILEPATH=/userconfig/cfg/db_user_cfg.xml&IF_FILENAMEUTF8=db_user_cfg.xml8
```

#### 电信企业猫ZXEN CG200-8G8V
用2.exe，开telnet
```
./2.exe -l xxx open -i 192.168.1.1
```



#### F607za
默认开telnet，或者用老工具开，无需超密。

#### F660海南电信

无法用以下通用开telnet，拔捅复位3分钟，足够久复位，telnet默认开，插光纤telnet被关，loid和密码还在，此时登录超管，再插光纤，不会被退出，再注册。


#### F412/F460/F612/F660/F623等23端口被关闭处理方法：  

中兴下面是解决23端口被关闭的方法。
1，开个dos窗口一直ping，用如下命令  
```
ping 192.168.1.1 -l 128 -t
```  

2，   再开一个dos窗口  

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
sendcmd 1 DB delr WANC 0
```


```
sendcmd 1 DB set DevAuthInfo 0 Pass admin1234
sendcmd 1 DB save
```

```
sidbg 1 DB set TelnetCfg 0 TSLan_UName root  
sidbg 1 DB set TelnetCfg 0 TS_UPwd 123Qwe
```

```
sendcmd 1 DB delr WANC 0
```

```
sidbg  1 DB delr WANC 0
```

```
sidbg 1 DB set TelnetUser 0 Username root
sidbg 1 DB set TelnetUser 0 Password 123Qwe
sidbg 1 DB set DevAuthInfo 0 Pass admin1234
sidbg 1 DB save
```

   /etc/init.d/regioncode       查询地区代码  
   upgradetest sdefconf 310     310代表广东，其他地区找对应代码  
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

sendcmd 1 DB set WANC 1 ConnType 4

```
sidbg 1 DB set DevAuthInfo 0 Pass aDm8H%MdA
sidbg 1 DB save   
```

```
sidbg 1 DB set WANC 1 ConnType 4
```

```
sidbg 1 DB delr WANC 0
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
sendcmd 1 DB set WANC 0 WANCType 0
```

###  上海电信F450G(悦me样)
#### V1.0版本
useradmin登录后，直接在该页面地址（不需删除内容）后添加
```
/dumpmdmd.conf
```
下载文件，后搜索，password
字母加数字的部分即是：Ncqrvlcr36
`Password&gt;Ncqrvlcr36&lt;/Password&gt;#j@b8S?%&lt`

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



### 联通UNG310H
普通账户登录后，输下面，下载romfile.cfg文件，搜索admin  
```
http://192.168.1.1/cgi-bin/upgrade.asp
```

```
http://192.168.1.1/romfile.cfg
```

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
```xml
<X_HW_UserInfo UserName="$24Y`P;n_0(49&lt;s-%sZXu1&amp;du3#4IP=&amp;QOJZKLOSiE$" 【这是loid，在网页上先填写后保存】UserId="" Status="0【这里99改为0】" Limit="10" Times="0" Result="1【这里99改为1】" ForceSupport="1【这里99改为1】" X_HW_InformStatus="0" X_HW_AcsCnnctSatus="0"/>
```
禁用tr069 wan使能，WANIPConnectionInstance
```xml
<WANIPConnectionInstance InstanceID="1" Enable="1"【这里改为0，关闭使能】 Reset="0" PossibleConnectionTypes="" ConnectionType="IP_Routed" Name="" LastConnectionError="ERROR_NONE" AutoDisconnectTime="0" IdleDisconnectTime="0" WarnDisconnectDelay="0" RSIPAvailable="0" NATEnabled="1" AddressingType="DHCP" DNSEnabled="1" DNSOverrideAllowed="0" DNSServers="" MaxMTUSize="1500" MACAddressOverride="0" ConnectionTrigger="" RouteProtocolRx="" ShapingRate="0" ShapingBurstSize="0" PortMappingNumberOfEntries="0" PortTriggerNumberOfEntries="0" X_HW_SERVICELIST="TR069" X_HW_VLAN="46" X_HW_PRI="0" X_HW_MultiCastVLAN="4294967295" X_HW_VenderClassID="" X_HW_E8C_LanInterface="" X_HW_TR069FLAG="0" X_HW_IPv4Enable="1" X_HW_IPv6Enable="0" X_HW_IPv6MultiCastVLAN="-1" X_HW_MacId="1">
<X_HW_6RDTunnel Enable="0" RdMode="Dynamic" RdPrefix="" RdPrefixLen="40" RdBRIPv4Address="" RdIPv4MaskLen="10"/>
</WANIPConnectionInstance>
```

tr069最开始短的部分，第一个
```xml
<WANIPConnectionInstance InstanceID="1" Enable="0" Reset="0" PossibleConnectionTypes="" ConnectionType="IP_Routed" Name="" LastConnectionError="ERROR_NONE" AutoDisconnectTime="0" IdleDisconnectTime="0" WarnDisconnectDelay="0" RSIPAvailable="0" NATEnabled="0" AddressingType="DHCP" DNSEnabled="1" DNSOverrideAllowed="0" DNSServers="" MaxMTUSize="1500" MACAddressOverride="0" ConnectionTrigger="" RouteProtocolRx="" ShapingRate="0" ShapingBurstSize="0" PortMappingNumberOfEntries="0" PortTriggerNumberOfEntries="0" X_HW_SERVICELIST="TR069" X_HW_VLAN="50" X_HW_PRI="6" X_HW_MultiCastVLAN="4294967295" X_HW_VenderClassID="" X_HW_E8C_LanInterface="" X_HW_TR069FLAG="0" X_HW_IPv4Enable="1" X_HW_IPv6Enable="0" X_HW_IPv6MultiCastVLAN="-1">
```


直接改桥接，搜索WANPPPConnectionInstance，替换原来internet的那段，909行号附近，注意改vlan
```xml
<WANPPPConnectionInstance InstanceID="1" Enable="1" Reset="0" PossibleConnectionTypes="IP_Routed,PPPoE_Bridged" ConnectionType="PPPoE_Bridged" PPPoESessionID="1" Name="" AutoDisconnectTime="" IdleDisconnectTime="180" WarnDisconnectDelay="0" RSIPAvailable="0" NATEnabled="0" Username="" Password="" PPPEncryptionProtocol="None" PPPCompressionProtocol="None" PPPAuthenticationProtocol="PAP" RemoteIPAddress="" MaxMRUSize="1492" DNSEnabled="1" DNSOverrideAllowed="0" DNSServers="" MACAddressOverride="0" TransportType="PPPoE" PPPoEACName="" PPPoEServiceName="" ConnectionTrigger="AlwaysOn" RouteProtocolRx="Off" PPPLCPEcho="0" PPPLCPEchoRetry="0" ShapingRate="-1" ShapingBurstSize="0" PortMappingNumberOfEntries="0" PortTriggerNumberOfEntries="" X_HW_SERVICELIST="INTERNET" X_HW_VLAN="44【vlanid要改这里】" X_HW_PRI="0" X_HW_MultiCastVLAN="4294967295" X_HW_ConnectionControl="0xFFFFFFFF" X_HW_IPMode="0" X_HW_IPv4Enable="1" X_HW_IPv6Enable="1" X_HW_IPv6MultiCastVLAN="-1" X_HW_E8C_LanInterface="InternetGatewayDevice.LANDevice.1.LANEthernetInterfaceConfig.1,InternetGatewayDevice.LANDevice.1.LANEthernetInterfaceConfig.2,InternetGatewayDevice.LANDevice.1.LANEthernetInterfaceConfig.3" X_HW_TR069FLAG="0" X_HW_PriPolicy="Specified" X_HW_DefaultPri="0" X_HW_MacId="1" X_HW_WanId="0" X_HW_LanDhcpEnable="1" X_HW_E8C_DsliteEnable="0" X_HW_E8C_DsliteMode="0" X_HW_E8C_DsliteAftr="" X_HW_LcpEchoReqCheck="0" X_HW_ExServiceList="" X_HW_NatType="0" X_HW_IPForwardList="" X_HW_E8C_IPv6IPAddress="" X_HW_E8C_IPv6IPAddressAlias="" X_HW_E8C_IPv6IPAddressOrigin="AutoConfigured" X_HW_E8C_IPv6DNSServers="" X_HW_E8C_DefaultIPv6Gateway="" X_HW_E8C_IPv6PrefixAlias="" X_HW_E8C_IPv6PrefixOrigin="PrefixDelegation" X_HW_E8C_IPv6Prefix="" X_HW_E8C_IPv6PrefixPltime="0" X_HW_E8C_IPv6PrefixVltime="0" X_HW_E8C_IPv6DomainName="" X_HW_E8C_IPv6PrefixDelegationEnabled="0" X_HW_Dnsv4ProxyForV6="0" X_HW_UpPortId="0" X_HW_IdleDetectMode="DetectBidirectionally" X_HW_Tr069Invisible="0" X_HW_CU_IPForwardModeEnabled="0" X_HW_CU_IGMPProxyEnable="0" X_HW_BindPhyPortInfo="LAN1,LAN2,LAN3" X_HW_IPv6_PortForwardNumberOfEntries="0" X_HW_RemoteWanInfo="" X_HW_IPv6PppUp="0" X_HW_DHCPv6ForAddress="0" X_HW_IGMPEnable="0" X_HW_RouteProtocolRxMode="Passive" X_HW_RouteProtocolAuthMode="Off" X_HW_RouteProtocolAuthKey="" X_HW_UnnumberedModel="0" X_HW_TDE_IPv6AddressPrefixLength="64" X_HW_TDE_IPv6AddressingType="SLAAC" X_HW_Flag="0" X_HW_LowerLayers="" X_HW_VLANMode="2" X_HW_HURL="" X_HW_MOTM="" X_HW_StaticRouteInfo="" X_HW_DscpToPbitTbl="" X_HW_UpstreamWAN="0" X_HW_ConnectionDelay="30" X_HW_BridgeEnable="0" X_HW_CU_MLDProxyEnable="0" X_HW_TRUE_IPMode="" X_HW_TRUE_IPv6DNSAddressSource="" X_HW_AgentRemoteIdMode="off" X_HW_NPTv6Enable="0" X_HW_VXLAN_Enable="0" X_HW_SpeedLimit_UP="0" X_HW_SpeedLimit_DOWN="0" X_HW_PingResponseEnable="0" X_HW_IPv6LLA="" X_HW_PingResponseWhiteList="" X_HW_OperateDisable="0" LastDisconnectTime="">
<X_HW_6RDTunnel Enable="0" RdPrefix="" RdPrefixLen="40" RdBRIPv4Address="" RdIPv4MaskLen="10"/>
<X_HW_IPv6>
<IPv6Address NumberOfInstances="1">
<IPv6AddressInstance InstanceID="1" Alias="cpe-1" Origin="" IPAddress="" ChildPrefixBits="" X_HW_E8C_DnsIpAddr="" AddrMaskLen="64" DefaultGateway=""/>
</IPv6Address>
<IPv6Prefix NumberOfInstances="1">
<IPv6PrefixInstance InstanceID="1" Alias="cpe-1" Origin="" Prefix="" X_HW_E8C_ChildPrefixBits="" X_HW_CU_PreferredLifeTime="" X_HW_CU_ValidLifeTime=""/>
</IPv6Prefix>
</X_HW_IPv6>
</WANPPPConnectionInstance>
```


### 华为

#### 华为移动猫
记录注册码，vlanid，宽带账号密码，iptv等信息，复位，用初始密码切换地区，切换**江苏**填好宽带账号数据，输入Password注册。

管理，设备管理，关闭rms注册跳转即可，即可关闭rms劫持跳转注册，网络直接可用，远程连接数据也都是可编辑的。


开telnet后
```
telnet 192.168.1.1
root #用户名
adminHW #密码
su #提权，此时只能使用华为内置的定制命令，输入?显示所有可用的命令。
shell #进入shell
ls #能列出文件即表示shell补全成功。
```

此时shell用户其实是srv_ssmp，可以再输入一次su(密码:admin)提升为root。

获取超管权限有三种方式

> 1. 提升useradmin为超级权限用户  
> 2. 查询超管用户telecomadmin密码  
> 3. 增加一个超管用户


```
telnet 192.168.1.1
root
adminHW
su
shell

cd /mnt/jffs2/ #进入/mnt/jffs2目录
cp -f hw_ctree.xml hw_ctree.xml.bak #备份是个好习惯
cp -f hw_ctree.xml mycfg.xml.gz #拷贝一份出来
aescrypt2 1 mycfg.xml.gz tem #1为解密 0为加密，tem是key，加密也用这个
gzip -d mycfg.xml.gz #解压
```

```
cd /mnt/jffs2/
cp -f hw_ctree.xml hw_ctree.xml.bak
cp -f hw_ctree.xml mycfg.xml.gz
aescrypt2 1 mycfg.xml.gz tem
gzip -d mycfg.xml.gz
```

到这里为止我们得到了一个解密后的mycfg.xml文件

看看其中用户设置部分

```xml
<X_HW_WebUserInfo NumberOfInstances="2"> 
<X_HW_WebUserInfoInstance InstanceID="1" ModifyPasswordFlag="0" UserName="useradmin" Password="$2yyyyyyyyyyyyyyyyyyy" UserLevel="1" Enable="1" Alias="cpe-1" Salt="c3d06c58fc5ad62c23979eff" PassMode="3"/>
<X_HW_WebUserInfoInstance InstanceID="2" ModifyPasswordFlag="1" UserName="telecomadmin" Password="$2;xxxxxxxxxxxxxxxxxx$" UserLevel="0" Enable="1" Alias="cpe-2" PassMode="3" Salt="50181e70bec28dd7aaa6f4f5"/>
</X_HW_WebUserInfo>
```

```
NumberOfInstances=2 用户总数为2
InstanceID="1" 用户序号
UserLevel="1" 1为普通用户 0为超级用户
Enable="1" 1启用 0禁用
Alias="cpe-1" 别名，不重要
Salt="c3d06c58fc5ad62c23979eff" 盐，加密用的随机数
PassMode="3" 加密模式 ，0表示明文不加密
```

搞懂这段代码的含义就可以修改了，根据自己需要选择下面三个操作中的任意一个或几个
##### 法1：
1、提升useradmin为超级权限  
把useradmin这一行的UserLevel=”1″改为UserLevel=”0″即可

##### 法2：
2、查询超管telecomadmin的密码  
telecomadmin这一行内$与$之间的xxxxxxxxxxxxxx$就是超管密码，用华为解密工具的密文解密里的$2解密即可

grep WebUserInfoInstance mycfg.xml #提取包含有超管密码的项password字段

```
grep WebUserInfoInstance mycfg.xml
```

直接查：

telnet 192.168.1.1
root
adminHW
```
display current-configuration grep telecomadmin
```

屏幕上会直接打印出含有telecomadmin账户密码的行，解密即可

##### 法3：

修改
<X_HW_WebUserInfo NumberOfInstances="2">
为
<X_HW_WebUserInfo NumberOfInstances="3">

在telecomadmin这一行下面新增一行,表示新增一个超管admin密码为newpasswd
```
<X_HW_WebUserInfoInstance InstanceID="3" ModifyPasswordFlag="0" UserName="admin" Password="newpasswd" UserLevel="0" Enable="1" Alias="cpe-3" PassMode="0" />
```

完成修改以后

gzip mycfg.xml #压缩
aescrypt2 0 mycfg.xml.gz tem #加密
cp -f mycfg.xml.gz /mnt/jffs2/hw_ctree.xml #替换
reboot #重启生效

```
gzip mycfg.xml
aescrypt2 0 mycfg.xml.gz tem
cp -f mycfg.xml.gz /mnt/jffs2/hw_ctree.xml
reboot
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

### 联通华为HN8145XR
记下loid，重置，登录CUAdmin，断开光猫，管理，配置文件，导出hw_ctree.xml，用华为解密工具解密，编辑，修改CUAdmin


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
华为电信和移动的光猫（华为制造）一般都使用`sha256(md5(明文密码))`作为加密手段（加密后是64位密文）
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
find_secret('482ee1e24e17ff1e83e425c20c2f9f926e011eb2391024616d220e6d7d201de0', 8)
    
```

### 

### 刷机h10-13改电视盒子
https://www.znds.com/tv-1246416-2-1.html

#### h10-13ac(天津)
此类型有两个cpu两个系统，一个电视盒子，一个光猫。
复位方法，持续捅复位，不定时松开，持续10分钟左右。

当盒子使用，需要配置网络，先进超管，网络-宽带设置-上行口，选lan。默认的网络链接改一下重新新建一个网络连接，ipv4，链接模式DHCP模式，vlan不启用，端口wifi都勾选，如图：
![[Pasted image 20250330002445.png]]
![[Pasted image 20250330002604.png]]

U盘装当贝桌面等其他软件，设置里面查看已经安装的软件，打开就行了
https://www.right.com.cn/forum/thread-7110520-1-1.html

### 单线复用
https://zhuanlan.zhihu.com/p/109457053
核心：原iptv绑定端口不勾，网络vlan绑定，选lan1，wan侧vlan选iptv链接，用户侧vlan用iptv的vlanid。
![[Pasted image 20250330005309.png]]
样式1中兴
![[Pasted image 20250330005353.png]]![[Pasted image 20250330005420.png]]![[Pasted image 20250330005439.png]]
华为猫

![[Pasted image 20250330005503.png]]

路由器侧，每个型号不一样
![[Pasted image 20250330005552.png]]![[Pasted image 20250330005607.png]]
### 光猫当路由器交换机用

#### 光猫直接当路由器

**1、LAN口 IPv4关闭DHCP服务，IPv6关闭RA和DHCP服务**
**2、删除光猫WAN口里的所有配置（宽带设置）
3、新建WAN**
IP协议版本：任意（选IPv4不影响获取IPv6地址）  
模式：桥接（Bridge）  
端口绑定：SSID1、SSD5、上联路由器的网口（如LAN1~4）  
DHCP服务：关闭  
VLAN：不启用
**4、设置Wi-Fi名和密码**  
与主路由设置相同的SSID、密码和加密方式可以实现无线漫游



#### 猫桥接后兼做路由器交换机

**0、电脑有线连接光猫，电脑IP设置192.168.1.2、掩码255.255.255.0，其他可不填**  
1、LAN口-IPv4关闭DHCP服务，IPv6关闭RA和DHCP服务

**2、修改WAN口Internet绑定端口（宽带桥接设置）**  
仅绑定下联路由器的端口，DHCP服务关闭，其他不变，不影响IPTV ，这个是桥接的连接。 

**3、新建WAN连接**  
IP协议版本：任意（选IPv4不影响获取IPv6地址）  
模式：桥接  
**端口绑定：SSID1、SSID5、除Internet/IPTV/iTV外的任意LAN口（如LAN2~4）**  
**请务必不要与已绑定的端口重复！！！**  
**请务必不要与已绑定的端口重复！！！**  
**请务必不要与已绑定的端口重复！！！**  
DHCP服务：关闭  
VLAN：不启用  

拨号设备网线回连猫。

**4、设置Wi-Fi名和密码**  
与主路由设置相同的SSID、密码和加密方式可以实现无线漫游

https://www.right.com.cn/FORUM/thread-8393629-1-1.html

## 改sn，改地区

中兴光猫：
查看区域
```
cat /etc/init.d/regioncode
```
改地区（更改地区数字）
```
upgradetest sdefconf 211
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

```
修改MAC,SN,及设备标识。步骤如下：  
1.进入路由器 telnet 192.168.1.1 用户名密码:root   Zte521  
2.修改SN: setmac 1 2177 xxxxxxxx [SN为8字符]。  
3.修改设备标识: setmac 1 512 xxxxxxxxxxxxxxxxx [设备标识位17位字符]  
4.修改MAC地址:setmac 1 256 00:00:00:00:00:00  
setmac 1 257 00:00:00:00:00:00  
setmac 1 258 00:00:00:00:00:00  
setmac 1 259 00:00:00:00:00:00  
setmac 1 260 00:00:00:00:00:00  
以上命令输入 setmac 2 xxx 为查看（此处xxx为编码的ID号如256、512、2177）。  
需要注意的是，SN和设备标识一定要输入大写字母，mac输入小写字母，我在这里浪费好多功夫，大意了（因为SN和设备标识用setmac 2 xxx命令查询出来不是明文，是unicode 16进制编码！！！）。。。还有就是mac其实一直到262都还有，不过其实一般来说itms验证只绑定设备标识，虽说我是SN、设备标识、mac全都改了。。。另外，还给个福利，SN号其实有两个，2177是8位，还有个2178是9位，前面有个大写的G，就跟包装盒和设备上面条码印的一样。  
  
真正的重点来了哈！！！照此方法修改之后，会发现设备标识的前六位没有变，还是原来的，百度了好久都没发现改的方法。无奈，用secureCRT保存日志，配合excel用setmac 2 xxx命令从1一直查询到6000！！！终于，在眼睛都快看花之后，在768的位置找到了设备标识前6位。。。256。。。512。。。768。。。我TMD早该想到啊！还找了这么久！！！  
  
然鹅，最最最可悲的是，就在发帖前几分钟，我发现，在百度知道的一个角落里，有这样一段知道回答：  
  
f460修改设备标识方法方法适合硬件版本v3.0，软件版本V2.30.10P7T7S的中兴f460  
先查询mac及对应的id代码，命令setmac show  
修改命令setmac 1 id代码 新标识或mac  
以修改光猫23位设备标识号的前6位为666999例，从图中看id代码为768，修改命令setmac 1 768 666999
```

中兴详细改sn
https://zhuanlan.zhihu.com/p/7384412244

查询所有ID和SN  
```
setmac show
```
sismac 1 2177 HWTC67A1A3AF
sismac 1 512 80B07B-ZTEGCAC4A65C
sismac 1 256 F4:E4:51:4D:EE:AE
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

再打开下面的地址就可以自助修改省份了  
[http://192.168.1.1/opid_setting.cgi?set](http://192.168.1.1/opid_setting.cgi?set)  
  
  
还有一些其他的设置方法  
固件升级  
[http://192.168.1.1/upgrade.cgi](http://192.168.1.1/upgrade.cgi)  
[http://192.168.1.1/mobile_up.cgi](http://192.168.1.1/mobile_up.cgi)  
  
插件配置卸载路径  
[http://192.168.1.1/upgrade_plugin.cgi](http://192.168.1.1/upgrade_plugin.cgi)  
  
Upnp功能开启  
[http://192.168.1.1/upnp.cgi](http://192.168.1.1/upnp.cgi)  
  
usb备份、恢复  
[http://192.168.1.1/usb.cgi?backup](http://192.168.1.1/usb.cgi?backup)  
  
TR-069 RMS平台认证  
[http://192.168.1.1/tr69.cgi](http://192.168.1.1/tr69.cgi)  
  
AWIFI激活管理平台  
[http://192.168.1.1/awifi_config.cgi](http://192.168.1.1/awifi_config.cgi)  
  
设备mac,序列号，型号，厂商等信息修改  
[http://192.168.1.1/bucpe.cgi](http://192.168.1.1/bucpe.cgi)  
  
设置省份  
[http://192.168.1.1/opid_setting.cgi?set](http://192.168.1.1/opid_setting.cgi?set)

### GS3101改sn，mac


### 华为运营商定制版修改

登录超管后，打开，切换password，修改sn应用

```
http://192.168.1.1/html/amp/ontauth/password.asp
```

### 烽火改sn，mac

提升权限时会提示输入密码，密码为：Fh@ABCDEF，其中ABCDEF为光猫设备标识后六位，去掉分隔符，全部大写。

```
load preconfig 加省份全拼
```
**（省份首字母大写）**
```
load preconfig Liaoning
```


load_cli factory                                                       进入工程模式
set factorymode enable                                          开启写入模式
set device_oui ABCDEF                                           设置OUI
set device_sn CIOT04985D68                      设置sn
set gpon_sn FHTT04985D68
set onu_mac C0:98:DA:98:5D:68                            设置mac
set factorymode disable                                         退出写入模式
exit                                                                        退出工程模式。
reboot                                                                   重启光猫生效。

**第三步，改地区**  
改地区有命令的方式，也有工厂模式网页管理端的方式，这里两种方式我都写出来，但是我偏向于工程模式管理端的方式改地区，因为我在命令的方式改地区后，注册卡在了98%，不是IPTV 不能用就是电话不能用，**最后还是用工厂模式管理页面改地区后才下发注册到100%，宽带，IPTV，电话全部正常**  
**命令的方式**:获得超密一样，win键+R,打开命令，然后输入cmd，弹出命令窗口后，复制 telnet 192.168.1.1，然后粘贴在命令窗口，下一步输入用户名：telecom ，密码：nE7jA%5m（输入密码时是不显示的，也可先复制好，右键在窗口点一下即可粘贴），之后输入 su ，密码输入Fh@（MAC后6位），然后输入load_cli factory，进入工厂模式，然后输入load preconfig（这就是改地区的命令） ，load preconfig空格你的城市拼音，假设是上海就输入load preconfig shanghai  
**工厂模式管理端的方式:**先开启隐藏账户，浏览器地址打开[http://192.168.1.1](http://192.168.1.1/)   然后输入用户名：telecom 输入密码：nE7jA%5m登录，在再新建一个，地址输入打开 [http://192.168.1.1:8080/html/logoffaccount.html](http://192.168.1.1:8080/html/logoffaccount.html)，必须先在[http://192.168.1.1](http://192.168.1.1/) 上用超密登录，不然 [http://192.168.1.1:8080/html/logoffaccount.html](http://192.168.1.1:8080/html/logoffaccount.html)这个网址会无法打开，打开后，开启隐藏账户、TR069 WAN连接、ITMS参数，点保存， 如下图  
![](https://www.right.com.cn/forum/data/attachment/forum/202311/06/233333emiiwaz1egzfumzs.jpg)

**3.jpg** _(6.09 KB, 下载次数: 0)_

[下载附件](https://www.right.com.cn/forum/forum.php?mod=attachment&aid=NjUzOTE2fGZhNzBiY2U0fDE3MzIxMjEzMzV8ODY4MjQ4fDgzMTEzNDM%3D&nothumb=yes)  保存到相册

2023-11-6 23:33 上传

  
之后win键+R,打开命令，然后输入cmd，弹出命令窗口后，复制 telnet 192.168.1.1，然后粘贴在命令窗口，下一步输入用户名：telecom ，密码：nE7jA%5m，之后输入 su ，密码输入Fh@（MAC后6位），然后输入load_cli factory，进入工厂模式，然后输入 load_cli factory，然后输入 set factorymode enable，然后输入 set xvr_tx ON，输入完就是在浏览器上输入192.168.1.1或是192.168.1.1:8080 ，可能不同的光猫有所不同，反正可以打开工厂模式管理页面就行，如下图，会显示处于工厂模式的  
![](https://www.right.com.cn/forum/data/attachment/forum/202311/06/233815vk0vxmwa5xcmvdwv.jpg)  
  
登录账号密码就不是之前的超密了，是烽火自己的，**账号fiberhomehg2x0，密码hg2x0，**登录后就能看到熟悉的出厂设置，预设值模式下的改地区，还有恢复开箱模式，改GPON或是EPON等了，如下图  
![](https://www.right.com.cn/forum/data/attachment/forum/202311/06/234103i6y9vnq7ay5kwzry.jpg)  
  
至此telnet，超密，改地区，恢复开箱就都全部搞定了

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

手动修改注册状态  

```
cfg_cmd set InternetGatewayDevice.X_CU_UserInfo.Status 0
```
//0=成功，1=身份证不存在，2=宽带账号不存在，3=身份证与宽带账号匹配失败，4=超时，5=已经注册过且无新的工单要执行，99=无认证结果信息  

```
cfg_cmd set InternetGatewayDevice.X_CU_UserInfo.Result 1 
```
//0=开始下发，1=下发成功，2=下发失败，99=无下发结果信息

### 创维SK改sn，地区
**查看地区代码**
```
/etc/init.d/regioncode
```

**查看当前光猫所在地区**
```
siupgrade gdefconf
```

**下列命令为将光猫修改为辽宁地区，329为辽宁地区代码  
```
siupgrade sdefconf 329
```

**（修改地区以后，光猫会自动重启，重启以后超管密码就变成公开的了）**

**查看设备所有ID代码**

```
sismac show
```

**查看设备所有ID代码（显示十进制）**
```
sismac info
```

**下列命令+空格+ID代码+所要修改的参数**

```
sismac 1
```

**下列命令+空格+ID代码，就把参数清除了**
```
sismac 3
```

**保存配置**

```
sidbg 1 DB save
```

**重启光猫**

```
reboot
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

TEWA系列改模式
【光芯片不支持或双模自适应光猫不要改！！！】  
【否则后果自负！！！】  
改为GPON：  
qoecmd PonType set G  
改为EPON：  
qoecmd PonType set E  
改为XGPON：  
qoecmd PonType set 10G  
改为10GEPON：  
qoecmd PonType set 10E  
然后记得保存一下：  
qoecmd save


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
## 换猫改SN

电信，小翼管家有个自助更换网关

#### 山东河南联通换猫直接用loid注册即可，没有绑定
#### 天津联通换猫，直接loid配置，手动配置网络即可
iptv不勾选，保持和原猫一致，vlan id 2802，优先级3，nat使能，组播3801

#### 安徽移动，loid改sn，mac还不行，拨号上，
#### 湖南移动认sn，mac，改完拨号屏蔽注册页即可
```
sendcmd 1 DB set PDTCTUSERINFO 0 Status 0  
sendcmd 1 DB set PDTCTUSERINFO 0 Result 1  
sendcmd 1 DB set PDTCTUSERINFO 0 tForcePushFlg 0
sendcmd 1 DB save
```

```
sidbg 1 DB set PDTCTUSERINFO 0 Status 0  
sidbg 1 DB set PDTCTUSERINFO 0 Result 1  
sidbg 1 DB set PDTCTUSERINFO 0 tForcePushFlg 0
sidbg 1 DB save
```
#### 广东移动、广东电信，光猫改广东地区即可注册
#### 广西电信，光猫改广西地区即可注册
#### 湖南联通、上海电信，陕西电信没有vlan id
#### 北京联通mac认证，不需要loid
#### 河北联通mac认证，不需要loid，不会自动下发
#### 山西移动，联通mac认证
#### 天津电信，直接loid注册
#### 天津联通，云南联通，注册不会下发上网账号密码
#### 辽宁山东联通换猫，直接注册

## 数据下发

### 不下发：
河南联通
天津联通
河北联通
江苏联通

### 下发id，不下发宽带账号密码
云南联通
贵州联通，41，（新装宽带密码随机）
陕西移动
吉林电信，41
海南联通，88
青海电信，41，
黑龙江电信，41



## 注册自动下发：
广东移动，广东联通，广东电信，
福建联通，
浙江联通
湖南联通
山西联通
山东联通，固话也下发(贝尔140)
海南电信，（loid和密码）
新疆联通


## 宽带密码
123456，123123，321321,12345678，后6位，888888，666666
#### 北京移动，应该是装机日期，格式：20220202，loid：Bj开头
#### 辽宁移动，12345678或后8位
#### 海南移动，账号手机号，密码kd123456
#### 黑龙江移动，后6位
#### 浙江移动，后6位
#### 江苏移动，账号手机号，密码112233，企宽123123（装机时手动设置的）
#### 四川移动（账号不是手机号的话，取手机后6位），
#### 广东移动东莞移动，后6位，一般后6位
#### 陕西移动，后6位，123456
### 河南移动，123456
### 湖北移动，888888

#### 辽宁联通，后6位或8位数字或123456
#### 河南联通、湖北联通、湖南联通、天津联通、上海联通、吉林联通，123456
#### 山东联通、江苏联通、安徽联通、云南联通，后6位
#### 内蒙古联通，123456或013579或身份证后6位（客服不一定知道，不能修改到）
#### 海南联通，后6位
#### 山西太原联通 1234567890

#### 河北电信，后6位
#### 吉林电信，5种：123456,123321,135246,155413，账号后6位 


## 注册码

#### 江苏移动
江苏家宽账号/手机号后10位，企业宽带：a+账号后9位

#### 湖北移动
SN认证，PASSWORD天sn后10位

#### 西藏联通
loid+密码123456


#### 陕西联通
loid+密码

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

#### 湖南联通mac认证
loid和账号一样
073800292846

#### 湖南联通，河北联通，山西联通，贵州联通，江西联通，北京联通无loid，mac自动认证

#### 福建电信
loid密码=loid

#### 辽宁电信，湖南电信，海南电信，西藏电信： loid+密码


## 案例

> [[2010-01-02 - A series of examples of modem customers]]





--------

## 网站
恩山：https://www.right.com.cn
宽带技术网：https://www.chinadsl.net/
csdn：

## 失败




账户
text
base64，md5加密

移动宽带账号
一般6位数：123123，账号后六位


电信和移动的光猫（华为制造）一般都使用sha256(md5(明文密码))作为加密手段（加密后是64位密文）
解密网站：md5.cn
https://blog.csdn.net/qq_26373925/article/details/112798210

nmah5pmh

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
方法很简单，使用CMCCAdmin（密码aDm8H%MdA）登录192.168.1.1，然后打开这个链接：
```
http://192.168.1.1/bd/vermod.asp
```

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


https://www.right.com.cn/FORUM/thread-8253868-1-1.html
【[https://blog.csdn.net/nordpol/article/details/124937187](https://blog.csdn.net/nordpol/article/details/124937187)】  
详情步骤：  

【2】再打开这个链接，开启telnet功能。（打开隐藏配置界面：
```
192.168.1.1/hidden_version_switch.html
```
勾选telnet功能，一闪而过不用在意。）  
  
  
【3】然后本地可以测试一下光猫telnet功能是否打开（开始-运行-cmd-telnet192.168.1.1，用户名user，密码随意，进不去也无所谓，这一步是确保光猫启用了telnet功能，配置中会留下明文密码）  
【4】ftp链接光猫。这里我使用的是winscp，ftp连接光猫，账户密码都是useradmin/useradmin（看下图），/var/tmp/目录下，找到telnet_su_passwd 文件，打开即可获得  
  



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





友华
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




