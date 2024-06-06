require('dotenv').config();
const axios = require('axios');

function createMessage(threadId, { role, content }) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!threadId) {
    throw new Error("Thread ID is required.");
  }

  if (!role || !content) {
    throw new Error("Both role and content are required.");
  }

  const url = `https://api.openai.com/v1/threads/${threadId}/messages`;

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
    role: role,
    content: content
  };

  return axios.post(url, data, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = createMessage;
