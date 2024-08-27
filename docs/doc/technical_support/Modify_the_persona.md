# 修改 AI 回复人设
## PYQT 版本直接 UI 里面的设置里修修改
::: details PYQT UI里面如何修改
![修改AI人设](/whereis.png)
1. 切换到setting.yaml
2. 修改对应模型的人设
3. 保存配置
4. 重启 Bot
:::   

## 其他版本： 
打开文件`Manyana/config/setting.yaml`
::: details Fluent版本路径
amd64/Manyana/config/setting.yaml
:::
![AI人设](/aisetting.png)   

默认使用的是 **random** 模型，因此你只需要修改random： 后面对应的人设就行了。   
如果你使用的不是**random**模型，那么你需要修改，你**所使用模型**对应模型后面的人设。
::: warning 改完人设后 
请执行`/clear`清除之前对你自己的人设记忆。   
或者执行`/allclear`清除对所有人的人设记忆。
:::
::: danger yaml 格式警告 
1. 只删除你要修改的内容。
2. 不要多一个空格少一个空格。
3. 为了避免修改配置导致机器人无法启动，修改前你最好把所有配置文件全部备份一次。
:::