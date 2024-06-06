require('dotenv').config();
const axios = require('axios');

function deleteMessage(threadId, messageId) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!threadId) {
    throw new Error("Thread ID is required.");
  }

  if (!messageId) {
    throw new Error("Message ID is required.");
  }

  const url = `https://api.openai.com/v1/threads/${threadId}/messages/${messageId}`;

  // Check for the mandatory API key
  if (!apiKey) {
    throw new Error("API key is required.");
  }

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Beta": "assistants=v2"
  };

  return axios.delete(url, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = deleteMessage;
