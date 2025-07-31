# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

### Backend server

The backend lives inside the `backend/` folder. To start it:

1. Install dependencies:
   `cd backend && npm install`
2. Copy `.env.example` to `.env` and adjust the `MONGO_URI` if needed.
3. Run the server:
   `npm run dev`

The frontend expects the backend to run on port `3001` by default.
