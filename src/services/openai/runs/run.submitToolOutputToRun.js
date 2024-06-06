require('dotenv').config();
const axios = require('axios');

function submitToolOutputs(threadId, runId, toolOutputs) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!threadId) {
    throw new Error("Thread ID is required.");
  }

  if (!runId) {
    throw new Error("Run ID is required.");
  }

  if (!toolOutputs || !Array.isArray(toolOutputs) || toolOutputs.length === 0) {
    throw new Error("Tool outputs are required and should be a non-empty array.");
  }

  const url = `https://api.openai.com/v1/threads/${threadId}/runs/${runId}/submit_tool_outputs`;

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
    tool_outputs: toolOutputs
  };

  return axios.post(url, data, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = submitToolOutputs;
