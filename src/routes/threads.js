const express = require('express');
const createThread = require('../services/openai/threads/threads.create');
const handleThreadRun = require('../services/handleThreadRun');
const router = express.Router();

// POST /api/v1/eddie/create-thread
router.post('/create-thread', (req, res) => {
  createThread({
    messages: [{ role: 'user', content: 'never answer in not more than 30 words and never show sources' }]
  }).then(response => {
    res.send(response);
  });
});

router.post('/handle-thread-run', (req, res) => {
  handleThreadRun(req.body.threadId, req.body.message).then(content => {
    console.log('First message content:', content);
    res.send(content);
  }).catch(error => {
    console.error('Error:', error);
  });
})

module.exports = router;
