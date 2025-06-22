const express = require('express');
const router = express.Router();
const JobApplication = require('../models/jobApplication.model');

// @route   POST api/careers/apply
// @desc    Submit a job application
// @access  Public
router.post('/apply', async (req, res) => {
    try {
        const { name, email, phone, resume, jobTitle } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }

        // In a real application, you would handle file uploads with a library like multer
        // and store the file in a cloud storage service (e.g., AWS S3, Cloudinary).
        // For this example, we're just saving the provided resume info (e.g., filename) as a string.

        const newApplication = new JobApplication({
            name,
            email,
            phone,
            resume: resume || 'Not provided',
            jobTitle: jobTitle || 'General Application'
        });

        const savedApplication = await newApplication.save();
        res.status(201).json({
            message: 'Application submitted successfully!',
            application: savedApplication
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
