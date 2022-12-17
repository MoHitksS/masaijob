const { Router } = require('express');
const { JobModel } = require('../Models/Job.Model');
const Jobs = Router();

Jobs.post('/add', async (req, res) => {
    const job = new JobModel(req.body);
    await job.save();
    res.send('Job Is Posted');
})

Jobs.get('/', async (req, res) => {
    const job = await JobModel.find()
    res.send({ data: job });
})


module.exports = {
    Jobs
}
