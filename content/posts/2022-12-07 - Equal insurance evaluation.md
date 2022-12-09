---
title: "等保评测整改措施教程"
subtitle: ""
date: 2022-12-07T16:56:32+08:00

lastmod: 2022-12-07T18:15:32+08:00
draft: false
description: "等保评测整改过程，操作"
keywords: "等保评测"
tags:
- 等保评测
categories:
- 等保评测
featuredImage: ""
featuredImagePreview: ""

author: "Kingpo"
authorLink: ""
authorEmail: ""

comment: true
weight: 0

toc:
  enable: true

seo:
  images: []

---

<!--more-->

## 操作系统基线配置

### 第1章 Linux操作系统加固

  

#### 1.1 检查设备密码复杂度策略

加固方案

1、编辑配置文件/etc/pam.d/system-auth，在文件中找到开头为如下字样的内容：

password requisite  pam_cracklib.so

将其修改为：
```
password requisite  pam_cracklib.so try_first_pass retry=3 minlen=8 dcredit=-1 ucredit=-1 ocredit=-1 lcredit=-1 ###口令长度不小于8，至少包含1位数字、大写字母、特殊字符、小写字母。

```
#### 1.2 检查是否设置口令过期前警告天数

加固方案

1、修改策略设置，编辑文件/etc/login.defs，在文件中加入如下内容(如果存在则修改，不存在则添加)：
```
PASS_MAX_DAYS     90

PASS_MIN_DAYS     0

PASS_MIN_LEN      8

PASS_WARN_AGE     7
```

#### 1.3 检查是否设置登录失败锁定、超时自动退出

加固方案

1、修改策略设置，编辑文件/etc/pam.d/sshd，在文件第二行加入如下内容(如果存在则修改，不存在则添加)：
```
password requisite  pam_tally2.so deny 5 lock_time 2 even_deny_root unlock_time=60
```
2、在/etc/profile文件中增加如下两行(存在则修改，不存在则添加)：
```
TMOUT=600

export TMOUT 
```

3、执行以下命令使TMOUT参数立即生效
```
###source /etc/profile    
```
#### 1.4 检查是否禁用telnet

加固方案

1、 执行netstat -an | grep “:23”查看telnet是否在运行

2、 禁用telnet运行，禁止开机启动chkconfig telnet off

#### 1.5 如何禁用解禁账户

加固方案

把账号禁用可以有几个方法：
1. 
```
 ### usermod -L <username>

    ### usermod -U <username>                // 解除禁用
```
2.  修改/etc/passwd文件，可以有几个地方

1）把第二个字段中的"x"变成其它的字符，该账号就不能登录

2）把/bin/bash修改成/sbin/nologin

3. 修改/etc/shadow文件

1）在第二个密码字段的前面加上一个“!”，该账号就不能登录，这个其实就是usermod -L命令的结果

2）在最后两个冒号之间加上数字"1"，表示该账号的密码自1970年1月1日起，过一天后立即过期，当然现在自然就不能登录了。

如果想解禁，把修改的东西去掉就可以了。

#### 1.6 检查是否禁止root用户远程登录

加固方案

1、新建一个普通用户并设置高强度密码(防止设备上只存在root用户可用时，无法远程访问)：
```
###useradd username

###passwd username
```
2、禁止root用户远程登录系统

编辑文件/etc/ssh/sshd_config，修改PermitRootLogin值为no并去掉注释。

`PermitRootLogin no`

3、重启SSH服务
```
###/etc/init.d/sshd restart
```
#### 1.7 添加审计员、安全员账户

加固方案

1、新建普通用户并设置高强度密码
```
###useradd username

###passwd username
```
使用chmod为添加的两个账户加合适的权限

#### 1.8 开启审计进程

加固方案
```
service auditd restart
```
#### 1.9 检查历史命令设置

加固方案

1、编辑文件/etc/profile，在文件中加入如下两行(存在则修改)：
```
HISTFILESIZE=0  ###HISTFILESIZE 定义了在 .bash_history 中保存命令的记录总数，可以理解为.bash_history文件中最多只有HISTFILESIZE行

HISTSIZE=0      ###定义了 history 命令输出的记录数，即输出.bash_history文件中的最后HISTSIZE行
```
2、执行以下命令让配置生效
```
###source /etc/profile

系统漏洞需注意升级最新版本的openssh 目前是8.0
```
![](https://s.imgkb.xyz/abcdocker/2022/12/09/f97863ff91bfb/f97863ff91bfb.png)

![](https://s.imgkb.xyz/abcdocker/2022/12/09/9273f78c8ade9/9273f78c8ade9.png)



### 第2章 Windows操作系统加固

#### 2.1 管理缺省账户

进入“开始→管理工具→服务器管理器”；

进入“配置→本地用户和组→用户”，配置缺省帐户Administrator→重命名；

配置Guest（来宾）帐号属性，勾选帐户禁用。

#### 2.2 删除或锁定与设备无关账户

进入“开始→管理工具→服务器管理器”

进入“配置→本地用户和组→用户”，根据业务的实际需求，删除或锁定与设备运行、维护等与工作无关的帐户

#### 2.3 密码复杂度要求

进入“开始→管理工具→本地安全策略”

进入“安全设置→帐户策略→密码策略”

配置“密码必须符合复杂性要求”为“已启用”

配置“密码长度最小值”为“8个字符”。

#### 2.4 配置密码最长留存期

进入“开始→管理工具→本地安全策略”

进入“安全设置→帐户策略→密码策略”

配置“密码最长使用期限”为90天

配置“强制密码历史”为24个。

#### 2.5 账户锁定策略

进入“开始→管理工具→本地安全策略”

进入“安全设置→帐户策略→帐户锁定策略”

配置“帐户锁定阀值” 为小于或等于 10次

配置“帐户锁定时间”配置为小于或等于3分钟

配置“复位帐户锁定计数器” 配置为大于或等于3分钟

#### 2.6 远程关机

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→用户权限分配”

配置“从远程系统强制关机”指派给“Administrators”组

#### 2.7 本地关机

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→用户权限分配”

配置“关闭系统”指派给“Administrators”组

#### 2.8 授权账号登录

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→用户权限分配”

“允许在本地登录”配置为指派给指定授权用户

#### 2.9 远程访问注册表配置

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→安全选项”

配置“网络访问: 可远程访问的注册表路径”为空。

配置“网络访问: 可远程访问的注册表路径和子路径”为空

#### 2.10 限制匿名访问网络共享

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→安全选项”

配置“网络访问: 可匿名访问的共享”为空。

配置“网络访问: 可匿名访问的命名管道”为空

#### 2.11 配置限制取得文件或其他对象的所有权

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→用户权限分配”

配置“取得文件或其他对象的所有权”为指派给“Administrators”组

#### 2.12 配置限制从网络访问此计算机

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→用户权限分配”

配置“从网络访问此计算机”指派给“Administrators”组

#### 2.13 系统日志完备性检查

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→审核策略”

配置各项审核策略为“成功，失败”

#### 2.14 防火墙配置


| 项目               | 详情                           |
| ------------------ | ------------------------------ |
| 启动防火墙         | 启动公共和局域网防火墙         |
| 防火墙开放端口配置 | 开放IPV4回显、开放远程桌面端口 |
| 防火墙阻止端口配置 | 阻止445、135-139端口           |


#### 2.15 系统服务配置

| 项目                             | 详情                     |
| -------------------------------- | ------------------------ |
| Server服务关闭                   | 关闭后阻止文件共享       |
| Print Spooler服务关闭            | 关闭打印服务(网络和本地) |
| Windows Update服务关闭           | 自动更新服务             |
| TCP/IP NetBIOS Helper            | 服务关闭                 |
| Distributed Link Tracking Client | 服务关闭                 |
| Remote Registry                  | 服务关闭                 |
| Workstartion                     | 服务关闭                 |
| IP Helper                        | 服务关闭                 |

#### 2.16 关闭自动播放

进入“开始→运行”，在对话框中输入“gpedit.msc”命令

进入“计算机配置→管理模板→Windows组件→自动播放策略”， 配置“关闭自动播放”为“已启用”

#### 2.17 配置远程登录空闲断开时间

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→安全选项”

配置“Microsoft 网络服务器: 暂停会话前所需的空闲时间量”是为“15分钟”

#### 2.18 更改默认远程端口

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\Wds\rdpwd\Tds\tcp

HKEY_LOCAL_MACHINE\SYSTEM\CurrentContro1Set\Control\Tenninal Server\WinStations\RDP-Tcp

运行regdit打开注册表，修改以上两项的10进制的值

#### 2.19 不显示上次登录名

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→安全选项”

配置“交互式登录：不显示最后的用户名”为“已启用”

#### 2.20 关机前清除虚拟内存页面

进入“开始→管理工具→本地安全策略”

进入“安全设置→本地策略→安全选项”

配置“关机: 清除虚拟内存页面文件”为“已启用”

#### 2.21 禁止用可还原的加密来存储密码

进入“开始→管理工具→本地安全策略”

进入“安全设置→帐户策略→密码策略”

配置“用可还原的加密来存储密码” 为“不启用”

#### 2.22 关闭Windows硬盘默认共享

进入“开始→运行→Regedit”，进入注册表编辑器

在

HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters下，增加REG_DWORD类型的AutoShareServer键，REG_DWORD类型的AutoShareWks键,值为0

#### 2.23 启用系统SYNC攻击保护

进入“开始→运行→Regedit”，进入注册表编辑器

配置

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters下“SynAttackProtect、TcpMaxPortsExhausted、TcpMaxHalfOpen、TcpMaxHalfOpenRetried”键值

SynAttackProtect; 推荐值：2。

TcpMaxPortsExhausted; 推荐值：5。

TcpMaxHalfOpen; 推荐值数据：500。

TcpMaxHalfOpenRetried。推荐值数据：400

### 第3章 Tomcat安全配置

#### 3.1 http协议更换为https协议(各平台研发已解决)

#### 3.2 配置管理员账号的口令(或者删除控制台登录)

vi tomcat-users.xml

添加

<user username="tomone" password="T0mone" roles="admin-gui,admin,manager-gui,manager"/>

删除:/webapps目录下的admin、manager、ROOT目录删除

#### 3.3 隐藏版本号

$cd lib

$unzip catalina.jar

$cd org/apache/catalina/util/

$ServerInfo.properties

将其中参数修改掉

将修改后的文件替换到jar包中

$jar uvf catalina.jar org/apache/catalina/util/ServerInfo.properties


