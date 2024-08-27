# Linux部署教程  
由于部署教程视频在[B站](https://www.bilibili.com/video/BV1MS421R7PV?p=3)上已经很详细了，这里不做过多介绍。
::: warning 架构警告
Linux 的一键脚本主要适配的是 amd64(x86_64) 版本的系统，你可以在命令行中输入`uname -m`来查看你的系统架构。对于 arm64   的架构一键脚本是支持的，但是可能会出现~~大量~~报错，需要你手动解决，因此**不推荐在arm64的系统上部署**。
:::
::: danger 需要注意的是:boom:
1. Linux 同样使用和 Fluent 版本一样的Onebot实现 ，这是为了适配有些只有 Shell 而没有桌面，Onebot 实现暂时可以用。后续是否会适配新的 Onebot 实现得看风向。
2. 对于`CentOS`或者其他`yum`包管理器的系统，**墙裂建议**使用 [Docker](/doc/docker_deploy.md) 部署
:::