# 为机器人添加自己的代码
你可以参考以下内容为机器人添加自己的代码，按照已有的代码模板增加新功能很简单。   
但由于目前项目不算很大，所以已有的代码并不算特别规范。![moban](/development/dev_moban.jpg)
::: details 依赖注意
目前的 Python 依赖库不算特别多，如果你要导入别的库，并且PR的话，请在requirements.txt中添加
:::
::: details 异步编程注意
机器人需要异步运行，请在使用各种函数前确认他是支持异步的函数。（如果你不会的话，那就根据别的代码照猫画虎，或者问AI）
``` diff{1}
+async def tiktokredraw(prompt, url, path="./rr.png"):
    url = f"https://oiapi.net/API/AiImage/?url={url}&word={prompt}"
    async with httpx.AsyncClient(timeout=40) as client:
        r = await client.get(url)
        with open(path, "wb") as f:
            f.write(r.content)
        # print(path)
        return path
```
:::
## 正式开始
1. 请在`plugins/`文件夹中实现你的功能。例如：下载图片后获取图片的本地目录地址、或者获取下载语音后的本地目录地址。   

2. 在`run/`下已有的功能文件中导入实现功能的函数，或者自己新增一个`名字.py`在里面编写。     

  
3. 编写发送消息的函数。参考已有的代码加入。加入`@bot.on(GroupMessage)`来监听群消息，类似于槽函数。
``` diff{1}
+    @bot.on(GroupMessage) #监听群消息
     async def moyuToday(event: GroupMessage):
        if ("星座" in str(event.message_chain) and At(bot.qq) in event.message_chain) or str(
                event.message_chain) == "星座":
            logger.info("获取星座运势")
            path = await xingzuo()
            logger.info("成功获取到星座运势")
            await bot.send(event, Image(path=path)) #发送消息，别忘了await
```
4. 如果你新建的py文件（当然如果你是在已有的功能 `.py` 文件里面里面加的新函数那么这步可以省略），那么在`main.py`中导入`run/下新建的文件`，然后在主函数中加入`新建的文件.main(bot, logger)`。
 ``` diff{2}
    from plugins.toolkits import newLogger,random_str,get_system_info
+  from run import aiReply, voiceReply, nudgeReply, wikiHelper, imgSearch, extraParts, wReply, groupManager, \
    musicShare, LiveMonitor, aronaapi, groupGames, musicpick, scheduledTasks, appCard, aiDraw, starRail, bangumi, \
    draftBottle  # 导入你新建的
```
 ``` diff{2}
      bangumi.main(bot,logger)
      draftBottle.main(bot,logger) #芝士漂流瓶 
+    新增的.main(bot,logger) # 导入你新建的
```
5. 重启机器人