# Dcoker部署教程
Docker 镜像旨在当Linux脚本部署失败的时候所使用的备用方案。   
建议`CentOS`用户使用该部署方式。
::: warning 架构警告
Docker 仅适配 amd64(x86_64) 版本的系统，你可以在命令行中输入`uname -m`来查看你的系统架构。
:::
::: danger 需要注意的是:boom:
Docker 的内核是 Ubuntu 镜像，Onebot 实现暂时还可以用。后续是否会适配新的 Onebot实现 得看风向。
:::
## 下载方式
123网盘链接：[点我](
https://www.123pan.com/s/SqLuVv-WzfGd)   提取码:6666
直链下载：
```
https://hf-mirror.com/a1098346640/Manyana_termux/resolve/main/docker_manyana_amd64_v0.2.tar?download=true
```
## 食用方法
1. 安装Docker
2. 下载镜像文件
3. 载入镜像文件`docker load -i docker_manyana_amd64_v0.2.tar`   

4. 启动容器`docker run -it lux/manyana:0.2`
5. 当你的命令行用户变为root，命令行前面出现`base`那么代表已经进入了容器
6. `cd /root/qqbot/start/`
7. `bash gui.sh`
8. 根据提示启动机器人
## 注意事项
::: info 代码更新提示
Docker 打包了机器人源码，所以Docker的机器人并不是最新版。   
你需要在 gui 里面
执行更新机器人代码。或者查看[手动更新机器人代码](/doc/technical_support/manual_updates.md)
:::