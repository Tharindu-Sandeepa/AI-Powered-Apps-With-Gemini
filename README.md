# Building AI-Powered Applications with GenAI

## What is Generative AI?

Generative AI refers to AI systems capable of creating human-like content, such as text, images, music, and more. These models, trained on large datasets, learn patterns and context to generate meaningful outputs.

## Gemini as a GenAI Tool

Developed by Google, Gemini is an advanced generative AI designed for tasks like essay writing, report generation, and content creation. With structured output and multimodal capabilities, it adapts to user prompts for precise results.

## Why Gemini?

Gemini excels in language understanding, following detailed instructions on style, tone, and length. This makes it ideal for enterprise use cases and task-specific applications. Plus, Gemini is **free to use**, making it accessible to everyone.

Integrating AI into your apps provides a competitive edge, solving complex problems with natural language understanding. Gemini API enables developers to easily incorporate Generative AI into projects.

## How to Get an API Key for Gemini (It’s Free)

1. Go to [Google AI Studio](https://ai.google.dev/) and sign up with your Google account.
2. Navigate to the API settings and click “Create a new API Key.”
3. Follow the steps to generate your API key.

## Implementing Gemini API in a React Application

Let’s walk through integrating Gemini API into a React app using REST.

### 1. Setting Up Your React Project

```bash
npx create-react-app gemini
cd gemini
```
## Install Axios for handling HTTP requests:

```bash
npm i axios
```
 Create a file named AI.js to handle communication with the Gemini API.

### 2. Sending Requests to Gemini API

 The endpoint for Gemini is specific to the model gemini-1.5-flash-latest. The API key is passed as a query parameter ?key=${API_KEY}.
	•	The requestBody object defines the user input sent to the model.
	•	The text field holds the actual input (prompt) for the Gemini AI.

### 3. Building the UI for Chatting with Gemini

In App.js, you can create a simple interface where users can ask questions and receive responses from Gemini AI. The user input is sent as a prompt, and the response is displayed on the UI.




