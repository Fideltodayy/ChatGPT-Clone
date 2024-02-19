"use client";

import { useChat } from "ai/react";
import { useEffect } from "react";
import { useRef } from "react";
import { IoSend } from "react-icons/io5";

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
    // console.log(data);
  };

  const sendChats = async (e) => {
    // e.preventDefault();
    handleSubmit(e);
    mongoSubmit();
  };

  const bottomRef = useRef();
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // To be implemented when the UI is ready to display conversations
  // Function to fetch chats from teh server
  // const fetchChats = async () => {
  //   const response = await fetch("/api/chat/getChats", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log("data:", data);
  // };

  // useEffect(() => {
  //   fetchChats();
  // }, []);
  // console.log(messages);
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <h1 className="text-2xl font-semibold text-blue-200 title">fidibot</h1>
        {/* Additional navbar content can go here */}
      </div>

      {/* Main content */}
      <div className="flex flex-grow">
        {/* Sidebar for recent conversations */}
        <div className=" hidden md:block w-64 border-r border-gray-600 p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Conversations</h2>
          {/* Prototype data for visualization */}
          <ul>
            <li className="mb-2">Chat 1</li>
            <li className="mb-2">Chat 2</li>
            {/* ... more chats */}
          </ul>
        </div>

        {/* Chat interface */}
        <div className="flex flex-col flex-grow p-4">
          <div className="flex-grow overflow-auto">
            {/* {chats.map((c) => (
        <div key={c.id} className="whitespace-pre-wrap">
          {c.messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "Fidel: "}
              {m.content}
              <div ref={bottomRef}></div>
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>
      ))} */}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`whitespace-pre-wrap ${
                  m.role === "user" ? "text-right" : ""
                }`}
              >
                <span
                  className="inline-block p-2 my-1 rounded bg-gray-800 shadow-slate-500 shadow-inner"
                  // className={`inline-block p-2 my-1 rounded ${
                  //   m.role === "user" ? "bg-blue-400" : "bg-blue-400"
                  // }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          <form onSubmit={sendChats} className="mt-4 ">
            <div className="w-full p-2 border border-gray-300 rounded shadow-md bg-gray-700 text-white flex">
              <input
                className="w-full p-2 bg-gray-700 text-white focus:outline-none"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-gray-900 p-2 rounded text-white"
              >
                <IoSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
