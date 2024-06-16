const createAssistant = require('./openai/assistants/assitants.create');
const createThread = require('./openai/threads/threads.create');
const createMessage = require('./openai/messages/messages.create');
const createRun = require('./openai/runs/runs.create');
const listMessages = require('./openai/messages/messages.lists');
const checkRunStatus = require('./checkRunStatus');
require('dotenv').config();

function handleThreadRun(assistantID, threadId, message) {
  const assistantId = assistantID || process.env.ASSISTANT_KEY; // Replace with your actual assistant ID
  const model = 'gpt-4o'; // Replace with your desired model if needed
  // console.log('handleThreadRun', threadId, message);
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
        // console.log(content[0].text.value)
        resolve(content);
      })
      .catch(error => reject(error));
  });
}

module.exports = handleThreadRun;
