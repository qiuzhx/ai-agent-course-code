// import dotenv from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';

// dotenv.config();

// const model = new ChatOpenAI({ 
//     modelName: process.env.MODEL_NAME || "qwen-coder-turbo",
//     apiKey: process.env.OPENAI_API_KEY,
//     configuration: {
//         baseURL: process.env.OPENAI_BASE_URL,
//     },
// });

// const response = await model.invoke("介绍下自己");
// console.log(response.content);



// use anthropic
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { ChatAnthropic } from '@langchain/anthropic';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const model = new ChatAnthropic({
  model: process.env.MODEL_NAME,            // claude-opus-4-7[1M]
  apiKey: process.env.OPENAI_API_KEY,
  anthropicApiUrl: process.env.OPENAI_BASE_URL, // .../api/anthropic
});

const response = await model.invoke('介绍下自己');
console.log(response.content);
