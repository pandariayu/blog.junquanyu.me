# 啥时碰 - 时间协调小程序核心算法说明

[[toc]]

## 概述

这是一个基于微信小程序的时间协调工具，帮助多人找到最佳的聚会时间。系统通过收集每个参与者的空闲时间，智能计算出最适合所有人的时间段。

## 核心算法架构

### 1. 时间格式化与表格生成算法

#### 时间槽初始化 (`initTimeSlots`)

```javascript
// 根据活动的起止时间和日期范围生成时间表格
- 输入：活动开始时间、结束时间、开始日期、结束日期
- 输出：timeSlots（时间段数组）、dateSlots（日期数组）
```

**核心逻辑：**

- 按小时粒度生成时间段：`09:00, 10:00, 11:00...`
- 支持多种日期显示格式：阳历、农历、星期
- 时间槽以 `date-timeIndex` 格式作为唯一标识

### 2. 触摸交互选择算法

#### 智能触摸选择 (`onTouchStart` + `onTouchMove` + `onTouchEnd`)

**算法特点：**
- **支持单点选择**：点击单个时间格子切换状态
- **支持拖拽批量选择**：拖拽选择连续时间段
- **防抖处理**：移动距离小于5px时不触发选择，避免误操作
- **状态一致性**：拖拽过程中保持选择/取消选择的一致性

```javascript
// 核心算法：记录初始状态，拖拽时应用相同操作
selectionValue = !selectedSlots[startKey]  // 取反初始状态
// 拖拽过程中统一应用这个状态
```

### 3. 群组时间重叠计算算法

#### 时间重叠统计 (`updateGroupTimeSlots`)

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

### 4. 最佳时间推荐算法 ⭐

#### 核心算法 (`calculateBestTimeSlots`)

这是整个系统最复杂的算法，分为以下几个步骤：

##### 4.1 筛选有效时间段
```javascript
// 只考虑2人及以上的重叠时间
Object.entries(groupSelectedSlots).forEach(([timeKey, slotInfo]) => {
  if (slotInfo.count >= 2) {
    bestSlots.push({ timeKey, ...slotInfo })
  }
})
```

##### 4.2 时间段排序
```javascript
// 按日期和时间先后顺序排序
bestSlots.sort((a, b) => {
  const [yearA, monthA, dayA, timeA] = a.timeKey.split('-')
  const [yearB, monthB, dayB, timeB] = b.timeKey.split('-')
  const dateA = `${yearA}-${monthA}-${dayA}`
  const dateB = `${yearB}-${monthB}-${dayB}`
  if (dateA !== dateB) return dateA.localeCompare(dateB)
  return parseInt(timeA) - parseInt(timeB)
})
```

##### 4.3 连续时间段合并 🔄
**算法亮点：** 这是一个动态规划思想的连续区间合并算法

```javascript
// 检查是否可以合并的条件：
1. 相同日期
2. 时间连续 (currentSlot.endTime === time)
3. 参与者完全相同 (users.every(...))

// 合并条件满足时，更新结束时间
currentSlot.endTime = time + 1

// 否则保存当前区间，开始新区间
mergedSlots.push({
  date: currentSlot.date,
  time: `${startTime}:00-${endTime}:00`,
  count: currentSlot.count,
  users: currentSlot.users
})
```

##### 4.4 智能排序策略
支持两种排序优先级：

**人数优先模式：**
```javascript
if (b.count !== a.count) return b.count - a.count  // 人数多的优先
return getDuration(b.time) - getDuration(a.time)   // 人数相同时，时长长的优先
```

**时长优先模式：**
```javascript
const durationDiff = getDuration(b.time) - getDuration(a.time)
if (durationDiff !== 0) return durationDiff  // 时长长的优先
return b.count - a.count                      // 时长相同时，人数多的优先
```

##### 4.5 最佳选择标记
```javascript
// 标记与第一名具有相同评分的所有时间段为"最佳选择"
mergedSlots.forEach(slot => {
  if (sortType === 'people') {
    slot.isBestChoice = slot.count === firstSlot.count && 
      getDuration(slot.time) === getDuration(firstSlot.time)
  } else {
    slot.isBestChoice = getDuration(slot.time) === getDuration(firstSlot.time) && 
      slot.count === firstSlot.count
  }
})
```

### 5. 智能过滤算法

#### 多维度时间过滤 (`filterTimeSlots`)

**过滤维度：**
- **时间段**：上午(6-12点)、下午(12-18点)、晚上(18-6点)
- **日期类型**：工作日、周末

**算法逻辑：**
```javascript
// 必须至少选择一个时间段过滤器
if (timeFilters.length === 0) return false

// 时间段匹配（OR逻辑）
const matchesTimeFilter = timeFilters.some(filter => {
  switch (filter.type) {
    case 'morning': return hour >= 6 && hour < 12
    case 'afternoon': return hour >= 12 && hour < 18
    case 'evening': return hour >= 18 || hour < 6
  }
})

// 日期类型匹配（如果没选择日期过滤器，则匹配所有）
const matchesDayFilter = dayFilters.length === 0 || dayFilters.some(...)

return matchesTimeFilter && matchesDayFilter
```

### 6. 后端通知算法

#### 自动通知触发 (`updateTimeSlots` 云函数)

**触发条件：**
```javascript
const isMaxParticipants = participants.length >= eventData.maxParticipants
const isAllCompleted = participants.every(p => 
  Object.keys(p.availability || {}).length > 0
)
const hasNotified = eventData.hasNotified || false

// 同时满足三个条件时发送通知
if (isMaxParticipants && isAllCompleted && !hasNotified)
```

**最佳时间计算（后端版）：**
```javascript
// 统计每个时间段的选择人数
const timeSlotCounts = {}
participants.forEach(p => {
  Object.keys(p.availability || {}).forEach(slot => {
    if (p.availability[slot]) {
      timeSlotCounts[slot] = (timeSlotCounts[slot] || 0) + 1
    }
  })
})

// 找出人数最多的时间段
let maxCount = 0
let bestTimeSlots = []
Object.entries(timeSlotCounts).forEach(([slot, count]) => {
  if (count > maxCount) {
    maxCount = count
    bestTimeSlots = [slot]
  } else if (count === maxCount) {
    bestTimeSlots.push(slot)
  }
})
```

## 算法复杂度分析

### 时间复杂度
- **时间槽生成**: O(n×m) - n为日期数，m为每日时间段数
- **重叠计算**: O(p×s) - p为参与者数，s为总时间槽数
- **连续区间合并**: O(s×log s) - s为有效时间槽数
- **过滤算法**: O(s) - s为待过滤时间槽数

### 空间复杂度
- **存储空间**: O(n×m + p×s) - 主要存储时间表格和用户选择数据

## 算法优化亮点

1. **连续区间合并**：将零散的时间点合并为连续时间段，提高用户体验
2. **双重排序策略**：支持人数优先和时长优先两种推荐模式
3. **多维度过滤**：支持时间段和日期类型的组合筛选
4. **实时计算**：所有计算都在前端进行，响应速度快
5. **状态一致性**：拖拽选择过程中保持操作一致性，避免误操作

## 数据结构设计

### 关键数据结构
```javascript
// 用户时间选择
selectedSlots: {
  "2023-12-01-1": true,   // 2023年12月1日第1个时间段已选择
  "2023-12-01-2": false,  // 2023年12月1日第2个时间段未选择
}

// 群组重叠数据
groupSelectedSlots: {
  "2023-12-01-1": {
    count: 3,
    users: [user1, user2, user3]
  }
}

// 最佳时间段结果
bestTimeSlots: [{
  date: "2023.12.1",
  time: "14:00-16:00",
  count: 5,
  users: [...],
  isBestChoice: true
}]
```
