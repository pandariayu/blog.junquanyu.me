# 最佳时间推荐算法

## 核心算法 (`calculateBestTimeSlots`)

这是整个系统最复杂的算法，分为以下几个步骤：

### 1. 筛选有效时间段
```javascript
// 只考虑2人及以上的重叠时间
Object.entries(groupSelectedSlots).forEach(([timeKey, slotInfo]) => {
  if (slotInfo.count >= 2) {
    bestSlots.push({ timeKey, ...slotInfo })
  }
})
```

### 2. 时间段排序
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

### 3. 连续时间段合并 🔄
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

### 4. 智能排序策略
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

### 5. 最佳选择标记
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