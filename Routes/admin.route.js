const { Router } = require('express');
const adminRouter = Router();
const { AdminModel } = require('../Models/admin.model');


adminRouter.get('/get', async (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    try {
        if (page) {
            if (Number(page) === 1) {
                let jobs = await AdminModel.find().skip(0).limit(+limit);
                res.send(jobs);
            } else {
                let s = Number(page) * Number(limit) - Number(limit);
                let jobs = await AdminModel.find().skip(s).limit(+limit);
                res.send(jobs);
            }
        } else {
            const jobs = await AdminModel.find();
            res.send(jobs);
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});


adminRouter.post('/post', async (req, res) => {
    let payload = req.body;
    try {
        const jobs = new AdminModel(payload);
        await jobs.save();
        res.status(200).send(jobs);
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});


adminRouter.patch('/patch/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        await AdminModel.findByIdAndUpdate({ _id: id }, payload);
        let job = await AdminModel.findOne({ _id: id });
        res.status(200).send(job);
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

adminRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let job = await AdminModel.findByIdAndDelete({ _id: id });
        res.send(job);
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

module.exports = { adminRouter };
