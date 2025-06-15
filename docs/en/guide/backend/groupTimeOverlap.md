# Group Time Overlap Calculation Algorithm

## Time Overlap Statistics (`updateGroupTimeSlots`)

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