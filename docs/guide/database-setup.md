# 数据库搭建

## 云开发数据库简介

微信小程序云开发数据库是一个文档型数据库（类似 MongoDB），为开发者提供以下优势：
- 支持多端SDK：小程序前端、Web端、Node.js等多平台访问
- 无需服务器：直接在小程序中操作数据库，无需搭建后端服务
- 自动鉴权：基于微信用户系统的天然权限控制
- 实时数据：支持数据实时推送功能
- 灵活权限：支持自定义安全规则

**参考文档：**
- [微信云开发数据库官方文档](https://developers.weixin.qq.com/minigame/dev/wxcloud/guide/database.html)
- [云数据库上手指南](https://developers.weixin.qq.com/minigame/dev/wxcloud/guide/database/getting-started.html)

## 数据库配置

### 初始化配置
在所有云函数中需要统一配置环境：
```javascript
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'your-env-id'  // 云开发环境ID
})
```

## 数据库集合设计

### 1. `users` 用户集合

**用途**: 存储用户个人信息和认证数据

**字段结构**:
```json
{
  "_id": "ObjectId",           // 系统自动生成的文档ID
  "_openid": "string",         // 微信用户OpenID (系统自动添加)
  "openid": "string",          // 微信OpenID (必需，唯一)
  "unionid": "string",         // 微信UnionID (可选)
  "nickName": "string",        // 用户昵称
  "avatarUrl": "string",       // 用户头像URL
  "createTime": "Date",        // 账户创建时间
  "updateTime": "Date"         // 最后更新时间
}
```

**索引配置**:
```javascript
// 在云开发控制台数据库界面执行
db.users.createIndex({"openid": 1}, {unique: true})
```

### 2. `events` 活动集合

**用途**: 存储活动信息、参与者数据和时间安排

**字段结构**:
```json
{
  "_id": "ObjectId",               // 系统自动生成的文档ID
  "_openid": "string",             // 创建者的OpenID (系统自动添加)
  "eventId": "string",             // 5位字母数字组合ID (唯一)
  "title": "string",               // 活动标题
  "description": "string",         // 活动描述
  "startDate": "string",           // 开始日期 (YYYY-MM-DD)
  "endDate": "string",             // 结束日期 (YYYY-MM-DD)
  "timeRange": ["string"],         // 时间段数组 (如: ["09:00", "10:00"])
  "timezone": "string",            // 时区标识符
  "timezoneText": "string",        // 时区显示文本
  "maxParticipants": "number",     // 最大参与人数
  "creator": "string",             // 创建者OpenID
  "createTime": "Date",            // 创建时间
  "hasNotified": "boolean",        // 是否已发送通知
  "participants": [                // 参与者数组
    {
      "openid": "string",          // 参与者OpenID
      "availability": {            // 时间可用性对象
        "YYYY-MM-DD-1": "boolean", // 格式: 日期-时间段索引
        "YYYY-MM-DD-2": "boolean"
        // 更多时间段...
      }
    }
  ]
}
```

**索引配置**:
```javascript
// 在云开发控制台数据库界面执行
db.events.createIndex({"eventId": 1}, {unique: true})
db.events.createIndex({"creator": 1})
db.events.createIndex({"createTime": -1})
```

## 数据库搭建步骤

### 第一步：开通云开发服务

1. **注册微信小程序账号**
   - 访问 [微信公众平台](https://mp.weixin.qq.com/)
   - 注册并认证小程序开发者账号

2. **开通云开发**
   - 在微信开发者工具中创建新项目
   - 选择"云开发"模板或在现有项目中启用云开发
   - 按提示开通云开发服务（个人版 19.9元/月）

3. **创建云开发环境**
   - 在开发者工具中点击"云开发"按钮
   - 创建新的云开发环境，填写环境名称
   - 记录生成的环境ID

### 第二步：初始化云开发环境

1. **配置小程序端**
   ```javascript
   // miniprogram/app.js
   App({
     onLaunch: function () {
       // 初始化云开发
       wx.cloud.init({
         env: 'your-env-id', // 替换为你的环境ID
         traceUser: true
       })
     }
   })
   ```

2. **配置app.json**
   ```json
   {
     "cloud": true,
     "pages": [...],
     "window": {...}
   }
   ```

### 第三步：创建数据库集合

1. **通过云开发控制台创建**
   - 打开云开发控制台
   - 选择"数据库"标签页
   - 点击"添加集合"创建以下集合：
     - `users`
     - `events`

2. **通过代码创建**
   ```javascript
   // 在云函数中执行
   const db = cloud.database()
   
   // 创建users集合（第一次插入数据时自动创建）
   await db.collection('users').add({
     data: {
       openid: 'test',
       nickName: 'Test User'
     }
   })
   ```

### 第四步：配置数据库权限

> [!important] 提示
>请使用新版安全规则，避免使用旧版权限设置

1. **users集合权限**
   ```json
   {
     "read": "auth != null && auth.openid == resource.openid",
     "write": "auth != null && auth.openid == resource.openid"
   }
   ```

2. **events集合权限**
   ```json
   {
     "read": "auth != null",
     "write": "auth != null && (resource == null || auth.openid == resource.creator || get('database.users.$(auth.openid)') != null)"
   }
   ```

### 第五步：创建云函数

在 `cloudfunctions` 目录下创建必要的云函数：
- `login` - 用户登录和信息管理
- `createEvent` - 创建活动
- `updateTimeSlots` - 更新时间选择

### 第六步：配置索引

为提高查询性能，创建必要的数据库索引：

```javascript
// 在云开发控制台数据库脚本中执行

// users集合索引
db.users.createIndex({"openid": 1}, {unique: true})

// events集合索引
db.events.createIndex({"eventId": 1}, {unique: true})
db.events.createIndex({"creator": 1})
db.events.createIndex({"createTime": -1})
db.events.createIndex({"participants.openid": 1})
```

## 开发环境与生产环境分离

### 环境区分策略

为避免开发数据污染生产数据，推荐使用表名前缀区分：
- **开发环境**: 直接使用表名 (`todo`, `users`, `events`)
- **生产环境**: 添加 `p_` 前缀 (`p_todo`, `p_users`, `p_events`)

### 实现代码

```javascript
// utils/database.js
const isLocal = () => {
  const platform = wx.getDeviceInfo().platform
  return platform === 'devtools'
}

const getCollectionName = (name) => {
  if (!isLocal() && !name.startsWith('all_')) {
    return 'p_' + name
  }
  return name
}

const db = () => {
  return wx.cloud.database()
}

const collection = (name) => {
  return db().collection(getCollectionName(name))
}

module.exports = {
  collection,
  db
}
```

## 数据流程设计

### 用户注册流程
1. 用户通过微信授权登录
2. `login` 云函数检查用户是否存在于 `users` 集合
3. 新用户：创建用户记录
4. 老用户：更新用户信息

### 活动创建流程
1. 用户创建活动调用 `createEvent` 云函数
2. 生成唯一的5位 `eventId`
3. 在 `events` 集合中创建活动文档
4. 创建者自动加入参与者列表

### 时间选择流程
1. 参与者选择可用时间调用 `updateTimeSlots` 云函数
2. 更新参与者的 `availability` 对象
3. 检查是否所有参与者都已完成选择
4. 满足条件时发送订阅消息通知

## 数据验证规则

### EventId 生成规则
- **格式**: 5位大写字母和数字组合 (A-Z, 0-9)
- **示例**: `A1B2C`, `XYZ89`
- **唯一性**: 创建前检查是否已存在

### 时间段键值格式
- **格式**: `YYYY-MM-DD-N` (N为时间段索引，从1开始)
- **示例**: `2024-01-15-1` 表示2024年1月15日第1个时间段
- **值类型**: Boolean (true=可用, false=不可用)

### 参与者可用性
- **键**: 时间段标识符
- **值**: Boolean类型
- **缺失键**: 视为不可用