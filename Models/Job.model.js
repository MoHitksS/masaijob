const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
    company: { type: String },
    city: { type: String },
    location: { type: String },
    role: { type: String },
    level: { type: String },
    position: { type: String },
    language: { type: String },
    contract: { type: String },
    postedAt:{ type: String }
})

const JobModel = mongoose.model('joblists', jobSchema);

module.exports = {
    JobModel
}