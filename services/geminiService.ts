
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateNewBio = async (currentBio: string): Promise<string> => {
  const prompt = `You are an AI assistant for a game streamer. Based on the following profile, rewrite it to be more futuristic, cool, and engaging for a gaming audience. The new profile should be concise, around 2-3 sentences. Do not use hashtags. Here is the current profile: "${currentBio}"`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to communicate with the AI service.");
  }
};
