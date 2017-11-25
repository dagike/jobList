const mongoose = require('mongoose');
const config = require('../config/database');

// Job Schema
const JobSchema = mongoose.Schema({
    title: {
        type: String
    },
    companyName: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    term: {
        type: String
    },
    requiredSkills: {
        type: String
    },
    dueDate: {
        type: String
    },
    payRate: {
        type: String
    },
    email: {
        type: String
    }
});

const Job = module.exports = mongoose.model('Job', JobSchema);

// module.exports.getAllJobs = function (jobs, callback) {
//     Job.find((err, jobs) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(jobs);
//         }
//     });
// }

module.exports.getJobById = function (id, callback) {
    Job.findById(id, callback);
}

module.exports.addJob = function (newJob, callback) {
    newJob.save(callback);
}
