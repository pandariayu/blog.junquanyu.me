# 后端通知算法

## 自动通知触发 (`updateTimeSlots` 云函数)

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