const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoadmapSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    stream: {
        type: [
            {
                type: String
            }
        ],
        required: true
    },
    tags: {
        type: [
            {
                type: String
            }
        ],
        required: true
    },

    eligibility: {
        type: String,
        required: true
    },
    entranceExams: {
        type: String,
        required: true
    },
    courses: {
        type: [
            {
                type: String
            }
        ],
    },
    duration: {
        type: String,
    },
    colleges: {
        type: String,
        required: true
    },
    recruiters: {
        type: String,
        required: true
    },
    averageSalary: {
        type: String,
        required: true
    },
    higherStudies: {
        type: String,
        required: true
    },
    jobProfiles: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Roadmap', RoadmapSchema)