功能列表
> 如果我没有在示例中说明需要@，就不要艾特+指令 然后跑过来问为什么用不了。<br>
> 代理方面，你应该学会使用规则/pac代理而不是始终用全局代理，全局代理将导致bot部分功能无法使用，而代理软件的使用并不属于我们的教程范围，你应当详细阅读你的代理软件说明文档或自行搜索。

# 定时任务
`对应run/scheduledTasks.py`
`对应配置文件config/controller.yaml`

::: info 指令列表
群聊推送/取消任务<br>
/推送 摸鱼人日历<br>        
/推送 每日天文   #需要配置nasa api和proxy<br>
/推送 每日新闻<br>
/推送 喜加一<br>
/推送 每日星座<br>
/推送 单向历<br>
/推送 bangumi日榜<br>
/推送 晚安ASMR   #需要1.配置proxy，2.执行过 更新脚本-补全依赖，3.配置卡片签名地址，参考【点歌】<br>

/取消 摸鱼人日历<br>
/取消 每日天文<br>
/取消 每日新闻<br>
/取消 喜加一<br>
/取消 每日星座<br>
/取消 单向历<br>
/取消 bangumi日榜<br>
/取消 晚安ASMR<br>

私聊定时推送任务<br>
晚安和早安天气推送   #详细配置内容查看controller.yaml，不再赘述
:::

# 点歌
`对应run/musicPick.py`

::: info 指令列表
点歌 歌曲名
:::

### 配置卡片签名地址
在qq设置-llob设置中，填写卡片签名地址https://ss.xingzhige.com/music_card/card<br>
重启
