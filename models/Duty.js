const mongoose = require('mongoose');

const DutySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Duty', DutySchema);