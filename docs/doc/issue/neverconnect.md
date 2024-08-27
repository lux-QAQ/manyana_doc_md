# overflow 连接不上服务器 |   Connect refused: connect或未连接
    
    
![未连接](/neverconnect.png)   

要清楚，要先启动 onebot 后才能启动 overflow     
::: details Windows - PYQT版本
说明你的 llonebot 没有正常工作，或者设置出现了问题。   
最常见的解决方法：   
1. 检查 llbot（蔻蔻） 是否已经安装完毕，llbot 配置是否正确。
2. 检查 3001 端口是否被占用。
:::
::: details Windows - Fluent版本
这个版本不可能出现这种问题，因为代码编写的时候就已经考虑到了。如果出现了这种问题
1. 要么 Napcat 已经寄了。
2. 要么 3001 端口被占用。
:::
::: details Linux
1. 检查 Napcat （NT蔻蔻启动器）日志，确认是否已经登录到机器人账号。
2. 检查 3001 是否被占用
:::