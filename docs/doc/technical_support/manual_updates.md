# 更新机器人代码
除安卓之外（按道理也可以更新，参考**手动部分**），所有UI里面均带有更新代码的按钮。使用它是 Windows 和 Linux **最最推荐**的方式。例如：   
![Fluent UI的更新按钮](/update_fluent.png)
## Linux（也包括安卓）脚本更新机器人代码
::: info 脚本更新
该方法使用整合包自带的脚本更新，对配置文件较为友好
:::
Linux 下的 Python 依赖全部装在 conda 的虚拟环境 `qqbot`里面所以你要先进入虚拟环境。
1. 检查你的命令行最前面是否有`（base）`字样，有就说明已经在 conda 的基础环境里面了，如果没有则输入`bash`然后查看是否出现`（base）`字样。
2. 输入`conda activate qqbot`进入虚拟环境
3. `cd (一键安装脚本所在文件夹)/Manyana/`
4. `python setUp.py`
5. 进入脚本后，选择`2`进入代码更新
![更新界面](/updateui.png)
1. 到达下图所示时，如果你是使用的**整合包、Linux脚本 或者 Docker**。那么请选择`4 国内源`（使用4时请**关闭提子**）
![更新选择](/updatechoice.png)
## 删除、下载式更新代码
1. （如果你还没有修改配置，那么你可以跳过这一步）首先备份Manyana/config/下面的所有配置文件。
2. 删除 Manyana 文件夹
::: details Fluent版本UI 详细路径
Fluent 版本的 Manyana文件夹 在amd64/文件夹下面
:::
1. `git clone --depth 1 https://gitlink.org.cn/lux-QAQ/Manyana.git`（请**关闭提子**）