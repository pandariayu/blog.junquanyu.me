# Smart Filtering Algorithm

## Multi-dimensional Time Filtering (`filterTimeSlots`)

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