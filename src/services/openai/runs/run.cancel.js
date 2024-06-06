require('dotenv').config();
const axios = require('axios');

function cancelRun(threadId, runId) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!threadId) {
    throw new Error("Thread ID is required.");
  }

  if (!runId) {
    throw new Error("Run ID is required.");
  }

  const url = `https://api.openai.com/v1/threads/${threadId}/runs/${runId}/cancel`;

  // Check for the mandatory API key
  if (!apiKey) {
    throw new Error("API key is required.");
  }

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Beta": "assistants=v2"
  };

  return axios.post(url, {}, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = cancelRun;
