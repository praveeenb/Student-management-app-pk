# Student Management App
  
This project includes:

- Add students  
- Read all students  
- Read a single student  
- Update one student  
- Update multiple students (Bulk Update)  
- Delete student 

---

##  How to Run the Project

###  Install dependencies
```
npm install
```

### Start the server  
```
node index.js
```

### OR (Developer mode with auto-reload)
```
npm run dev
```

### Server runs at:
```
http://localhost:3000
```

---

## API Endpoints

### **Get all students**
```
GET /students
```

### **Get a single student by ID**
```
GET /students/:id
```

### **Add a new student**
```
POST /students
```

#### Example Body
```
json
{
  "id": 11,
  "name": "New Student",
  "age": 20,
  "roll": "NS011",
  "department": "CSE"
}
```

---

### **Update a single student**
```
PUT /students/:id
```

#### Example Body:
```json
{
  "name": "Updated Name",
  "department": "ECE"
}
```

---

### **Update multiple students (Bulk Update)**
```
PUT /students
```

#### Example Body (Array):
```json
[
  { "id": 1, "name": "Edited Praveen" },
  { "id": 3, "department": "IT" },
  { "id": 7, "roll": "HN007X" }
]
```

---

### **Delete a student**
```
DELETE /students/:id
```

## 🔗 GitHub Repository Link

```
https://github.com/praveeenb/Student-management-app-pk
```

---

## Technologies Used

- Node.js  
- Express.js  
- JavaScript  

---
