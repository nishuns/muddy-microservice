const createAssistant = require('./openai/assistants/assitants.create');
const createThread = require('./openai/threads/threads.create');
const createMessage = require('./openai/messages/messages.create');
const createRun = require('./openai/runs/runs.create');
const retrieveRun = require('./openai/runs/runs.retrieve');
const listMessages = require('./openai/messages/messages.lists');
require('dotenv').config();

function handleThreadRun(threadId, message) {
  const assistantId = 'asst_NpdzSj4TgJH53es01e7lwQQX'; // Replace with your actual assistant ID
  const model = 'gpt-4o'; // Replace with your desired model if needed

  return new Promise((resolve, reject) => {
    let runId;

    createMessage(threadId, { role: 'user', content: message })
      .then(() => createRun(threadId, assistantId))
      .then(runResponse => {
        runId = runResponse.id;
        return checkRunStatus(threadId, runId);
      })
      .then(() => listMessages(threadId))
      .then(messagesResponse => {
        const content = messagesResponse.data[0].content;
        resolve(content);
      })
      .catch(error => reject(error));
  });
}

function checkRunStatus(threadId, runId) {
  return new Promise((resolve, reject) => {
    const checkInterval = 2000; // Check every 2 seconds

    function check() {
      retrieveRun(threadId, runId)
        .then(runResponse => {
          if (runResponse.status === 'completed') {
            resolve();
          } else {
            setTimeout(check, checkInterval);
          }
        })
        .catch(error => reject(error));
    }

    check();
  });
}

module.exports = handleThreadRun;
