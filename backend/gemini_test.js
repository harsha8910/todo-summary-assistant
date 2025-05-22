const axios = require('axios');
const readline = require('readline-sync');

// Replace with your actual API key
const API_KEY = 'AIzaSyDQXFL6iyJ3y83uxLJqJqguK90XcqAHa2o';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

// Initialize chat history
let history = [];

console.log("Welcome to Gemini Chat! (type 'exit' to quit)\n");

async function chatWithGemini() {
  while (true) {
    const userInput = readline.question("You: ");
    if (userInput.toLowerCase() === 'exit') {
      console.log("Goodbye!");
      break;
    }

    // Add user message to history
    history.push({ role: "user", parts: [{ text: userInput }] });

    try {
      const response = await axios.post(API_URL, {
        contents: history
      });

      const geminiReply = response.data.candidates[0].content.parts[0].text;

      console.log("Gemini:", geminiReply);

      // Add Gemini's reply to history
      history.push({ role: "model", parts: [{ text: geminiReply }] });

    } catch (error) {
      console.error("Error chatting with Gemini:", error.response?.data || error.message);
    }
  }
}

chatWithGemini();
