# 安装指南（快速开始）

## 安装PF-GUGUBot

### MCDR 快捷安装(强烈推荐)
- 在 MCDR 服务端输入以下指令安装 GUGUbot 插件：
   ```
   !!MCDR plugin install gugubot
   ```
### 手动下载安装
1. 下载插件依赖
   ```shell
   pip install pygame requests ruamel.yaml websocket-client "watchdog>=5.0.2" "pathlib>=1.0.1"
   ```
2. 前往插件 [MCDR 插件仓库](https://mcdreforged.com/zh-CN/plugins) 下载以下插件并放入根目录下的 `plugins` 文件夹:
   - [PF-GUGUbot](https://mcdreforged.com/zh-CN/plugin/gugubot/)
   - [PF-cq_qq_api](https://mcdreforged.com/zh-CN/plugin/cq_qq_api)
   - [player_ip_logger](https://mcdreforged.com/zh-CN/plugin/player_ip_logger)
  
## 安装配置QQ机器人
   - 需要支持基于 CQ 码的正向 WebSocket QQ 机器人。
   - 推荐项目:[NapCatQQ](https://napneko.github.io)、[LLOneBot](https://llonebot.github.io)
   ::: warning 注意
   请开启 QQ 机器人的 WebSocket 服务端（正向 WS 连接），配置到未被占用的端口，并将上报格式设置为 String 类型！
   :::

## 配置 PF-GUGUbot 及前置

### PF-GUGUbot 
```yaml
admin_id: # 管理员 QQ 号,请以相同格式填写！
#正确示范：
- 1234563
#错误示范：
-1234563
1234563

...

group_id: # QQ 群号,要监听，转发的qq群号
- 1234561
```
如果启动时提示缺少配置文件，请下载 `config_default.yml` 文件，将其重命名为 `config.yml`，并放入 `/config/GUGUbot/config.yml` 路径下。

### PF-cq_qq_api 
```json
{
    "host": "127.0.0.1", // 更改为 QQ 机器人地址 *
    "port": 8080, // 正向 WebSocket 端口 *
...
}
```

上述配置为必要项。如果需要更深入的自定义体验，请阅读完整的[配置文档]。
