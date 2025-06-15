# 智能过滤算法

## 多维度时间过滤 (`filterTimeSlots`)

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