const createAssistant = require('./openai/assistants/assitants.create');
const createThread = require('./openai/threads/threads.create');
const createMessage = require('./openai/messages/messages.create');
const createRun = require('./openai/runs/runs.create');
const retrieveRun = require('./openai/runs/runs.retrieve');
const listMessages = require('./openai/messages/messages.lists');
const handleThreadRun = require('./handleThreadRun');
const retrieveAssistant = require('./openai/assistants/assistants.retrieve');
const { response } = require('express');
require('dotenv').config();

// console.log(process.env.OPENAI_API_KEY)

/** Assistant Creation */
// createAssistant({
//   instructions: 'You are a personal math tutor. When asked a question, write and run Python code to answer the question.',
//   name: 'Math Tutor',
//   tools: [{ type: 'code_interpreter' }]
// }).then(response => {
//   console.log(response);
// });

// Response
// {
//   id: 'asst_CwLg8QwLBhgg1Av8dfkpsT48',
//   object: 'assistant',
//   created_at: 1717658006,
//   name: 'Math Tutor',
//   description: null,
//   model: 'gpt-4o',
//   instructions: 'You are a personal math tutor. When asked a question, write and run Python code to answer the question.',
//   tools: [ { type: 'code_interpreter' } ],
//   top_p: 1,
//   temperature: 1,
//   tool_resources: { code_interpreter: { file_ids: [] } },
//   metadata: {},
//   response_format: 'auto'
// }

/**
 * Thread Response
 */

// {
//   id: 'thread_xBBg51827dpyI7rzS4rS2Jt3',
//   object: 'thread',
//   created_at: 1717659080,
//   metadata: {},
//   tool_resources: {}
// }

/**
 * Create Message
 */
// const threadId = 'thread_xBBg51827dpyI7rzS4rS2Jt3';
// createMessage(threadId, {
//   role: 'user',
//   content: 'what is geometry?'
// }).then(response => {
//   console.log(response);
// });

// {
//   id: 'msg_IjRsaTV3bqmUEZtevEcnUosF',
//   object: 'thread.message',
//   created_at: 1717659323,
//   assistant_id: null,
//   thread_id: 'thread_xBBg51827dpyI7rzS4rS2Jt3',
//   run_id: null,
//   role: 'user',
//   content: [ { type: 'text', text: [Object] } ],
//   attachments: [],
//   metadata: {}
// }

/**
 * Create Run
 */
// const threadId = 'thread_xBBg51827dpyI7rzS4rS2Jt3'; // threadId - 1
// const threadId = 'thread_ubjTFsqFZMSZoZyMuuIYZYLT'; // threadId - 2
// const assistantId = 'asst_CwLg8QwLBhgg1Av8dfkpsT48';

// createRun(threadId, assistantId).then(response => {
//   console.log(response);
// });

// {
//   id: 'run_4asUOdcWFrUqHMbDsnzuxnhe',
//   object: 'thread.run',
//   created_at: 1717659575,
//   assistant_id: 'asst_CwLg8QwLBhgg1Av8dfkpsT48',
//   thread_id: 'thread_xBBg51827dpyI7rzS4rS2Jt3',
//   status: 'queued',
//   started_at: null,
//   expires_at: 1717660175,
//   cancelled_at: null,
//   failed_at: null,
//   completed_at: null,
//   required_action: null,
//   last_error: null,
//   model: 'gpt-4o',
//   instructions: 'You are a personal math tutor. When asked a question, write and run Python code to answer the question.',
//   tools: [ { type: 'code_interpreter' } ],
//   tool_resources: {},
//   metadata: {},
//   temperature: 1,
//   top_p: 1,
//   max_completion_tokens: null,
//   max_prompt_tokens: null,
//   truncation_strategy: { type: 'auto', last_messages: null },
//   incomplete_details: null,
//   usage: null,
//   response_format: 'auto',
//   tool_choice: 'auto'
// }

// const threadId = 'thread_xBBg51827dpyI7rzS4rS2Jt3'; // Replace with your actual thread ID - 1
// const runId = 'run_4asUOdcWFrUqHMbDsnzuxnhe'; // Replace with your actual run ID - 1
// const threadId = 'thread_ubjTFsqFZMSZoZyMuuIYZYLT'; // Replace with your actual thread ID - 2
// const runId = 'run_3VvFQJi4pM864047vY5TLl9f'; // Replace with your actual run ID - 2

// retrieveRun(threadId, runId).then(response => {
//   console.log(response);
// });

// {
//   id: 'run_4asUOdcWFrUqHMbDsnzuxnhe',
//   object: 'thread.run',
//   created_at: 1717659575,
//   assistant_id: 'asst_CwLg8QwLBhgg1Av8dfkpsT48',
//   thread_id: 'thread_xBBg51827dpyI7rzS4rS2Jt3',
//   status: 'expired',
//   started_at: 1717659575,
//   expires_at: null,
//   cancelled_at: null,
//   failed_at: null,
//   completed_at: 1717659577,
//   required_action: null,
//   last_error: null,
//   model: 'gpt-4o',
//   instructions: 'You are a personal math tutor. When asked a question, write and run Python code to answer the question.',
//   tools: [ { type: 'code_interpreter' } ],
//   tool_resources: {},
//   metadata: {},
//   temperature: 1,
//   top_p: 1,
//   max_completion_tokens: null,
//   max_prompt_tokens: null,
//   truncation_strategy: { type: 'auto', last_messages: null },
//   incomplete_details: null,
//   usage: { prompt_tokens: 591, completion_tokens: 32, total_tokens: 623 },
//   response_format: 'auto',
//   tool_choice: 'auto'
// }

// const threadId = 'thread_9lVPLCytLVSfFz59sSPT1Zo6'; // Replace with your actual thread ID
const threadId = 'thread_6ZRZrppzCKz75ANOadQaUaUq' // sample testing id;
const message = 'Create a course on human resource in json';

// listMessages(threadId).then(response => {
//     console.log(response);
    
//     response.data.forEach((message) => {
//         console.log(message.content);
//     })
// });

// --------------------- Create Thread and Generate Story -------------------

/**
 * Create Thread
 */
createThread({
  messages: []
}).then(response => {
    console.log('thread', response.id);
});

// handleThreadRun('asst_lXqh5tuwktMY3nqghCVZgOxG', threadId, message).then(content => {
//   console.log('First message content:', content[0].text.value);
// }).catch(error => {
//   console.error('Error:', error);
// });


// -------------------- Generate Assitants from the Story ------------------------
// JSON content
const jsonContent = {
  "scene": {
    "plot": "You are embarking on a journey to master Human Resource Management (HRM). Throughout this adventure, you will explore foundational concepts, gain hands-on experience, and apply what you've learned to real-world scenarios. Your ultimate goal is to become proficient in HRM, able to manage, develop, and optimize the human capital of any organization.",
    "characters": [
      {
        "id": "mentor_01",
        "name": "Ava Thompson",
        "role": "Mentor",
        "situation": "Guides the learner through HRM, offering insights, explanations, and practical examples.",
        "about": [
          "15 years of experience in HR management",
          "Known for developing innovative HR strategies",
          "Patient and encouraging, with a knack for simplifying complex concepts"
        ]
      },
      {
        "id": "fellow_01",
        "name": "Leo Martin",
        "role": "Fellow Learner",
        "situation": "Learns alongside the protagonist, providing collaborative opportunities and peer support.",
        "about": [
          "Background in business administration",
          "Curious and eager to dive into HRM",
          "Offers additional perspectives and insights from a learner's point of view"
        ]
      }
    ]
  },
  "interactions": [
    {
      "type": "question",
      "content": "What do you think is the most important role of human resource management in an organization?",
      "responses": [
        "Recruitment and Selection",
        "Employee Relations",
        "Training and Development"
      ]
    },
    {
      "type": "video",
      "content": "Watch this video to understand the fundamentals of Human Resource Management.",
      "url": "https://www.example.com/hrm-fundamentals"
    },
    {
      "type": "assessment",
      "content": "Let's test your understanding of Recruitment and Selection.",
      "questions": [
        {
          "question": "Explain the significance of a structured recruitment process.",
          "type": "open-ended"
        },
        {
          "question": "Which of the following is a critical step in the selection process?",
          "type": "multiple-choice",
          "options": [
            "Job Posting",
            "Onboarding",
            "Performance Appraisal"
          ]
        }
      ]
    },
    {
      "type": "remind",
      "content": "Remember, effective employee relations are built on trust and communication."
    },
    {
      "type": "analyze",
      "content": "Analyze this scenario: An organization is facing high turnover rates. What steps can the HR department take to understand and address the root causes?",
      "actions": [
        "Conduct exit interviews",
        "Analyze employee satisfaction surveys",
        "Implement an employee wellness program"
      ]
    },
    {
      "type": "framework",
      "content": "Apply the ADDIE model (Analysis, Design, Development, Implementation, Evaluation) to developing a new employee training program.",
      "steps": [
        "Analyze training needs",
        "Design training modules",
        "Develop training material",
        "Implement training sessions",
        "Evaluate training effectiveness"
      ]
    }
  ],
  "mastery": {
    "criteria": "The learner demonstrates a comprehensive understanding of Human Resource Management principles and can effectively apply HR strategies in real-world scenarios.",
    "nextSteps": [
      "Organizational Behavior",
      "Employee Engagement Strategies",
      "Advanced Performance Management"
    ]
  }
};


// Function to create assistants
async function createCharacters(character) {
  const instructions = `You are ${character.name}, a ${character.role}. ${character.situation} About you: ${character.about.join(', ')}. INSTRUCTIONS: Always tries keep the conversation short and meaningful`;
  const name = character.name;
  
  const assistant = await createAssistant({
      instructions,
      name,
      tools: [{ type: "file_search"}]
  });
  
  return assistant;
}

// Function to create all assistants
async function createAllAssistants() {
  const assistants = await Promise.all(jsonContent.scene.characters.map(character => createCharacters(character)));
  return assistants;
}

// Main function to handle calls
async function main() {
  const assistants = await createAllAssistants();
  console.log(assistants); // You can now use the assistants variable as needed
}

// Execute the main function
main();

// handleThreadRun(threadId, message).then(content => {
//   console.log('First message content:', content);
// }).catch(error => {
//   console.error('Error:', error);
// });


// const assitant_id = 'asst_93zL0EHRIX6I0xhgxo2YNhp2';
// retrieveAssistant(assitant_id).then((response) => {
//     console.log(response['tool_resources']['file_search']['vector_store_ids']);
// })

