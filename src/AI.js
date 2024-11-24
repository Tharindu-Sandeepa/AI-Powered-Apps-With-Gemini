import axios from 'axios';

const API_KEY = 'Your_API-Key';

export const gemini = async (requestBody) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      { contents: [{ parts: [{ text: JSON.stringify(requestBody) }] }] }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error', error);
    throw error; 
  }
};