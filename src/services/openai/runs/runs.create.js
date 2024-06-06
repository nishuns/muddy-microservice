require('dotenv').config();
const axios = require('axios');

function createRun(threadId, assistantId) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!threadId) {
    throw new Error("Thread ID is required.");
  }

  if (!assistantId) {
    throw new Error("Assistant ID is required.");
  }

  const url = `https://api.openai.com/v1/threads/${threadId}/runs`;

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

  return axios.post(url, data, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = createRun;
