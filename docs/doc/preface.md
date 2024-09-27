# Manyana 简介

Manyana 的名字是随便从某个植物百科里面扒拉下来的。  

[功能介绍](https://www.bilibili.com/video/BV1MS421R7PV?p=1)你可以查看B站的视频

通过 [Mirai](https://github.com/mamoe/mirai) 框架下的 [Mirai-api-http](https://github.com/project-mirai/mirai-api-http) 插件来获取消息，这意味着你可以安装 Mirai 的[其他插件](https://mirai.mamoe.net/topic/32/mirai%E7%9B%B8%E5%85%B3%E9%A1%B9%E7%9B%AE%E5%92%8C%E6%8F%92%E4%BB%B6%E5%90%88%E9%9B%86/1)。  

目前 [Mirai](https://mirai.mamoe.net/) 生态已经走向衰败了，所以推荐使用 [Overflow](https://github.com/MrXiaoM/Overflow/stargazers) 让 Mirai 框架加入 [Onebot](https://onebot.dev/) 大家庭！

## 开发者相关

目前 Manyana 开发者人数很少，出于学业的原因，更新估计不会很频繁。  
我们很希望喜欢自己捣鼓机器人或者对我们项目感兴趣的人加入我们，欢迎提交 pr 。开发文档已经 ~~建立文件夹~~ 了。
Manyana 对现有的[开发者](/doc/contributors.md)做出的贡献致谢。🤗

## 部署相关

::: info 配置推荐
Windows: 
2H 2G 服务器能够运行，但是性能有些捉襟见肘。  

Linux:  2H 2G 完全足够了。
:::
::: tip Windows
部署简单，开箱即用，适合小白。[Windows视频教程](https://www.bilibili.com/video/BV1MS421R7PV/?p=2)   
Python版本UI（**推荐**）可以图形化修改配置。  
Fluent版本UI更加优雅美观，也是开箱即用，但是由于使用 C++ 开发，维护难度大，有较多问题（**不推荐**）
:::
::: tip Linux
一键部署，适合低配服务器，不推荐**小白。**[Linux视频教程](https://www.bilibili.com/video/BV1MS421R7PV?p=3)  
 解决意外的错误，需要你有足够的**耐心**和**技术。**   
图形化 GUI 启动界面（就是是服务器没有桌面也可以用）。
:::
::: tip Docker AMD64
开箱即用，适合Linux部署出现问题或者其他原因，作为备用部署方案。[Docker文字教程](/doc/docker_deploy)   
**墙裂推荐CentOS用户使用Docker**  
使用 Ubuntu 作为内核，制作的镜像文件。   
需要你提前安装好 docker 管理器，具备一定的**docker知识。**
:::
::: tip Android
::: danger 不可用警告
Android 不是开发者维护的重心，代码陈旧，**极其不推荐。**   
开箱即用，[Android视频部署教程](https://www.bilibili.com/video/BV1MS421R7PV?p=4)  
使用 Proot容器 模拟 Debian 内核，制作的镜像文件。
:::
### 开始之前

你需要了解 Manyana 的部署架构，着有助于你一次性部署到位，而不是各种报错。  

![机器人架构图](/Architecture.png)  
1. Onebot 实现：用于获取聊天平台的各种消息，并转化 [Onebot协议](https://onebot.dev/) 。需要使用**正向WS到3001端口**
2. Overflow : [Mirai](https://github.com/mamoe/mirai) 的 Onebot 拓展版本，用于接收 Onebot 协议中的内容，管理各种 Mirai 插件，例如：[PetPet](https://github.com/Dituon/petpet)，如果你想添加 Mirai 原生插件，把这玩意当作 Mirai 就行了。   
插件或者端口配置，一般情况下你不需要修改。
3. Manyana : 机器人本体，各种主要功能在此实现。**config.json后面两项用于通信，如不清楚请勿修改。**
## 解决报错
> Troubleshooting any problem without
the error log is like driving with
your eyes closed.
在没有错误日志的情况下诊断任何问题
无异于闭眼开车.   
--Apache 官方文档 Getting started 篇章   
   
请你根据日志的报错，查看常见问题中的解决方法，如果无法解决再加群`251807019`礼貌提问。
## 免责声明
1. Onebot实现 与 Manyana项目和本教程无任何关系。
2. 禁止将 Manyana 项目和本教程用于任何违法、违规用途。
3. Manyana项目 为开源免费的项目，仅为学习Python而创建，开发者和本教程对使用其功能、代码、任何附加组件所造成的后果不负任何责任。
4. Manyana 项目及其相关代码的使用严格遵守对应项目的开源许可证。任何商用目的获取的利益与本项目无关。

