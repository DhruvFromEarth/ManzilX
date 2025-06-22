const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');

// @route   POST api/students/submit
// @desc    Submit student enrollment form
// @access  Public
router.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, interestedCollege } = req.body;

        if (!name || !email || !phone || !interestedCollege) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        const newStudent = new Student({
            name,
            email,
            phone,
            interestedCollege
        });

        const savedStudent = await newStudent.save();
        res.status(201).json({
            message: 'Form submitted successfully!',
            student: savedStudent
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
