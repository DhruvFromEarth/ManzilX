const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true // Links the application to a specific job
    },
    resume: {
        // As mentioned, this stores a string. For file uploads, you'd integrate a service.
        type: String,
        required: false
    },
    applicationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
