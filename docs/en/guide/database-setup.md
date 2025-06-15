# Database Setup

## WeChat Cloud Development Database Overview

The WeChat mini-program cloud development database is a document-based database (similar to MongoDB) that provides the following advantages for developers:
- Multi-platform SDK support: Mini-program frontend, Web, Node.js and other platforms
- No server required: Direct database operations from mini-program without backend services
- Automatic authentication: Natural permission control based on WeChat user system
- Real-time data: Support for real-time data push functionality
- Flexible permissions: Support for custom security rules

**Reference Documentation:**
- [WeChat Cloud Development Database Official Documentation](https://developers.weixin.qq.com/minigame/dev/wxcloud/guide/database.html)
- [Cloud Database Getting Started Guide](https://developers.weixin.qq.com/minigame/dev/wxcloud/guide/database/getting-started.html)

## Database Configuration

### Initialization Configuration
Unified environment configuration required in all cloud functions:
```javascript
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'your-env-id'  // Cloud development environment ID
})
```

## Database Collection Design

### 1. `users` User Collection

**Purpose**: Store user personal information and authentication data

**Field Structure**:
```json
{
  "_id": "ObjectId",           // System-generated document ID
  "_openid": "string",         // WeChat user OpenID (auto-added by system)
  "openid": "string",          // WeChat OpenID (required, unique)
  "unionid": "string",         // WeChat UnionID (optional)
  "nickName": "string",        // User nickname
  "avatarUrl": "string",       // User avatar URL
  "createTime": "Date",        // Account creation time
  "updateTime": "Date"         // Last update time
}
```

**Index Configuration**:
```javascript
// Execute in cloud development console database interface
db.users.createIndex({"openid": 1}, {unique: true})
```

### 2. `events` Events Collection

**Purpose**: Store event information, participant data and scheduling

**Field Structure**:
```json
{
  "_id": "ObjectId",               // System-generated document ID
  "_openid": "string",             // Creator's OpenID (auto-added by system)
  "eventId": "string",             // 5-character alphanumeric ID (unique)
  "title": "string",               // Event title
  "description": "string",         // Event description
  "startDate": "string",           // Start date (YYYY-MM-DD)
  "endDate": "string",             // End date (YYYY-MM-DD)
  "timeRange": ["string"],         // Time slot array (e.g.: ["09:00", "10:00"])
  "timezone": "string",            // Timezone identifier
  "timezoneText": "string",        // Timezone display text
  "maxParticipants": "number",     // Maximum number of participants
  "creator": "string",             // Creator OpenID
  "createTime": "Date",            // Creation time
  "hasNotified": "boolean",        // Whether notification has been sent
  "participants": [                // Participants array
    {
      "openid": "string",          // Participant OpenID
      "availability": {            // Time availability object
        "YYYY-MM-DD-1": "boolean", // Format: date-time slot index
        "YYYY-MM-DD-2": "boolean"
        // More time slots...
      }
    }
  ]
}
```

**Index Configuration**:
```javascript
// Execute in cloud development console database interface
db.events.createIndex({"eventId": 1}, {unique: true})
db.events.createIndex({"creator": 1})
db.events.createIndex({"createTime": -1})
```

## Database Setup Steps

### Step 1: Enable Cloud Development Service

1. **Register WeChat Mini-program Account**
   - Visit [WeChat Official Accounts Platform](https://mp.weixin.qq.com/)
   - Register and verify mini-program developer account

2. **Enable Cloud Development**
   - Create new project in WeChat Developer Tools
   - Select "Cloud Development" template or enable in existing project
   - Follow prompts to enable cloud development service (Personal version ¥19.9/month)

3. **Create Cloud Development Environment**
   - Click "Cloud Development" button in Developer Tools
   - Create new cloud development environment, fill in environment name
   - Record the generated environment ID

### Step 2: Initialize Cloud Development Environment

1. **Configure Mini-program Side**
   ```javascript
   // miniprogram/app.js
   App({
     onLaunch: function () {
       // Initialize cloud development
       wx.cloud.init({
         env: 'your-env-id', // Replace with your environment ID
         traceUser: true
       })
     }
   })
   ```

2. **Configure app.json**
   ```json
   {
     "cloud": true,
     "pages": [...],
     "window": {...}
   }
   ```

### Step 3: Create Database Collections

1. **Create via Cloud Development Console**
   - Open cloud development console
   - Select "Database" tab
   - Click "Add Collection" to create:
     - `users`
     - `events`

2. **Create via Code**
   ```javascript
   // Execute in cloud function
   const db = cloud.database()
   
   // Create users collection (automatically created on first data insert)
   await db.collection('users').add({
     data: {
       openid: 'test',
       nickName: 'Test User'
     }
   })
   ```

### Step 4: Configure Database Permissions

**Important: Please use new security rules, avoid using legacy permission settings**

1. **users Collection Permissions**
   ```json
   {
     "read": "auth != null && auth.openid == resource.openid",
     "write": "auth != null && auth.openid == resource.openid"
   }
   ```

2. **events Collection Permissions**
   ```json
   {
     "read": "auth != null",
     "write": "auth != null && (resource == null || auth.openid == resource.creator || get('database.users.$(auth.openid)') != null)"
   }
   ```

### Step 5: Create Cloud Functions

Create necessary cloud functions in the `cloudfunctions` directory:
- `login` - User login and information management
- `createEvent` - Create events
- `updateTimeSlots` - Update time selections

### Step 6: Configure Indexes

Create necessary database indexes for improved query performance:

```javascript
// Execute in cloud development console database scripts

// users collection indexes
db.users.createIndex({"openid": 1}, {unique: true})

// events collection indexes
db.events.createIndex({"eventId": 1}, {unique: true})
db.events.createIndex({"creator": 1})
db.events.createIndex({"createTime": -1})
db.events.createIndex({"participants.openid": 1})
```

## Development and Production Environment Separation

### Environment Differentiation Strategy

To avoid development data contaminating production data, recommend using table name prefixes:
- **Development Environment**: Use table names directly (`todo`, `users`, `events`)
- **Production Environment**: Add `p_` prefix (`p_todo`, `p_users`, `p_events`)

### Implementation Code

```javascript
// utils/database.js
const isLocal = () => {
  const platform = wx.getDeviceInfo().platform
  return platform === 'devtools'
}

const getCollectionName = (name) => {
  if (!isLocal() && !name.startsWith('all_')) {
    return 'p_' + name
  }
  return name
}

const db = () => {
  return wx.cloud.database()
}

const collection = (name) => {
  return db().collection(getCollectionName(name))
}

module.exports = {
  collection,
  db
}
```

## Data Flow Design

### User Registration Flow
1. User authorizes login via WeChat
2. `login` cloud function checks if user exists in `users` collection
3. New user: Create user record
4. Existing user: Update user information

### Event Creation Flow
1. User creates event by calling `createEvent` cloud function
2. Generate unique 5-character `eventId`
3. Create event document in `events` collection
4. Creator automatically joins participant list

### Time Selection Flow
1. Participant selects available time by calling `updateTimeSlots` cloud function
2. Update participant's `availability` object
3. Check if all participants have completed selection
4. Send subscription message notification when conditions are met

## Data Validation Rules

### EventId Generation Rules
- **Format**: 5-character combination of uppercase letters and numbers (A-Z, 0-9)
- **Example**: `A1B2C`, `XYZ89`
- **Uniqueness**: Check for existence before creation

### Time Slot Key Format
- **Format**: `YYYY-MM-DD-N` (N is time slot index, starting from 1)
- **Example**: `2024-01-15-1` represents first time slot on January 15, 2024
- **Value Type**: Boolean (true=available, false=unavailable)

### Participant Availability
- **Key**: Time slot identifier
- **Value**: Boolean type
- **Missing Key**: Considered unavailable 