require('dotenv').config();
const axios = require('axios');

function createThread({ messages = [] }) {
  const apiKey = process.env.OPENAI_API_KEY;

  const url = `https://api.openai.com/v1/threads`;

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
    messages: messages
  };

  return axios.post(url, data, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = createThread;
