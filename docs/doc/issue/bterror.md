# 为什么脚本启动后和视频中的不一样 | 为什么脚本安装的是宝塔
![宝塔](/bt.jpg)
::: details 原因
你的目录下面已经有一个`install.sh`，这导致`wget`下载脚本后自动被重命名为`install.sh.1`    
![宝塔](/installpath.jpg)
:::
::: details 解决方法
删掉`install.sh`和`install.sh.1`重新下载。
:::