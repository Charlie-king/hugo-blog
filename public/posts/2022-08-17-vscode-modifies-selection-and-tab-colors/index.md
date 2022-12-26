# VS Code自定义修改选中内容和tab颜色


<!--more-->
用vs code时，由于深色背景和选中内容背景很难区分开，因此做了自定义修改。


打开vscode  
`文件` =》`首选项` =》 `设置` =》 搜索`color` 找到 Hediet > Vscode- drawio: Custom Color Schemes 的  
`在settings.json中编辑`  
![](https://s2.loli.net/2022/08/17/L2jxqSRthJGMY4w.webp)


![](https://s2.loli.net/2022/08/17/LVijehNszDEHm2A.webp)




打开后，添加下面代码，点击颜色块，可以自由选取颜色。

建议选中内容和tab的颜色也做区分，利于分辨，我这里截图时没做区分。

```cpp
"workbench.colorCustomizations": {
            //设置用户选中代码段的颜色
           "editor.selectionBackground": "#09a050",
           "editor.selectionHighlightBackground": "#09a050",
           //设置活动tab窗口颜色
           "tab.activeBackground": "#5f80629a"
    }, 
```


![](https://s2.loli.net/2022/08/17/Etn7BZ3RbiU8mIe.webp)


![](https://s2.loli.net/2022/08/17/KG54poIHmCZVtsP.webp)


---

> 作者: Kingpo  
> URL: https://ttzz.eu.org/posts/2022-08-17-vscode-modifies-selection-and-tab-colors/  

