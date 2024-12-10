---
title: "联想Thinkpad的BIOS配置说明"
subtitle: "联想Thinkpad的BIOS配置字段说明"
date: 2024-12-10T18:08:20+08:00

lastmod: 2024-12-10T17:08:20+08:00
draft: false
description: "联想电脑，笔记本Thinkpad的BIOS配置字段说明"
keywords: 
- Thinkpad
- 联通笔记本bios
- bios
tags:
- BIOS
categories:
- 配置
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

## 联想Thinkpad的BIOS说明

网上获取，作为参考和备份。

适用于X220，大部分设置说明同样适用于T520系列，W520系列和（T、X、W）*30系列  
  
    Wake On LAN：当以太网控制器接收到远程唤醒数据包时，让系统开机。注意，如果设置有硬盘密码，Wake On LAN功能将不起作用。（建议关闭）  
  
   Ethernet LAN Option ROM：装入Ethernet LAN Option ROM可以从集成的网络设备启动（以太网卡的一个特殊功能）。（建议默认）  
  
    USB UEFI BIOS Support：USB输入输出系统支持，启用或禁用USB软盘驱动器和USB CD-ROM的引导支持。如果不启用USB，将无法使用任何USB界面的设备，例如：外置USB界面的软驱，光驱。（建议开启）  
  
    Always On USB：持续USB供电。如果选择开启，那么在计算机连接到交流电源的情况下，外部USB设备可以在计算机处于低电源状态（睡眠/待机、休眠或电源关闭）时通过USB端口进行充电。（建议开启）  
  
    Always On USB Charge in Off Mode：关机状态下为USB设备充电（机身上黄色USB接口）。（建议开启）  
  
    TrackPoint：指点杆（小红帽）开关。（根据实际需要进行选择，不做推荐）  
  
    Touch Pad：触摸板开关。（根据实际需要进行选择，不做推荐）  
  
    Fn and Ctrl Key swap：Fn和Ctrl键位置互换（如果你觉得ThinkPad上的Fn键位置怪怪的就用这个选项）。（根据实际需要进行选择，不做推荐）  
  
    Fn Key Lock：Fn键锁定（按下两次Fn键时就可以直接按功能键了）。（根据实际需要进行选择，不做推荐）  
  
    ThinkPad NumLock：数字键锁定。如果选择了“Independent”就可以无视外接键盘上的NumLock状态，独立禁用ThinkPad计算机上的NumLock，如果启用了ThinkPad计算机上的NumLock，那么外接键盘上的NumLock也同样启用；如果选择了“Symchronized”，那么ThinkPad计算机上的NumLock和外接键盘上的NumLock同步。  
  
    Boot Display Device：启动显示设备。本项拥有ThinkPad LCD、Anolog（VGA）、Digital on ThinkPad、Digital1 on dock、Digital2 on dock等五个选项。（根据情况进行选择，建议选择ThinkPad LCD。）  
  
    Inter（R）SpeedStep Technology：使用Inter的SpeedStep技术。分为连接交流电时的模式（Mode fou AC），和连接电池时的模式（Mode for Battery），各有最高性能（Maximum Perfor）和电池优化（Battery Optimized）两种选项。（一般Mode fou AC选择Maximum Perfor，Mode for Battery选择Battery Optimized）  
  
    注：Speed Step是Intel CPU使用的一项技术，它可以让处理器在两种工作模式之间随意地切换，这两种模式即交流电状态时的最高性能模式(Maximum Performance Mode)和电池状态时的电池优化模式(Battery Optimized Mode)。所谓最高性能模式是指当笔记本电脑与交流电源连接时，可提供与台式机近似的性能；而电池优化模式是指当笔记本电脑使用电池时，会让笔记本电脑的性能发挥与其电池使用时间之间达到最佳的平衡。  
  
    Adaptive Thermal Management：适应性热能管理，用来管理笔记本的热能排放方式。分为交流电方案（Scheme for AC）和电池方案（Scheme for battery）。各有最高性能（Maximum Performance）和平衡（Balanced）两种选项。（一般Scheme fou AC选择Maximum Performace，Scheme for Battery选择Balanced）  
  
    Optical Drive Speed：光盘机速度。分为正常（Normal）、高性能（High Performance）和低速/安静（Silence）三种选项。（根据情况进行选择，不做推荐）  
  
    CPU Power Management：CPU电源管理。分为开启（Enable）和关闭（Disable）两个选项。（建议开启）  
  
    PCI Express Power Management：PCI Express电源管理。分为开启（Enable）和关闭（Disable）两个选项。（建议开启）  
  
    注：PCI Express是新一代的总线接口。它采用了目前业内流行的点对点串行连接，比起PCI以及更早期的计算机总线的共享并行架构，每个设备都有自己的专用连接，不需要向整个总线请求带宽，而且可以把数据传输率提高到一个很高的频率，达到PCI所不能提供的高带宽。  
  
    Express Card Speed：Express Card Speed速度管理。分为第一代（Generation 1）和自动（Automatic）两个选项。（建议选择自动）  
  
    注：与传统PC卡技术的最大不同在于，ExpressCard技术采用最新的PCI Express和USB 2.0界面，在外围设备与主机系统之间直接提供热插拔式的连接，而不需要在系统的芯片组与插槽之间架设一个桥接芯片。虽然ExpressCard技术借用了现有PC卡技术中的许多特性，但前者在外型尺寸、性能、可靠性、适应性、热插拔和自动设置等多种特性之间达到了更理想的平衡。  
  
    Power On with AC Attach：与交流电源连接时开机。提供开启（Enable）和关闭（Disable）两个选项。（建议关闭）  
  
    Hardware Password Manager：硬件密码管理。提供开启（Enable）和关闭（Disable）两个选项。（根据实际需要进行选择，不做推荐）  
  
    注：如果忘记此密码则无法破解，若硬盘上无十分重要的文件，请慎用。  
  
    Supervisor Password：超级密码。若设置此项密码，可阻止未授权用户访问BIOS 修改设置。其中设有密码输入框，必须填写两遍密码（输入密码Enter New Password和确认密码Confirm New Password）如果没有密码输入则密码状态（——Password Status）栏显示不可用（Disable）  
  
    Lock UEFI BIOS Settings：UEFI BIOS密码锁设定。启用或禁用保护 BIOS Setup Utility 中各个项的功能，以防止不具有超级用户密码的用户更改这些项。在缺省情况下，该设置是禁用的。如果您设置了超级用户密码并启用了该功能，只有您可以更改 BIOS Setup Utility 中的任何项。提供开启（Enable）和关闭（Disable）两个选项。（根据实际需要进行选择，不做推荐）  
  
    注：UEFI是由EFI1.10为基础发展起来的，相比起传统的BIOS，EFI BIOS更加接近于一个低端的操作系统，并且具有操控所有硬件资源的能力。UEFI BIOS和传统BIOS从操作界面和性能上都有很大的不同，传统的BIOS设置只是用文字形式，而且没有形象的显示出来。UEFI BIOS的网络支持力度比传统BIOS要强。简单来说，UEFI BIOS就是简单的一个操作系统，相对于传统BIOS来说，电脑会更加简捷迅速的扫描到从软键盘传来的信息，或者是未来的任何输入装置。玩家甚至能在UEFI里面玩游戏。另外一方面，UEFI的具有比传统BIOS更好的基础网络支持力度，这意味着无需硬盘和操作系统都可以实现网络连接。真正意义上实现无盘操作。　支持鼠标操作的图形界面也是UEFI的主要特点，而且UEFI界面支持多语言选择，当然也可以加入中文显示，实现全中文的直观化BIOS。对于普通消费者而言，EFI带来最大的好处就是开机时间的缩短，相对于目前传统BIOS的20多秒的开机时间，UEFI仅仅需要几秒就能搞掂系统启动信息。同时，UEFI支持磁盘管理和启动管理功能，具有脱离操作系统的管理工具，用户不必进入系统便可以对计算机进行整机维护工作。这对于办公室里操控成千上百部电脑的系统管理员绝对是一件好事！  
  
    Set Minimum Length：设置密码的最小长度。提供了关闭（Disable）和4到12位字符串的密码长度格式。（根据实际需要进行选择，不做推荐）  
  
    Password at unattended boot：无人启动BIOS密码（个人理解）。选择启用，在计算机从电源关闭状态或休眠状态通过无人照管的事件如 Wake on LAN 开启时显示密码提示。如果您选择 Disabled，那么不显示密码提示，计算机继续运行并装入操作系统。要阻止未经授权的访问，请在操作系统上设置用户认证。提供了关闭（Disable）和4到12位字符串的密码长度格式。（根据实际需要进行选择，不做推荐）  
  
    Password at restart：  
  
    Power-on Password：开机密码。若设置此项密码，每次开机的时候，需要键入正确的密码才能引导系统。其中设有密码输入框，必须填写两遍密码（输入密码Enter New Password和确认密码Confirm New Password）如果没有密码输入则密码状态（——Password Status）栏显示不可用（Disable）  
  
     
    Hard Disk1 Password：第一块硬盘密码。设置硬盘密码可以阻止未授权的用户访问硬盘上的所有数据，只有输入正确的密码才能访问，通常是在开机时要求输入。硬盘密码分两种，User和Master，如果设置user密码，则每次开机的时候都必须输入该密码，而如果user密码和开机密码相同，则只要输入开机密码即可。而master密码则是管理员密码，比方说硬盘被移动到别的机器上时，就必须使用master密码。在开机提示输入开机密码之后，屏幕的相同位置快速闪过一个圆柱体＋一个锁＋一个箭头＋OK的图样，这个图样说明硬盘的user密码和开机密码是一致的。对于硬盘密码，可以设置两种方式，User模式和User+Master模式。在User+Master模式下，User密码和Master密码是可以不一样的，但是，在正常情况下，开机的时候只要求输入User密码即可。此项目中设有选择框，可以选择User模式或User+Master模式。如果没有密码输入则密码状态（——Password Status）栏显示不可用（Disable）（如忘记此密码则无法破解，若硬盘上无十分重要之文件，请慎用。）  
  
    Predesktop Autherication：在装入操作系统之前，启用或禁用指纹认证。（建议启用指纹识别，非常方便，避免了需要识记密码的烦恼。）  
  
  Reader Priority：指纹识别器优先权。两个选项，分别是：先外部再内部（External→Internal）和只是有内部（Internal Only）。（对于集成指纹识别器的ThinkPad，建议选择Internal Only。）  
  
     Security Mode：安全模式。如果指纹认证失败，可以通过输入密码来启动计算机。其中设有两个选项：Normal和High。选择Normal输入开机密码或者超级用户密码；选择High则输入超级用户密码。（根据需要选择，推荐选择Normal，避免不必要的麻烦。）  
  
    Reset Fingerprint Data：复位指纹识别器数据。其中设有对话框，选择Yes进入下一步输入指纹数据，选择No则不输入指纹数据。  
  
    Security Chip：安全芯片。其中分为三个选项，选择Activate则安全芯片生效；选择Inactivate则安全芯片可见，但不生效；选择Disabled则安全芯片隐藏且不生效。（根据自己需要进行更改，开启安全芯片能增强计算机的安全性，但同时也可能带来一些不必要的麻烦。）  
  
    UEFI BIOS Updata Option：UEFI BIOS升级选项。  
  
    Flash BIOS Updating by End-Users：提供开启（Enable）和关闭（Disable）两个选项。如果选择开启（Enable），则所有用户都可以更新Flash BIOS。如果选择关闭（Disable）只有知道超级密码的人才可以更新Flash BIOS。  
  
    Flash Over Lan：提供开启（Enable）和关闭（Disable）两个选项。如果选择开启（Enable），则允许从一个可用的局域网中，通过网线来更新Flash BIOS。  
  
    Memory Protection：内存保护。  
  
    Execution Prevention：执行保护。提供开启（Enable）和关闭（Disable）两个选项。某些计算机病毒和蠕虫程序会运行仅允许数据的代码，从而造成内存缓冲区溢出。如果您的操作系统可使用Data Execution Prevention功能，那么选择开启（Enable），可以保护您的计算机免受此类病毒和蠕虫程序的攻击。如果选择了开启（Enable）之后，您发现某个应用程序运行不正常，请选择关闭（Disable）并重置该设置。  
  
    Virtualization：虚拟化。  
  
  Intel（R） Virtualization Technology：虚拟化技术。提供开启（Enable）和关闭（Disable）两个选项。  
  
  注：Intel Virtualization Technology（VT）虚拟化技术就是以前众所周知的“Vanderpool”技术，这种技术让可以让一个CPU工作起来就像多个CPU并行运行，从而使得在一部电脑内同时运行多个操作系统成为可能。支持虚拟技术的CPU带有多余的指令集来控制虚拟过程，通过这些指令集，控制软件VMV（Virtual Machine Monitor)会很容易提高性能，相比软件的虚拟实现方式会很大程度上提高性能。  
  
    Intel（R）VT-d Feature：Intel Virtualization Technology for Directed I/O，简称为Intel VT-d。  
  
    提供开启（Enable）和关闭（Disable）两个选项。  
  
    注：现在的I/O设备虚拟化主要是采用模拟方式或者软件接口方式，因此性能上很容易成为瓶颈——毕竟传统的机器上，I/O设备都很容易成为瓶颈，因此Intel就适时提出了Intel Virtualization Technology for Directed I/O，简称为Intel VT-d。运用VT-d技术，虚拟机得以使用直接I/O设备分配方式或者I/O设备共享方式来代替传统的设备模拟/额外设备接口方式，从而大大提升了虚拟化的I/O性能。  
  
    I/O Port Access：输入输出端口设置。其中提供了本机上所有端口的设置，这些端口包括：以太网（Ethernet LAN），无线网（Wireless LAN），微波互联网（WiMax），无线广域网（Wireless WAN），蓝牙（Blue tooeh），USB端口（USB Port），扩展卡插槽（ExpressCard Slot），扩展托架（硬盘或光盘机）（Ultrabay（HDD/Optical）），内存卡插槽（Memory Card Slot），集成摄像头（Integrated Camera），话筒（Microphone），指纹阅读器（Fingerprint Reader）。每项提供开启（Enable）和关闭（Disable）两个选项，根据需要选择。  
  
    注：WiMax(Worldwide Interoperability for Microwave Access),即全球微波互联接入。WiMAX也叫802·16无线城域网或802.16。WiMAX是一项新兴的宽带无线接入技术，能提供面向互联网的高速连接，数据传输距离最远可达50km。WiMAX还具有QoS保障、传输速率高、业务丰富多样等优点。WiMAX的技术起点较高，采用了代表未来通信技术发展方向的OFDM/OFDMA、AAS、MIMO等先进技术，随着技术标准的发展，WiMAX逐步实现宽带业务的移动化，而3G则实现移动业务的宽带化，两种网络的融合程度会越来越高。  
  
    Anti-Theft：防盗。  
  
    Intel AT Module Activation：因特尔ATM模块激活。提供三个选项：禁用（Disable），启用（Enable），永久禁用（Permanently Disable）。下面是当前ATM模块的状态：当前设置（Current setting），禁用（Disable）；当前状态（Current state），不激活（Not Activated）。  
  
  Computrace：计算机跟踪。这是一种无法检测的安全软件，它采用跟踪代理，将其位置传送到一个监视中心，计算机报失后，下一次该计算机访问Internet网或插入到电话线路上时，其位置将自动被登记，安全人员即可采取行动。按Enter键进入下一级菜单，激活计算机跟踪模块（Computrace Module Activation）提供三个选项：禁用（Disable），启用（Enable），永久禁用（Permanently Disable）。下面是当前Computrace模块的状态：当前设置（Current setting），禁用（Disable）；当前状态（Current state），不激活（Not Activated）。（实现该功能必须安装Absolute公司的Computrace LoJack软件，注册需要收费，大概在49美元每年，安装后激活。如果没有需要，不建议激活）  
     
   Startup：启动选项。  
  
    Boot：引导。  
  
    Boot Priority Order：引导优先顺序。提供了多种设备的引导顺序。USB光驱接口（USB CD），USB软驱接口（USB FDD），内置光驱接口CD0（ATAPI CD0），内置硬盘接口HDD2（ATA HDD2），内置硬盘接口HDD0（ATA HDD0），内置硬盘接口HDD1（ATA HDD1），USB硬盘接口（USB HDD），PCI标准网卡（PCI LAN），内置光驱接口CD1（ATAPI CD1），内置光驱接口CD2（ATAPI CD2），内置硬盘接口HDD3（ATA HDD3），内置硬盘接口HDD4（ATA HDD4）。当有设备接入以上接口时，系统会自动检测到该设备的存在，例如：ATA HDD0后面就有HITACHI HTS723232A7A364的字样，这就代表目前系统所装备的硬盘。  
  
    注：ATA/ATAPI（AT Attachment/AT Attachment Packet Interface，AT嵌入式接口/AT附加分组接口）是计算机内并行ATA接口的扩展。ATA也被称为IDE接口，ATAPI是CD/DVD和其它驱动器的工业标准的ATA接口。ATAPI是一个软件接口，它将SCSI/ASPI命令调整到ATA接口上，这使得光驱制造商能比较容易的将其高端的CD/DVD驱动器产品调整到ATA接口上。  
  
    Exclude from boot priority order：除此之外的其他设备。提供其他CD（Other CD）和其他硬盘（Other HDD）两个选项。  
  
    Network Boot：网络引导优先顺序。此项目中的内容与引导优先顺序（Boot Priority Order）是一样的，不在复述。  
  
    UEFI/Legacy Boot：UEFI BIOS引导或传统BIOS引导的切换。提供两者都用（Both），只用UEFI BIOS引导（UEFI Only），只用传统BIOS引导（Legacy Only）三个选项。  
  
    UEFI/Legacy Boot Priority：UEFI BIOS引导或传统BIOS引导的优先顺序。提供传统BIOS引导优先（Legacy First），UEFI BIOS引导优先（UEFI First）二个选项。  
  
    Boot Mode：引导模式。提供快速引导模式（Quick）和排错引导模式（Diagnostics），建议选择Quick 模式，可以缩短系统启动时间，除非系统出现问题或者新更换硬件，可选择Diagnostics模式。  
  
    Option key Display：选项键显示。此项目控制开机画面里各选项键的显示与否。提供开启（Enable）和关闭（Disable）两个选项。如果选择关闭（disabled），则开机画面里什么提示的字样都没有，如果选择开启（Enable）则开机画面里提示F1，F11，F12等功能键的作用。  
  
    Boot Device List F12 Option：F12引导设备列表。提供开启（Enable）和关闭（Disable）两个选项。选择开启（Enabled），可以在开机时按下F12 键临时更改硬盘/光驱/软驱等设备的启动顺序；选择关闭（Disabled）则禁止此功能。（建议选择Enabled。）本本之城24308608  
  
    Boot Order Lock：引导顺序锁定。提供开启（Enable）和关闭（Disable）两个选项。该项目可以锁定在前面设置的引导优先顺序，使其不可更改。  
  
    Restart：重新启动。  
  
    Exit Saving Changes：退出且保存更改的BIOS 设置。  
  
    Exit Discarding Changes：退出但不保存更改的BIOS 设置。  
  
    Load Setup Defaults：恢复默认的BIOS 设置。  
  
    Discard Changes：取消所更改的BIOS 设置。  
  
    Save Changes：保存所更改的BIOS 设置。  
  
设置过程中，按F9 键则可以恢复原厂预设好的BIOS 设置，按F10 键则保存设置并重新启动。

## 参考

> https://www.cnblogs.com/rookieagle/p/11370698.html