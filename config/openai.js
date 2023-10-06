import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a new Configuration object with your OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAI API client using the configuration
const openai = new OpenAIApi(configuration);

// Export the OpenAI client instance for use in other parts of your application
export default openai;
