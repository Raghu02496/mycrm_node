import 'dotenv/config';
import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';

// Initialize Genkit with the Google AI plugin
const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model('gemini-2.5-flash-lite', {
    temperature: 0.8,
    apiKey : process.env.GEMINI_API_KEY,
  }),
});

const res = await ai.generate("Hello how are you, do u know my name")
console.log(res.text)