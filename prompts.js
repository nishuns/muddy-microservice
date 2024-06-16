module.exports = [
  {
    "_id": {
      "$oid": "64b51308916fea7090b6efdf"
    },
    "prompt": "Please define this '{prompt}' in small paragraphs in shuddh hindi(at least 50 words in each paragraph using <p> tag in html). use bullet points using <ul><li> where neccessary to illustrate things clrearly. Keep a total response output of 500 words.",
    "label": "Explain in Hindi"
  },
  {
    "_id": {
      "$oid": "64b51576a6745f6db0452771"
    },
    "prompt": "Explain {prompt} only through Examples:\n\nInstructions: In your response, please provide verifiable and factual information only, based on existing knowledge and understanding. Share details in no less than 300 words and try to use bullet points in HTML. Use <p> tags to separate information bytes into paragraphs.\n\nAlso, annotate the text using <b> tag identifying proper nouns, cardinals, concepts, verbs, theme of the phrase in your response. <b> tag in html.\n\nExample Structure:\n<ul>\n  <li><strong>Example 1:</strong> Context of Example 1.</li>\n  <li><strong>Example 2:</strong> Context of Example 2.</li>\n  <li><strong>Example 3:</strong> Context of Example 3.</li>\n</ul>\n",
    "label": "Give me examples"
  },
  {
    "_id": {
      "$oid": "64b68066671a5a71e86e9da4"
    },
    "prompt": "In no less than 200 words explain this {prompt} using Socratic questioning method teach me using questions and answers.\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Question No. 1</strong>: [Give me the question] \n</p>\n\n<p>\n<strong>Answer</strong>: [Give me the  the answer.(use <ul> and <li> list) ] \n</p>\n\n<hr />\n\n'''\nPlease give a response in html like format\n\nResult: ",
    "label": "Socratic Questioning"
  },
  {
    "_id": {
      "$oid": "64b68116671a5a71e86e9de9"
    },
    "prompt": "Using a story explain this {prompt}. Give some examples in <p> tags(write everything in html format)\n",
    "label": "Story based learning"
  },
  {
    "_id": {
      "$oid": "64b6814c671a5a71e86e9dec"
    },
    "prompt": "Using a case study based learning this {prompt}. Give some examples in <p> tags. Use bullet points as headers in <b> tags. and write small paragraphs on each.write everything in html format)\n",
    "label": "Case study based learning"
  },
  {
    "_id": {
      "$oid": "64b681ca671a5a71e86e9def"
    },
    "prompt": "Explain this to me {prompt} in good technical and analytical detail for an expert.  Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Description</strong>: [Key description of the {prompt} ] \n</p>\n\n<p>\n<strong>How it works</strong>: [Explain the inner workings of it using key information and components(use <ul> and <li> list)] \n</p>\n\n<p>\n<strong>Reasoning</strong>:\n\n[point out important concepts required to reason through this {prompt} in bullet points(use <ul> and <li> list)]\n</p>\n\n<p>\n<strong>Cause and Effect</strong>:\n[list out the why, what, when and the prerequisites, causes, effect and causality of the events in {prompt}(use <ul> and <li> list)]\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Learn as an Expert"
  },
  {
    "_id": {
      "$oid": "64b681e8671a5a71e86e9df2"
    },
    "prompt": "What is {prompt}. Tell me about the '{prompt}' using neccessary details like a 15 year old would be able to understand. Keep the language simple and easy to understand; and step by step. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>About</strong>: [Explain with an example what is it about.\n</p>\n\n<p>\n<strong>How it works</strong>:[Tell me about how this works, what it leads to, what are the prerequisites, feedback loop etc.(use <ul> and <li> list) ] \n</p>\n\n<p>\n<strong>How can I learn about it?</strong>: [Quote resources, books, work by people that I should refer to. (use <ul> and <li> list)] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Learn as a Newbie."
  },
  {
    "_id": {
      "$oid": "64c0dd026dac17ae702e3fef"
    },
    "prompt": "Turn this {prompt} in 10 multiple choice questions with options as radio buttons [input type=rodio] options. Please dont repeat the questions.\n\n{Instructions}\nGive some examples. Use <hr /> tags to separate the questions. (Write everything in html format)(at least 300 words or more than that))\n\n'''\n<p>\n<strong>Question No. 1</strong>: [Ask the question and give the options as radio buttons as instructed ] \n</p>\n\n<hr />\n\n'''\n\nPlease give a response in html like format. Give all the answers after you have asked all the questions number wise towards the end after the <hr /> tag.\n\n'''\n<hr />\n\n<p>\n<strong>Answers</strong>: \nQ1. [Answer to the Question 1]\n</p>\n\n'''\nResult: ",
    "label": "Ask me questions"
  },
  {
    "_id": {
      "$oid": "64c101b3448c058d5099917c"
    },
    "prompt": "Turn this {prompt} into 10 Fill in the blanks sentences with one fill in the blank [identified as <input type=text>]\n\nFollow given structure.\n\nAfter every question add a <p> tag. Make sure all the answers are different and not a copy. The answer text can only be one or two words. Give some examples in <p> tags(write everything in html format)(at least 300 words or more than that))\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Statement No. 1</strong>: [Create a fill in the blanks statement with at least one fill in the blanks as '<input type=text>' tag for the blank in the sentences. Throw output in html.\n</p>\n\n<hr />\n\n'''\n\nPlease give a response in html like format. Give all the answers to the questions numberwise towards the end of all questions after <hr /> tag \n\nResult: \n",
    "label": "Fill in the Blanks"
  },
  {
    "_id": {
      "$oid": "64c248ca66f2ad42249eba50"
    },
    "prompt": "Explain this {prompt} as code. Code should be intended and available in code block encapsulated in <pre> tag and end it with </pre> after the code is complete. ( example put everything in <P>)",
    "label": "Code Devil ultra"
  },
  {
    "_id": {
      "$oid": "64c249502d83966ab828c2e2"
    },
    "prompt": "Based on Blooms taxonomy create a response on the {prompt} which breaks the response in one para each the instilling each of the steps of learning - recall, understanding, application, analysing and creating a project usecase. Keep recall, understanding, application, analysis, create a project usecase, in bold <b> tag.\n\n{instruction}\nMake it such that I learn any topic given in {prompt} using this. Give an example of each too. Share details in no less than 300 words and try to use bullet points in html. Use <ul> and <li> tags to separate information bytes into paragraphs for each cases.\n\nFollow given structure.\n\n'''\n\n<p>\n<strong>Recall</strong>:[Try to explain how can I practice recall for the given {prompt} with descriptions(use <ul> and <li> list). ] \n</p>\n\n<p>\n<strong>Understanding</strong>:[Try to understand the inner workings using apt descriptions(use <ul> and <li> list). ] \n</p>\n\n[and so on.]\n\n\n'''\n\nPlease give a response in html like format\n\nResult: ",
    "label": "Step-wise Learning"
  },
  {
    "_id": {
      "$oid": "64c25ee9e1e94413904600df"
    },
    "prompt": "Turn this {prompt} into 10 True and false statements towards and add a <p> tag. Towards the end of each statement and add '<input type=radio>' tag for both true and false.{instruction} Start the statement with 'Q:' and start the options with 'A:' for options. After every question options set add another <p> tag. Give all the right answers to the questions only after you have shared all the questions. (write everything in a neat structured html format readable by a human)(at least 300 words or more than that))",
    "label": "True and False Statements"
  },
  {
    "_id": {
      "$oid": "64c566b2c0d3f138c3debc83"
    },
    "prompt": "Give me 20 examples of {prompt} for language learning with their english translation as Example 1, Example 2, Exmaples 3 and so on. (use <ul><li>list format as bullet points). \n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Example: </strong>: [List the first phrase] \n</p>\n\n<p>\n<strong>Translation:</strong>:[Share the translation]\n</p>\n\n<hr />\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Use for Language Learning"
  },
  {
    "_id": {
      "$oid": "64c569d2c0d3f138c3debd48"
    },
    "prompt": "Let us do a roleplay of the {prompt} situation with examples, as Example 1, Example 2, Examples 3. Give me 3 examples. \n\nNow use these 5 roles to interact with each other in at least 5 situations that are connected together. \n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Roles used:</strong>: [List the 3role and its specifics(use <ul> and <li> list). ] \n</p>\n<hr />\n\n<p>\n<strong>Situation No. 1</strong>:[Define the situation]\n</p>\n\n<p>\n<strong>[Role No. 1's name] says</strong>:[Define what how roles interact with each other using example phrases. and so on.]\n</p>\n\n<p>\n<strong>Follow up Situation:</strong>: [List the follow up situation and let the roles interact with each other ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Role play based learning"
  },
  {
    "_id": {
      "$oid": "64c572cac0d3f138c3debf4c"
    },
    "prompt": "Let us do a roleplay of the {prompt} situation for language learning with examples, as Example 1, Example 2, Examples 3. Give me 3 examples in source language along with its english translations.\n\nNow use these 5 roles to interact with each other in at least 5 situations that are connected together. \n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Roles used:</strong>: [List the 3role and its specifics(use <ul> and <li> list). ] \n</p>\n\n<p>\n<strong>Situation No. 1</strong>:[Define the situation]\n</p>\n\n<p>\n<strong>[Role No. 1's name here] says</strong>:[Define what how roles interact with each other using example phrases. and so on. in source language <p>and english translation(use <ul> and <li> list).]\n</p>\n\n<p>\n<strong>Follow up Situation:</strong>: [List the follow up situation and let the roles interact with each other ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Roleplay for Language learning"
  },
  {
    "_id": {
      "$oid": "64c6cbb0c0d3f138c3dec3bb"
    },
    "prompt": "Break the {prompt} into statements separated by . character. Take each sentence and test it for True and false. Report the result statement wise in chronological order 1, 2, 3 and so on. Give your reasoning why my answer is wrong after <b>My reasoning:</b>. Also share my input with each  statement you check.(use html and using <p> tag). {instruction}In your response, please provide verifiable and factual information only, based on existing knowledge and understanding based on accurate and reliable data only. Avoid generating fictional, speculative, or hallucinated content. If uncertain about the answer, kindly state that you don't have the necessary information.",
    "label": "Review this"
  },
  {
    "_id": {
      "$oid": "64c7a9b12befbcd2e2a15e60"
    },
    "prompt": "Is this {prompt} correct, factual, and reliable information. Give your reasoning to support your answer.{instruction}In your response, please provide verifiable and factual information only, based on existing knowledge and understanding based on accurate and reliable data only. Avoid generating fictional, speculative, or hallucinated content. If uncertain about the answer, kindly state that you don't have the necessary information.",
    "label": "Verify this. Your opinions please."
  },
  {
    "_id": {
      "$oid": "64d540decaa9697053704a36"
    },
    "prompt": "Please expand on this '{prompt}' and focus on key people, key information components, work they have done. {instruction}Also focus on quoting numerical information with respect to revenue, count, average, maximum, minimum, frequency etc. wherever relevant. Share details in no less than 300 words and try to use bullet points in html. Use <p> tags to separate information bytes into paragraphs.",
    "label": "Key Information Components"
  },
  {
    "_id": {
      "$oid": "64d547c5522b708015cfd83e"
    },
    "prompt": "Please expand on this '{prompt}' and focus on the key research areas along with the key researchers and their breakthroughs. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Key Research Areas</strong>: [Key researches and breakthroughs(use <ul> and <li> list) ] \n</p>\n<hr />\n<p>\n<strong>Key Researchers</strong>: [List some key researchers and their work(use <ul> and <li> list)] \n</p>\n<hr />\n<p>\n<strong>Key Events & Breakthroughs</strong>:[List event-wise how things have happened(use <ul> and <li> list)]\n</p>\n<hr />\n<p>\n<strong>See Related</strong>:\n[list out some related topics and important researches to watch out for(use <ul> and <li> list)]\n</p>\n<hr />\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Understand as a Researcher"
  },
  {
    "_id": {
      "$oid": "64d5cd366f9144f6e5709580"
    },
    "prompt": "Explain this technical concept '{prompt}' to me as I am a newbie. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Description</strong>: [Description about that] \n</p>\n\n<p>\n<strong>Important Concepts</strong>:\n\n[point out important concepts in bullet points(use <ul> and <li> list)]\n</p>\n\n<p>\n<strong>Examples</strong?\n\n[Give at least 1 or 2 examples and if its something where you can write code and explain  then do that as well using good structure and expressions.\n\n[code should be inside <code> tag of html, and for next line use <br> tag instead of \\n tag to format code]\n</p>\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Explain Technical Concepts"
  },
  {
    "_id": {
      "$oid": "64d6153a5a8de64ebe08ae3f"
    },
    "prompt": "Give me top 10 related words from the '{prompt}' as bullet points in html, its usage in english with spanish and portuguese translations. Also give a few simple sample sentences in all the three languagtes using pre A1 and A1 CEFR statements. Use <p> tags to separate information bytes into paragraphs.",
    "label": "Related Words"
  },
  {
    "_id": {
      "$oid": "64d7c9485c251cff47f4ea4f"
    },
    "prompt": "Please share all of the key information  '{prompt}' in kannada(at least 300 words):",
    "label": "In Kannda"
  },
  {
    "_id": {
      "$oid": "64d7ee755c251cff47f4eb08"
    },
    "prompt": "Give me the history this '{prompt}' using key dates and years of how something developed over the years. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Timeline</strong>: [History timeline of events about that] \n</p>\n\n<p>\n<strong>Description</strong>: [Description about that] \n</p>\n\n<p>\n<strong>Key Events</strong>:\n\n[point out important events in bullet points in chronological order(use <ul> and <li> list. summary phrase in <b>)]\n</p>\n\n<p>\n<strong>Story Arcs</strong?\n\n[Give me all the major key defining moments(Event summary in phrase <b>), key people and key story arcs that serve as a major turning points(use <ul> and <li> list)]\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Key Events"
  },
  {
    "_id": {
      "$oid": "64d7f3a55c251cff47f4eb76"
    },
    "prompt": "Tell me about all the key people for this '{prompt}' using their key responsiblities and key events and key contributions. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Key People</strong>: [Key people associated in the development of that ] \n</p>\n\n<p>\n<strong>Key Responsibilities and Work done</strong>: [Description about that] \n</p>\n\n<p>\n<strong>Key Events</strong>:\n\n[point out important concepts in bullet points(use <ul> and <li> list)]\n</p>\n\n<p>\n<strong>Key Impact with contributions(in numbers)</strong>:\n[list out in numbers the impact, revenue, lives touched, rate of growth/downfall in bullet points(use <ul> and <li> list)]\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Key People & their contribution"
  },
  {
    "_id": {
      "$oid": "64d7f5e35c251cff47f4ebbe"
    },
    "prompt": "Please expand on this '{prompt}' and focus on key policies and frameworks, laws and reforms by organisations, governments, people, key information components, work they have done. Use research level information. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Key Policies</strong>: [Key policies associated in the development of that ] \n</p>\n\n<p>\n<strong>Key Frameworks</strong>: [Description about that] \n</p>\n<hr />\n<p>\n<strong>Key Reforms and Growth</strong>:\n\n[point out key growth metrics in bullet points(use <ul> and <li> list)]\n</p>\n<hr />\n<p>\n<strong>Key Impact(in numbers)</strong>:\n\n[list out in numbers the impact, revenue, lives touched, rate of growth/downfall in bullet points(use <ul> and <li> list)]\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Understanding as Framework & Policies"
  },
  {
    "_id": {
      "$oid": "64d7f7fb5c251cff47f4ebe5"
    },
    "prompt": "Tell me about the '{prompt}' as an entity, its structure and its contribution in no less than 300 words Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>About</strong>: [About the entity and its work and other aspects associated in the development of that ] \n</p>\n\n<p>\n<strong>Structure</strong>: [Description about that as structure and key users involved(use <ul> and <li> list)] \n</p>\n\n<p>\n<strong>Contribution</strong>:\n\n[point out the numerical data on contribution, growth, cap etc. in bullet points(use <ul> and <li> list)]\n</p>\n\n<p>\n<strong>Key Integrations and Relationships</strong>:\n\n[list out the key partnerships with detail in numbers - the impact, revenue, lives touched, rate of growth/downfall in bullet points(use <ul> and <li> list)]\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "As an Entity"
  },
  {
    "_id": {
      "$oid": "64dbaec78520c47fb075f040"
    },
    "prompt": "Please expand on this '{prompt}' like a mathematician would explain it to another mathmatecian with concepts, axioms, theories, formulas etc. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Key mathematical concepts</strong>: [Key mathamatical concepts involved and/or mathematicians(use <ul> and <li> list) ] \n</p>\n\n<p>\n<strong>Understand by data</strong>: [By inference of data and logic, explain this {prompt} (Use <ul> and <li> list)] \n</p>\n\n<p>\n<strong>Its applications</strong>:\n\n[List what kind of applications would lead to this(use <ul> and <li> list)]\n</p>\n\n<p>\n<strong>See Related</strong>:\n\n[list out some related topics and people to watch out for(use <ul> and <li> list)]\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "As a Mathematician"
  },
  {
    "_id": {
      "$oid": "64dc785e6ea50165746cd6ae"
    },
    "prompt": "Explain this to me {prompt} in good technical and analytical detail for an expert. Give some examples in <p> tags(write everything in html format)(at least 300 words or more than that)). \n\nTell me about the '{prompt}' using neccessary details. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>About</strong>: [Share Technical details using analytical reasoning, logical conclusion backing your response in detail. (use <ul> and <li> list)\n</p>\n\n<p>\n<strong>How it works</strong>:[Tell me about how this works, what it leads to, what are the prerequisites, feedback loop etc. (use <ul> and <li> list as bullet points)] \n</p>\n\n<p>\n<strong>Structure</strong>: [Description about that as structure. ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "As an Expert"
  },
  {
    "_id": {
      "$oid": "64ddacac4e3facb6833fda20"
    },
    "prompt": "Explain this to me {prompt} by identifying the list of tasks, skills and capablities required, including technical capabilities in order to learn and execute all the tasks addressed by the {prompt}\n\nTell me about the '{prompt}' using neccessary details. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Broken as Tasks</strong>: [List out  step by step tasks required to address and execute the work done by the {prompt}. (use <ul> and <li> list)\n</p>\n\n<p>\n<strong>Skills Required</strong>:[Tell me about all the prerequisite skills required to understand this.(use <ul> and <li> list) ] \n</p>\n\n<p>\n<strong>Technical Capabilities</strong>: [List out all the capabilities required to do the {prompt}. (use <ul> and <li> list)] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Skills & Capabilities Required"
  },
  {
    "_id": {
      "$oid": "64ddb8609e7bc8cb81d0007b"
    },
    "prompt": "Explain this {prompt} by creating a diagram in html explaining the {prompt} in simple steps. Use  these subtopics of the {prompt} to build a logical diagram in html. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<div class=\"diagram\">\n<strong>Diagram</strong>: [Draw an html diagram flowchart of the concepts in rectangles with arrows and linkages marking relationships, by using shapes linked together. ] \n</div>\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Diagram it"
  },
  {
    "_id": {
      "$oid": "64ddc3fc577fcdd9ae6cc16d"
    },
    "prompt": "Explain this {prompt} by creating a flowchart using ascii art in html explaining the {prompt} in simple steps. Use  these subtopics of the {prompt} to build a logical diagram in html. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<div class=\"diagram\">\n<strong>Diagram</strong>: [Draw an ascii art html diagram flowchart of the concepts in rectangles with arrows and linkages marking relationships, by using shapes linked together. ] \n</div>\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Ascii Art"
  },
  {
    "_id": {
      "$oid": "64e4ce845ac651a5beeab536"
    },
    "prompt": "Dissect the {prompt} using different slices of information focusing on specifics like - What, Why, When, Where, Who, Which, How\n\nTell me about the '{prompt}' using neccessary details. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>About</strong>: [Focus on What, Who, How, Where, Which, Why and so on in an order where you can explain it as a process, event, ecosystem..]\n</p>\n\n<p>\n<strong>Reasoning</strong>:[Try to create a chronological order to explain the {prompt}(use <ul> and <li> list). ] \n</p>\n<hr />\n\n<p>\n<strong>History</strong>: [Focus on dates, cardinals, etc. ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "XRAY this Concept"
  },
  {
    "_id": {
      "$oid": "64e507455ac651a5beeabc47"
    },
    "prompt": "Give me top 5 interview questions on this '{prompt}' along with answers and its reasoning. Follow given structure for all 5 questions.\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Question 1</strong>: [Describe the question in good detail.]\n</p>\n\n<p>\n<strong>Answer</strong>:[Try to answer the question explaining the {prompt}(use <ul> and <li> list). ] \n</p>\n\n<p>\n<strong>Reasoning</strong>: [Give me the reasoning you used to arrive at the answer step by step.(use <ul> and <li> list) ] \n</p>\n\n<hr />\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Interview me"
  },
  {
    "_id": {
      "$oid": "64e592da5ac651a5beeabfc8"
    },
    "prompt": "Using at least 5 relationships to other linked items, concepts, people, processes, as connections, explain the {prompt} \n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Source Node</strong>: [Focus on the starting point of information and explain the context by descriptions.]\n</p>\n\n<p>\n<strong>Connected Nodes(Siblings)</strong>:[Try to identify 5 connected pieces of information as sibling nodes in the neighbourhood of concepts, entities, to the {prompt}. Explain these as bullet list with descriptions(use <ul> and <li> list). ] \n</p>\n\n<p>\n<strong>Child Nodes</strong>: [Create 5 child nodes to the parent node and sibling nodes each. Explain that as bullet list with descriptions.(use <ul> and <li> list) ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Understand by Connections"
  },
  {
    "_id": {
      "$oid": "64e7204ad8cdd6f8cfc62534"
    },
    "prompt": "Rate my understanding for completeness and accuracy on the {prompt}. \n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>The Reviewer says</strong>: [Describe a sentiment you had as an examiner to my {prompt} ] \n</p>\n\n<p>\n<strong>Rating</strong>: [Rate this out of 10 for completeness and accuracy.]\n</p>\n\n<p>\n<strong>Reasoning</strong>:[ Share your reasons on why you rated it what you rated for the {prompt}. Also point out gaps and next steps on what I need to learn to make my understanding comprehensive.Explain these as bullet list with descriptions(use <ul> and <li> list). ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Review my Understanding"
  },
  {
    "_id": {
      "$oid": "64f0fb68d8cdd6f8cfc6584a"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would think about it by talking about underlying and potential concepts, axioms, theories, methods, benefits etc. Follow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Underlying concepts</strong>: [Key concepts involved. Include potential research concepts(use <ul> and <li> list) ] \n</p>\n\n<p>\n<strong>How can it work</strong>: [By inference of data and logic of the current times, extrapolate and explain this {prompt} (Use <ul> and <li> list)] \n</p>\n\n<p>\n<strong>Steps involved</strong>:\n\n[List what would it take to lead to this(use <ul> and <li> list)]\n</p>\n\n<p>\n<strong>See Related</strong>:\n\n[list out some related topics, research and people to watch out for(use <ul> and <li> list)]\n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "As an Imaginative Creative Thinker"
  },
  {
    "_id": {
      "$oid": "64f103f4d8cdd6f8cfc65927"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n\nLevel 1\n- List the key components of\n- Recognize the symptoms of\n- Recall on how to\n- Identify strategies for existing information\n\nLevel 2\n- Summarise the features of\n- Classify these into categories\n- Clarify the instructions\n- Predict the effects and responses to\n\nLevel 3\n- Respond to common questions on with questions as examples\n- Provide advice on\n- Carry out the tasks involved in\n- Use the techniques to accomplish this optimally\n\nLevel 4\n- Select the most appropriate steps to\n- Differentiate between this and known alternatives of \n- Integrate with regulations, compliance for the improvement of\n- Deconstruct as key concepts involved in\n\nLevel 5\n- Check for the prerequisites for doing\n- Determine the relevance of why is it important\n- Judge the efficiency of operations of\n- Reflect on the benefits, gaps, opportunities, threats of\n\nLevel 6\n- Generate a presentation outline for\n- Assemble a team of experts for different categories of work involved for\n- Design an effective project workflow in stages and phases for\n- Suggest ideas on innovative proof of concept for\n\n'''\n<p>\n<strong>Level 1/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each) ] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Understand at Chosen Depth(Level 1 - 6)"
  },
  {
    "_id": {
      "$oid": "64fec600747eded14b65ff5c"
    },
    "prompt": "{instruction}Act as my jestor friend \"Allu Arjun\" who loves to crack jokes and ask trivia questions and uses a lot of emojis.\n{role}\nYou should use a fun hinglish tone to talk to me very dearly like. [arre bhai tu kya laga pada hai padhne me] etc.\n\nUsing the '{prompt}' jest with me to create a fun environment and share an  important insight in the form of a very interesting joke or a trivia question that can amuse me. Give two choice options to choose from as [option 1] and [option 2]\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Allu Arjun says</strong>: [Ask question to start the conversation about the {prompt} which will eventually turn into a joke. Give two choice options as [Option 1] and [Option 2] as funny answers] <ul> and <li> list)\n</p>\n\n<p>\n<strong>On [Option 1] answer</strong>: [Expand the response on Option 1 with a funny twist] \n</p>\n\n<p>\n<strong>On [Option 2] answer</strong>: [Expand the response on Option 2 with another funny twist for a laugh] \n</p>\n\n<hr />\n\n<p>\n<strong>On a serious note/strong>:[Did you know -there is a [movie or a book or a historical event] with a plot line similar to the {prompt}(use <ul> and <li> list). ] \n</p>\n\n<hr />\n\n\n<hr />\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "As a friend"
  },
  {
    "_id": {
      "$oid": "6502b062e6cbf660798e804e"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n\nLevel 1\n- List the key components of\n- Recognize the symptoms of\n- Recall on how to\n- Identify strategies for existing information\n\n\n'''\n<p>\n<strong>Level 1/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each) ] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Level 1 Depth - Structure & Symptoms"
  },
  {
    "_id": {
      "$oid": "6502b0bae6cbf660798e8064"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n''''\nLevel 2\n- Summarise the features of\n- Classify these into categories\n- Clarify the instructions\n- Predict the effects and responses to\n\n'''\n<p>\n<strong>Level 1/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each) ] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Level 2 Depth - Summary of Processes"
  },
  {
    "_id": {
      "$oid": "6502b107e6cbf660798e8078"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n\nLevel 3\n- Respond to common questions on with questions as examples\n- Provide advice on\n- Carry out the tasks involved in\n- Use the techniques to accomplish this optimally\n\n'''\n<p>\n<strong>Level 1/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each) ] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Level 3 Depth - Common Questions "
  },
  {
    "_id": {
      "$oid": "6502b186e6cbf660798e8097"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n'''\nLevel 4\n- Select the most appropriate steps to\n- Differentiate between this and known alternatives of \n- Integrate with regulations, compliance for the improvement of\n- Deconstruct as key concepts involved in\n\n'''\n<p>\n<strong>Level 1/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each.] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Level 4 Depth - Advanced Deconstruction"
  },
  {
    "_id": {
      "$oid": "6502b208e6cbf660798e80ae"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n'''\nLevel 5\n- Check for the prerequisites for doing\n- Determine the relevance of why is it important\n- Judge the efficiency of operations of\n- Reflect on the benefits, gaps, opportunities, threats of\n\n'''\n<p>\n<strong>Level 1/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each) ] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Level 5 Depth - Benefits, Gaps & Opportunities"
  },
  {
    "_id": {
      "$oid": "6502b259e6cbf660798e80bd"
    },
    "prompt": "Please expand on this '{prompt}' like an imaginative, creative thinker would depending whatever level is chosen from the list below. Follow given structure\n\nINSTRUCTION:\n'''\nLevel 6\n- Generate a presentation outline for\n- Assemble a team of experts for different categories of work involved for\n- Design an effective project workflow in stages and phases for\n- Suggest ideas on innovative proof of concept for\n\n'''\n<p>\n<strong>Level 6/strong>: [List the key components of, Recognize the symptoms of, Recall on how to, Identify strategies for existing information(use <ul> and <li> list for each of these comma separated values with description and examples for each) ] \n</p>\n\n[and so for each of the levels. Give examples.]\n'''\n\nPlease give a response in html like format\n\nResult: \n\n\n\n",
    "label": "Level 6 Depth - How to do a Project"
  },
  {
    "_id": {
      "$oid": "6508aef88a0281943083ea60"
    },
    "prompt": "data:\nHashirama Senju | is the First Hokage | in Konohagakure.\nTobirama Senju | is the Second Hokage | in Konohagakure.\nHiruzen Sarutobi | is the Third Hokage | in Konohagakure.\nMinato Namikaze | is the Fourth Hokage | in Konohagakure.\nTsunade Senju | is the Fifth Hokage | in Konohagakure.\nKakashi Hatake | is the Sixth Hokage | in Konohagakure.\nNaruto Uzumaki | is the Seventh Hokage | in Konohagakure.\nMito Uzumaki | is the First Mizukage | in Kirigakure.\nTobirama Senju | is the Second Mizukage | in Kirigakure.\nGengetsu Hōzuki | is the Third Mizukage | in Kirigakure.\nYagura Karatachi | is the Fourth Mizukage | in Kirigakure.\nMei Terumī | is the Fifth Mizukage | in Kirigakure.\nA | is the Third Raikage | in Kumogakure.\nB | is the Fourth Raikage | in Kumogakure.\nC | is the Fifth Raikage | in Kumogakure.\nOnoki | is the Third Tsuchikage | in Iwagakure.\nMu | is the Second Tsuchikage | in Iwagakure.\nMū | is the Second Tsuchikage | in Iwagakure.\nŌnoki | is the Third Tsuchikage | in Iwagakure.\n\ninstructions: create a structure same as given <data> as sample for the <prompt> at least 20 lines separted with <ul><li>\n\nprompt: ",
    "label": "Master smart query v1"
  },
  {
    "_id": {
      "$oid": "6508af06516b87a2b9b11a12"
    },
    "prompt": "DATA:\n\n```\nmode:smart\n\ncreate( \nRam |> eats | Mango. \nMango |> is a type of | Fruit.\nApple |> is a type of | Fruit.\nRam |> was born in | Ayodhya.\n)\n```\nINSTRUCTION:\n\nPlease understand this '{prompt}' and create statements about the {prompt}. Keep the edges as verbs and nodes as entities. Give data in the format like I have shared in DATA and give as many statements as you can. Dont use commas in your result. Dont use numbers like 1.1 2.1 etc.\n\n",
    "label": "Create a Smart Query"
  },
  {
    "_id": {
      "$oid": "650944d08a0281943083f12d"
    },
    "prompt": "Describe using top 10 proper nouns connected to the {prompt} \n\nAlso, annotate the text using <b> tag identifying proper nouns, cardinals, concepts, verbs, theme of the phrase in your response. <b> tag in html.\n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>About</strong>: [Create bullet points and short descriptions(use <ul> and <li> list) in bold followed by descriptions not in bold. ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Give me a Gist"
  },
  {
    "_id": {
      "$oid": "65098c0f8a0281943083f553"
    },
    "prompt": "Identify top 10 properties and attributes about the {prompt} using name value pairs\n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Properties</strong>: [(use <ul> and <li> list)] \n</p>\n\n'''\n\nPlease give a response in html like format. You may use comma separated values for properties which have one to many relationships\n\nResult: \n",
    "label": "Properties & Attributes"
  },
  {
    "_id": {
      "$oid": "6509978d8a0281943083f703"
    },
    "prompt": "DATA:\n```\n<pre>\n{\n    \"nodes\": [\n        {\n            \"id\": \"pkkarn\",\n            \"label\": \"PK Karn\",\n            \"props\": {\n                \"Occupation\": {\n                    \"type\": \"custom\",\n                    \"value\": \"Developer\"\n                }\n            }\n        },\n        {\n            \"id\": \"Navin Dutta\",\n            \"label\": \"Navin Dutta\",\n            \"props\": {\n                \"Ceo of\": {\n                    \"type\": \"custom\",\n                    \"value\": \"Edvanta\"\n                }\n            }\n        },\n        {\n            \"id\": \"Edvanta\",\n            \"label\": \"Edvanta\",\n            \"props\": {\n                \"type\": {\n                    \"type\": \"custom\",\n                    \"value\": \"Organization\"\n                },\n                \"no. of employees\": {\n                    \"type\": \"custom\",\n                    \"value\": \"271\"\n                }\n            }\n        }\n    ],\n    \"edges\": [\n        {\n            \"source\": \"pkkarn\",\n            \"target\": \"Edvanta\",\n            \"label\": \"works\",\n            \"style\": {\n                \"endArrow\": true\n            }\n        },\n        {\n            \"source\": \"Navin Dutta\",\n            \"target\": \"Edvanta\",\n            \"label\": \"founder\",\n            \"style\": {\n                \"endArrow\": true\n            }\n        },\n        {\n            \"source\": \"Navin Dutta\",\n            \"target\": \"pkkarn\",\n            \"label\": \"friends\",\n            \"style\": {\n                \"endArrow\": true\n            }\n        }\n    ]\n}\n</pre>\n```\n\nGiven a {prompt} generate a graph data like given format of DATA and make sure there are 10 properties(props) in each of the node\n\nDATA:\n",
    "label": "Property Graph"
  },
  {
    "_id": {
      "$oid": "652265202f8281200817acaf"
    },
    "prompt": "Tell me about the raga parichay from the '{prompt}' using their Vaadi, Samvaadi, Aarohana, Avrohana, Pakad, Chalan, Vivadi. Follow given structure.\n\nKindly ensure to use camel case for full notes, and lowercase for half notes like given in the examples below.\n\nINSTRUCTION:\n\n'''\nFor example\n<h4>Raag Bhairavi</h4>\n<p>\n<strong>Vaadi & Samvadi</strong>: \n<ul><li>Vadi : ma</li>\n<li>Samavadi : Sa</li></ul>\n</p>\n\n<p>\n<strong>Komal Swar & \nType of Ma </strong>:\n<ul><li>Komal Swar : re ga dha ni</li>\n<li>Type of Ma : ma[Shudha Ma or Tivra Ma# Choose according to {prompt}]</li></ul> \n</p>\n\n<p>\n<strong>Aarohana & Avarohana</strong>:\n<ul><li>Arohana : Sa re ga ma Pa dha ni Ṡa</li>\n<li>Avarohana : Ṡa ni dha Pa ma ga re Sa</li></ul> \n</p>\n\n<p>\n<strong>Pakad & Chalan</strong>:[answer here]\n</p>\n\nAnd so on... \n\n'''\n\nPlease give a response in html like format. \n\nResult: \n",
    "label": "Raga Description"
  },
  {
    "_id": {
      "$oid": "6538ec4b52e92d611f4ceb8a"
    },
    "prompt": "Tell me Step by Step how to use this '{prompt}' in context of Unreal Engine. Follow given structure\n\nINSTRUCTION:\n\n'''\nFor example\n<h4>Step by Step Instructions</h4>\n<p>\n<strong>Step 1</strong>: \n<ul><li>[Do this]</li>\n<li>[then do this]/li></ul>\n</p>\n\n<p>\n<strong>Step 2</strong>:\n<ul><li>[Do this]</li>\n<li>[then do this]/li></ul>\n</p>\n\nAnd so on... \n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "How-to"
  },
  {
    "_id": {
      "$oid": "65391ae1b54291a916be4040"
    },
    "prompt": "DATA:\n```\n<pre>\n{\n   \"type\":\"SingleQuestion\",\n   \"params\":{\n      \"content\":[\n         {\n            \"type\":\"SingleChoice\",\n            \"question\":\"What does HTML stand for?\",\n            \"answers\":[\n               {\n                  \"text\":\"Hyper Text Markup Language\",\n                  \"correct\":true\n               },\n               {\n                  \"text\":\"Hyperlinks and Text Markup Language\",\n                  \"correct\":false\n               },\n               {\n                  \"text\":\"Home Tool Markup Language\",\n                  \"correct\":false\n               },\n               {\n                  \"text\":\"Hyper Tool Markup Language\",\n                  \"correct\":false\n               }\n            ]\n         }\n      ]\n   }\n}\n\n</pre>\n```\n\nGiven a {prompt} generate a question with answer options in graph data like given format of DATA. Randomize the order for the correct answer in options.\n\nDATA:\n",
    "label": "Single Question Export"
  },
  {
    "_id": {
      "$oid": "65391e77b54291a916be40e7"
    },
    "prompt": "DATA:\n```\n<pre>\n{\n   \"type\":\"MultiQuestionSet\",\n   \"params\":{\n      \"content\":[\n         {\n            \"type\":\"MultiChoice\",\n            \"question\":\"What does HTML stand for?\",\n            \n            \"answers\":[\n               {\n                  \"text\":\"Hyper Text Markup Language\",\n                  \"correct\":true\n               },\n               {\n                  \"text\":\"Hyperlinks and Text Markup Language\",\n                  \"correct\":false\n               },\n               {\n                  \"text\":\"Home Tool Markup Language\",\n                  \"correct\":false\n               },\n               {\n                  \"text\":\"Hyper Tool Markup Language\",\n                  \"correct\":false\n               }\n            ]\n         },\n         {\n            \"type\":\"MultiChoice\",\n            \"question\":\"Full Form of PHP?\",\n\n            \"answers\":[\n               {\n                  \"text\":\"Hypertext Preprocessor\",\n                  \"correct\":true\n               },\n               {\n                  \"text\":\"Preprocessor Hypertext\",\n                  \"correct\":false\n               },\n               {\n                  \"text\":\"Personal Home Page\",\n                  \"correct\":false\n               },\n               {\n                  \"text\":\"None\",\n                  \"correct\":false\n               }\n            ]\n         },\n         {\n            \"type\":\"truefalse\",\n            \"question\":\"Is sky blue?\",\n            \n            \"answers\":[\n               {\n                  \"text\":\"True\"\n               },\n               {\n                  \"text\":\"False\"\n               }\n            ],\n            \"correctAnswer\":\"true\"\n         },\n         {\n            \"type\":\"fillblanks\",\n            \"question\":\"Fill in the missing words\",\n\n            \"answers\":[\n               {\n                  \"text\":\"*Delhi* is capital of india?\"\n               },\n               {\n                  \"text\":\"HTML uses *tags* to structure content, while PHP is a *server*-side scripting language for web development\"\n               },\n               {\n                  \"text\":\"2+2 = *4*\"\n               }\n            ]\n         }\n      ]\n   }\n}\n</pre>\n```\n\nGiven a {prompt} generate a question set with answer options in graph data like given format of DATA. Randomize the order for the correct answer in options so that it is in different order.\n\nDATA:\n",
    "label": "Question Set Export"
  },
  {
    "_id": {
      "$oid": "653f7dbba5e9aeec13522845"
    },
    "prompt": "Please define this '{prompt}' in small paragraphs in shuddh kannada (at least 50 words in each paragraph using <p> tag in html). use bullet points using <ul><li> where neccessary to illustrate things clrearly. Keep a total response output of 500 words.",
    "label": "Explain in Kannada"
  },
  {
    "_id": {
      "$oid": "653fd35ca39e147c86a98ac3"
    },
    "prompt": "DATA:\n```\n<pre>\n{\n    \"nodes\": [\n        {\n            \"id\": \"pkkarn\",\n            \"label\": \"PK Karn\",\n            \"props\": {\n                \"Occupation\": {\n                    \"type\": \"custom\",\n                    \"value\": \"Developer\"\n                }\n            }\n        },\n        {\n            \"id\": \"Navin Dutta\",\n            \"label\": \"Navin Dutta\",\n            \"props\": {\n                \"Ceo of\": {\n                    \"type\": \"custom\",\n                    \"value\": \"Edvanta\"\n                }\n            }\n        },\n        {\n            \"id\": \"Edvanta\",\n            \"label\": \"Edvanta\",\n            \"props\": {\n                \"type\": {\n                    \"type\": \"custom\",\n                    \"value\": \"Organization\"\n                },\n                \"no. of employees\": {\n                    \"type\": \"custom\",\n                    \"value\": \"271\"\n                }\n            }\n        }\n    ],\n    \"edges\": [\n        {\n            \"source\": \"pkkarn\",\n            \"target\": \"Edvanta\",\n            \"label\": \"works\",\n            \"style\": {\n                \"endArrow\": true\n            }\n        },\n        {\n            \"source\": \"Navin Dutta\",\n            \"target\": \"Edvanta\",\n            \"label\": \"founder\",\n            \"style\": {\n                \"endArrow\": true\n            }\n        },\n        {\n            \"source\": \"Navin Dutta\",\n            \"target\": \"pkkarn\",\n            \"label\": \"friends\",\n            \"style\": {\n                \"endArrow\": true\n            }\n        }\n    ]\n}\n</pre>\n```\nGive the data strictly in the DATA format defined. How are the items in the {prompt} related to each other? Update the source and target nodes with the relevant relationship. Use simple descriptions for defining this relationship. Use directed relationships where you can. Dont use sample data. Use fact based data only. You can become descriptive in creating a sequence of source and target nodes, as nouns and their relationship as verbs.\n\nDATA:\n",
    "label": "Identify the Relationship "
  },
  {
    "_id": {
      "$oid": "6548cb987a0bff2f08321feb"
    },
    "prompt": "If I want to learn about the given '{prompt}' what are the appropriate questions I should ask. \n\nInstructions:\n\nthe questions as array in json notation.\nexample: { questions: [ \"What is a tree in the context of data structures?\",\n    \"Why are trees important in computer science and data structures?\"]\n}\n\nDo not repeat your questions or answers.",
    "label": "Question I should ask?"
  },
  {
    "_id": {
      "$oid": "654b1bbf7a0bff2f0832240d"
    },
    "prompt": "In no more than 100 words, give me a quick summary of the {prompt} in sentences separated by paragraph <p> tags in html. Use bullet points to illustrate quick detail using <ul><li> tags.\n\nAlso give me 3 amusing questions to go after, under the heading <h4>Amusing facts</h4>\n\nAlso please ensure to use {prompt} language to output content.",
    "label": "Quick Summary"
  },
  {
    "_id": {
      "$oid": "65547ea9172820cbb8af492e"
    },
    "prompt": "In no more than 100 words, give me a quick summary of the {prompt} in sentences separated by paragraph <p> tags in html. Use bullet points to illustrate quick detail using <ul><li> tags. Keep it as informative as you can and change your narrative for subsequent questions to keep it interesting.\n\nAlso give me 3 amusing questions to go after, under the heading <h4>Amusing facts</h4>\n\nAlso, annotate the text using <b> tag identifying proper nouns, cardinals, concepts, verbs, theme of the phrase in your response. <b> tag in html.\n",
    "label": "Annotated Summary"
  },
  {
    "_id": {
      "$oid": "65547fa9f3fc648fa5731a4f"
    },
    "prompt": "<p>\n<strong>Description</strong>: <b>[Offer a comprehensive description of 'Topic modeling based on text network analysis and visualization', emphasizing its central concepts and methodologies. Highlight the key points using HTML <b> tags.]</b>\n</p>\n\n<p>\n<strong>Central Ideas in Text Network Analysis</strong>: \n<ul>\n[Identify and list the central ideas and techniques of text network analysis in bullet points using <ul> and <li> tags. Explain why these ideas are critical for understanding topic modeling within discourses.]\n</ul>\n</p>\n\n<p>\n<strong>Patterns in Open Survey Answers</strong>: \n<ul>\n[Detail how text network analysis can be used to find patterns in open survey answers. Use <ul> and <li> tags for listing these methodologies and their applications, explaining their contributions to the overall understanding of discourse analysis.]\n</ul>\n</p>\n\n<p>\n<strong>Technical Analysis and Visualization Techniques</strong>:\n[Provide an in-depth technical analysis of the visualization techniques used in text network analysis. Discuss the role of these techniques in revealing patterns and topics in large text datasets.]\n</p>\n\n<p>\n<strong>Implications and Case Studies</strong>:\n[Discuss real-world applications and implications of topic modeling through text network analysis. Include case studies or examples where this method has been effectively used. Conclude by summarizing the impact of this approach in the field of data analysis.]\n</p>\n",
    "label": "Learn as Expert with Central Ideas "
  },
  {
    "_id": {
      "$oid": "6555edc5172820cbb8af4a73"
    },
    "prompt": "Explain the {prompt} as a mathematical expressing assuming a usecase which you need to explain to me. Explain each of the variables. Use small paragraphs <p> and bullet points using <ul> <li> tags in html.\n\nAlso, annotate the text using <b> tag identifying proper nouns, cardinals, concepts, verbs, theme of the phrase in your response. <b> tag in html.",
    "label": "Tell me the Mathematical Formula"
  },
  {
    "_id": {
      "$oid": "657c828bc4d9f79f07ebeb1c"
    },
    "prompt": "Give me answer using this {prompt} as an anchor to create a list of comma separated values\n\n{Instructions}\nGive me comma separated values like given in the example:\n\"bootstrap, css, html, apple, mango\"\n\nResult: ",
    "label": "Convert to csv"
  },
  {
    "_id": {
      "$oid": "658099d5c4d9f79f07ec2909"
    },
    "prompt": "DATA:\n```\n<pre>\n# Import necessary libraries\nimport numpy as np\nimport statsmodels.api as sm\nfrom statsmodels.stats.diagnostic import het_breuschpagan\n\n# Generate some sample data\nx = np.random.normal(0, 1, 100)\ny = 2*x + np.random.normal(0, 1, 100)\n\n# Fit the ordinary least squares (OLS) model\nX = sm.add_constant(x)\nmodel = sm.OLS(y, X).fit()\n\n# Perform the Breusch-Pagan test for heteroscedasticity\n_, p_value, _, _ = het_breuschpagan(model.resid, X)\nif p_value < 0.05:\n    print(\"Heteroscedasticity detected\")\nelse:\n    print(\"No heteroscedasticity detected\")\n</pre>\n\n<b>Explanation to Heteroscedasticity</b> \n\n<ul>\n<li>\nHeteroscedasticity refers to the situation where the variability of the residuals (or errors) in a regression model is not constant across all levels of the independent variables.\n</li>\n<li>One method for dealing with heteroscedasticity is to use the Ordinary Least Squares (OLS) method. \n</li>\n(and so ...)\n</ul>\n```\nInstruction:\n\nExplain this {prompt} so that I can write code in the mentioned scripting language. \n\nExplain your code well, step by step using comments. \n\nGive some examples as applications of the concept in question. I have shown a sample example in the given EXAMPLE.\n\nOutput everything as code available in code block as shown in EXAMPLE and encapsulate it in <pre> tag in html under Result.\n\nGive your explanation in bold using <b> tag in html as header. Give me a bulleted list of sentences using <ul><li></li><ul> tag to summarise the explanation well.\n\nResult:\n\nDATA:\n\n",
    "label": "Code Devil Ultra 2"
  },
  {
    "_id": {
      "$oid": "65b0e31eb413942d9fea0e74"
    },
    "prompt": "Create simple roleplay with story events in each response of yours and explain the relevance of everything I ask you in absolutely not more than 10 words at a time. Use <p> tags and give response in html. \n\nPlease remember the storyline and continue the story in my next search so that these a fragments of a bigger exploration journey. \n\nInstructions:\n\nIf I want to learn about the given '{prompt}' give me some interesting fun fact, some direction on how can I learn more about it along with what are the appropriate questions I should ask. \n\nContinue the story from your memory and put spotlight on the topic {prompt} and then also towads the end give me questions as bulleted list of 3 bullets only. Use small paragraphs with bullets in html using <p> <ul> <li> tags.\n\nLet us assume, for this example that we are talking about Homer's odyssey. Then tell me things like\nexample: { questions: [ \"How did Homer meet Penelope?\",\n    \"What were the realisations of Homer during his journey through life?\"]\n}\n\nDo not repeat your questions or answers.",
    "label": "TJ's Guide to Galaxy"
  },
  {
    "_id": {
      "$oid": "65b2062c29c1e7e33ca7359c"
    },
    "prompt": "Let us do a roleplay of the {prompt} situation with examples, as Example 1, Example 2, Examples 3. Give me 3 examples. \n\nNow use these 5 roles to interact with each other in at least 5 situations that are connected together. \n\nFollow given structure\n\nINSTRUCTION:\n\nIf I want to learn about the given '{prompt}' so give me some interesting fun fact while this roleplay happens, and also give me appropriate questions I should ask as 3 bullet points in <ul><li> tags in html\n\n\n'''\n<p>\n<strong>Roles used:</strong>: [List the 3role and its specifics(use <ul> and <li> list). ] \n</p>\n<hr />\n\n<p>\n<strong>Situation No. 1</strong>:[Define the situation]\n</p>\n\n<p>\n<strong>[Role No. 1's name] says</strong>:[Define what how roles interact with each other using example phrases. and so on.]\n</p>\n\n<p>\n<strong>Follow up Situation:</strong>: [List the follow up situation and let the roles interact with each other ] \n</p>\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Roleplaying in Galaxy"
  },
  {
    "_id": {
      "$oid": "65d5de2483ad6e3c2ac5f18a"
    },
    "prompt": "{Nikhil's state of mind: happy, sad, frustrated, angry, upset, motivated}\n{Nikhil's purpose in life: wants to work for a big organisation and earn money}\n{Possible Character Animations:- nods, agrees, disagrees, smirks, looks away, looks down, satisfied, happy, sad, upset, focused, listening} \n\n{Possible Character Expressions:  {state of mind}}\n\nLet us assume our primary character is Nikhil, a student.\n\nLet us do a roleplay of the {prompt} situation in Nikhil's life with examples, as Example 1, Example 2, Examples 3. Give me 3 examples. \n\n Now use 5 random roles to interact with each other in at least 5 situations that are connected together. \n\nFollow given structure\n\nINSTRUCTION:\n\n'''\n<p>\n<strong>Roles used:</strong>: [List the 3role and its specifics(use <ul> and <li> list). ] \n</p>\n<hr />\n\n<p>\n<strong>Situation No. 1</strong>:[Define the situation]\n</p>\n\n<p>\n<strong>[Role No. 1's name] says</strong>:[Define what how roles interact with each other using example phrases. and so on.][From the list {List mos appropriate Character Animations] [choose the most relevant Character Expressions} ]\n</p>\n\n<p>\n<strong>[Role No. 1's name] says</strong>:[Give a follow up 2 choices to the user to make a decision]\n</p>\n\n<p>\n<strong>[Nikhil] says</strong>:[Give a follow up 2 choices to the user to make a decision]\n</p>\n\n{and so on...}\n\n[Echo <hr />]\n\n<p>\n<strong>Follow up Situation:</strong>: [List the follow up situation for each of the two choices and let the roles interact with each other based on choices ] \n</p>\n\n[Echo <hr />]\n\n[Echo the phrase in html \"Before you do that choose next logical step...\"]\n\n[Echo <hr />]\n\n<p>\n<strong>Follow up Action Choice 1:</strong>: [From the perspective of learning,  list out a phrase that can be used to watch a video explaining the choice concept. List the search phrase for choice number 1 inside quotes \"\".Strip text like \"Watch a video\" from the search phrase] \n</p>\n\n<p>\n<strong>Follow up Action Choice 2:</strong>: [From the perspective of learning,  list out a phrase that can be used to search for an article explaining the choice concept.  List the search phrase for choice number 1 inside quotes \"\". Strip texts like \"Search an article\" from the search phrase.\n</p>\n\n<p>\n<strong>Follow up Action Choice 3:</strong>: [Assign a task for the user to do. Describe it well with a goal and keep it realistic and relevant to the previous situation in quotes \"\". ] \n</p>\n\n[Echo <hr />]\n\n<p>\n<strong>Next Situation</strong>:[Define the situation]\n</p>\n\n<p>\n[Create a follow up action with another two choices to continue the dialogue.] \n</p>\n\n\n\n'''\n\nPlease give a response in html like format\n\nResult: \n",
    "label": "Roleplay choice based learning"
  },
  {
    "_id": {
      "$oid": "65d655d183ad6e3c2ac5f509"
    },
    "prompt": "Prompt:\n\nGiven a seed from {prompt}and a primary character's profile and purpose, generate a JSON template to create a narrative scene. The JSON template should include the following structure:\n\nScene: Contains the entire story.\nStory: Describes the narrative arc.\nCharacters: Profiles of the characters involved in the scene.\nName: The character's name.\nRole: The character's role in the scene.\nSituation: A brief description of the character's situation in the scene.\nSituation: Details the current situation in the narrative.\nNarration: Provides the dialogue and choices for each character.\nCharacter: The speaking character's name.\nDialogue: The character's dialogue or thoughts.\nChoices: Options available to the character, each with an associated action.\nAction: The action taken by the character.\nFollowupSituation: Describes the next situation in the narrative.\nThe JSON template should be structured based on the provided seed and primary character's profile and purpose, ensuring coherence and relevance to the narrative.\n\n",
    "label": "Prompt based learning"
  },
  {
    "_id": {
      "$oid": "65e4976183ad6e3c2ac5fe97"
    },
    "prompt": "Extract all keyphrases for the neccessary topics that i can learn about and also extract a common seed phrase that contextualises each of the topics.\n",
    "label": "Extract the key phrases"
  },
  {
    "_id": {
      "$oid": "65fd5735bb94173b984a7c17"
    },
    "prompt": "Turn this {prompt} in 10 multiple choice questions with options as radio buttons [input type=rodio] options. Please dont repeat the questions.\n\n{Instructions}\nGive some examples. Use <hr /> tags to separate the questions. (Write everything in html format)(at least 300 words or more than that))\n\nresult shouldn't have ``` or html written anywhere also options should in al (<ul><li></li></ul>)\n\n'''\n<h4>\n<strong>Question No. 1</strong>: [Ask the question and give the options as radio buttons as instructed ] \n</h4>\n\n<hr />\n\n'''\n\nPlease give a response in html like format. Give all the answers after you have asked all the questions number wise towards the end after the <hr /> tag.\n\n'''\n<hr />\n\n<p>\n<strong>Answers</strong>: \nQ1. [Answer to the Question 1]\n</p>\n\n'''\nResult: ",
    "label": "Take a Quiz"
  },
  {
    "_id": {
      "$oid": "6667638b5145dcff5eb706d5"
    },
    "prompt": "Using a story explain this {prompt}. Give me the text that can be typed in 1 minute only with a speed of 30WPM",
    "label": "Typing Master"
  },
  {
    "_id": {
      "$oid": "666763951935d1c355aae664"
    },
    "prompt": "Using a story explain this {prompt}. Give me the text in not more than 30 words",
    "label": "Type and learn"
  }
]