require('dotenv').config();
const axios = require('axios');

function listAssistants({ order = 'desc', limit = 20 }) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  const url = `https://api.openai.com/v1/assistants?order=${order}&limit=${limit}`;

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

module.exports = listAssistants;
