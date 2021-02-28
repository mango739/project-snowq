const mongoose = require('mongoose');
const { Schema } = mongoose;

const schoolSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    admission: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;