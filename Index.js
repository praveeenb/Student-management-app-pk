const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Student API is running successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
