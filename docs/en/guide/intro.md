# When2meet WeApp - Core Algorithm Documentation

[[toc]]

## Overview

This is a WeChat mini-program-based time coordination tool that helps multiple people find the best meeting time. The system collects each participant's availability and intelligently calculates the most suitable time slots for everyone.

## Core Algorithm Architecture

### 1. Time Formatting and Table Generation Algorithm

#### Time Slot Initialization (`initTimeSlots`)

```javascript
// Generate time table based on activity start time, end time, and date range
- Input: activity start time, end time, start date, end date
- Output: timeSlots (time slot array), dateSlots (date array)
```

**Core Logic:**

- Generate time slots by hour granularity: `09:00, 10:00, 11:00...`
- Support multiple date display formats: Gregorian, Lunar, Weekday
- Time slots use `date-timeIndex` format as unique identifier

### 2. Touch Interactive Selection Algorithm

#### Smart Touch Selection (`onTouchStart` + `onTouchMove` + `onTouchEnd`)

**Algorithm Features:**
- **Single point selection**: Click individual time cells to toggle state
- **Drag batch selection**: Drag to select continuous time periods
- **Debounce handling**: Movement less than 5px doesn't trigger selection, avoiding misoperations
- **State consistency**: Maintain consistent select/deselect operation during dragging

```javascript
// Core algorithm: Record initial state, apply same operation during drag
selectionValue = !selectedSlots[startKey]  // Invert initial state
// Apply this state uniformly during dragging
```

### 3. Group Time Overlap Calculation Algorithm

#### Time Overlap Statistics (`updateGroupTimeSlots`)

**Data Structure:**
```javascript
groupSelectedSlots = {
  "2023-12-01-1": {
    count: 3,           // 3 people are free in this time slot
    users: [user1, user2, user3]  // List of available users
  }
}
```

**Algorithm Flow:**
1. Iterate through all participants' `availability` data
2. Count each time slot marked as `true`
3. Record all available users in that time slot
4. Generate visual effects with transparency representing population density

### 4. Best Time Recommendation Algorithm ⭐

#### Core Algorithm (`calculateBestTimeSlots`)

This is the most complex algorithm in the entire system, divided into the following steps:

##### 4.1 Filter Valid Time Slots
```javascript
// Only consider overlapping times with 2 or more people
Object.entries(groupSelectedSlots).forEach(([timeKey, slotInfo]) => {
  if (slotInfo.count >= 2) {
    bestSlots.push({ timeKey, ...slotInfo })
  }
})
```

##### 4.2 Time Slot Sorting
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

##### 4.3 Continuous Time Slot Merging 🔄
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

##### 4.4 Smart Sorting Strategy
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

##### 4.5 Best Choice Marking
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

### 5. Smart Filtering Algorithm

#### Multi-dimensional Time Filtering (`filterTimeSlots`)

**Filter Dimensions:**
- **Time periods**: Morning (6-12), Afternoon (12-18), Evening (18-6)
- **Date types**: Weekdays, Weekends

**Algorithm Logic:**
```javascript
// Must select at least one time period filter
if (timeFilters.length === 0) return false

// Time period matching (OR logic)
const matchesTimeFilter = timeFilters.some(filter => {
  switch (filter.type) {
    case 'morning': return hour >= 6 && hour < 12
    case 'afternoon': return hour >= 12 && hour < 18
    case 'evening': return hour >= 18 || hour < 6
  }
})

// Date type matching (if no date filter selected, match all)
const matchesDayFilter = dayFilters.length === 0 || dayFilters.some(...)

return matchesTimeFilter && matchesDayFilter
```

### 6. Backend Notification Algorithm

#### Automatic Notification Trigger (`updateTimeSlots` Cloud Function)

**Trigger Conditions:**
```javascript
const isMaxParticipants = participants.length >= eventData.maxParticipants
const isAllCompleted = participants.every(p => 
  Object.keys(p.availability || {}).length > 0
)
const hasNotified = eventData.hasNotified || false

// Send notification when all three conditions are met simultaneously
if (isMaxParticipants && isAllCompleted && !hasNotified)
```

**Best Time Calculation (Backend Version):**
```javascript
// Count selection numbers for each time slot
const timeSlotCounts = {}
participants.forEach(p => {
  Object.keys(p.availability || {}).forEach(slot => {
    if (p.availability[slot]) {
      timeSlotCounts[slot] = (timeSlotCounts[slot] || 0) + 1
    }
  })
})

// Find time slots with most people
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

## Algorithm Complexity Analysis

### Time Complexity
- **Time slot generation**: O(n×m) - n is number of dates, m is time slots per day
- **Overlap calculation**: O(p×s) - p is number of participants, s is total time slots
- **Continuous interval merging**: O(s×log s) - s is number of valid time slots
- **Filter algorithm**: O(s) - s is number of time slots to filter

### Space Complexity
- **Storage space**: O(n×m + p×s) - mainly stores time table and user selection data

## Algorithm Optimization Highlights

1. **Continuous interval merging**: Merges scattered time points into continuous time periods, improving user experience
2. **Dual sorting strategy**: Supports both people-priority and duration-priority recommendation modes
3. **Multi-dimensional filtering**: Supports combined filtering by time periods and date types
4. **Real-time calculation**: All calculations are performed on the frontend for fast response
5. **State consistency**: Maintains operation consistency during drag selection to avoid misoperations

## Data Structure Design

### Key Data Structures
```javascript
// User time selection
selectedSlots: {
  "2023-12-01-1": true,   // Selected first time slot on Dec 1, 2023
  "2023-12-01-2": false,  // Not selected second time slot on Dec 1, 2023
}

// Group overlap data
groupSelectedSlots: {
  "2023-12-01-1": {
    count: 3,
    users: [user1, user2, user3]
  }
}

// Best time slot results
bestTimeSlots: [{
  date: "2023.12.1",
  time: "14:00-16:00",
  count: 5,
  users: [...],
  isBestChoice: true
}]
``` 