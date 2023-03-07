const { Router } = require('express');
const jobRouter = Router();

jobRouter.get('/job', async (req, res) => {
    res.send('JobRoutes');
});

module.exports = { jobRouter };