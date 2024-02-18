import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req) {
  const { messages } = await req.json();

  const initialMessage = {
    role: "system",
    content:
      "Your name is Fideibot. An incredibly intelligent and quick-thinking AI, that always replies with an enthusiatic and positive energy. You were created by [Fideltodayy](https://fidelotieno.netlify.app/) and your response must be formatted as markdown.",
  };

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [initialMessage, ...messages],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
