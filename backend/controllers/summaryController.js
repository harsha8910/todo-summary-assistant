// controllers/summaryController.js
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const axios = require('axios')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// controllers/summaryController.js

const summarizeTodos = async (req, res) => {
  try {
    const { todos } = req.body;

    if (!Array.isArray(todos) || todos.length === 0) {
      return res.status(400).json({ message: "Todos list is empty or invalid." });
    }

    const prompt = `Here are my todos:\n\n${todos.map((t, i) => `${i + 1}. ${t.title} - ${t.completed ? "Done" : "Pending"}`).join("\n")}\n\nGive a summary of what I have done and what is pending. Dont use any bold letters`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    let slackSuccess = false;

    if (response && SLACK_WEBHOOK_URL) {
      try {
        await axios.post(SLACK_WEBHOOK_URL, {
          text: `📝 *Todo Summary:*\n${response}`,
        });
        slackSuccess = true;
      } catch (err) {
        console.error("Slack webhook error:", err.message);
      }
    }

    res.status(200).json({ summary: response, slackSent: slackSuccess });

  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ message: "Failed to summarize todos." });
  }
};


module.exports = { summarizeTodos };