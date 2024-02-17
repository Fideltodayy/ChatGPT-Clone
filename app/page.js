"use client";

import { useChat } from "ai/react";
import { useEffect } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const mongoSubmit = async () => {
    const response = await fetch("/api/chat/sendChats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "fidel@gmail.com", messages }),
    });
    const data = await response.json();
    console.log(data);
  };

  const sendChats = async (e) => {
    // e.preventDefault();
    handleSubmit(e);
    mongoSubmit();
  };

  // Function to fetch chats from teh server
  const fetchChats = async () => {
    const response = await fetch("/api/chat/getChats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data:", data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  // console.log(messages);
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "Fidel: "}
          {m.content}
        </div>
      ))}

      <form onSubmit={sendChats}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
