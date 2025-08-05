import React, { useState } from "react";

function ChatRoom() {
  const [message, setMessages] = useState([
    {
      sender: "Rahul",
      content: "Welcome to the group",
    },
    {
      sender: "venky",
      content: " to the group",
    },
    {
      sender: "Dhrvu",
      content: "Welcome to the group",
    },
    {
      sender: "alok",
      content: "Welcome to the ",
    },
  ]);

  const [currentUser, setCurrentUser] = useState([
    {
      sender: "Rahul",
      content: "Welcome to the group",
    },
    {
      sender: "venky",
      content: " to the group",
    },
    {
      sender: "Dhrvu",
      content: "Welcome to the group",
    },
    {
      sender: "alok",
      content: "Welcome to the ",
    },
    {
      sender: "Rahul",
      content: "Welcome to the group",
    },
    {
      sender: "venky",
      content: " to the group",
    },
    {
      sender: "Dhrvu",
      content: "Welcome to the group",
    },
    {
      sender: "alok",
      content: "Welcome to the ",
    },
    {
      sender: "Rahul",
      content: "Welcome to the group",
    },
    {
      sender: "venky",
      content: " to the group",
    },
    {
      sender: "Dhrvu",
      content: "Welcome to the group",
    },
    {
      sender: "alok",
      content: "Welcome to the ",
    },
  ]);

  return (
    <div className="w-full h-screen bg-zinc-950">
      <header className="flex pt-4 text-white text-2xl px-20 h-20  justify-between items-center">
        <h1>Room Name or Id</h1>
        <h1>User : venkatesh </h1>
        <button className="py-4 px-8 rounded-2xl bg-red-500 text-white font-bold">
          Leave Room
        </button>
      </header>

      {/* main chat box */}
      <div className="bg-zinc-700 w-[70%] mx-auto h-[80vh] p-4 px-70 space-y-4 overflow-y-auto">
        {/* Left aligned message (Receiver) */}
        {message.map((msg, i) => (
          <div
            key={i}
            className="flex flex-col items-start max-w-[70%] text-xl"
          >
            <label className="text-white mb-1">{msg.sender}</label>
            <span className="bg-blue-700 text-white px-4 py-2 rounded-xl">
              {msg.content}
            </span>
          </div>
        ))}

        {currentUser.map((msg, i) => (
          <div key={i} className="flex flex-col items-end max-w-[70%] ml-auto text-xl">
            <label className="text-white mb-1">{msg.sender}</label>
            <span className="bg-green-700 text-white px-4 py-2 rounded-xl text-right">
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="h-24 w-[70%] mx-auto flex items-center gap-4">
        <input
          className="text-xl w-full h-16 border px-6 rounded-2xl bg-zinc-700 text-amber-50 placeholder:text-amber-200 border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter the Message"
          name="roomId"
          id="roomId"
        />
        <button
          type="button"
          aria-label="Send"
          className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition"
        >
          <i className="ri-send-plane-2-fill text-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
