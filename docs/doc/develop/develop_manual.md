通过编写代码为bot增加功能并不是一件麻烦的事情，得益于python入门([Python3 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/python3/python3-tutorial.html))的简易性，通过阅读下面的教程，即使您不懂代码，也将具备最基本的开发能力。
>前置
>1.一定的英语基础
>2.使用搜索引擎解决问题的能力
>3.一定的阅读和理解能力
>4.耐心
# 1.准备开发工具
好的ide能够使开发事半功倍。

这里推荐vsc和pycharm社区版，你可以任选其一，我个人推荐pycharm
## vsc安装和配置
[超详细的VSCode下载和安装教程（非常详细）从零基础入门到精通，看完这一篇就够了。-CSDN博客](https://blog.csdn.net/leah126/article/details/131661331)
然后是配置python，请注意，**python环境请使用python3.9**，否则会遇到依赖版本问题。
[VS Code配置使用 Python，超详细配置指南，看这一篇就够了_vscode python-CSDN博客](https://blog.csdn.net/weixin_49895216/article/details/131696960)
## pycharm安装和配置
你需要先自己[安装python3.9](https://blog.csdn.net/weixin_43909005/article/details/128594336)

然后安装pycharm
[PyCharm社区版安装教程和环境配置及使用_pycharm官网社区版-CSDN博客](https://blog.csdn.net/xieminglu/article/details/109649484)
# 2.开始开发
## 从Manyana继续开发
1.请使用右键单击Manyana文件夹，选择带有pycharm图标的open as project。
2.pycharm应当会自己根据requirements创建虚拟环境。

准备妥当后，可以开始开发了。
我们将以天气查询api为例，完成第一个api功能实现。
![[Pasted image 20240901125255.png]]
### 1.在plugins创建一个功能函数
右键plugins文件夹，新建py文件(教程中的命名为test.py，你可以自己调整)，我们开始定义函数。
#### 同步方式请求
```python
import requests #导入我们需要的依赖
def weather(city):
	r=requests.get(f"https://api.lolimi.cn/API/weather/?city={city}") #我们看到，文档要求我们使用get或post请求皆可，我们使用简单的get请求
	return r
print(weather("北京"))
```
运行这个py文件，我们得到输出
```yaml
{
    "code": 1,
    "text": "获取成功",
    "data": {
        "city": "北京",
        "cityEnglish": "beijing",
        "temp": "999",
        "tempn": "26",
        "weather": "多云转小雨",
        "wind": "南风转东南风",
        "windSpeed": "<3级",
        "time": "2024-06-12 08:00",
        "warning": {
            "windSpeed": "09",
            "wind": "雷电",
            "color": "黄色",
            "warning": "市气象台2024年6月12日18时24分发布雷电黄色预警信号：预计，12日19时至13日05时，本市自西向东将出现雷阵雨，并伴有8级左右短时大风和小冰雹，局地短时雨强较大，影响城区的主要时段为12日22时至13日02时，请注意防范。（预警信息来源：国家预警信息发布中心）",
            "time": "2024-06-15 18:37:56"
        },
        "current": {
            "city": "北京",
            "cityEnglish": "beijing",
            "humidity": "35%",
            "wind": "东南风",
            "windSpeed": "1级",
            "visibility": "17km",
            "weather": "阴",
            "weatherEnglish": "Overcast",
            "temp": "34.8",
            "fahrenheit": "94.6",
            "air": "130",
            "air_pm25": "130",
            "date": "06月12日(星期三)",
            "time": "18:35",
            "image": "http://api.lolimi.cn/API/weather/cache/image/阴.png"
        },
    # ........后面的我先省略了
```
#### 异步方式请求
是的，你完成了一个基础的函数，但这里有一个问题，加入你已经把它接入了bot，你会发现bot在执行天气查询指令的时候，似乎不能干其他的事情了，必须等天气查询结束才会进行别的回复，这极大地降低了bot的效率，因此我们需要使用异步的方式对其进行改写。
```python
import asyncio  
import json  
import httpx  
async def weatherQ(city): #async def 是异步函数的标识  
    async with httpx.AsyncClient() as client: #照抄就行  
        r= await client.get(f"https://api.lolimi.cn/API/weather/?city={city}") #请求的url  
        return r  
asyncio.run(weatherQ("北京"))
```
同样的结果，但通过这种方式，我们将大大提高bot运行效率。
#### 解析返回结果
你可能发现了，目前返回的这一堆并不美观，json是一种轻量级的数据交换格式，我们请求的结果就是一个json串，我们可以对其进行解析拿到我们想要的数据。
##### 初识json解析
我们将以获取风向为例。
```yaml
# 前后省略
"wind": "东南风"
```
想要拿到warning的值，我们可以观察上面的json，得知想要拿到warning我们需要经过
`data>warning>warning`
于是我们可以改写上面的函数
```python
import asyncio  
import json  
import httpx  
async def weatherQ(city): #async def 是异步函数的标识  
    async with httpx.AsyncClient() as client: #照抄就行  
        r= await client.get(f"https://api.lolimi.cn/API/weather/?city={city}") #请求的url  
        data=r.json()  
        wind=data["data"]["current"]["wind"]  
        return wind  
print(asyncio.run(weatherQ("北京")))
```
执行结果为
```
北风
```
##### 解析并返回关键数据
```python
import asyncio  
import json  
import httpx  
async def weatherQ(city): #async def 是异步函数的标识  
    async with httpx.AsyncClient() as client: #照抄就行  
        r= await client.get(f"https://api.lolimi.cn/API/weather/?city={city}") #请求的url  
        data=r.json()  
        weather=data["data"]["weather"]  
        wind=data["data"]["current"]["wind"]  
        windSpeed=data["data"]["current"]["windSpeed"]  
        return f"北京当前天气:{weather},风向:{wind,windSpeed}"  
print(asyncio.run(weatherQ("北京"))) 
```
运行结果为
```
北京当前天气:晴,风向:('北风', '2级')
```
你可以解析并加入其他参数，我就不再演示了。

**至此，我们完成了一个plugins函数，接下来我们使其与bot对接**
### 2.在run实现收发
在run文件夹下新建一个py文件，命名为myTest.py
```python
# -*- coding:utf-8 -*-  
from mirai import GroupMessage  
from plugins.test import weatherQ  
  
def main(bot, logger):  
    logger.info("启用天气查询")  #logger对象，作为print的高级替代，你看到的Manyana蓝色和各种颜色字体都是它实现的。  
  
    @bot.on(GroupMessage)     #监听群内事件
    async def tellMeWeather(event: GroupMessage):  
        if str(event.message_chain).startswith("天气查询"):  #如果消息以 天气查询 开头 
            try:  
                city = str(event.message_chain).replace("天气查询", "")   #把 天气查询 替换为空，剩下的就是城市名
                weatherResult =await weatherQ(city)  #调用异步函数须使用await  
                logger.info(f"{city} 天气查询结果：{weatherResult}")  #再logger一次让控制台看结果  
                await bot.send(event,weatherResult,True)   #向群内发送
            except:  
                logger.info("查询失败，请检查网络连接")  
                await bot.send(event, "查询失败，请检查网络连接")
```
好的，我们完成了run下的收发编写，接下来可以接入主程序了。
### 3.在main.py导入
打开main.py翻到末尾，你会看到这些
```python
#前面的统统省略了
	groupGames.main(bot, logger)  
	musicpick.main(bot, logger)  
	appCard.main(bot, logger)  
	aiDraw.main(bot, logger)  
	starRail.main(bot, logger)  
	bangumi.main(bot,logger)  
	draftBottle.main(bot,logger)
	startVer()  
	bot.run(asgi_server=None)
```
这些和你刚才编写的myTest.py一样，都是实现功能收发的函数，我们可以以同样的方式导入你的myTest.py，只要在bot.run之前导入即可。
```python
#前面的统统省略了
	myTest.main(bot,logger)   #我们导入了刚才编写的myTest
	groupGames.main(bot, logger)  
	musicpick.main(bot, logger)  
	appCard.main(bot, logger)  
	aiDraw.main(bot, logger)  
	starRail.main(bot, logger)  
	bangumi.main(bot,logger)  
	draftBottle.main(bot,logger) 
	startVer()  
	bot.run(asgi_server=None)
```
一般来说你的ide会自动导入myTest.py，如果没有，就在main.py最前面加入一行
```python
from run import myTest
```
### 4.测试看看
重新启动main.py，在群内发送 天气查询北京
即可收到bot返回的结果。
## 另起炉灶
[教程 | YiriMirai (wybxc.cc)](https://yiri-mirai.wybxc.cc/tutorials/intro)