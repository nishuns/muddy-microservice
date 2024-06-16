const readline = require('readline');
const handleThreadRun = require('./handleThreadRun'); // Ensure the path is correct
const createThread = require('./openai/threads/threads.create'); // Import the createThread function
const createAssistant = require('./openai/assistants/assitants.create');
const deleteAssistant = require('./openai/assistants/assistants.delete'); // Import the deleteAssistant function
const deleteThread = require('./openai/threads/threads.delete'); // Import the deleteThread function
require('dotenv').config();
const fs = require('fs');

const godAssistantId = process.env.ASSISTANT_KEY; // God assistant's ID
const sessionsFile = 'sessions.json'; // File to store session data

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Function to create assistants
async function createCharacters(character) {
  const instructions = `You are ${character.name}, a ${character.role}. ${character.situation} About you: ${character.about.join(', ')}. Instructions: never answer in not more than 30-40 words if not asked to tell details and never show sources`;
  const name = character.name;

  // Assuming createAssistant is a function to create an assistant
  const assistant = await createAssistant({
    instructions,
    name,
    tools: [{ type: "file_search" }]
  });

  return assistant;
}

async function simulateGame(assistantsConfig, threadId) {
    console.log("You can talk to the following assistants:");
    console.log(assistantsConfig.scene.characters);
  const assistants = await Promise.all(assistantsConfig.scene.characters.map(character => createCharacters(character)));

  assistants.forEach(assistant => {
    console.log(`- ${assistant.name}`);
  });

  console.log("Type 'done' to end the conversation.");
  console.log("Type 'talk to {assistant name}' to start talking to an assistant.");

  let currentAssistant = null;

  while (true) {
    const input = await askQuestion('You: ');

    if (input.toLowerCase() === 'done') {
      const endResponse = await askQuestion('Do you want to end the conversation or save the session for later? (end/save) ');

      if (endResponse.toLowerCase() === 'end') {
        // Delete assistants and thread
        console.log('Ending the session and deleting assistants and thread...');
        await Promise.all(assistants.map(assistant => deleteAssistant(assistant.id)));
        await deleteThread(threadId);
        console.log('Session ended.');
        break;
      } else if (endResponse.toLowerCase() === 'save') {
        // Save the session
        const sessionName = await askQuestion('Enter a name for your session: ');
        saveSession(sessionName, assistantsConfig, threadId);
        console.log(`Session '${sessionName}' saved.`);
        break;
      }
    }

    if (input.toLowerCase().startsWith('talk to ')) {
      const assistantName = input.slice(8).trim();
      const assistant = assistants.find(a => a.name.toLowerCase().startsWith(assistantName.toLowerCase()));

      if (!assistant) {
        console.log("Assistant not found. Please use one of the following names:");
        assistants.forEach(assistant => {
          console.log(`- ${assistant.name}`);
        });
        continue;
      }

      currentAssistant = assistant;
      console.log(`You are now talking to ${assistant.name}.`);
      continue;
    }

    if (!currentAssistant) {
      console.log("Please start by saying 'talk to {assistant name}'.");
      continue;
    }

    try {
      console.log(`${currentAssistant.name} is thinking...`);
      const response = await handleThreadRun(currentAssistant.id, threadId, input);
      console.log(`${currentAssistant.name}: ${response[0].text.value}`);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  rl.close();
}

function saveSession(name, config, threadId) {
  let sessions = [];
  if (fs.existsSync(sessionsFile)) {
    sessions = JSON.parse(fs.readFileSync(sessionsFile, 'utf8'));
  }

  sessions.push({ name, config, threadId });
  fs.writeFileSync(sessionsFile, JSON.stringify(sessions, null, 2));
}

function loadSession(name) {
  if (fs.existsSync(sessionsFile)) {
    const sessions = JSON.parse(fs.readFileSync(sessionsFile, 'utf8'));
    return sessions.find(session => session.name === name);
  }
  return null;
}

function deleteSession(name) {
  if (fs.existsSync(sessionsFile)) {
    let sessions = JSON.parse(fs.readFileSync(sessionsFile, 'utf8'));
    sessions = sessions.filter(session => session.name !== name);
    fs.writeFileSync(sessionsFile, JSON.stringify(sessions, null, 2));
  }
}

function listSessions() {
  if (fs.existsSync(sessionsFile)) {
    const sessions = JSON.parse(fs.readFileSync(sessionsFile, 'utf8'));
    return sessions.map(session => session.name);
  }
  return [];
}

async function main() {
  console.log("Welcome to the School of Unlearn. What do you want to learn today?");
  const topic = await askQuestion('You: ');

  // Step 1: Create a new thread with initial message
  const threadResponse = await createThread({
    messages: [
      { role: 'user', content: 'never answer in not more than 30 words and never show sources' }
    ]
  });
  const threadId = threadResponse.id;
  console.log('Thread created with ID:', threadId);

  // Step 2: Use handleThreadRun with god assistant to get JSON of the course
  console.log('Generating the story, please wait...');
  const courseJsonResponse = await handleThreadRun(godAssistantId, threadId, `Create a course on ${topic} in JSON`);
  const courseConfig = JSON.parse(courseJsonResponse[0].text.value);

  // Display the plot
  console.log(`Plot: ${courseConfig.scene.plot}`);
  const continueResponse = await askQuestion('Do you want to continue? (yes/no) ');

  if (continueResponse.toLowerCase() === 'yes') {
    await simulateGame(courseConfig, threadId);
  } else {
    console.log('Goodbye!');
    rl.close();
  }
}

async function start() {
  console.log("Welcome to the School of Unlearn.");
  const option = await askQuestion('Do you want to start a new game or load a saved session? (new/load) ');

  if (option.toLowerCase() === 'new') {
    await main();
  } else if (option.toLowerCase() === 'load') {
    const existingSessions = listSessions();
    if (existingSessions.length === 0) {
      console.log('No saved sessions found.');
      rl.close();
      return;
    }

    console.log('Existing sessions:');
    existingSessions.forEach((session, index) => {
      console.log(`${index + 1}. ${session}`);
    });

    const sessionName = await askQuestion('Enter the name of the session to load: ');
    const session = loadSession(sessionName);

    if (session) {
      console.log(`Loading session '${sessionName}'...`);
      await simulateGame(session.config, session.threadId);
    } else {
      console.log(`Session '${sessionName}' not found.`);
      rl.close();
    }
  } else {
    console.log('Invalid option. Exiting...');
    rl.close();
  }
}

start();
