# Backend Notification Algorithm

## Automatic Notification Trigger (`updateTimeSlots` Cloud Function)

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