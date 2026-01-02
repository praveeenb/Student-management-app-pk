const express = require('express');
const router = express.Router();

let students = [
    { id: 1, name: "Rithik" },
    { id: 2, name: "Raj" },
    { id: 3, name: "Rin" }
];

router.get('/', (req, res) => {
    res.json(students);
});

router.post('/', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        students
    });
});

module.exports = router;
