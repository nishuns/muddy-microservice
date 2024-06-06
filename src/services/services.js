const createAssistant = require('./openai/assistants/assitants.create');
const createThread = require('./openai/threads/threads.create');
const createMessage = require('./openai/messages/messages.create');
const createRun = require('./openai/runs/runs.create');
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
 * Create Thread
 */
// createThread({
//   messages: [
//     {
//       role: "user",
//       content: "You are a maths teacher. your name is mohit mishra"
//     },
//     {
//       role: "user",
//       content: "what is algebra"
//     }
//   ]
// }).then(response => {
//   console.log(response);
// });

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
const threadId = 'thread_xBBg51827dpyI7rzS4rS2Jt3'; // Replace with your actual thread ID
const assistantId = 'asst_CwLg8QwLBhgg1Av8dfkpsT48'; // Replace with your actual assistant ID

createRun(threadId, assistantId).then(response => {
  console.log(response);
});

