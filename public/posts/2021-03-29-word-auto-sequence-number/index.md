# 把word文档里自动序号转为文本


<!--more-->

如何把word文档里自动序号转为文本，直接可以复制出来，这里提供一种方法。

## 宏命令处理
（别有恐惧心理，不难）
1. 打开word文档，按下快捷键Alt+F8，在“宏名”栏中输入dao“编号转换为文本”，这是给它起个名字，然后点击“创建”

2. 在新打开的窗口上，你会看到光标在闪烁，把下面这4行内容复制粘贴到此
```
Dim kgslist As List
For Each kgslist In ActiveDocument.Lists
kgslist.ConvertNumbersToText
Next
```
3. 然后按下快捷键Alt+Q（或者，点击左上角“文件”——“关闭并返回到Microsoft Word”），回到word界面。

4. 光标定位在除了自动编号以外的任意位置，然后按下Alt+F8，选中“编号转换为文本”（选中后底色为蓝色），再点击“运行”。
这就完成了，自动编号就成了可以编辑的文本（真实的文字）了。


---

> 作者: Kingpo  
> URL: https://ttzz.eu.org/posts/2021-03-29-word-auto-sequence-number/  

