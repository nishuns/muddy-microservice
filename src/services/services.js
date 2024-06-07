const createAssistant = require('./openai/assistants/assitants.create');
const createThread = require('./openai/threads/threads.create');
const createMessage = require('./openai/messages/messages.create');
const createRun = require('./openai/runs/runs.create');
const retrieveRun = require('./openai/runs/runs.retrieve');
const listMessages = require('./openai/messages/messages.lists');
const handleThreadRun = require('./handleThreadRun');
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
//   messages: []
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

const threadId = 'thread_ubjTFsqFZMSZoZyMuuIYZYLT'; // Replace with your actual thread ID
const message = 'Can you explain me basics of trigonometry';

// listMessages(threadId).then(response => {
//     console.log(response);
    
//     response.data.forEach((message) => {
//         console.log(message.content);
//     })
// });

// handleThreadRun(threadId, message).then(content => {
//   console.log('First message content:', content);
// }).catch(error => {
//   console.error('Error:', error);
// });

