# 群组时间重叠计算算法

## 时间重叠统计 (`updateGroupTimeSlots`)

**数据结构：**
```javascript
groupSelectedSlots = {
  "2023-12-01-1": {
    count: 3,           // 该时间段有3人空闲
    users: [user1, user2, user3]  // 空闲用户列表
  }
}
```

**算法流程：**
1. 遍历所有参与者的 `availability` 数据
2. 对每个标记为 `true` 的时间槽进行计数
3. 记录该时间段内所有空闲用户
4. 生成以透明度表示人数密度的视觉效果