const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // A student should only inquire once with the same email
    },
    phone: {
        type: String,
        required: true
    },
    interestedCollege: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true,
        default: 'Website Form' // Tracks lead origin, e.g., 'Cold Call', 'Referral'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Student', StudentSchema);
