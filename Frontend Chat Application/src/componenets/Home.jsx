import axios from "../utils/axios";
import React, { useState } from "react";

function Home() {
  const [userDetails, setUserDetail] = useState({
    roomId: "",
    username: "",
  });

  function handleFormInputChange(event) {
    setUserDetail({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  }
  function isValidInput(value) {
    return value.trim() !== "";
  }

  function validation() {
    const { username, roomId } = userDetails;

    if (!isValidInput(username) || !isValidInput(roomId)) {
      alert("Please fill in both Username and Room ID.");
      return false;
    }

    return true;
  }

  function joinChat() {
    if (validation()) {
      // join the chat in the room
      console.log("Joining chat...");
    }
  }

  const createRoom = async () => {
    if (!validation()) return;

    try {
      console.log("Creating room with:", userDetails);
      const response = await axios.post("/api/v1/rooms", userDetails.roomId, {
        headers: {
          "Content-Type": "text/plain",
        },
      });

      console.log("Room created successfully:", response.data);
    } catch (error) {
      console.error(
        "Error creating room:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-950 flex justify-center items-center">
      <div className="w-[30vw] h-[50vh] bg-zinc-800 rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold ">Create Room...</h1>
        <div className="flex flex-col gap-3.5 mt-3 w-full p-10">
          <input
            className="text-2xl border p-4 px-6 rounded-2xl bg-zinc-600 focus:outline-none text-amber-50 border-zinc-800 focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter the name"
            onChange={handleFormInputChange}
            value={userDetails.username}
            name="username"
            id="name"
          />
          <input
            className=" text-2xl border p-4 px-6 rounded-2xl bg-zinc-600 focus:outline-none text-amber-50 border-zinc-800 focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter the Room ID"
            onChange={handleFormInputChange}
            value={userDetails.roomId}
            name="roomId"
            id="roomId"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={createRoom}
            className="py-4 px-8 rounded-2xl bg-blue-500 text-white font-bold"
          >
            Create Room
          </button>
          <button
            onClick={joinChat}
            className="py-4 px-8 rounded-2xl bg-red-500 text-white font-bold"
          >
            Join the Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
