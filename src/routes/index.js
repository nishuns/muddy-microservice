const express = require('express');
const router = express.Router();
const threadsRoutes = require('./threads');

// Use the threads routes with the base path /api/v1/eddie
router.use('/threads', threadsRoutes);

module.exports = router;
