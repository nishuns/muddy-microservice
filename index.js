const OpenAI = require("openai");
const prompts = require("./prompts");
require('dotenv').config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const suggestAVideo = (keyphrase) => {
	return `/embed/VideosWidget/${keyphrase}`;
};

const getLearningIntentUrl = (intentID, keyphrase) => {
	return '/game/intent/${intentID}/${keyphrase}';
};

const suggestALearningIntent = () => {
//   const data = JSON.parse(prompts);
  const result = prompts.map((item) => ({
    id: item._id.$oid,
    label: item.label,
  }));

      return JSON.stringify(result, null, 2);
    // return data
};

// console.log(suggestALearningIntent())

const functionMap = {
  suggestAVideo,
  suggestALearningIntent,
  getLearningIntentUrl
};

const handleRequiresAction = async (thread, run) => {
  if (
    run.required_action &&
    run.required_action.submit_tool_outputs &&
    run.required_action.submit_tool_outputs.tool_calls
  ) {
    const toolOutputs = run.required_action.submit_tool_outputs.tool_calls
      .map((tool) => {
        const parameters = JSON.parse(tool.function.arguments);
        console.log(parameters);
        if (functionMap[tool.function.name]) {
          const result = functionMap[tool.function.name](parameters.keyphrase);
          return {
            tool_call_id: tool.id,
            output: result,
          };
        }
      })
      .filter(Boolean);

    if (toolOutputs.length > 0) {
      run = await client.beta.threads.runs.submitToolOutputsAndPoll(
        thread.id,
        run.id,
        { tool_outputs: toolOutputs }
      );
      console.log("Tool outputs submitted successfully.");
    } else {
      console.log("No tool outputs to submit.");
    }

    return handleRunStatus(thread, run);
  }
};

const handleRunStatus = async (thread, run) => {
  if (run.status === "completed") {
    let messages = await client.beta.threads.messages.list(thread.id);
    // console.log(messages.data[0].content[0].text.value);
    return messages.data[0].content[0].text.value;
  } else if (run.status === "requires_action") {
    console.log(run.status);
    return await handleRequiresAction(thread, run);
  } else {
    console.error("Run did not complete:", run);
  }
};

const main = async () => {
  // const thread = await client.beta.threads.create();
  // await client.beta.threads.messages.create(thread.id, {
  //   role: "user",
  //   content: "I want to understand about neural network",
  // });

  // let run = await client.beta.threads.runs.createAndPoll(thread.id, {
  //   assistant_id: "asst_BEhcTKepXRDTVq2IplWcF6eZ",
  // });

  // const response = await handleRunStatus(thread, run);
  // console.log(JSON.parse(response));

  // Retrieve File List
  // const list = await client.files.list();

  // for await (const file of list) {
  //   console.log(file);
  // }

  // get Vector Store
  // const vectorStoreFiles = await client.beta.vectorStores.files.list(
  //   "vs_fkUgtF3AhH1r0Z4GzAIabiRS"
  // );
  // console.log(vectorStoreFiles);

  // get single file
  const file = await client.files.retrieve("file-T1yyO2w9VSdIX5gL8Er8vD4I");

  console.log(file);
};

main().catch(console.error);
