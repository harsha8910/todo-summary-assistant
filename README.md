Todo Summary Assistant

Todo Summary Assistant is a full-stack web application that helps users manage their tasks and receive intelligent summaries using Gemini AI. It features Slack notifications, Supabase database integration, and a clean React UI.


Features:
    1. Create, update and delete todos.
    2. AI-generated summaries using Gemini API.
    3. Data persistence with Supabase.
    4. Slack webhook integration for task updates.

Tech Stack:
    A. Frontend:
        1. React
        2. Axios
        3. Context API
    B. Backend:
        1. Node.js
        2. Express.js
        3. Supabase
        4. Gemini API (Google AI)
        5. Slack Webhooks
        6. dotenv

How to initialize the Project:
    Create a folder named with the project.
    Create two subfolders namely "frontend", "backend".

Setup the Frontend:
    In the terminal run the command "npx create-react-app ."
    Then run the command "npm install axios"

Setup the Backend:
    In the terminal run the command "npm init -y".
    Then run the command "npm install express cors dotenv axios @supabase/supabase-js @googlegenerative-ai"
    Then run the command "npm install --save-dev nodemon"

Prerequisites:
    Node.js.
    A supabase project with todos table.
    Google GEMINI API Key.
    Slack Webhook URL.

Supabase Setup:
    1. Go to "https://supabase.com" and signup.
    2. Create a new Project.
    3. Create a table with columns task(not null/primary, auto incremented), completed(bool).
    4. Go to Settings, find the APIs.
    5. Note the SUPABASE_URL, SUPABASE_ANON_KEY.
    6. Add them to .env.

Slack Webhook Setup:
    1. Go to Slack website, and create a channel.
    2. Go to "Slack Incomig Webhooks".
    3. Create a new webhook and select the channel you want to post in.
    4. Note the SLACK_WEBHOOK_URL.
    5. Add it to .env.

Gemini APi Setup:
    1. Go to "Google AI Studio", and signin with your Google account.
    2. Create a new API key.
    3. Note this GEMINI_API_KEY.
    4. Add it to .env.

How to run the Project:
    Get all the keys you need "SUPABASE_URL, SUPABASE_KEY, GEMINI_API_KEY, SLACK_WEBHOOK_URL".
    Run the backend by the command "npm run dev".
    Run the frontend by the command "npm start".


