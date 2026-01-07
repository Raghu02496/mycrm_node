import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';

export async function chatWithAI(req, res){
    const { message } = request.body
    try {
        const ai = genkit({
        plugins: [googleAI()],
        model: googleAI.model('gemini-2.5-flash-lite', {
            temperature: 0.8,
            apiKey : process.env.GEMINI_API_KEY,
        }),
    });

    const res = await ai.generate(message)
    } catch (error) {
        
    }
}