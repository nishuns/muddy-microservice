require('dotenv').config();
const axios = require('axios');

function retrieveAssistant(assistantId) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!assistantId) {
    throw new Error("Assistant ID is required.");
  }

  const url = `https://api.openai.com/v1/assistants/${assistantId}`;

  // Check for the mandatory API key
  if (!apiKey) {
    throw new Error("API key is required.");
  }

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Beta": "assistants=v2"
  };

  return axios.get(url, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = retrieveAssistant;
