const express = require('express');
const router = express.Router();

const Job = require('../models/job');

// Register
router.post('/register', (req, res, next) => {
    let newJob = new Job({
        title: req.body.title,
        companyName: req.body.companyName,
        location: req.body.location,
        description: req.body.description,
        term: req.body.term,
        requiredSkills: req.body.requiredSkills,
        dueDate: req.body.dueDate,
        payRate: req.body.payRate,
        email: req.body.email
    })

    Job.addJob(newJob, (err, job) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register job'});
        } else {
            res.json({success: true, msg: 'Job registered'});
        }
    });
});

// Job List
router.get('/list', (req, res, next) => {
    Job.find((err, jobs) => {
        if (err) {
            res.send(err);
        } else {
            res.json(jobs);
        }
    });
});

// Job
router.get('/title/:id', (req, res, next) => {
    const id = req.params.id;
    Job.getJobById(id, (err, job)=> {
        if (err) {
            res.json({sucess: false, msg: "Faild to retrive job"});
        } else {
            res.json(job);
        }
    });
});

module.exports = router;
