
const axios = require('axios');

function modifyAssistant(assistantId, { instructions, tools, model = "gpt-4-turbo" }) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!assistantId) {
    throw new Error("Assistant ID is required.");
  }

  const url = `https://api.openai.com/v1/assistants/${assistantId}`;

  // Check for the mandatory API key
  if (!apiKey) {
    throw new Error("API key is required.");
  }

  if (!instructions) {
    throw new Error("Instructions are required.");
  }

  if (!tools || !Array.isArray(tools) || tools.length === 0) {
    throw new Error("At least one tool is required.");
  }

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Beta": "assistants=v2"
  };

  const data = {
    instructions: instructions,
    tools: tools,
    model: model
  };

  return axios.post(url, data, { headers: headers })
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
}

module.exports = modifyAssistant;
