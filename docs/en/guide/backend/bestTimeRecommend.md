# Best Time Recommendation Algorithm

## Core Algorithm (`calculateBestTimeSlots`)

This is the most complex algorithm in the entire system, divided into the following steps:

### 1. Filter Valid Time Slots
```javascript
// Only consider overlapping times with 2 or more people
Object.entries(groupSelectedSlots).forEach(([timeKey, slotInfo]) => {
  if (slotInfo.count >= 2) {
    bestSlots.push({ timeKey, ...slotInfo })
  }
})
```

### 2. Time Slot Sorting
```javascript
// Sort by date and time chronologically
bestSlots.sort((a, b) => {
  const [yearA, monthA, dayA, timeA] = a.timeKey.split('-')
  const [yearB, monthB, dayB, timeB] = b.timeKey.split('-')
  const dateA = `${yearA}-${monthA}-${dayA}`
  const dateB = `${yearB}-${monthB}-${dayB}`
  if (dateA !== dateB) return dateA.localeCompare(dateB)
  return parseInt(timeA) - parseInt(timeB)
})
```

### 3. Continuous Time Slot Merging 🔄
**Algorithm Highlight:** This is a continuous interval merging algorithm based on dynamic programming principles

```javascript
// Conditions for merging:
1. Same date
2. Continuous time (currentSlot.endTime === time)
3. Identical participants (users.every(...))

// When merge conditions are met, update end time
currentSlot.endTime = time + 1

// Otherwise save current interval and start new interval
mergedSlots.push({
  date: currentSlot.date,
  time: `${startTime}:00-${endTime}:00`,
  count: currentSlot.count,
  users: currentSlot.users
})
```

### 4. Smart Sorting Strategy
Supports two sorting priorities:

**People Priority Mode:**
```javascript
if (b.count !== a.count) return b.count - a.count  // More people prioritized
return getDuration(b.time) - getDuration(a.time)   // When same people count, longer duration prioritized
```

**Duration Priority Mode:**
```javascript
const durationDiff = getDuration(b.time) - getDuration(a.time)
if (durationDiff !== 0) return durationDiff  // Longer duration prioritized
return b.count - a.count                      // When same duration, more people prioritized
```

### 5. Best Choice Marking
```javascript
// Mark all time slots with same score as first place as "best choice"
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