# 配置

## 机器人的必要配置

| 配置项               | 默认值 | 说明                 |
|----------------------|--------|----------------------|
| 正向 websocket 服务端口 | 8080   | 接收数据上报的端口     |
| 消息上报格式          | CQ码    | 机器人基于 CQ码 进行解析 |

## 前置 `cq_qq_api` 配置
[配置详细说明](https://docs.qq.com/aio/DTFlheGZKY0RvYnRi?p=vUShdYdligIgQvmxLZu3s8)

## GUGUbot 机器人配置

### QQ相关设置 - 必要项
- **`admin_id`**: 管理员 QQ 号，默认拥有 GUGUbot 管理员权限（仅私聊）
- **`group_id`**: 聊天转发的群号

### QQ相关设置 - 可选项
- **`admin_group_id`**: 管理群群号，群内所有人都有管理权限，且仅限该群内管理；成员私聊机器人时无权限。
- **`friend_is_admin`**: 是否开放管理（私聊）权限给机器人的 QQ 好友。
- **`is_main_server`**: 是否为主服务器（分服请设置为 `false`）。
- **`server_name`**: 服务器名称前缀，MC 转发到 QQ 时显示，出现在玩家名称前面。

### 指令开关
- **`bound_notice`**: 未绑定玩家发言时提示玩家进行绑定。
- **`ban_word`**: 是否启用违禁词撤回（需要机器人有管理员权限）。
- **`execute_command`**: 是否允许管理员私聊机器人向服务器执行指令（MCDR 的 `!!` 指令无效）。
- **`group_admin`**: 群指令是否仅允许管理员使用。
- **`ingame_key_word`**: 是否启用游戏内关键词响应。
- **`key_word`**: 是否启用群聊关键词响应。
- **`list`**: 是否允许使用 `#list` 查询在线玩家列表。
- **`mc`**: 是否启用 `#mc` 指令。
- **`name`**: 是否将机器人名字显示为服务器在线人数。
- **`qq`**: 是否启用 `!!qq` 指令。
- **`shenhe`**: 是否启用加群审核功能。
- **`start_command`**: 是否启用服务器启动时执行指令。
- **`whitelist`**: 是否启用白名单功能。

### 转发设置
- **`farward_other_bot`**: 转发官方机器人回复。
- **`keep_raw_image_link`**: 转发图片链接（适用于 ChatImage 模组，在游戏中显示图片）。
- **`mc_achievement`**: 转发 MC 成就到 QQ。
- **`mc_death`**: 转发 MC 死亡消息到 QQ。
- **`mc_to_qq`**: 是否启用 MC 消息转发到 QQ 群。
- **`mc_to_qq_command`**: 是否转发服务器指令（`!!/@`）到 QQ。
- **`player_notice`**: 玩家上下线通知。
- **`bot_notice`**: 假人上下线通知。
- **`qq_to_mc`**: 是否启用 QQ 群消息转发到 MC。
- **`show_group_notice`**: 上线时显示最新群公告。

### 路径设置
- **`command_prefix`**: 群聊指令前缀（例如设置为 `#`）。
- **`ban_word_dict`**: 违禁词储存路径。
- **`bound_image_path`**: 绑定图片储存路径。
- **`customized_help_path`**: 自定义帮助信息文件路径（显示时 `#` 替换为指令头）。
- **`extra_style_path`**: 自定义风格储存路径。
- **`font_path`**: 字体储存路径。
- **`key_word_dict`**: 群聊关键词储存路径。
- **`key_word_ingame_dict`**: 游戏内关键词储存路径。
- **`shenhe_log`**: 审核日志储存路径。
- **`shenheman`**: 审核管理员储存路径。
- **`start_command_dict`**: 启动指令储存路径。
- **`uuid_qqid`**: UUID 储存路径。
- **`whitelist`**: 服务器白名单路径。

### 其他设置
- **`font_limit`**: 超过指定字数转图片（默认 150 字，大于则转图片，设置为 `-1` 可关闭）。
- **`max_bound`**: 单个玩家可绑定的游戏 ID 数量。
- **`random_template`**: 是否启用随机发言模板（防止风控）。
- **`show_message_in_console`**: 是否在控制台显示上报消息。
- **`style`**: 机器人回复风格（可选，输入 `#风格` 查看帮助）。
- **`style_cooldown`**: 风格切换冷却时间（单位：秒）。
- **`whitelist_add_with_bound`**: 绑定时是否自动添加白名单。
- **`whitelist_remove_with_leave`**: 退群时是否自动移除白名单。
