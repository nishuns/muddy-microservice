require('dotenv').config();
const axios = require('axios');

function createThreadAndRun(assistantId, thread = null, model = null) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!assistantId) {
    throw new Error("Assistant ID is required.");
  }

  const url = `https://api.openai.com/v1/threads/runs`;

  // Check for the mandatory API key
  if (!apiKey) {
    throw new Error("API key is required.");
  }

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Beta": "assistants=v2"
  };

  const data = {
    assistant_id: assistantId
  };

  if (thread) {
    data.thread = thread;
  }

  if (model) {
    data.model = model;
  }

  return axios.post(url, data, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = createThreadAndRun;
