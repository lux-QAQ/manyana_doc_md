# 点歌功能异常
::: warning VIP导致30s
必须要 VIP 的曲子只能获取到30s的试听，解决方法：收购网易云。
:::
::: details PYQT 版本
1. 参考[ffmpeg安装教程(windows版本)](https://blog.csdn.net/m0_47449768/article/details/130102406)安装好 ffmpeg ，并配置好环境变量。
2. 在llbt的设置界面设置好 ffmpeg 的路径。
3. 排除网络问题。
:::
::: details Fluent 版本
1. 参考[ffmpeg安装教程(windows版本)](https://blog.csdn.net/m0_47449768/article/details/130102406)安装好 ffmpeg ，并配置好环境变量。
2. 排除网络问题。
:::
::: details Linux
一键安装脚本会自动为你安装，你可以通过`sudo apt install ffmpeg` (ubuntu 和 debian) 或者`sudo yum install ffmpeg`(red hat 和 Centos) 来安装和检查。
:::
::: details Docker
你可以通过`sudo apt install ffmpeg` 来安装和检查。
:::